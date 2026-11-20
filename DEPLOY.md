# Deploying this site on Cloudflare Workers

The site is static HTML, CSS, and one small script. There is no build step. Cloudflare Workers Builds serves the repository root as the Worker `coach2learn-static`.

This file is only instructions. It does not attach a domain, and it does not change GitHub Pages. The `gh-pages` branch stays as it is until Tim approves go-live.

## How a change ships

The GitHub repository `coach2learn/coach2learn-website` is connected to Cloudflare Workers Builds.

- A push to any branch other than `main` runs `npx wrangler versions upload`. That build gets a preview URL. The preview is not coach2learn.ca. Use it to read the pages.
- A merge to `main` runs `npx wrangler deploy`. That is the production Worker.

`wrangler.jsonc` names the Worker `coach2learn-static` and points assets at `./`, the repository root, where `index.html` sits. `_headers` is served with the site and Cloudflare applies it. It is not listed in `.assetsignore`. Markdown and Wrangler config files are left out of the upload.

No environment variables are required.

## Collaborators

Push to a branch and open or update a pull request. Do not push to `main`. That includes another person, and it includes an AI agent helping with copy. Production deploys only when a pull request is merged.

## The domain waits for Tim

`coach2learn.ca` and `www` are not attached yet. Add those custom domains only at go-live, and only with Tim's approval.

Do not add a `CNAME` file to this repo. A `CNAME` file is a GitHub Pages mechanism. This host is Cloudflare.

Canonical links in the HTML already use `https://coach2learn.ca/`. They describe the intended domain. They do not move it.
