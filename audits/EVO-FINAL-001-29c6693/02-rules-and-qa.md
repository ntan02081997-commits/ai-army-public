# EVO-FINAL-001 rev.2 — Phần 2/2: chỉ thị, quy chuẩn và bằng chứng QA

## 1. Chỉ thị cho Claude
Candidate: 29c66936df62e97078fda0b6dc81da30a745b228
Original base: 851cbacf0eb1a14533b1122d7ae64cff866fac31
Official main: b39d41d25a71c0d54c0170e6d500ca160aebeace
Read BOTH files: part 1 candidate sources/diff, part 2 instructions/baseline rules/evidence. Owner explicitly approved preparation on 2026-11-27; manual transfer by owner. Director AS-AI-00, Personal workspace / AnSpace AI Agent / Chat. Claude external final independent reviewer, not a ChatGPT Business workspace, actual access/environment/quota unverified. No additional account, paid tools, external retrieval, ACL change, edit, install, merge or deployment. Manual B only, C OFF. 
Previous Claude review at 9c9d5fad26331725c9ad99649b4e6b4f1a79f2f6: PARTIAL_REVIEW, not FINAL_PASS. This is a new frozen SHA after QA repair. Scope is design and manual-B synthetic reference, not production runtime. Read exact sources, inspect historical and current evidence, reproduce tests only if existing offline Node is available and authorized. No dependency install. Distinguish independently inspected/executed, coordinator-forwarded evidence and unverified claims. SHA-1 Git blob header plus UTF-8 bytes; for exact fenced file contents extract body, preserve terminal LF per manifest. Do not claim direct private HEAD or original hash on redacted projection. Historical QA stdout is from GitHub reports, not a complete signed runtime trace. Do not treat user_attested as platform authentication.
F01: candidate manifest, 1.1 preservation and actual main compatibility; F02: project scope and evidence/identity of instincts, seed limits; F03: minimal receipt/retrospective, current evidence and supersession; F04: P-02/P-03/P-07 fixes, safe total and collision limits, QA tests; F05: matched-pair preregistration, all pair/effort metrics, unknowns/tradeoff handling; F06: no autonomous promotion, runtime/efficacy claims; F07: QA/Claude/Owner gates, privacy/authority, B only, zero cost; F08: completeness of mandatory evidence and unresolved blockers. Report each PASS/FAIL/NOT_VERIFIED with source path/section/line, expected, actual and limitations. Overall FINAL_PASS only if evidence covers all mandatory gates within stated manual-B design scope; otherwise PARTIAL_REVIEW or FINAL_FAILED. If redaction removes material evidence, mark NOT_VERIFIED and request minimum additional source, do not waive. No authority to release or change sources.

## 2. P-01–P-09 reconciliation for this audit
- P-01: 8 candidate files and LR, baseline 1.1 full skill, governance references and diff now included across the two parts; two candidate documents and governance have redactions. Original private project artifacts, account roster, unrelated source registers, full raw transcripts and credentials withheld. No direct GitHub access for Claude. Assess limitations explicitly.
- P-02: effort_ms replaces seconds in candidate, nonnegative integer totals bounded by MAX_SAFE_INTEGER; legacy seconds/fractional values rejected, no silent rounding. P-03: existing num checks finite and >=0, explicit tests.
- P-04: 154 prior suite = 78 rerun +76 retained; 13 additional edge cases = 91 evaluations reported executed then, 167 covered results, not real independent tasks. Rev.4 recovered historical 13 stdout lines. See receipt 7218395004.
- P-05: base→main and base→candidate have 3 and 8 changed paths respectively, no overlap. Candidate not rebased; main advanced 7 commits, candidate 25. Three-dot diff is merge-base diff. No claim actual merge performed. Verify 1.1 and current Core compatibility.
- P-06: reference emits all metric deltas and unknowns on REVIEW_SIGNAL; manual reviewer must evaluate tradeoffs against preregistered limits. Material unapproved tradeoff INCONCLUSIVE, no overall efficiency claim. Reference does not automatically resolve tradeoffs.
- P-07: same project/kind unequal task spellings after whitespace removal + uppercase produce HOLD_CONFLICT before counts; actual task revision not skill revision. Strict boolean. Same-revision different skill groups separate. U+200B documented limit, not whitespace under ECMAScript; semantic aliases and provenance still require authoritative manual review. Never treat reference as authenticating ID. 
- P-08: compare exact reference and test definitions; independent QA Node VM, synthetic fixtures, separately authored edges and historical failures. QA evidence supplied as reported excerpts, not signed machine trace. 
- P-09: effort_ms is sum of actor effort, not wall-clock latency. 
Current rev.5: 177 suite coverage = SH50 actually rerun +127 unchanged LR40/EL36/EV51 independently assessed from rev4; 10 additional edge tests incl R5-S10 limitation. 60 checks reported executed in rev5, not 187 independent real tasks. Real runtime, actual ACL verification by reference, matched real A/B, real efficacy/token savings NOT_RUN. Historical candidate labels retained to preserve audited content.

## 3. Baseline and current rules manifest
| Path | Ref | Original Git blob | Content | Final LF |
|---|---|---|---|---|
| governance/ACCEPTANCE-LEARNING-1.1.md | 851cbacf0eb1a14533b1122d7ae64cff866fac31 | 6ccba9cf40aa24c37c5c841519188cb00e44fe0b | EXACT | yes |
| knowledge/LESSONS.md | 851cbacf0eb1a14533b1122d7ae64cff866fac31 | bd3de8136832aa67296fa9680443265405406e1b | EXACT | yes |
| VERSION | b39d41d25a71c0d54c0170e6d500ca160aebeace | bb576dbde10fdad22759c170d482813d5e873c1e | EXACT | yes |
| CORE.md | b39d41d25a71c0d54c0170e6d500ca160aebeace | eb842208ab623b2b4e55bb8f9ae8ee8fdfc61f1e | REDACTED | yes |
| AGENTS.md | b39d41d25a71c0d54c0170e6d500ca160aebeace | 8c7b1b4325f44f41439cf22a2433ba86a4091831 | EXACT | yes |
| CHANGELOG.md | b39d41d25a71c0d54c0170e6d500ca160aebeace | 2b074bf4175d32b0d0a14f98e6c7f7d6fd983719 | EXACT | yes |
| governance/AI-ARMY-3.1.md | b39d41d25a71c0d54c0170e6d500ca160aebeace | 514882e2767d7ab1054f71da807e632d5e91bba2 | REDACTED | yes |
| skills/ai-army-token-optimizer/SKILL.md | b39d41d25a71c0d54c0170e6d500ca160aebeace | 7a1a3b0d985dab6c72cd867010cf9dc9e1caaf9a | EXACT | yes |
| templates/handoff.md | b39d41d25a71c0d54c0170e6d500ca160aebeace | e963623688b62ffee364d5910eaa05c47622d07b | EXACT | yes |
Redaction: repository locator/owner, account emails/login, private Drive links, governance identity and unrelated member status. No roster file, actual credentials, full raw chats, student data or project raw artifacts. Technical rules retained; original hash of redacted text cannot be verified from packet. Existing approval is for this packet preparation, not releasing source more widely. 

## 4. Source bodies

### governance/ACCEPTANCE-LEARNING-1.1.md — 851cbacf0eb1a14533b1122d7ae64cff866fac31
Original Git blob 6ccba9cf40aa24c37c5c841519188cb00e44fe0b, EXACT, final LF yes.

````text
# Acceptance — Learning & Evolution 1.1 / Token Optimizer 1.2 candidate
User authorized consolidation of PR5 only. Core official 2.3 / Governance 3.1 main 459f53b60f7e0728103ae129c46b15ba4d8ccddc unchanged. No runtime, install, merge, new cost or Level C. Candidate is not official. Reference Git blob hiện hành ef7ea87b450346ea9c0de082c12aa1ae7c74b739. Blob lịch sử rev.1 df9dfcd0e9fe6e8b4843b2de32460626a8a20b49.
## Gates
EVO01–EVO10 in learning skill remain mandatory; QA independent, Claude final, owner approval exact final SHA. Distinguish source/content evidence from application evidence; 10 videos PARTIAL_READ, 0/10 speech verified; source review HOLD remains backlog, not a release of the source claims. Source pin/README/license evidence alone does not prove full dependency security or operation. Learning method may be reviewed separately in manual B, not upstream integration. PR4 prior QA is not QA for PR5.
## Regression reference
Run from repo root on existing Node: `node reference/learning-regression.js` (no dependency install). If Node unavailable, NOT_RUN; do not install. Verify final candidate and exact blob first. Historical rev.1: 22 author checks executed in Code Mode V8 using exact function bodies serialized into reference file and readback verified. No Node CLI invocation, no upstream package execution, not independent QA. Test 22 is a negative capability demonstration: bad trusted review can leak, not proof of security. Actual authorization/content review required; no real data, no API. Strict compact JSON only; whitespace and duplicate keys rejected by roundtrip; schema is small synthetic model, not canonical task envelope.
| ID | Expected | Author observed |
|---|---|---|
| LR01 valid equality | Check predicate true per fixture | PASS |
| LR02 valid inequality | Check predicate true per fixture | PASS |
| LR03 malformed positive | Check predicate true per fixture | PASS |
| LR04 malformed negative | Check predicate true per fixture | PASS |
| LR05 missing required negative | Check predicate true per fixture | PASS |
| LR06 wrong type | Check predicate true per fixture | PASS |
| LR07 unknown field | Check predicate true per fixture | PASS |
| LR08 duplicate key | Check predicate true per fixture | PASS |
| LR09 invalid status | Check predicate true per fixture | PASS |
| LR10 blank blocker | Check predicate true per fixture | PASS |
| LR11 bad SHA | Check predicate true per fixture | PASS |
| LR12 reviewed projection | Check predicate true per fixture | PASS |
| LR13 unreviewed | Check predicate true per fixture | PASS |
| LR14 denied ACL | Check predicate true per fixture | PASS |
| LR15 stale source | Check predicate true per fixture | PASS |
| LR16 wrong recipient | Check predicate true per fixture | PASS |
| LR17 plain-text tampering | Check predicate true per fixture | PASS |
| LR18 nested or tool item | Check predicate true per fixture | PASS |
| LR19 preserve blocker and gate | Check predicate true per fixture | PASS |
| LR20 changed SHA | Check predicate true per fixture | PASS |
| LR21 missing context | Check predicate true per fixture | PASS |
| LR22 limitation: trusted review must actually sanitize | Show bad reviewed projection not detected | PASS |
## QA requirements (rev.1 historical criteria; rev.2 independent re-test pending)
1. Inspect scope/diff, 25 distinct source entries, corrected V01/V03 and V02/V04 distinctions, all 60 PTS values from v0.3, three historical + two upstream lessons + one QA finding (rev.2), exact pin and source receipt. Confirm no overstatement of reported 7/7 and 5/5 upstream tests. Check no secrets/raw private media, license/rights or runtime claims; original audio, provenance, advisories/dependency review remain HOLD.
2. Run exact blob with existing local runtime, independently add edge cases: malformed, duplicate, required/type/status, stale/denied/wrong recipient, text and nested canary, lost blocker/final gate; distinguish tested projection contract from actual ACL/redaction enforcement. Check equality before inverse and no acceptance on invalid input. Check LR22 limitations. No actual real-secret tests.
3. Review full manual handoff template (not just reference subset): scope/rights, approval, version, time, identity, separate states, evidence, blockers, next, quota/expense and mandatory Core reads survive; verified rights/content review before forwarding. Any ambiguity stops or safe authorized read. No raw logs/history/attachment forwarding. Test paired synthetic task continuity; token measurements not available => NOT_RUN, byte/tool counts only if actually measured, never convert to token savings.
4. Audit EVO01–10 (expected/observed, actor, UTC, source SHA, evidence, PASS/FAIL/NOT_RUN), regression of existing Core boundaries, no new workflow/install/Graphify/Level C. Prior D/E synthetic reference unchanged; rerun if QA determines affected. QA report DESIGN_READY_FOR_FINAL or HOLD at exact SHA. Final gate Claude then owner separate release; preserve snapshot provenance and ACL. No implementation of additional modules.

## QA-LEARN-001 rev.2 — EVO06/EVO10 repair
Prior QA #7210837800: 8/8 blobs, 22/22 LR, QE01–QE07 7/7; QE08 expected BLOCKED, observed REVIEWED_PROJECTION; EVO06 FAIL high, EVO10 FAIL medium. Author repair at previous HEAD 683a06f09c85da33a5d21ca2d2260fc9aa6fa3b7; 40/40 predicates executed in Code Mode V8 on the exact authored function bodies (22 prior cases with fixture updated, 18 new). No external dependency/API. Independent QA on rev.2 NOT_RUN.
| Case | Expected | Author observed |
|---|---|---|
| LR23 old pair same SHA/current revision advanced | BLOCKED | PASS |
| LR24 new revision independently approved | Allow reviewed new revision | PASS |
| LR25 current task mismatch | BLOCKED | PASS |
| LR26 approval recipient mismatch | BLOCKED | PASS |
| LR27 actual destination mismatch | BLOCKED | PASS |
| LR28 actual scope mismatch | BLOCKED | PASS |
| LR29 approval ID superseded same revision | BLOCKED | PASS |
| LR30 approval revoked | BLOCKED | PASS |
| LR31 evidence superseded | BLOCKED | PASS |
| LR32 evidence ID replaced same SHA | BLOCKED | PASS |
| LR33 submitted/reviewed changed but approval unchanged | BLOCKED | PASS |
| LR34 approval absent | BLOCKED | PASS |
| LR35 current state unverified | BLOCKED | PASS |
| LR36 rollback reuses old revision | BLOCKED | PASS |
| LR37 old approval scope mismatch | BLOCKED | PASS |
| LR38 current source revoked | BLOCKED | PASS |
| LR39 missing current record | BLOCKED | PASS |
| LR40 stale trusted record falsely marked current | Demonstrate limitation: still accepts if trusted current record falsely marked current | PASS |
LR22 and LR40 are limitation demonstrations, not security passes. Reference current/approval/destination inputs are synthetic, not a real ledger or ACL; do not infer actual revocation, redaction, identity, or concurrency. Independent QA re-run exact current blob using existing Node and adapt QE fixtures to independently supplied current record; preserve original negative predicates, specifically reproduce QE08 with same SHA and advanced revision. Verify manual authority record, approval binding to exact projection and recipient/scope, supersession/revocation and dependency invalidation, rollback with new revision, stop on missing authority; audit full template and EVO06/EVO10; retain EVO01–10 and all previous required gates. Revalidate unchanged evidence by SHA and record limits. QA may inspect CSV v0.3 supplied privately by owner, SHA256 1a6f18409de2cbdd78fab2aee6d99dc41debb84f9f9f41e2570aeced9fc6dd9e; Director compared all 60 values to current register, all matched; QA independent PTS comparison remains NOT_RUN until received. No media files copied to repo. Source speech/provenance, runtime, real ACL, token savings and upstream full acceptance remain HOLD/NOT_RUN. No merge or release.

## QA-LEARN-001 rev.3 — reuse policy / closure scope
Owner authorizes one-source-one-owner and role-based reuse, stop duplicate research and pause expansion. No reference code change since rev.2; same reference blob ef7ea87b450346ea9c0de082c12aa1ae7c74b739. Author 40/40 from rev.2, not a new run or independent QA. Prior HOLD remains until QA independently checks current exact candidate; EVO06/EVO10 fixes and LR01–40/QE08 remain mandatory; no bypass of QA/Claude/Owner.
QA verify delta to rev.2 and reuse unchanged evidence only where independently assessed unaffected. Check policy cases against exact text: (A) existing verified scoped record reused, no duplicate source study; (B) PARTIAL_READ/unverified claims not elevated and missing safety-critical evidence blocks dependent decision; (C) stale/revoked/changed scope or concrete discrepancy triggers targeted source check and dependent revalidation, no old approval reuse; (D) mandatory Core reads, actual permission checks, independent technical tests and final gate preserved; (E) role index links to existing IDs, no new module or unsupported installation. Record expected/observed and evidence, PASS/FAIL/NOT_RUN. These are static review cases, no software/test runtime added. Retain earlier criteria; "inspect all 60 PTS" means check register structure and available independent evidence, CSV direct comparison NOT_RUN if unavailable; do not reopen 10 videos, re-watch 60 frames, re-research upstream or treat unavailable speech/full provenance as complete. QA may request narrowly necessary source evidence where a specific finding materially affects the release; unresolved material safety/quality issues still HOLD. Full-source/third-party integration review remains HOLD separately; only bounded manual-B method/design is under review. No automatic dispatch; pause Graphify/research expansion; proceed to KHBD only after final gates and owner release decision.
````

### knowledge/LESSONS.md — 851cbacf0eb1a14533b1122d7ae64cff866fac31
Original Git blob bd3de8136832aa67296fa9680443265405406e1b, EXACT, final LF yes.

````text
# Sổ bài học — candidate Learning & Evolution
Nguồn baseline 459f53b60f7e0728103ae129c46b15ba4d8ccddc. Sáu bản ghi: hai sự cố PR4, một giới hạn mô phỏng PR4, hai quan sát mã nguồn upstream và một phát hiện QA PR5; các kết quả thử upstream chưa tái lập. Chưa tự cài skill vào các môi trường.

| Mã | Dấu hiệu và nguyên nhân | Sửa / ca hồi quy / bằng chứng | Quy tắc áp dụng lại |
|---|---|---|---|
| LESSON-001 | QA HOLD B04/H12: revoke kiểm tra fence trước khi cập nhật hết lease, xác nhận cũ nhả slot/retry tại đúng mốc hết hạn. | Sửa thứ tự expiry trước fence; E01–E02 thêm vào D01–D21; QA rev2 #7209836012, CTO #7209918735, QA rev3 #7209966164, stdout #7210070213, candidate b2efe207763c6df11897b5765b9042c112101dd1, release 459f53b60f7e0728103ae129c46b15ba4d8ccddc. | Khi điều kiện có thể đổi tại biên, kiểm tra sau cập nhật trạng thái; thêm ca equality trực tiếp, stale ACK/retry và kiểm thử độc lập. Mô phỏng không chứng minh runtime atomic. |
| LESSON-002 | Claude BLOCKED vì private repo không xác thực; hồ sơ công khai dài bị cắt trước Phần G. | Owner duyệt snapshot đã ẩn định danh, public commit fe6f0b4b5667526ec7d91c4b39105092ffd02aec; QA stdout riêng #7210070213, Director receipt #7210171424, Claude user-forwarded FINAL_PASS chỉ B. | Xác minh quyền và khả năng đọc trước bàn giao; tách bằng chứng thiết yếu thành phần nhỏ nếu được phép; phân biệt snapshot với HEAD độc lập. Không công khai dữ liệu riêng hoặc bỏ cổng. |
| LESSON-003 | Số liệu 23/23 chỉ là mô phỏng; P2 step không gắn reservation trong reference. | Claude user-forwarded F3, Director receipt #7210171424, release #7210201796. | Mức C vẫn khóa cho tới adapter atomic và test runtime. Không suy diễn năng lực từ mô hình offline. |

| LESSON-004 | Promptfoo equals với object: JSON.parse lỗi và inverse=true khiến phép phủ định đạt; đây là ngữ nghĩa phép so sánh, không phải kiểm schema. | Pin aa4e2c6baa89f616bb361459a0410f330e16f7c7 src/assertions/equals.ts blob 259491c419cc77e3682e43c130866ebe9e8d6970; Director receipt #7210725906, 7/7 chỉ reported. | Validate cú pháp/schema trước phép so sánh; hồi quy malformed/thiếu trường/phủ định. |
| LESSON-005 | Agents SDK remove_all_tools bỏ structured items nhưng giữ string history và non-tool message; không khử dữ liệu đã chép vào text thường. | Pin 0ad2d63a9371a23333a95ea6878141a826c9cdda src/agents/extensions/handoff_filters.py blob 745a5ddaa3b70340747a1fe16df61a5fc5392988; receipt #7210725906, 5/5 chỉ reported. | Bản chiếu allowlist + review nội dung/quyền, thử canary text và cấu trúc; không tự nhận bộ lọc bảo mật. |

| LESSON-006 | QA PR5 EVO06/EVO10 HOLD: QE08 cặp bản bàn giao và bản duyệt cũ cùng SHA vẫn được chấp nhận do thiếu đối chiếu revision/phê duyệt hiện hành. | QA #7210837800 tại 683a06f09c85da33a5d21ca2d2260fc9aa6fa3b7; sửa quy tắc thủ công và reference LR23–LR40, author 40/40 theo kỳ vọng, chờ QA. | Nguồn SHA không đủ chứng minh hiệu lực phê duyệt; đọc bản ghi hiện hành độc lập, ràng buộc recipient/scope/revision/evidence/approval/payload; đánh dấu bản thay thế và phụ thuộc, rollback không hồi sinh phê duyệt cũ. LR22/LR40 là giới hạn mô phỏng. |

Ghi bài học mới: id, task, source SHA, UTC, symptom, cause/evidence hoặc hypothesis, mitigation, test, expected/actual, scope, owner, status, next. Không ghi bí mật, Gmail hoặc dữ liệu người dùng không cần thiết. Không ghi bài học chưa xác minh là sự thật.
````

### VERSION — b39d41d25a71c0d54c0170e6d500ca160aebeace
Original Git blob bb576dbde10fdad22759c170d482813d5e873c1e, EXACT, final LF yes.

````text
2.3
````

### CORE.md — b39d41d25a71c0d54c0170e6d500ca160aebeace
Original Git blob eb842208ab623b2b4e55bb8f9ae8ee8fdfc61f1e, REDACTED, final LF yes.

````text
# AI Army 2.3

Nguồn quy chuẩn toàn cục cho mọi dự án. Người dùng quyết định mục tiêu, quyền và nghiệm thu. ChatGPT điều phối; Codex thực thi kỹ thuật; Gemini nghiên cứu, sáng tạo, phản biện và rà soát sơ bộ; Claude chỉ kiểm định độc lập cuối lượt. Work thuộc ChatGPT.

Trước mỗi nhiệm vụ và lượt thực thi đọc VERSION, CORE.md, AGENTS.md, CHANGELOG.md, governance/AI-ARMY-3.1.md và hồ sơ dự án; xác nhận phiên bản cùng commit nguồn. Không dùng bản chụp cũ như nguồn hiện hành; áp dụng quy trình dự phòng bên dưới nếu GitHub không truy cập được. Chỉ đạo mới thay thế quy định xung đột; ghi CHANGELOG. Không áp đặt quy định riêng dự án lên dự án khác.

Chia nhiệm vụ theo mã, chủ sở hữu, phạm vi, base SHA, tiêu chí nghiệm thu và quyền. Không sửa đồng thời cùng tệp. Lưu checkpoint, bằng chứng và bước tiếp theo. Không tự nhận đã gọi AI khác hay kiểm thử nếu thiếu bằng chứng.

Điểm danh: trạng thái chưa xác minh, sẵn sàng, đang làm, hoàn thành, hết hạn mức, mất kết nối; chỉ ghi theo bằng chứng có thời điểm. Không gọi Claude chỉ để điểm danh. Thiếu Gemini: ChatGPT nghiên cứu; thiếu Codex: ChatGPT/Work hoặc công cụ được cấp quyền thực thi; thiếu ChatGPT: người dùng chỉ định điều phối tạm; thiếu Claude: awaiting_final_audit, tiếp tục việc độc lập, không bỏ cổng bắt buộc. Không tự merge hoặc phát hành khi chưa có quyền. Không chia sẻ secrets hay dữ liệu nhạy cảm.

Mức B mặc định: nguồn chung và kích hoạt AI ngoài thủ công. Mức C chỉ khi workflow/API có quyền và ngân sách, được chủ sở hữu phê duyệt riêng, xác minh kích hoạt, định danh hệ thống, giới hạn và chi phí bằng không phát sinh. Không giả định đồng bộ nền. Mặc định Mức C TẮT. Kiểm tra hàng đợi không gọi mô hình; không dùng polling AI. Thiếu bằng chứng kích hoạt hoặc định danh thì dùng Mức B, không tự mở quyền.

## Đồng bộ dự phòng

GitHub [PRIVATE_REPOSITORY], nhánh main, là nguồn chuẩn duy nhất. Google Drive Mirror chỉ là bản sao đọc, không sửa quy chuẩn tại Drive. Ưu tiên GitHub đã xác thực; không mở công khai kho riêng tư hoặc chia sẻ secrets.

Khi không truy cập GitHub, đọc mirror đã được người dùng cấp quyền, xác nhận VERSION, CORE.md, AGENTS.md, CHANGELOG.md, commit nguồn và ngày tạo bản sao. Báo mirror_snapshot_read, không tuyên bố đồng bộ phiên bản mới nhất nếu không kiểm tra được HEAD. Nếu không xác minh độ mới, chỉ làm phần an toàn, không quyết định nghiệm thu/phát hành dựa trên quy chuẩn có thể cũ. Nếu cả hai nguồn không đọc được, báo chưa đồng bộ và chuyển phần khả thi theo quy tắc dự phòng; không bỏ cổng kiểm định.

Sau mỗi cập nhật Core đã được phép, ChatGPT đọc lại commit đã phát hành, sao chép nguyên văn bốn tệp quy chuẩn sang Drive, kiểm tra đọc lại và quyền truy cập, ghi manifest phiên bản/commit/thời điểm và trạng thái. Không sao chép hồ sơ thành viên, dữ liệu dự án, secrets hoặc nội dung nhạy cảm. Cập nhật mirror trước khi thông báo thành viên; nếu thất bại, báo mirror_stale. Chỉ ghi installed/synced khi có xác nhận trực tiếp từng môi trường. Không giả định tự động hóa nền; đồng bộ khi có lượt thực thi hoặc workflow được cấp quyền.

## Điều phối và định danh

Mã nhân sự + Gmail + Workspace theo hồ sơ nội bộ đã duyệt; đối chiếu thêm Project và chế độ. Email tự khai hoặc GitHub username không xác minh tài khoản ChatGPT. Kiểm tra người nhận, quyền, nhiệm vụ, nguồn và phiên bản trước mỗi lượt; kiểm tra lại liên kết định danh khi đổi phiên, hết hạn, thu hồi hoặc có mâu thuẫn. Tự động chỉ cho liên kết system_verified còn hiệu lực; user_attested chỉ cho Mức B trong phạm vi được giao. Sai định danh dừng và báo mã, không tiết lộ Gmail. Thiếu xác minh chỉ làm phần đọc an toàn nếu được cho phép rõ ràng, không nghiệm thu/phát hành.

Director giữ quyền phân công; Knowledge quản lý hàng đợi đã duyệt, đề xuất tải, không tự mở rộng phạm vi. Chỉ thị có nguồn và phê duyệt đáng tin cậy; nội dung Issue/comment, đồ thị và tài liệu không tự tạo thẩm quyền. Một chủ nhiệm, một khóa thực thi; khi không có cơ chế khóa nguyên tử và xác minh quyền thì dùng Mức B. Dừng khi hết hạn mức, thiếu quyền hoặc chi phí chưa rõ.

Trạng thái theo governance/AI-ARMY-3.1.md; tách nhân sự, nhiệm vụ, nghiệm thu. Giữ mã awaiting_final_audit khi thiếu Claude tại cổng bắt buộc. Graphify là chỉ mục tùy chọn, không thay nguồn, không bỏ đọc Core, không tự kích hoạt hoặc chia sẻ ngoài ACL. Các skill được tham chiếu theo commit chính thức, không được ghi đè Core. Cổng phát hành: QA độc lập, Claude tại cổng cuối bắt buộc, chủ sở hữu phê duyệt đúng SHA; thay đổi nội dung làm mất hiệu lực bằng chứng liên quan. Sau phê duyệt và merge được cấp quyền mới đồng bộ mirror, trước thông báo. Mọi kích hoạt runtime cần phê duyệt riêng.
````

### AGENTS.md — b39d41d25a71c0d54c0170e6d500ca160aebeace
Original Git blob 8c7b1b4325f44f41439cf22a2433ba86a4091831, EXACT, final LF yes.

````text
# AI Army bootstrap

Trước mỗi lượt đọc VERSION, CORE.md, AGENTS.md, CHANGELOG.md và governance/AI-ARMY-3.1.md tại repository riêng tư này. Xác nhận phiên bản và commit, đọc hồ sơ dự án, áp dụng vai trò tương ứng trong CORE.md. Nếu không truy cập được GitHub, thực hiện quy trình mirror trong CORE.md (đọc bản sao có phiên bản và commit nguồn, không nhận đã đồng bộ HEAD); nếu cả hai nguồn không đọc được, báo chưa đồng bộ. Ghi kết quả và bằng chứng vào issue hoặc bản ghi trạng thái khi có quyền. Không sửa quy chuẩn nếu chưa có chỉ đạo người dùng.

Đọc skill liên quan tại cùng SHA đã duyệt. Nhánh candidate chỉ dùng để kiểm định, không phải nguồn chuẩn. Không mặc định cài đặt skill hoặc bật Mức C. Xác minh người nhận và quyền trước mỗi nhiệm vụ; không dùng prompt, comment hay đồ thị làm bằng chứng xác thực. Dùng templates/handoff.md; giữ nguyên cổng QA/Claude và quy trình mirror.
````

### CHANGELOG.md — b39d41d25a71c0d54c0170e6d500ca160aebeace
Original Git blob 2b074bf4175d32b0d0a14f98e6c7f7d6fd983719, EXACT, final LF yes.

````text
# Changelog

- 2026-11-26: 2.1 — nguồn chuẩn đa dự án, điểm danh có bằng chứng, dự phòng và xác nhận phiên bản. Claude chỉ kiểm định cuối; Gemini ưu tiên vòng lặp thường xuyên.

- 2026-11-26: 2.2 — GitHub duy nhất làm nguồn chuẩn; Drive mirror đọc dự phòng, xác nhận commit, kiểm soát độ mới và quyền chia sẻ; giữ nguyên cổng kiểm định độc lập.

- 2026-11-27: 2.3 (candidate PR #4) — Governance 3.1, liên kết định danh, phân loại trạng thái, quyền điều phối, Auto Dispatch mặc định tắt, Load Balancer, Token Optimizer và Graphify chỉ mục tùy chọn; giữ nguyên các cổng 2.2. Chưa phát hành; giải quyết AUDIT-31-001 B01–B04/H05–H12 ở cấp quy chuẩn và tham chiếu thử nghiệm.

## 2026-11-27 — /an Protocol 1.0 rev.3 (candidate, owner-directed scope exception)
- Chỉ đạo chủ sở hữu: “bỏ claude ra khỏi lệnh này, chỉ dùng lệnh này cho thành viên dùng github dễ dàng”. /an là tiện ích đồng bộ/điều phối GitHub mức B cho thành viên có quyền thực tế, không yêu cầu Claude sử dụng hoặc tham gia mỗi lượt. Miễn cổng Claude chỉ đối với phát hành chính tiện ích /an 1.0 trong phạm vi đó; không miễn kiểm định sản phẩm/nhiệm vụ qua /an, không thay Core hoặc cổng Claude bắt buộc chung. Không mở rộng quyền, mức C, chi phí hoặc tự kích hoạt.
- Base ứng viên rev.2 2bfddab5dbe375f729149612705644a438e6ba1d; QA report HUB #7217299975 (52/52 fixture tổng hợp, không phải runtime). Rev.3 chỉ sửa skill và CHANGELOG, giữ reference. Cần QA xác nhận chênh lệch và chủ sở hữu duyệt đúng SHA trước merge/phát hành. Không tự suy diễn đây là phê duyệt merge. 
````

### governance/AI-ARMY-3.1.md — b39d41d25a71c0d54c0170e6d500ca160aebeace
Original Git blob 514882e2767d7ab1054f71da807e632d5e91bba2, REDACTED, final LF yes.

````text
# AI Army 3.1 — Cơ cấu tổ chức đa nhiệm (candidate)

Chủ sở hữu duyệt sửa candidate 27/11/2026, chưa duyệt phát hành. Core 2.3 candidate; GitHub private main Core 2.2/Governance 3.0 vẫn có hiệu lực tới khi merge được phép. Không phát sinh chi phí.

## Định danh nội bộ
[REDACTED: roster/account/workspace mapping and personal account notes; actual identity/ACL cannot be audited from this packet. Role rules below retained.]

## Quyền nhiệm vụ (không thay đổi ACL thực tế)

- Director: phân công, tổng hợp, quyết định ưu tiên trong phạm vi được giao; không thay chủ sở hữu phê duyệt nghiệm thu, chi phí, Production.
- CTO: đọc/sửa mã trong phạm vi nhiệm vụ, branch/commit/PR, Preview và kiểm thử khi được giao; không tự merge/phát hành, xóa dữ liệu, đổi quyền hay tạo tài nguyên trả phí.
- QA: đọc, kiểm thử không phá hủy, nhận xét, ghi bằng chứng và đề xuất chặn phát hành; không sửa đối tượng đang kiểm định, không tự nghiệm thu sản phẩm do mình tạo.
- Knowledge: đọc tài liệu được cấp quyền, quản lý hồ sơ và bàn giao, cập nhật trạng thái có bằng chứng; không ghi đè quyết định đã khóa, sửa Core/mirror trái phép hoặc quản trị hạ tầng.
- Research: nghiên cứu, đề xuất, tạo bản nháp học liệu và thiết kế trong phạm vi giao; không tự phê duyệt, phát hành hoặc truy cập dữ liệu ngoài phạm vi. QA kiểm định độc lập học liệu.
- Không kiêm nhiệm nào tự mở rộng quyền thực tế; thiếu quyền báo blocker. Chủ sở hữu quyết định cuối.

## Phối hợp

1. Đọc VERSION, CORE.md, AGENTS.md, CHANGELOG.md và hồ sơ này cùng hồ sơ dự án; xác nhận commit nguồn. Khi không truy cập GitHub, áp dụng mirror theo Core và không coi hồ sơ tổ chức đã được đồng bộ.
2. Director đăng mã nhiệm vụ, người phụ trách, workspace, chế độ, phạm vi, base SHA, quyền và tiêu chí đạt tại GitHub Issue/PR. Một chủ nhiệm; không sửa đồng thời cùng tệp.
3. Thành viên xác nhận mã nhân sự, workspace, chế độ và nhiệm vụ trước khi thực thi; nếu sai vai trò hoặc phiên đăng nhập, dừng và báo. Không tự chuyển vai trò. Mỗi chức năng kiêm nhiệm chỉ kích hoạt khi cần.
4. Thực thi và ghi bằng chứng theo templates/handoff.md; trạng thái có thời điểm; dùng link thay sao chép nội dung không cần thiết.
5. QA kiểm định sơ bộ độc lập; Gemini nghiên cứu/phản biện theo Core; Claude giữ nguyên cổng kiểm định độc lập cuối lượt, thiếu Claude tại cổng bắt buộc ghi awaiting_final_audit. Không gọi Claude để điểm danh. Antigravity hỗ trợ CTO nếu khả dụng; Dot chỉ giám sát nếu khả dụng và được cấp quyền, không tự mở quyền.
6. Knowledge lưu hồ sơ và bài học; Director đối chiếu kết quả; chủ sở hữu quyết định phát hành. Không công bố hoàn thành khi chưa đủ bằng chứng.
7. Mức B: kích hoạt thủ công, nguồn chung; mức C chưa được thiết lập, không giả định tự động hóa nền. Không thêm tài khoản, website, tài nguyên trả phí hoặc thay đổi Production.

## Nhiệm vụ và trạng thái ban đầu
[REDACTED: unrelated individual task/status details.]

## Nghiệm thu tổ chức

Mỗi nhân sự xác nhận riêng tại HUB-001: mã, workspace, chế độ, nhiệm vụ, phiên bản Core và commit, quyền truy cập, bằng chứng, thời điểm. Không đăng Gmail đầy đủ trong báo cáo. Director đối chiếu; chưa đủ bằng chứng thì không ghi installed/synced. 

## Vận hành 3.1 (B02, H05, H10)
- Giữ nguyên 5 định danh và 4 Gmail trên bảng; không suy diễn quyền từ email. Identity Guard 1.1 quy định mức bằng chứng, thời hạn và thu hồi. Project/Work/Codex không tự chia sẻ ngữ cảnh.
- AS-AI-01 xây chỉ mục Graphify; AS-AI-03 giữ manifest, hồ sơ và thống kê tải; AS-AI-02 kiểm định độc lập, AS-AI-04 chỉ truy xuất phần được cấp quyền. Không nhân bản hồ sơ cá nhân hoặc mã nguồn ngoài ACL.
- Trạng thái nhân sự: UNVERIFIED / STANDBY / WORKING / LIMITED / DISCONNECTED. Trạng thái nhiệm vụ: QUEUED / RECEIVED / WORKING / REVIEW / COMPLETED / BLOCKED / CANCELLED. Trạng thái nghiệm thu: NOT_REVIEWED / QA_FAILED / QA_PASSED / awaiting_final_audit / FINAL_FAILED / FINAL_PASSED / OWNER_ACCEPTED. COMPLETED chỉ là bàn giao nhiệm vụ, không đồng nghĩa nghiệm thu. Chuyển trạng thái cần thời điểm UTC, actor, mã nhiệm vụ, revision, bằng chứng. Không ghi READY hay synced nếu thiếu xác nhận. Lịch sử status/members.json không tự chứng minh trạng thái mới.
- Quyền phân công thuộc Director; Knowledge chỉ đề xuất, quản lý hàng đợi đã duyệt. Mỗi thành viên một nhiệm vụ đang hoạt động trong pilot; điều chuyển cần Director phê duyệt revision mới, không phá tính độc lập, không mở rộng quyền. Không ép chia token 25%. Chi phí mới = 0; chưa rõ quota thì không dispatch tự động.
- Mức B mặc định; Mức C, webhook/polling, Graphify runtime và tích hợp ngoài chỉ có thể bật sau cổng kiểm định và phê duyệt riêng. Không tạo tài khoản, tài nguyên hoặc tự thay đổi Production. Gemini nghiên cứu/phản biện; Claude chỉ kiểm định độc lập cuối; Antigravity hỗ trợ kỹ thuật nếu được phép; Dot theo dõi nếu khả dụng.
````

### skills/ai-army-token-optimizer/SKILL.md — b39d41d25a71c0d54c0170e6d500ca160aebeace
Original Git blob 7a1a3b0d985dab6c72cd867010cf9dc9e1caaf9a, EXACT, final LF yes.

````text
---
name: ai-army-token-optimizer
description: Tiết kiệm token, ngữ cảnh và lượt gọi công cụ cho AI Army khi thực hiện nhiệm vụ, không giảm chất lượng hoặc bỏ cổng nghiệm thu.
metadata:
  version: "1.2"
  status: candidate
  core-compatibility: "2.3 candidate"
---

# AI Army Token Optimizer v1.2 (candidate)

## 1. Quản lý ngữ cảnh
- Đọc VERSION, CORE.md, AGENTS.md, CHANGELOG.md và hồ sơ dự án theo Core trước mỗi nhiệm vụ/lượt; xác nhận commit nguồn. Không dùng cache để bỏ bước bắt buộc.
- Với dữ liệu không bắt buộc đọc lại, tái sử dụng kết quả cùng phiên khi SHA/phiên bản và phạm vi không đổi. Đọc lại khi thay đổi hoặc chưa xác minh độ mới.
- Tìm theo tệp, hàm, từ khóa, dòng, diff; chỉ mở rộng khi bằng chứng chưa đủ.

## 2. Giao tiếp
- Không lặp yêu cầu hoặc quyết định đã duyệt. Ưu tiên mã nhiệm vụ, link, SHA, bằng chứng thay cho sao chép toàn tài liệu.
- Không trình bày lại phương án đã chốt. Giữ đủ thông tin để người dùng kiểm chứng.

## 3. Điều phối
- Một chủ nhiệm mỗi nhiệm vụ; kiểm tra trạng thái, phạm vi và base SHA trước khi thực thi. Không sửa đồng thời cùng tệp.
- Không huy động thêm AI nếu không có giá trị; ngoại lệ kiểm định độc lập bắt buộc. Giữ nguyên vai trò Gemini và Claude; không gọi Claude chỉ để điểm danh.
- Không giả định kích hoạt AI, đồng bộ nền hoặc quyền truy cập. Mức B theo Core; mức C chỉ khi được phép và có ngân sách.

## 4. Mức suy luận
- Low: xác nhận, phân loại, trạng thái.
- Medium: tổng hợp, chỉnh sửa nhỏ, tài liệu.
- High: kỹ thuật, kiểm thử, kiểm định.
- Extra High: kiến trúc hoặc lỗi/rủi ro phức tạp.
- Chỉ là hướng dẫn lựa chọn nếu môi trường hỗ trợ; không tự đổi thiết lập hoặc giảm mức khi không đủ chất lượng.
- Mặc định đề xuất: Director (Cá nhân/Chat thường) và Knowledge (Business/Work) Medium; CTO (Business/Codex) và QA (Business/Work) High; AI ngoài ChatGPT theo nhiệm vụ.

## 5. Công cụ
- Gộp thao tác tương thích; giới hạn kết quả theo nhu cầu; dùng kết quả còn hiệu lực.
- Không lặp thao tác lỗi khi điều kiện chưa thay đổi; thử hướng khác có căn cứ hoặc báo blocker.
- Không bỏ đọc lại, kiểm thử, xác minh quyền hay độ mới khi bắt buộc.

## 6. Checkpoint
Lưu khi kết thúc giai đoạn hoặc cần chuyển ngữ cảnh:
TASK / ROLE / CORE_VERSION / SOURCE_COMMIT / BASE_SHA / SCOPE_RIGHTS / ACCEPTANCE / DONE / EVIDENCE / STATUS_TIME_UTC / BLOCKER / NEXT / FINAL_AUDIT.
Dùng checkpoint thay toàn bộ lịch sử nếu đủ bằng chứng; giữ tài liệu gốc và liên kết. Tuân thủ templates/handoff.md.

## 7. Báo cáo
Ưu tiên dưới 200 từ, không phải giới hạn cứng:
TASK / ROLE / CORE_VERSION_SOURCE_COMMIT / BASE_SHA / SCOPE_RIGHTS / ACCEPTANCE / STATUS_TIME_UTC / RESULT / EVIDENCE / BLOCKER / NEXT / FINAL_AUDIT.
Mở rộng nếu cần đủ bằng chứng, phân tích, rủi ro hoặc yêu cầu người dùng.

## 8. Ngoại lệ
Không bỏ kiểm thử, kiểm định độc lập, bằng chứng, an toàn, quyền hạn, các bước bắt buộc của Core hay tiêu chí nghiệm thu. Không che giấu lỗi. Không tiết lộ secrets, dữ liệu nhạy cảm. Nếu thiếu Claude tại cổng bắt buộc: awaiting_final_audit, không tự nghiệm thu thay.

## 9. Đo lường
Ghi số lượt công cụ, lượng dữ liệu đọc, nhiệm vụ trùng, số lần sửa lại; token thực tế chỉ khi nền tảng cung cấp. Không bịa số liệu hoặc tỷ lệ tiết kiệm. So sánh các nhiệm vụ tương đương về phạm vi, chất lượng và môi trường.

## 10. Ưu tiên và đồng bộ
Chất lượng, an toàn và quy chuẩn Core > hoàn thành nhiệm vụ > tiết kiệm tài nguyên. Dừng khi đạt điều kiện nghiệm thu, không mở rộng phạm vi.
GitHub main là nguồn chuẩn; bản candidate không thay thế main. Không tự merge/phát hành. Sau phê duyệt chính thức, thực hiện quy trình mirror của Core trước khi thông báo thành viên; bản mirror bốn tệp giữ nguyên văn, skill được tham chiếu riêng theo commit đã duyệt. Không ghi installed/synced nếu chưa xác nhận trực tiếp từng môi trường. Không tự mở quyền hay phát sinh chi phí.

## 11. Bổ sung 1.1 (H09)
Đọc thêm Governance 3.1, kiểm tra quyền/định danh mỗi nhiệm vụ. SHA nguồn không chứng minh độ mới của CI, quyền, deployment, dữ liệu runtime hay backup. Kiểm tra lại các bằng chứng biến động có ảnh hưởng quyết định và ghi UTC. Báo cáo rút gọn không được mất điều kiện chưa đạt, blocker, trạng thái mirror hoặc cổng kiểm định. Graphify query-first chỉ với khám phá tùy chọn, không thay đọc bắt buộc; truy vấn có giới hạn, kiểm chứng file/dòng tại SHA, fallback trực tiếp khi stale/thiếu quyền. Đo cặp nhiệm vụ cùng phạm vi/chất lượng/môi trường; tính riêng chi phí build, query, xác minh, refresh và phân bổ theo số lượt dùng quan sát được. Token thật nếu nền tảng cung cấp; số lượt tool, byte, thời gian chỉ là proxy riêng, không quy đổi thành token. Không khẳng định tiết kiệm nếu chưa có kết quả. Không gọi mô hình khi hàng đợi trống. Research mặc định High nếu có, mọi mức suy luận theo nhiệm vụ và chất lượng.

## 12. Bổ sung 1.2 — nạp theo nhu cầu và bàn giao tối thiểu
- Progressive disclosure: đọc trực tiếp toàn bộ nguồn bắt buộc của Core trước mỗi lượt; chỉ mở tài liệu tham chiếu không bắt buộc theo mục đích, đường dẫn, SHA và quyền. Nếu thiếu bằng chứng, mở rộng phạm vi có lý do; không rút gọn tiêu chí bắt buộc hoặc thay nguồn bằng bản tóm tắt.
- Không chuyển nguyên lịch sử, tool logs, reasoning, dữ liệu cấu trúc lồng hoặc nội dung đính kèm. Lập bản chiếu có allowlist trường theo templates/handoff.md, đối chiếu nguồn, review thủ công tất cả giá trị kể cả văn bản thường/nội dung sao chép, kiểm ACL hiện hành và quyền người nhận; loại bỏ/che dữ liệu không cần thiết trước khi chuyển. Không dựa riêng regex, tool-type filter hoặc nhãn private; thiếu quyền/không thể review thì HOLD. Không chuyển bí mật thật vào fixture.
- Kiểm cú pháp/schema/required/type/allowed status trước phép kiểm nội dung, kể cả so sánh phủ định. Giữ mã nhiệm vụ, revision, người giao và phê duyệt, scope, nguồn/Core SHA, quyền/định danh, trạng thái tách riêng, evidence, blocker, next, gate, hạn mức/chi phí và thời điểm; nếu không đủ thì đọc trực tiếp nguồn được phép hoặc dừng. Không bỏ lỗi để đạt giới hạn từ.
- So sánh baseline và bản rút gọn trên cùng nhiệm vụ/quyền/tiêu chí, kiểm khả năng người nhận tiếp tục và giữ đủ bằng chứng. Token thật chỉ khi đo được; byte, tool counts, thời gian là proxy riêng. Không tuyên bố tiết kiệm chưa đo. Không cài Agents SDK, Promptfoo hoặc bật tự động hóa.

## QA revision 2 — cache không giữ hiệu lực phê duyệt
- Không tái sử dụng checkpoint, cache hoặc bản duyệt chỉ vì SHA còn khớp. Trước gửi/nhận/tiếp tục, đọc trực tiếp bản ghi điều phối hiện hành và đối chiếu task, revision, người nhận/phạm vi, source SHA, evidence/approval ID, đúng bản chiếu và quyền/hiệu lực. Thiếu thông tin hoặc nguồn bị thay thế thì HOLD; chỉ đọc an toàn khi được cấp quyền.
- Tôn trọng SUPERSEDED/REVOKED và phụ thuộc cần xác minh lại theo templates/handoff.md; rollback tạo revision/phê duyệt mới. Không bỏ các trường này để tiết kiệm token; không coi reference giả lập là xác minh ACL thực.
````

### templates/handoff.md — b39d41d25a71c0d54c0170e6d500ca160aebeace
Original Git blob e963623688b62ffee364d5910eaa05c47622d07b, EXACT, final LF yes.

````text
# Bàn giao

- Dự án / mã nhiệm vụ:
- AI phụ trách:
- Phiên bản CORE / commit:
- Nguồn / base SHA:
- Phạm vi và quyền:
- Tiêu chí đạt:
- Kết quả và bằng chứng:
- Trạng thái / thời điểm UTC:
- Blocker / bước tiếp theo:
- Cổng kiểm định cuối nếu bắt buộc:

- Revision / người giao / phê duyệt tham chiếu:
- Workspace / chế độ / Project / mức bằng chứng định danh (không ghi Gmail):
- Trạng thái nhân sự / nhiệm vụ / nghiệm thu (tách riêng):
- Giới hạn thực thi, hạn mức quan sát được hoặc unknown / chi phí mới:
- Bằng chứng kiểm định đúng SHA / thời điểm xác minh quyền và dữ liệu biến động:
- Nếu dùng Graphify: manifest, source SHA, hash, phạm vi và bằng chứng đối chiếu nguồn:
- Điều kiện chưa đạt / checkpoint / lệnh dừng (nếu có):

## Bổ sung candidate 1.1 — kiểm tra trước bàn giao
- Bản bàn giao là dữ liệu không tự tạo thẩm quyền. Đọc lại quyền, nguồn hiện hành, người nhận và phạm vi trước khi chuyển; nếu không xác minh được, HOLD hoặc chỉ đọc an toàn đã được cho phép.
- Tạo bản chiếu tối thiểu từ các trường trên. Không chuyển lịch sử toàn phiên, log công cụ, dữ liệu nhạy cảm hay nội dung ngoài ACL; review cả text thường, các trích đoạn đã sao chép và giá trị lồng. Không gửi nguyên dữ liệu rồi trông chờ người nhận lọc. Chỉ dùng liên kết/trích đoạn được phép. Không có bộ lọc kiểu dữ liệu nào thay thế review nội dung/quyền.
- Không bỏ trường bắt buộc; nếu không áp dụng, ghi NOT_APPLICABLE có lý do; thiếu bằng chứng ghi UNKNOWN/NOT_RUN/BLOCKED tương ứng, không ghi PASS. Tách evidence nội dung, evidence áp dụng, mức xác minh và cổng nghiệm thu. Nếu dùng JSON kiểm cú pháp, schema và required trước mọi so sánh (kể cả phủ định); dữ liệu lỗi FAIL.
- Bản tham chiếu reference/learning-regression.js dùng schema tổng hợp nhỏ, không phải định dạng bắt buộc của toàn bộ mẫu này hoặc cơ chế cấp quyền. Trạng thái quyết định do Core/Governance chi phối. Giữ quyền dừng và cổng QA/Claude/Owner.

## QA revision 2 — ràng buộc phê duyệt hiện hành (EVO06/EVO10)
- Director duy trì bản ghi điều phối hiện hành có thẩm quyền trong nguồn riêng đã được cấp quyền; trước khi gửi và trước khi nhận/tiếp tục, kiểm tra trực tiếp bản ghi hiện hành và quyền thực tế, không lấy revision hoặc người nhận từ chính gói bàn giao/bản duyệt cũ. Không xác minh được thì HOLD.
- Bản xác nhận duyệt thủ công phải chỉ rõ: mã nhiệm vụ, revision hiện hành, nguồn SHA, người duyệt có thẩm quyền/thời điểm, mã phê duyệt, mã bằng chứng/phiên bản, người nhận (mã + workspace + project + chế độ/định danh đã kiểm), phạm vi/quyền, trạng thái hiệu lực và đúng bản chiếu đã review (tham chiếu bất biến hoặc hash nội dung được phép). Không ghi Gmail/secrets. So khớp bản hiện hành, phê duyệt và bản chuyển cụ thể; kiểm quyền/độ mới tại ranh giới gửi và tiếp tục. SHA nguồn đơn lẻ không đủ.
- Mọi thay đổi nhiệm vụ, người nhận, phạm vi, nguồn hoặc bằng chứng cần xác minh lại và cấp phê duyệt mới nếu ảnh hưởng. Bản ghi bị thay thế/thu hồi ghi SUPERSEDED/REVOKED kèm lý do, thời điểm, actor, liên kết bản mới; giữ lịch sử nhưng mất hiệu lực sử dụng. Đánh dấu các handoff, kết luận và nhiệm vụ phụ thuộc cần revalidation; dừng chuyển/tiếp tục/nhận nghiệm thu dựa vào bản cũ cho tới khi kiểm chứng lại. Rollback tạo revision tăng mới và phê duyệt mới, không khôi phục hiệu lực cũ. Khi chưa xác định đầy đủ phụ thuộc hoặc nguồn hiện hành, HOLD và báo Director. Không tự thay quyền hay tự chạy lại tác vụ.
- Reference chỉ so khớp dữ liệu tổng hợp từ bản ghi hiện hành và bản duyệt độc lập giả định đáng tin; không chứng minh nguồn đó đúng, không có ledger thật, ACL/redaction thực hoặc nguyên tử. Không bật mức C.
````

## 5. QA and release evidence — coordinator-forwarded issue bodies, sanitized

### Receipt 7217815670
````text
## EVO-ACCEPT-001 rev.2 — QA_FAILED / HOLD phát hành

**AS-AI-02 · Business phụ 2 / AI Army – QA / Work · mức B `user_attested`.** Chủ sở hữu xác nhận phiên duy nhất, không có nhiệm vụ xung đột và đủ hạn mức sẵn có. Đã đọc toàn bộ HUB được phép, kiểm tra `EVO-QA-AUTH-001` còn hiện hành trước khi báo cáo. Kết nối GitHub `[QA_LOGIN_REDACTED]` có quyền đọc kho riêng và ghi báo cáo, khác tác giả candidate. **Core main** `b39d41d25a71c0d54c0170e6d500ca160aebeace` · **base candidate** `851cbacf0eb1a14533b1122d7ae64cff866fac31` · **candidate đóng băng** `e02c5d3e5022f764430e1a9fbe1c003de71eb938`. [Giao việc](https://github.com/[PRIVATE_REPOSITORY]/issues/1#issuecomment-7217719498) · [Phạm vi](https://github.com/[PRIVATE_REPOSITORY]/issues/1#issuecomment-7217590421)

**Phạm vi.** Tính lại SHA-1 của **8/8 Git blob**, đồng thời xác minh LR blob giữ nguyên. Diff từ base có đúng tám tệp, 12 commit ahead/0 behind. Main hiện hành chỉ bổ sung hai tệp /an và CHANGELOG, không trùng đường dẫn. Nội dung skill 1.1 giữ nguyên, ngoài đổi version và phần bổ sung 2.0. Ngoại lệ Claude chỉ cho /an và không áp dụng cho Evolution. [Diff candidate](https://github.com/[PRIVATE_REPOSITORY]/compare/851cbacf0eb1a14533b1122d7ae64cff866fac31...e02c5d3e5022f764430e1a9fbe1c003de71eb938) · [Diff main](https://github.com/[PRIVATE_REPOSITORY]/compare/851cbacf0eb1a14533b1122d7ae64cff866fac31...b39d41d25a71c0d54c0170e6d500ca160aebeace) · [Ma trận](https://github.com/[PRIVATE_REPOSITORY]/blob/e02c5d3e5022f764430e1a9fbe1c003de71eb938/governance/ACCEPTANCE-LEARNING-2.0.md#L16-L35)

### Phát hiện cần sửa

| Mức độ | Kỳ vọng → quan sát | Khắc phục |
|---|---|---|
| **Vừa · Evaluator báo có lợi giả khi tổng vượt số nguyên an toàn** | Kiểm từng thành phần là số nguyên an toàn nhưng tổng chỉ kiểm hữu hạn. Trong ba cặp có chất lượng bằng nhau, hai nhánh dùng cùng các thành phần effort tools theo thứ tự khác. Tổng chính xác ở cả hai là `9007199254740994`. JS tính một nhánh thành `9007199254740992`, báo delta `[-2,-2,-2]` và `REVIEW_SIGNAL`. Kỳ vọng số đo không hợp lệ bị từ chối hoặc ghi unknown, không tạo tín hiệu cải thiện. [Kiểm tổng](https://github.com/[PRIVATE_REPOSITORY]/blob/e02c5d3e5022f764430e1a9fbe1c003de71eb938/reference/evaluator-regression.js#L12-L19) · [Tính delta](https://github.com/[PRIVATE_REPOSITORY]/blob/e02c5d3e5022f764430e1a9fbe1c003de71eb938/reference/evaluator-regression.js#L38-L47) | Kiểm tổng an toàn cho tools/tokens hoặc dùng phép cộng chính xác đã quy định kiểu đầu ra. Thêm hồi quy tổng bằng nhau theo hoán vị vai, tràn tổng và delta sát biên. |
| **Vừa · Skill Health cộng hai revision đối nghịch cùng được khai hiện hành** | Hai receipt hợp lệ về schema cùng project/task/skill/check, một revision PASS và một revision FAIL đều `current=true` → `REPORT_ONLY`, PASS=1, FAIL=1, independent=2, distinctEvaluatedTasks=1. Không làm tăng số nhiệm vụ hoặc báo lỗi tái diễn, nhưng phép đếm hiện hành vẫn chứa cả hai dù chưa phân giải bản bị thay thế. Kỳ vọng HOLD khi các khai báo hiện hành mâu thuẫn, hoặc chỉ đếm revision được xác thực. [Hợp đồng](https://github.com/[PRIVATE_REPOSITORY]/blob/e02c5d3e5022f764430e1a9fbe1c003de71eb938/governance/SKILL-HEALTH-2.0.md#L4-L9) · [Bộ tổng hợp](https://github.com/[PRIVATE_REPOSITORY]/blob/e02c5d3e5022f764430e1a9fbe1c003de71eb938/reference/skill-health-regression.js#L10-L31) | Tách reconciliation theo bản ghi hiện hành trước khi tổng hợp. Nếu nhiều revision vẫn tự khai hiện hành cho cùng phép quan sát, loại khỏi số đếm đến khi phân giải hoặc `HOLD_CONFLICT`. Giữ lịch sử và không gộp retry thành nhiệm vụ mới. |

### Kiểm định theo cổng

| Mục | Kết quả | Bằng chứng và giới hạn |
|---|---|---|
| EVO01–05 | PASS thiết kế | Sổ nguồn/bài học 1.1 giữ nguyên, phần mới giữ phân biệt mức độ đọc, quảng cáo và chứng cứ. Instinct có trigger, action, scope, nguồn và giới hạn. Issue #10 xác nhận digest PPTX/MP4 và trạng thái pilot ở cấp hồ sơ. [Instincts](https://github.com/[PRIVATE_REPOSITORY]/blob/e02c5d3e5022f764430e1a9fbe1c003de71eb938/knowledge/INSTINCTS.md#L2-L15) · [Issue #10](https://github.com/[PRIVATE_REPOSITORY]/issues/10) |
| EVO06–10 | PASS thiết kế nguồn/handoff, kiểm hiệu quả thực NOT_RUN | Giữ kiểm quyền, bản chiếu tối thiểu, chặn release từ reference, QA/Claude/Owner, fallback trực tiếp, trạng thái chưa cài/đồng bộ và giữ lịch sử thay thế. LR40 vẫn đúng kỳ vọng. [Skill](https://github.com/[PRIVATE_REPOSITORY]/blob/e02c5d3e5022f764430e1a9fbe1c003de71eb938/skills/ai-army-learning-evolution/SKILL.md#L27-L45) · [Vòng học](https://github.com/[PRIVATE_REPOSITORY]/blob/e02c5d3e5022f764430e1a9fbe1c003de71eb938/skills/ai-army-learning-evolution/SKILL.md#L63-L74) |
| E2-01–03 | PASS thiết kế | 1.1, roster và Core được bảo toàn. So hồ sơ SLIDE/VIDEO và release 1.1. RETRO giữ cả kết quả tốt, hạn chế và thất bại, không có raw chat/log. [Instincts](https://github.com/[PRIVATE_REPOSITORY]/blob/e02c5d3e5022f764430e1a9fbe1c003de71eb938/knowledge/INSTINCTS.md#L5-L15) · [Release 1.1](https://github.com/[PRIVATE_REPOSITORY]/issues/1#issuecomment-7211304078) |
| E2-04–05 | PASS mô phỏng có giới hạn | LR40/EL36 đạt; stale hoặc bị thu hồi bị chặn khi bản ghi phản ánh đúng trạng thái, scope dự án và đề xuất global được kiểm. SHA chứng cứ sai ngữ nghĩa hoặc trusted flags sai vẫn có thể trả `REVIEW_READY`; hợp đồng đã ghi rõ đây là việc xác minh thủ công. [Reference](https://github.com/[PRIVATE_REPOSITORY]/blob/e02c5d3e5022f764430e1a9fbe1c003de71eb938/reference/evolution-regression.js#L8-L30) · [Giới hạn](https://github.com/[PRIVATE_REPOSITORY]/blob/e02c5d3e5022f764430e1a9fbe1c003de71eb938/governance/ACCEPTANCE-LEARNING-2.0.md#L15) |
| E2-06 | **FAIL phần đo tổng hợp** · đối chứng thực NOT_RUN | Ca sai số tools tạo tín hiệu cải thiện giả như trên. Khi mục tiêu seconds tốt hơn nhưng tools xấu hơn, reference vẫn hiện cả hai delta, chỉ là tín hiệu theo mục tiêu. Không có tuyên bố hiệu quả tổng thể. |
| E2-07–10 | PASS thiết kế | Giữ checkpoint, blocker, revision, next và gate. Rollback phải xác minh lại, không hồi sinh quyền; khóa tự động hóa, cấp quyền, chi phí và phát hành. [Skill](https://github.com/[PRIVATE_REPOSITORY]/blob/e02c5d3e5022f764430e1a9fbe1c003de71eb938/skills/ai-army-learning-evolution/SKILL.md#L65-L74) · [Cổng](https://github.com/[PRIVATE_REPOSITORY]/blob/e02c5d3e5022f764430e1a9fbe1c003de71eb938/governance/ACCEPTANCE-LEARNING-2.0.md#L25-L29) |
| SH | 30/30 ca gốc; ca biên revision FAIL | Hai retry cùng task cho distinct=1, WATCH, không recurrence. Dùng lại evidence ID giữa hai task → `HOLD_CONFLICT`; receipt stale bị loại. Hai revision đồng thời tự khai hiện hành cần reconciliation như phát hiện trên. [Reference](https://github.com/[PRIVATE_REPOSITORY]/blob/e02c5d3e5022f764430e1a9fbe1c003de71eb938/reference/skill-health-regression.js#L10-L31) |
| EV | 36/36 ca gốc; ca biên số nguyên FAIL · giới hạn manual | Gửi 3/4 cặp đã đăng ký, lặp input với ID mới, hoặc chỉ có digest context chung đều có thể trả `REVIEW_SIGNAL`; reference không nắm danh sách đăng ký ngoài hoặc metadata từng nhánh. Đây là giới hạn đã công bố. Verifier phải đối chiếu đủ danh sách trước khi chấp nhận, kiểm tính độc lập của input và receipt từng nhánh; thiếu thì INCONCLUSIVE. Tổng seconds vô hạn bị INVALID. [Hợp đồng đối chứng](https://github.com/[PRIVATE_REPOSITORY]/blob/e02c5d3e5022f764430e1a9fbe1c003de71eb938/governance/EVALUATOR-1.0.md#L4-L13) |

**Chạy độc lập offline.** Một tiến trình Node VM, các fixture tổng hợp, không tải dependency. LR22/LR40/EL33/SH28/EV31 chỉ minh họa giới hạn xác nhận đầu vào. Các nhánh kiểm tra thêm đều giữ `authorized:false`; SH/EV giữ `promotion:false`.
```text
BLOB 1c124bd35f4cb874f78ec8efd18fccb857929b7a governance/ACCEPTANCE-LEARNING-2.0.md
BLOB f9b294a573d05a47b71cbf04045642835a32d897 governance/EVALUATOR-1.0.md
BLOB 9d2a60c6ea572c975cf050b1db8b58672883accb governance/SKILL-HEALTH-2.0.md
BLOB dae6f331aff00e482168597629411a7b255ac006 knowledge/INSTINCTS.md
BLOB e5d90576621195143fbd148355c68385e212c15f reference/evaluator-regression.js
BLOB c6f0d31ab15ff6734cae0d070e003865a11bd65b reference/evolution-regression.js
BLOB 7f2cc1730cabb4249897249408e6abecb98b5745 reference/skill-health-regression.js
BLOB ab8f900ae8a5709d42c8ae790aadff1eadb5c534 skills/ai-army-learning-evolution/SKILL.md
BLOB ef7ea87b450346ea9c0de082c12aa1ae7c74b739 reference/learning-regression.js
LR 40/40 PASS
EL 36/36 PASS
SH 30/30 PASS
EV 36/36 PASS
Node v24.22.3 offline 2026-11-27T12:03:32.047Z
```

**Kết luận QA_FAILED.** Director xử lý hai phát hiện, rồi kiểm phần bị ảnh hưởng tại SHA mới. Runtime, ACL thực, đối chứng A/B thực, cải thiện token và efficacy vẫn `NOT_RUN`. Cổng Claude và phê duyệt exact-SHA của Chủ sở hữu vẫn áp dụng cho Evolution. Chi phí phát sinh 0.
````

### Receipt 7217902298
````text
## EVO-ACCEPT-001 rev.3 — QA_PASSED (thiết kế mức B)

**AS-AI-02 · Business phụ 2 / AI Army – QA / Work · `user_attested`.** Lượt `/an` trong cùng phiên được chỉ định. Đã đọc hàng đợi HUB, đối chiếu `EVO-QA-AUTH-002`, việc trước đã bàn giao, chưa thấy nhiệm vụ QA xung đột. Kết nối `[QA_LOGIN_REDACTED]` có quyền đọc kho riêng và ghi báo cáo, khác người tạo commit. Dùng hạn mức sẵn có, chi phí phát sinh 0. **Core main** `b39d41d25a71c0d54c0170e6d500ca160aebeace` · **Candidate** `9c9d5fad26331725c9ad99649b4e6b4f1a79f2f6`. [CURRENT](https://github.com/[PRIVATE_REPOSITORY]/issues/1#issuecomment-7217852669)

**Phạm vi PASS.** Diff từ candidate cũ chỉ sửa đúng năm tệp. Tính lại SHA-1 của 5/5 blob khớp CURRENT. Ba tài liệu chỉ thêm phần sửa, giữ nguyên ma trận và yêu cầu cũ. Core, skill 2.0, sổ tri thức, LR/EL và các quy tắc EVO/E2 ngoài hai phát hiện giữ nguyên. Quy trình phát hành Evolution vẫn có QA độc lập, Claude và Owner duyệt đúng SHA. [Diff](https://github.com/[PRIVATE_REPOSITORY]/compare/e02c5d3e5022f764430e1a9fbe1c003de71eb938...9c9d5fad26331725c9ad99649b4e6b4f1a79f2f6) · [Ma trận](https://github.com/[PRIVATE_REPOSITORY]/blob/9c9d5fad26331725c9ad99649b4e6b4f1a79f2f6/governance/ACCEPTANCE-LEARNING-2.0.md#L16-L38)

| Mục | Kỳ vọng → quan sát | Kết quả |
|---|---|---|
| Skill Health · ca gốc và thứ tự đảo | Hai revision trái ngược cùng khai hiện hành phải chặn trước thống kê → cả hai thứ tự trả `HOLD_CONFLICT`, groups rỗng. Đổi attempt, check, skill/Core SHA vẫn chặn. | PASS · [Code](https://github.com/[PRIVATE_REPOSITORY]/blob/9c9d5fad26331725c9ad99649b4e6b4f1a79f2f6/reference/skill-health-regression.js#L10-L19) |
| Skill Health · stale/retry/evidence | Chỉ bản còn hiệu lực được đếm → bản cũ stale bị loại, PASS=1/FAIL=0/excluded=1. Retry cùng revision vẫn một task, `WATCH`, không recurrence. Evidence dùng lại giữa hai task → `HOLD_CONFLICT`. | PASS · [Code](https://github.com/[PRIVATE_REPOSITORY]/blob/9c9d5fad26331725c9ad99649b4e6b4f1a79f2f6/reference/skill-health-regression.js#L21-L34) |
| Evaluator · ca sai số gốc đảo vai | Cùng tổng chính xác `9007199254740994` vượt miền số nguyên an toàn không được sinh lợi giả → cả hai thứ tự trả `INVALID`. Tổng token vượt biên ở chỉ số ngoài mục tiêu vẫn `INVALID`. | PASS · [Kiểm tổng](https://github.com/[PRIVATE_REPOSITORY]/blob/9c9d5fad26331725c9ad99649b4e6b4f1a79f2f6/reference/evaluator-regression.js#L12-L24) |
| Evaluator · biên hợp lệ | Tổng bằng nhau tại biên → delta 0 và `INCONCLUSIVE`. Giảm đúng một lượt → delta -1, `REVIEW_SIGNAL`. Đảo chiều → delta +1, `INCONCLUSIVE`. Thu hồi kế hoạch → `HOLD_PLAN`. | PASS · [Tính delta](https://github.com/[PRIVATE_REPOSITORY]/blob/9c9d5fad26331725c9ad99649b4e6b4f1a79f2f6/reference/evaluator-regression.js#L43-L52) |

**Bằng chứng độc lập.** Một tiến trình Node VM offline, fixture tổng hợp. **SH 36/36 + EV 42/42**, thêm **13/13 ca biên**. Tái sử dụng **LR 40/40 + EL 36/36** từ [QA rev.2](https://github.com/[PRIVATE_REPOSITORY]/issues/1#issuecomment-7217815670) sau khi tính lại hai blob và xác nhận diff không sửa hai suite hoặc hợp đồng liên quan. Tổng độ phủ suite 154 ca, trong đó 78 ca thực sự được chạy lại lượt này.
```text
BLOB 7f15d47d93c53600ba9cb68907b3bd5e0f09c83e reference/skill-health-regression.js
BLOB 45fd65f1c0587ab24bcdfea1717887d7c16a9365 reference/evaluator-regression.js
BLOB d7e4f0349610d5e431f578414f114d478473b2ce governance/SKILL-HEALTH-2.0.md
BLOB 67bd7e42add32fbbdbe56cb91f911ebba132f157 governance/EVALUATOR-1.0.md
BLOB d5a3789beb30bf2d0d70f94a6b713439161555ef governance/ACCEPTANCE-LEARNING-2.0.md
BLOB c6f0d31ab15ff6734cae0d070e003865a11bd65b reference/evolution-regression.js
BLOB ef7ea87b450346ea9c0de082c12aa1ae7c74b739 reference/learning-regression.js
SH 36/36
EV 42/42
Node v24.22.3 offline 2026-11-27T12:08:29.059Z
```

**Giới hạn giữ nguyên.** Reference tổng hợp không tự xác thực receipt, ACL, danh sách đối chứng đăng ký trước hay dữ liệu từng nhánh. `REVIEW_SIGNAL` chỉ chuyển sang xem xét thủ công. Runtime, đối chứng A/B thực và hiệu quả/token thực vẫn `NOT_RUN`. Bàn giao **QA_PASSED** cho Director xem xét cổng Claude tại SHA trên. Phát hành chờ quyết định riêng của Chủ sở hữu.
````

### Receipt 7218395004
````text
## EVO-ACCEPT-001 rev.4 — QA_FAILED / HOLD phát hành

**AS-AI-02 · Business phụ 2 / AI Army – QA / Work · mức B `user_attested`**. Dùng cùng phiên đã chỉ định khi nhận `/an`; đã đối chiếu CURRENT `EVO-QA-AUTH-003`, đủ hàng đợi HUB, quyền đọc/ghi báo cáo thực của `[QA_LOGIN_REDACTED]`, lượt trước đã bàn giao và không thấy nhiệm vụ QA xung đột. Dùng công cụ offline/hạn mức sẵn có, chi phí phát sinh 0. **Core main** `b39d41d25a71c0d54c0170e6d500ca160aebeace` · **candidate** `c8de0eb22af4fe14c495fd8113d8eb20e471b968`. [CURRENT](https://github.com/[PRIVATE_REPOSITORY]/issues/1#issuecomment-7218306583)

**Phạm vi:** 5 tệp delta, 8 tệp trong diff đầy đủ so với base và 1 LR blob không đổi. Tính lại **9/9 Git blob** khớp danh mục; ba tài liệu giữ nội dung cũ và chỉ nối phần sửa. Main từ base `851cbacf0eb1a14533b1122d7ae64cff866fac31` chỉ thêm /an và CHANGELOG, không trùng đường dẫn, ngoại lệ /an không áp dụng cho Evolution. QA so thực tế SH01–36 và EV01–42 giữa hai bản: SH giữ nguyên; sau khi quy đổi tên trường/objective từ `seconds` sang `effort_ms`, định nghĩa điều kiện và kỳ vọng của các ca EV lịch sử còn nguyên, gồm EV42 vẫn từ chối tổng tràn. [Delta](https://github.com/[PRIVATE_REPOSITORY]/compare/9c9d5fad26331725c9ad99649b4e6b4f1a79f2f6...c8de0eb22af4fe14c495fd8113d8eb20e471b968) · [Main](https://github.com/[PRIVATE_REPOSITORY]/compare/851cbacf0eb1a14533b1122d7ae64cff866fac31...b39d41d25a71c0d54c0170e6d500ca160aebeace)

| Điểm | Kỳ vọng → quan sát | Kết quả |
|---|---|---|
| P-01 | Audit cần source đủ và quyền riêng → chưa có FINAL_PASS. Không dùng hash thay xác minh nội dung hoặc tự chuyển dữ liệu. | OPEN |
| P-02/P-03/P-09 | R4-E00 tái hiện sai số seconds cũ -2 mỗi cặp. Schema mới `effort_ms` chặn hoán vị vượt biên ở cả hai thứ tự, số âm, số lẻ, payload seconds và tổng chỉ số ngoài mục tiêu. Số nguyên an toàn bằng nhau cho delta 0. | PASS · [Code](https://github.com/[PRIVATE_REPOSITORY]/blob/c8de0eb22af4fe14c495fd8113d8eb20e471b968/reference/evaluator-regression.js#L12-L24) |
| P-04/P-08 | Đối chiếu nguồn/case, kiểm thử độc lập và giữ giới hạn → 169/169 ca suite tại SHA mới. Log gốc rev.3 được chép từ transcript thực thi bên dưới. 154 suite cũ là 78 chạy lại +76 tái dùng; 13 ca biên riêng, tổng 91 lần đánh giá thực trong lượt đó, 167 kết quả được bao phủ, không phải tác vụ thực độc lập. | PASS phần bằng chứng QA |
| P-05 | So chính xác hai diff, giữ compatibility và các cổng → main không chồng lấn delta, QA/Claude/Owner của Evolution vẫn bắt buộc. | PASS |
| P-06 | Chỉ số ngoài mục tiêu vẫn hiển thị, thiếu phê duyệt tradeoff thì INCONCLUSIVE ở bước thủ công → R4-E09 trả `REVIEW_SIGNAL` với effort_ms=-1, tools=+4, tokens=null. Tài liệu buộc đối chiếu mọi delta/unknown với giới hạn đăng ký trước; reference không quyết định vượt tradeoff. | PASS thiết kế/mô phỏng · [Quy tắc](https://github.com/[PRIVATE_REPOSITORY]/blob/c8de0eb22af4fe14c495fd8113d8eb20e471b968/governance/EVALUATOR-1.0.md#L21-L22) |
| P-07 | Chặn alias chữ hoa/thường và khoảng trắng của task trong cùng project/kind, giữ phân tách skill → chặn khác hoa/thường và khoảng trắng ngoài, cùng revision khác skill tách hai nhóm, mâu thuẫn revision hoặc evidence trùng bị chặn. **R4-S07 thất bại với khoảng trắng bên trong.** | **FAIL · Vừa** · [Quy tắc](https://github.com/[PRIVATE_REPOSITORY]/blob/c8de0eb22af4fe14c495fd8113d8eb20e471b968/governance/SKILL-HEALTH-2.0.md#L23-L24) · [Code](https://github.com/[PRIVATE_REPOSITORY]/blob/c8de0eb22af4fe14c495fd8113d8eb20e471b968/reference/skill-health-regression.js#L13-L21) |

**Phát hiện P-07:** Hai receipt tổng hợp cùng project/kind, task chỉ khác một ký tự khoảng trắng bên trong (`T 1` và `T  1`), cùng lỗi `I`. Kỳ vọng `HOLD_CONFLICT` theo quy tắc alias của tài liệu. Kiểm tra alias chỉ dùng `trim().toUpperCase()`. Kết quả `REPORT_ONLY`, FAIL=2, distinctEvaluatedTasks=2, recurringIssues=[I], `REVIEW_NEEDED`. Cần quy định biểu diễn ID task chuẩn và từ chối ID không đúng quy ước, hoặc chặn các biến thể khoảng trắng phù hợp quy tắc. Giữ kiểm thủ công đối với alias ngữ nghĩa và nguồn bằng chứng chung; thêm hồi quy khoảng trắng trong ID. Không coi receipt khác ID là tự động độc lập. [Đếm lỗi tái diễn](https://github.com/[PRIVATE_REPOSITORY]/blob/c8de0eb22af4fe14c495fd8113d8eb20e471b968/reference/skill-health-regression.js#L30-L37)

### Chạy độc lập rev.4
Node VM offline, một tiến trình, fixture tổng hợp, không dependency ngoài. **169/169 ca suite đạt.** Có **17 ca biên trên candidate, 16 đạt và 1 trượt**, cộng 1 lần xác nhận lỗi trên bản cũ (E00). Tất cả kết quả giữ `authorized:false` và `promotion:false`. Với ca evaluator, ba cặp SYNTHETIC độc lập về ID, hashes cố định, cả hai nhánh PASS, chi phí 0, kiểm duyệt hiện hành; vector theo thứ tự controller/worker/verifier/retry. Ca Skill Health mặc định project P, task T1, revision 1, attempt 1, kind SYNTHETIC, FAIL issue I, current/reviewed=true, hai receipt/evidence riêng trừ ca trùng.
```text
BLOB 59bf11ad33b3d37a1603fdddba74b0c17582455f governance/ACCEPTANCE-LEARNING-2.0.md
BLOB ec2b0c9120a91b632454b151ce9496d55271b2c2 governance/EVALUATOR-1.0.md
BLOB 41e6f2718e36b5e07ca700c48e6b3c0b8ac0fdfa governance/SKILL-HEALTH-2.0.md
BLOB dae6f331aff00e482168597629411a7b255ac006 knowledge/INSTINCTS.md
BLOB fc8134e74fac3157c05e729581ec431267bf3f0f reference/evaluator-regression.js
BLOB c6f0d31ab15ff6734cae0d070e003865a11bd65b reference/evolution-regression.js
BLOB 310a6e3b9b35cd2b8439f11fc0afd19fdbba034c reference/skill-health-regression.js
BLOB ab8f900ae8a5709d42c8ae790aadff1eadb5c534 skills/ai-army-learning-evolution/SKILL.md
BLOB ef7ea87b450346ea9c0de082c12aa1ae7c74b739 reference/learning-regression.js
SH 42/42
EV 51/51
LR 40/40
EL 36/36
Node v24.22.3 offline 2026-11-27T12:32:13.736Z
```
```jsonl
{"id":"R4-E00","input":"old seconds, B=[1,1,1e16,0], C=[1e16,1,1,0], three pairs","expected":"reproduce old REVIEW_SIGNAL, seconds -2 each","out":{"status":"REVIEW_SIGNAL","kind":"SYNTHETIC","objective":"seconds","quality":[0,0,0],"differences":{"seconds":[-2,-2,-2],"tools":[0,0,0],"tokens":[null,null,null]},"authorized":false,"promotion":false},"pass":true}
{"id":"R4-E01","input":"effort_ms same permutations","expected":"INVALID","out":{"status":"INVALID","authorized":false,"promotion":false},"pass":true}
{"id":"R4-E02","input":"effort_ms reversed permutations","expected":"INVALID","out":{"status":"INVALID","authorized":false,"promotion":false},"pass":true}
{"id":"R4-E03","input":"effort_ms max safe vs permutation of equal sum","expected":"INCONCLUSIVE","out":{"status":"INCONCLUSIVE","reason":"UNKNOWN_OR_NONUNIFORM_GAIN","quality":[0,0,0],"differences":{"effort_ms":[0,0,0],"tools":[0,0,0],"tokens":[null,null,null]},"authorized":false,"promotion":false},"pass":true}
{"id":"R4-E04","input":"effort_ms max safe vs max safe minus one","expected":"REVIEW_SIGNAL","out":{"status":"REVIEW_SIGNAL","kind":"SYNTHETIC","objective":"effort_ms","quality":[0,0,0],"differences":{"effort_ms":[-1,-1,-1],"tools":[0,0,0],"tokens":[null,null,null]},"authorized":false,"promotion":false},"pass":true}
{"id":"R4-E05","input":"negative effort_ms in candidate verifier","expected":"INVALID","out":{"status":"INVALID","authorized":false,"promotion":false},"pass":true}
{"id":"R4-E06","input":"fractional effort_ms in candidate worker","expected":"INVALID","out":{"status":"INVALID","authorized":false,"promotion":false},"pass":true}
{"id":"R4-E07","input":"legacy seconds payload under current objective","expected":"INVALID","out":{"status":"INVALID","authorized":false,"promotion":false},"pass":true}
{"id":"R4-E08","input":"tokens total max safe plus one, non-target","expected":"INVALID","out":{"status":"INVALID","authorized":false,"promotion":false},"pass":true}
{"id":"R4-E09","input":"effort_ms -1, tools +4, tokens unknown","expected":"REVIEW_SIGNAL","out":{"status":"REVIEW_SIGNAL","kind":"SYNTHETIC","objective":"effort_ms","quality":[0,0,0],"differences":{"effort_ms":[-1,-1,-1],"tools":[4,4,4],"tokens":[null,null,null]},"authorized":false,"promotion":false},"pass":true}
{"id":"R4-E10","input":"receipt current string false","expected":"INVALID","out":{"status":"INVALID","authorized":false,"promotion":false},"pass":true}
{"id":"R4-S01","input":"T1 and t1, same project/kind","expected":"HOLD_CONFLICT","out":{"status":"HOLD_CONFLICT","groups":[],"authorized":false,"promotion":false},"pass":true}
{"id":"R4-S02","input":"space padded T1 and T1, reverse order","expected":"HOLD_CONFLICT","out":{"status":"HOLD_CONFLICT","groups":[],"authorized":false,"promotion":false},"pass":true}
{"id":"R4-S03","input":"same task/revision, different skill/evidence","expected":"REPORT_ONLY","out":{"status":"REPORT_ONLY","groups":[{"key":["P","F","S1","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","cccccccccccccccccccccccccccccccccccccccc","SYNTHETIC","Q"],"counts":{"PASS":0,"FAIL":1,"BLOCKED":0,"NOT_RUN":0,"UNKNOWN":0},"excluded":0,"reported":0,"independent":1,"distinctEvaluatedTasks":1,"recurringIssues":[],"signal":"WATCH"},{"key":["P","F","S2","bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb","cccccccccccccccccccccccccccccccccccccccc","SYNTHETIC","Q"],"counts":{"PASS":0,"FAIL":1,"BLOCKED":0,"NOT_RUN":0,"UNKNOWN":0},"excluded":0,"reported":0,"independent":1,"distinctEvaluatedTasks":1,"recurringIssues":[],"signal":"WATCH"}],"authorized":false,"promotion":false},"pass":true}
{"id":"R4-S04","input":"same task, different current revisions/skills","expected":"HOLD_CONFLICT","out":{"status":"HOLD_CONFLICT","groups":[],"authorized":false,"promotion":false},"pass":true}
{"id":"R4-S05","input":"same evidence ID, different task","expected":"HOLD_CONFLICT","out":{"status":"HOLD_CONFLICT","groups":[],"authorized":false,"promotion":false},"pass":true}
{"id":"R4-S06","input":"receipt current string false","expected":"INVALID","out":{"status":"INVALID","groups":[],"authorized":false,"promotion":false},"pass":true}
{"id":"R4-S07","input":"T 1 vs T  1, alternate internal whitespace, same project/kind","expected":"HOLD_CONFLICT","out":{"status":"REPORT_ONLY","groups":[{"key":["P","F","S1","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","cccccccccccccccccccccccccccccccccccccccc","SYNTHETIC","Q"],"counts":{"PASS":0,"FAIL":2,"BLOCKED":0,"NOT_RUN":0,"UNKNOWN":0},"excluded":0,"reported":0,"independent":2,"distinctEvaluatedTasks":2,"recurringIssues":["I"],"signal":"REVIEW_NEEDED"}],"authorized":false,"promotion":false},"pass":false}
```

### Bằng chứng lịch sử rev.3
13 dòng stdout gốc từ transcript lần chạy 2026-11-27T12:08:29.059Z trên `9c9d5fad26331725c9ad99649b4e6b4f1a79f2f6`, chỉ để đối chiếu lịch sử. S01/S02/S03 dùng hai revision có kết quả trái ngược và biến thể thứ tự hoặc attempt/check/skill/Core; S04 đánh dấu revision cũ stale; S05 retry cùng revision; S06 cùng evidence khác task. V01/V02 dùng vector tools hai nhánh `[2,1,MAX_SAFE_INTEGER,0]` và `[MAX_SAFE_INTEGER,2,1,0]`, rồi đảo. V03 hai hoán vị cùng tổng MAX_SAFE_INTEGER; V04 candidate thấp hơn một đơn vị; V05 đảo V04; V06 chỉ token không mục tiêu có nhánh tổng MAX_SAFE_INTEGER+1; V07 thu hồi authority kế hoạch.
```text
S01 original opposite revisions PASS expected=HOLD_CONFLICT, zero groups observed={"status":"HOLD_CONFLICT","groups":[],"authorized":false,"promotion":false}
S02 reversed opposite revisions PASS expected=HOLD_CONFLICT, zero groups observed={"status":"HOLD_CONFLICT","groups":[],"authorized":false,"promotion":false}
S03 across attempt/check/skill/Core PASS expected=HOLD_CONFLICT, zero groups observed={"status":"HOLD_CONFLICT","groups":[],"authorized":false,"promotion":false}
S04 stale old revision PASS expected=REPORT_ONLY: PASS 1, FAIL 0, excluded 1 observed={"key":["P","F","S","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","cccccccccccccccccccccccccccccccccccccccc","SYNTHETIC","Q"],"counts":{"PASS":1,"FAIL":0,"BLOCKED":0,"NOT_RUN":0,"UNKNOWN":0},"excluded":1,"reported":0,"independent":1,"distinctEvaluatedTasks":1,"recurringIssues":[],"signal":"OBSERVED_NO_FAILURE"}
S05 retry PASS expected=WATCH, one distinct task, no recurring issue observed={"key":["P","F","S","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","cccccccccccccccccccccccccccccccccccccccc","SYNTHETIC","Q"],"counts":{"PASS":0,"FAIL":2,"BLOCKED":0,"NOT_RUN":0,"UNKNOWN":0},"excluded":0,"reported":0,"independent":2,"distinctEvaluatedTasks":1,"recurringIssues":[],"signal":"WATCH"}
S06 shared evidence another task PASS expected=HOLD_CONFLICT, zero groups observed={"status":"HOLD_CONFLICT","groups":[],"authorized":false,"promotion":false}
V01 original rounding counterexample PASS expected=INVALID observed={"status":"INVALID","authorized":false,"promotion":false}
V02 reversed rounding counterexample PASS expected=INVALID observed={"status":"INVALID","authorized":false,"promotion":false}
V03 exact equality at safe max PASS expected=INCONCLUSIVE delta 0,0,0 observed={"status":"INCONCLUSIVE","reason":"UNKNOWN_OR_NONUNIFORM_GAIN","quality":[0,0,0],"differences":{"seconds":[null,null,null],"tools":[0,0,0],"tokens":[null,null,null]},"authorized":false,"promotion":false}
V04 real delta -1 at safe max PASS expected=REVIEW_SIGNAL delta -1,-1,-1 observed={"status":"REVIEW_SIGNAL","kind":"SYNTHETIC","objective":"tools","quality":[0,0,0],"differences":{"seconds":[null,null,null],"tools":[-1,-1,-1],"tokens":[null,null,null]},"authorized":false,"promotion":false}
V05 reversed valid delta +1 PASS expected=INCONCLUSIVE delta 1,1,1 observed={"status":"INCONCLUSIVE","reason":"UNKNOWN_OR_NONUNIFORM_GAIN","quality":[0,0,0],"differences":{"seconds":[null,null,null],"tools":[1,1,1],"tokens":[null,null,null]},"authorized":false,"promotion":false}
V06 invalid non-target token aggregate PASS expected=INVALID observed={"status":"INVALID","authorized":false,"promotion":false}
V07 revoked plan PASS expected=HOLD_PLAN observed={"status":"HOLD_PLAN","authorized":false,"promotion":false}
```

**Kết luận QA_FAILED.** P-07 cần sửa và kiểm định lại tại SHA mới. P-01 và final audit vẫn mở. Runtime, ACL thực, đối chứng A/B và hiệu quả thực `NOT_RUN`. Không phát sinh chi phí.
````

### Receipt 7218622083
````text
## EVO-ACCEPT-001 rev.5 — QA_PASSED (delta P-07, thiết kế mức B)

**AS-AI-02 · Business phụ 2 / AI Army – QA / Work · `user_attested`.** Nhận qua `/an` cùng phiên đã chỉ định. Đối chiếu `EVO-QA-AUTH-004`, kết quả bàn giao rev.4, hàng đợi HUB đủ và không có việc QA xung đột. Kết nối `[QA_LOGIN_REDACTED]` có quyền đọc kho và ghi báo cáo, khác người tạo commit. Giữ hạn mức sẵn có, chi phí phát sinh 0. **Core main** `b39d41d25a71c0d54c0170e6d500ca160aebeace` · **candidate** `29c66936df62e97078fda0b6dc81da30a745b228`. [CURRENT](https://github.com/[PRIVATE_REPOSITORY]/issues/1#issuecomment-7218575186)

**Phạm vi.** Diff chứa đúng ba tệp. Tính lại SHA-1 của cả ba blob. Hai tài liệu chỉ thêm phần sửa P-07, giữ lịch sử FAIL. Trong phần xử lý reference chỉ một dòng tạo khóa va chạm thay đổi; 42 ca SH cũ giữ nguyên và 8 ca mới được thêm. Không đổi phân nhóm, revision, retry, quyền và cổng phát hành. [Diff](https://github.com/[PRIVATE_REPOSITORY]/compare/c8de0eb22af4fe14c495fd8113d8eb20e471b968...29c66936df62e97078fda0b6dc81da30a745b228) · [Code](https://github.com/[PRIVATE_REPOSITORY]/blob/29c66936df62e97078fda0b6dc81da30a745b228/reference/skill-health-regression.js#L12-L36) · [Ma trận](https://github.com/[PRIVATE_REPOSITORY]/blob/29c66936df62e97078fda0b6dc81da30a745b228/governance/ACCEPTANCE-LEARNING-2.0.md#L40-L44)

| Kiểm tra | Kết quả quan sát |
|---|---|
| **P-07/R4-S07** | `T 1` với `T  1` trả `HOLD_CONFLICT` và nhóm rỗng ở cả hai thứ tự. Chữ khác hoa/thường kèm tab/NBSP, dấu phân dòng/BOM và alias trong receipt stale cũng bị chặn trước thống kê. Không sinh recurrence giả. |
| Tách nhiệm vụ và retry | Hai ID thực sự khác khóa giữ hai nhiệm vụ và báo đúng lỗi tái diễn. Cùng ID retry giữ một nhiệm vụ và `WATCH`. Khác project hoặc kind vẫn tách. |
| Giới hạn chuẩn hóa | Biến thể U+200B ngoài ECMAScript whitespace còn có thể trả hai nhiệm vụ. Đây là ca minh họa giới hạn đã nêu, cần xác minh ID và provenance với bản ghi có thẩm quyền trước sử dụng tín hiệu. Khóa trùng chỉ HOLD để đối soát; không tự gộp ID. [Giới hạn](https://github.com/[PRIVATE_REPOSITORY]/blob/29c66936df62e97078fda0b6dc81da30a745b228/governance/SKILL-HEALTH-2.0.md#L26-L27) |
| Hiệu lực chứng cứ rev.4 | **127/127 LR40 + EL36 + EV51** giữ hiệu lực. Đã tính lại SHA-1 cả ba blob và xác nhận chúng cùng các quy tắc liên quan không đổi trong diff. Bằng chứng trước về giới hạn số nguyên, `effort_ms`, thu hồi kế hoạch, scope và review tradeoff vẫn áp dụng. Các ca SH bị ảnh hưởng được chạy mới, bao gồm tái kiểm lỗi P-07 thay vì kế thừa FAIL. [QA rev.4](https://github.com/[PRIVATE_REPOSITORY]/issues/1#issuecomment-7218395004) |

**Chạy độc lập:** **SH 50/50**, thêm **10/10 ca biên theo kỳ vọng**, trong đó S10 xác nhận giới hạn. Tổng độ phủ suite 177 ca, 50 ca suite chạy lại và 127 ca tái dùng. Node VM offline, một tiến trình, không dependency ngoài. Fixture chung cùng project P, kind SYNTHETIC, revision/attempt 1, hai receipt/evidence khác nhau, đều FAIL lỗi I. Các dòng dưới ghi trường thay đổi và kết quả rút gọn.
```text
BLOB 608aacb7a61d5d55b57778786144f3e015e34e41 reference/skill-health-regression.js
BLOB 88f70b41c0d48ec726e1d5427f90b136bafd94e6 governance/SKILL-HEALTH-2.0.md
BLOB 20e74aee255d164c8235bb74358aa727d362015f governance/ACCEPTANCE-LEARNING-2.0.md
BLOB c6f0d31ab15ff6734cae0d070e003865a11bd65b reference/evolution-regression.js
BLOB ef7ea87b450346ea9c0de082c12aa1ae7c74b739 reference/learning-regression.js
BLOB fc8134e74fac3157c05e729581ec431267bf3f0f reference/evaluator-regression.js
SH 50/50
Node v24.22.3 offline 2026-11-27T12:44:03.380Z
```
```jsonl
{"id":"R5-S01","input":[{"task":"T 1"},{"task":"T  1"}],"reverse":false,"expected":"HOLD_CONFLICT empty groups","got":{"status":"HOLD_CONFLICT","groups":[],"authorized":false,"promotion":false},"pass":true}
{"id":"R5-S02","input":[{"task":"T 1"},{"task":"T  1"}],"reverse":true,"expected":"HOLD_CONFLICT empty groups","got":{"status":"HOLD_CONFLICT","groups":[],"authorized":false,"promotion":false},"pass":true}
{"id":"R5-S03","input":[{"task":"EvO-99"},{"task":"evo-\t\u00a099"}],"reverse":false,"expected":"HOLD_CONFLICT empty groups","got":{"status":"HOLD_CONFLICT","groups":[],"authorized":false,"promotion":false},"pass":true}
{"id":"R5-S04","input":[{"task":"T1"},{"task":"T\u20281\ufeff"}],"reverse":false,"expected":"HOLD_CONFLICT empty groups","got":{"status":"HOLD_CONFLICT","groups":[],"authorized":false,"promotion":false},"pass":true}
{"id":"R5-S05","input":[{"task":"T1"},{"task":"T 1","current":false}],"reverse":false,"expected":"HOLD_CONFLICT empty groups","got":{"status":"HOLD_CONFLICT","groups":[],"authorized":false,"promotion":false},"pass":true}
{"id":"R5-S06","input":[{"task":"T 1"},{"task":"T 2"}],"reverse":false,"expected":"REPORT_ONLY two tasks, real recurrence","got":{"status":"REPORT_ONLY","groups":[{"distinct":2,"recurrence":["I"],"signal":"REVIEW_NEEDED","excluded":0}],"authorized":false,"promotion":false},"pass":true}
{"id":"R5-S07","input":[{"task":"T 1"},{"task":"T 1","attempt":2}],"reverse":false,"expected":"REPORT_ONLY one task, WATCH","got":{"status":"REPORT_ONLY","groups":[{"distinct":1,"recurrence":[],"signal":"WATCH","excluded":0}],"authorized":false,"promotion":false},"pass":true}
{"id":"R5-S08","input":[{"task":"T1"},{"task":"T 1","project":"OTHER"}],"reverse":false,"expected":"REPORT_ONLY separate projects","got":{"status":"REPORT_ONLY","groups":[{"distinct":1,"recurrence":[],"signal":"WATCH","excluded":0},{"distinct":1,"recurrence":[],"signal":"WATCH","excluded":0}],"authorized":false,"promotion":false},"pass":true}
{"id":"R5-S09","input":[{"task":"T1"},{"task":"T 1","kind":"REAL"}],"reverse":false,"expected":"REPORT_ONLY separate kinds","got":{"status":"REPORT_ONLY","groups":[{"distinct":1,"recurrence":[],"signal":"WATCH","excluded":0},{"distinct":1,"recurrence":[],"signal":"WATCH","excluded":0}],"authorized":false,"promotion":false},"pass":true}
{"id":"R5-S10","input":[{"task":"T1"},{"task":"T\u200b1"}],"reverse":false,"expected":"REPORT_ONLY documented non-whitespace limit","got":{"status":"REPORT_ONLY","groups":[{"distinct":2,"recurrence":["I"],"signal":"REVIEW_NEEDED","excluded":0}],"authorized":false,"promotion":false},"pass":true}
```

**QA_PASSED** cho phần sửa tại đúng SHA. P-01 và kiểm định cuối vẫn mở. Chỉ chuyển nguồn cho Claude sau khi Chủ sở hữu phê duyệt phạm vi chuyển riêng. Runtime, ACL thực, đối chứng A/B và hiệu quả thực vẫn `NOT_RUN`. Phát hành chờ kiểm định cuối và phê duyệt đúng SHA của Chủ sở hữu.
````

### Receipt 7218660618
````text
## EVO-ACCEPT-001 rev.5 — Director receipt / QA_PASSED / awaiting_final_audit
AS-AI-00 / Cá nhân / AnSpace AI Agent / Chat thường. Manual B. Current official main b39d41d25a71c0d54c0170e6d500ca160aebeace; frozen candidate 29c66936df62e97078fda0b6dc81da30a745b228; original base 851cbacf0eb1a14533b1122d7ae64cff866fac31. Received independent QA #7218622083, AS-AI-02 Business phụ 2 / AI Army – QA / Work High, user_attested per report, not platform system_verified. Verified exact three-file delta from c8de0eb22af4fe14c495fd8113d8eb20e471b968 and 9/9 expected blobs (8 changed candidate files + unchanged LR). SH50/50 independently rerun and 10/10 additional edge expectations, retained 127 unchanged suite results by QA verification; total 177 suite coverage, not 177 reruns. R5-S10 deliberately demonstrates residual U+200B alias limit; not proof all aliases detected. Manual authoritative task identity/provenance review remains mandatory. Prior QA rev4 #7218395004 supplies 13 historical edge outputs, 169 suite and 17 edges incl R4-S07 fail; preserve history. P-02–09 addressed within bounded design/manual-B scope and reported evidence; Claude PARTIAL_REVIEW not superseded by QA. P-01 source completeness/authorized transfer and final audit remain open. No real A/B, runtime, ACL or efficacy/token claims. QA task COMPLETED; no further QA dispatch unless actual change/defect. Next step owner explicit approval of minimum source packet to Claude external user-mediated audit session (not ChatGPT workspace; access/quota unverified): 8 exact candidate files + LR, baseline 1.1 and relevant Core/Governance/Token Optimizer/handoff, exact diffs and QA evidence; inspect for sensitive content and redact metadata, no secrets/account/roster/private project data, no ACL changes. If any redaction prevents exact audit, explicitly report limitation and retain gate. No transfer yet. Owner exact SHA release approval after final audit separately. Main unchanged, no merge/Production/level C/new spend.
````

### Receipt 7211304078
````text
## HUB-001 — RELEASE-LEARN-001 / thông báo chung AS-AI-00–04
PR #5 released 2026-11-27 06:11 UTC / 13:11 ICT, official main 851cbacf0eb1a14533b1122d7ae64cff866fac31; exact owner-approved candidate 6c662e3d5810a6be8d95cb4e536caaf2c467c495, entire tree identical and 8/8 released blobs + 5/5 mandatory Core blobs verified. Release record https://github.com/[PRIVATE_REPOSITORY]/pull/5#issuecomment-7211300963. Core 2.3/Governance 3.1 official, Learning & Evolution 1.1, Token Optimizer 1.2, handoff 1.1 effective manual B only; historical labels retained, status superseded by release record. F1/F2/F4 accepted by owner, F3/F5 retained, read scope and conditions from release. Read official main and relevant skill on next authorized task; role-index first, reuse verified scoped knowledge, no duplicate learning; keep mandatory Core and independent gates. Four Core mirror bytes unchanged, prior mirror source SHA remains as recorded, not proof of current HEAD or new skill availability. No acknowledgement requested merely to repeat study; notification posted only, no claim individual sessions received/installed/synced. AS-AI-01 GRAPH-001 rev.3 HOLD preserved, no repeat preflight in unchanged environment; AS-AI-02 QA-LEARN-001 complete; AS-AI-03 Knowledge and AS-AI-04 Research standby, no duplicate tasks or new modules. Director now prioritizes KHBD Hóa học using approved AnSpace KHBD v2.4, only task-specific evidence/skills, stage approvals, independent QA and final Claude as applicable; preserve locked KHBD work, no assumption which new lesson user wants, no new lesson draft or scope change until defined. No Level C, paid resources, runtime activation, or new infrastructure.
````

### Receipt 7217710857
````text
## RELEASE-AN-001 — OWNER_ACCEPTED / RELEASED, manual B only
Owner explicitly approved exact 0fce7ce96a1989db25b2d3deeffba1a9c44e8240, merge, verification, sync and notice, zero new spend, no C. PR #11 merged 2026-11-27T11:58:12Z; official main b39d41d25a71c0d54c0170e6d500ca160aebeace. QA rev3 #7217641274, Director #7217661085; 52/52 synthetic rev2 results retained by independent QA unchanged reference. Narrow owner Claude exception only /an utility, not other work. Postmerge full-tree delta verified exactly three approved blobs, no removed files: CHANGELOG 2b074bf4175d32b0d0a14f98e6c7f7d6fd983719, skill fbbf46b0d66203537cd5083f58a7decb5d467c6d, reference 8f15c3ebe6c040ecccdbc7b2f5177198d5db2771. Mandatory Core/Governance unchanged except reviewed CHANGELOG. Release record establishes official status despite historical candidate labels retained to preserve approved bytes. Existing Drive mirror [PRIVATE_DRIVE_LINK_REDACTED] updated in place BEFORE member notice, 4/4 canonical text sections exact, manifest source b39d41d25a71c0d54c0170e6d500ca160aebeace, existing link-reader (not searchable)/owner ACL preserved from prior RELEASE-31-001; no new share, only four Core files, no roster/project data/secrets. Mirror does not grant live /an access. /an rev3 runtime NOT_RUN, no native slash command or automatic activation, no claim individual installs/sync. No workflow, ACL, Production, new cost or level C. Owner approval scoped to release/authorized manual B rollout; independent permission and session checks remain.
````

## 6. Required output
Candidate SHA; sources actually read/unread; hashes independently computed only if possible; tests actually executed/unexecuted; F01–F08 matrix with evidence, P-01–P-09 dispositions, severity and blocker; conclusion and minimum next action. No FINAL_PASS by assumption, no edit/merge/publish/permission change.
