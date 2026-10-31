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

- `index.html`: root static/canonical HTML, visible site copy, root metadata, hash regions, support/privacy source. Current root public discovery is Emira-only.
- `script.js`: homepage hash routing, dynamic behavior and download-manifest application. It preserves old unpublished homepage hashes by redirecting them to Emira; it no longer owns the Emira-only metadata/navigation truth.
- `style.css`: shared root-page visual system, responsive behavior, focus/motion/layout.
- `page.js`: dedicated product-page shared behavior where used. While Wordleaf/Nalia are unpublished, it hides unpublished product links from rendered product-page navigation.
- `emira/index.html`: dedicated Emira product page.
- `wordleaf/index.html`: preserved Wordleaf page; unpublished by current direction until explicitly restored.
- `nalia/index.html`: preserved Nalia page; unpublished by current direction until explicitly restored.
- `sitemap.xml`: crawler route inventory; current inventory advertises only root + Emira.
- `robots.txt`: crawler policy and sitemap pointer; current policy disallows `/home/wordleaf/` and `/home/nalia/` while those pages are unpublished.
- `downloads/apps.json`: shared platform availability/status manifest. Release availability does **not** itself authorize website visibility.
- `downloads/release-policy.json`: verified-release sync policy for desktop products.
- `downloads/StorageGuard-Windows-Installer.exe` and `downloads/storage-guard-latest.json`: Storage Guard release/update artifacts currently stored in this repository. Their existence does not make Storage Guard public on the studio site.
- `.github/workflows/sync-downloads.yml`: release-check/sync automation that can update `downloads/apps.json` and commit the manifest back to `gh-pages`.
- `.github/workflows/verify-downloads.yml`: manifest/endpoint/page-wiring validator. Its page check now requires Emira’s root availability marker and rejects unpublished product links/download markers in `index.html`.
- `testfile.html`: stale public test artifact containing only `testing the text.`; no current product/source-owner purpose identified. Do not treat it as a canonical public route.
- background/avatar/botanical image assets: current visual assets. Asset filenames containing the older `fox-and-moss` form are migration/history, not by themselves naming authority.

If later Workings introduce a generated/shared shell, 404, CNAME, CI, or other canonical owner, add it here and to START HERE as appropriate.

## Current public direction

Current user direction is:

- formal umbrella identity: **Foxmoss Studio**;
- compact mark/name: **Foxmoss / FOXMOSS**;
- intended domain: **foxmoss.studio**;
- public product set: **Emira only**;
- Wordleaf, Nalia, Storage Guard remain preserved but unpublished;
- retain `Things made with care.` and the handmade botanical identity.

The source still contains older `Fox & Moss` naming. That is migration debt, not evidence that the current direction changed.

### Visibility reconciliation — 2026-10-31

Direct user instruction authorized immediate cleanup of the other public links. The current root `index.html` is now statically Emira-only rather than relying on JavaScript to hide Wordleaf, Nalia, and Storage Guard. Its title, description, social descriptions, navigation, Home product card, and root content no longer advertise those unpublished products. The old full hidden product manuals were removed from the root canonical HTML; the dedicated Wordleaf/Nalia source pages remain preserved for later restoration.

Crawler/discovery routing was reconciled at the same time:

- `sitemap.xml` now advertises only the root and `/emira/`;
- `robots.txt` disallows the preserved `/home/wordleaf/` and `/home/nalia/` routes while unpublished;
- `page.js` hides unpublished Wordleaf/Nalia/Storage Guard links from rendered dedicated-page navigation where that shared script is used;
- `script.js` keeps only a legacy-hash fallback for old `#wordleaf`, `#nalia`, and `#storage-guard` bookmarks, routing them to `#emira` instead of restoring unpublished content;
- `.github/workflows/verify-downloads.yml` no longer requires hidden product markers in the root page and now rejects their root links/download markers.

The release manifest may still contain Wordleaf, Nalia, and Storage Guard entries. That is release-channel truth, not website visibility permission.

## Known baseline issues captured by WEB-001

Commit `4072c96154e7c2edf2655653ab1714a40cc79929` originally implemented Emira-only presentation mainly in `script.js`, leaving static/crawler-visible source inconsistent. That specific root/sitemap/validator visibility drift was repaired on 2026-10-31 under direct user instruction.

Remaining distinct migration/work items are not evidence that hidden products should be republished:

- older `Fox & Moss` naming remains in current source pending the dedicated identity/domain cutover;
- dedicated unpublished product HTML is intentionally preserved for later restoration, while crawler access is currently disallowed and shared rendered navigation hides unpublished links;
- `downloads/apps.json` may report releases for products that are still unpublished from the studio site;
- `testfile.html` remains in the public Pages tree with no identified canonical purpose.

Do not cite the older JS-only patch as proof of current behavior. Read current source and current routing.

## Read triggers by change class

### Brand / domain
Read START HERE, Queue, ACTIVE Working, Website Master Plan, `AGENTS.md`, current `index.html` metadata/header/footer/structured data, relevant dedicated product pages, and current official GitHub Pages docs before external DNS/Pages changes.

### Navigation / product visibility
Read START HERE, Queue, ACTIVE Working, `index.html`, `script.js`, `sitemap.xml`, shared navigation/product pages, and the product owner for any product being restored. Also inspect `verify-downloads.yml` if root product/download markers change.

### Emira marketing / privacy / pricing / subscription
Read Emira public-copy owner; add current Emira publication/subscription authority for price/trial/privacy/publication claims. Verify changing factual claims against current product/release truth.

### Accessibility / responsive / motion
Read Website Master Plan accessibility owner + current HTML/CSS/JS + ACTIVE Working + actual validation. Preserve no-JS and reduced-motion requirements where applicable.

### Downloads / installers
Read `INSTALLER-CONTRACT.md`, `downloads/apps.json`, `downloads/release-policy.json`, both download workflows, current product release truth, and product handoff as applicable.

### Metadata / crawler visibility
Read `index.html`, dedicated product pages, `sitemap.xml`, `robots.txt`, current canonical-domain state, ACTIVE Working, and Website Master Plan. Hidden UI alone is not crawler/canonical cleanup.

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
