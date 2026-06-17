---
name: gh-cli
description: Execute GitHub CLI (gh) commands to interact with GitHub repositories, pull requests, issues, releases, actions workflows, and all other GitHub operations from the terminal. Use this skill whenever the user wants to: create or manage pull requests, open/comment/close issues, clone or fork repos, manage releases, check CI/CD workflow status, authenticate with GitHub, search GitHub, list artifacts, interact with GitHub via API, or do anything GitHub-related from the command line. Trigger even when the user says things like "check my PRs", "create an issue", "what's failing in CI", "tag a release", "who starred my repo", or "how do I push this branch" — any GitHub task that can be done via terminal. Don't wait for the user to explicitly say "use gh CLI."
---

# GitHub CLI (gh) Skill

`gh` is GitHub's official command-line tool. It lets you interact with GitHub directly from the terminal — creating PRs, managing issues, checking workflows, and much more.

## Before Running Any Command

1. **Check auth**: Run `gh auth status` first to confirm the user is authenticated. If not, guide them to run `gh auth login`.
2. **Confirm the repo context**: Many commands default to the current directory's linked repo. Run `gh repo view` to confirm.
3. **Confirm destructive actions**: For merges, deletions, and force operations, always confirm with the user before executing.

## Core Command Groups

| Group | What it does |
|-------|-------------|
| `gh repo` | Create, clone, fork, view repos |
| `gh pr` | Create, list, review, merge pull requests |
| `gh issue` | Create, list, comment, close issues |
| `gh release` | Create and manage releases & assets |
| `gh run` / `gh workflow` | View and trigger GitHub Actions |
| `gh gist` | Create and manage gists |
| `gh auth` | Login, logout, token management |
| `gh api` | Direct GitHub REST/GraphQL API access |
| `gh search` | Search repos, code, issues, users |
| `gh secret` | Manage repository/environment secrets |
| `gh codespace` | Manage GitHub Codespaces |

## Pull Requests

```bash
# List open PRs in current repo
gh pr list

# List PRs with filters
gh pr list --state all --author "@me"
gh pr list --label "bug" --limit 20

# Create a PR (interactive)
gh pr create

# Create a PR with all details
gh pr create --title "feat: add login page" --body "Closes #42" --base main --draft

# View a PR (with diff)
gh pr view 123
gh pr diff 123

# Check out a PR locally
gh pr checkout 123

# Review a PR
gh pr review 123 --approve
gh pr review 123 --request-changes --body "Please fix the edge cases"
gh pr review 123 --comment --body "Looks good overall"

# Merge a PR
gh pr merge 123 --merge        # merge commit
gh pr merge 123 --squash       # squash and merge
gh pr merge 123 --rebase       # rebase and merge

# Check PR status / CI checks
gh pr checks 123
gh pr status
```

## Issues

```bash
# List issues
gh issue list
gh issue list --state closed --assignee "@me"

# Create an issue
gh issue create --title "Bug: login fails on Safari" --body "Steps to reproduce..."
gh issue create --title "..." --label "bug,high-priority" --assignee username

# View an issue
gh issue view 456

# Comment on an issue
gh issue comment 456 --body "Thanks for the report! Working on a fix."

# Close / reopen
gh issue close 456
gh issue close 456 --reason "not planned"
gh issue reopen 456

# Edit an issue
gh issue edit 456 --add-label "confirmed" --remove-label "needs-triage"
```

## Repositories

```bash
# View repo info
gh repo view
gh repo view owner/repo --web      # open in browser

# Clone a repo
gh repo clone owner/repo
gh repo clone owner/repo -- --depth 1    # shallow clone

# Fork a repo
gh repo fork owner/repo
gh repo fork owner/repo --clone          # fork + clone

# Create a new repo
gh repo create my-project --public --description "My project" --clone

# List repos for a user or org
gh repo list
gh repo list my-org --limit 50

# Archive / delete (destructive — confirm first!)
gh repo archive owner/repo
gh repo delete owner/repo --confirm
```

## GitHub Actions / Workflows

```bash
# List recent workflow runs
gh run list
gh run list --workflow=ci.yml --branch=main

# View a run
gh run view 12345

# Watch a run in real time
gh run watch 12345

# Re-run a failed run
gh run rerun 12345
gh run rerun 12345 --failed-only   # only failed jobs

# Download run artifacts
gh run download 12345

# List workflows
gh workflow list

# Trigger a workflow manually
gh workflow run ci.yml
gh workflow run deploy.yml --field environment=staging

# Enable / disable a workflow
gh workflow enable ci.yml
gh workflow disable ci.yml
```

## Releases

```bash
# List releases
gh release list

# View a release
gh release view v1.0.0

# Create a release
gh release create v1.0.0 --title "Version 1.0.0" --notes "See CHANGELOG.md"
gh release create v1.0.0 --generate-notes               # auto-generate notes
gh release create v1.0.0 dist/*.zip --draft             # draft with assets

# Upload assets to existing release
gh release upload v1.0.0 dist/app-linux-amd64 dist/app-darwin-arm64

# Download release assets
gh release download v1.0.0
gh release download v1.0.0 --pattern "*.zip"

# Delete a release (confirm first!)
gh release delete v1.0.0 --yes
```

## Secrets & Variables

```bash
# List secrets
gh secret list
gh secret list --env production

# Set a secret
gh secret set MY_SECRET                    # prompts for value
gh secret set MY_SECRET --body "value"
gh secret set MY_SECRET < secret.txt       # from file

# Delete a secret
gh secret delete MY_SECRET

# Variables (non-secret)
gh variable list
gh variable set MY_VAR --body "value"
```

## Direct API Access

Use `gh api` when you need endpoints not covered by other commands, or for automation:

```bash
# GET requests (default)
gh api repos/owner/repo
gh api user/repos --jq '.[].full_name'    # filter with jq

# POST / PATCH / DELETE
gh api -X POST repos/owner/repo/labels --field name="urgent" --field color="ff0000"
gh api -X PATCH repos/owner/repo/issues/42 --field state="closed"
gh api -X DELETE repos/owner/repo/labels/42

# GraphQL
gh api graphql -f query='{ viewer { login } }'

# Pagination
gh api repos/owner/repo/issues --paginate
```

## Search

```bash
# Search repositories
gh search repos "topic:typescript stars:>1000"
gh search repos --language go --owner google

# Search issues / PRs
gh search issues "label:bug is:open" --repo owner/repo

# Search code
gh search code "TODO" --repo owner/repo --language typescript
```

## Useful Flags (work with most commands)

| Flag | Effect |
|------|--------|
| `--json field1,field2` | Output as JSON |
| `--jq '.expression'` | Filter JSON output |
| `-w` / `--web` | Open result in browser |
| `-R owner/repo` | Target a different repo |
| `--limit N` | Cap number of results |
| `-t template` | Custom output template |

## Authentication

```bash
# Log in (interactive)
gh auth login

# Log in to GitHub Enterprise
gh auth login --hostname company.github.com

# Check auth status
gh auth status

# Refresh scopes (e.g., to add read:org)
gh auth refresh --scopes read:org,write:packages

# Log out
gh auth logout

# Use a token directly
export GH_TOKEN=ghp_xxxxxxxxxxxx
```

## Safety Rules

- Never run `gh repo delete`, `gh release delete`, or `gh api -X DELETE` without explicit user confirmation.
- Never merge a PR (`gh pr merge`) without asking the user to confirm first.
- For `gh api -X PUT` or `gh api -X PATCH` calls that modify shared resources, pause and confirm intent.
- If a command fails due to missing token scopes, explain which scopes are needed and the `gh auth refresh --scopes` command to fix it.
- When in doubt, run the `--dry-run` flag (if available) or show the user the command before executing.

## Getting Help

```bash
gh help
gh help pr
gh pr create --help
```

Refer to `references/common-patterns.md` for more advanced patterns and real-world examples.
