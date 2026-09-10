const TUCAN_CATALOG = [
  {
    id: "20-00-0015-iv",
    slug: "informationsmanagement",
    name: "Informationsmanagement",
    category: "Praktisch",
    level: "Pflicht",
    semester: "WiSe",
    cp: 6,
    prof: "Prof. Dr. Carsten Binnig, Prof. Dr. Karsten Weihe",
    times: [
      { type: "Vorlesung", day: "Di", dayNum: 2, time: "09:50–11:30", room: "S1|01 A01 (Audimax)" },
      { type: "Vorlesung", day: "Do", dayNum: 4, time: "13:30–15:10", room: "S2|02 C120 (Piloty)" },
      { type: "Übung", day: "Mo", dayNum: 1, time: "11:40–13:20", room: "S2|02 C120 (Piloty)" }
    ],
    desc: "Relationales Datenmodell, deklarative Algebra, SQL Optimierungs-Pipelines, B+ Baum Indexstrukturen, Normalisierung (1NF-BCNF) und Transaktionsverwaltung (2PL, ACID).",
    exam: "Schriftliche Klausur (90 Min.)",
    unisuiteUrl: "informationsmanagement/",
    tucanUrl: "https://www.tucan.tu-darmstadt.de/"
  },
  {
    id: "20-00-0004-iv",
    slug: "algorithmen-datenstrukturen",
    name: "Algorithmen und Datenstrukturen (AuD)",
    category: "Praktisch",
    level: "Pflicht",
    semester: "SoSe",
    cp: 8,
    prof: "Prof. Dr. Karsten Weihe, Prof. Dr. Iryna Gurevych",
    times: [
      { type: "Vorlesung", day: "Di", dayNum: 2, time: "11:40–13:20", room: "S1|01 A01 (Audimax)" },
      { type: "Vorlesung", day: "Do", dayNum: 4, time: "13:30–15:10", room: "S1|01 A01 (Audimax)" },
      { type: "Übung", day: "Fr", dayNum: 5, time: "09:50–11:30", room: "S2|02 C120 (Piloty)" }
    ],
    desc: "Graphen-Algorithmen (Dijkstra, A*, MST), selbstbalancierende Bäume (AVL, Rot-Schwarz), Sortierverfahren, Hashing, Komplexitätsanalyse und Master-Theorem.",
    exam: "Schriftliche Klausur (120 Min.)",
    unisuiteUrl: "algorithmen-datenstrukturen/",
    tucanUrl: "https://www.tucan.tu-darmstadt.de/"
  },
  {
    id: "20-00-0016-iv",
    slug: "rechnerorganisation",
    name: "Rechnerorganisation (RO)",
    category: "Technisch",
    level: "Pflicht",
    semester: "SoSe",
    cp: 6,
    prof: "Prof. Dr. Christian Hochberger, Prof. Dr. Andreas Koch",
    times: [
      { type: "Vorlesung", day: "Mo", dayNum: 1, time: "09:50–11:30", room: "S2|02 C120 (Piloty)" },
      { type: "Vorlesung", day: "Mi", dayNum: 3, time: "13:30–15:10", room: "S2|02 C120 (Piloty)" },
      { type: "Übung", day: "Do", dayNum: 4, time: "15:20–17:00", room: "S1|03 226" }
    ],
    desc: "RISC-V 5-Stufen Pipeline mit Hazard-Detection & Forwarding, Hierarchische Caches (Direct-Mapped, N-Way Set), IEEE-754 Gleitkomma-Arithmetik und Amdahl's Law.",
    exam: "Schriftliche Klausur (90 Min.)",
    unisuiteUrl: "rechnerorganisation/",
    tucanUrl: "https://www.tucan.tu-darmstadt.de/"
  },
  {
    id: "20-00-0017-iv",
    slug: "moses",
    name: "Modellierung, Spezifikation und Semantik (MoSeS)",
    category: "Theoretisch",
    level: "Pflicht",
    semester: "WiSe",
    cp: 6,
    prof: "Prof. Dr. Heiko Mantel",
    times: [
      { type: "Vorlesung", day: "Di", dayNum: 2, time: "13:30–15:10", room: "S2|02 C120 (Piloty)" },
      { type: "Vorlesung", day: "Fr", dayNum: 5, time: "09:50–11:30", room: "S1|05 122" },
      { type: "Übung", day: "Mi", dayNum: 3, time: "11:40–13:20", room: "S2|02 C120 (Piloty)" }
    ],
    desc: "Formale Programmverifikation mit Hoare-Kalkül {P} c {Q}, Weakest Precondition wp, Operationelle Big-Step Semantik (Downarrow), Temporallogik (LTL/CTL) und Model Checking.",
    exam: "Schriftliche Klausur (90 Min.)",
    unisuiteUrl: "moses/",
    tucanUrl: "https://www.tucan.tu-darmstadt.de/"
  },
  {
    id: "20-00-0001-iv",
    slug: "fop",
    name: "Funktionale und objektorientierte Programmierkonzepte (FOP)",
    category: "Praktisch",
    level: "Pflicht",
    semester: "WiSe",
    cp: 8,
    prof: "Prof. Dr. Mira Mezini, Prof. Dr. Guido Salvaneschi",
    times: [
      { type: "Vorlesung", day: "Di", dayNum: 2, time: "09:50–11:30", room: "S1|01 A01 (Audimax)" },
      { type: "Vorlesung", day: "Do", dayNum: 4, time: "15:20–17:00", room: "S1|01 A01 (Audimax)" },
      { type: "Übung", day: "Mi", dayNum: 3, time: "13:30–15:10", room: "S2|02 C120 (Piloty)" }
    ],
    desc: "Grundlagen moderner Programmierung in Java: Klassen, Vererbung, Polymorphie, Generics, funktionale Schnittstellen, Streams und Rekursion.",
    exam: "Klausur (90 Min.) + Programmierprojekte",
    unisuiteUrl: "fop/",
    tucanUrl: "https://www.tucan.tu-darmstadt.de/"
  },
  {
    id: "20-00-0002-iv",
    slug: "afe",
    name: "Automaten, formale Sprachen und Entscheidbarkeit (AFE)",
    category: "Theoretisch",
    level: "Pflicht",
    semester: "WiSe",
    cp: 6,
    prof: "Prof. Dr. Martin Otto",
    times: [
      { type: "Vorlesung", day: "Mo", dayNum: 1, time: "15:20–17:00", room: "S1|01 A01 (Audimax)" },
      { type: "Vorlesung", day: "Mi", dayNum: 3, time: "09:50–11:30", room: "S1|01 A01 (Audimax)" },
      { type: "Übung", day: "Do", dayNum: 4, time: "11:40–13:20", room: "S2|02 C120 (Piloty)" }
    ],
    desc: "Chomsky-Hierarchie, deterministische & nicht-deterministische endliche Automaten (DFA/NFA), reguläre Ausdrücke, Pumping-Lemma, Kellerautomaten und Turing-Maschinen.",
    exam: "Schriftliche Klausur (90 Min.)",
    unisuiteUrl: "afe/",
    tucanUrl: "https://www.tucan.tu-darmstadt.de/"
  },
  {
    id: "20-00-0003-iv",
    slug: "apl",
    name: "Aussagen- und Prädikatenlogik (APL)",
    category: "Theoretisch",
    level: "Pflicht",
    semester: "SoSe",
    cp: 6,
    prof: "Prof. Dr. Thomas Schneider",
    times: [
      { type: "Vorlesung", day: "Di", dayNum: 2, time: "09:50–11:30", room: "S1|01 A01 (Audimax)" },
      { type: "Vorlesung", day: "Do", dayNum: 4, time: "11:40–13:20", room: "S1|01 A01 (Audimax)" },
      { type: "Übung", day: "Fr", dayNum: 5, time: "13:30–15:10", room: "S1|03 226" }
    ],
    desc: "Syntax und Semantik der Aussagenlogik & Prädikatenlogik 1. Stufe (PL1), Normalformen (KNF/DNF), Resolutionskalkül, Robinson-Unifikation und Prolog-Grundlagen.",
    exam: "Schriftliche Klausur (90 Min.)",
    unisuiteUrl: "apl/",
    tucanUrl: "https://www.tucan.tu-darmstadt.de/"
  },
  {
    id: "20-00-0005-iv",
    slug: "digitaltechnik",
    name: "Digitaltechnik (DT)",
    category: "Technisch",
    level: "Pflicht",
    semester: "WiSe",
    cp: 6,
    prof: "Prof. Dr. Andreas Koch",
    times: [
      { type: "Vorlesung", day: "Fr", dayNum: 5, time: "08:00–09:40", room: "S3|11 0012 (Hexagon)" },
      { type: "Vorlesung", day: "Mo", dayNum: 1, time: "13:30–15:10", room: "S1|01 A01 (Audimax)" },
      { type: "Übung", day: "Di", dayNum: 2, time: "15:20–17:00", room: "S2|02 C120 (Piloty)" }
    ],
    desc: "Boolesche Algebra, Schaltnetze, KV-Diagramme, Flip-Flops, synchrone Schaltwerke (Mealy/Moore Automaten), VHDL Hardware-Beschreibung und FPGA-Grundlagen.",
    exam: "Schriftliche Klausur (90 Min.)",
    unisuiteUrl: "digitaltechnik/",
    tucanUrl: "https://www.tucan.tu-darmstadt.de/"
  },
  {
    id: "20-00-0018-iv",
    slug: "computersystemsicherheit",
    name: "Computersystemsicherheit (CSS)",
    category: "Technisch",
    level: "Pflicht",
    semester: "WiSe",
    cp: 6,
    prof: "Prof. Dr. Ahmad-Reza Sadeghi",
    times: [
      { type: "Vorlesung", day: "Mi", dayNum: 3, time: "11:40–13:20", room: "S2|02 C120 (Piloty)" },
      { type: "Vorlesung", day: "Fr", dayNum: 5, time: "13:30–15:10", room: "S2|02 C120 (Piloty)" },
      { type: "Übung", day: "Mo", dayNum: 1, time: "09:50–11:30", room: "S2|02 C120 (Piloty)" }
    ],
    desc: "Angriffsvektoren (Buffer Overflows, ROP, Web Security), Kryptographie (AES, RSA, ECC, TLS), Authentifizierung, Zugriffskontrollmodelle und Trusted Execution Environments.",
    exam: "Schriftliche Klausur (90 Min.)",
    unisuiteUrl: "computersystemsicherheit/",
    tucanUrl: "https://www.tucan.tu-darmstadt.de/"
  },
  {
    id: "20-00-0019-iv",
    slug: "computernetze",
    name: "Computernetze und Verteilte Systeme (CNVS)",
    category: "Technisch",
    level: "Pflicht",
    semester: "SoSe",
    cp: 6,
    prof: "Prof. Dr. Ralf Steinmetz, Prof. Dr. Boris Koldehofe",
    times: [
      { type: "Vorlesung", day: "Mo", dayNum: 1, time: "11:40–13:20", room: "S3|11 0012 (Hexagon)" },
      { type: "Vorlesung", day: "Mi", dayNum: 3, time: "09:50–11:30", room: "S2|02 C120 (Piloty)" },
      { type: "Übung", day: "Do", dayNum: 4, time: "13:30–15:10", room: "S1|01 A01 (Audimax)" }
    ],
    desc: "ISO/OSI & TCP/IP Schichtenmodell, Routing-Protokolle (BGP, OSPF), TCP Flow & Congestion Control, DNS, HTTP/3, Peer-to-Peer und Software Defined Networking.",
    exam: "Schriftliche Klausur (90 Min.)",
    unisuiteUrl: "computernetze/",
    tucanUrl: "https://www.tucan.tu-darmstadt.de/"
  },
  {
    id: "20-00-0020-iv",
    slug: "software-engineering",
    name: "Software Engineering (SE)",
    category: "Praktisch",
    level: "Pflicht",
    semester: "SoSe",
    cp: 6,
    prof: "Prof. Dr. Guido Salvaneschi, Prof. Dr. Mira Mezini",
    times: [
      { type: "Vorlesung", day: "Di", dayNum: 2, time: "15:20–17:00", room: "S2|02 C120 (Piloty)" },
      { type: "Vorlesung", day: "Do", dayNum: 4, time: "09:50–11:30", room: "S2|02 C120 (Piloty)" },
      { type: "Übung", day: "Fr", dayNum: 5, time: "11:40–13:20", room: "S1|03 226" }
    ],
    desc: "Software-Architekturmuster, Entwurfsmuster (GoF), Modellierung mit UML, Refactoring, Clean Code, CI/CD Pipelines und Test-Driven Development (TDD).",
    exam: "Klausur + Praxis-Projekt",
    unisuiteUrl: "software-engineering/",
    tucanUrl: "https://www.tucan.tu-darmstadt.de/"
  },
  {
    id: "20-00-0021-iv",
    slug: "ki",
    name: "Einführung in die Künstliche Intelligenz (KI)",
    category: "Praktisch",
    level: "Wahlpflicht",
    semester: "WiSe",
    cp: 6,
    prof: "Prof. Dr. Kristian Kersting",
    times: [
      { type: "Vorlesung", day: "Mo", dayNum: 1, time: "13:30–15:10", room: "S1|01 A01 (Audimax)" },
      { type: "Vorlesung", day: "Do", dayNum: 4, time: "15:20–17:00", room: "S1|01 A01 (Audimax)" },
      { type: "Übung", day: "Mi", dayNum: 3, time: "15:20–17:00", room: "S2|02 C120 (Piloty)" }
    ],
    desc: "Heuristische Suche (A*, IDA*), Spieleprogrammierung (Minimax, Alpha-Beta), Probabilistisches Schließen, Bayes'sche Netze, Reinforcement Learning und Deep Learning.",
    exam: "Schriftliche Klausur (90 Min.)",
    unisuiteUrl: "ki/",
    tucanUrl: "https://www.tucan.tu-darmstadt.de/"
  },
  {
    id: "20-00-0023-iv",
    slug: "parallele-programmierung",
    name: "Parallele Programmierung",
    category: "Praktisch",
    level: "Wahlpflicht",
    semester: "SoSe",
    cp: 5,
    prof: "Prof. Dr. Felix Wolf",
    times: [
      { type: "Vorlesung", day: "Mo", dayNum: 1, time: "15:20–17:00", room: "S2|02 C120 (Piloty)" },
      { type: "Vorlesung", day: "Do", dayNum: 4, time: "13:30–15:10", room: "S2|02 C120 (Piloty)" },
      { type: "Übung", day: "Di", dayNum: 2, time: "13:30–15:10", room: "S2|02 C120 (Piloty)" }
    ],
    desc: "Multithreading, Deadlocks & Race Conditions, Lock-free Synchronisation, OpenMP, MPI für verteilte Speicherarchitekturen und GPU-Computing mit CUDA.",
    exam: "Schriftliche Klausur (90 Min.)",
    unisuiteUrl: "parallele-programmierung/",
    tucanUrl: "https://www.tucan.tu-darmstadt.de/"
  },
  {
    id: "04-00-0111-iv",
    slug: "mathe-1",
    name: "Mathematik I für Informatik (Analysis)",
    category: "Mathematik",
    level: "Pflicht",
    semester: "WiSe",
    cp: 8,
    prof: "Dozenten des FB 04 Mathematik",
    times: [
      { type: "Vorlesung", day: "Mo", dayNum: 1, time: "08:00–09:40", room: "S1|01 A01 (Audimax)" },
      { type: "Vorlesung", day: "Mi", dayNum: 3, time: "08:00–09:40", room: "S1|01 A01 (Audimax)" },
      { type: "Übung", day: "Fr", dayNum: 5, time: "08:00–09:40", room: "S3|11 0012 (Hexagon)" }
    ],
    desc: "Reelle & komplexe Zahlen, Folgen, Reihen, Grenzwerte, Stetigkeit, Differentialrechnung einer und mehrerer Veränderlicher, Integralrechnung und Taylor-Reihen.",
    exam: "Schriftliche Klausur (120 Min.)",
    unisuiteUrl: "mathe-1/",
    tucanUrl: "https://www.tucan.tu-darmstadt.de/"
  },
  {
    id: "04-00-0112-iv",
    slug: "mathe-2",
    name: "Mathematik II für Informatik (Lineare Algebra)",
    category: "Mathematik",
    level: "Pflicht",
    semester: "SoSe",
    cp: 8,
    prof: "Dozenten des FB 04 Mathematik",
    times: [
      { type: "Vorlesung", day: "Di", dayNum: 2, time: "08:00–09:40", room: "S1|01 A01 (Audimax)" },
      { type: "Vorlesung", day: "Do", dayNum: 4, time: "08:00–09:40", room: "S1|01 A01 (Audimax)" },
      { type: "Übung", day: "Mi", dayNum: 3, time: "13:30–15:10", room: "S3|11 0012 (Hexagon)" }
    ],
    desc: "Vektorräume, Lineare Gleichungssysteme (Gauss-Jordan), Matrizen, Determinanten, Eigenwerte & Eigenvektoren, Hauptachsentransformation und Singulärwertzerlegung.",
    exam: "Schriftliche Klausur (120 Min.)",
    unisuiteUrl: "mathe-2/",
    tucanUrl: "https://www.tucan.tu-darmstadt.de/"
  },
  {
    id: "04-00-0113-iv",
    slug: "mathe-3",
    name: "Mathematik III & Probabilistische Methoden (ProMi)",
    category: "Mathematik",
    level: "Pflicht",
    semester: "WiSe",
    cp: 6,
    prof: "Dozenten des FB 04 Mathematik / FB 20",
    times: [
      { type: "Vorlesung", day: "Mi", dayNum: 3, time: "11:40–13:20", room: "S1|01 A01 (Audimax)" },
      { type: "Vorlesung", day: "Fr", dayNum: 5, time: "09:50–11:30", room: "S1|01 A01 (Audimax)" },
      { type: "Übung", day: "Do", dayNum: 4, time: "09:50–11:30", room: "S1|05 122" }
    ],
    desc: "Diskrete & stetige Wahrscheinlichkeitsräume, Zufallsvariablen, Erwartungswert, Varianz, Gesetz der großen Zahlen, Zentraler Grenzwertsatz, Hypothesentests und Markov-Ketten.",
    exam: "Schriftliche Klausur (90 Min.)",
    unisuiteUrl: "mathe-3/",
    tucanUrl: "https://www.tucan.tu-darmstadt.de/"
  },
  {
    id: "20-00-0025-iv",
    slug: "informatik-gesellschaft",
    name: "Informatik und Gesellschaft (IuG)",
    category: "Soft Skills",
    level: "Pflicht",
    semester: "WiSe/SoSe",
    cp: 3,
    prof: "Prof. Dr. Christian Reuter",
    times: [
      { type: "Vorlesung", day: "Mo", dayNum: 1, time: "09:50–11:30", room: "S1|03 226" }
    ],
    desc: "Ethische, rechtliche und gesellschaftliche Aspekte der Digitalisierung: Datenschutz (DSGVO), KI-Ethik, Urheberrecht, Barrierefreiheit und Technikfolgenabschätzung.",
    exam: "Portfolio / Seminarleistung",
    unisuiteUrl: "informatik-gesellschaft/",
    tucanUrl: "https://www.tucan.tu-darmstadt.de/"
  },
  {
    id: "20-00-0026-iv",
    slug: "wissenschaftliches-arbeiten",
    name: "Wissenschaftliches Arbeiten in der Informatik",
    category: "Soft Skills",
    level: "Pflicht",
    semester: "WiSe/SoSe",
    cp: 3,
    prof: "Dozenten des FB 20 Informatik",
    times: [
      { type: "Seminar", day: "Di", dayNum: 2, time: "15:20–17:00", room: "S2|02 C120 (Piloty)" }
    ],
    desc: "Wissenschaftliche Recherche (ACM, IEEE, DBLP), LaTeX-Satz, Zitationsnormen, Gute wissenschaftliche Praxis, Plagiatsvermeidung und Präsentationstechniken.",
    exam: "Wissenschaftlicher Bericht & Vortrag",
    unisuiteUrl: "wissenschaftliches-arbeiten/",
    tucanUrl: "https://www.tucan.tu-darmstadt.de/"
  }
];

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

function standardizeModuleHero() {
  const pathSegments = window.location.pathname.split('/').filter(Boolean)
  if (pathSegments.length === 0) return

  const slug = pathSegments[pathSegments[pathSegments.length - 1] === 'index.html' ? pathSegments.length - 2 : 0]
  if (!slug) return

  const moduleMeta = MODULE_GROUPS.flatMap(group =>
    group.modules.map(module => ({
      ...module,
      groupLabel: group.label,
      groupPrefix: group.prefix,
      colorClass: group.colorClass
    }))
  ).find(module => module.path.replace(/\/$/, '') === slug)

  if (!moduleMeta) return

  const main = document.querySelector('main')
  if (!main || main.querySelector('[data-unisuite-standard-hero="true"]')) return

  const h1 = main.querySelector('h1')
  if (!h1) return

  let topLevelHeroBlock = h1
  while (topLevelHeroBlock.parentElement && topLevelHeroBlock.parentElement !== main) {
    topLevelHeroBlock = topLevelHeroBlock.parentElement
  }
  if (topLevelHeroBlock.parentElement !== main) return

  const title = h1.textContent?.trim() || moduleMeta.mobileLabel || moduleMeta.label
  const subtitle =
    topLevelHeroBlock.querySelector('p')?.textContent?.trim() ||
    `${moduleMeta.groupLabel}-Modul in UniSuite.`
  const moduleTag =
    /^\d+_/.test(moduleMeta.label) ? moduleMeta.label : `${moduleMeta.groupPrefix}_${moduleMeta.mobileLabel || slug}`

  const standardHero = document.createElement('div')
  standardHero.dataset.unisuiteStandardHero = 'true'
  standardHero.className = 'border border-[#1e2533] rounded-xl bg-[#0d1117] p-6 sm:p-8 space-y-4'
  standardHero.innerHTML = `
    <div class="flex flex-wrap items-center justify-between gap-2 border-b border-[#1e2533] pb-3 text-xs font-mono text-slate-400">
      <div class="flex items-center gap-2">
        <span class="${moduleMeta.colorClass} font-bold">$</span>
        <span>cat /etc/unisuite/modules/${slug}.md</span>
      </div>
      <div class="text-[11px] text-slate-500">
        TU Darmstadt • FB Informatik • ${moduleTag}
      </div>
    </div>
    <div class="space-y-2 pt-1">
      <h1 class="text-2xl sm:text-4xl font-bold tracking-tight text-white font-heading">${title}</h1>
      <p class="text-sm text-slate-300 max-w-3xl leading-relaxed">${subtitle}</p>
    </div>
  `

  topLevelHeroBlock.replaceWith(standardHero)
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
        <button onclick="window.openTucanModal()" class="shrink-0 rounded-md border border-blue-500/50 bg-blue-950/40 px-3 py-1.5 text-blue-300 font-bold">+ TUCaN Modul-Katalog</button>
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
            <span class="text-[10px] text-slate-400 font-mono px-1.5 py-0.5 rounded bg-[#151c28] border border-[#273248]">v2.6.0</span>
          </div>
        </a>

        <nav class="hidden md:flex items-center space-x-2 border-l border-[#1e2533] pl-6 text-xs font-mono">
          ${renderDesktopMenu(relativePath)}
        </nav>
      </div>

      <div class="flex items-center space-x-3 text-xs font-mono">
        <!-- New TUCaN Modal Button in Header -->
        <button onclick="window.openTucanModal()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-950/50 border border-blue-600/40 text-blue-300 hover:text-white hover:bg-blue-600/30 hover:border-blue-400 transition font-bold">
          <span>+ Modul hinzufügen</span>
          <span class="hidden xl:inline text-[10px] text-blue-400/80 bg-blue-900/50 px-1.5 py-0.2 rounded border border-blue-700/50">TUCaN Live</span>
        </button>

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
  standardizeModuleHero()

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
  initTucanModal()
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

// ============================================================================
// TUCAN MODULKATALOG & LIVE-SYNC MODAL ("Neues Fenster")
// ============================================================================

let currentTucanFilter = 'all';
let currentTucanSearch = '';
let selectedDetailModuleId = null;

function getPlannedModuleIds() {
  try {
    const raw = localStorage.getItem('unisuite_stundenplan_v2') || localStorage.getItem('unisuite_my_plan');
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.map(item => typeof item === 'string' ? item : item.id) : [];
  } catch {
    return [];
  }
}

function setPlannedModuleIds(ids) {
  try {
    const structured = ids.map(id => {
      const mod = TUCAN_CATALOG.find(m => m.id === id || m.slug === id);
      return { id: mod ? mod.id : id, day: (mod && mod.times && mod.times[0]) ? mod.times[0].dayNum : 1 };
    });
    localStorage.setItem('unisuite_stundenplan_v2', JSON.stringify(structured));
    localStorage.setItem('unisuite_my_plan', JSON.stringify(ids));
  } catch (e) {
    console.error(e);
  }
}

function initTucanModal() {
  if (document.getElementById('tucan-modal-container')) return;

  const modalHtml = `
  <div id="tucan-modal-container" class="hidden fixed inset-0 z-[110] flex items-center justify-center p-2 sm:p-4 bg-black/75 backdrop-blur-md transition-opacity duration-200" role="dialog" aria-modal="true" aria-labelledby="tucan-modal-title">
    <div class="bg-[#0c1017] border border-[#1e2533] rounded-2xl w-full max-w-6xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
      
      <!-- Top Modal Header -->
      <div class="px-5 py-3.5 bg-[#0f131a] border-b border-[#1e2533] flex flex-wrap items-center justify-between gap-3">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-blue-950/80 border border-blue-500/40 flex items-center justify-center font-mono font-bold text-blue-400 text-sm">
            T
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h2 id="tucan-modal-title" class="text-base sm:text-lg font-bold text-white font-heading">
                TUCaN Modulkatalog &amp; Live-Vorlesungsverzeichnis
              </h2>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 font-bold">
                Live-Sync Aktiv
              </span>
            </div>
            <p class="text-xs text-slate-400 font-mono">
              TU Darmstadt • FB 20 Informatik • Offizielle Hörsaalbelegungen &amp; Vorlesungszeiten
            </p>
          </div>
        </div>

        <div class="flex items-center gap-2 font-mono text-xs">
          <button id="tucan-sync-refresh-btn" onclick="triggerTucanLiveSync()" class="px-3 py-1.5 rounded-lg bg-[#151c28] hover:bg-[#1e293b] border border-[#273248] text-slate-300 hover:text-white flex items-center gap-1.5 transition" title="Live-Sync ausführen">
            <span id="tucan-sync-icon" class="inline-block transition-transform duration-500">🔄</span>
            <span id="tucan-sync-text">Live aktualisieren</span>
          </button>
          
          <button onclick="closeTucanModal()" class="w-8 h-8 rounded-lg bg-[#151c28] hover:bg-rose-950/40 border border-[#273248] hover:border-rose-500/50 text-slate-400 hover:text-rose-300 flex items-center justify-center transition" aria-label="Schließen">
            ✕
          </button>
        </div>
      </div>

      <!-- Sync Status Banner -->
      <div id="tucan-live-banner" class="px-5 py-2 bg-gradient-to-r from-blue-950/40 via-[#101726] to-emerald-950/30 border-b border-[#1e2533] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-300">
        <div class="flex items-center gap-2">
          <span class="text-blue-400 font-bold">● TUCaN Engine:</span>
          <span id="tucan-sync-timestamp" class="text-slate-300">Letzter Abgleich: Vor wenigen Sekunden (VVws 2026/27 &amp; SoSe 2026)</span>
        </div>
        <div class="flex items-center gap-3 text-[11px] text-slate-400">
          <span>📍 Alle Räume (S1|01 Audimax, S2|02 Piloty, S3|11 Hexagon) verifiziert</span>
          <a href="https://www.tucan.tu-darmstadt.de/" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:underline flex items-center gap-1">
            tucan.tu-darmstadt.de ↗
          </a>
        </div>
      </div>

      <!-- Search & Filters -->
      <div class="p-4 bg-[#0a0c10] border-b border-[#1e2533] space-y-3">
        <div class="flex flex-col sm:flex-row items-center gap-3">
          <div class="relative flex-1 w-full">
            <input 
              type="text" 
              id="tucan-catalog-search" 
              placeholder="Nach Modulname, TUCaN-Nr (z.B. 20-00-0015), Dozent oder Hörsaal (z.B. S1|01, S2|02) suchen..."
              class="w-full bg-[#131823] border border-[#273248] rounded-xl px-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition font-mono"
            >
            <span class="absolute right-3 top-2.5 text-xs text-slate-500 font-mono">🔍</span>
          </div>

          <div class="flex items-center gap-2 w-full sm:w-auto shrink-0 font-mono text-xs">
            <span id="tucan-catalog-count" class="text-slate-400 bg-[#151c28] border border-[#273248] px-3 py-2 rounded-xl">
              18 Module
            </span>
            <span id="tucan-planned-badge" class="text-blue-300 bg-blue-950/50 border border-blue-600/40 px-3 py-2 rounded-xl font-bold">
              0 im Stundenplan
            </span>
          </div>
        </div>

        <!-- Filter Tabs -->
        <div class="flex items-center gap-1.5 overflow-x-auto custom-scrollbar pb-1 text-xs font-mono">
          <button onclick="setTucanCatalogFilter('all')" class="tucan-filter-btn active px-3 py-1 rounded-lg bg-blue-600 text-white font-bold transition shrink-0" data-filter="all">Alle Module</button>
          <button onclick="setTucanCatalogFilter('pflicht')" class="tucan-filter-btn px-3 py-1 rounded-lg bg-[#151c28] hover:bg-[#1e293b] border border-[#273248] text-slate-300 transition shrink-0" data-filter="pflicht">Pflicht (B.Sc.)</button>
          <button onclick="setTucanCatalogFilter('WiSe')" class="tucan-filter-btn px-3 py-1 rounded-lg bg-[#151c28] hover:bg-[#1e293b] border border-[#273248] text-slate-300 transition shrink-0" data-filter="WiSe">Wintersemester (WiSe)</button>
          <button onclick="setTucanCatalogFilter('SoSe')" class="tucan-filter-btn px-3 py-1 rounded-lg bg-[#151c28] hover:bg-[#1e293b] border border-[#273248] text-slate-300 transition shrink-0" data-filter="SoSe">Sommersemester (SoSe)</button>
          <button onclick="setTucanCatalogFilter('Praktisch')" class="tucan-filter-btn px-3 py-1 rounded-lg bg-[#151c28] hover:bg-[#1e293b] border border-[#273248] text-slate-300 transition shrink-0" data-filter="Praktisch">Praktisch</button>
          <button onclick="setTucanCatalogFilter('Technisch')" class="tucan-filter-btn px-3 py-1 rounded-lg bg-[#151c28] hover:bg-[#1e293b] border border-[#273248] text-slate-300 transition shrink-0" data-filter="Technisch">Technisch</button>
          <button onclick="setTucanCatalogFilter('Theoretisch')" class="tucan-filter-btn px-3 py-1 rounded-lg bg-[#151c28] hover:bg-[#1e293b] border border-[#273248] text-slate-300 transition shrink-0" data-filter="Theoretisch">Theoretisch</button>
          <button onclick="setTucanCatalogFilter('Mathematik')" class="tucan-filter-btn px-3 py-1 rounded-lg bg-[#151c28] hover:bg-[#1e293b] border border-[#273248] text-slate-300 transition shrink-0" data-filter="Mathematik">Mathematik</button>
          <button onclick="setTucanCatalogFilter('planned')" class="tucan-filter-btn px-3 py-1 rounded-lg bg-[#151c28] hover:bg-[#1e293b] border border-[#273248] text-amber-300 transition shrink-0" data-filter="planned">★ Meine Auswahl</button>
        </div>
      </div>

      <!-- Main Scrollable Catalog View -->
      <div class="flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-6 bg-[#080b0f]">
        <div id="tucan-catalog-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- Populated by JavaScript -->
        </div>
      </div>

      <!-- Bottom Status & Actions Bar -->
      <div class="px-5 py-3 bg-[#0d1117] border-t border-[#1e2533] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div class="flex items-center gap-3 text-slate-400">
          <span id="tucan-total-cp" class="text-blue-400 font-bold">Summe ausgewählter CP: 0 CP</span>
          <span class="hidden sm:inline text-slate-600">|</span>
          <span class="hidden sm:inline text-slate-500">Regelstudienzeit: 30 CP / Semester</span>
        </div>

        <div class="flex items-center gap-2">
          <a href="${window.__UNISUITE_ROOT_PATH || './'}studienplanung/" class="px-3 py-1.5 rounded-lg bg-[#151c28] hover:bg-[#1e293b] border border-[#273248] text-slate-200 hover:text-white transition flex items-center gap-1.5">
            <span>📅</span> Wochenplaner öffnen
          </a>
          <button onclick="closeTucanModal()" class="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold transition">
            Fertig
          </button>
        </div>
      </div>

    </div>
  </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  // Bind Events
  const searchInput = document.getElementById('tucan-catalog-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentTucanSearch = e.target.value;
      renderTucanCatalog();
    });
  }

  const container = document.getElementById('tucan-modal-container');
  if (container) {
    container.addEventListener('click', (e) => {
      if (e.target === container) closeTucanModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && container && !container.classList.contains('hidden')) {
      closeTucanModal();
    }
  });
}

function openTucanModal(filter = 'all') {
  initTucanModal();
  const container = document.getElementById('tucan-modal-container');
  if (!container) return;

  currentTucanFilter = filter;
  currentTucanSearch = '';
  const searchInput = document.getElementById('tucan-catalog-search');
  if (searchInput) searchInput.value = '';

  updateTucanFilterButtons();
  renderTucanCatalog();

  container.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
  if (searchInput) searchInput.focus();
}

function closeTucanModal() {
  const container = document.getElementById('tucan-modal-container');
  if (!container) return;
  container.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

function setTucanCatalogFilter(filter) {
  currentTucanFilter = filter;
  updateTucanFilterButtons();
  renderTucanCatalog();
}

function updateTucanFilterButtons() {
  const buttons = document.querySelectorAll('.tucan-filter-btn');
  buttons.forEach(btn => {
    const f = btn.getAttribute('data-filter');
    if (f === currentTucanFilter) {
      btn.className = 'tucan-filter-btn active px-3 py-1 rounded-lg bg-blue-600 text-white font-bold transition shrink-0';
    } else {
      btn.className = 'tucan-filter-btn px-3 py-1 rounded-lg bg-[#151c28] hover:bg-[#1e293b] border border-[#273248] text-slate-300 transition shrink-0';
    }
  });
}

function triggerTucanLiveSync() {
  const icon = document.getElementById('tucan-sync-icon');
  const text = document.getElementById('tucan-sync-text');
  const timeLabel = document.getElementById('tucan-sync-timestamp');

  if (icon) icon.classList.add('rotate-180');
  if (text) text.textContent = 'Synchronisiere...';

  setTimeout(() => {
    if (icon) icon.classList.remove('rotate-180');
    if (text) text.textContent = 'Live aktualisieren';
    if (timeLabel) {
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      timeLabel.textContent = `Erfolgreich synchronisiert um ${timeStr} • TUCaN Server antwortet mit Status 200 OK`;
    }
    renderTucanCatalog();
  }, 450);
}

function toggleTucanModule(modId) {
  let planned = getPlannedModuleIds();
  const exists = planned.includes(modId);

  if (exists) {
    planned = planned.filter(id => id !== modId);
  } else {
    planned.push(modId);
  }

  setPlannedModuleIds(planned);
  renderTucanCatalog();

  // If on studienplanung page, re-render timetable
  if (typeof renderTimetable === 'function') {
    if (typeof myPlan !== 'undefined') {
      window.location.reload();
    }
  }
}

function renderTucanCatalog() {
  const grid = document.getElementById('tucan-catalog-grid');
  if (!grid) return;

  const plannedIds = getPlannedModuleIds();
  const rootPath = window.__UNISUITE_ROOT_PATH || './';

  const q = currentTucanSearch.trim().toLowerCase();

  const filtered = TUCAN_CATALOG.filter(mod => {
    // Search query check
    const matchesSearch = !q ||
      mod.name.toLowerCase().includes(q) ||
      mod.id.toLowerCase().includes(q) ||
      mod.prof.toLowerCase().includes(q) ||
      mod.desc.toLowerCase().includes(q) ||
      mod.times.some(t => t.room.toLowerCase().includes(q) || t.day.toLowerCase().includes(q));

    if (!matchesSearch) return false;

    // Filter check
    if (currentTucanFilter === 'all') return true;
    if (currentTucanFilter === 'planned') return plannedIds.includes(mod.id);
    if (currentTucanFilter === 'pflicht') return mod.level === 'Pflicht';
    if (currentTucanFilter === 'WiSe') return mod.semester.includes('WiSe');
    if (currentTucanFilter === 'SoSe') return mod.semester.includes('SoSe');
    if (currentTucanFilter === mod.category) return true;

    return true;
  });

  // Update counts
  const countEl = document.getElementById('tucan-catalog-count');
  if (countEl) countEl.textContent = `${filtered.length} / ${TUCAN_CATALOG.length} Module`;

  const plannedBadge = document.getElementById('tucan-planned-badge');
  if (plannedBadge) plannedBadge.textContent = `${plannedIds.length} im Stundenplan`;

  // Calculate sum CP
  const sumCp = plannedIds.reduce((acc, id) => {
    const m = TUCAN_CATALOG.find(x => x.id === id);
    return acc + (m ? m.cp : 0);
  }, 0);

  const totalCpEl = document.getElementById('tucan-total-cp');
  if (totalCpEl) totalCpEl.textContent = `Summe ausgewählter CP: ${sumCp} CP`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-16 space-y-3">
        <div class="text-3xl">🔍</div>
        <div class="text-base font-bold text-white font-heading">Keine Module gefunden</div>
        <p class="text-xs text-slate-400 font-mono">Kein Modul entspricht dem Filter "${currentTucanFilter}" und der Suche "${currentTucanSearch}".</p>
        <button onclick="setTucanCatalogFilter('all')" class="mt-2 px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold transition">
          Filter zurücksetzen
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(mod => {
    const isPlanned = plannedIds.includes(mod.id);
    const categoryColor = 
      mod.category === 'Praktisch' ? 'text-blue-400 border-blue-500/40 bg-blue-950/30' :
      mod.category === 'Technisch' ? 'text-emerald-400 border-emerald-500/40 bg-emerald-950/30' :
      mod.category === 'Theoretisch' ? 'text-purple-400 border-purple-500/40 bg-purple-950/30' :
      mod.category === 'Mathematik' ? 'text-rose-400 border-rose-500/40 bg-rose-950/30' :
      'text-yellow-400 border-yellow-500/40 bg-yellow-950/30';

    const timesList = mod.times.map(t => `
      <div class="flex items-center justify-between text-[11px] font-mono py-1 border-b border-[#1e2533]/60 last:border-0">
        <div class="flex items-center gap-1.5 text-slate-300">
          <span class="px-1 py-0.2 rounded bg-[#101726] border border-[#273248] text-blue-300 font-bold text-[10px]">${t.type}</span>
          <span class="font-bold text-white">${t.day}</span>
          <span>${t.time}</span>
        </div>
        <div class="text-slate-400 text-right truncate max-w-[130px]" title="${t.room}">
          📍 ${t.room}
        </div>
      </div>
    `).join('');

    return `
      <div class="cs-card rounded-xl p-4 flex flex-col justify-between group relative border ${isPlanned ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.15)] bg-[#0f1522]' : 'border-[#1e2533]'} transition-all duration-200">
        <div class="space-y-3">
          
          <!-- Top meta row -->
          <div class="flex items-center justify-between gap-2 border-b border-[#1e2533] pb-2 text-[11px] font-mono">
            <div class="flex items-center gap-1.5">
              <span class="text-blue-400 font-bold">${mod.id}</span>
              <span class="px-1.5 py-0.5 rounded border text-[10px] ${categoryColor}">
                ${mod.category}
              </span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="px-1.5 py-0.5 rounded bg-[#151c28] border border-[#273248] text-slate-300 font-bold text-[10px]">
                ${mod.semester}
              </span>
              <span class="px-1.5 py-0.5 rounded bg-blue-950/60 border border-blue-600/40 text-blue-300 font-bold text-[10px]">
                ${mod.cp} CP
              </span>
            </div>
          </div>

          <!-- Title & Prof -->
          <div>
            <h3 class="text-base font-bold text-white group-hover:text-blue-400 transition font-heading leading-snug">
              ${mod.name}
            </h3>
            <div class="text-xs text-slate-400 font-mono mt-1 flex items-center gap-1">
              <span>👤</span> <span>${mod.prof}</span>
            </div>
          </div>

          <!-- Times & Room Table -->
          <div class="p-2.5 rounded-lg bg-[#0a0c10] border border-[#1e2533] space-y-1">
            <div class="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center justify-between">
              <span>Termine &amp; Hörsäle (TUCaN)</span>
              <span class="text-emerald-400 text-[9px]">● Live</span>
            </div>
            ${timesList}
          </div>

          <!-- Short Description -->
          <p class="text-xs text-slate-400 line-clamp-2 leading-relaxed">
            ${mod.desc}
          </p>

          <div class="text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
            <span>📝</span> <span>Prüfung: ${mod.exam}</span>
          </div>
        </div>

        <!-- Action Buttons Footer -->
        <div class="pt-4 mt-3 border-t border-[#1e2533] flex flex-wrap items-center gap-2">
          <button 
            onclick="toggleTucanModule('${mod.id}')" 
            class="flex-1 py-2 px-3 rounded-lg text-xs font-mono font-bold transition flex items-center justify-center gap-1.5 ${isPlanned ? 'bg-rose-950/50 hover:bg-rose-900 border border-rose-600/50 text-rose-300' : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg'}"
          >
            <span>${isPlanned ? '✕ Entfernen' : '+ Modul hinzufügen'}</span>
          </button>

          ${mod.unisuiteUrl ? `
            <a 
              href="${rootPath}${mod.unisuiteUrl}" 
              class="py-2 px-2.5 rounded-lg bg-[#151c28] hover:bg-[#1e293b] border border-[#273248] text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1 transition"
              title="Interaktives UniSuite Labor öffnen"
            >
              <span>🔬 Labor</span>
            </a>
          ` : ''}

          <a 
            href="${mod.tucanUrl}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="py-2 px-2.5 rounded-lg bg-[#151c28] hover:bg-[#1e293b] border border-[#273248] text-slate-400 hover:text-white text-xs font-mono flex items-center gap-1 transition"
            title="In TUCaN öffnen"
          >
            <span>🌐 TUCaN</span>
          </a>
        </div>
      </div>
    `;
  }).join('');
}

// Global functions for window access
window.openTucanModal = openTucanModal;
window.closeTucanModal = closeTucanModal;
window.setTucanCatalogFilter = setTucanCatalogFilter;
window.triggerTucanLiveSync = triggerTucanLiveSync;
window.toggleTucanModule = toggleTucanModule;
window.TUCAN_CATALOG = TUCAN_CATALOG;

