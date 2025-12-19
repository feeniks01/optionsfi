#!/bin/bash
set -e

echo "========================================="
echo "OptionsFi V2 Setup"
echo "========================================="

# Check for required tools
command -v anchor >/dev/null 2>&1 || { echo "Anchor not found. Install with 'cargo install --git https://github.com/coral-xyz/anchor anchor-cli'"; exit 1; }
command -v solana >/dev/null 2>&1 || { echo "Solana CLI not found. Install from https://docs.solana.com/cli/install-solana-cli-tools"; exit 1; }

# Generate program keypair if not exists
if [ ! -f target/deploy/vault-keypair.json ]; then
    echo "Generating program keypair..."
    mkdir -p target/deploy
    solana-keygen new -o target/deploy/vault-keypair.json --no-bip39-passphrase
fi

# Get program ID
PROGRAM_ID=$(solana-keygen pubkey target/deploy/vault-keypair.json)
echo "Program ID: $PROGRAM_ID"

# Update lib.rs
sed -i '' "s/declare_id!(\"[^\"]*\")/declare_id!(\"$PROGRAM_ID\")/" programs/vault/src/lib.rs
echo "Updated programs/vault/src/lib.rs"

# Update Anchor.toml
sed -i '' "s/vault = \"[^\"]*\"/vault = \"$PROGRAM_ID\"/" Anchor.toml
echo "Updated Anchor.toml"

# Build
echo "Building program..."
anchor build

echo ""
echo "========================================="
echo "Setup complete!"
echo "Program ID: $PROGRAM_ID"
echo ""
echo "To deploy: anchor deploy --provider.cluster devnet"
echo "========================================="
