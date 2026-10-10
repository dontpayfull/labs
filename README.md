# DontPayFull Labs site

Static pages for `www.dontpayfull.com/labs`: open source tools from the DontPayFull team.
Plain HTML and CSS, no build step.

| Path | Page |
|---|---|
| `labs/index.html` | `/labs`: the Labs hub |
| `labs/ainotate/index.html` | `/labs/ainotate`: AInotate product page (`#install`, `#get-started`, `#faq`) |
| `labs/ainotate/legal/index.html` | `/labs/ainotate/legal`: privacy (`#privacy`) and terms (`#terms`) |
| `labs/assets/` | shared CSS and the self-hosted Inter variable font (SIL OFL, see `Inter-LICENSE.txt`) |
| `labs/ainotate/img/` | AInotate logo and WebP screenshots, taken from `dontpayfull/AInotate/docs` |

Preview locally:

```bash
python3 -m http.server 18431 --bind 127.0.0.1
# open http://127.0.0.1:18431/labs/ainotate/
```

Every page sets a canonical URL on `https://www.dontpayfull.com/labs/...`. Hosting:
GitHub Pages for the files, a Cloudflare Worker on `www.dontpayfull.com/labs*` that serves them,
so the pages live under the main domain without touching the site's own code.

The AInotate plugin manifest (`.claude-plugin/plugin.json` in `dontpayfull/AInotate`) links here
for its homepage, documentation (`#get-started`), privacy policy (`legal/#privacy`) and terms
(`legal/#terms`).
