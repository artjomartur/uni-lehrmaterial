# 🎓 UniSuite: Interaktive Hochschul-Lehrmaterialien

> Live verfügbar unter: **[https://unisuite.artjombecker.com](https://unisuite.artjombecker.com)**

Eine kuratierte Sammlung visueller Simulatoren, interaktiver Entscheidungsbäume und Übungswerkzeuge für Informatik-, Mathematik- und Organisationsthemen der **TU Darmstadt**. Entwickelt von **Artjom Becker**.

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

### 6. 🧠 Modellierung, Spezifikation und Semantik (`/moses/`)
- **Hoare-Kalkül & Weakest Preconditions**: Interaktive Verifikation von Hoare-Tripeln und Berechnung schwächster Vorbedingungen.
- **Operationelle Semantik**: Big-Step-Ableitungsbäume für imperative Programme.
- **Temporallogik**: LTL/CTL-Model-Checking mit Kripke-Strukturen.
- **Aussagenlogik**: Resolutionskalkül, DPLL und Klausur-Trainer.

### 7. 🤖 Automaten, formale Sprachen und Entscheidbarkeit (`/afe/`)
- **Automaten-Simulator**: DFA- und NFA-Visualisierung mit Ablaufverfolgung.
- **Formale Sprachen**: Reguläre Ausdrücke und kontextfreie Grammatiken.
- **Berechenbarkeit**: Grundlagen zu Turingmaschinen und Entscheidbarkeit.

### 8. 🔣 Aussagen- und Prädikatenlogik (`/apl/`)
- **Wahrheitstabellen-Generator** für aussagenlogische Formeln.
- **Logische Verfahren**: Resolution, Unifikation und Herbrand-Theorie.
- **Logikprogrammierung**: Grundlagen von Prolog.

### 9. 📈 Mathematik I: Analysis (`/mathe-1/`)
- **Analysis-Grundlagen**: Grenzwerte, Stetigkeit, Differential- und Integralrechnung.
- **Funktionsplotter & L'Hospital**: Interaktive Vorbereitung und Visualisierung mathematischer Aufgaben.

### 10. 🔢 Mathematik II: Lineare Algebra (`/mathe-2/`)
- **Lineare Algebra**: Vektorräume, Matrizen und Eigenwerte.
- **Gauß-Algorithmus**: Schritt-für-Schritt-Lösung linearer Gleichungssysteme.

### 11. 🎲 Mathematik III & ProMi: Stochastik und Propädeutikum (`/mathe-3/`)
- **Stochastik**: Wahrscheinlichkeiten und Statistik.
- **Bayes-Theorem-Rechner** für bedingte Wahrscheinlichkeiten und diagnostische Tests.
- **Propädeutische Grundlagen**: Logik, Mengenlehre und vollständige Induktion.

### 12. 📅 Studienplanung & Stundenplan (`/studienplanung/`)
- **Modulsuche** und persönliche Modulübersicht.
- **Stundenplan** mit Raum- und Veranstaltungsinformationen.
- **Notenspiegel** und organisatorische Hinweise zur TUCaN-Anmeldung.

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

# Konsistenz-/QA-Checks über alle Module
npm run qa

# Deployment auf Cloudflare Pages
npm run deploy
```

### Optional: Zentrales Bug-Reporting aktivieren
- Standardmäßig werden Bug-Reports lokal im Browser gespeichert (Fallback).
- Für zentrale Team-Erfassung kann ein Endpoint gesetzt werden:
  - global via `window.UNISUITE_BUG_REPORT_ENDPOINT`
  - oder via `data-bug-report-endpoint` auf dem `<html>`-Element
  - oder via `localStorage.setItem('unisuite_bug_report_endpoint', 'https://...')`

### Offline/Resilienz
- Die Plattform registriert einen Service Worker (`/sw.js`) für Core-Asset-Caching und bessere Offline-Verfügbarkeit.

---

## 👤 Autor
**Artjom Becker**
- Live Suite: [https://unisuite.artjombecker.com](https://unisuite.artjombecker.com)
- Hauptportfolio: [artjombecker.com](https://artjombecker.com)
- GitHub: [@artjomartur](https://github.com/artjomartur)
- Hochschule: TU Darmstadt
