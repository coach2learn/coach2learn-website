# Deploying this site on Cloudflare Pages

The site is static HTML, CSS, and one small script. There is no build step.

This file is only instructions. Connecting Cloudflare, and pointing coach2learn.ca at it, are separate steps. Nothing in this branch changes GitHub Pages. The live site stays on the `gh-pages` branch until you choose to move DNS.

## What to select in Cloudflare

1. In the Cloudflare dashboard, go to **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Choose the GitHub repository `coach2learn/coach2learn-website`.
3. Set the **production branch** to `main`, and only after this relaunch has been merged. Do not use `gh-pages`. That branch is still the old site.
4. Framework preset: **None**.
5. Build command: **none**. Leave it empty.
6. Build output directory: **`/`** (the root of the repository, where `index.html` sits).

If the form will not save a blank build command, use `exit 0` and keep the output directory as `/`.

No environment variables are required. There is no install command.

Cloudflare serves each HTML file at its real path (`work-with-me.html`, `privacy.html`). Links in the site use those paths, so the same files also open on a local static server and on GitHub Pages.

The `_headers` file is picked up automatically. It only sets a few basic response headers. There is no `_redirects` file.

## Preview before the domain moves

Turn on preview deployments if you want a URL for this pull request. That URL is not coach2learn.ca. Use it to read the pages. The live GitHub Pages site does not change when you do this.

## DNS comes later

Adding coach2learn.ca is a separate step, after you are happy with a Pages deployment:

1. In the Pages project, add the custom domain `coach2learn.ca` (and `www` if you want it).
2. At the registrar, follow the DNS records Cloudflare shows you.

Do that only when you are ready for the new site to replace whatever coach2learn.ca points at today. Do not add a `CNAME` file to this repo. A `CNAME` file is a GitHub Pages mechanism, and this host is Cloudflare.

Canonical links in the HTML already use `https://coach2learn.ca/`. They describe the intended domain. They do not move it.
