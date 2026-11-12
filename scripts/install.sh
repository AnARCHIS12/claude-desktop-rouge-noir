#!/usr/bin/env bash
# Installe le thème rouge et noir pour Claude Desktop (Linux).
set -euo pipefail

ID="fmkadmapgofadopljbjfkapdkoienihi"
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DATA="${XDG_CONFIG_HOME:-$HOME/.config}/Claude"
DEST="$DATA/extensions/$ID"
APPS="${XDG_DATA_HOME:-$HOME/.local/share}/applications"
DESKTOP="com.anthropic.Claude.desktop"
SYSTEM_DESKTOP="/usr/share/applications/$DESKTOP"

[ -d "$DATA" ] || { echo "✕ Dossier $DATA introuvable : lancez Claude Desktop une fois." >&2; exit 1; }
[ -f "$SYSTEM_DESKTOP" ] || { echo "✕ $SYSTEM_DESKTOP introuvable." >&2; exit 1; }
if [ -e "$DEST" ]; then echo "› Remplacement de l'extension existante : $DEST"; fi

mkdir -p "$DEST" "$APPS"
cp "$HERE/extension/manifest.json" "$HERE/extension/theme.js" "$DEST/"
sed -E 's|^Exec=claude-desktop|Exec=env REACT_PROFILE=1 claude-desktop|' "$SYSTEM_DESKTOP" > "$APPS/$DESKTOP"

echo "✓ Extension installée : $DEST"
echo "✓ Lanceur utilisateur : $APPS/$DESKTOP"
echo "› Fermez Claude Desktop complètement, puis relancez-le depuis le menu des applications."
