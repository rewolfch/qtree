
export const rawConfig = {
  "grid": { "rows": 23, "cols": 10 },
  "lanes": [
    { 
      "label": "Config Management", "startRow": 1, "endRow": 3, "targetCount": 12,
      "details": {
        "description": "Configuration Management (CM) bildet das Fundament für stabile Softwareentwicklung. Es stellt sicher, dass alle Artefakte (Code, Configs, Dokumentation) versioniert, nachvollziehbar und wiederherstellbar sind.",
        "importance": "Ohne solides CM gibt es keine Reproduzierbarkeit. 'It works on my machine' wird zum Dauerzustand, Rollbacks sind unmöglich und Compliance ist nicht erreichbar.",
        "gettingStarted": "Beginnen Sie mit der strikten Versionierung aller Assets in einem SCM (z.B. Git). Führen Sie eine klare Branching-Strategie ein und nutzen Sie Tags für Releases.",
        "resources": [
          { "label": "Git Branching Strategies", "url": "https://www.atlassian.com/git/tutorials/comparing-workflows" },
          { "label": "The Twelve-Factor App: Config", "url": "https://12factor.net/config" }
        ]
      }
    },
    { 
      "label": "Unit Testing", "startRow": 4, "endRow": 6, "targetCount": 6,
      "details": {
        "description": "Unit Testing validiert die kleinste testbare Einheit einer Software (Funktion, Methode, Klasse) in Isolation. Es ist die Basis der Testpyramide.",
        "importance": "Unit Tests geben extrem schnelles Feedback. Sie ermöglichen sicheres Refactoring, dokumentieren den Code und verhindern Regressionen auf logischer Ebene frühzeitig.",
        "gettingStarted": "Wählen Sie ein Framework (JUnit, PyTest, Jest). Schreiben Sie Tests für neuen Code. Streben Sie nicht sofort 100% Coverage an, sondern testen Sie kritische Pfade.",
        "resources": [
          { "label": "Test Pyramid Explained", "url": "https://martinfowler.com/articles/practical-test-pyramid.html" },
          { "label": "TDD Introduction", "url": "https://www.agilealliance.org/glossary/tdd/" }
        ]
      }
    },
    { 
      "label": "Build Practices", "startRow": 7, "endRow": 9, "targetCount": 12,
      "details": {
        "description": "Build Practices umfassen die Automatisierung der Kompilierung, Paketierung und Artefakterstellung. Ziel ist ein wiederholbarer, deterministischer Prozess.",
        "importance": "Manuelle Builds sind fehleranfällig und langsam. Ein standardisierter Build-Prozess ist die Voraussetzung für Continuous Integration und verhindert Inkonsistenzen zwischen Umgebungen.",
        "gettingStarted": "Nutzen Sie ein Build-Tool (Maven, Gradle, Webpack). Stellen Sie sicher, dass der Build mit einem einzigen Befehl lokal und auf dem Server läuft.",
        "resources": [
          { "label": "Continuous Integration Essentials", "url": "https://aws.amazon.com/devops/continuous-integration/" }
        ]
      }
    },
    { 
      "label": "Deployment Practices", "startRow": 10, "endRow": 12, "targetCount": 12,
      "details": {
        "description": "Deployment Practices regeln, wie Software in verschiedene Umgebungen (Dev, Test, Prod) ausgeliefert wird. Automatisierung steht hier im Fokus.",
        "importance": "Automatisierte Deployments reduzieren die 'Time-to-Market', minimieren menschliche Fehler bei Releases und ermöglichen schnelle Rollbacks im Fehlerfall.",
        "gettingStarted": "Skripten Sie Ihre manuellen Deployment-Schritte. Nutzen Sie Tools wie Jenkins, GitLab CI oder GitHub Actions, um Artefakte automatisch auf eine Testumgebung zu deployen.",
        "resources": [
          { "label": "Blue-Green Deployment", "url": "https://martinfowler.com/bliki/BlueGreenDeployment.html" },
          { "label": "Infrastructure as Code", "url": "https://www.hashicorp.com/resources/what-is-infrastructure-as-code" }
        ]
      }
    },
    { 
      "label": "Test Automation", "startRow": 13, "endRow": 15, "targetCount": 15,
      "details": {
        "description": "Test Automation bezeichnet die Nutzung von Software, um Tests auszuführen, die sonst manuell durchgeführt würden (UI, API, Integration).",
        "importance": "Ermöglicht häufige Releases durch schnelle Regressionstests. Befreit Tester von repetitiven Aufgaben, damit sie sich auf exploratives Testen konzentrieren können.",
        "gettingStarted": "Identifizieren Sie stabile, kritische Workflows (Smoke Tests). Automatisieren Sie diese zuerst. Nutzen Sie Page Object Pattern für Wartbarkeit.",
        "resources": [
          { "label": "Selenium WebDriver", "url": "https://www.selenium.dev/" },
          { "label": "Cypress.io", "url": "https://www.cypress.io/" }
        ]
      }
    },
    { 
      "label": "Virtualization", "startRow": 16, "endRow": 18, "targetCount": 11,
      "details": {
        "description": "Service Virtualisierung und Umgebungssimulation erlauben das Testen von Komponenten in Isolation, indem Abhängigkeiten (APIs, DBs) simuliert werden.",
        "importance": "Entkoppelt Teams voneinander. Ermöglicht Tests auch wenn Drittsysteme offline oder teuer sind. Erlaubt Simulation von Fehlerzuständen.",
        "gettingStarted": "Beginnen Sie mit dem Mocking einfacher HTTP-Antworten für Ihre Frontend-Tests. Nutzen Sie Tools wie WireMock oder Mountebank.",
        "resources": [
          { "label": "Service Virtualization Basics", "url": "https://en.wikipedia.org/wiki/Service_virtualization" }
        ]
      }
    },
    { 
      "label": "Manual Testing & Quality Improvement", "startRow": 19, "endRow": 21, "targetCount": 12,
      "details": {
        "description": "Trotz Automatisierung bleibt der Mensch essenziell. Fokus liegt auf explorativem Testen, Usability, UX und Prozessverbesserung.",
        "importance": "Automatisierung findet nur programmierte Fehler. Menschen finden Designschwächen, Usability-Probleme und 'Unknown Unknowns'.",
        "gettingStarted": "Führen Sie regelmäßige Bug-Bash-Sessions durch. Lernen Sie Techniken des explorativen Testens (Charters, Timeboxing).",
        "resources": [
          { "label": "Explore It! (Book)", "url": "https://pragprog.com/titles/ehxta/explore-it/" }
        ]
      }
    },
    { 
      "label": "Test Management & Reporting", "startRow": 22, "endRow": 23, "targetCount": 9,
      "details": {
        "description": "Umfasst Planung, Steuerung, Metriken und Reporting von Qualitätsaktivitäten. Es schafft Transparenz für Stakeholder.",
        "importance": "Macht Qualität sichtbar und steuerbar. Hilft, Risiken einzuschätzen und fundierte Go/No-Go Entscheidungen für Releases zu treffen.",
        "gettingStarted": "Definieren Sie Key Quality Indicators (KQIs). Automatisieren Sie das Reporting in Dashboards statt manueller Excel-Listen.",
        "resources": [
          { "label": "Software Testing Metrics", "url": "https://www.guru99.com/software-testing-metrics-metrics.html" }
        ]
      }
    }
  ],
  "cells": [
    // --- Config Management ---
    { 
      "id": "R1C2", "label": { "de": "Alle Artefakte versioniert & getaggt" }, "class": "yellow", "isRoot": true, 
      "tooltip": { "de": "Grundlegende Praxis im Configuration Management. Umfasst die Versionierung und das systematische Tagging aller Configuration Items (CIs) und zugehörigen Artefakte. Schafft vollständige Nachverfolgbarkeit." },
      "acceptanceCriteria": ["100% aller CIs sind versioniert und getaggt", "90% der Deployments werden automatisch getaggt", "30% schnellere Rollbacks (MTTR)", "Audit-Compliance in produktiven Umgebungen"]
    },
    { 
      "id": "R1C3", "label": { "de": "Code-based feature toggle" }, "class": "blue", "isRoot": true, 
      "tooltip": { "de": "Mechanismus, um Funktionen im Code zur Laufzeit zu aktivieren/deaktivieren. Entkoppelt Deployment von Release und reduziert Risiken." },
      "acceptanceCriteria": ["Alle neuen riskanten Features hinter Toggles", "Naming- & Doku-Standards eingeführt", "Reduktion der Hotfixes nach Releases um 30%", "80% der Toggles werden innerhalb von 2 Sprints entfernt"]
    },
    { 
      "id": "R2C3", "label": { "de": "SCM-based feature toggle" }, "class": "light-blue", 
      "tooltip": { "de": "Nutzung von Versionskontrollsystemen wie Git, um Feature-Toggles über Branches, Commits oder Konfigurationsdateien zu verwalten. Der Zustand eines Toggles ergibt sich aus dem versionierten Stand." },
      "acceptanceCriteria": ["Struktur für Toggle-Dateien in Git definiert", "100% neuer Toggles via Pull-Requests verwaltet", "Jeder Statuswechsel wird via PR gemanaged", "Fehlkonfigurationen um 80% reduziert"]
    },
    { 
      "id": "R3C3", "label": { "de": "Tool-driven merges" }, "class": "light-blue", 
      "tooltip": { "de": "Automatisierter oder halbautomatisierter Prozess, mit dem Code-Branches zusammengeführt werden – mithilfe moderner Merge-Tools. Automatisiert Merge-Prüfungen, löst Konflikte und validiert Regeln." },
      "acceptanceCriteria": ["100% der PRs nutzen Merge-Approval-Automation", "70% weniger manuelle Merge-Konflikte", "Merge-Queues in High-Traffic-Repos etabliert", "Security-Checks im Merge-Prozess eingebettet"]
    },
    { 
      "id": "R2C4", "label": { "de": "Codegranularität auf IR-Ebene" }, "class": "light-blue", 
      "tooltip": { "de": "Codeänderungen werden in kleine, atomare Einheiten aufgeteilt. Jeder Pull-Request hat einen klar abgegrenzten Zweck (z.B. <400 Zeilen). Das senkt Integrationsrisiken und erhöht die Review-Geschwindigkeit." },
      "acceptanceCriteria": ["90% der PRs unter 400 LOC, nur eine Änderung", "100% der PRs sind mit Ticket verknüpft", "40% weniger Rollbacks durch Integrationsfehler", "25% schnellere PR-Freigaben"]
    },
    { 
      "id": "R3C4", "label": { "de": "Automatisierte Merges" }, "class": "light-blue", 
      "tooltip": { "de": "Validierte Code-Änderungen werden automatisiert in den Hauptbranch integriert, sobald alle Bedingungen (Tests, Reviews) erfüllt sind. Eliminiert manuelle Engpässe." },
      "acceptanceCriteria": ["100% der Repos mit CI-Checks & Approval sind auto-merge-fähig", "95% der qualifizierten PRs werden automatisch gemerged", "50% less Reverts", "Automatische Release Notes"]
    },
    { 
      "id": "R2C5", "label": { "de": "Codegranularität auf Feature-Ebene" }, "class": "light-blue", 
      "tooltip": { "de": "Jede Funktionalität wird als eigenständige, in sich geschlossene Codeeinheit realisiert. Dies unterstützt unabhängige Entwicklung, Testing und Deployment einzelner Features." },
      "acceptanceCriteria": ["100% neuer Features in eigener Codeeinheit implementiert", "80% Testabdeckung pro Feature", "60% der Features unabhängig deploybar", "90% weniger Rollbacks durch Feature-Verflechtung"]
    },
    { 
      "id": "R1C5", "label": { "de": "Externalisiertes Feature-Flag-Management" }, "class": "light-blue", 
      "tooltip": { "de": "Auslagerung von Feature-Toggle-Logik in eine zentrale Steuerungsplattform (z.B. LaunchDarkly). Erlaubt Echtzeitkontrolle ohne Neu-Deployment." },
      "acceptanceCriteria": ["100% der kritischen Toggles migriert", "Self-Service UI für QA & Product", "Toggle-Logging integriert", "75% weniger Hotfixes wegen Fehlkonfiguration"]
    },
    { 
      "id": "R3C5", "label": { "de": "Dynamische Merges" }, "class": "light-blue", 
      "tooltip": { "de": "Softwarekomponenten werden zur Laufzeit oder beim Build flexibel zusammengesetzt. Ermöglicht adaptive Deployments und Mandantenfähigkeit." },
      "acceptanceCriteria": ["100% der Staging-Umgebungen nutzen dynamische Overlays", "80% weniger Pipeline-Varianten", "90% weniger statisches Branching", "100% der B2B-Module nutzen Runtime-Toggles"]
    },
    { 
      "id": "R1C6", "label": { "de": "Zentralisiertes Feature-Toggle-Framework" }, "class": "light-blue", 
      "tooltip": { "de": "Organisationsweites System zur Verwaltung, Absicherung und Auditierung von Toggles. Vereinheitlicht Format, Zugriff und Lifecycle-Regeln." },
      "acceptanceCriteria": ["100% der Teams migriert auf zentrale Plattform", "95% aller Toggles haben vollständige Metadaten", "70% weniger veraltete Toggles", "100% der Toggles mit Metriken verknüpft"]
    },
    { 
      "id": "R1C7", "label": { "de": "Centralized Feature Toggle Management" }, "class": "light-blue", 
      "tooltip": { "de": "Harmonisierung aller Toggle-Prozesse. Single Source of Truth für alle Toggles in der Organisation, um Inkonsistenzen zu vermeiden." },
      "acceptanceCriteria": ["100% der Toggles katalogisiert", "Toggle-Format und Ownership durch CI-Linting erzwungen", "90% Toggles mit Ablaufdatum", "Sichtbarkeit aller Toggles im Dashboard"]
    },
    { 
      "id": "R1C8", "label": { "de": "Progressive Exposure via Audience Targeting" }, "class": "light-blue", 
      "tooltip": { "de": "Schrittweise Freigabe neuer Features an spezifische Nutzersegmente (z.B. Beta-User, Regionen). Sicherer als Big-Bang-Releases." },
      "acceptanceCriteria": ["100% aller neuen Features nutzen Zielgruppenausspielung", "90% kritische Probleme in Beta erkannt", "99.9% Uptime während Rollout", "Feedback von >80% der Betatester"]
    },

    // --- Unit Testing ---
    { 
      "id": "R4C2", "label": { "de": "Automatisiertes Unit-Test-Framework" }, "class": "light-blue", 
      "tooltip": { "de": "Grundlegende Struktur zur Validierung kleinster Einheiten (Funktionen, Klassen). Bildet das Fundament für CI und schnelles Feedback." },
      "acceptanceCriteria": ["Einheitliches Framework für alle Services gewählt", "50% Testabdeckung auf neuem Code", "CI-Integration mit Tests < 10 Min", "20% weniger Fehler in Produktion"]
    },
    { 
      "id": "R4C3", "label": { "de": "Unit-Test-Abdeckung 5% - 25%" }, "class": "light-blue", 
      "tooltip": { "de": "Einstieg in breitere Anwendung von Unit-Tests. Fokus auf kritische oder neu entwickelte Komponenten und Risikokontrolle." },
      "acceptanceCriteria": ["25% Abdeckung in den 5 meistgenutzten Modulen", "Coverage-Reports in allen PRs für kritische Services", "10+ Bugs vor Release entdeckt", "Ausführung in CI < 5 Min"]
    },
    { 
      "id": "R5C3", "label": { "de": "Pre-Check-in Quality Checks" }, "class": "light-blue", 
      "tooltip": { "de": "Validierung von Code-Stil, Linting und einfachen Tests noch vor dem Check-in in den Hauptbranch. Verhindert, dass schlechter Code das Repo erreicht." },
      "acceptanceCriteria": ["Linting & Static Analysis für 100% der Commits", "Blockieren von Commits bei Fehlern", "Reduktion von CI-Build-Fehlern um 50%"]
    },
    { 
      "id": "R6C3", "label": { "de": "Unit-Test-Regressionstest-Suite" }, "class": "light-blue", 
      "tooltip": { "de": "Gezielte Sammlung automatisierter Tests, die sicherstellen, dass Änderungen keine bestehende Funktionalität zerstören." },
      "acceptanceCriteria": ["Ausführung der Suite bei 100% aller Pushes", "30% weniger produktive Regressions-Bugs", "Vollständige Abdeckung aller Kern-Workflows", ">=95% Erfolgsrate bei Fehlerdiagnose"]
    },
    { 
      "id": "R4C4", "label": { "de": "Unit-Test-Abdeckung 25% - 80%" }, "class": "light-blue", 
      "tooltip": { "de": "Übergang zu reifer Qualitätssicherung. Validierung von Logikpfaden und Randfällen wird Standard. Vertrauen in Stabilität wächst." },
      "acceptanceCriteria": [">= 80% Testabdeckung für alle kritischen Workflows", "40% weniger produktive Bugs", "90% aller Code-Reviews prüfen auf Tests", "100% Tests automatisiert via CI"]
    },
    { 
      "id": "R4C5", "label": { "de": "Unit-Test-Abdeckung > 80%" }, "class": "light-blue", 
      "tooltip": { "de": "Maximale Sicherheit durch Absicherung fast aller Codepfade inkl. Randfälle. Ermöglicht aggressives Refactoring und CI/CD." },
      "acceptanceCriteria": [">= 85% Unit-Test-Abdeckung für alle Kernmodule", "50% weniger Produktivfehler durch ungetestete Logik", "100% Regressionsabdeckung", "CI-Builds < 10 Min"]
    },
    { 
      "id": "R6C5", "label": { "de": "Test-Driven Development (TDD)" }, "class": "light-blue", 
      "tooltip": { "de": "Tests werden vor dem Code geschrieben (Rot-Grün-Refactor). Führt zu besserem Design und hoher Testbarkeit." },
      "acceptanceCriteria": ["100% TDD bei neuen Feature-Branches", "50% weniger Post-Release-Bugs", "100% Testfehler vor Merge behoben", "<10% flaky Tests"]
    },

    // --- Build Practices ---
    { 
      "id": "R7C2", "label": { "de": "Standardisierter Build-Prozess" }, "class": "light-blue", "isRoot": true, 
      "tooltip": { "de": "Wiederholbare Schritte zur Transformation von Code in Artefakte. Basis für CI. Sollte mit einem Befehl ausführbar sein." },
      "acceptanceCriteria": ["100% der Repos erzeugen versionierte Artefakte", "Build lokal & CI mit einem Befehl", "CI-Build-Success > 95%", "Automatische Unit/Smoke-Tests"]
    },
    { 
      "id": "R7C3", "label": { "de": "Automatisierter Build (Geplant > 1 Tag)" }, "class": "light-blue", 
      "tooltip": { "de": "Regelmäßige, zeitgesteuerte Builds (z.B. Nightly) validieren den Code auch ohne manuelle Trigger. Vorstufe zu CI." },
      "acceptanceCriteria": ["100% kritische Services haben tägliche Builds", "95% Erfolgsquote für geplante Builds", "Alle Artefakte versioniert & gespeichert", "90% der Build-Fehler vor nächstem Zyklus gelöst"]
    },
    { 
      "id": "R8C3", "label": { "de": "Dedizierter Build-Server" }, "class": "light-blue", 
      "tooltip": { "de": "Zentrale Infrastruktur für Builds, unabhängig von Entwicklerrechnern. Sichert Konsistenz und „Works on my machine“-Probleme ab." },
      "acceptanceCriteria": ["100% der Builds laufen über zentralen Server", "Integration mit SCM & Pipelines", "Setup-Zeit neuer Projekte -50%", "Notifications bei Fehlern"]
    },
    { 
      "id": "R9C3", "label": { "de": "Tägliche Check-ins" }, "class": "light-blue", 
      "tooltip": { "de": "Entwickler checken Code mind. einmal täglich ein. Reduziert Merge-Konflikte und ermöglicht frühes Feedback." },
      "acceptanceCriteria": ["85% der Entwickler committen täglich", "100% Commits CI-validiert", "40% weniger Merge-Konflikte", "Daily Dashboards sichtbar"]
    },
    { 
      "id": "R7C4", "label": { "de": "Schneller Testrun beim Build" }, "class": "light-blue", 
      "tooltip": { "de": "Sofortiges Feedback durch schnelle Tests im Build. Broken Builds haben höchste Priorität für das Team." },
      "acceptanceCriteria": ["Fehlerbehebungszeit um 50% reduziert", "90% Builds bestehen Fast-Test", "Build-Dauer um 20% reduziert"]
    },
    { 
      "id": "R7C5", "label": { "de": "Build Once, Deploy Many" }, "class": "light-blue", 
      "tooltip": { "de": "Einmal erstelltes Artefakt wird unverändert durch alle Umgebungen (Dev, Test, Prod) deployed. Sichert Konsistenz." },
      "acceptanceCriteria": ["100% Deployments nutzen promoted CI-Artefakt", "Keine Post-Build-Anpassungen", "100% Traceability Artefakt-zu-Commit"]
    },
    { 
      "id": "R8C5", "label": { "de": "Rückwärtskompatible Schnittstellen" }, "class": "light-blue", 
      "tooltip": { "de": "Neue Versionen brechen keine bestehenden Consumer. Ermöglicht entkoppelte Deployments und Zero-Downtime." },
      "acceptanceCriteria": ["100% öffentliche APIs versioniert/getestet", "90% weniger Breaking Changes in Prod", "Automatisierte Contract Tests in 100% Pipelines", "Deprecation-Guides vorhanden"]
    },
    { 
      "id": "R8C6", "label": { "de": "Build Artifact Repository" }, "class": "light-blue", 
      "tooltip": { "de": "Zentraler Speicher für versionierte Artefakte (Nexus, Artifactory). Single Source of Truth für Deployments." },
      "acceptanceCriteria": ["100% Builds erzeugen versioniertes Artefakt", "Repo in 100% Deployments integriert", "50% weniger Deployment-Fehler durch Inkonsistenz"]
    },
    { 
      "id": "R7C7", "label": { "de": "Build on Commit" }, "class": "light-blue", 
      "tooltip": { "de": "Builds starten automatisch bei jedem SCM-Event (Push, Merge, PR). Echtzeit-Validierung." },
      "acceptanceCriteria": ["100% PR/Mainline triggern Builds", "Feedback < 10 Min", "CI blockiert Merge bei Fehler", "95% Nutzung von SCM-Triggern"]
    },
    { 
      "id": "R8C7", "label": { "de": "Performance Monitoring in CI/CD" }, "class": "yellow", 
      "tooltip": { "de": "Integration von Performance-Metriken (Build-Zeit, Test-Durchsatz) in die Pipeline. Früherkennung von Degradation." },
      "acceptanceCriteria": ["Mind. 5 Performance-Metriken definiert", "Auto-Fail bei Schwellwertverletzung", "Trends visualisiert", "Pipeline-Laufzeit -25%"]
    },
    { 
      "id": "R9C7", "label": { "de": "Advanced Configuration Management" }, "class": "yellow", 
      "tooltip": { "de": "Konfiguration zentral verwaltet, versioniert (CaC) und dynamisch bereitgestellt. Trennung von Code und Config." },
      "acceptanceCriteria": ["100% Services externalisieren Config", "Zentrales Config-System im Einsatz", "90% Änderungen versioniert", "<10 Min Rollback bei Config-Fehler"]
    },
    { 
      "id": "R7C8", "label": { "de": "Continuous Integration (CI)" }, "class": "light-blue", 
      "tooltip": { "de": "Jede Änderung wird sofort integriert, gebaut und getestet. Basis für DevOps." },
      "acceptanceCriteria": ["100% Codeänderungen durch CI-Pipelines", "Build-Zeit <= 10 Min", "95% First-Run-Success", "100% Teams erhalten Feedback < 1 Min"]
    },

    // --- Deployment Practices ---
    { 
      "id": "R10C2", "label": { "de": "Automatisierte Bereitstellung statischer Testdaten" }, "class": "light-blue", "isRoot": true, 
      "tooltip": { "de": "Automatisches Klonen und Anonymisieren von Produktionsdaten für Testumgebungen." },
      "acceptanceCriteria": ["90% Testumgebungen mit auto. Data Refresh", "100% Compliance (Anonymisierung)", "50% weniger manueller Aufwand"]
    },
    { 
      "id": "R10C3", "label": { "de": "Automatisierter Post-Deployment Smoke Test" }, "class": "light-blue", 
      "tooltip": { "de": "Minimalistische Testsuite direkt nach Deployment, um grundlegende Funktion zu prüfen." },
      "acceptanceCriteria": ["90% Umgebungen mit Smoke Tests", "-50% Post-Deployment Incidents", "Laufzeit < 5 Min", "Reaktionszeit < 1h"]
    },
    { 
      "id": "R12C3", "label": { "de": "Automatisiertes Datenbank-Deployment" }, "class": "light-blue", 
      "tooltip": { "de": "Schemaänderungen als versionierte Artefakte (Code) gemeinsam mit App deployen." },
      "acceptanceCriteria": ["100% Schemaänderungen über Pipelines", "Migrationen mit Rollback-Option", "50% weniger DB-Fehler bei Deployment"]
    },
    { 
      "id": "R10C6", "label": { "de": "Automatisiertes Rollback" }, "class": "light-blue", 
      "tooltip": { "de": "Fähigkeit, bei Fehlern automatisch auf die letzte stabile Version zurückzusetzen." },
      "acceptanceCriteria": ["Rollback-Automatisierung in Staging/Prod", "Rollback < 2 Min", "100% Validierung nach Rollback", "MTTR -50%"]
    },
    { 
      "id": "R12C6", "label": { "de": "Standardisierte Deployments in alle Pre-UAT-Umgebungen" }, "class": "light-blue", 
      "tooltip": { "de": "Einheitliche Deployment-Logik für alle Testumgebungen. Erhöht Vorhersagbarkeit." },
      "acceptanceCriteria": ["100% Pre-UAT erhalten identisches Artefakt", "Einheitliche Skripte/IaC", "Smoke Tests integriert", "50% weniger Umgebungsfehler"]
    },
    { 
      "id": "R12C7", "label": { "de": "Standardisierte Deployments in alle Umgebungen" }, "class": "light-blue", 
      "tooltip": { "de": "Konsistente Prozesse von Dev bis Prod. Was im Test funktioniert, funktioniert in Prod." },
      "acceptanceCriteria": ["100% Services nutzen gleiches Template", "Keine manuellen Schritte", "95% Erfolgsrate", "Zentrale Sichtbarkeit"]
    },
    { 
      "id": "R10C7", "label": { "de": "Self-Service-Deployments in Integrationsumgebungen" }, "class": "light-blue", 
      "tooltip": { "de": "Entwickler können Deployments selbstständig auslösen." },
      "acceptanceCriteria": ["100% der Teams können deployen", "Zero Ticket Wartezeit"]
    },
    { 
      "id": "R12C8", "label": { "de": "Auto-Deploy in Integration nach Check-In" }, "class": "light-blue", 
      "tooltip": { "de": "Code-Änderungen werden nach Quality Gate automatisch in Integration deployed." },
      "acceptanceCriteria": ["Auto-Deploy bei allen Kernservices", "100% Builds bestehen Quality Gate", "Commit-to-Deploy < 30 Min", ">99.5% Verfügbarkeit"]
    },
    { 
      "id": "R10C8", "label": { "de": "Self-Service-Deployments in UAT" }, "class": "light-blue", 
      "tooltip": { "de": "Teams deployen eigenständig nach UAT zur Validierung durch Fachbereich." },
      "acceptanceCriteria": ["100% Teams ohne Release-Freigabe nach UAT", "90% Sanity-Passrate", "Lead Time -60%", "Rollback verfügbar"]
    },
    { 
      "id": "R10C9", "label": { "de": "Self-Service-Deployments in Production" }, "class": "light-blue", 
      "tooltip": { "de": "Autorisierte Teams deployen selbstständig in Prod, abgesichert durch Automatisierung." },
      "acceptanceCriteria": ["100% Releases via Self-Service/Pipeline", "Rollback < 10 Min", "<1% Incidents durch Deployment", "90% APM-überwacht"]
    },
    { 
      "id": "R12C9", "label": { "de": "Auto-Deploy in UAT bei Check-in" }, "class": "light-blue", 
      "tooltip": { "de": "Automatisches Deployment in UAT nach erfolgreichem Gate." },
      "acceptanceCriteria": ["100% UAT-Deploys automatisiert nach Gate", "95% Business-Cases abgedeckt", "0 manuelle Deploys", "90% Stakeholder-Zufriedenheit"]
    },
    { 
      "id": "R11C10", "label": { "de": "Continuous Delivery" }, "class": "light-blue", 
      "tooltip": { "de": "Jede Änderung ist potenziell deploybar. Ständiger Fluss in die Produktion." },
      "acceptanceCriteria": ["Automatische Promotion UAT->Prod", ">=3 Prod-Deploys/Woche", "Fehlerrate <5%", "MTTR < 1h"]
    },

    // --- Test Automation ---
    { 
      "id": "R13C2", "label": { "de": "Automatisiertes funktionales Testen in Anwendungsdomänen" }, "class": "light-blue", "isRoot": true, 
      "tooltip": { "de": "Skriptbasierte Tests für geschäftskritische Workflows (z.B. mit Selenium, Tosca)." },
      "acceptanceCriteria": ["80% kritische Testfälle automatisiert", "50% weniger manuelle Regression", "100% CI-Integration", "75% Fehler durch Auto-Tests gefunden"]
    },
    { 
      "id": "R13C4", "label": { "de": "Automatisierte funktionale Sanity-Regression in AT" }, "class": "light-blue", 
      "tooltip": { "de": "Leichtgewichtige Suite nach Deployment in Akzeptanzumgebung." },
      "acceptanceCriteria": ["100% Ausführung bei AT-Deployment", "-40% Fehlertickets", "Laufzeit < 20 Min", "Flaky-Rate < 5%"]
    },
    { 
      "id": "R15C4", "label": { "de": "Orchestrierte Akzeptanztests" }, "class": "light-blue", 
      "tooltip": { "de": "Tests über mehrere Anwendungen hinweg in orchestrierten Umgebungen." },
      "acceptanceCriteria": ["70% übergreifende Workflows automatisiert", "95% Passrate in Integration", "-60% manueller Aufwand"]
    },
    { 
      "id": "R13C5", "label": { "de": "Automatisierte Testdatenbereitstellung" }, "class": "light-blue", 
      "tooltip": { "de": "Systematische Erstellung und Pflege von Testdaten für integrierte Umgebungen." },
      "acceptanceCriteria": ["80% Szenarien mit Datenpipelines", "95% Sync-Genauigkeit", "70% weniger manueller Datenaufwand"]
    },
    { 
      "id": "R15C5", "label": { "de": "Automatisierte Sanity Regression im Integrationstest" }, "class": "yellow", 
      "tooltip": { "de": "Validierung der Kernfunktionalität in integrierten Umgebungen." },
      "acceptanceCriteria": ["90% kritische Integrationsfälle automatisiert", "-70% manueller Aufwand", "95% Erfolgsquote"]
    },
    { 
      "id": "R15C6", "label": { "de": "Automatisiertes Progressionstesting in Pre-UAT" }, "class": "light-blue", 
      "tooltip": { "de": "Validierung neuer Features in Pre-UAT vor formeller Abnahme." },
      "acceptanceCriteria": ["80% Progression automatisiert", "90% Abdeckung neuer Funktionen", "-60% manuelle Testzeit"]
    },
    { 
      "id": "R13C6", "label": { "de": "Automatisiertes Last- und Stresstesting" }, "class": "light-blue", 
      "tooltip": { "de": "Validierung von Performance und Stabilität unter Last." },
      "acceptanceCriteria": ["Lasttests für alle Hauptprozesse", "-20% Antwortzeiten", "90% Engpässe behoben"]
    },
    { 
      "id": "R14C6", "label": { "de": "Automatisiertes Security Testing" }, "class": "light-blue", 
      "tooltip": { "de": "Integration von SAST/DAST in die Pipeline." },
      "acceptanceCriteria": ["Security Scans in 100% CI/CD", "-30% Erkennungszeit", "90% Schwachstellen in 2 Wochen behoben"]
    },
    { 
      "id": "R15C7", "label": { "de": "Automatisiertes Accessibility Testing" }, "class": "light-blue", 
      "tooltip": { "de": "Prüfung auf Barrierefreiheit (WCAG) mittels Tools." },
      "acceptanceCriteria": ["Integration in 100% UI-Pipelines", "-80% kritische Verstösse", "95% WCAG 2.1 Konformität"]
    },
    { 
      "id": "R14C7", "label": { "de": "Self-Service Synthetic Test Data Deployments" }, "class": "light-blue", 
      "tooltip": { "de": "Teams generieren synthetische Daten selbstständig." },
      "acceptanceCriteria": ["80% Umgebungen unterstützen Self-Service", "90% Nutzung", "-70% Provisioning-Zeit"]
    },
    { 
      "id": "R13C8", "label": { "de": "Automatisierte Akzeptanztests in Integration" }, "class": "light-blue", 
      "tooltip": { "de": "Validierung von Akzeptanzkriterien in integrierter Umgebung." },
      "acceptanceCriteria": ["90% Szenarien automatisiert", "95% Genauigkeit", "-70% manueller Aufwand"]
    },
    { 
      "id": "R14C8", "label": { "de": "Automatisiertes Progressionstesten in UAT" }, "class": "light-blue", 
      "tooltip": { "de": "Validierung neuer Features direkt in UAT." },
      "acceptanceCriteria": ["80% automatisiert", "90% Abdeckung kritischer Workflows", "-75% manueller Aufwand"]
    },
    { 
      "id": "R15C8", "label": { "de": "Automatisiertes SVT (integriert)" }, "class": "light-blue", 
      "tooltip": { "de": "Systemverifikationstests des Gesamtsystems." },
      "acceptanceCriteria": ["90% systemweite Workflows automatisiert", "95% Genauigkeit Defekterkennung", "-70% manueller Aufwand"]
    },
    { 
      "id": "R14C9", "label": { "de": "Automatisiertes Abnahmetesten in UAT" }, "class": "light-blue", 
      "tooltip": { "de": "Nachweis der Erfüllung von Business-Kriterien in UAT." },
      "acceptanceCriteria": ["90% UAT-Szenarien automatisiert", "95% Testabdeckung", "-75% manueller Aufwand"]
    },
    { 
      "id": "R14C10", "label": { "de": "AI-Testautomatisierung" }, "class": "light-blue", 
      "tooltip": { "de": "Einsatz von AI/ML für Testdesign, Wartung und Analyse." },
      "acceptanceCriteria": ["95% Regression mit KI", "80% weniger Wartung (Self-Healing)", "90% Vorhersagegenauigkeit"]
    },

    // --- Virtualization ---
    { 
      "id": "R16C2", "label": { "de": "Virtuelle Services / Smart Stubs" }, "class": "light-blue", "isRoot": true, 
      "tooltip": { "de": "Simulation realer Services, um unabhängig zu testen." },
      "acceptanceCriteria": ["80% kritische Services virtualisiert", "Reduktion Abhängigkeiten um 90%", "100% Testkonsistenz"]
    },
    { 
      "id": "R16C3", "label": { "de": "Automatisierte Infrastrukturbereitstellung" }, "class": "light-blue", 
      "tooltip": { "de": "Aufbau virtualisierter Umgebungen mittels IaC." },
      "acceptanceCriteria": ["90% Umgebungen automatisiert", "-80% manueller Aufwand", "100% Konsistenz"]
    },
    { 
      "id": "R17C3", "label": { "de": "Strategischer Einsatz virtueller Services" }, "class": "light-blue", "isRoot": true, 
      "tooltip": { "de": "Strukturierter Ansatz zur Servicevirtualisierung." },
      "acceptanceCriteria": ["Ziele dokumentiert", "80% Services virtualisiert", "90% Integration in Dev/Test"]
    },
    { 
      "id": "R17C4", "label": { "de": "Self-Service Virtual Services" }, "class": "light-blue", "isRoot": true, 
      "tooltip": { "de": "Teams erstellen virtuelle Services selbstständig." },
      "acceptanceCriteria": ["Portal live", "80% Nutzer eigenständig", "-70% Provisionierungszeit"]
    },
    { 
      "id": "R16C4", "label": { "de": "Automatisierte Middleware-Provisionierung" }, "class": "light-blue", 
      "tooltip": { "de": "Bereitstellung von Middleware (DBs, Queues) in virt. Umgebungen." },
      "acceptanceCriteria": ["90% Middleware automatisiert", "-80% Zeitaufwand", "100% Reproduzierbarkeit"]
    },
    { 
      "id": "R16C7", "label": { "de": "Automatisierte Testumgebungs-Bereitstellung" }, "class": "light-blue", 
      "tooltip": { "de": "Vollständige Testumgebungen auf Knopfdruck." },
      "acceptanceCriteria": ["90% Umgebungen automatisiert", "100% Konsistenz", "-80% Zeitaufwand"]
    },
    { 
      "id": "R17C7", "label": { "de": "Virtuelle Umgebungen in CI" }, "class": "yellow",
      "tooltip": { "de": "Integration von virtualisierten Umgebungen in die Continuous Integration Pipeline." },
      "acceptanceCriteria": ["100% CI-Runs nutzen virtuelle Umgebungen", "Setup-Zeit < 5 Min"]
    },
    { 
      "id": "R16C8", "label": { "de": "Self-Service Testumgebungen für Einzelanwendungen" }, "class": "light-blue", 
      "tooltip": { "de": "Entwickler erstellen isolierte Umgebungen selbst." },
      "acceptanceCriteria": ["90% Teams eigenständig", "-80% Einrichtungszeit", "100% Kompatibilität"]
    },
    { 
      "id": "R18C7", "label": { "de": "Performance-Virtualisierung" }, "class": "yellow",
      "tooltip": { "de": "Nutzung von Service-Virtualisierung für Performance-Tests." },
      "acceptanceCriteria": ["Latenz-Simulation konfigurierbar", "Lasttests gegen virtuelle Services möglich"]
    },
    { 
      "id": "R18C8", "label": { "de": "Virtuelle Services / Smart Stubs (Fortgeschritten)" }, "class": "yellow", 
      "tooltip": { "de": "Hochgradig konfigurierbare Simulationen in CI/CD." },
      "acceptanceCriteria": ["90% Abhängigkeiten virtualisiert", "100% CI-Integration", "80% weniger Testabbrüche"]
    },
    { 
      "id": "R16C9", "label": { "de": "Automatisierte Bereitstellung integrierter Testumgebungen" }, "class": "light-blue", 
      "tooltip": { "de": "Komplexe Systemlandschaften automatisiert aufbauen." },
      "acceptanceCriteria": ["90% Integrationsumgebungen automatisiert", "95% Konsistenz", "-80% manueller Aufwand"]
    },

    // --- Manual Testing ---
    { 
      "id": "R19C2", "label": { "de": "Manuelle Regression mit historischer Abdeckung" }, "class": "light-blue", "isRoot": true, 
      "tooltip": { "de": "Gezieltes Nachtesten basierend auf Änderungshistorie und Erfahrung." },
      "acceptanceCriteria": ["90% kritische Fälle identifiziert", "95% Fehlererkennung", "-50% redundante Tests"]
    },
    { 
      "id": "R19C3", "label": { "de": "Exploratives Testen in frühen Phasen" }, "class": "light-blue", 
      "tooltip": { "de": "Intuitives Testen ohne Skript zur frühen Risikoerkennung." },
      "acceptanceCriteria": ["90% neue Features explorativ getestet", "80% kritische Usability-Probleme gefunden", "Ergebnisse zu 100% geteilt"]
    },
    { 
      "id": "R20C3", "label": { "de": "Manuelle Regression mit gesteuerter Abdeckung" }, "class": "light-blue", 
      "tooltip": { "de": "Systematische Auswahl von Testfällen basierend auf Risiko." },
      "acceptanceCriteria": ["-60% redundante Tests", "90% Abdeckung Hochrisiko", "95% kritische Defekte gefunden"]
    },
    { 
      "id": "R19C4", "label": { "de": "Definition synthetischer Daten für Progression" }, "class": "light-blue", 
      "tooltip": { "de": "Erstellung künstlicher Daten für realistische Tests ohne Datenschutzprobleme." },
      "acceptanceCriteria": ["80% kritische Szenarien abgedeckt", "95% Datenqualität", "-70% Abhängigkeit von Echtdaten"]
    },
    { 
      "id": "R20C4", "label": { "de": "Hybrid Testing auf vorläufigen Szenarien" }, "class": "light-blue", 
      "tooltip": { "de": "Kombination aus Skript und Exploration bei unklaren Anforderungen." },
      "acceptanceCriteria": ["90% vorläufige Features abgedeckt", "85% Edge Cases gefunden", "100% Stakeholder eingebunden"]
    },
    { 
      "id": "R21C5", "label": { "de": "Qualitätsreviews von Regressionstest-Sets" }, "class": "light-blue", 
      "tooltip": { "de": "Quality Gates und Reviews zur Sicherung der Testqualität." },
      "acceptanceCriteria": ["Reviews an 90% der Meilensteine", "80% Empfehlungen umgesetzt", "-30% nachgelagerte Fehler"]
    },
    { 
      "id": "R20C6", "label": { "de": "Kontextgetriebenes Testen" }, "class": "light-blue", 
      "tooltip": { "de": "Anpassung der Teststrategie an Projektkontext." },
      "acceptanceCriteria": ["80% Stakeholderzufriedenheit", "40% weniger übersehene Fehler", "+30% explorative Abdeckung"]
    },
    { 
      "id": "R19C6", "label": { "de": "Low-Code / KI-unterstütztes manuelles Testen" }, "class": "light-blue", 
      "tooltip": { "de": "Einsatz von KI/Low-Code für effizientere manuelle Tests." },
      "acceptanceCriteria": ["60% repetitive Tests automatisiert", "-50% Zeit für Loganalyse", "75% Defektvorhersage"]
    },
    { 
      "id": "R19C7", "label": { "de": "UX-Richtlinien & Inklusivität" }, "class": "light-blue", 
      "tooltip": { "de": "Berücksichtigung von Usability und Barrierefreiheit." },
      "acceptanceCriteria": ["90% WCAG 2.1 Konformität", "+25% Nutzerzufriedenheit", "-30% Usability-Fehler"]
    },
    { 
      "id": "R21C9", "label": { "de": "Umfassendes Quality Engineering" }, "class": "light-blue", 
      "tooltip": { "de": "Qualität als ganzheitlicher Ansatz über den gesamten Lifecycle." },
      "acceptanceCriteria": ["95% fehlerfreie Releases", "-40% Testdauer", "+20% Kundenzufriedenheit"]
    },
    { 
      "id": "R20C9", "label": { "de": "Sprint Testing in agilen Projekten" }, "class": "light-blue", 
      "tooltip": { "de": "Testen innerhalb des Sprints als integrale Aktivität." },
      "acceptanceCriteria": ["95% Testabdeckung der Sprint-Stories", "-40% Fehlerbehebungszeit", "60% Stories automatisiert"]
    },

    // --- Test Management ---
    { 
      "id": "R22C2", "label": { "de": "Etablierte Metriken für Einzelprozesse" }, "class": "light-blue", "isRoot": true, 
      "tooltip": { "de": "Messung von Leistung und Fortschritt durch Kennzahlen." },
      "acceptanceCriteria": ["90% Einhaltung Testzeitpläne", "20% Verbesserung Fehlererkennung", "25% Reduktion Behebungszeit"]
    },
    { 
      "id": "R22C3", "label": { "de": "Regelmäßige Qualitätsreviews" }, "class": "light-blue", 
      "tooltip": { "de": "Systematische Bewertung von Testaktivitäten und Ergebnissen." },
      "acceptanceCriteria": ["Reviews an 90% der Meilensteine", "80% Empfehlungen umgesetzt", "-30% nachgelagerte Fehler"]
    },
    { 
      "id": "R23C3", "label": { "de": "Testplanung & Steuerung" }, "class": "light-blue", 
      "tooltip": { "de": "Strukturierte Definition und Überwachung von Testzielen." },
      "acceptanceCriteria": ["100% geplante Tests fristgerecht", "-25% Planabweichungen", "+20% Stakeholder-Zufriedenheit"]
    },
    { 
      "id": "R23C4", "label": { "de": "Planung basierend auf Impact-, Risiko- Analyse" }, "class": "light-blue", 
      "tooltip": { "de": "Priorisierung von Tests anhand von Risiko und Änderungsanalyse." },
      "acceptanceCriteria": ["95% Testabdeckung Hochrisiko", "-40% kritische Fehler", "+20% Transparenz"]
    },
    { 
      "id": "R22C5", "label": { "de": "Traceability & Information Transparency" }, "class": "light-blue", 
      "tooltip": { "de": "Lückenlose Verknüpfung von Anforderungen, Tests und Defekten." },
      "acceptanceCriteria": ["100% Traceability", "+30% Stakeholder-Zufriedenheit", "-20% Defektlösungsdauer"]
    },
    { 
      "id": "R23C6", "label": { "de": "Agile Testplanung" }, "class": "yellow", 
      "tooltip": { "de": "Iterative Planung im Einklang mit Sprints." },
      "acceptanceCriteria": ["90% Testabdeckung pro Story", "70% Regression automatisiert", "-30% Fehlerbehebungszeit"]
    },
    { 
      "id": "R22C7", "label": { "de": "Automated Reports Are Cross-Soiled" }, "class": "light-blue", 
      "tooltip": { "de": "Konsolidierte Berichte aus verschiedenen Quellen." },
      "acceptanceCriteria": ["100% Quellen integriert", "-50% Reporting-Zeit", "+30% Transparenz"]
    },
    { 
      "id": "R22C8", "label": { "de": "Real-Time Graphs and Reports" }, "class": "light-blue", 
      "tooltip": { "de": "Echtzeit-Dashboards für Qualitätsmetriken." },
      "acceptanceCriteria": ["100% Metriken in Echtzeit", "30% schnellere Fehlererkennung", "+25% Zufriedenheit"]
    },
    { 
      "id": "R22C9", "label": { "de": "Self-Service Reports and Dashboards" }, "class": "light-blue", 
      "tooltip": { "de": "Stakeholder erstellen und nutzen Reports selbstständig." },
      "acceptanceCriteria": ["80% Stakeholder nutzen Self-Service", "-50% manuelle Reports", "+40% Nutzung"]
    },
    { 
      "id": "R21C7", "label": { "de": "Prinzipien für Produkt- und Projektqualitätsreviews" }, "class": "light-blue", 
      "tooltip": { "de": "Standardisierte Kriterien für Reviews von Qualität in Projekten." },
      "acceptanceCriteria": ["95% Projekte folgen Zeitplänen", "30% weniger kritische Fehler", "100% Qualitätslücken adressiert"]
    }
  ],
  "arrows": [
    { "from": "R1C3", "to": "R1C5" }, { "from": "R1C2", "to": "R2C4" }, { "from": "R1C5", "to": "R1C6" }, { "from": "R1C6", "to": "R1C7" }, { "from": "R1C7", "to": "R1C8" }, { "from": "R1C2", "to": "R2C3" }, { "from": "R1C2", "to": "R3C3" }, { "from": "R3C3", "to": "R3C4" }, { "from": "R2C3", "to": "R1C5" }, { "from": "R2C4", "to": "R2C5" }, { "from": "R3C4", "to": "R3C5" }, { "from": "R1C5", "to": "R7C7" }, { "from": "R3C5", "to": "R7C7" }, { "from": "R4C2", "to": "R4C3" }, { "from": "R4C3", "to": "R4C4" }, { "from": "R4C4", "to": "R4C5" }, { "from": "R4C2", "to": "R5C3" }, { "from": "R4C2", "to": "R6C3" }, { "from": "R6C3", "to": "R7C4" }, { "from": "R5C3", "to": "R7C4" }, { "from": "R7C2", "to": "R7C3" }, { "from": "R7C3", "to": "R7C4" }, { "from": "R7C4", "to": "R7C5" }, { "from": "R7C5", "to": "R7C7" }, { "from": "R7C7", "to": "R7C8" }, { "from": "R7C2", "to": "R8C3" }, { "from": "R7C2", "to": "R9C3" }, { "from": "R7C5", "to": "R8C5" }, { "from": "R7C4", "to": "R8C5" }, { "from": "R7C7", "to": "R10C8" }, { "from": "R7C5", "to": "R8C6" }, { "from": "R8C3", "to": "R7C4" }, { "from": "R8C6", "to": "R7C7" }, { "from": "R8C6", "to": "R8C7" }, { "from": "R8C5", "to": "R10C6" }, { "from": "R10C6", "to": "R10C7" }, { "from": "R10C6", "to": "R7C8" }, { "from": "R10C7", "to": "R10C8" }, { "from": "R10C8", "to": "R10C9" }, { "from": "R10C9", "to": "R11C10" }, { "from": "R12C7", "to": "R12C8" }, { "from": "R12C8", "to": "R12C9" }, { "from": "R12C9", "to": "R11C10" }, { "from": "R10C2", "to": "R10C3" }, { "from": "R10C3", "to": "R10C6" }, { "from": "R12C6", "to": "R12C7" }, { "from": "R7C8", "to": "R10C8" }, { "from": "R10C7", "to": "R12C7" }, { "from": "R12C7", "to": "R10C8" }, { "from": "R10C2", "to": "R12C3" }, { "from": "R8C5", "to": "R12C6" }, { "from": "R10C8", "to": "R12C8" }, { "from": "R10C7", "to": "R12C8" }, { "from": "R12C3", "to": "R12C6" }, { "from": "R13C2", "to": "R13C4" }, { "from": "R13C4", "to": "R13C5" }, { "from": "R15C4", "to": "R15C6" }, { "from": "R13C5", "to": "R14C7" }, { "from": "R14C7", "to": "R13C8" }, { "from": "R14C6", "to": "R13C6" }, { "from": "R14C8", "to": "R14C9" }, { "from": "R14C9", "to": "R14C10" }, { "from": "R13C2", "to": "R15C4" }, { "from": "R13C2", "to": "R13C6" }, { "from": "R15C5", "to": "R15C8" }, { "from": "R16C2", "to": "R15C6" }, { "from": "R14C7", "to": "R14C8" }, { "from": "R14C8", "to": "R15C8" }, { "from": "R15C6", "to": "R14C8" }, { "from": "R13C8", "to": "R14C10" }, { "from": "R16C2", "to": "R16C3" }, { "from": "R16C3", "to": "R16C4" }, { "from": "R17C3", "to": "R17C4" }, { "from": "R16C4", "to": "R16C7" }, { "from": "R16C7", "to": "R16C8" }, { "from": "R16C8", "to": "R16C9" }, { "from": "R16C9", "to": "R14C10" }, { "from": "R16C2", "to": "R18C7" }, { "from": "R17C7", "to": "R18C8" }, { "from": "R18C7", "to": "R18C8" }, { "from": "R18C8", "to": "R12C9" }, { "from": "R17C4", "to": "R16C7" }, { "from": "R19C2", "to": "R19C3" }, { "from": "R19C6", "to": "R15C5" }, { "from": "R19C2", "to": "R21C5" }, { "from": "R19C2", "to": "R20C3" }, { "from": "R20C3", "to": "R20C4" }, { "from": "R13C4", "to": "R19C4" }, { "from": "R13C4", "to": "R20C4" }, { "from": "R20C4", "to": "R20C6" }, { "from": "R20C4", "to": "R19C6" }, { "from": "R20C6", "to": "R20C9" }, { "from": "R21C5", "to": "R21C7" }, { "from": "R21C7", "to": "R21C9" }, { "from": "R21C7", "to": "R19C7" }, { "from": "R19C7", "to": "R15C7" }, { "from": "R19C2", "to": "R23C3" }, { "from": "R20C9", "to": "R14C9" }, { "from": "R22C2", "to": "R22C3" }, { "from": "R22C3", "to": "R14C6" }, { "from": "R22C7", "to": "R22C8" }, { "from": "R22C5", "to": "R22C7" }, { "from": "R22C8", "to": "R22C9" }, { "from": "R22C3", "to": "R22C5" }, { "from": "R23C3", "to": "R23C4" }, { "from": "R22C9", "to": "R14C10" }, { "from": "R23C4", "to": "R23C6" },
    { "from": "R4C5", "to": "R6C5" }, { "from": "R6C5", "to": "R7C8" }, 
    { "from": "R8C6", "to": "R9C7" }, { "from": "R9C7", "to": "R12C7" },
    { "from": "R16C7", "to": "R17C7" }, { "from": "R17C7", "to": "R18C8" },
    { "from": "R13C6", "to": "R18C7" }, { "from": "R18C7", "to": "R18C8" },
    { "from": "R23C6", "to": "R20C9" }, { "from": "R15C8", "to": "R14C9" }
  ]
};
