# Ding Ma — Technical Portfolio

Static HTML/CSS/JavaScript portfolio for GitHub Pages. The existing design, motion, separate Projects section, résumé, and contact information are retained.

## Publish

Create a repository named `technical-portfolio` in the intended GitHub account. Push this folder's `main` branch. In **Settings → Pages**, choose **Deploy from a branch**, then **main** and **/(root)**, and save. A standard GitHub Free setup uses a public repository. Use the actual URL returned by Pages as the submission link.

GitHub Pages documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Contents

- `index.html`: introduction, background, and contact.
- `projects.html`: separate project index.
- `child-maltreatment.html` and `boston-cambridge-mobility.html`: case studies with figures and limitations.
- `resume.html`: experience and résumé downloads.
- `styles.css` and `app.js`: responsive styling, fades, reduced-motion support, and chart controls.
- `assets/`: only files referenced by the website.
- `.nojekyll`: publish the static files without Jekyll processing.

Original project reports, datasets, and code bundles are not attached or included. Research source material and the previous Sites registration remain in the original workspace outside this repository. No original analysis was rerun for publication preparation.

The HTML pages include `noindex, nofollow, noimageindex` directives for supporting search engines. This is search-indexing control, not authentication: a public repository, the website, and downloadable résumé files remain publicly accessible.

Google noindex documentation: https://developers.google.com/search/docs/crawling-indexing/block-indexing

## Before assignment submission

A real smiling photo of Ding Ma is still required. The résumé, contact information including LinkedIn, and introduction covering background and interest in analytics are present. Check the published link from the intended viewer's browser before submitting it.

## Preview

Run `python3 -m http.server 8765 --bind 127.0.0.1` from this folder and open `http://127.0.0.1:8765`.

## Credits

AI assisted with the website's design, code, animations, and case-study editing. Project summaries draw on supplied coursework. The R study is joint work by Ding Ma and Pauli Wang; individual task allocation is not invented. See the site footer for the visitor-facing disclosure.
