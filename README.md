# Foxmoss Website Repository

## Current authority — read before editing

This repository's inherited GitHub Pages template notes are preserved below as historical orientation, but they are **not** the current top authority for Foxmoss website work.

Before a substantive edit, audit, deployment/domain change, or public-copy change, read:

1. [AGENTS.md](AGENTS.md) — repository execution/read rules.
2. [WEBSITE-AUTHORITY.md](WEBSITE-AUTHORITY.md) — Git ↔ Google Drive authority/source map.
3. [Drive START HERE — Foxmoss Website Authority Map + Read Routing](https://docs.google.com/document/d/13Tl_Drg-jjCB6U0d7gu7GSnW-ESKFcU00Deqb4WoldM/edit).
4. [Drive Website Working Queue](https://docs.google.com/document/d/1TsfOy_EkQIcsYBgJ_Nj-Mxj8_n8KzvfDfuldcSiOLvY/edit).
5. The ACTIVE Website Working named by that queue, then only the source owners relevant to the requested change.

The current public direction is **Emira only**. Wordleaf, Nalia, and Storage Guard source is preserved but unpublished until explicitly restored. Current identity direction is **Foxmoss Studio**, with **Foxmoss** as the compact mark/name and `foxmoss.studio` as the intended canonical domain; the production rename/domain cutover is not claimed complete merely because this README records the direction.

Current source must be read fresh before implementation. Do not treat any hash or older Working as a permanent selector.

---

# Historical template orientation

The material below originated from the simple GitHub Pages template and remains useful only where it does not conflict with the current authorities above.

## Simple Website Using Github Pages
Make a simple HTML website and publish it using Github Pages.  
View example: https://cplmakerlab.github.io/simple-website-template/

## Setup
- Create a Github account (if you don't have one yet)
- Fork this repository to copy it to your account, i.e. github.com/username/simple-website-template (you can rename it as well)
- Make sure you see the gh-pages branch (it should be the default)
- Edit website files on the gh-pages branch, then wait a minute or two for Github Pages to update and deploy your site.
- View your site: https://username.github.io/simple-website-template

## How does this work?
This website template uses CSS & JS to hide and show different parts of index.html and uses Github Pages to render the website from the gh-pages branch.

For current Foxmoss architecture and the limits of JavaScript-only hiding, use [AGENTS.md](AGENTS.md), [WEBSITE-AUTHORITY.md](WEBSITE-AUTHORITY.md), and the active Drive Working rather than assuming this inherited template architecture remains the final design.

## Things to try
- Edit index.html and change the title of the page (both ```<title>``` in the header and ```<h1>``` in the body)
- Upload your own logo.jpg and background.jpg images to overwrite the default images.
- Edit index.html and change the content displayed in home, about, and contact.
- Edit index.html and change the content in the footer region.
- Edit style.css and change the link color and font style.
- Update the metadata in the header portion of index.html (this is used by search engines and browsers).

## Common tags

Element | Tag | Example usage
--- | --- | ---
Header | h1 | ```<h1>Title of page</h1>```
Link | a | ```<a href="http://example.com">Check out this link</a>```
Image | img | ```<img src="http://example.com/image.jpg">```
Paragraph | p | ```<p>This is a new paragraph.</p>```
Line break | br | ```This is the first line of a poem. <br> This second line will appear below the first. ```

## Further reading

### Where can I learn more about HTML, CSS, JS, and webdevelopment in general?
Check out Mozilla Developers Network (https://developer.mozilla.org). They have lots of good resources, tips, and tutorials to further your knowledge.

### Can I configure a custom domain for my site, i.e. johnnymakerportfolio.com?
Yes. For this project, however, follow the current Drive Website Working Queue + Website Master Plan + current official GitHub Pages documentation. Do not add a guessed CNAME or DNS values from this inherited template text.

### Can I add tracking?
Technically yes, but Foxmoss website privacy/analytics decisions belong to the current Website Master Plan/Working. Do not add analytics merely because the old template suggests it.

### Can I add a blog, etc?
The current Foxmoss roadmap deliberately keeps the site small/static and defers any Jekyll/blog decision to its dedicated Website Working. Do not add a CMS or build framework from this inherited suggestion alone.

### Can I sell products or add a store?
Payment/support architecture belongs to the dedicated Website Working and must keep sensitive payment handling on an appropriate hosted provider. Do not implement a store from this template note alone.

### Can I make separate HTML files for each page?
Yes. Current product-page/canonicalization decisions are owned by the Website Master Plan and active Working, not by the old template's AJAX suggestion.

### I heard I need to be using XYZ framework (Bootstrap, React, etc).
The current Website Master Plan explicitly favors the simplest architecture that meets the requirements. Do not adopt a framework solely because it is popular.

### I don't want to write code or deal with website hosting. Are there any website builders you recommend?
This project currently uses GitHub Pages. Changing hosting/platform belongs to an explicit Website Working.

## Universal file-inspection rule

When work requires examining a file that lives in the user's Google Drive, use the connected Drive source directly when available and follow the current authority/read-routing contract in [AGENTS.md](AGENTS.md) and the Drive START HERE document. Historical file-transfer/workspace instructions do not override current connector/tool capabilities or the owning Website Working.

The configured Google Drive root is searchable. Relevant files may be inside subfolders and should be discovered rather than requiring manual file-by-file instructions.

## Public site

Current intended public product surface:

- Site: https://foxandmoss.github.io/home/
- Emira: https://foxandmoss.github.io/home/emira/
- Wordleaf: preserved/unpublished for now
- Nalia: preserved/unpublished for now
- Storage Guard: preserved/unpublished for now

The custom-domain target is `foxmoss.studio`, but domain purchase/DNS/HTTPS cutover must be established by evidence before this README calls it live.

## Shared Windows installer rule

All Foxmoss Studio Windows desktop installers must follow [INSTALLER-CONTRACT.md](INSTALLER-CONTRACT.md). This includes stable versionless download URLs, pre-install release checks, radio-button drive choice, and a hardware/free-space-based Recommended drive. Website work that exposes/restores a Windows download must also follow [WEBSITE-AUTHORITY.md](WEBSITE-AUTHORITY.md) and the active Drive Working.
