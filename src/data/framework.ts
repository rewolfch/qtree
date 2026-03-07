import { Branch } from '../types';

export const branches: Branch[] = [
  {
    id: "configuration-management",
    title: { de: "Configuration Management", en: "Configuration Management" },
    description: { de: "Die Basis für alle Änderungen. Versionskontrolle, Branching-Strategien und Traceability.", en: "The basis for all changes. Version control, branching strategies, and traceability." },
    icon: "git-branch",
    levels: [
      { id: 1, title: { de: "Keine Versionierung", en: "No Versioning" }, description: { de: "Code liegt lokal oder auf Shared Drives. Keine Historie.", en: "Code is local or on shared drives. No history." } },
      { id: 2, title: { de: "Zentrales Repo", en: "Central Repo" }, description: { de: "Git/SVN wird genutzt. Code ist zentral gesichert.", en: "Git/SVN is used. Code is centrally backed up." } },
      { id: 3, title: { de: "Branching Strategie", en: "Branching Strategy" }, description: { de: "Definierte Workflows (z.B. GitFlow, Trunk-Based). Code Reviews etabliert.", en: "Defined workflows (e.g., GitFlow, Trunk-Based). Code reviews established." } },
      { id: 4, title: { de: "Automatisierte Hooks", en: "Automated Hooks" }, description: { de: "Pre-commit Hooks für Linting/Formatting. Policy Enforcement.", en: "Pre-commit hooks for linting/formatting. Policy enforcement." } },
      { id: 5, title: { de: "Infrastructure as Code", en: "Infrastructure as Code" }, description: { de: "Alles ist versioniert: Code, Config, Infrastruktur, DB-Schema.", en: "Everything is versioned: Code, Config, Infrastructure, DB Schema." } },
    ]
  },
  {
    id: "unit-testing",
    title: { de: "Unit Testing", en: "Unit Testing" },
    description: { de: "Die erste Verteidigungslinie. Schnelle, isolierte Tests für Code-Qualität.", en: "The first line of defense. Fast, isolated tests for code quality." },
    icon: "microscope",
    levels: [
      { id: 1, title: { de: "Keine Unit Tests", en: "No Unit Tests" }, description: { de: "Testen nur manuell oder durch Ausführen der App.", en: "Testing only manually or by running the app." } },
      { id: 2, title: { de: "Ad-hoc Tests", en: "Ad-hoc Tests" }, description: { de: "Vereinzelte Tests, oft lokal ausgeführt. Keine CI-Integration.", en: "Sporadic tests, often run locally. No CI integration." } },
      { id: 3, title: { de: "CI Integration", en: "CI Integration" }, description: { de: "Tests laufen bei jedem Build. Reporting vorhanden.", en: "Tests run on every build. Reporting available." } },
      { id: 4, title: { de: "Hohe Abdeckung", en: "High Coverage" }, description: { de: "Code Coverage > 80%. Mocking von Abhängigkeiten.", en: "Code Coverage > 80%. Mocking of dependencies." } },
      { id: 5, title: { de: "TDD / Mutation Testing", en: "TDD / Mutation Testing" }, description: { de: "Test-Driven Development. Mutation Testing zur Qualitätssicherung der Tests.", en: "Test-Driven Development. Mutation Testing to ensure test quality." } },
    ]
  },
  {
    id: "build-practices",
    title: { de: "Build Practices", en: "Build Practices" },
    description: { de: "Automatisierte Builds, Artefakt-Management und CI-Server.", en: "Automated builds, artifact management, and CI servers." },
    icon: "package",
    levels: [
      { id: 1, title: { de: "Manueller Build", en: "Manual Build" }, description: { de: "Build in IDE oder via Kommandozeile auf Entwickler-PC.", en: "Build in IDE or via command line on developer PC." } },
      { id: 2, title: { de: "Build Scripte", en: "Build Scripts" }, description: { de: "Standardisierte Scripte (Gradle, Maven, npm).", en: "Standardized scripts (Gradle, Maven, npm)." } },
      { id: 3, title: { de: "CI Server", en: "CI Server" }, description: { de: "Zentraler Build Server (Jenkins, GitHub Actions). Nightly Builds.", en: "Central Build Server (Jenkins, GitHub Actions). Nightly Builds." } },
      { id: 4, title: { de: "Artefakt Management", en: "Artifact Management" }, description: { de: "Versionierte Artefakte in Repository (Nexus, Artifactory).", en: "Versioned artifacts in repository (Nexus, Artifactory)." } },
      { id: 5, title: { de: "Reproducible Builds", en: "Reproducible Builds" }, description: { de: "Deterministische Builds. Caching Strategien. Build Pipelines als Code.", en: "Deterministic builds. Caching strategies. Build pipelines as code." } },
    ]
  },
  {
    id: "deployment-practices",
    title: { de: "Deployment Practices", en: "Deployment Practices" },
    description: { de: "Wie Software in Umgebungen gelangt. Von manuell bis Continuous Deployment.", en: "How software reaches environments. From manual to Continuous Deployment." },
    icon: "rocket",
    levels: [
      { id: 1, title: { de: "Manuelles Deployment", en: "Manual Deployment" }, description: { de: "Kopieren von Dateien per FTP/SCP. Fehleranfällig.", en: "Copying files via FTP/SCP. Prone to errors." } },
      { id: 2, title: { de: "Scripted Deployment", en: "Scripted Deployment" }, description: { de: "Shell-Scripte automatisieren Schritte. Noch manuell angestoßen.", en: "Shell scripts automate steps. Still triggered manually." } },
      { id: 3, title: { de: "Automated Deployment", en: "Automated Deployment" }, description: { de: "Deployment per Knopfdruck aus CI/CD Tool auf Staging.", en: "Push-button deployment from CI/CD tool to staging." } },
      { id: 4, title: { de: "Blue/Green Deployment", en: "Blue/Green Deployment" }, description: { de: "Zero-Downtime Deployments. Schnelles Rollback möglich.", en: "Zero-Downtime deployments. Fast rollback possible." } },
      { id: 5, title: { de: "Continuous Deployment", en: "Continuous Deployment" }, description: { de: "Jeder Commit geht automatisch bis in Produktion (wenn Tests grün).", en: "Every commit goes automatically to production (if tests pass)." } },
    ]
  },
  {
    id: "test-automation",
    title: { de: "Test Automation", en: "Test Automation" },
    description: { de: "Automatisierte Regressionstests auf API- und UI-Ebene.", en: "Automated regression tests on API and UI levels." },
    icon: "bot",
    levels: [
      { id: 1, title: { de: "Keine Automation", en: "No Automation" }, description: { de: "Rein manuelles Testen.", en: "Purely manual testing." } },
      { id: 2, title: { de: "Record & Playback", en: "Record & Playback" }, description: { de: "Fragile Tests, schwer zu warten.", en: "Fragile tests, hard to maintain." } },
      { id: 3, title: { de: "Scripted / API Tests", en: "Scripted / API Tests" }, description: { de: "Stabile API Tests. UI Tests mit Page Object Model.", en: "Stable API tests. UI tests with Page Object Model." } },
      { id: 4, title: { de: "Data-Driven", en: "Data-Driven" }, description: { de: "Trennung von Testdaten und Testlogik. Parallelisierung.", en: "Separation of test data and logic. Parallelization." } },
      { id: 5, title: { de: "Self-healing / AI", en: "Self-healing / AI" }, description: { de: "Tests reparieren sich bei UI-Änderungen selbst. Visuelle Regressionstests.", en: "Tests heal themselves on UI changes. Visual regression tests." } },
    ]
  },
  {
    id: "virtualization",
    title: { de: "Virtualization & Data", en: "Virtualization & Data" },
    description: { de: "Testdatenmanagement und Service Virtualisierung.", en: "Test data management and service virtualization." },
    icon: "database",
    levels: [
      { id: 1, title: { de: "Produktionsdaten", en: "Production Data" }, description: { de: "Kopie der Prod-DB. Datenschutzprobleme.", en: "Copy of Prod DB. Privacy issues." } },
      { id: 2, title: { de: "Anonymisierte Dumps", en: "Anonymized Dumps" }, description: { de: "Skripte zur Anonymisierung. Aufwendig zu pflegen.", en: "Scripts for anonymization. High maintenance." } },
      { id: 3, title: { de: "Synthetische Daten", en: "Synthetic Data" }, description: { de: "Generierte Daten für spezifische Testfälle.", en: "Generated data for specific test cases." } },
      { id: 4, title: { de: "Service Virtualization", en: "Service Virtualization" }, description: { de: "Mocks/Stubs für externe Abhängigkeiten (3rd Party APIs).", en: "Mocks/Stubs for external dependencies (3rd Party APIs)." } },
      { id: 5, title: { de: "Data on Demand", en: "Data on Demand" }, description: { de: "Testdaten werden zur Laufzeit bereitgestellt und zurückgesetzt.", en: "Test data provided at runtime and reset." } },
    ]
  },
  {
    id: "manual-testing",
    title: { de: "Manual Testing", en: "Manual Testing" },
    description: { de: "Exploratives Testen und Usability. Der menschliche Faktor.", en: "Exploratory testing and usability. The human factor." },
    icon: "user-check",
    levels: [
      { id: 1, title: { de: "Ad-hoc Testing", en: "Ad-hoc Testing" }, description: { de: "Unstrukturiertes Rumklicken.", en: "Unstructured clicking around." } },
      { id: 2, title: { de: "Test Cases", en: "Test Cases" }, description: { de: "Schritt-für-Schritt Anleitungen. Fokus auf Verifikation.", en: "Step-by-step instructions. Focus on verification." } },
      { id: 3, title: { de: "Exploratory Testing", en: "Exploratory Testing" }, description: { de: "Strukturiertes Lernen über das System. Charters.", en: "Structured learning about the system. Charters." } },
      { id: 4, title: { de: "Session-Based", en: "Session-Based" }, description: { de: "Zeitlich begrenzte Sessions mit klarem Fokus und Protokoll.", en: "Time-boxed sessions with clear focus and logging." } },
      { id: 5, title: { de: "CX / Usability Labs", en: "CX / Usability Labs" }, description: { de: "Fokus auf User Experience, A/B Testing, Crowd Testing.", en: "Focus on User Experience, A/B Testing, Crowd Testing." } },
    ]
  },
  {
    id: "test-management",
    title: { de: "Test Management", en: "Test Management" },
    description: { de: "Planung, Reporting und Metriken.", en: "Planning, reporting, and metrics." },
    icon: "clipboard-list",
    levels: [
      { id: 1, title: { de: "Kein Management", en: "No Management" }, description: { de: "Zuruf oder E-Mail.", en: "Verbal or Email." } },
      { id: 2, title: { de: "Excel / Wiki", en: "Excel / Wiki" }, description: { de: "Listen von Testfällen. Manuelle Statuspflege.", en: "Lists of test cases. Manual status updates." } },
      { id: 3, title: { de: "Issue Tracker", en: "Issue Tracker" }, description: { de: "Jira Tickets für Bugs und Tests.", en: "Jira tickets for bugs and tests." } },
      { id: 4, title: { de: "Test Management Tool", en: "Test Management Tool" }, description: { de: "Dediziertes Tool (Xray, Zephyr). Traceability zu Requirements.", en: "Dedicated tool (Xray, Zephyr). Traceability to requirements." } },
      { id: 5, title: { de: "Quality Intelligence", en: "Quality Intelligence" }, description: { de: "Echtzeit-Dashboards, Metriken-getriebene Entscheidungen.", en: "Real-time dashboards, metrics-driven decisions." } },
    ]
  }
];
