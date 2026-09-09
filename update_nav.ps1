$template = @"
<!-- Desktop Menu: Überkategorien -->
        <nav class="hidden md:flex items-center space-x-2 border-l border-[#1e2533] pl-6 text-xs font-mono">
          
          <div class="relative group">
            <button class="text-slate-300 hover:text-white px-2.5 py-1.5 rounded hover:bg-[#151c28] transition flex items-center gap-1.5">
              <span class="text-blue-400">I.</span>Praktisch <span class="text-[9px] text-slate-500">▼</span>
            </button>
            <div class="absolute left-0 top-full pt-1 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <div class="bg-[#0c1017] border border-[#1e2533] rounded-lg shadow-2xl py-1 overflow-hidden">
                <a href="{path}informationsmanagement/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">01_informationsmanagement</a>
                <a href="{path}algorithmen-datenstrukturen/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">02_algorithmen_und_datenstrukturen</a>
              </div>
            </div>
          </div>

          <div class="relative group">
            <button class="text-slate-300 hover:text-white px-2.5 py-1.5 rounded hover:bg-[#151c28] transition flex items-center gap-1.5">
              <span class="text-emerald-400">II.</span>Technisch <span class="text-[9px] text-slate-500">▼</span>
            </button>
            <div class="absolute left-0 top-full pt-1 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <div class="bg-[#0c1017] border border-[#1e2533] rounded-lg shadow-2xl py-1 overflow-hidden">
                <a href="{path}rechnerorganisation/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">03_rechnerorganisation</a>
              </div>
            </div>
          </div>

          <div class="relative group">
            <button class="text-slate-300 hover:text-white px-2.5 py-1.5 rounded hover:bg-[#151c28] transition flex items-center gap-1.5">
              <span class="text-purple-400">III.</span>Theoretisch <span class="text-[9px] text-slate-500">▼</span>
            </button>
            <div class="absolute left-0 top-full pt-1 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <div class="bg-[#0c1017] border border-[#1e2533] rounded-lg shadow-2xl py-1 overflow-hidden">
                <a href="{path}moses/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">04_moses</a>
                <a href="{path}afe/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">05_afe</a>
                <a href="{path}apl/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">06_apl</a>
              </div>
            </div>
          </div>

          <div class="relative group">
            <button class="text-slate-300 hover:text-white px-2.5 py-1.5 rounded hover:bg-[#151c28] transition flex items-center gap-1.5">
              <span class="text-rose-400">IV.</span>Mathematik <span class="text-[9px] text-slate-500">▼</span>
            </button>
            <div class="absolute right-0 lg:left-0 lg:right-auto top-full pt-1 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <div class="bg-[#0c1017] border border-[#1e2533] rounded-lg shadow-2xl py-1 overflow-hidden">
                <a href="{path}mathe-1/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">07_mathe_1</a>
                <a href="{path}mathe-2/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">08_mathe_2</a>
                <a href="{path}mathe-3/" class="block px-4 py-2.5 text-slate-400 hover:text-white hover:bg-[#151c28] transition">09_mathe_3_promi</a>
              </div>
            </div>
          </div>

        </nav>
"@

Get-ChildItem -Filter index.html -Recurse | Where-Object { $_.DirectoryName -notmatch '\.git' } | ForEach-Object {
    $content = [System.IO.File]::ReadAllText($_.FullName, [System.Text.Encoding]::UTF8)
    
    $pathPrefix = if ($_.DirectoryName -eq (Get-Location).Path) { "./" } else { "../" }
    $replacement = $template -replace '\{path\}', $pathPrefix
    
    $regex = [regex] '(?s)<!-- Desktop Menu: Überkategorien -->\s*<nav[^>]*>.*?</nav>'
    $match = $regex.Match($content)
    
    if ($match.Success) {
        $newContent = $content.Replace($match.Value, $replacement)
        $utf8NoBom = New-Object System.Text.UTF8Encoding $false
        [System.IO.File]::WriteAllText($_.FullName, $newContent, $utf8NoBom)
        Write-Host "Updated $($_.FullName)"
    }
}

