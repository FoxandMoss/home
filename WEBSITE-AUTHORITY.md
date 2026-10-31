# Foxmoss Website Authority Map

This is the repository-side map connecting the public site source to the Google Drive website authority system. It is intentionally paired with the Drive root router rather than duplicating every product document in Git.

## Start here

**Drive root router — mandatory first read for substantive website work**  
https://docs.google.com/document/d/13Tl_Drg-jjCB6U0d7gu7GSnW-ESKFcU00Deqb4WoldM/edit

**Drive Website Working Queue — current ACTIVE / QUEUED routing**  
https://docs.google.com/document/d/1TsfOy_EkQIcsYBgJ_Nj-Mxj8_n8KzvfDfuldcSiOLvY/edit

**Current Website Working at creation — WEB-001**  
https://docs.google.com/document/d/19ZI0AnWwuCHmBLuNpv9ZSvGr1TBW05xVbIy1UDeHydc/edit

Fresh queue state wins when the active Working changes.

## Git execution owner

[`AGENTS.md`](AGENTS.md) owns repository execution/read rules. Read it before edits.

Current public repository: https://github.com/FoxandMoss/home  
Publishing branch: `gh-pages`

Never freeze a commit hash in this map as permanent current truth. Read the current branch head before implementation/audit work.

## Drive owners and when to read them

| Owner | Role | Read when |
| --- | --- | --- |
| [Website START HERE](https://docs.google.com/document/d/13Tl_Drg-jjCB6U0d7gu7GSnW-ESKFcU00Deqb4WoldM/edit) | Root router / authority map | Every substantive website task |
| [Website Working Queue](https://docs.google.com/document/d/1TsfOy_EkQIcsYBgJ_Nj-Mxj8_n8KzvfDfuldcSiOLvY/edit) | ACTIVE/QUEUED/CLOSED routing | Every substantive website task and any status change |
| [Website Master Plan](https://docs.google.com/document/d/1jsGnDlELDxsVRj6FTS-kmLN1VB4iPu4MPc8Dc7_n2UM/edit) | Architecture, accessibility, domain, roadmap | Shared shell, accessibility, domain, structure, metadata strategy, roadmap |
| [Global Programming Audit Contract](https://docs.google.com/document/d/1xJcG6bOwBlc6LogJ38SiqF5v0icpIfcGlB_l5Tqv8yQ/edit) | Cross-project programming audit contract | Audit/repair/validation/repository correctness work |
| [Emira public-facing copy](https://docs.google.com/document/d/1ZpqgKcR8Qkkw09MmFK3uzTQySL6V9CJ9Kp5fIW80HcY/edit) | Emira outward-facing language | Emira description, feature claims, website/App Store wording |
| [Emira publication/subscription Working](https://docs.google.com/document/d/1rJZmaRFyl8A2Gvygy_v3idWKjQhZf7GPoXoggyuH6pw/edit) | Commerce/privacy/publication evidence | Price, trial, entitlement, privacy, publication/App Store status claims |
| [Wordleaf Development Handoff](https://docs.google.com/document/d/11Ynxmnrq-XCc40H-npjRIqcb9JWwUa8-DOZ2-EdzVM0/edit) | Wordleaf product handoff | Restoring/editing Wordleaf public presence or claims |
| [Nalia Development Handoff](https://docs.google.com/document/d/1TceC8Rhw0dW8E15GBJZK36S-oNSsqltWm8hL_KP_syQ/edit) | Nalia product handoff | Restoring/editing Nalia public presence or claims |

Do not read every owner on every task. Use START HERE + the active Working to select the relevant subset.

## Git owners and source surfaces

### Governance / routing

- [`AGENTS.md`](AGENTS.md): repository execution rules and required read route.
- `WEBSITE-AUTHORITY.md`: this Git ↔ Drive map.
- [`README.md`](README.md): repository orientation and inherited template history; it is **not** the top execution authority.
- [`WEBSITE-TODO.md`](WEBSITE-TODO.md): older front-end review backlog/history. Use only when current Workings still own an item or for provenance.
- [`INSTALLER-CONTRACT.md`](INSTALLER-CONTRACT.md): Windows installer/download owner for public desktop download paths.

### Public source

- `index.html`: root static/canonical HTML, visible site copy, root metadata, hash regions, support/privacy source.
- `script.js`: homepage hash routing, dynamic behavior and download-manifest application. Do not use runtime hiding as a substitute for correcting canonical HTML when public/no-JS/SEO truth must change.
- `style.css`: shared root-page visual system, responsive behavior, focus/motion/layout.
- `page.js`: dedicated product-page shared behavior where used.
- `robots.txt`: crawler policy; pair with sitemap/canonical work.
- `downloads/apps.json` and related download assets/status data: public release/status wiring where applicable.
- `emira/`: canonical Emira product/support page surface where present.
- `wordleaf/`, `nalia/`, and Storage Guard source: preserved unpublished/conditional surfaces. Before restoring, read current product owners and verify claims/downloads.

If later Workings introduce a generated/shared shell, sitemap, 404, CNAME, CI, or other canonical owner, add it here and to START HERE as appropriate.

## Current public direction

Current user direction is:

- formal umbrella identity: **Foxmoss Studio**;
- compact mark/name: **Foxmoss / FOXMOSS**;
- intended domain: **foxmoss.studio**;
- public product set: **Emira only**;
- Wordleaf, Nalia, Storage Guard remain preserved but unpublished;
- retain `Things made with care.` and the handmade botanical identity.

The source still contains older `Fox & Moss` naming and hidden product copy. That is migration debt, not evidence that the current direction changed.

## Known baseline issue captured by WEB-001

Commit `4072c96154e7c2edf2655653ab1714a40cc79929` implemented Emira-only presentation mainly in `script.js`. Static `index.html` still contains/advertises the other products and old metadata.

Therefore:

- runtime presentation may show Emira only;
- no-JS/static/crawler-visible source can still disagree;
- dynamic `document.title`/meta replacement is not canonical source cleanup;
- WEB-001 records this as an observed source/authority conflict to route into the proper implementation Working.

Do not cite the JS patch alone as proof that homepage canonicalization, metadata, accessibility, or no-JS acceptance is complete.

## Read triggers by change class

### Brand / domain
Read START HERE, Queue, ACTIVE Working, Website Master Plan, `AGENTS.md`, current `index.html` metadata/header/footer/structured data, relevant dedicated product pages, and current official GitHub Pages docs before external DNS/Pages changes.

### Navigation / product visibility
Read START HERE, Queue, ACTIVE Working, `index.html`, `script.js`, shared navigation/product pages, and the product owner for any product being restored.

### Emira marketing / privacy / pricing / subscription
Read Emira public-copy owner; add current Emira publication/subscription authority for price/trial/privacy/publication claims. Verify changing factual claims against current product/release truth.

### Accessibility / responsive / motion
Read Website Master Plan accessibility owner + current HTML/CSS/JS + ACTIVE Working + actual validation. Preserve no-JS and reduced-motion requirements where applicable.

### Downloads / installers
Read `INSTALLER-CONTRACT.md`, current product release truth, download manifest/source, and product handoff as applicable.

### Audit
Read `AGENTS.md`, Global Programming Audit Contract, ACTIVE Working, fresh head, affected source, and relevant owners. Execute repair/re-validation loop; unavailable checks are not PASS.

## Cross-reference maintenance

When a new Google website authority, Website Working, Git governance file, or canonical source owner is created/replaced:

1. update Drive START HERE if read routing changes;
2. update the Drive Queue when Working status/order changes;
3. update the ACTIVE Working for baseline/requirement/evidence changes;
4. add a backlink from the new authority to START HERE when practical;
5. update this file when Drive/Git ownership changes;
6. update `AGENTS.md` only when execution rules change;
7. preserve superseded history with labels rather than silently deleting provenance;
8. read back links and changed authority/source after writes.

## Supersession rule

Current routing at the top of START HERE/Queue beats older current-status statements. Current source beats historical implementation descriptions. A current topic owner beats stale public copy about what the product should say or do. Direct current user instruction beats all stored project documents.
