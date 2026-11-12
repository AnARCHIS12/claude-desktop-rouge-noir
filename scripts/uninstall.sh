#!/usr/bin/env bash
# Retire le thème rouge et noir (extension et lanceur utilisateur).
set -euo pipefail

ID="fmkadmapgofadopljbjfkapdkoienihi"
DEST="${XDG_CONFIG_HOME:-$HOME/.config}/Claude/extensions/$ID"
LAUNCHER="${XDG_DATA_HOME:-$HOME/.local/share}/applications/com.anthropic.Claude.desktop"

if [ -f "$DEST/manifest.json" ] && grep -q '"Rouge et Noir"' "$DEST/manifest.json"; then
  rm -r -- "$DEST"; echo "✓ Extension retirée."
else
  echo "› Aucune extension Rouge et Noir à retirer."
fi
if [ -f "$LAUNCHER" ] && grep -q "REACT_PROFILE=1" "$LAUNCHER"; then
  rm -- "$LAUNCHER"; echo "✓ Lanceur utilisateur retiré."
fi
echo "› Redémarrez Claude Desktop pour revenir à l'apparence d'origine."
