# 🎓 UniSuite: Interaktive Hochschul-Lehrmaterialien

> Live verfügbar unter: **[https://unisuite.artjombecker.com](https://unisuite.artjombecker.com)**

Eine kuratierte Sammlung visueller Simulatoren, interaktiver Entscheidungsbäume und Übungswerkzeuge für komplexe Informatik- und Datenbankthemen der **TU Darmstadt**. Entwickelt von **Artjom Becker**.

---

## 📚 Enthaltene Module

### 1. ⋈ Relationale Algebra & Join-Explorer (`/relationale-algebra/`)
- **9 Verbundarten**: Equi-Join, Natural Join, Theta-Join, Left/Right/Full Outer Joins, Semi-Join und Anti-Semi-Join.
- **Aggregation & Gruppierung ($\gamma$)**: `MIN`, `MAX`, `AVG`, `SUM`, `COUNT` mit farblicher Gruppentabelle.
- **Sortieroperator ($\tau$)**: Aufsteigende ($\uparrow$) und absteigende ($\downarrow$) Ordnung.
- **Klausur-Entscheidungsbaum & Signalwort-Trainer**: Interaktiver 3-Schritte-Wizard zur Join-Auswahl.
- **Wissenstest & Live-Kardinalitäten**: Chart.js Tupelmengen-Visualisierung und klausurrelevante Multiple-Choice-Fragen.

### 2. 🌳 SQL Query Optimizer & AST Visualizer (`/query-optimizer/`)
- **Operatorbaum-Visualisierung**: Übersetzung von SQL SFW-Blöcken in relationale Algebra-Bäume.
- **Heuristischer Pushdown**: Schrittweises Verschieben von Selektionen ($\sigma$) und Projektionen ($\pi$) vor teure Kreuzprodukte.
- **Kostenkalkulation**: Anzeige der Zwischenergebnis-Kardinalitäten und Speicherersparnis in Prozent.

### 3. 📐 Normalisierungs-Coach & FD-Synthese (`/normalisierung/`)
- **Attributhüllen-Rechner**: Schrittweise Bestimmung von $X^+$ über funktionalen Abhängigkeiten ($F$).
- **Kandidatenschlüssel-Finder**: Automatische Ermittlung aller Minimalschlüssel.
- **Normalformen-Diagnose**: Prüfung auf 1NF, 2NF, 3NF und BCNF mit konkreter Verletzungsbegründung.
- **3NF-Synthesealgorithmus**: Bernstein-Synthese mit Verlustlosigkeits- und Abhängigkeitstreue-Garantie.

### 4. 🌲 $B^+$-Baum & Indexing Playground (`/b-tree/`)
- **Interaktive $B^+$-Bäume**: Konfigurierbare Ordnung ($m = 3, 4, 5$).
- **Operationen**: Einfügen, Splitten, Löschen, Point-Seek und Range-Scans über die Leaf-Verkettung.
- **Kostenvergleich**: Index-Seek ($O(\log N)$) vs. sequentieller Full Table Scan ($O(N)$).

### 5. 🔒 Transaktionen, 2PL & Serialisierbarkeit (`/transaktionen/`)
- **Schedule-Timeline**: Chronologische Visualisierung verzahnter Multi-Transaktions-Abläufe.
- **Konfliktgraph $G=(V, E)$**: Automatische Zyklen-Erkennung zur Prüfung auf Konflikt-Serialisierbarkeit.
- **Topologische Sortierung**: Berechnung des äquivalenten seriellen Ablaufs.
- **2-Phasen-Sperren (2PL)** & Visualisierung klassischer ACID-Anomalien (Dirty Read, Lost Update, Phantom Read).

---

## 🛠️ Tech Stack
- **Core**: Vanilla HTML5, JavaScript (ES6+), Tailwind CSS
- **Mathematische Typographie**: KaTeX (LaTeX Auto-Render)
- **Analytics & Grafiken**: Chart.js, HTML5 Canvas, SVG/AST Tree Renderer
- **Deployment**: Cloudflare Pages / Workers via `unisuite.artjombecker.com`

---

## 🚀 Lokale Entwicklung & Deployment

```bash
# Repository klonen
git clone git@github.com:artjomartur/uni-lehrmaterial.git
cd uni-lehrmaterial

# Lokalen Webserver starten
npx serve .

# Deployment auf Cloudflare Pages
npm run deploy
```

---

## 👤 Autor
**Artjom Becker**
- Live Suite: [https://unisuite.artjombecker.com](https://unisuite.artjombecker.com)
- Hauptportfolio: [artjombecker.com](https://artjombecker.com)
- GitHub: [@artjomartur](https://github.com/artjomartur)
- Hochschule: TU Darmstadt
