function renderHeader(relativePath) {
  const headerHtml = `
  <header class="sticky top-0 z-50 bg-[#0c1017]/95 backdrop-blur border-b border-[#1e2533]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
      <div class="flex items-center space-x-6">
        <a href="${relativePath}" class="flex items-center space-x-3 text-slate-100 hover:text-blue-400 transition group">
          <!-- Geometric Tech Icon -->
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
            <span class="text-[10px] text-slate-400 font-mono px-1.5 py-0.5 rounded bg-[#151c28] border border-[#273248]">v2.4.0</span>
          </div>
        </a>

        <!-- Desktop Menu: Überkategorien -->
        <nav class="hidden md:flex items-center space-x-2 border-l border-[#1e2533] pl-6 text-xs font-mono">
          
          <div class="relative group">
            <button class="text-slate-300 hover:text-white px-2.5 py-1.5 rounded hover:bg-[#151c28] transition flex items-center gap-1.5">
              <span class="text-amber-400">#</span>Orga <span class="text-[9px] text-slate-500">▼</span>
            </button>
            <div class="absolute left-0 top-full pt-1 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <div class="bg-[#0c1017] border border-[#1e2533] rounded-lg shadow-2xl py-1 overflow-hidden">
                <a href="${relativePath}studienplanung/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">Studienplanung & Stundenplan</a>
              </div>
            </div>
          </div>
          
          <div class="relative group">
            <button class="text-slate-300 hover:text-white px-2.5 py-1.5 rounded hover:bg-[#151c28] transition flex items-center gap-1.5">
              <span class="text-blue-400">I.</span>Praktisch <span class="text-[9px] text-slate-500">▼</span>
            </button>
            <div class="absolute left-0 top-full pt-1 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <div class="bg-[#0c1017] border border-[#1e2533] rounded-lg shadow-2xl py-1 overflow-hidden">
                <a href="${relativePath}fop/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">01_fop</a>
                <a href="${relativePath}algorithmen-datenstrukturen/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">02_algorithmen_datenstrukturen</a>
                <a href="${relativePath}software-engineering/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">03_software_engineering</a>
                <a href="${relativePath}informationsmanagement/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">04_informationsmanagement</a>
                <a href="${relativePath}ki/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">05_künstliche_intelligenz</a>
                <a href="${relativePath}parallele-programmierung/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">06_parallele_programmierung</a>
              </div>
            </div>
          </div>

          <div class="relative group">
            <button class="text-slate-300 hover:text-white px-2.5 py-1.5 rounded hover:bg-[#151c28] transition flex items-center gap-1.5">
              <span class="text-emerald-400">II.</span>Technisch <span class="text-[9px] text-slate-500">▼</span>
            </button>
            <div class="absolute left-0 top-full pt-1 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <div class="bg-[#0c1017] border border-[#1e2533] rounded-lg shadow-2xl py-1 overflow-hidden">
                <a href="${relativePath}digitaltechnik/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">07_digitaltechnik</a>
                <a href="${relativePath}rechnerorganisation/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">08_rechnerorganisation</a>
                <a href="${relativePath}computersystemsicherheit/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">09_computersystemsicherheit</a>
                <a href="${relativePath}computernetze/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">10_computernetze_verteilte_sys</a>
              </div>
            </div>
          </div>

          <div class="relative group">
            <button class="text-slate-300 hover:text-white px-2.5 py-1.5 rounded hover:bg-[#151c28] transition flex items-center gap-1.5">
              <span class="text-purple-400">III.</span>Theoretisch <span class="text-[9px] text-slate-500">▼</span>
            </button>
            <div class="absolute left-0 top-full pt-1 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <div class="bg-[#0c1017] border border-[#1e2533] rounded-lg shadow-2xl py-1 overflow-hidden">
                <a href="${relativePath}moses/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">11_moses</a>
                <a href="${relativePath}afe/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">12_afe</a>
                <a href="${relativePath}apl/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">13_apl</a>
              </div>
            </div>
          </div>

          <div class="relative group">
            <button class="text-slate-300 hover:text-white px-2.5 py-1.5 rounded hover:bg-[#151c28] transition flex items-center gap-1.5">
              <span class="text-rose-400">IV.</span>Mathematik <span class="text-[9px] text-slate-500">▼</span>
            </button>
            <div class="absolute right-0 lg:left-0 lg:right-auto top-full pt-1 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <div class="bg-[#0c1017] border border-[#1e2533] rounded-lg shadow-2xl py-1 overflow-hidden">
                <a href="${relativePath}mathe-1/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">14_mathe_1</a>
                <a href="${relativePath}mathe-2/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">15_mathe_2</a>
                <a href="${relativePath}mathe-3/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">16_mathe_3_promi</a>
              </div>
            </div>
          </div>

          <div class="relative group">
            <button class="text-slate-300 hover:text-white px-2.5 py-1.5 rounded hover:bg-[#151c28] transition flex items-center gap-1.5">
              <span class="text-yellow-400">V.</span>Soft Skills <span class="text-[9px] text-slate-500">▼</span>
            </button>
            <div class="absolute right-0 top-full pt-1 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <div class="bg-[#0c1017] border border-[#1e2533] rounded-lg shadow-2xl py-1 overflow-hidden">
                <a href="${relativePath}informatik-gesellschaft/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">17_informatik_und_gesellschaft</a>
                <a href="${relativePath}wissenschaftliches-arbeiten/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">18_wissenschaftliches_arbeiten</a>
              </div>
            </div>
          </div>

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
  <nav class="md:hidden border-b border-[#1e2533] bg-[#0c1017] overflow-x-auto custom-scrollbar" aria-label="Mobile Modulnavigation">
    <div class="flex min-w-max items-center gap-2 px-4 py-2 text-[11px] font-mono">
      <a href="${relativePath}" class="shrink-0 rounded-md border border-[#273248] bg-[#151c28] px-3 py-1.5 text-slate-300">Startseite</a>
      <a href="${relativePath}studienplanung/" class="shrink-0 rounded-md border border-[#273248] px-3 py-1.5 text-slate-300">Studienplanung</a>
      <a href="${relativePath}informationsmanagement/" class="shrink-0 rounded-md border border-[#273248] px-3 py-1.5 text-slate-300">Informationsmanagement</a>
      <a href="${relativePath}algorithmen-datenstrukturen/" class="shrink-0 rounded-md border border-[#273248] px-3 py-1.5 text-slate-300">Algorithmen &amp; Datenstrukturen</a>
      <a href="${relativePath}rechnerorganisation/" class="shrink-0 rounded-md border border-[#273248] px-3 py-1.5 text-slate-300">Rechnerorganisation</a>
      <a href="${relativePath}moses/" class="shrink-0 rounded-md border border-[#273248] px-3 py-1.5 text-slate-300">Modellierung, Spezifikation und Semantik</a>
      <a href="${relativePath}afe/" class="shrink-0 rounded-md border border-[#273248] px-3 py-1.5 text-slate-300">Automaten, formale Sprachen und Entscheidbarkeit</a>
      <a href="${relativePath}apl/" class="shrink-0 rounded-md border border-[#273248] px-3 py-1.5 text-slate-300">Aussagen- und Prädikatenlogik</a>
      <a href="${relativePath}mathe-1/" class="shrink-0 rounded-md border border-[#273248] px-3 py-1.5 text-slate-300">Mathematik I</a>
      <a href="${relativePath}mathe-2/" class="shrink-0 rounded-md border border-[#273248] px-3 py-1.5 text-slate-300">Mathematik II</a>
      <a href="${relativePath}mathe-3/" class="shrink-0 rounded-md border border-[#273248] px-3 py-1.5 text-slate-300">Mathematik III &amp; ProMi</a>
    </div>
  </nav>
  `;
  const el = document.getElementById('app-header');
  if (el) el.innerHTML = headerHtml;
  else document.write(headerHtml);
}

function renderFooter(relativePath) {
  const footerHtml = `
  <footer class="bg-[#0a0c10] border-t border-[#1e2533] text-slate-500 font-mono text-xs py-6 mt-16">
    <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded bg-blue-500"></span>
        <span>UniSuite // Interaktive Informatik-Labore</span>
      </div>
      <div class="flex flex-wrap items-center gap-6 text-slate-400">
        <a href="/" class="hover:text-slate-200 transition">~/portfolio</a>
        <a href="${relativePath}informationsmanagement/" class="hover:text-slate-200 transition">~/informationsmanagement</a>
        <a href="${relativePath}algorithmen-datenstrukturen/" class="hover:text-slate-200 transition">~/algorithmen_und_datenstrukturen</a>
        <a href="${relativePath}rechnerorganisation/" class="hover:text-slate-200 transition">~/rechnerorganisation</a>
        <a href="${relativePath}moses/" class="hover:text-slate-200 transition">~/moses</a>
        <a href="${relativePath}afe/" class="hover:text-slate-200 transition">~/afe</a>
        <a href="${relativePath}apl/" class="hover:text-slate-200 transition">~/apl</a>
        <a href="${relativePath}mathe-1/" class="hover:text-slate-200 transition">~/mathe_1</a>
        <a href="${relativePath}mathe-2/" class="hover:text-slate-200 transition">~/mathe_2</a>
        <a href="${relativePath}mathe-3/" class="hover:text-slate-200 transition">~/mathe_3_promi</a>
        <a href="${relativePath}disclaimer/" class="hover:text-slate-200 transition">~/disclaimer</a>
      </div>
    </div>
  </footer>
  `;
  const el = document.getElementById('app-footer');
  if (el) el.innerHTML = footerHtml;
  else document.write(footerHtml);
}

// Local Storage Manager (Auto-Save forms)
document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('input[type="text"], input[type="number"], select, textarea');
  inputs.forEach(input => {
    if(!input.id) return;
    
    // Load saved value
    const saved = localStorage.getItem('unisuite_' + input.id);
    if(saved !== null) {
      input.value = saved;
      // Trigger change event so calculators update automatically
      input.dispatchEvent(new Event('change'));
    }

    // Save on change
    input.addEventListener('input', () => {
      localStorage.setItem('unisuite_' + input.id, input.value);
    });
  });
});

// PDF Print Function
function printAsPDF() {
  window.print();
}

// Inject Print CSS
const printStyle = document.createElement('style');
printStyle.innerHTML = `
  @media print {
    body { background: white !important; color: black !important; }
    header, footer, button, select, nav, .hidden-print, #app-header, #app-footer, .sticky { display: none !important; }
    
    /* Force all background classes to white and text classes to black */
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
`;
document.head.appendChild(printStyle);


  // ==========================================
  // Bug Reporter
  // ==========================================
  const bugReporterHTML = `
    <div id="bug-reporter-widget" class="hidden-print">
      <!-- Floating Button -->
      <button onclick="document.getElementById('bug-modal').classList.remove('hidden')" class="fixed bottom-6 right-6 z-50 bg-rose-600 hover:bg-rose-500 text-white p-3 rounded-full shadow-[0_0_15px_rgba(225,29,72,0.4)] transition flex items-center justify-center group" title="Bug melden">
        <span class="text-xl">🐞</span>
        <span class="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 whitespace-nowrap transition-all duration-300 ease-in-out font-bold text-sm">Fehler melden</span>
      </button>

      <!-- Modal -->
      <div id="bug-modal" class="fixed inset-0 z-[100] hidden flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
        <div class="bg-[#0f131a] border border-[#1e2533] rounded-2xl p-6 w-full max-w-lg shadow-2xl space-y-4 relative">
          <h3 class="text-xl font-bold text-white font-heading flex items-center gap-2">
            <span>🐞</span> Fehlerbericht einreichen
          </h3>
          <p class="text-sm text-slate-400">Markiere Fehler oder schreibe, was im aktuellen Modul nicht funktioniert. Artjom kann das später beheben.</p>
          
          <div>
            <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Modul / URL</label>
            <input type="text" id="bug-url" readonly value="" class="w-full bg-[#151c28] border border-[#273248] rounded px-3 py-2 text-xs text-slate-300 font-mono">
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Fehlerbeschreibung</label>
            <textarea id="bug-desc" rows="4" placeholder="Was genau funktioniert nicht?" class="w-full bg-[#0a0c10] border border-[#1e2533] rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-rose-500 transition"></textarea>
          </div>

          <div class="flex justify-end gap-3 pt-2">
            <button onclick="document.getElementById('bug-modal').classList.add('hidden')" class="px-4 py-2 text-sm font-bold text-slate-400 hover:text-white transition">Abbrechen</button>
            <button onclick="saveBugReport()" class="px-4 py-2 text-sm font-bold text-white bg-rose-600 hover:bg-rose-500 rounded-lg transition shadow-lg">Speichern</button>
          </div>
          
          <!-- Bug List Download -->
          <div class="mt-4 pt-4 border-t border-[#1e2533] flex items-center justify-between">
            <span class="text-xs text-slate-500" id="bug-count">0 Fehler gespeichert</span>
            <button onclick="downloadBugs()" class="text-xs text-blue-400 hover:text-blue-300 transition flex items-center gap-1">
              <span>⬇️</span> Alle Bugs exportieren (.json)
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', bugReporterHTML);

  window.saveBugReport = function() {
    const desc = document.getElementById('bug-desc').value.trim();
    if(!desc) return;
    const url = document.getElementById('bug-url').value;
    const bugs = JSON.parse(localStorage.getItem('unisuite_bugs')) || [];
    bugs.push({ date: new Date().toISOString(), url, desc, status: 'open' });
    localStorage.setItem('unisuite_bugs', JSON.stringify(bugs));
    document.getElementById('bug-desc').value = '';
    document.getElementById('bug-modal').classList.add('hidden');
    updateBugCount();
    alert('Fehler erfolgreich gespeichert!');
  };

  window.downloadBugs = function() {
    const bugs = localStorage.getItem('unisuite_bugs') || '[]';
    const blob = new Blob([JSON.stringify(JSON.parse(bugs), null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "unisuite_bug_reports.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  function updateBugCount() {
    const bugs = JSON.parse(localStorage.getItem('unisuite_bugs')) || [];
    const countEl = document.getElementById('bug-count');
    if(countEl) countEl.textContent = bugs.length + ' Fehler gespeichert';
  }
  updateBugCount();

