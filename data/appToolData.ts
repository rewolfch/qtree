
export const rawConfig = {
  "grid": { "rows": 30, "cols": 10 },
  "lanes": [
    { 
      "id": "config-mgmt",
      "label": "Configuration Management", "startRow": 1, "endRow": 3, "targetCount": 12,
      "details": {
        "description": { 
            "de": "Configuration Management (CM) bildet das Fundament für stabile Softwareentwicklung. Es stellt sicher, dass alle Artefakte (Code, Configs, Dokumentation) versioniert, nachvollziehbar und wiederherstellbar sind.", 
            "en": "Configuration Management (CM) forms the foundation for stable software development. It ensures that all artifacts (code, configs, documentation) are versioned, traceable, and recoverable." 
        },
        "why": {
            "de": "Ohne solides CM gibt es keine Reproduzierbarkeit. 'It works on my machine' wird zum Dauerzustand, Rollbacks sind unmöglich und Compliance ist nicht erreichbar.",
            "en": "Without solid CM, there is no reproducibility. 'It works on my machine' becomes the norm, rollbacks are impossible, and compliance is unattainable."
        },
        "how": {
            "de": "Beginnen Sie mit der strikten Versionierung aller Assets in einem SCM (z.B. Git). Führen Sie eine klare Branching-Strategie ein und nutzen Sie Tags für Releases.",
            "en": "Start with strict versioning of all assets in an SCM (e.g., Git). Introduce a clear branching strategy and use tags for releases."
        },
        "resources": [
            { "label": "Git Branching Strategies", "url": "#" },
            { "label": "The Twelve-Factor App: Config", "url": "#" }
        ]
      }
    },
    { 
      "id": "unit-testing",
      "label": "Unit Testing", "startRow": 4, "endRow": 6, "targetCount": 6,
      "details": {
        "description": { 
            "de": "Unit Testing verifiziert die kleinste testbare Einheit einer Software. Es ist das Sicherheitsnetz, das Refactoring erst möglich macht und teure Fehler früh abfängt.", 
            "en": "Unit testing verifies the smallest testable unit of software. It is the safety net that makes refactoring possible and catches expensive bugs early." 
        },
        "why": {
            "de": "Fehler, die während der Entwicklung gefunden werden, kosten einen Bruchteil dessen, was sie in Produktion kosten. Unit Tests dokumentieren zudem das erwartete Verhalten des Codes.",
            "en": "Bugs found during development cost a fraction of what they cost in production. Unit tests also document the expected behavior of the code."
        },
        "how": {
            "de": "Wählen Sie ein Standard-Framework (z.B. Jest, JUnit). Integrieren Sie Tests in den Build-Prozess. Starten Sie nicht mit 100% Coverage, sondern testen Sie kritische Geschäftslogik.",
            "en": "Choose a standard framework (e.g., Jest, JUnit). Integrate tests into the build process. Don't start with 100% coverage, but test critical business logic."
        },
        "resources": []
      }
    },
    { 
      "id": "build-practices",
      "label": "Build Practices", "startRow": 7, "endRow": 9, "targetCount": 12,
      "details": {
        "description": { 
            "de": "Build Practices transformieren Quellcode zuverlässig und wiederholbar in deploybare Artefakte. Sie sind der Motor der Continuous Integration.", 
            "en": "Build practices transform source code reliably and repeatably into deployable artifacts. They are the engine of Continuous Integration." 
        },
        "why": {
            "de": "Lange, manuelle oder fragile Builds blockieren das gesamte Team. Ein automatisierter Build-Prozess ist Voraussetzung für schnelle Feedback-Zyklen.",
            "en": "Long, manual, or fragile builds block the entire team. An automated build process is a prerequisite for fast feedback cycles."
        },
        "how": {
            "de": "Automatisieren Sie den Build per Skript. Nutzen Sie einen CI-Server (z.B. Jenkins, GitHub Actions). Stellen Sie sicher, dass der Build isoliert und unabhängig von der lokalen Umgebung läuft.",
            "en": "Automate the build via script. Use a CI server (e.g., Jenkins, GitHub Actions). Ensure the build runs isolated and independent of the local environment."
        },
        "resources": []
      }
    },
    { 
      "id": "deployment",
      "label": "Deployment Practices", "startRow": 10, "endRow": 12, "targetCount": 12,
      "details": {
        "description": { 
            "de": "Deployment Practices regeln, wie Software sicher und effizient auf verschiedene Umgebungen (Test, Staging, Produktion) übertragen wird.", 
            "en": "Deployment practices govern how software is safely and efficiently transferred to different environments (Test, Staging, Production)." 
        },
        "why": {
            "de": "Manuelle Deployments sind fehleranfällig und langsam. Automatisierung reduziert das Risiko von Ausfällen ('Deployment Fear') und ermöglicht 'Deployment on Demand'.",
            "en": "Manual deployments are error-prone and slow. Automation reduces the risk of failures ('Deployment Fear') and enables 'Deployment on Demand'."
        },
        "how": {
            "de": "Trennen Sie Build und Deployment. Nutzen Sie die gleichen Artefakte für alle Umgebungen ('Build Once, Deploy Many'). Automatisieren Sie zuerst Deployments auf Testumgebungen.",
            "en": "Separate build and deployment. Use the same artifacts for all environments ('Build Once, Deploy Many'). Automate deployments to test environments first."
        },
        "resources": []
      }
    },
    { 
      "id": "test-automation",
      "label": "Test Automation", "startRow": 13, "endRow": 15, "targetCount": 16,
      "details": {
        "description": { 
            "de": "Test Automation umfasst alle Prüfungen jenseits von Unit Tests: Integration, API, UI und End-to-End Tests. Sie validiert das Zusammenspiel der Komponenten.", 
            "en": "Test automation includes all checks beyond unit tests: integration, API, UI, and end-to-end tests. It validates the interaction of components." 
        },
        "why": {
            "de": "Manuelle Regressionstests skalieren nicht. Je komplexer das System, desto mehr Zeit frisst das Testen ohne Automatisierung, was die Time-to-Market verlangsamt.",
            "en": "Manual regression tests do not scale. The more complex the system, the more time testing consumes without automation, slowing down time-to-market."
        },
        "how": {
            "de": "Folgen Sie der Testpyramide: Viele API/Integrationstests, wenige UI-Tests. Nutzen Sie stabile Selektoren für UI-Tests. Behandeln Sie Testcode wie Produktionscode.",
            "en": "Follow the test pyramid: Many API/integration tests, few UI tests. Use stable selectors for UI tests. Treat test code like production code."
        },
        "resources": []
      }
    },
    { 
      "id": "virtualization",
      "label": "Virtualisierung", "startRow": 16, "endRow": 18, "targetCount": 11,
      "details": {
        "description": { 
            "de": "Service Virtualisierung und Stubs simulieren abhängige Systeme (z.B. Mainframe, 3rd Party APIs), die für Tests nicht verfügbar oder zu teuer sind.", 
            "en": "Service virtualization and stubs simulate dependent systems (e.g., mainframe, 3rd party APIs) that are unavailable or too expensive for testing." 
        },
        "why": {
            "de": "Warten auf Testdaten oder Umgebungen ist Verschwendung. Virtualisierung ermöglicht frühes Testen ('Shift Left') und stabile Testergebnisse.",
            "en": "Waiting for test data or environments is waste. Virtualization enables early testing ('Shift Left') and stable test results."
        },
        "how": {
            "de": "Identifizieren Sie blockierende Abhängigkeiten. Erstellen Sie einfache Stubs (z.B. mit WireMock) für externe APIs. Erweitern Sie diese zu intelligenten Mocks bei Bedarf.",
            "en": "Identify blocking dependencies. Create simple stubs (e.g., with WireMock) for external APIs. Expand these into intelligent mocks as needed."
        },
        "resources": []
      }
    },
    { 
      "id": "manual-testing",
      "label": "Manual Testing", "startRow": 19, "endRow": 22, "targetCount": 12,
      "details": {
        "description": { 
            "de": "Manuelles Testen fokussiert sich auf explorative Ansätze, Usability und Szenarien, die menschliche Intuition erfordern. Es ergänzt die Automatisierung.", 
            "en": "Manual testing focuses on exploratory approaches, usability, and scenarios requiring human intuition. It complements automation." 
        },
        "why": {
            "de": "Automatisierung prüft auf bekannte Erwartungen. Menschen finden das 'Unbekannte Unbekannte'. UX und Design-Gefühl lassen sich schwer automatisieren.",
            "en": "Automation checks for known expectations. Humans find the 'unknown unknowns'. UX and design feel are hard to automate."
        },
        "how": {
            "de": "Verschieben Sie repetitive Checks in die Automatisierung. Nutzen Sie die freiwerdende Zeit für Exploratives Testen (Session-Based Testing).",
            "en": "Move repetitive checks to automation. Use the freed-up time for exploratory testing (Session-Based Testing)."
        },
        "resources": []
      }
    },
    { 
      "id": "test-mgmt",
      "label": "Test Management", "startRow": 23, "endRow": 25, "targetCount": 9,
      "details": {
        "description": { 
            "de": "Test Management schafft Transparenz und Steuerung. Es geht um Metriken, Reporting und die strategische Ausrichtung der Qualitätsmaßnahmen.", 
            "en": "Test management creates transparency and control. It's about metrics, reporting, and the strategic alignment of quality measures." 
        },
        "why": {
            "de": "Ohne Daten fliegt man blind. Gutes Management macht Qualität sichtbar und ermöglicht datengetriebene Entscheidungen statt Bauchgefühl.",
            "en": "Without data, you're flying blind. Good management makes quality visible and enables data-driven decisions instead of gut feeling."
        },
        "how": {
            "de": "Definieren Sie KPIs, die Verhalten positiv beeinflussen (z.B. Lead Time, Defect Escape Rate). Automatisieren Sie das Reporting in Dashboards.",
            "en": "Define KPIs that positively influence behavior (e.g., Lead Time, Defect Escape Rate). Automate reporting into dashboards."
        },
        "resources": []
      }
    }
  ],
  "cells": [
    // --- Config Management (Rows 1-3) ---
    { 
        "id": "R1C1", 
        "label": { "de": "Alle Artefakte versioniert & getaggt" }, 
        "class": "yellow", "isRoot": true, 
        "tooltip": { "de": "Grundlegende Nachverfolgbarkeit von Code, Konfiguration und Infrastruktur mit VCS. Alle Artefakte liegen im SCM." },
        "acceptanceCriteria": ["100 % aller CIs sind versioniert und getaggt", "90 % der Deployments werden automatisch getaggt", "30 % schnellere Rollbacks (MTTR)", "Audit-Compliance in produktiven Umgebungen"] 
    },
    { 
        "id": "R1C2", 
        "label": { "de": "Feature Toggles im Code" }, 
        "class": "blue",
        "tooltip": { "de": "Code-basierte Schalter zur Laufzeitsteuerung von Funktionen. Entkoppelt Deployment von Release." },
        "acceptanceCriteria": ["Alle neuen riskanten Features hinter Toggles", "Naming- & Doku-Standards eingeführt", "Reduktion der Hotfixes nach Releases um 30%", "80 % der Toggles werden innerhalb von 2 Sprints entfernt"]
    },
    { 
        "id": "R2C2", 
        "label": { "de": "Feature-Toggles im Quellcode-Repository (SCM-Based)" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Verwaltung von Toggles über Konfigurationsdateien im Git (GitOps-Ansatz). Zustand ergibt sich aus dem Commit." },
        "acceptanceCriteria": ["Struktur für Toggle-Dateien in Git definiert", "100 % neuer Toggles via Pull-Requests verwaltet", "Jeder Toggle-Statuswechsel wird via PR gemanaged", "Fehlkonfigurationen um 80 % reduziert"]
    },
    { 
        "id": "R3C2", 
        "label": { "de": "Toolgestützte Merges" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Einsatz von Tools zur Automatisierung von Merge-Vorgängen und Konfliktlösung. Integration in CI." },
        "acceptanceCriteria": ["100 % der PRs nutzen Merge-Approval-Automation", "70 % weniger manuelle Merge-Konflikte", "Merge-Queues in High-Traffic-Repos etabliert", "Security-Checks im Merge-Prozess eingebettet"]
    },
    { 
        "id": "R2C3", 
        "label": { "de": "Granularität auf Pull-/Merge-Request-Ebene" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Codeänderungen werden in kleine, atomare Einheiten aufgeteilt. Jeder Pull-Request hat einen klar abgegrenzten Zweck (z.B. <400 Zeilen). Das senkt Integrationsrisiken und erhöht die Review-Geschwindigkeit." },
        "acceptanceCriteria": ["90 % der PRs unter 400 LOC, nur eine Änderung", "100 % der PRs sind mit Ticket verknüpft", "40 % weniger Rollbacks durch Integrationsfehler", "25 % schnellere PR-Freigaben"]
    },
    { 
        "id": "R3C3", 
        "label": { "de": "Automatisierte Merges" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Automatisches Mergen validierter Änderungen in den Hauptbranch, sobald alle Checks grün sind." },
        "acceptanceCriteria": ["100 % der Repos mit CI-Checks & Approval sind auto-merge-fähig", "95 % der qualifizierten PRs werden automatisch gemerged", "50 % weniger Reverts", "Automatische Release Notes"]
    },
    { 
        "id": "R1C4", 
        "label": { "de": "Zentrale Toggle-Service-Schicht" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Auslagerung der Toggle-Logik in eine zentrale Plattform (z.B. LaunchDarkly). Echtzeitsteuerung ohne Redeploy." },
        "acceptanceCriteria": ["100 % der kritischen Toggles migriert", "Self-Service UI für QA & Product", "Toggle-Logging integriert", "75 % weniger Hotfixes wegen Fehlkonfiguration"]
    },
    { 
        "id": "R2C4", 
        "label": { "de": "Codegranularität auf Feature-Ebene" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Strukturierung des Codes in unabhängige Feature-Module. Ermöglicht isolierte Deployments und Rollbacks." },
        "acceptanceCriteria": ["100 % neuer Features in eigener Codeeinheit implementiert", "80 % Testabdeckung pro Feature", "60 % der Features unabhängig deploybar", "90 % weniger Rollbacks durch Feature-Verflechtung"]
    },
    { 
        "id": "R3C4", 
        "label": { "de": "Dynamische Merges" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Flexible Komposition von Softwarekomponenten zur Laufzeit oder Buildzeit, basierend auf Kontext." },
        "acceptanceCriteria": ["100 % der Staging-Umgebungen nutzen dynamische Overlays", "80 % weniger Pipeline-Varianten", "90 % weniger statisches Branching", "100 % der B2B-Module nutzen Runtime-Toggles"]
    },
    { 
        "id": "R1C5", 
        "label": { "de": "Zentrales Feature-Toggle-Framework" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Organisationsweites System für Toggle-Verwaltung, Governance und Auditierung." },
        "acceptanceCriteria": ["100 % der Teams migriert auf zentrale Plattform", "95 % aller Toggles haben vollständige Metadaten", "70 % weniger veraltete Toggles", "100 % der Toggles mit Metriken verknüpft"]
    },
    { 
        "id": "R1C6", 
        "label": { "de": "Centralized Feature Toggle Management" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Einheitliche Sichtbarkeit und Verwaltung aller Toggles über alle Services hinweg." },
        "acceptanceCriteria": ["100 % der Toggles katalogisiert", "Toggle-Format und Ownership durch CI-Linting erzwungen", "90 % Toggles mit Metadaten", "Sichtbarkeit aller Toggles im Dashboard"]
    },
    { 
        "id": "R1C7", 
        "label": { "de": "Progressive Exposure via Audience Targeting" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Schrittweise Freigabe von Features für spezifische Nutzersegmente zur Risikominimierung." },
        "acceptanceCriteria": ["100 % aller neuen Features nutzen Zielgruppenausspielung", "90 % kritische Probleme in Beta erkannt", "99.9 % Uptime während Rollout", "Feedback von >80 % der Betatester"]
    },

    // --- Unit Testing (Rows 4-6) ---
    { 
        "id": "R4C1", 
        "label": { "de": "Automatisiertes Unit-Test-Framework" }, 
        "class": "light-blue", "isRoot": true, 
        "tooltip": { "de": "Grundlegende Struktur zur Validierung kleinster Code-Einheiten. Basis für CI." },
        "acceptanceCriteria": ["Einheitliches Framework für alle Services gewählt", "50 % Testabdeckung auf neuem Code", "CI-Integration mit Tests < 10 Min", "20 % weniger Fehler in Produktion"]
    },
    { 
        "id": "R4C2", 
        "label": { "de": "Unit-Testabdeckung: 5–25 %" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Einstieg in breitere Testabdeckung. Fokus auf kritische Komponenten." },
        "acceptanceCriteria": ["25 % Abdeckung in den 5 meistgenutzten Modulen", "Coverage-Reports in allen PRs für kritische Services", "10+ Bugs vor Release entdeckt", "Ausführung in CI < 5 Min"]
    },
    { 
        "id": "R5C2", 
        "label": { "de": "Regressionstest-Suite für Unit-Tests" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Gezielte Sammlung von Tests zur Absicherung bestehender Funktionalität." },
        "acceptanceCriteria": ["Ausführung der Suite bei 100 % aller Pushes", "30 % weniger produktive Regressions-Bugs", "Vollständige Abdeckung aller Kern-Workflows", ">=95 % Erfolgsrate bei Fehlerdiagnose"]
    },
    { 
        "id": "R4C3", 
        "label": { "de": "Unit-Test-Abdeckung: 25–80 %" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Reife Qualitätssicherung. Validierung von Logikpfaden und Randfällen." },
        "acceptanceCriteria": [">= 80 % Testabdeckung für alle kritischen Workflows", "40 % weniger produktive Bugs", "90 % aller Code-Reviews prüfen auf Tests", "100 % Tests automatisiert via CI"]
    },
    { 
        "id": "R4C4", 
        "label": { "de": "Unit-Test-Abdeckung > 80 %" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Maximale Sicherheit durch fast vollständige Abdeckung. Ermöglicht sicheres Refactoring." },
        "acceptanceCriteria": [">= 85 % Unit-Test-Abdeckung für alle Kernmodule", "50 % weniger Produktivfehler durch ungetestete Logik", "100 % Regressionsabdeckung", "CI-Builds < 10 Min"]
    },
    { 
        "id": "R4C5", 
        "label": { "de": "Test-Driven Development (TDD)" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Tests werden vor dem Code geschrieben. Verbessert Design und Testbarkeit." },
        "acceptanceCriteria": ["100 % TDD bei neuen Feature-Branches", "50 % weniger Post-Release-Bugs", "100 % Testfehler vor Merge behoben", "<10 % flaky Tests"]
    },

    // --- Build Practices (Rows 7-9) ---
    { 
        "id": "R7C1", 
        "label": { "de": "Standardisierter Build-Prozess" }, 
        "class": "light-blue", "isRoot": true, 
        "tooltip": { "de": "Einheitliche Skripte zur Artefakterstellung. Basis für Automatisierung." },
        "acceptanceCriteria": ["100 % der Repos erzeugen versionierte Artefakte", "Build lokal & CI mit einem Befehl", "CI-Build-Success > 95 %", "Automatische Unit/Smoke-Tests"]
    },
    { 
        "id": "R7C2", 
        "label": { "de": "Automatisierter Build (Geplant > 1 Tag)" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Regelmäßige, zeitgesteuerte Builds zur Validierung (z.B. Nightly)." },
        "acceptanceCriteria": ["100 % kritische Services haben tägliche Builds", "95 % Erfolgsquote für geplante Builds", "Alle Artefakte versioniert & gespeichert", "90 % der Build-Fehler vor nächstem Zyklus gelöst"]
    },
    { 
        "id": "R8C2", 
        "label": { "de": "Dedizierter Build-Server" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Zentrale Build-Infrastruktur zur Sicherstellung der Konsistenz." },
        "acceptanceCriteria": ["100 % der Builds laufen über zentralen Server", "Integration mit SCM & Pipelines", "Setup-Zeit neuer Projekte -50 %", "Notifications bei Fehlern"]
    },
    { 
        "id": "R9C2", 
        "label": { "de": "Tägliche Code-Commits (Daily Check-Ins)" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Disziplinierte Praxis täglicher Integration zur Konfliktminimierung." },
        "acceptanceCriteria": ["85 % der Entwickler committen täglich", "100 % Commits CI-validiert", "40 % weniger Merge-Konflikte", "Daily Dashboards sichtbar"]
    },
    { 
        "id": "R7C3", 
        "label": { "de": "Schneller Testrun beim Build" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Sofortiges Feedback im Build-Prozess. Broken Builds haben Priorität." },
        "acceptanceCriteria": ["Fehlerbehebungszeit um 50 % reduziert", "90 % Builds bestehen Fast-Test", "Build-Dauer um 20 % reduziert"]
    },
    { 
        "id": "R7C4", 
        "label": { "de": "Build Once, Deploy Many" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Einmal erstelltes Artefakt wird durch alle Umgebungen deployed." },
        "acceptanceCriteria": ["100 % Deployments nutzen promoted CI-Artefakt", "Keine Post-Build-Anpassungen", "100 % Traceability Artefakt-zu-Commit"]
    },
    { 
        "id": "R8C4", 
        "label": { "de": "Rückwärtskompatible Schnittstellen" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Vermeidung von Breaking Changes für entkoppelte Deployments." },
        "acceptanceCriteria": ["100 % öffentliche APIs versioniert/getestet", "90 % weniger Breaking Changes in Prod", "Automatisierte Contract Tests in 100 % Pipelines", "Deprecation-Guides vorhanden"]
    },
    { 
        "id": "R7C5", 
        "label": { "de": "Build Artifact Repository" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Zentrale Verwaltung versionierter Artefakte." },
        "acceptanceCriteria": ["100 % Builds erzeugen versioniertes Artefakt", "Repo in 100 % Deployments integriert", "50 % weniger Deployment-Fehler durch Inkonsistenz"]
    },
    { 
        "id": "R7C6", 
        "label": { "de": "Build on Commit / Andere SCM-Trigger" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Ereignisgesteuerte Builds für sofortiges Feedback." },
        "acceptanceCriteria": ["100 % PR/Mainline triggern Builds", "Feedback < 10 Min", "CI blockiert Merge bei Fehler", "95 % Nutzung von SCM-Triggern"]
    },
    { 
        "id": "R8C6", 
        "label": { "de": "Performance Monitoring in CI/CD" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Integration von Performance-Metriken in die Pipeline." },
        "acceptanceCriteria": ["Mind. 5 Performance-Metriken definiert", "Auto-Fail bei Schwellwertverletzung", "Trends visualisiert", "Pipeline-Laufzeit -25 %"]
    },
    { 
        "id": "R9C6", 
        "label": { "de": "Advanced Configuration Management" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Zentrale, dynamische Konfigurationsverwaltung (CaC)." },
        "acceptanceCriteria": ["100 % Services externalisieren Config", "Zentrales Config-System im Einsatz", "90 % Änderungen versioniert", "<10 Min Rollback bei Config-Fehler"]
    },
    { 
        "id": "R7C7", 
        "label": { "de": "Continuous Integration (CI)" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Vollautomatisierte Integration und Validierung jeder Änderung." },
        "acceptanceCriteria": ["100 % Codeänderungen durch CI-Pipelines", "Build-Zeit <= 10 Min", "95 % First-Run-Success", "100 % Teams erhalten Feedback < 1 Min"]
    },

    // --- Deployment Practices (Rows 10-12) ---
    { 
        "id": "R10C1", 
        "label": { "de": "Automatisierte Bereitstellung statischer Testdaten" }, 
        "class": "light-blue", "isRoot": true, 
        "tooltip": { "de": "Automatisches Bereitstellen anonymisierter Produktionsdaten." },
        "acceptanceCriteria": ["90 % Testumgebungen mit auto. Data Refresh", "100 % Compliance (Anonymisierung)", "50 % weniger manueller Aufwand"]
    },
    { 
        "id": "R10C2", 
        "label": { "de": "Automatisierte Post-Deployment Smoke Tests" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Schnelle Prüfung der Basisfunktionalität nach Deployment." },
        "acceptanceCriteria": ["90 % Umgebungen mit Smoke Tests", "-50 % Post-Deployment Incidents", "Laufzeit < 5 Min", "Reaktionszeit < 1h"]
    },
    { 
        "id": "R12C2", 
        "label": { "de": "Automatisiertes Datenbank-Deployment" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Schemaänderungen automatisiert mit Code deployen." },
        "acceptanceCriteria": ["100 % Schemaänderungen über Pipelines", "Migrationen mit Rollback-Option", "50 % weniger DB-Fehler bei Deployment"]
    },
    { 
        "id": "R10C5", 
        "label": { "de": "Automatisiertes Rollback" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Automatische Rückkehr zur Vorversion bei Fehlern." },
        "acceptanceCriteria": ["Rollback-Automatisierung in Staging/Prod", "Rollback < 2 Min", "100 % Validierung nach Rollback", "MTTR -50 %"]
    },
    { 
        "id": "R12C5", 
        "label": { "de": "Standardisierte Deployments in alle Pre-UAT-Umgebungen" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Einheitliche Prozesse für nicht-produktive Umgebungen." },
        "acceptanceCriteria": ["100 % Pre-UAT erhalten identisches Artefakt", "Einheitliche Skripte/IaC", "Smoke Tests integriert", "50 % weniger Umgebungsfehler"]
    },
    { 
        "id": "R11C6", 
        "label": { "de": "Standardisierte Deployments in alle Umgebungen" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Konsistente Deployment-Logik bis zur Produktion." },
        "acceptanceCriteria": ["100 % Services nutzen gleiches Template", "Keine manuellen Schritte", "95 % Erfolgsrate", "Zentrale Sichtbarkeit"]
    },
    { 
        "id": "R11C7", 
        "label": { "de": "Self-Service Deployments in Integration" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Entwickler können Deployments in Integrationsumgebungen selbst auslösen." },
        "acceptanceCriteria": ["100 % Teams können deployen", "Zero Ticket Wartezeit", "Automatisierte Genehmigung"]
    },
    { 
        "id": "R10C7", 
        "label": { "de": "Auto-Deploy in Integrationsumgebungen nach Check-In" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Automatisches Deployment in Integration nach Quality Gate." },
        "acceptanceCriteria": ["Auto-Deploy bei allen Kernservices", "100 % Builds bestehen Quality Gate", "Commit-to-Deploy < 30 Min", ">99.5 % Verfügbarkeit"]
    },
    { 
        "id": "R12C7", 
        "label": { "de": "Self-Service Deployments in UAT" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Eigenständiges Deployen nach UAT durch Teams." },
        "acceptanceCriteria": ["100 % Teams ohne Release-Freigabe nach UAT", "90 % Sanity-Passrate", "Lead Time -60 %", "Rollback verfügbar"]
    },
    { 
        "id": "R10C8", 
        "label": { "de": "Self-Service Deployments in Production" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Autorisierte Teams deployen selbstständig nach Prod." },
        "acceptanceCriteria": ["100 % Releases via Self-Service/Pipeline", "Rollback < 10 Min", "<1 % Incidents durch Deployment", "90 % APM-überwacht"]
    },
    { 
        "id": "R12C8", 
        "label": { "de": "Auto-Deploy in UAT bei Check-in + UAT Quality Gate" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Vollautomatisches Deployment nach UAT bei Gate-Erfolg." },
        "acceptanceCriteria": ["100 % UAT-Deploys automatisiert nach Gate", "95 % Business-Cases abgedeckt", "0 manuelle Deploys", "90 % Stakeholder-Zufriedenheit"]
    },
    { 
        "id": "R11C9", 
        "label": { "de": "Continuous Delivery" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Jede Änderung ist potenziell deploybar." },
        "acceptanceCriteria": ["Automatische Promotion UAT->Prod", ">=3 Prod-Deploys/Woche", "Fehlerrate <5 %", "MTTR < 1h"]
    },

    // --- Test Automation (Rows 13-15) ---
    { 
        "id": "R13C1", 
        "label": { "de": "Automatisiertes funktionales Testen in Anwendungsdomänen" }, 
        "class": "light-blue", "isRoot": true, 
        "tooltip": { "de": "Automatisierung kritischer Workflows in spezifischen Domänen." },
        "acceptanceCriteria": ["80 % kritische Testfälle automatisiert", "50 % weniger manuelle Regression", "100 % CI-Integration", "75 % Fehler durch Auto-Tests gefunden"]
    },
    { 
        "id": "R13C2", 
        "label": { "de": "E2E Automatisiertes funktionales Testframework" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Framework für systemübergreifende End-to-End Tests." },
        "acceptanceCriteria": ["Framework in 2 Kernsystemen", "5 E2E Workflows automatisiert", "100 % CI-Integration", "90 % Testkonsistenz"]
    },
    { 
        "id": "R13C3", 
        "label": { "de": "Automatisierte funktionale Sanity-Regression in AT" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Schnelle Validierung der Basisfunktionen in Akzeptanzumgebung." },
        "acceptanceCriteria": ["100 % Ausführung bei AT-Deployment", "-40 % Fehlertickets", "Laufzeit < 20 Min", "Flaky-Rate < 5 %"]
    },
    { 
        "id": "R15C3", 
        "label": { "de": "Automatisierte Akzeptanztests (Multi-App)" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Orchestrierte Tests über mehrere Anwendungen hinweg." },
        "acceptanceCriteria": ["70 % übergreifende Workflows automatisiert", "95 % Passrate in Integration", "-60 % manueller Aufwand"]
    },
    { 
        "id": "R13C4", 
        "label": { "de": "Automatisierte Testdatenbereitstellung für integrierte Umgebungen" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Automatische Bereitstellung abgestimmter Testdaten." },
        "acceptanceCriteria": ["80 % Szenarien mit Datenpipelines", "95 % Sync-Genauigkeit", "70 % weniger manueller Datenaufwand"]
    },
    { 
        "id": "R15C4", 
        "label": { "de": "Automatisierte Sanity Regression im Integrationstest" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Validierung der Integration nach Deployment." },
        "acceptanceCriteria": ["90 % kritische Integrationsfälle automatisiert", "-70 % manueller Aufwand", "95 % Erfolgsquote"]
    },
    { 
        "id": "R13C5", 
        "label": { "de": "Automatisiertes Progressionstesting in Pre-UAT" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Test neuer Features in Pre-UAT Umgebung." },
        "acceptanceCriteria": ["80 % Progression automatisiert", "90 % Abdeckung neuer Funktionen", "-60 % manuelle Testzeit"]
    },
    { 
        "id": "R14C5", 
        "label": { "de": "Automatisiertes Last- und Stresstesting" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Validierung von Performance und Stabilität." },
        "acceptanceCriteria": ["Lasttests für alle Hauptprozesse", "-20 % Antwortzeiten", "90 % Engpässe behoben"]
    },
    { 
        "id": "R15C5", 
        "label": { "de": "Automatisiertes Security Testing" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Integration von Sicherheits-Scans in CI/CD." },
        "acceptanceCriteria": ["Security Scans in 100 % CI/CD", "-30 % Erkennungszeit", "90 % Schwachstellen in 2 Wochen behoben"]
    },
    { 
        "id": "R13C6", 
        "label": { "de": "Automatisiertes Accessibility Testing" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Prüfung auf Barrierefreiheit (WCAG)." },
        "acceptanceCriteria": ["Integration in 100 % UI-Pipelines", "-80 % kritische Verstösse", "95 % WCAG 2.1 Konformität"]
    },
    { 
        "id": "R15C6", 
        "label": { "de": "Self-Service Synthetic Test Data Deployments" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Teams generieren synthetische Daten selbst." },
        "acceptanceCriteria": ["80 % Umgebungen unterstützen Self-Service", "90 % Nutzung", "-70 % Provisioning-Zeit"]
    },
    { 
        "id": "R13C7", 
        "label": { "de": "Automatisiertes Akzeptanztesten in Integrationsumgebungen" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Validierung von Akzeptanzkriterien in Integration." },
        "acceptanceCriteria": ["90 % Szenarien automatisiert", "95 % Genauigkeit", "-70 % manueller Aufwand"]
    },
    { 
        "id": "R14C7", 
        "label": { "de": "Automatisiertes Progressionstesten in UAT" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Automatisierte Tests neuer Features in UAT." },
        "acceptanceCriteria": ["80 % automatisiert", "90 % Abdeckung kritischer Workflows", "-75 % manueller Aufwand"]
    },
    { 
        "id": "R15C7", 
        "label": { "de": "Automatisiertes Systemverifikationstesten (SVT)" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Verifikation des Gesamtsystems in integrierter Umgebung." },
        "acceptanceCriteria": ["90 % systemweite Workflows automatisiert", "95 % Genauigkeit Defekterkennung", "-70 % manueller Aufwand"]
    },
    { 
        "id": "R14C8", 
        "label": { "de": "Automatisiertes Abnahmetesten in UAT" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Automatisierte Prüfung der Abnahmekriterien." },
        "acceptanceCriteria": ["90 % UAT-Szenarien automatisiert", "95 % Testabdeckung", "-75 % manueller Aufwand"]
    },
    { 
        "id": "R14C9", 
        "label": { "de": "AI-Testautomatisierung" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Einsatz von KI für Testdesign und Wartung." },
        "acceptanceCriteria": ["95 % Regression mit KI", "80 % weniger Wartung (Self-Healing)", "90 % Vorhersagegenauigkeit"]
    },

    // --- Virtualisierung (Rows 16-18) ---
    { 
        "id": "R17C1", 
        "label": { "de": "Virtuelle Services / Smart Stubs" }, 
        "class": "light-blue", "isRoot": true, 
        "tooltip": { "de": "Simulation nicht verfügbarer Services." },
        "acceptanceCriteria": ["80 % kritische Services virtualisiert", "Reduktion Abhängigkeiten um 90 %", "100 % Testkonsistenz"]
    },
    { 
        "id": "R16C2", 
        "label": { "de": "Automatisierte Infrastrukturbereitstellung" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Aufbau von Umgebungen mittels IaC." },
        "acceptanceCriteria": ["90 % Umgebungen automatisiert", "-80 % manueller Aufwand", "100 % Konsistenz"]
    },
    { 
        "id": "R18C2", 
        "label": { "de": "Strategischer Einsatz virtueller Services" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Planung und Governance für Virtualisierung." },
        "acceptanceCriteria": ["Ziele dokumentiert", "80 % Services virtualisiert", "90 % Integration in Dev/Test"]
    },
    { 
        "id": "R16C3", 
        "label": { "de": "Self-Service Virtual Services" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Eigenständige Nutzung virtueller Services." },
        "acceptanceCriteria": ["Portal live", "80 % Nutzer eigenständig", "-70 % Provisionierungszeit"]
    },
    { 
        "id": "R18C3", 
        "label": { "de": "Automatisierte Middleware-Provisionierung" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Automatisches Setup von Middleware." },
        "acceptanceCriteria": ["90 % Middleware automatisiert", "-80 % Zeitaufwand", "100 % Reproduzierbarkeit"]
    },
    { 
        "id": "R16C6", 
        "label": { "de": "Automatisierte Bereitstellung von Testumgebungen" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Automatisiertes Setup kompletter Umgebungen." },
        "acceptanceCriteria": ["90 % Umgebungen automatisiert", "100 % Konsistenz", "-80 % Zeitaufwand"]
    },
    { 
        "id": "R17C6", 
        "label": { "de": "Automatisierte Middleware-Provisionierung (Skalierbar)" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Skalierbare Middleware-Bereitstellung." },
        "acceptanceCriteria": ["Automatisierte Workflows für 80 % Middleware", "95 % Konsistenz", "-70 % Einrichtungszeit"]
    },
    { 
        "id": "R18C6", 
        "label": { "de": "Self-Service Virtual Services (Adv)" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Erweiterter Self-Service für Virtualisierung." },
        "acceptanceCriteria": ["90 % Nutzer verwalten selbst", "Reduktion Bereitstellungszeit -70 %", "95 % Integration"]
    },
    { 
        "id": "R16C7", 
        "label": { "de": "Self-Service Testumgebungen für Einzelanwendungen" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Entwickler provisionieren eigene Umgebungen." },
        "acceptanceCriteria": ["90 % Teams eigenständig", "-80 % Einrichtungszeit", "100 % Kompatibilität"]
    },
    { 
        "id": "R17C7", 
        "label": { "de": "Virtuelle Services / Smart Stubs (Integrated)" }, 
        "class": "light-blue", 
        "tooltip": { "de": "In CI-Pipeline integrierte Stubs." },
        "acceptanceCriteria": ["90 % Abhängigkeiten virtualisiert", "100 % CI-Integration", "80 % weniger Testabbrüche"]
    },
    { 
        "id": "R18C8", 
        "label": { "de": "Automatisierte Bereitstellung Integrierter Testumgebungen" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Komplexe Integrationsumgebungen auf Knopfdruck." },
        "acceptanceCriteria": ["90 % Integrationsumgebungen automatisiert", "95 % Konsistenz", "-80 % manueller Aufwand"]
    },

    // --- Manual Testing (Rows 19-22) ---
    { 
        "id": "R20C1", 
        "label": { "de": "Manuelles Regressionstesten mit historischer Abdeckung" }, 
        "class": "light-blue", "isRoot": true, 
        "tooltip": { "de": "Basis-Regression basierend auf Erfahrung." },
        "acceptanceCriteria": ["90 % kritische Fälle identifiziert", "95 % Fehlererkennung", "-50 % redundante Tests"]
    },
    { 
        "id": "R19C2", 
        "label": { "de": "Exploratives Testen in frühen Projektphasen" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Kreatives Testen zur frühen Fehlerfindung." },
        "acceptanceCriteria": ["90 % neue Features explorativ getestet", "80 % kritische Usability-Probleme gefunden", "Ergebnisse zu 100 % geteilt"]
    },
    { 
        "id": "R21C2", 
        "label": { "de": "Manuelles Regressionstesten mit gesteuerter Abdeckung" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Systematisierte manuelle Regression." },
        "acceptanceCriteria": ["-60 % redundante Tests", "90 % Abdeckung Hochrisiko", "95 % kritische Defekte gefunden"]
    },
    { 
        "id": "R19C3", 
        "label": { "de": "Definition synthetischer Daten für Progression" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Künstliche Daten für manuelle Tests." },
        "acceptanceCriteria": ["80 % kritische Szenarien abgedeckt", "95 % Datenqualität", "-70 % Abhängigkeit von Echtdaten"]
    },
    { 
        "id": "R21C3", 
        "label": { "de": "Hybrides Testen auf vorläufigen Szenarien" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Mix aus Skript und Exploration." },
        "acceptanceCriteria": ["90 % vorläufige Features abgedeckt", "85 % Edge Cases gefunden", "100 % Stakeholder eingebunden"]
    },
    { 
        "id": "R20C4", 
        "label": { "de": "Qualitätsreviews von Regressionstest-Sets" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Review der Testfälle und Ergebnisse." },
        "acceptanceCriteria": ["Reviews an 90 % der Meilensteine", "80 % Empfehlungen umgesetzt", "-30 % nachgelagerte Fehler"]
    },
    { 
        "id": "R19C5", 
        "label": { "de": "Kontextgetriebenes Testen" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Anpassung der Tests an Projektkontext." },
        "acceptanceCriteria": ["80 % Stakeholderzufriedenheit", "40 % weniger übersehene Fehler", "+30 % explorative Abdeckung"]
    },
    { 
        "id": "R21C5", 
        "label": { "de": "Low Code / KI-unterstütztes manuelles Testen" }, 
        "class": "light-blue", 
        "tooltip": { "de": "KI-Support für manuelle Tester." },
        "acceptanceCriteria": ["60 % repetitive Tests automatisiert", "-50 % Zeit für Loganalyse", "75 % Defektvorhersage"]
    },
    { 
        "id": "R19C6", 
        "label": { "de": "UX-Richtlinien & Inklusivität" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Fokus auf Usability und Accessibility." },
        "acceptanceCriteria": ["90 % WCAG 2.1 Konformität", "+25 % Nutzerzufriedenheit", "-30 % Usability-Fehler"]
    },
    { 
        "id": "R21C6", 
        "label": { "de": "Prinzipien für Produkt- und Projektqualitätsreviews" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Bewertung der Produktqualität." },
        "acceptanceCriteria": ["95 % Projekte folgen Zeitplänen", "30 % weniger kritische Fehler", "100 % Qualitätslücken adressiert"]
    },
    { 
        "id": "R19C8", 
        "label": { "de": "Umfassendes Qualitätsengineering" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Qualität in allen Phasen integriert." },
        "acceptanceCriteria": ["95 % fehlerfreie Releases", "-40 % Testdauer", "+20 % Kundenzufriedenheit"]
    },
    { 
        "id": "R21C8", 
        "label": { "de": "Sprint Testing in agilen Projekten" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Testen im Sprint-Takt." },
        "acceptanceCriteria": ["95 % Testabdeckung der Sprint-Stories", "-40 % Fehlerbehebungszeit", "60 % Stories automatisiert"]
    },

    // --- Test Management (Rows 23-25) ---
    { 
        "id": "R23C1", 
        "label": { "de": "Etablierte Metriken für Einzelprozesse" }, 
        "class": "light-blue", "isRoot": true, 
        "tooltip": { "de": "Grundlegende Messung von Testaktivitäten." },
        "acceptanceCriteria": ["90 % Einhaltung Testzeitpläne", "20 % Verbesserung Fehlererkennung", "25 % Reduktion Behebungszeit"]
    },
    { 
        "id": "R22C2", 
        "label": { "de": "Regelmässig Durchgeführte Qualitätsreviews" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Periodische Bewertung der Testqualität." },
        "acceptanceCriteria": ["Reviews an 90 % der Meilensteine", "80 % Empfehlungen umgesetzt", "-30 % nachgelagerte Fehler"]
    },
    { 
        "id": "R24C2", 
        "label": { "de": "Testplanung & Steuerung" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Strukturierte Planung und Kontrolle." },
        "acceptanceCriteria": ["100 % geplante Tests fristgerecht", "-25 % Planabweichungen", "+20 % Stakeholder-Zufriedenheit"]
    },
    { 
        "id": "R23C3", 
        "label": { "de": "Planung basierend auf Impact-, Risiko- und Änderungsanalyse" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Risikobasierte Testplanung." },
        "acceptanceCriteria": ["95 % Testabdeckung Hochrisiko", "-40 % kritische Fehler", "+20 % Transparenz"]
    },
    { 
        "id": "R23C4", 
        "label": { "de": "Traceability & Information Transparency Built into Pipeline" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Automatisierte Rückverfolgbarkeit." },
        "acceptanceCriteria": ["100 % Traceability", "+30 % Stakeholder-Zufriedenheit", "-20 % Defektlösungsdauer"]
    },
    { 
        "id": "R23C5", 
        "label": { "de": "Agile Test Planning" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Flexible Planung in agilen Teams." },
        "acceptanceCriteria": ["90 % Testabdeckung pro Story", "70 % Regression automatisiert", "-30 % Fehlerbehebungszeit"]
    },
    { 
        "id": "R23C6", 
        "label": { "de": "Automated Reports Are Cross-Soiled" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Bereichsübergreifende automatisierte Berichte." },
        "acceptanceCriteria": ["100 % Quellen integriert", "-50 % Reporting-Zeit", "+30 % Transparenz"]
    },
    { 
        "id": "R23C7", 
        "label": { "de": "Real-Time Graphs and Reports Trends Over Time" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Echtzeitanalysen und Trends." },
        "acceptanceCriteria": ["100 % Metriken in Echtzeit", "30 % schnellere Fehlererkennung", "+25 % Zufriedenheit"]
    },
    { 
        "id": "R23C8", 
        "label": { "de": "Self-Service Reports and Dashboards" }, 
        "class": "light-blue", 
        "tooltip": { "de": "Berichte zur Selbstbedienung für Stakeholder." },
        "acceptanceCriteria": ["80 % Stakeholder nutzen Self-Service", "-50 % manuelle Reports", "+40 % Nutzung"]
    }
  ],
  "arrows": [
    // CONFIG MANAGEMENT
    // R1C1 -> R1C2, R2C2, R3C2 (Level 1 -> Level 2)
    { "from": "R1C1", "to": "R1C2" }, { "from": "R1C1", "to": "R2C2" }, { "from": "R1C1", "to": "R3C2" },
    // Level 2 -> Level 3
    { "from": "R1C2", "to": "R2C3" }, { "from": "R2C2", "to": "R2C3" }, { "from": "R3C2", "to": "R3C3" },
    // Level 3 -> Level 4
    { "from": "R2C3", "to": "R1C4" }, { "from": "R2C3", "to": "R2C4" }, { "from": "R3C3", "to": "R3C4" },
    // Level 4 -> Level 5, 6, 7
    { "from": "R1C4", "to": "R1C5" }, { "from": "R1C5", "to": "R1C6" }, { "from": "R1C6", "to": "R1C7" },

    // UNIT TESTING
    // L1 -> L2
    { "from": "R4C1", "to": "R4C2" }, { "from": "R4C1", "to": "R5C2" },
    // L2 -> L3
    { "from": "R4C2", "to": "R4C3" }, { "from": "R5C2", "to": "R4C3" },
    // L3 -> L4
    { "from": "R4C3", "to": "R4C4" },
    // L4 -> L5
    { "from": "R4C4", "to": "R4C5" },

    // BUILD PRACTICES
    // L1 -> L2
    { "from": "R7C1", "to": "R7C2" }, { "from": "R7C1", "to": "R8C2" }, { "from": "R7C1", "to": "R9C2" },
    // L2 -> L3
    { "from": "R7C2", "to": "R7C3" }, { "from": "R8C2", "to": "R7C3" }, { "from": "R9C2", "to": "R7C3" },
    // L3 -> L4
    { "from": "R7C3", "to": "R7C4" }, { "from": "R7C3", "to": "R8C4" },
    // L4 -> L5
    { "from": "R7C4", "to": "R7C5" }, 
    // L5 -> L6
    { "from": "R7C5", "to": "R7C6" }, { "from": "R7C5", "to": "R8C6" }, { "from": "R7C5", "to": "R9C6" },
    // L6 -> L7
    { "from": "R7C6", "to": "R7C7" }, { "from": "R8C6", "to": "R7C7" }, { "from": "R9C6", "to": "R7C7" },

    // DEPLOYMENT PRACTICES
    // L1 -> L2
    { "from": "R10C1", "to": "R10C2" }, { "from": "R10C1", "to": "R12C2" },
    // L2 -> L5
    { "from": "R10C2", "to": "R10C5" }, { "from": "R12C2", "to": "R12C5" },
    // L5 -> L6
    { "from": "R10C5", "to": "R11C6" }, { "from": "R12C5", "to": "R11C6" },
    // L6 -> L7
    { "from": "R11C6", "to": "R10C7" }, { "from": "R11C6", "to": "R11C7" }, { "from": "R11C6", "to": "R12C7" },
    // L7 -> L8
    { "from": "R10C7", "to": "R10C8" }, { "from": "R12C7", "to": "R12C8" },
    // L8 -> L9
    { "from": "R10C8", "to": "R11C9" }, { "from": "R12C8", "to": "R11C9" },

    // TEST AUTOMATION
    // L1 -> L2
    { "from": "R13C1", "to": "R13C2" },
    // L2 -> L3, L4
    { "from": "R13C2", "to": "R13C3" }, { "from": "R13C2", "to": "R15C3" }, { "from": "R13C2", "to": "R13C4" },
    // L3/L4 -> L5
    { "from": "R13C3", "to": "R15C4" }, { "from": "R15C3", "to": "R15C4" }, { "from": "R13C4", "to": "R15C4" },
    // L5 -> L5 (Progression, Load, Security)
    { "from": "R15C4", "to": "R13C5" }, { "from": "R15C4", "to": "R14C5" }, { "from": "R15C4", "to": "R15C5" },
    // L5 -> L6
    { "from": "R15C5", "to": "R13C6" }, { "from": "R15C5", "to": "R15C6" },
    // L6 -> L7
    { "from": "R13C6", "to": "R13C7" }, { "from": "R15C6", "to": "R13C7" },
    // L7 -> L7 (more items)
    { "from": "R13C7", "to": "R14C7" }, { "from": "R13C7", "to": "R15C7" },
    // L7 -> L8
    { "from": "R14C7", "to": "R14C8" }, { "from": "R15C7", "to": "R14C8" },
    // L8 -> L9
    { "from": "R14C8", "to": "R14C9" },

    // VIRTUALIZATION
    // L1 -> L2
    { "from": "R17C1", "to": "R16C2" }, { "from": "R17C1", "to": "R18C2" },
    // L2 -> L3
    { "from": "R16C2", "to": "R16C3" }, { "from": "R18C2", "to": "R18C3" },
    // L3 -> L6
    { "from": "R16C3", "to": "R16C6" }, { "from": "R18C3", "to": "R17C6" }, { "from": "R18C3", "to": "R18C6" },
    // L6 -> L7
    { "from": "R16C6", "to": "R16C7" }, { "from": "R17C6", "to": "R17C7" },
    // L7 -> L8
    { "from": "R17C7", "to": "R18C8" },

    // MANUAL TESTING
    // L1 -> L2
    { "from": "R20C1", "to": "R19C2" }, { "from": "R20C1", "to": "R21C2" },
    // L2 -> L3
    { "from": "R19C2", "to": "R19C3" }, { "from": "R21C2", "to": "R21C3" },
    // L3 -> L4
    { "from": "R21C3", "to": "R20C4" },
    // L4 -> L5
    { "from": "R20C4", "to": "R19C5" }, { "from": "R20C4", "to": "R21C5" },
    // L5 -> L6
    { "from": "R19C5", "to": "R19C6" }, { "from": "R21C5", "to": "R21C6" },
    // L6 -> L8
    { "from": "R19C6", "to": "R19C8" }, { "from": "R21C6", "to": "R21C8" },

    // TEST MANAGEMENT
    // L1 -> L2
    { "from": "R23C1", "to": "R22C2" }, { "from": "R23C1", "to": "R24C2" },
    // L2 -> L3
    { "from": "R22C2", "to": "R23C3" }, { "from": "R24C2", "to": "R23C3" },
    // L3 -> L4
    { "from": "R23C3", "to": "R23C4" },
    // L4 -> L5
    { "from": "R23C4", "to": "R23C5" },
    // L5 -> L6
    { "from": "R23C5", "to": "R23C6" },
    // L6 -> L7
    { "from": "R23C6", "to": "R23C7" },
    // L7 -> L8
    { "from": "R23C7", "to": "R23C8" },

    // --- CROSS-BRANCH CONNECTIONS (The Trunk) ---
    // Code (Config) -> Unit Test L1 (Basis)
    { "from": "R1C1", "to": "R4C1" },
    // Code (Config) -> Build L1 (Basis)
    { "from": "R1C1", "to": "R7C1" },
    // Unit L1 (Test Auto) -> Build L2 (Often integrated)
    { "from": "R4C1", "to": "R7C2" },
    // Unit L2 (Regression) -> Build L3 (Fast Feedback)
    { "from": "R5C2", "to": "R7C3" },
    // Build L4 (Build Once) -> Deploy L5 (Std Pre-UAT)
    { "from": "R7C4", "to": "R12C5" },
    // Build L5 (Artifact Repo) -> Deploy L5 (Rollback)
    { "from": "R7C5", "to": "R10C5" },
    // Config L2 (Toggles) -> Build L6 (Triggers)
    { "from": "R2C2", "to": "R7C6" },
    // Build L7 (CI) -> Deploy L7 (Auto Deploy Integration)
    { "from": "R7C7", "to": "R10C7" },
    // Deploy L1 (Data) -> Test Auto L4 (Auto Data)
    { "from": "R10C1", "to": "R13C4" },
    // Virt L1 (Services) -> Test Auto L1 (Dependencies)
    { "from": "R17C1", "to": "R13C1" },
    // Manual L1 (Regression) -> Test Auto L1 (Base for automation)
    { "from": "R20C1", "to": "R13C1" }
  ]
};
