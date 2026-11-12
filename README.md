# Claude Desktop Ruĝa kaj Nigra

<p align="center"><img src="docs/assets/logo.svg" alt="Logo" width="96"></p>

<p align="center">
  <img src="docs/assets/badge-status.svg" alt="status"> <img src="docs/assets/badge-version.svg" alt="version"> <img src="docs/assets/badge-license.svg" alt="license"> <img src="docs/assets/badge-compat.svg" alt="compat">
</p>

<p align="center"><a href="README.md">Esperanto</a> · <a href="docs/i18n/README.fr.md">Français</a> · <a href="docs/i18n/README.en.md">English</a> · <a href="docs/i18n/README.es.md">Español</a></p>

Ruĝa kaj nigra temo kun libertaj simboloj por la labortablo-programo Claude Desktop.
Nelicenciita de Anthropic, sen spurado, sen eksteraj petoj.

## Rapida komenco

```bash
git clone https://github.com/AnARCHIS12/claude-desktop-rouge-noir.git && cd claude-desktop-rouge-noir && ./scripts/install.sh
```

Poste tute fermu Claude Desktop kaj remalfermu ĝin per la aplikaĵa menuo (ne per terminalo).

## Funkcioj

| Funkcio | Priskribo |
| --- | --- |
| Nigra fono | Paĝo, flanka strio kaj paneloj en profunda nigro |
| Ruĝaj akcentoj | Butonoj, elekto, kursoro, ŝovstrioj (`#be1e1e`) |
| Diagonala strio | Ruĝa kaj nigra diagonalo supre de la fenestro |
| Cirkla A | Diskreta cirkla A malsupre dekstre |
| Forigo | `./scripts/uninstall.sh` restarigas la originalan aspekton |

## Kongruo

| Sistemo | Stato |
| --- | --- |
| Linukso (Fedora, COSMIC) | Provita instalado, bildo ankoraŭ ne konfirmita |
| Windows, macOS | Ne subtenata de ĉi tiu skripto |

> Neoficiala metodo: ĝi uzas la kromaĵan fakon de React DevTools kaj la variablon `REACT_PROFILE=1`. Ĝisdatigo de Claude Desktop povas rompi ĝin.

## Kiel ĝi funkcias

`scripts/install.sh` kopias `extension/` en `~/.config/Claude/extensions/<id>/` kaj kreas uzantan lanĉilon `~/.local/share/applications/com.anthropic.Claude.desktop`, kiu startigas la programon kun `REACT_PROFILE=1`. La ekstensio injektas CSS, kiu superregas la `--cds-*` kolorvariablojn.

## Strukturo

```text
extension/   manifest.json, theme.js (CSS injektita)
scripts/     install.sh, uninstall.sh
docs/        tradukoj kaj bildoj
```

## Kontribui

Vidu [CONTRIBUTING.md](CONTRIBUTING.md).

## Licenco

MIT, vidu [LICENSE](LICENSE).
