# Local workflow

Day-to-day commands for running the site and reviewing PRs.

---

## Main dev server

Serves the site on port 8080. Run from the repo root.

```bash
python3 -m http.server 8080 --bind 127.0.0.1
```

Pages:

| URL | Page |
|-----|------|
| http://localhost:8080 | Landing |
| http://localhost:8080/work/construction-copilot.html | Dagskýrslutól case study |
| http://localhost:8080/CV-Sindri-Mar-Hilmarsson-standalone.html | CV |

---

## Reviewing a PR

Content PRs come in from the writing agent on the cloud server. The diff
server makes review visual: added text is highlighted green, removed text red.

**1. See what's open**

```bash
gh pr list
```

**2. Check out the branch**

```bash
gh pr checkout <n>
```

**3. Start the diff server** (port 8081, separate from the main server)

```bash
python3 scripts/diff_server.py
```

On startup it prints the number of added/removed strings it found and the
URLs to open.

**4. Open the right page in a browser**

| PR touches | URL |
|------------|-----|
| Case study (`scripts/project-copilot.jsx`) | http://localhost:8081/work/construction-copilot.html |
| CV (`CV-Sindri-Mar-Hilmarsson-standalone.html`) | http://localhost:8081/CV-Sindri-Mar-Hilmarsson-standalone.html |
| Landing (`scripts/bloom-landing.jsx`) | http://localhost:8081 |

The page loads in **New** mode by default: PR branch content, added strings
highlighted green. Click **Old** (bottom-right toggle) to switch to the main
branch version with removed strings highlighted red.

**5. Accept or send back**

*Accept* — merge and delete the branch. The bot detects the merged state
via the GitHub API and treats it as a clean approval.

```bash
gh pr merge <n> --merge --delete-branch
```

*Send back with notes* — post a `CHANGES_REQUESTED` review. The bot polls
its open PRs for reviews of this type and reads the body as feedback. Keep
the body plain prose; no special format required.

```bash
gh pr review <n> --request-changes --body "The intro is too long — cut the second sentence. The aluminium paragraph reads well."
```

The PR stays open. The bot will pick up the review body, revise, and push a
new commit to the same branch. The PR updates automatically.

**6. Return to main**

```bash
git checkout main
```

---

## Ports at a glance

| Port | Server | Purpose |
|------|--------|---------|
| 8080 | `python3 -m http.server 8080` | Browse the site normally |
| 8081 | `python3 scripts/diff_server.py` | Visual PR diff review |
