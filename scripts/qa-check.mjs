import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const SKIP_DIRS = new Set(['.git', 'node_modules'])

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walk(fullPath, out)
    } else if (entry.isFile() && entry.name === 'index.html') {
      out.push(fullPath)
    }
  }
  return out
}

function checkPage(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  const relative = path.relative(ROOT, filePath)
  const errors = []

  if (!content.includes('id="app-header"')) errors.push('missing #app-header placeholder')
  if (!content.includes('id="app-footer"')) errors.push('missing #app-footer placeholder')

  const scriptMatch = content.match(/<script\s+src="(\.\.\/|\.\/)?components\.js"><\/script>/)
  if (!scriptMatch) errors.push('missing components.js include')

  const headerMatch = content.match(/renderHeader\("([^\"]+)"\)/)
  const footerMatch = content.match(/renderFooter\("([^\"]+)"\)/)

  if (!headerMatch) errors.push('missing renderHeader call')
  if (!footerMatch) errors.push('missing renderFooter call')
  if (headerMatch && footerMatch && headerMatch[1] !== footerMatch[1]) {
    errors.push(`header/footer relative path mismatch (${headerMatch[1]} vs ${footerMatch[1]})`)
  }

  if (!content.match(/<script\s+src="https:\/\/cdn\.tailwindcss\.com"/i)) {
    errors.push('missing Tailwind CDN include')
  }
  if (!content.match(/<meta\s+name="viewport"/i)) errors.push('missing viewport meta tag')
  if (!content.match(/<title>.+<\/title>/i)) errors.push('missing title tag')

  return { relative, errors }
}

const pages = walk(ROOT)
const reports = pages.map(checkPage)
const failed = reports.filter(report => report.errors.length > 0)

if (failed.length > 0) {
  console.error(`QA check failed for ${failed.length} page(s):`)
  for (const report of failed) {
    console.error(`\n- ${report.relative}`)
    for (const issue of report.errors) {
      console.error(`  - ${issue}`)
    }
  }
  process.exit(1)
}

console.log(`QA check passed for ${reports.length} pages.`)
