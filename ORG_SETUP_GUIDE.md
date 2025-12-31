# GitHub Organization Setup Guide for OptionsFi SDK

This guide walks through transferring the repository to a GitHub organization and publishing the SDK.

## Step 1: Create GitHub Organization

1. Go to https://github.com/settings/organizations
2. Click **"New organization"**
3. Choose **"Create a free organization"**
4. Organization name: **`optionsfi`**
5. Contact email: `team@optionsfi.xyz`
6. Organization belongs to: **My personal account**

## Step 2: Transfer Repository

### Option A: Transfer Existing Repository (Recommended)

1. Go to your current repo: https://github.com/feeniks01/optionsfi
2. Navigate to **Settings** → **General**
3. Scroll down to **"Danger Zone"**
4. Click **"Transfer ownership"**
5. New owner: `optionsfi`
6. Confirm transfer

**Pros:**
- Keeps all commit history
- Preserves issues and PRs
- Maintains star count
- GitHub automatically redirects old URLs

### Option B: Create New Org Repo and Push

Only use if you can't transfer:

```bash
# 1. Create new repo at github.com/optionsfi/optionsfi

# 2. Update remote
git remote set-url origin https://github.com/optionsfi/optionsfi.git

# 3. Push all branches
git push -u origin main --force

# 4. Push tags
git push --tags
```

## Step 3: Update Local Repository

After transfer, update your local repo:

```bash
# Update remote URL
git remote set-url origin https://github.com/optionsfi/optionsfi.git

# Verify
git remote -v

# Pull to confirm
git pull
```

## Step 4: Verify SDK Package

The SDK has already been updated with organization URLs:

```bash
cd packages/sdk

# Check package.json
grep "github.com/optionsfi" package.json

# Should show:
# "url": "https://github.com/optionsfi/optionsfi.git"
```

## Step 5: Set Up npm Organization

### Create npm Organization (Optional but Recommended)

1. Go to https://www.npmjs.com/org/create
2. Organization name: `optionsfi`
3. Choose free plan (unlimited public packages)

### If Using npm Org:

Update `package.json`:
```json
{
  "name": "@optionsfi/sdk",
  // ... already correct!
}
```

### If Publishing Under Personal Account:

Keep current setup - the GitHub org is separate from npm scope.

## Step 6: Publish SDK to npm

### One-Time Setup

```bash
# Login to npm
npm login

# Enter your npm credentials
```

### Publish

```bash
cd packages/sdk

# Final check
npm run build
npm test

# Dry run to verify package contents
npm pack --dry-run

# Publish
npm publish --access public

# Tag the release
git tag -a sdk-v0.2.0 -m "SDK v0.2.0: Multi-asset support"
git push origin sdk-v0.2.0
```

## Step 7: Post-Publication Checklist

- [ ] Verify on npm: https://www.npmjs.com/package/@optionsfi/sdk
- [ ] Test installation: `npm install @optionsfi/sdk` in a new project
- [ ] Update main README.md with SDK installation instructions
- [ ] Announce release (Twitter, Discord, etc.)
- [ ] Create GitHub release: https://github.com/optionsfi/optionsfi/releases/new
  - Tag: `sdk-v0.2.0`
  - Title: "SDK v0.2.0 - Multi-Asset Support"
  - Body: Copy from CHANGELOG.md

## Step 8: Team Access (Optional)

Add team members to the organization:

1. Go to https://github.com/orgs/optionsfi/people
2. Click **"Invite member"**
3. Enter GitHub username or email
4. Choose role:
   - **Owner**: Full control (you)
   - **Member**: Can push to repos
   - **Outside collaborator**: Limited access

## Troubleshooting

### Old URLs Still Work

GitHub automatically redirects:
- `github.com/feeniks01/optionsfi` → `github.com/optionsfi/optionsfi`
- This includes git clone, issues, PRs, etc.

### npm Publish Fails with 403

```bash
# Check you're logged in
npm whoami

# Check package name availability
npm view @optionsfi/sdk

# If it exists and you don't own it, you'll need a different name
```

### Git Push Fails After Transfer

```bash
# Update remote
git remote set-url origin https://github.com/optionsfi/optionsfi.git

# Try again
git push
```

## Important Notes

### What Was Changed in SDK

✅ **Removed:**
- `MOCK_USDC_MINT` (renamed to `DEVNET_USDC_MINT`)

✅ **Added:**
- `DEVNET_USDC_MINT` - Official Circle USDC devnet mint
- `MAINNET_USDC_MINT` - Official Circle USDC mainnet mint
- `MIGRATION.md` - Migration guide for users
- Enhanced documentation for organization

✅ **Updated:**
- All GitHub URLs point to `github.com/optionsfi/optionsfi`
- Professional comment style throughout
- No test/mock data in production exports

### SDK Package Contents

```
@optionsfi/sdk@0.2.0
├── dist/
│   ├── index.js (82 KB) - CommonJS
│   ├── index.mjs (79 KB) - ESM
│   ├── index.d.ts (59 KB) - TypeScript definitions
│   └── index.d.mts (59 KB) - ESM TypeScript definitions
├── README.md (6.5 KB)
├── CHANGELOG.md (3.5 KB)
└── MIGRATION.md (1.8 KB)

Total: 56.3 KB compressed
```

## Next Steps

After completing this setup:

1. ✅ GitHub org created: `optionsfi`
2. ✅ Repository transferred
3. ✅ SDK published to npm
4. 📝 Update main README
5. 📣 Announce release
6. 🎉 Celebrate!

---

**Questions?** Open an issue at https://github.com/optionsfi/optionsfi/issues
