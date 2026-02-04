
export const rawConfig = {
  "grid": { "rows": 23, "cols": 10 },
  "lanes": [
    { 
      "label": "Config Management", "startRow": 1, "endRow": 3, "targetCount": 7,
      "details": {
        "description": {
          "de": "Bildet das strukturelle Rückgrat für das Change-Management. Stellt sicher, dass Code, Infrastruktur und Feature-Verhalten versioniert, nachverfolgt und kontrolliert werden.",
          "en": "Forms the structural backbone for change management. Ensures that code, infrastructure, and feature behavior are versioned, tracked, and controlled."
        },
        "importance": {
          "de": "Ohne solides CM entstehen instabile Umgebungen, unkontrollierte Feature-Toggles und fragile Merge-Prozesse.",
          "en": "Without solid CM, unstable environments, uncontrolled feature toggles, and fragile merge processes arise."
        },
        "gettingStarted": {
          "de": "Beginnen Sie mit der Versionierung aller Artefakte und der Einführung von SCM-basierten Feature Toggles.",
          "en": "Start by versioning all artifacts and introducing SCM-based feature toggles."
        },
        "resources": [
          { "label": "Git Branching Strategies", "url": "https://www.atlassian.com/git/tutorials/comparing-workflows" },
          { "label": "Feature Toggles (Martin Fowler)", "url": "https://martinfowler.com/articles/feature-toggles.html" }
        ]
      }
    },
    { 
      "label": "Unit Testing", "startRow": 4, "endRow": 5, "targetCount": 5,
      "details": {
        "description": {
          "de": "Die Wurzeln der Qualitätssicherung. Stellt sicher, dass Software bereits auf der untersten Ebene funktioniert.",
          "en": "The roots of quality assurance. Ensures that software works at the lowest level."
        },
        "importance": {
          "de": "Verhindert grobe Regressionen, ermöglicht sicheres Refactoring und beschleunigt Feedbackzyklen.",
          "en": "Prevents major regressions, enables safe refactoring, and accelerates feedback cycles."
        },
        "gettingStarted": {
          "de": "Etablieren Sie ein automatisiertes Unit-Test-Framework und integrieren Sie es in die CI-Pipeline.",
          "en": "Establish an automated unit test framework and integrate it into the CI pipeline."
        },
        "resources": [
          { "label": "Test Pyramid Explained", "url": "https://martinfowler.com/articles/practical-test-pyramid.html" }
        ]
      }
    },
    { 
      "label": "Build Practices", "startRow": 6, "endRow": 8, "targetCount": 7,
      "details": {
        "description": {
          "de": "Der Treibstoff für schnelle Lieferung – fokussiert auf CI/CD, Abhängigkeitsmanagement und wiederholbare Builds.",
          "en": "The fuel for fast delivery – focused on CI/CD, dependency management, and repeatable builds."
        },
        "importance": {
          "de": "Inkonsistente Builds verlangsamen Auslieferungen. Ein 'Automation First'-Ansatz sorgt für Zuverlässigkeit.",
          "en": "Inconsistent builds slow down deliveries. An 'Automation First' approach ensures reliability."
        },
        "gettingStarted": {
          "de": "Standardisieren Sie den Build-Prozess und führen Sie einen dedizierten Build-Server ein.",
          "en": "Standardize the build process and introduce a dedicated build server."
        },
        "resources": [
          { "label": "Continuous Integration", "url": "https://martinfowler.com/articles/continuousIntegration.html" }
        ]
      }
    },
    { 
      "label": "Deployment Practices", "startRow": 9, "endRow": 11, "targetCount": 7,
      "details": {
        "description": {
          "de": "Vom manuellen Deployment zu nahtlosen, automatisierten Pipelines für echte Continuous Delivery.",
          "en": "From manual deployment to seamless, automated pipelines for true Continuous Delivery."
        },
        "importance": {
          "de": "Reduziert 'Time-to-Market', minimiert menschliche Fehler und ermöglicht schnelle Rollbacks.",
          "en": "Reduces time-to-market, minimizes human errors, and enables fast rollbacks."
        },
        "gettingStarted": {
          "de": "Automatisieren Sie die Bereitstellung statischer Testdaten und führen Sie Smoke-Tests nach dem Deployment ein.",
          "en": "Automate the provisioning of static test data and introduce smoke tests after deployment."
        },
        "resources": [
          { "label": "Continuous Delivery", "url": "https://continuousdelivery.com/" }
        ]
      }
    },
    { 
      "label": "Test Automation", "startRow": 12, "endRow": 14, "targetCount": 9,
      "details": {
        "description": {
          "de": "Umfasst End-to-End-, API- und Performance-Tests für ganzheitliche Qualität über Unit-Tests hinaus.",
          "en": "Includes End-to-End, API, and performance tests for holistic quality beyond unit tests."
        },
        "importance": {
          "de": "Ermöglicht häufige Releases durch schnelle Regressionstests und validiert systemübergreifende Workflows.",
          "en": "Enables frequent releases through fast regression tests and validates cross-system workflows."
        },
        "gettingStarted": {
          "de": "Starten Sie mit automatisierten funktionalen Tests für kritische Anwendungsdomänen.",
          "en": "Start with automated functional tests for critical application domains."
        },
        "resources": [
          { "label": "Test Automation University", "url": "https://testautomationu.applitools.com/" }
        ]
      }
    },
    { 
      "label": "Virtualization", "startRow": 15, "endRow": 17, "targetCount": 6,
      "details": {
        "description": {
          "de": "Aufbau isolierter Testumgebungen, die reale Bedingungen nachbilden – für belastbare Ergebnisse.",
          "en": "Creation of isolated test environments that replicate real conditions – for reliable results."
        },
        "importance": {
          "de": "Entkoppelt Teams, ermöglicht Tests auch wenn Drittsysteme offline sind und erlaubt Fehlersimulation.",
          "en": "Decouples teams, enables tests even when third-party systems are offline, and allows for fault simulation."
        },
        "gettingStarted": {
          "de": "Nutzen Sie virtuelle Services oder Smart Stubs, um externe Abhängigkeiten zu simulieren.",
          "en": "Use virtual services or smart stubs to simulate external dependencies."
        },
        "resources": [
          { "label": "Service Virtualization", "url": "https://en.wikipedia.org/wiki/Service_virtualization" }
        ]
      }
    },
    { 
      "label": "Manual Testing", "startRow": 18, "endRow": 20, "targetCount": 7,
      "details": {
        "description": {
          "de": "Gezielter Einsatz menschlicher Expertise und exploratives Testen, wo Automatisierung an Grenzen stößt.",
          "en": "Targeted use of human expertise and exploratory testing where automation reaches its limits."
        },
        "importance": {
          "de": "Findet Designschwächen, Usability-Probleme und 'Unknown Unknowns', die Automatisierung übersehen würde.",
          "en": "Finds design weaknesses, usability problems, and 'Unknown Unknowns' that automation would overlook."
        },
        "gettingStarted": {
          "de": "Führen Sie exploratives Testen in frühen Projektphasen ein und nutzen Sie historische Daten für Regressionstests.",
          "en": "Introduce exploratory testing in early project phases and use historical data for regression tests."
        },
        "resources": [
          { "label": "Explore It!", "url": "https://pragprog.com/titles/ehxta/explore-it/" }
        ]
      }
    },
    { 
      "label": "Test Management", "startRow": 21, "endRow": 23, "targetCount": 8,
      "details": {
        "description": {
          "de": "Qualität sichtbar machen – mit Metriken, Dashboards und Einsichten für smartere Entscheidungen.",
          "en": "Making quality visible – with metrics, dashboards, and insights for smarter decisions."
        },
        "importance": {
          "de": "Fördert datenbasierte Entscheidungsfindung, kontinuierliche Verbesserung und Transparenz.",
          "en": "Promotes data-driven decision-making, continuous improvement, and transparency."
        },
        "gettingStarted": {
          "de": "Etablieren Sie Metriken für Einzelprozesse und führen Sie regelmäßige Qualitätsreviews durch.",
          "en": "Establish metrics for individual processes and conduct regular quality reviews."
        },
        "resources": [
          { "label": "Software Testing Metrics", "url": "https://www.guru99.com/software-testing-metrics-metrics.html" }
        ]
      }
    }
  ],
  "cells": [
    // --- Config Management ---
    { 
      "id": "R1C1", "label": { "de": "Alle Artefakte versioniert & getaggt", "en": "All artifacts versioned & tagged" }, "class": "yellow", "isRoot": true, 
      "tooltip": { "de": "Grundlegende Nachverfolgbarkeit von Code, Konfiguration und Infrastruktur mit VCS.", "en": "Basic traceability of code, configuration, and infrastructure via VCS." },
      "acceptanceCriteria": ["100% CIs versioned", "90% deployments tagged"]
    },
    { 
      "id": "R2C2", "label": { "de": "Feature Toggles im Code / SCM-Based", "en": "Feature Toggles in Code / SCM-Based" }, "class": "blue", 
      "tooltip": { "de": "Feature Toggles werden gemeinsam mit dem Code versioniert.", "en": "Feature toggles are versioned along with code." },
      "acceptanceCriteria": ["New risky features behind toggles", "Toggle files in Git"]
    },
    { 
      "id": "R2C3", "label": { "de": "Automatisierte Merges", "en": "Automated Merges" }, "class": "light-blue", 
      "tooltip": { "de": "Granularität auf Pull-/Merge-Request-Ebene.", "en": "Granularity at Pull/Merge Request level." },
      "acceptanceCriteria": ["100% PRs use merge automation", "90% PRs < 400 LOC"]
    },
    { 
      "id": "R2C4", "label": { "de": "Zentrale Toggle-Service-Schicht", "en": "Central Toggle Service Layer" }, "class": "light-blue", 
      "tooltip": { "de": "Codegranularität auf Feature-Ebene.", "en": "Code granularity at feature level." },
      "acceptanceCriteria": ["100% critical toggles migrated", "100% staging uses dynamic overlays"]
    },
    { 
      "id": "R1C5", "label": { "de": "Zentrales Feature-Toggle-Framework", "en": "Central Feature Toggle Framework" }, "class": "light-blue", 
      "tooltip": { "de": "Einheitliche Steuerung und Transparenz.", "en": "Unified control and transparency." },
      "acceptanceCriteria": ["100% teams on central platform", "95% toggles with metadata"]
    },
    { 
      "id": "R1C6", "label": { "de": "Centralized Feature Toggle Management", "en": "Centralized Feature Toggle Management" }, "class": "light-blue", 
      "tooltip": { "de": "Metadatengetriebenes Toggle-Management.", "en": "Metadata-driven toggle management." },
      "acceptanceCriteria": ["100% toggles cataloged", "Visibility in dashboard"]
    },
    { 
      "id": "R1C7", "label": { "de": "Progressive Exposure via Audience Targeting", "en": "Progressive Exposure via Audience Targeting" }, "class": "light-blue", 
      "tooltip": { "de": "Sichere Experimente in Produktion.", "en": "Safe experiments in production." },
      "acceptanceCriteria": ["100% new features use targeting", "90% issues caught in beta"]
    },

    // --- Unit Testing ---
    { 
      "id": "R4C1", "label": { "de": "Automatisiertes Unit-Test-Framework", "en": "Automated Unit Test Framework" }, "class": "light-blue", "isRoot": true, 
      "tooltip": { "de": "Erstes Sicherheitsnetz. Tests decken kritische Pfade ab.", "en": "First safety net. Tests cover critical paths." },
      "acceptanceCriteria": ["Unified framework selected", "50% new code coverage"]
    },
    { 
      "id": "R4C2", "label": { "de": "Unit-Testabdeckung: 5–25 %", "en": "Unit Test Coverage: 5–25%" }, "class": "light-blue", 
      "tooltip": { "de": "Regressionstest-Suite für Unit-Tests.", "en": "Regression test suite for unit tests." },
      "acceptanceCriteria": ["25% coverage in top modules", "Linting on 100% commits"]
    },
    { 
      "id": "R4C3", "label": { "de": "Unit-Test-Abdeckung: 25–80 %", "en": "Unit Test Coverage: 25–80%" }, "class": "light-blue", 
      "tooltip": { "de": "Abdeckung kritischer Pfade und Geschäftslogik.", "en": "Coverage of critical paths and business logic." },
      "acceptanceCriteria": ["80% coverage of critical workflows", "40% fewer prod bugs"]
    },
    { 
      "id": "R4C4", "label": { "de": "Unit-Test-Abdeckung > 80 %", "en": "Unit Test Coverage > 80%" }, "class": "light-blue", 
      "tooltip": { "de": "Robuste Frameworks, kaum ungetestete Risiken.", "en": "Robust frameworks, minimal untested risks." },
      "acceptanceCriteria": ["85% core module coverage", "100% regression coverage"]
    },
    { 
      "id": "R5C5", "label": { "de": "Test-Driven Development (TDD)", "en": "Test-Driven Development (TDD)" }, "class": "light-blue", 
      "tooltip": { "de": "Code wird geschrieben, um Tests zu erfüllen.", "en": "Code is written to satisfy tests." },
      "acceptanceCriteria": ["100% TDD for new features", "50% fewer post-release bugs"]
    },

    // --- Build Practices ---
    { 
      "id": "R7C1", "label": { "de": "Standardisierter Build-Prozess", "en": "Standardized Build Process" }, "class": "light-blue", "isRoot": true, 
      "tooltip": { "de": "Einheitliche Skripte für Kompilierung.", "en": "Unified compilation scripts." },
      "acceptanceCriteria": ["100% repos build artifacts", "Build success > 95%"]
    },
    { 
      "id": "R7C2", "label": { "de": "Automatisierter Build", "en": "Automated Build" }, "class": "light-blue", 
      "tooltip": { "de": "Dedizierter Build-Server.", "en": "Dedicated build server." },
      "acceptanceCriteria": ["100% builds on central server", "85% devs commit daily"]
    },
    { 
      "id": "R7C3", "label": { "de": "Schneller Testrun beim Build", "en": "Fast Test Run during Build" }, "class": "light-blue", 
      "tooltip": { "de": "Teamverantwortung für fehlschlagende Builds.", "en": "Team ownership for failed builds." },
      "acceptanceCriteria": ["-50% fix time", "90% builds pass fast test"]
    },
    { 
      "id": "R7C4", "label": { "de": "Build Once, Deploy Many", "en": "Build Once, Deploy Many" }, "class": "light-blue", 
      "tooltip": { "de": "Einmal bauen, überall deployen.", "en": "Build once, deploy everywhere." },
      "acceptanceCriteria": ["100% deployments use promoted artifact", "100% APIs versioned"]
    },
    { 
      "id": "R7C5", "label": { "de": "Build Artifact Repository", "en": "Build Artifact Repository" }, "class": "light-blue", 
      "tooltip": { "de": "Zentrale Verwaltung von Artefakten.", "en": "Central artifact management." },
      "acceptanceCriteria": ["100% builds create artifact", "Repo integrated in 100% deploys"]
    },
    { 
      "id": "R6C6", "label": { "de": "Build on Commit / SCM-Trigger", "en": "Build on Commit / SCM Trigger" }, "class": "light-blue", 
      "tooltip": { "de": "Builds starten automatisch bei Commit.", "en": "Builds start automatically on commit." },
      "acceptanceCriteria": ["100% PRs trigger builds", "Feedback < 10 mins"]
    },
    { 
      "id": "R7C7", "label": { "de": "Continuous Integration (CI)", "en": "Continuous Integration (CI)" }, "class": "light-blue", 
      "tooltip": { "de": "Jeder Commit ein potenzieller Release.", "en": "Every commit a potential release." },
      "acceptanceCriteria": ["100% changes through CI", "Build time <= 10 mins"]
    },

    // --- Deployment Practices ---
    { 
      "id": "R10C1", "label": { "de": "Auto. Bereitstellung statischer Testdaten", "en": "Auto. Static Test Data Provisioning" }, "class": "light-blue", "isRoot": true, 
      "tooltip": { "de": "Basis für wiederholbare Deployments.", "en": "Basis for repeatable deployments." },
      "acceptanceCriteria": ["90% envs with auto refresh", "100% compliance"]
    },
    { 
      "id": "R10C2", "label": { "de": "Auto. Validierung", "en": "Auto. Validation" }, "class": "light-blue", 
      "tooltip": { "de": "Post-Deployment Smoke Tests.", "en": "Post-deployment smoke tests." },
      "acceptanceCriteria": ["90% envs with smoke tests", "100% DB schema via pipeline"]
    },
    { 
      "id": "R10C5", "label": { "de": "Standardisierung & Resilienz", "en": "Standardization & Resilience" }, "class": "light-blue", 
      "tooltip": { "de": "Automatisiertes Rollback.", "en": "Automated rollback." },
      "acceptanceCriteria": ["Rollback < 2 mins", "100% Pre-UAT same artifact"]
    },
    { 
      "id": "R10C6", "label": { "de": "Standardisierte Deployments überall", "en": "Standardized Deployments Everywhere" }, "class": "light-blue", 
      "tooltip": { "de": "Einheitliche Prozesse für alle Umgebungen.", "en": "Unified processes for all environments." },
      "acceptanceCriteria": ["100% services use same template"]
    },
    { 
      "id": "R10C7", "label": { "de": "Gesteuerte UAT & Promotion", "en": "Controlled UAT & Promotion" }, "class": "light-blue", 
      "tooltip": { "de": "Self-Service in UAT.", "en": "Self-service in UAT." },
      "acceptanceCriteria": ["Auto-deploy for core services", "100% builds pass gate"]
    },
    { 
      "id": "R10C8", "label": { "de": "Produktionsreife Automatisierung", "en": "Production-Ready Automation" }, "class": "light-blue", 
      "tooltip": { "de": "Self-Service Deployments in Production.", "en": "Self-service deployments in production." },
      "acceptanceCriteria": ["100% releases via pipeline", "Rollback < 10 mins"]
    },
    { 
      "id": "R11C9", "label": { "de": "Continuous Delivery", "en": "Continuous Delivery" }, "class": "light-blue", 
      "tooltip": { "de": "Jede Änderung kann automatisch und sicher in Produktion gehen.", "en": "Any change can go to production automatically and safely." },
      "acceptanceCriteria": ["Auto promotion UAT->Prod", ">=3 prod deploys/week"]
    },

    // --- Test Automation ---
    { 
      "id": "R13C1", "label": { "de": "Automatisiertes funktionales Testen", "en": "Automated Functional Testing" }, "class": "light-blue", "isRoot": true, 
      "tooltip": { "de": "In Anwendungsdomänen.", "en": "In application domains." },
      "acceptanceCriteria": ["80% critical cases automated", "50% less manual regression"]
    },
    { 
      "id": "R13C2", "label": { "de": "E2E Automatisiertes Framework", "en": "E2E Automated Framework" }, "class": "light-blue", 
      "tooltip": { "de": "Funktionales Testframework.", "en": "Functional test framework." },
      "acceptanceCriteria": ["Framework in 2 core systems", "5 E2E workflows automated"]
    },
    { 
      "id": "R13C3", "label": { "de": "Integration und Sanity", "en": "Integration and Sanity" }, "class": "light-blue", 
      "tooltip": { "de": "Automatisierte Sanity-Regression.", "en": "Automated sanity regression." },
      "acceptanceCriteria": ["100% execution on AT deploy", "70% cross-system workflows"]
    },
    { 
      "id": "R13C4", "label": { "de": "Auto. Testdatenbereitstellung", "en": "Auto. Test Data Provisioning" }, "class": "light-blue", 
      "tooltip": { "de": "Für integrierte Umgebungen.", "en": "For integrated environments." },
      "acceptanceCriteria": ["80% scenarios with data pipelines", "95% sync accuracy"]
    },
    { 
      "id": "R13C5", "label": { "de": "Automatisiertes Progressionstesting", "en": "Automated Progression Testing" }, "class": "light-blue", 
      "tooltip": { "de": "Inklusive Last-, Stress- und Security-Testing.", "en": "Including load, stress, and security testing." },
      "acceptanceCriteria": ["80% progression automated", "Load tests for main processes", "Security scans in CI"]
    },
    { 
      "id": "R13C6", "label": { "de": "Accessibility & Synthetic Data", "en": "Accessibility & Synthetic Data" }, "class": "light-blue", 
      "tooltip": { "de": "Automatisierte A11y Tests.", "en": "Automated A11y tests." },
      "acceptanceCriteria": ["Integration in 100% UI pipelines", "80% environments self-service"]
    },
    { 
      "id": "R13C7", "label": { "de": "Integration in UAT", "en": "Integration in UAT" }, "class": "light-blue", 
      "tooltip": { "de": "Automatisierte Akzeptanz- und Progressionstests in UAT.", "en": "Automated acceptance and progression tests in UAT." },
      "acceptanceCriteria": ["90% scenarios automated", "80% progression automated"]
    },
    { 
      "id": "R13C8", "label": { "de": "Automatisiertes Abnahmetesten", "en": "Automated Acceptance Testing" }, "class": "light-blue", 
      "tooltip": { "de": "Validierung der Business-Kriterien in UAT.", "en": "Validation of business criteria in UAT." },
      "acceptanceCriteria": ["90% UAT scenarios automated", "95% test coverage"]
    },
    { 
      "id": "R13C9", "label": { "de": "AI-Testautomatisierung", "en": "AI Test Automation" }, "class": "light-blue", 
      "tooltip": { "de": "KI-gestützte Testautomatisierung.", "en": "AI-supported test automation." },
      "acceptanceCriteria": ["95% regression with AI", "80% less maintenance"]
    },

    // --- Virtualization ---
    { 
      "id": "R16C1", "label": { "de": "Virtuelle Services / Smart Stubs", "en": "Virtual Services / Smart Stubs" }, "class": "light-blue", "isRoot": true, 
      "tooltip": { "de": "Simulation realer Services.", "en": "Simulation of real services." },
      "acceptanceCriteria": ["80% critical services virtualized"]
    },
    { 
      "id": "R16C2", "label": { "de": "Automatisierte Infrastruktur", "en": "Automated Infrastructure" }, "class": "light-blue", 
      "tooltip": { "de": "Bereitstellung von Umgebungen als Code.", "en": "Provisioning of environments as code." },
      "acceptanceCriteria": ["90% environments automated", "Documentation of goals"]
    },
    { 
      "id": "R16C3", "label": { "de": "Self-Service & Middleware", "en": "Self-Service & Middleware" }, "class": "light-blue", 
      "tooltip": { "de": "Self-Service Virtual Services.", "en": "Self-service virtual services." },
      "acceptanceCriteria": ["Portal live", "90% middleware automated"]
    },
    { 
      "id": "R16C6", "label": { "de": "Dynamische Skalierung", "en": "Dynamic Scaling" }, "class": "light-blue", 
      "tooltip": { "de": "Automatisierte Testumgebungen.", "en": "Automated test environments." },
      "acceptanceCriteria": ["90% environments automated", "90% teams autonomous"]
    },
    { 
      "id": "R17C7", "label": { "de": "Integration & Fortgeschritten", "en": "Integration & Advanced" }, "class": "light-blue", 
      "tooltip": { "de": "Virtuelle Services in CI-Pipelines integriert.", "en": "Virtual services integrated in CI pipelines." },
      "acceptanceCriteria": ["100% CI runs use virtual envs", "90% dependencies virtualized"]
    },
    { 
      "id": "R16C8", "label": { "de": "Integrierte Testumgebungen", "en": "Integrated Test Environments" }, "class": "light-blue", 
      "tooltip": { "de": "Automatisierte Bereitstellung komplexer Landschaften.", "en": "Automated provisioning of complex landscapes." },
      "acceptanceCriteria": ["90% integration environments automated"]
    },

    // --- Manual Testing ---
    { 
      "id": "R19C1", "label": { "de": "Manuelles Regressionstesten", "en": "Manual Regression Testing" }, "class": "light-blue", "isRoot": true, 
      "tooltip": { "de": "Mit historischer Abdeckung.", "en": "With historical coverage." },
      "acceptanceCriteria": ["90% critical cases identified"]
    },
    { 
      "id": "R19C2", "label": { "de": "Exploratives Testen", "en": "Exploratory Testing" }, "class": "light-blue", 
      "tooltip": { "de": "In frühen Phasen.", "en": "In early phases." },
      "acceptanceCriteria": ["90% new features exploratorily tested", "-60% redundant tests"]
    },
    { 
      "id": "R20C3", "label": { "de": "Synthetische Daten & Hybrid", "en": "Synthetic Data & Hybrid" }, "class": "light-blue", 
      "tooltip": { "de": "Synthetische Daten für Progression.", "en": "Synthetic data for progression." },
      "acceptanceCriteria": ["80% scenarios covered", "90% preliminary features covered"]
    },
    { 
      "id": "R21C4", "label": { "de": "Qualitätsreviews", "en": "Quality Reviews" }, "class": "light-blue", 
      "tooltip": { "de": "Strukturierte Reviews.", "en": "Structured reviews." },
      "acceptanceCriteria": ["Reviews at 90% of milestones"]
    },
    { 
      "id": "R19C5", "label": { "de": "Kontextgetriebenes Testen", "en": "Context-Driven Testing" }, "class": "light-blue", 
      "tooltip": { "de": "Low Code / KI-unterstützt.", "en": "Low Code / AI-supported." },
      "acceptanceCriteria": ["80% stakeholder satisfaction", "60% repetitive tests automated"]
    },
    { 
      "id": "R19C6", "label": { "de": "UX & Inklusivität", "en": "UX & Inclusivity" }, "class": "light-blue", 
      "tooltip": { "de": "Richtlinien für UX, Inklusivität.", "en": "Guidelines for UX, inclusivity." },
      "acceptanceCriteria": ["90% WCAG 2.1 compliance", "95% projects follow schedule"]
    },
    { 
      "id": "R20C8", "label": { "de": "Umfassendes Quality Engineering", "en": "Comprehensive Quality Engineering" }, "class": "light-blue", 
      "tooltip": { "de": "Sprint Testing in agilen Projekten.", "en": "Sprint testing in agile projects." },
      "acceptanceCriteria": ["95% error-free releases", "95% test coverage sprint stories"]
    },

    // --- Test Management ---
    { 
      "id": "R22C1", "label": { "de": "Etablierte Metriken", "en": "Established Metrics" }, "class": "light-blue", "isRoot": true, 
      "tooltip": { "de": "Für Einzelprozesse.", "en": "For individual processes." },
      "acceptanceCriteria": ["90% adherence to test schedules"]
    },
    { 
      "id": "R22C2", "label": { "de": "Qualitätsreviews & Steuerung", "en": "Quality Reviews & Control" }, "class": "light-blue", 
      "tooltip": { "de": "Testplanung und Steuerung.", "en": "Test planning and control." },
      "acceptanceCriteria": ["Reviews at 90% of milestones", "100% planned tests on time"]
    },
    { 
      "id": "R23C3", "label": { "de": "Risikobasierte Planung", "en": "Risk-Based Planning" }, "class": "light-blue", 
      "tooltip": { "de": "Basierend auf Impact & Risiko.", "en": "Based on impact & risk." },
      "acceptanceCriteria": ["95% test coverage high risk"]
    },
    { 
      "id": "R22C4", "label": { "de": "Traceability & Transparenz", "en": "Traceability & Transparency" }, "class": "light-blue", 
      "tooltip": { "de": "Information Transparency.", "en": "Information Transparency." },
      "acceptanceCriteria": ["100% traceability"]
    },
    { 
      "id": "R23C5", "label": { "de": "Agile Test Planning", "en": "Agile Test Planning" }, "class": "light-blue", 
      "tooltip": { "de": "Integration in Sprints.", "en": "Integration in sprints." },
      "acceptanceCriteria": ["90% test coverage per story"]
    },
    { 
      "id": "R22C6", "label": { "de": "Automated Cross-Siled Reports", "en": "Automated Cross-Siled Reports" }, "class": "light-blue", 
      "tooltip": { "de": "Automatisierte Berichte.", "en": "Automated reports." },
      "acceptanceCriteria": ["100% sources integrated"]
    },
    { 
      "id": "R22C7", "label": { "de": "Real-Time Graphs", "en": "Real-Time Graphs" }, "class": "light-blue", 
      "tooltip": { "de": "Echtzeit-Trends.", "en": "Real-time trends." },
      "acceptanceCriteria": ["100% metrics real-time"]
    },
    { 
      "id": "R22C8", "label": { "de": "Self-Service Reports", "en": "Self-Service Reports" }, "class": "light-blue", 
      "tooltip": { "de": "Dashboards für alle.", "en": "Dashboards for everyone." },
      "acceptanceCriteria": ["80% stakeholder use self-service"]
    }
  ],
  "arrows": [
    // Config Mgmt
    { "from": "R1C1", "to": "R2C2" }, { "from": "R2C2", "to": "R2C3" }, { "from": "R2C3", "to": "R2C4" },
    { "from": "R2C4", "to": "R1C5" }, { "from": "R1C5", "to": "R1C6" }, { "from": "R1C6", "to": "R1C7" },
    // Unit Testing
    { "from": "R4C1", "to": "R4C2" }, { "from": "R4C2", "to": "R4C3" }, { "from": "R4C3", "to": "R4C4" },
    { "from": "R4C4", "to": "R5C5" },
    // Build Practices
    { "from": "R7C1", "to": "R7C2" }, { "from": "R7C2", "to": "R7C3" }, { "from": "R7C3", "to": "R7C4" },
    { "from": "R7C4", "to": "R7C5" }, { "from": "R7C5", "to": "R6C6" }, { "from": "R6C6", "to": "R7C7" },
    // Deployment
    { "from": "R10C1", "to": "R10C2" }, { "from": "R10C2", "to": "R10C5" }, { "from": "R10C5", "to": "R10C6" },
    { "from": "R10C6", "to": "R10C7" }, { "from": "R10C7", "to": "R10C8" }, { "from": "R10C8", "to": "R11C9" },
    // Test Auto
    { "from": "R13C1", "to": "R13C2" }, { "from": "R13C2", "to": "R13C3" }, { "from": "R13C3", "to": "R13C4" },
    { "from": "R13C4", "to": "R13C5" }, { "from": "R13C5", "to": "R13C6" }, { "from": "R13C6", "to": "R13C7" },
    { "from": "R13C7", "to": "R13C8" }, { "from": "R13C8", "to": "R13C9" },
    // Virtualization
    { "from": "R16C1", "to": "R16C2" }, { "from": "R16C2", "to": "R16C3" }, { "from": "R16C3", "to": "R16C6" },
    { "from": "R16C6", "to": "R17C7" }, { "from": "R17C7", "to": "R16C8" },
    // Manual
    { "from": "R19C1", "to": "R19C2" }, { "from": "R19C2", "to": "R20C3" }, { "from": "R20C3", "to": "R21C4" },
    { "from": "R21C4", "to": "R19C5" }, { "from": "R19C5", "to": "R19C6" }, { "from": "R19C6", "to": "R20C8" },
    // Mgmt
    { "from": "R22C1", "to": "R22C2" }, { "from": "R22C2", "to": "R23C3" }, { "from": "R23C3", "to": "R22C4" },
    { "from": "R22C4", "to": "R23C5" }, { "from": "R23C5", "to": "R22C6" }, { "from": "R22C6", "to": "R22C7" },
    { "from": "R22C7", "to": "R22C8" }
  ]
};
