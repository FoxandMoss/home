# Foxmoss Website Repository Execution Rules

These rules are authoritative for repository work in `FoxandMoss/home`. They deliberately mirror the useful parts of Emira's root execution model: explicit routing, one bounded active Working, source owners separate from Workings, current-source truth, preserved history, and precise evidence states.

If an older README, template instruction, TODO, handoff, or historical website note conflicts with these rules about **how to execute or what must be read**, these rules win unless Aleianna/Alex directly changes them.

## 1. Read route before website work

Before a substantive website edit, audit, deployment change, brand/domain change, or public-copy change, read in this order:

1. **Drive START HERE — website authority router**  
   https://docs.google.com/document/d/13Tl_Drg-jjCB6U0d7gu7GSnW-ESKFcU00Deqb4WoldM/edit
2. **Drive Website Working Queue**  
   https://docs.google.com/document/d/1TsfOy_EkQIcsYBgJ_Nj-Mxj8_n8KzvfDfuldcSiOLvY/edit
3. The **ACTIVE Website Working** named by that queue.
4. [`WEBSITE-AUTHORITY.md`](WEBSITE-AUTHORITY.md).
5. Only the source-owner documents and repository files relevant to the requested scope.
6. Fresh current `gh-pages` head and affected source before judging implementation state.

Do not make every historical file a mandatory read. The router and Working exist to select the complete **relevant** read set.

## 2. Authority and truth boundaries

Direct current user instruction outranks stored project documentation.

The Drive START HERE/Working Queue owns **routing**. The ACTIVE Working owns its bounded objective, requirements, exclusions, open decisions, and acceptance criteria. Topic/source-owner documents own their subject matter. Current Git source owns what is actually implemented.

A planning document is not proof that source exists. Current source is not permission to preserve a stale product decision. When source and an owner disagree, reconcile the disagreement explicitly.

Historical Workings, handoffs, screenshots, template instructions, and old release notes are provenance only unless the current router/Working points back or a genuine unresolved ambiguity requires them.

## 3. Current public-site direction

At the time this rule was created:

- formal identity direction: **Foxmoss Studio**;
- compact mark/name: **Foxmoss / FOXMOSS**;
- intended canonical domain: **foxmoss.studio**;
- domain purchase/DNS/custom-domain cutover is **not** implied complete;
- public product set: **Emira only**;
- Wordleaf, Nalia, and Storage Guard remain preserved but unpublished until explicitly restored;
- `Things made with care.` remains part of the identity.

Older production/source/docs still contain `Fox & Moss`. That is a migration state, not automatic authority to mix both names forever. Do not claim the rename is source-complete until the active Working actually reconciles it.

## 4. Git is implementation truth

The public site publishes from `gh-pages`. Always fetch/read the current head before editing; never treat a handoff SHA as a permanent selector.

Implementation counts only when the actual source is changed and committed. A Drive plan, TODO checkbox, comment, or proposed patch is not an applied website change.

Use precise status language:

- **PLANNED** — requirement/architecture exists only in planning.
- **APPLIED** — source change is committed to the working/publishing branch.
- **VALIDATED** — the relevant checks actually executed and passed for that exact source.
- **DEPLOYED** — the public hosting surface was actually observed serving the intended source/behavior.
- **DOMAIN LIVE** — DNS/custom-domain/HTTPS behavior was actually observed, not merely configured or planned.
- **CLOSED / ACCEPTED** — the Working's acceptance criteria are satisfied or the user explicitly accepts/closes it.

Do not collapse these stages.

## 5. One active Website Working

The live queue is:

https://docs.google.com/document/d/1TsfOy_EkQIcsYBgJ_Nj-Mxj8_n8KzvfDfuldcSiOLvY/edit

Exactly one Website Working is ACTIVE unless the user explicitly authorizes a parallel non-executable research/documentation ledger.

Queued Workings may be researched or clarified. Queue status alone does not authorize production source changes.

When a Working materially changes state, reconcile the Drive Working Queue and the Working itself in the same pass. Preserve history; do not leave contradictory current-state blocks unmarked.

## 6. Current active Working

At rule creation:

**WEB-001 — Baseline Inventory + Authority Lock — ACTIVE**  
https://docs.google.com/document/d/19ZI0AnWwuCHmBLuNpv9ZSvGr1TBW05xVbIy1UDeHydc/edit

Fresh queue state wins if this snapshot becomes stale.

## 7. Source-owner read triggers

### Site architecture, accessibility, domain, shared shell
Read the Website Master Plan:
https://docs.google.com/document/d/1jsGnDlELDxsVRj6FTS-kmLN1VB4iPu4MPc8Dc7_n2UM/edit

It is a roadmap/source owner, **not** the live queue controller.

### Emira public wording / feature claims
Read the Emira public-copy owner:
https://docs.google.com/document/d/1ZpqgKcR8Qkkw09MmFK3uzTQySL6V9CJ9Kp5fIW80HcY/edit

If the claim concerns price, trial, entitlement, privacy, App Store/publication readiness, or release state, also read the current Emira publication authority identified by START HERE. Do not publish stale commerce/release claims from old website copy.

### Wordleaf or Nalia restoration
Read their current Drive handoff/owner named by START HERE, then current product repository/release truth. Do not revive stale public download claims merely because old HTML still contains them.

### Windows installer/download behavior
Read [`INSTALLER-CONTRACT.md`](INSTALLER-CONTRACT.md) and current product release truth.

### Programming audit/repair
Inherit the Fox & Moss Global Programming Audit Contract:
https://docs.google.com/document/d/1xJcG6bOwBlc6LogJ38SiqF5v0icpIfcGlB_l5Tqv8yQ/edit

Validation is inside the audit. `not run`, unavailable, zero-step, or unobserved behavior is not PASS.

## 8. Static-source and JavaScript truth must not silently diverge

This is a static GitHub Pages site. JavaScript may enhance routing/presentation, but do not use JavaScript-only hiding or runtime metadata replacement as a substitute for correcting canonical HTML when the intended public content, metadata, accessibility, SEO, no-JS behavior, or crawler-visible truth must change.

If a temporary JS gate exists, record it as temporary/partial in the ACTIVE Working and reconcile the underlying source in the appropriate Working.

## 9. Public product visibility

Hiding a product from the public site does **not** mean deleting its preserved source, documentation, release history, or future route material unless explicitly requested.

Restoring a product requires current product/source-owner review first. Do not assume the hidden copy is still accurate.

## 10. Deployment/domain boundaries

Do not add a guessed `CNAME`, guessed DNS records, or claim custom-domain/HTTPS success before the domain is actually owned and the current GitHub Pages flow is verified.

For domain/DNS/Pages behavior, use the active Working + Website Master Plan + current official GitHub documentation. External documentation may change; old remembered values are not sufficient for DNS/certificate work.

A commit to `gh-pages` is not by itself proof that GitHub Pages has served the change. A configured custom domain is not by itself proof that DNS/HTTPS has converged.

## 11. Audit contract

When the user says **audit** for this website, perform the complete evidence-driven programming audit loop for the bounded scope:

1. establish exact current branch/head and owning authorities;
2. inspect current implementation plus direct consumers/integration seams;
3. compare against ACTIVE Working and relevant source owners;
4. inspect accessibility, routing, no-JS behavior, metadata, privacy/security, release/download wiring, and deployment mechanics as relevant;
5. run every available meaningful validation;
6. simulate important success/failure/edge paths where executable validation is unavailable;
7. fix evidenced in-scope source/docs/validator defects;
8. rerun invalidated checks;
9. reconcile exact results in Git and the ACTIVE Drive Working;
10. stop only at genuine completion or a specifically evidenced external blocker.

Do not turn `audit` into findings-only work unless the user explicitly scopes it read-only.

## 12. Cross-reference maintenance

Whenever a new website Google Doc, Website Working, source owner, Git governance file, or canonical implementation surface is created or materially replaces another:

- update Drive START HERE if future read routing changes;
- update the Drive Working Queue when status/order changes;
- update the ACTIVE Working when its source baseline/requirements/evidence change;
- add a backlink from the new authority to START HERE when practical;
- update `WEBSITE-AUTHORITY.md` when Git/Drive ownership changes;
- preserve superseded history and label it rather than deleting it;
- read back changed authority/source after writes.

## 13. Preserve unrelated work

Do not reset, clean, overwrite, force-update, or delete unrelated work to simplify a website change. Work from fresh current source and keep edits bounded to the ACTIVE Working unless a direct dependency/invariant/release blocker requires expansion.

## 14. Repository source map

The detailed Git ↔ Drive map and per-file read triggers live in [`WEBSITE-AUTHORITY.md`](WEBSITE-AUTHORITY.md). Keep it synchronized with Drive START HERE.
