# Claude Desktop Red and Black

<p align="center"><img src="../assets/logo.svg" alt="Logo" width="96"></p>

<p align="center">
  <img src="../assets/badge-status.svg" alt="status"> <img src="../assets/badge-version.svg" alt="version"> <img src="../assets/badge-license.svg" alt="license"> <img src="../assets/badge-compat.svg" alt="compat">
</p>

<p align="center"><a href="../../README.md">Esperanto</a> · <a href="README.fr.md">Français</a> · <a href="README.en.md">English</a> · <a href="README.es.md">Español</a></p>

A red and black theme with libertarian symbols for the Claude Desktop app.
Not affiliated with Anthropic, no tracking, no external requests.

## Quickstart

```bash
git clone https://github.com/AnARCHIS12/claude-desktop-rouge-noir.git && cd claude-desktop-rouge-noir && ./scripts/install.sh
```

Then quit Claude Desktop completely and reopen it from the application menu (not from a terminal).

## Features

| Feature | Description |
| --- | --- |
| Black background | Page, sidebar and panels in deep black |
| Red accents | Buttons, selection, caret, scrollbars (`#be1e1e`) |
| Diagonal strip | Red and black diagonal at the top of the window |
| Circled A | Discreet circled A at the bottom right |
| Removal | `./scripts/uninstall.sh` restores the original look |

## Compatibility

| System | Status |
| --- | --- |
| Linux (Fedora, COSMIC) | Install tried, rendering not yet confirmed |
| Windows, macOS | Not supported by this script |

> Unofficial method: it relies on the React DevTools extension slot and the `REACT_PROFILE=1` variable. A Claude Desktop update may break it.

## How it works

`scripts/install.sh` copies `extension/` into `~/.config/Claude/extensions/<id>/` and creates a user launcher `~/.local/share/applications/com.anthropic.Claude.desktop` that starts the app with `REACT_PROFILE=1`. The extension injects CSS that overrides the `--cds-*` color variables.

## Layout

```text
extension/   manifest.json, theme.js (injected CSS)
scripts/     install.sh, uninstall.sh
docs/        translations and images
```

## Contributing

See [CONTRIBUTING.md](../../CONTRIBUTING.md).

## License

MIT, see [LICENSE](../../LICENSE).
