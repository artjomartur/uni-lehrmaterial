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
            <div class="absolute left-0 top-full pt-1 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <div class="bg-[#0c1017] border border-[#1e2533] rounded-lg shadow-2xl py-1 overflow-hidden">

                <a href="${relativePath}informationsmanagement/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">01_informationsmanagement</a>
                <a href="${relativePath}algorithmen-datenstrukturen/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">02_algorithmen_und_datenstrukturen</a>
              </div>
            </div>
          </div>

          <div class="relative group">
            <button class="text-slate-300 hover:text-white px-2.5 py-1.5 rounded hover:bg-[#151c28] transition flex items-center gap-1.5">
              <span class="text-emerald-400">II.</span>Technisch <span class="text-[9px] text-slate-500">▼</span>
            </button>
            <div class="absolute left-0 top-full pt-1 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <div class="bg-[#0c1017] border border-[#1e2533] rounded-lg shadow-2xl py-1 overflow-hidden">
                <a href="${relativePath}rechnerorganisation/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">03_rechnerorganisation</a>
              </div>
            </div>
          </div>

          <div class="relative group">
            <button class="text-slate-300 hover:text-white px-2.5 py-1.5 rounded hover:bg-[#151c28] transition flex items-center gap-1.5">
              <span class="text-purple-400">III.</span>Theoretisch <span class="text-[9px] text-slate-500">▼</span>
            </button>
            <div class="absolute left-0 top-full pt-1 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <div class="bg-[#0c1017] border border-[#1e2533] rounded-lg shadow-2xl py-1 overflow-hidden">
                <a href="${relativePath}moses/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">04_moses</a>
                <a href="${relativePath}afe/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">05_afe</a>
                <a href="${relativePath}apl/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">06_apl</a>
              </div>
            </div>
          </div>

          <div class="relative group">
            <button class="text-slate-300 hover:text-white px-2.5 py-1.5 rounded hover:bg-[#151c28] transition flex items-center gap-1.5">
              <span class="text-rose-400">IV.</span>Mathematik <span class="text-[9px] text-slate-500">▼</span>
            </button>
            <div class="absolute right-0 lg:left-0 lg:right-auto top-full pt-1 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <div class="bg-[#0c1017] border border-[#1e2533] rounded-lg shadow-2xl py-1 overflow-hidden">
                <a href="${relativePath}mathe-1/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">07_mathe_1</a>
                <a href="${relativePath}mathe-2/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">08_mathe_2</a>
                <a href="${relativePath}mathe-3/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">09_mathe_3_promi</a>
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
    header, footer, button, .hidden-print, #app-header, #app-footer { display: none !important; }
    .cs-card, .bg-[#0b0e26], .bg-[#070919], .bg-[#0d1117] { 
      background: white !important; 
      border: 1px solid #ddd !important; 
      color: black !important;
      box-shadow: none !important;
      break-inside: avoid;
    }
    .text-slate-200, .text-slate-300, .text-slate-400, .text-white { color: black !important; }
    .border-indigo-950, .border-[#1e2533] { border-color: #ddd !important; }
    * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
  }
`;
document.head.appendChild(printStyle);

