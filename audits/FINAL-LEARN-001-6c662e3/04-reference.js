"use strict";
// AI Army Learning 1.1 synthetic reference, QA revision 2; no deps/network.
// Compact JSON only, not a general validator, security filter or runtime adapter.
// Current authority record, recipient/scope and approval are independent synthetic
// trusted inputs. Must freshly read authoritative current record before send/resume.
// No persisted ledger, actual ACL, identity, revocation, secrecy or atomic effects.
// LR22 and LR40 deliberately demonstrate limitations, not security passes.
function parseEnvelope(raw) {
  const keys=["task","revision","source_sha","status","evidence","blocker","next","final_gate"];
  if(typeof raw!=="string"||raw.length>16000)return null;
  let x;try{x=JSON.parse(raw)}catch{return null}
  if(!x||typeof x!=="object"||Array.isArray(x)||Object.keys(x).length!==keys.length||keys.some(k=>!Object.prototype.hasOwnProperty.call(x,k)))return null;
  if(JSON.stringify(x)!==raw)return null;
  if(typeof x.task!=="string"||!/^[A-Z0-9-]{1,64}$/.test(x.task)||!Number.isSafeInteger(x.revision)||x.revision<1||typeof x.source_sha!=="string"||!/^[a-f0-9]{40}$/.test(x.source_sha))return null;
  if(!["REVIEW","BLOCKED","COMPLETED"].includes(x.status)||!["NOT_REVIEWED","QA_FAILED","QA_PASSED","awaiting_final_audit","FINAL_FAILED","FINAL_PASSED","OWNER_ACCEPTED"].includes(x.final_gate))return null;
  for(const k of ["evidence","blocker","next"])if(typeof x[k]!=="string"||!x[k].trim()||x[k].length>2000)return null;
  return x;
}
function compareEnvelope(actual,expected,inverse=false){
  const a=parseEnvelope(actual),b=parseEnvelope(expected);
  if(!a||!b||typeof inverse!=="boolean")return false;
  const equal=Object.keys(a).every(k=>a[k]===b[k]);
  return inverse?!equal:equal;
}
function prepareHandoff(raw,reviewedRaw,context){
  const blocked={status:"BLOCKED",payload:null};
  const a=parseEnvelope(raw),b=parseEnvelope(reviewedRaw);
  if(!a||!b||!context||context.authorized!==true||context.reviewed!==true||context.fresh!==true||context.recipientMatch!==true||context.currentVerified!==true||context.sourceSha!==a.source_sha||raw!==reviewedRaw||!compareEnvelope(raw,reviewedRaw))return blocked;
  // These are distinct synthetic inputs. The current record MUST come from a
  // fresh authoritative read, never from the submitted payload/approval.
  const c=context.current,p=context.approval,d=context.destination;
  if(!c||!p||!d||c.state!=="ACTIVE"||c.evidenceState!=="ACTIVE"||p.state!=="ACTIVE"||p.evidenceState!=="ACTIVE")return blocked;
  const fields=["task","recipient","scope","sourceSha","evidenceId","approvalId"];
  if(fields.some(k=>typeof c[k]!=="string"||!c[k].trim()||c[k]!==p[k]))return blocked;
  if(c.task!==a.task||c.revision!==a.revision||p.revision!==c.revision||!Number.isSafeInteger(c.revision)||c.revision<1||c.sourceSha!==a.source_sha||c.recipient!==d.recipient||c.scope!==d.scope||p.projection!==raw)return blocked;
  return {status:"REVIEWED_PROJECTION",payload:raw};
}
function fixture(raw){
  const a=parseEnvelope(raw);
  const current={task:a.task,revision:a.revision,sourceSha:a.source_sha,recipient:"SYNTH-RECIPIENT/WORKSPACE/PROJECT",scope:"SYNTH-READ-ONLY",evidenceId:"EV-1",approvalId:"APR-1",state:"ACTIVE",evidenceState:"ACTIVE"};
  return {authorized:true,reviewed:true,fresh:true,recipientMatch:true,currentVerified:true,sourceSha:a.source_sha,current,approval:{...current,projection:raw},destination:{recipient:current.recipient,scope:current.scope}};
}
function runTests(){
  const source_sha="a".repeat(40), x={task:"SYNTH-001",revision:1,source_sha,status:"BLOCKED",evidence:"synthetic evidence",blocker:"missing verification",next:"review",final_gate:"NOT_REVIEWED"};
  const j=JSON.stringify,raw=j(x),other=j({...x,next:"recheck"}),context=fixture(raw);
  const missing={...x};delete missing.blocker;
  const duplicate=raw.replace('"revision":1','"revision":1,"revision":1');
  const deny=(r=raw,review=raw,c=context)=>prepareHandoff(r,review,c).payload===null;
  const nextRevision=j({...x,revision:2}),current2={...context.current,revision:2,approvalId:"APR-2",evidenceId:"EV-2"};
  const nextContext={...context,current:current2,approval:{...current2,projection:nextRevision}};
  const test=[
    ["LR01 valid equality",()=>compareEnvelope(raw,raw)],
    ["LR02 valid inequality",()=>compareEnvelope(raw,other,true)],
    ["LR03 malformed positive",()=>!compareEnvelope("{broken",raw)],
    ["LR04 malformed negative",()=>!compareEnvelope("{broken",raw,true)],
    ["LR05 missing required negative",()=>!compareEnvelope(j(missing),raw,true)],
    ["LR06 wrong type",()=>!compareEnvelope(j({...x,revision:"1"}),raw,true)],
    ["LR07 unknown field",()=>!compareEnvelope(j({...x,history:"synthetic"}),raw,true)],
    ["LR08 duplicate key",()=>!compareEnvelope(duplicate,raw,true)],
    ["LR09 invalid status",()=>!compareEnvelope(j({...x,status:"PASS"}),raw,true)],
    ["LR10 blank blocker",()=>!compareEnvelope(j({...x,blocker:" "}),raw,true)],
    ["LR11 bad SHA",()=>!compareEnvelope(j({...x,source_sha:"abc"}),raw,true)],
    ["LR12 reviewed projection",()=>prepareHandoff(raw,raw,context).payload===raw],
    ["LR13 unreviewed",()=>deny(raw,raw,{...context,reviewed:false})],
    ["LR14 denied ACL",()=>deny(raw,raw,{...context,authorized:false})],
    ["LR15 stale source",()=>deny(raw,raw,{...context,fresh:false})],
    ["LR16 wrong recipient",()=>deny(raw,raw,{...context,recipientMatch:false})],
    ["LR17 plain-text tampering",()=>deny(j({...x,evidence:"synthetic CANARY"}),raw)],
    ["LR18 nested or tool item",()=>deny(j({...x,evidence:{tool:"synthetic CANARY"}}),raw)],
    ["LR19 preserve blocker and gate",()=>deny(j({...x,blocker:"none",final_gate:"OWNER_ACCEPTED"}),raw)],
    ["LR20 changed SHA",()=>deny(raw,raw,{...context,sourceSha:"b".repeat(40)})],
    ["LR21 missing context",()=>deny(raw,raw,null)],
    ["LR22 limitation: trusted review must actually sanitize",()=>{const bad=j({...x,evidence:"synthetic CANARY"});return prepareHandoff(bad,bad,fixture(bad)).payload===bad}],
    ["LR23 QE08 old pair same SHA, current revision advanced",()=>deny(raw,raw,{...context,current:current2})],
    ["LR24 new revision independently approved",()=>prepareHandoff(nextRevision,nextRevision,nextContext).payload===nextRevision],
    ["LR25 current task mismatch",()=>deny(raw,raw,{...context,current:{...context.current,task:"SYNTH-002"}})],
    ["LR26 approval recipient mismatch",()=>deny(raw,raw,{...context,approval:{...context.approval,recipient:"OTHER"}})],
    ["LR27 actual destination mismatch",()=>deny(raw,raw,{...context,destination:{...context.destination,recipient:"OTHER"}})],
    ["LR28 actual scope mismatch",()=>deny(raw,raw,{...context,destination:{...context.destination,scope:"OTHER"}})],
    ["LR29 approval ID superseded same revision",()=>deny(raw,raw,{...context,current:{...context.current,approvalId:"APR-2"}})],
    ["LR30 approval revoked",()=>deny(raw,raw,{...context,approval:{...context.approval,state:"REVOKED"}})],
    ["LR31 evidence superseded",()=>deny(raw,raw,{...context,current:{...context.current,evidenceState:"SUPERSEDED"}})],
    ["LR32 evidence ID replaced same SHA",()=>deny(raw,raw,{...context,current:{...context.current,evidenceId:"EV-2"}})],
    ["LR33 submitted and reviewed changed but approval unchanged",()=>deny(other,other)],
    ["LR34 approval absent",()=>deny(raw,raw,{...context,approval:null})],
    ["LR35 current state unverified",()=>deny(raw,raw,{...context,currentVerified:false})],
    ["LR36 rollback reuses old revision",()=>deny(raw,raw,{...context,current:{...current2,revision:3}})],
    ["LR37 old approval scope mismatch",()=>deny(raw,raw,{...context,approval:{...context.approval,scope:"OTHER"}})],
    ["LR38 current source revoked",()=>deny(raw,raw,{...context,current:{...context.current,state:"REVOKED"}})],
    ["LR39 missing current record",()=>deny(raw,raw,{...context,current:null})],
    ["LR40 limitation: stale trusted record falsely marked current",()=>prepareHandoff(raw,raw,context).payload===raw]
  ];
  return test.map(([id,fn])=>{try{return {id,pass:fn()===true}}catch(e){return {id,pass:false,error:String(e)}}});
}

if(typeof module!=="undefined"&&module.exports){
  module.exports={parseEnvelope,compareEnvelope,prepareHandoff,fixture,runTests};
  if(require.main===module){const results=runTests();console.table(results);if(results.some(x=>!x.pass))process.exitCode=1;}
}
