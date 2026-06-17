# Common gh CLI Patterns

## PR Workflow (end-to-end)

A typical PR lifecycle from branch creation to merge:

```bash
# 1. Create and push a branch
git checkout -b feat/my-feature
git push -u origin feat/my-feature

# 2. Create the PR
gh pr create --title "feat: my feature" --body "Closes #42" --base main

# 3. Check CI status
gh pr checks

# 4. Once approved, merge
gh pr merge --squash --delete-branch
```

## Issue → PR → Close

Link a PR to an issue so it auto-closes on merge:

```bash
gh pr create --title "fix: crash on empty input" --body "Fixes #99"
# In the PR body, keywords like "Fixes #99", "Closes #99", "Resolves #99"
# will automatically close issue 99 when the PR merges.
```

## Bulk Operations with JSON + jq

```bash
# Get all open PR numbers
gh pr list --json number --jq '.[].number'

# Get PR titles authored by me
gh pr list --author "@me" --json number,title --jq '.[] | "#\(.number): \(.title)"'

# List all repos I have push access to
gh repo list --json nameWithOwner,viewerPermission \
  --jq '.[] | select(.viewerPermission == "WRITE" or .viewerPermission == "ADMIN") | .nameWithOwner'

# Find issues with no assignee
gh issue list --json number,title,assignees \
  --jq '.[] | select(.assignees | length == 0) | .number'
```

## Working with Multiple Repos

```bash
# Targeting a specific repo without cd-ing into it
gh pr list -R facebook/react
gh issue create -R owner/other-repo --title "..."

# Clone and set upstream for a fork
gh repo fork owner/repo --clone --remote
```

## Release Automation

```bash
# Create a release from the latest tag and auto-generate release notes
git tag v2.0.0 && git push origin v2.0.0
gh release create v2.0.0 --generate-notes --latest

# Attach build artifacts
gh release create v2.0.0 \
  ./dist/app-linux-amd64 \
  ./dist/app-darwin-arm64 \
  ./dist/app-windows-amd64.exe \
  --title "v2.0.0" \
  --notes "See CHANGELOG.md for details"
```

## CI / Workflow Debugging

```bash
# Watch the latest run on main branch
gh run list --branch main --limit 1
gh run watch $(gh run list --branch main --limit 1 --json databaseId --jq '.[0].databaseId')

# Download logs for a failed job
gh run download --name "build-logs" 12345

# Trigger a workflow with inputs
gh workflow run deploy.yml \
  --field environment=staging \
  --field version=2.0.0
```

## GitHub API Patterns

```bash
# Paginate through all issues and save to file
gh api repos/owner/repo/issues --paginate > all_issues.json

# Update repo settings
gh api -X PATCH repos/owner/repo \
  --field has_wiki=false \
  --field allow_squash_merge=true \
  --field delete_branch_on_merge=true

# Add a collaborator
gh api -X PUT repos/owner/repo/collaborators/username \
  --field permission=push

# Create a label
gh api -X POST repos/owner/repo/labels \
  --field name="needs-review" \
  --field color="0075ca" \
  --field description="Awaiting code review"
```

## GitHub Enterprise

```bash
# Login to GHE
gh auth login --hostname github.mycompany.com

# Set the default hostname
export GH_HOST=github.mycompany.com

# Target GHE in a single command
gh -h github.mycompany.com repo list
```

## Scripting and Automation

```bash
# Check if a PR exists before creating (idempotent)
EXISTING=$(gh pr list --head feat/my-feature --json number --jq '.[0].number')
if [ -z "$EXISTING" ]; then
  gh pr create --title "..." --body "..."
else
  echo "PR #$EXISTING already exists"
fi

# Wait for CI to pass before merging
gh pr checks --watch
gh pr merge --merge
```
