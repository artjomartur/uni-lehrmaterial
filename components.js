const MODULE_GROUPS = [
  {
    label: 'Orga',
    prefix: '#',
    colorClass: 'text-amber-400',
    widthClass: 'w-64',
    modules: [
      { path: 'studienplanung/', label: 'Studienplanung & Stundenplan', mobileLabel: 'Studienplanung' }
    ]
  },
  {
    label: 'Praktisch',
    prefix: 'I.',
    colorClass: 'text-blue-400',
    widthClass: 'w-72',
    modules: [
      { path: 'fop/', label: '01_fop', mobileLabel: 'FOP' },
      { path: 'algorithmen-datenstrukturen/', label: '02_algorithmen_datenstrukturen', mobileLabel: 'Algorithmen &amp; Datenstrukturen' },
      { path: 'software-engineering/', label: '03_software_engineering', mobileLabel: 'Software Engineering' },
      { path: 'informationsmanagement/', label: '04_informationsmanagement', mobileLabel: 'Informationsmanagement' },
      { path: 'ki/', label: '05_künstliche_intelligenz', mobileLabel: 'Künstliche Intelligenz' },
      { path: 'parallele-programmierung/', label: '06_parallele_programmierung', mobileLabel: 'Parallele Programmierung' }
    ]
  },
  {
    label: 'Technisch',
    prefix: 'II.',
    colorClass: 'text-emerald-400',
    widthClass: 'w-64',
    modules: [
      { path: 'digitaltechnik/', label: '07_digitaltechnik', mobileLabel: 'Digitaltechnik' },
      { path: 'rechnerorganisation/', label: '08_rechnerorganisation', mobileLabel: 'Rechnerorganisation' },
      { path: 'computersystemsicherheit/', label: '09_computersystemsicherheit', mobileLabel: 'Computersystemsicherheit' },
      { path: 'computernetze/', label: '10_computernetze_verteilte_sys', mobileLabel: 'Computernetze' }
    ]
  },
  {
    label: 'Theoretisch',
    prefix: 'III.',
    colorClass: 'text-purple-400',
    widthClass: 'w-48',
    modules: [
      { path: 'moses/', label: '11_moses', mobileLabel: 'Modellierung, Spezifikation und Semantik' },
      { path: 'afe/', label: '12_afe', mobileLabel: 'Automaten, formale Sprachen und Entscheidbarkeit' },
      { path: 'apl/', label: '13_apl', mobileLabel: 'Aussagen- und Prädikatenlogik' }
    ]
  },
  {
    label: 'Mathematik',
    prefix: 'IV.',
    colorClass: 'text-rose-400',
    widthClass: 'w-52',
    alignClass: 'right-0 lg:left-0 lg:right-auto',
    modules: [
      { path: 'mathe-1/', label: '14_mathe_1', mobileLabel: 'Mathematik I' },
      { path: 'mathe-2/', label: '15_mathe_2', mobileLabel: 'Mathematik II' },
      { path: 'mathe-3/', label: '16_mathe_3_promi', mobileLabel: 'Mathematik III &amp; ProMi' }
    ]
  },
  {
    label: 'Soft Skills',
    prefix: 'V.',
    colorClass: 'text-yellow-400',
    widthClass: 'w-64',
    alignClass: 'right-0',
    modules: [
      { path: 'informatik-gesellschaft/', label: '17_informatik_und_gesellschaft', mobileLabel: 'Informatik &amp; Gesellschaft' },
      { path: 'wissenschaftliches-arbeiten/', label: '18_wissenschaftliches_arbeiten', mobileLabel: 'Wissenschaftliches Arbeiten' }
    ]
  }
]

const FOOTER_LINKS = [
  { path: 'informationsmanagement/', label: '~/informationsmanagement' },
  { path: 'algorithmen-datenstrukturen/', label: '~/algorithmen_und_datenstrukturen' },
  { path: 'rechnerorganisation/', label: '~/rechnerorganisation' },
  { path: 'moses/', label: '~/moses' },
  { path: 'afe/', label: '~/afe' },
  { path: 'apl/', label: '~/apl' },
  { path: 'mathe-1/', label: '~/mathe_1' },
  { path: 'mathe-2/', label: '~/mathe_2' },
  { path: 'mathe-3/', label: '~/mathe_3_promi' },
  { path: 'disclaimer/', label: '~/disclaimer' }
]

const MOBILE_MODULES = MODULE_GROUPS.flatMap(group => group.modules)

function ensureUniformPageStyles() {
  document.documentElement.classList.add('h-full', 'bg-[#0a0c10]', 'text-slate-200')
  document.body.classList.add(
    'min-h-full',
    'flex',
    'flex-col',
    'bg-[#0a0c10]',
    'text-slate-200',
    'antialiased',
    'custom-scrollbar',
    'selection:bg-blue-600',
    'selection:text-white'
  )
}

function renderDesktopMenu(relativePath) {
  return MODULE_GROUPS.map(group => {
    const dropdownAlign = group.alignClass || 'left-0'
    const links = group.modules.map(module =>
      `<a href="${relativePath}${module.path}" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">${module.label}</a>`
    ).join('')

    return `
      <div class="relative group">
        <button class="text-slate-300 hover:text-white px-2.5 py-1.5 rounded hover:bg-[#151c28] transition flex items-center gap-1.5" aria-label="${group.label} öffnen">
          <span class="${group.colorClass}">${group.prefix}</span>${group.label} <span class="text-[9px] text-slate-500">▼</span>
        </button>
        <div class="absolute ${dropdownAlign} top-full pt-1 ${group.widthClass} opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
          <div class="bg-[#0c1017] border border-[#1e2533] rounded-lg shadow-2xl py-1 overflow-hidden">
            ${links}
          </div>
        </div>
      </div>
    `
  }).join('')
}

function renderMobileMenu(relativePath) {
  const links = MOBILE_MODULES.map(module =>
    `<a href="${relativePath}${module.path}" class="shrink-0 rounded-md border border-[#273248] px-3 py-1.5 text-slate-300">${module.mobileLabel}</a>`
  ).join('')

  return `
    <nav class="md:hidden border-b border-[#1e2533] bg-[#0c1017] overflow-x-auto custom-scrollbar" aria-label="Mobile Modulnavigation">
      <div class="flex min-w-max items-center gap-2 px-4 py-2 text-[11px] font-mono">
        <a href="${relativePath}" class="shrink-0 rounded-md border border-[#273248] bg-[#151c28] px-3 py-1.5 text-slate-300">Startseite</a>
        ${links}
      </div>
    </nav>
  `
}

function renderHeader(relativePath) {
  ensureUniformPageStyles()
  window.__UNISUITE_ROOT_PATH = relativePath

  const headerHtml = `
  <header class="sticky top-0 z-50 bg-[#0c1017]/95 backdrop-blur border-b border-[#1e2533]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
      <div class="flex items-center space-x-6">
        <a href="${relativePath}" class="flex items-center space-x-3 text-slate-100 hover:text-blue-400 transition group">
          <div class="w-8 h-8 rounded-lg bg-[#151c28] border border-[#273248] p-1 flex items-center justify-center font-mono font-bold text-xs text-blue-400 group-hover:border-blue-500 transition">
            <svg class="w-full h-full" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="18,3 30,10 18,17 6,10" fill="#3b82f6" />
              <polygon points="6,10 18,17 18,31 6,24" fill="#1e40af" />
              <polygon points="18,17 30,10 30,24 18,31" fill="#0284c7" />
              <circle cx="18" cy="17" r="2.5" fill="#ffffff" />
            </svg>
          </div>
          <div class="flex items-center gap-2">
            <span class="font-mono font-bold text-base tracking-tight text-white">UniSuite</span>
            <span class="text-[10px] text-slate-400 font-mono px-1.5 py-0.5 rounded bg-[#151c28] border border-[#273248]">v2.5.0</span>
          </div>
        </a>

        <nav class="hidden md:flex items-center space-x-2 border-l border-[#1e2533] pl-6 text-xs font-mono">
          ${renderDesktopMenu(relativePath)}
        </nav>
      </div>

      <div class="flex items-center space-x-4 text-xs font-mono">
        <button onclick="printAsPDF()" class="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#151c28] border border-[#273248] text-slate-300 hover:text-white hover:border-blue-500 transition">
          📄 PDF
        </button>
        <a href="/" class="text-slate-400 hover:text-white flex items-center gap-1.5 transition">
          <span>&larr;</span> portfolio
        </a>
      </div>
    </div>
  </header>
  ${renderMobileMenu(relativePath)}
  `

  const el = document.getElementById('app-header')
  if (el) el.innerHTML = headerHtml
  else document.write(headerHtml)
}

function renderFooter(relativePath) {
  const links = FOOTER_LINKS.map(link =>
    `<a href="${relativePath}${link.path}" class="hover:text-slate-200 transition">${link.label}</a>`
  ).join('')

  const footerHtml = `
  <footer class="bg-[#0a0c10] border-t border-[#1e2533] text-slate-500 font-mono text-xs py-6 mt-16">
    <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded bg-blue-500"></span>
        <span>UniSuite // Interaktive Informatik-Labore</span>
      </div>
      <div class="flex flex-wrap items-center gap-6 text-slate-400">
        <a href="/" class="hover:text-slate-200 transition">~/portfolio</a>
        ${links}
      </div>
    </div>
  </footer>
  `

  const el = document.getElementById('app-footer')
  if (el) el.innerHTML = footerHtml
  else document.write(footerHtml)
}

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('input[type="text"], input[type="number"], select, textarea')
  inputs.forEach(input => {
    if (!input.id) return

    const saved = localStorage.getItem('unisuite_' + input.id)
    if (saved !== null) {
      input.value = saved
      input.dispatchEvent(new Event('change'))
    }

    input.addEventListener('input', () => {
      localStorage.setItem('unisuite_' + input.id, input.value)
    })
  })

  registerServiceWorker()
  initBugReporter()
})

function printAsPDF() {
  window.print()
}

function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return
  const rootPath = window.__UNISUITE_ROOT_PATH || './'

  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register(`${rootPath}sw.js`, { scope: rootPath })
      .catch(() => {})
  })
}

const printStyle = document.createElement('style')
printStyle.innerHTML = `
  @media print {
    body { background: white !important; color: black !important; }
    header, footer, button, select, nav, .hidden-print, #app-header, #app-footer, .sticky { display: none !important; }
    [class*="bg-"] {
      background: white !important;
      background-color: white !important;
      box-shadow: none !important;
    }
    [class*="text-white"], [class*="text-slate-"], [class*="text-indigo-"], [class*="text-blue-"], [class*="text-emerald-"], [class*="text-amber-"], [class*="text-rose-"], [class*="text-purple-"] {
      color: black !important;
    }
    [class*="border-"] {
      border-color: #ccc !important;
    }
    .cs-card {
      break-inside: avoid;
      margin-bottom: 20px;
    }
    * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
  }
`
document.head.appendChild(printStyle)

function initBugReporter() {
  if (document.getElementById('bug-reporter-widget')) return

  const bugReporterHTML = `
    <div id="bug-reporter-widget" class="hidden-print">
      <button id="bug-open-btn" class="fixed bottom-6 right-6 z-50 bg-rose-600 hover:bg-rose-500 text-white p-3 rounded-full shadow-[0_0_15px_rgba(225,29,72,0.4)] transition flex items-center justify-center group" title="Bug melden" aria-label="Bug melden">
        <span class="text-xl" aria-hidden="true">🐞</span>
        <span class="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 whitespace-nowrap transition-all duration-300 ease-in-out font-bold text-sm">Fehler melden</span>
      </button>

      <div id="bug-modal" class="fixed inset-0 z-[100] hidden flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" role="dialog" aria-modal="true" aria-labelledby="bug-modal-title" aria-describedby="bug-modal-description">
        <div class="bg-[#0f131a] border border-[#1e2533] rounded-2xl p-6 w-full max-w-lg shadow-2xl space-y-4 relative">
          <h3 id="bug-modal-title" class="text-xl font-bold text-white font-heading flex items-center gap-2">
            <span aria-hidden="true">🐞</span> Fehlerbericht einreichen
          </h3>
          <p id="bug-modal-description" class="text-sm text-slate-400">Melde einen Fehler im aktuellen Modul. Der Bericht wird an den zentralen Endpoint gesendet, bei Ausfall lokal gespeichert.</p>

          <div>
            <label for="bug-url" class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Modul / URL</label>
            <input type="text" id="bug-url" readonly value="" class="w-full bg-[#151c28] border border-[#273248] rounded px-3 py-2 text-xs text-slate-300 font-mono">
          </div>

          <div>
            <label for="bug-desc" class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Fehlerbeschreibung</label>
            <textarea id="bug-desc" rows="4" placeholder="Was genau funktioniert nicht?" class="w-full bg-[#0a0c10] border border-[#1e2533] rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-rose-500 transition"></textarea>
          </div>

          <div id="bug-status" class="text-xs text-slate-400 min-h-[1rem]" role="status" aria-live="polite"></div>

          <div class="flex justify-end gap-3 pt-2">
            <button id="bug-cancel-btn" class="px-4 py-2 text-sm font-bold text-slate-400 hover:text-white transition">Abbrechen</button>
            <button id="bug-save-btn" class="px-4 py-2 text-sm font-bold text-white bg-rose-600 hover:bg-rose-500 rounded-lg transition shadow-lg">Senden</button>
          </div>

          <div class="mt-4 pt-4 border-t border-[#1e2533] flex items-center justify-between">
            <span class="text-xs text-slate-500" id="bug-count">0 lokale Bugs gespeichert</span>
            <button id="bug-export-btn" class="text-xs text-blue-400 hover:text-blue-300 transition flex items-center gap-1">
              <span aria-hidden="true">⬇️</span> Lokale Bugs exportieren (.json)
            </button>
          </div>
        </div>
      </div>
    </div>
  `

  document.body.insertAdjacentHTML('beforeend', bugReporterHTML)

  const modal = document.getElementById('bug-modal')
  const openBtn = document.getElementById('bug-open-btn')
  const cancelBtn = document.getElementById('bug-cancel-btn')
  const saveBtn = document.getElementById('bug-save-btn')
  const exportBtn = document.getElementById('bug-export-btn')
  const descField = document.getElementById('bug-desc')
  const urlField = document.getElementById('bug-url')
  const statusField = document.getElementById('bug-status')

  let previousFocus = null

  function setStatus(message, colorClass = 'text-slate-400') {
    statusField.className = `text-xs min-h-[1rem] ${colorClass}`
    statusField.textContent = message
  }

  function openModal() {
    previousFocus = document.activeElement
    urlField.value = window.location.href
    modal.classList.remove('hidden')
    descField.focus()
  }

  function closeModal() {
    modal.classList.add('hidden')
    setStatus('')
    if (previousFocus && typeof previousFocus.focus === 'function') previousFocus.focus()
  }

  function updateBugCount() {
    const bugs = JSON.parse(localStorage.getItem('unisuite_bugs') || '[]')
    const countEl = document.getElementById('bug-count')
    if (countEl) countEl.textContent = `${bugs.length} lokale Bugs gespeichert`
  }

  async function submitBugReport(payload) {
    const endpoint =
      window.UNISUITE_BUG_REPORT_ENDPOINT ||
      document.documentElement.dataset.bugReportEndpoint ||
      localStorage.getItem('unisuite_bug_report_endpoint')

    if (!endpoint) return false

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 8000)

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal
      })
      return response.ok
    } catch {
      return false
    } finally {
      clearTimeout(timeout)
    }
  }

  function saveBugLocally(payload) {
    const bugs = JSON.parse(localStorage.getItem('unisuite_bugs') || '[]')
    bugs.push({ ...payload, status: 'local-open' })
    localStorage.setItem('unisuite_bugs', JSON.stringify(bugs))
    updateBugCount()
  }

  async function saveBugReport() {
    const desc = descField.value.trim()
    if (!desc) {
      setStatus('Bitte zuerst eine Fehlerbeschreibung eintragen.', 'text-amber-400')
      return
    }

    saveBtn.disabled = true
    setStatus('Sende Fehlerbericht...', 'text-blue-400')

    const payload = {
      date: new Date().toISOString(),
      url: window.location.href,
      desc,
      userAgent: navigator.userAgent
    }

    const sent = await submitBugReport(payload)

    if (sent) {
      setStatus('Fehlerbericht erfolgreich an den zentralen Endpoint gesendet.', 'text-emerald-400')
    } else {
      saveBugLocally(payload)
      setStatus('Endpoint nicht erreichbar. Bericht lokal gespeichert.', 'text-amber-400')
    }

    descField.value = ''
    saveBtn.disabled = false
    window.setTimeout(closeModal, 1100)
  }

  function downloadBugs() {
    const bugs = localStorage.getItem('unisuite_bugs') || '[]'
    const blob = new Blob([JSON.stringify(JSON.parse(bugs), null, 2)], { type: 'application/json' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'unisuite_bug_reports.json'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  openBtn.addEventListener('click', openModal)
  cancelBtn.addEventListener('click', closeModal)
  saveBtn.addEventListener('click', saveBugReport)
  exportBtn.addEventListener('click', downloadBugs)

  modal.addEventListener('click', event => {
    if (event.target === modal) closeModal()
  })

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) closeModal()
  })

  window.saveBugReport = saveBugReport
  window.downloadBugs = downloadBugs
  updateBugCount()
}
