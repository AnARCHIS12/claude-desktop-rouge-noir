(() => {
  const RED = '#be1e1e', RED_HI = '#d42a2a', INK = '#0b0b0d'
  const circledA = "data:image/svg+xml;utf8," + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="#be1e1e" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="50" r="42"/><path d="M28 76 50 24 72 76M37 58h26"/></svg>')
  const css = `
* {
  --desktop-theme-backdrop: ${INK} !important;
  --cds-page-bg: ${INK} !important;
  --cds-surface-1: #111113 !important;
  --cds-surface-2: #17171a !important;
  --cds-surface-3: #1f1f23 !important;
  --cds-text-primary: #f3f3f3 !important;
  --cds-text-secondary: #bdbdc2 !important;
  --cds-text-stays-secondary: #bdbdc2 !important;
  --cds-text-muted: #8c8c93 !important;
  --cds-text-accent: #ff5252 !important;
  --cds-text-link-color: #ff5a5a !important;
  --cds-border-accent: ${RED} !important;
  --cds-fill-primary: ${RED} !important;
  --cds-fill-primary-hover: ${RED_HI} !important;
  --cds-ring-color: ${RED} !important;
  --cds-bg-user-message: #1d0e10 !important;
  --cds-tooltip-bg: #1a1a1d !important;
  --cds-switch-track: ${RED} !important;
  --cds-switch-track-hover: ${RED_HI} !important;
  --muted-as-secondary: #8c8c93 !important;
  --df-sidebar-muted: #8c8c93 !important;
}
.dframe-root:not([data-collapsed]) .dframe-sidebar,
.dframe-chrome-peek-band { background-color: ${INK} !important; }
.dframe-root[data-collapsed] .dframe-sidebar-body { --df-web-sidebar-bg: ${INK} !important; }
diffs-container {
  --diffs-light-bg: #17171a !important; --diffs-dark-bg: #17171a !important;
  --diffs-light: #f3f3f3 !important; --diffs-dark: #f3f3f3 !important;
}
html::before {
  content: ""; position: fixed; left: 0; right: 0; top: 0; height: 4px;
  pointer-events: none; z-index: 2147483646;
  background: linear-gradient(135deg, ${RED} 0 50%, #000 50% 100%);
  background-size: 16px 4px;
}
html::after {
  content: ""; position: fixed; right: 18px; bottom: 18px; width: 120px; height: 120px;
  pointer-events: none; z-index: 0; opacity: .09;
  background: url("${circledA}") center / contain no-repeat;
}
::selection { background: ${RED}; color: #fff; }
::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: rgba(190, 30, 30, .55); border-radius: 0; }
[data-cds=ChatComposerEditor] { caret-color: ${RED_HI}; }
`
  const apply = () => {
    if (document.getElementById('rouge-noir-theme')) return
    const el = document.createElement('style')
    el.id = 'rouge-noir-theme'
    el.textContent = css
    ;(document.head || document.documentElement).appendChild(el)
  }
  apply()
  document.addEventListener('DOMContentLoaded', apply)
})()
