$targetDir = "C:\Users\Artjom\Desktop\uni-lehrmaterial"
$files = Get-ChildItem -Path $targetDir -Filter "index.html" -Recurse

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName)

    # Berechne relativen Pfad
    $depth = ($file.DirectoryName.Substring($targetDir.Length).Split('\', [StringSplitOptions]::RemoveEmptyEntries)).Count
    $relPath = "./"
    if ($depth -gt 0) {
        $relPath = ""
        for ($i = 0; $i -lt $depth; $i++) {
            $relPath += "../"
        }
    }

    # Ersetze <header>
    $headerRegex = '(?s)<header.*?</header>'
    $headerReplacement = "<div id=`"app-header`"></div>`n  <script src=`"${relPath}components.js`"></script>`n  <script>renderHeader(`"$relPath`");</script>"
    $content = $content -replace $headerRegex, $headerReplacement

    # Ersetze <footer>
    $footerRegex = '(?s)<footer.*?</footer>'
    $footerReplacement = "<div id=`"app-footer`"></div>`n  <script>renderFooter(`"$relPath`");</script>"
    $content = $content -replace $footerRegex, $footerReplacement

    [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
}

Set-Location $targetDir
git diff
git add .
git commit -m "Refactor: Extract header and footer to components.js"

