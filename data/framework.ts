
import { Branch, BlogPost } from '../types';

export const branches: Branch[] = [
  {
    id: "config-mgmt",
    title: "Configuration Management",
    description: "Das strukturelle Rückgrat für das Change-Management. Von einfacher Artefaktverwaltung hin zu dynamischem Merging und progressiver Auslieferung.",
    icon: "git-branch",
    levels: [
      { id: 1, title: "Alle Artefakte versioniert & getaggt", description: "Grundlegende Nachverfolgbarkeit von Code, Konfiguration und Infrastruktur mit VCS.", tools: ["Git", "GitLab"] },
      { id: 2, title: "Feature Toggles im Code / SCM-Based", description: "Feature Toggles werden gemeinsam mit dem Code versioniert. Toolgestützte Merges.", tools: ["LaunchDarkly SDK"] },
      { id: 3, title: "Automatisierte Merges", description: "Granularität auf Pull-/Merge-Request-Ebene. Merge-Konflikte werden minimiert.", tools: ["GitHub Actions"] },
      { id: 4, title: "Zentrale Toggle-Service-Schicht", description: "Codegranularität auf Feature-Ebene. Dynamische Merges.", tools: ["Unleash"] },
      { id: 5, title: "Zentrales Feature-Toggle-Framework", description: "Einheitliche Steuerung und Transparenz aller Toggles.", tools: [] },
      { id: 6, title: "Centralized Feature Toggle Management", description: "Metadatengetriebenes Toggle-Management.", tools: [] },
      { id: 7, title: "Progressive Exposure via Audience Targeting", description: "Sichere Experimente in Produktion durch gezielte Nutzergruppen.", tools: [] },
    ]
  },
  {
    id: "unit-testing",
    title: "Unit Testing",
    description: "Die Wurzeln der Qualitätssicherung. Stellt sicher, dass Software bereits auf der untersten Ebene funktioniert.",
    icon: "microscope",
    levels: [
      { id: 1, title: "Automatisiertes Unit-Test-Framework", description: "Erstes Sicherheitsnetz. Tools: pytest, JUnit, Mocha.", tools: ["JUnit", "Jest"] },
      { id: 2, title: "Unit-Testabdeckung: 5–25 %", description: "Regressionstest-Suite für Unit-Tests. Pre-Check-in-Qualitätsprüfungen.", tools: ["SonarQube"] },
      { id: 3, title: "Unit-Test-Abdeckung: 25–80 %", description: "Abdeckung kritischer Pfade und Geschäftslogik.", tools: ["JaCoCo"] },
      { id: 4, title: "Unit-Test-Abdeckung > 80 %", description: "Robuste Frameworks, kaum ungetestete Risiken.", tools: [] },
      { id: 5, title: "Test-Driven Development (TDD)", description: "Code wird geschrieben, um Tests zu erfüllen.", tools: [] },
    ]
  },
  {
    id: "build-practices",
    title: "Build Practices",
    description: "Der Treibstoff für schnelle Lieferung – fokussiert auf CI/CD, Abhängigkeitsmanagement und wiederholbare Builds.",
    icon: "hammer",
    levels: [
      { id: 1, title: "Standardisierter Build-Prozess", description: "Einheitliche Skripte für Kompilierung und Packaging.", tools: ["Maven", "Gradle"] },
      { id: 2, title: "Automatisierte Build (> 1 Tag)", description: "Dedizierter Build-Server, Tägliche Code-Commits.", tools: ["Jenkins"] },
      { id: 3, title: "Schneller Testrun beim Build", description: "Teamverantwortung für fehlschlagende Builds.", tools: [] },
      { id: 4, title: "Build Once, Deploy Many", description: "Rückwärtskompatible Schnittstellen.", tools: ["Docker"] },
      { id: 5, title: "Build Artifact Repository", description: "Zentrale Verwaltung von Artefakten.", tools: ["Nexus", "Artifactory"] },
      { id: 6, title: "Build on Commit", description: "SCM-Trigger und Performance Monitoring in CI/CD.", tools: [] },
      { id: 7, title: "Continuous Integration (CI)", description: "Jeder Commit ein potenzieller Release-Kandidat.", tools: [] },
    ]
  },
  {
    id: "deployment",
    title: "Deployment Practices",
    description: "Vom manuellen Deployment zu nahtlosen, automatisierten Pipelines für echte Continuous Delivery.",
    icon: "rocket",
    levels: [
      { id: 1, title: "Automatisierte Bereitstellung statischer Testdaten", description: "Basis für wiederholbare Deployments.", tools: [] },
      { id: 2, title: "Automatisierte Post-Deployment Smoke Tests", description: "Sowie automatisiertes Datenbank-Deployment.", tools: ["Flyway"] },
      { id: 5, title: "Automatisiertes Rollback", description: "Standardisierte Deployments in alle Pre-UAT-Umgebungen.", tools: [] },
      { id: 6, title: "Standardisierte Deployments überall", description: "Einheitliche Prozesse für alle Umgebungen.", tools: [] },
      { id: 7, title: "Self-Service Deployments in UAT", description: "Auto-Deploy in Integrationsumgebungen nach Quality Gate.", tools: [] },
      { id: 8, title: "Self-Service Deployments in Production", description: "Auto-Deploy in UAT bei Check-in.", tools: [] },
      { id: 9, title: "Continuous Delivery", description: "Der heilige Gral der Softwareauslieferung.", tools: [] },
    ]
  },
  {
    id: "test-automation",
    title: "Test Automation",
    description: "Umfasst End-to-End-, API- und Performance-Tests für ganzheitliche Qualität über Unit-Tests hinaus.",
    icon: "bot",
    levels: [
      { id: 1, title: "Automatisiertes funktionales Testen", description: "In Anwendungsdomänen.", tools: ["Selenium"] },
      { id: 2, title: "E2E Automatisiertes Framework", description: "Funktionales Testframework.", tools: ["Cypress"] },
      { id: 3, title: "Automatisierte Sanity-Regression", description: "Fokus auf Akzeptanztestumgebung.", tools: [] },
      { id: 4, title: "Automatisierte Testdatenbereitstellung", description: "Für integrierte Umgebungen.", tools: [] },
      { id: 5, title: "Automatisiertes Progressionstesting", description: "Last- und Stresstesting, Security Testing.", tools: ["JMeter", "OWASP ZAP"] },
      { id: 9, title: "AI-Testautomatisierung", description: "KI-gestützte Testautomatisierung und Analytik.", tools: [] },
    ]
  },
  {
    id: "virtualization",
    title: "Virtualisierung",
    description: "Aufbau isolierter Testumgebungen, die reale Bedingungen nachbilden – für belastbare Ergebnisse.",
    icon: "cloud",
    levels: [
      { id: 1, title: "Virtuelle Services / Smart Stubs", description: "Simulation von Abhängigkeiten.", tools: ["WireMock"] },
      { id: 2, title: "Automatisierte Infrastruktur", description: "Bereitstellung von Umgebungen als Code.", tools: ["Terraform"] },
      { id: 3, title: "Self-Service Virtual Services", description: "Automatisierte Middleware-Provisionierung.", tools: [] },
      { id: 7, title: "Virtuelle Services & Smart Stubs", description: "Integrierte Testumgebungen.", tools: [] },
    ]
  },
  {
    id: "manual-testing",
    title: "Manual Testing",
    description: "Gezielter Einsatz menschlicher Expertise und exploratives Testen, wo Automatisierung an Grenzen stößt.",
    icon: "user-check",
    levels: [
      { id: 1, title: "Manuelles Regressionstesten", description: "Mit historischer Abdeckung.", tools: [] },
      { id: 2, title: "Exploratives Testen", description: "In frühen Projektphasen.", tools: [] },
      { id: 5, title: "Kontextgetriebenes Testen", description: "Low Code / KI-unterstütztes manuelles Testen.", tools: [] },
      { id: 6, title: "UX-Richtlinien & Inklusivität", description: "Prinzipien für Produkt- und Projektqualitätsreviews.", tools: [] },
      { id: 8, title: "Umfassendes Qualitätsengineering", description: "Sprint Testing in agilen Projekten.", tools: [] },
    ]
  },
  {
    id: "test-mgmt",
    title: "Test Mgmt & Reporting",
    description: "Qualität sichtbar machen – mit Metriken, Dashboards und Einsichten für smartere Entscheidungen.",
    icon: "bar-chart",
    levels: [
      { id: 1, title: "Etablierte Metriken", description: "Für Einzelprozesse.", tools: [] },
      { id: 2, title: "Qualitätsreviews", description: "Regelmäßig durchgeführt. Testplanung & Steuerung.", tools: [] },
      { id: 5, title: "Agile Test Planning", description: "Planung basierend auf Impact und Risiko.", tools: [] },
      { id: 7, title: "Real-Time Graphs", description: "Reports und Trends über die Zeit.", tools: ["Grafana"] },
      { id: 8, title: "Self-Service Reports", description: "Dashboards für alle Stakeholder.", tools: [] },
    ]
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "swiss-testing-day-2025",
    title: "Ausverkaufte Main Stage am Swiss Testing Day 2025",
    date: "2025-04-03",
    author: "Serge Baumberger",
    imageUrl: "https://cdn.prod.website-files.com/67b33b7a114d5e14879cfae4/6976a3251987314fa15c168e_Swiss-Testing-Day-271-3-scaled%20(1).jpeg",
    excerpt: "Main Stage voll, Energie im Raum auf Anschlag – und nach dem Talk gefühlt jede zweite Frage: „Wo bekommen wir mehr vom Quality Tree?“ Gemeinsam mit Anthony Aston (Head of Test Management, Bank CIC) haben wir gezeigt, wie Qualität heute wirklich skaliert.",
    content: `Am Swiss Testing Day 2025 hatte ich einen dieser seltenen Momente, wo du schon beim Aufstehen auf die Bühne merkst: Heute passiert was. Die Main Stage war ausverkauft, die Aufmerksamkeit im Raum war maximal – und die Resonanz danach war ehrlich gesagt überwältigend.

Gemeinsam mit Anthony Aston, Head of Test Management der Bank CIC, durfte ich unsere Session „Building the Future of Quality: The Quality Tree Framework in Practice“ präsentieren – und genau diese Kombination hat extrem gut funktioniert: Praxis-Realität aus einer Bank, gepaart mit einem Framework, das nicht nur „schön klingt“, sondern sich im Alltag bewähren muss.

## Die Stimmung: volle Bühne, volle Aufmerksamkeit

Was mich am meisten gefreut hat: Das Publikum war nicht nur „nett interessiert“, sondern wirklich drin. Viele hatten sofort diesen Blick: „Okay – das ist nicht wieder ein neues Buzzword. Das ist ein Ansatz, der Ordnung in das QA-Chaos bringt.“

Und genau so war auch die Dynamik danach: super viele Gespräche am Rand, schnelle Deep-Dives, konkrete Nachfragen – und eine richtig spürbare Nachfrage nach dem Quality Tree Framework.

## Was wir gezeigt haben

Der Kern der Session war simpel: Qualität muss heute so gebaut werden, dass sie mit CI/CD, Automatisierung und regulatorischen Anforderungen mithält – ohne dass Teams daran kaputtgehen. Und wenn man AI/Hyper-Automation ernst nimmt, dann braucht es neben den technischen Möglichkeiten auch Governance (nicht als Bremse, sondern als Enabler).

Wir haben im Talk u. a. darüber gesprochen:

• AI-powered Scenario Generation: bessere Abdeckung, weniger Blind Spots
• Self-healing Automation: weniger Wartung, mehr Stabilität
• Governance in hyper-automated environments: Skalierung ohne Kontrollverlust

## Warum mich das so freut

Weil es zeigt, dass die Community gerade bereit ist für den nächsten Schritt: weg von „Testing als Phase“ hin zu Quality als System – messbar, skalierbar, und so aufgebaut, dass es nicht vom Heldenmut einzelner Leute abhängt.

## Danke

Ein riesiges Danke an:

• Anthony Aston für die starke Co-Stage und die Praxis-Perspektive der Bank CIC
• das Swiss Testing Day Team für die Bühne und das Format
• und natürlich an alle, die dabei waren, Fragen gestellt haben und danach noch weiterdiskutiert haben.

Wenn du tiefer rein willst: Wenn du das Quality Tree Framework bei euch anwenden willst (Assessment, Roadmap, Enablement / Coaching, CI/CD-Integration): Schreib mir. Nach dem Swiss Testing Day ist ziemlich klar: Da liegt gerade richtig viel Momentum drauf.`
  },
  {
    id: "milan-testing-united",
    title: "Live from Milan: Why We Need a New Blueprint for Quality",
    date: "2026-11-24",
    author: "Serge Baumberger",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4E22AQE4V5w4ZHK99Q/feedshare-shrink_2048_1536/B4EZsIVBpgKkAk-/0/1765371288605?e=1770854400&v=beta&t=G7Kbb0kmCfTZtlJeBP7z4k3Wvb0w59yDpdlxxiWV5gQ",
    excerpt: "Zwei Tage voller Energie, ehrlicher QA-Diskussionen – und ein Publikum, das keine Buzzwords mehr will, sondern eine Roadmap. Genau dafür ist der Quality Tree gemacht.",
    content: `Milan is always inspiring — aber dieses Mal ging’s nicht um Fashion oder Architektur. Es ging um die Zukunft von Software Quality.

Im November stand ich beim Testing United im NH Milano Congress Centre auf der Bühne — und die Stimmung war genau so, wie man’s sich wünscht: fokussiert, neugierig, ein bisschen unbequem (im besten Sinn) und voller Leute, die Qualität nicht als „Testing-Phase“, sondern als Business-Fähigkeit verstehen wollen.

## Warum ein neues Blueprint für Quality?

Wir erleben gerade eine Branche, die gefühlt jedes Problem mit „AI“ und „Hyper-Automation“ lösen will. Ich liebe diese Entwicklungen — aber ich bin überzeugt: Damit AI wirklich glänzen kann, braucht es zuerst ein solides Fundament. Sonst automatisieren wir nur Chaos.

Und genau an dieser Stelle kommt das Quality Tree Framework ins Spiel: als Struktur, Roadmap und gemeinsames Vokabular, um QA-Organisationen systematisch zu entwickeln.

## Was ich auf der Bühne gezeigt habe

In der Session habe ich den Quality Tree so präsentiert, wie er gedacht ist: pragmatisch, skalierbar, anschlussfähig an echte Delivery-Teams.

### Die 9 Maturity Levels
Eine klare Entwicklungslinie: von „Foundations“ bis hin zu „Future-Ready Intelligence“ — damit Teams ehrlich sehen, wo sie stehen und was der nächste sinnvolle Schritt ist.

### From Chaos to AI
Eine meiner Lieblingsfolien ist die Reise von Ad-hoc Testing / Unstructured Chaos hin zu AI-powered Defect Prediction. Nicht, weil AI „Menschen ersetzt“, sondern weil sie hilft, Fehler-Muster früh zu erkennen — bevor sie teuer werden.

### Die 90 Leaves
Und dann der Teil, den die Leute nachher am meisten gefeiert haben: die Detailtiefe. Nicht nur „Vision“, sondern konkrete Actions wie Dynamic Provisioning oder Self-Service Capabilities — die Dinge, die am Ende wirklich den Unterschied machen.

## Der beste Teil: die Gespräche nach dem Talk

Auf einer grossen Bühne zu stehen ist nice — aber der echte Wert entsteht danach im Gang, beim Kaffee, an den Tischen.

Genau dort kamen die stärksten Gespräche: Teams, die mit endlosen Regression-Suites kämpfen. Organisationen, die keine Visibility haben. Leaders, die spüren, dass sie zwar Tools kaufen können, aber noch keine Quality-Architektur besitzen.

Und das war für mich das Highlight: zu sehen, wie Leute ihre Probleme plötzlich sauber einordnen konnten — nicht als „wir sind schlecht im Testing“, sondern als: „Ah, wir sind auf Level X, uns fehlt Leaf Y, und unser nächster Hebel ist Z.“

## Fazit

Quality passiert nicht zufällig. Quality braucht eine Roadmap, die wachsen kann — it needs a tree.
Milan war perfekter Boden, um diese Ideen zu pflanzen.

Danke an Testing United — und an alle, die diskutiert, herausgefordert und das Framework direkt in ihre Realität übersetzt haben.`
  },
  {
    id: "1",
    title: "Warum jetzt? Ein Framework für echte Transformation",
    date: "2025-01-15",
    author: "Serge Baumberger",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    excerpt: "Unternehmen stehen heute vor beispielloser Komplexität. Alte Systeme, verteilte Teams und der Druck zur ständigen Innovation schaffen Bedingungen, unter denen traditionelle Ansätze oft scheitern.",
    content: "Unternehmen stehen heute vor beispielloser Komplexität. Alte Systeme, verteilte Teams und der Druck zur ständigen Innovation schaffen Bedingungen, unter denen traditionelle Ansätze oft scheitern. Erfolgreich sind die Organisationen, die systematisch denken – die grossen Probleme in kleine, vernetzte Herausforderungen zerlegen und diese gezielt lösen. Genau dieses Denken fördert der Quality Tree."
  },
  {
    id: "2",
    title: "Der Quality Tree in seiner ganzen Pracht",
    date: "2025-02-01",
    author: "Serge Baumberger",
    imageUrl: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    excerpt: "Um die vielschichtigen Ebenen des Quality-Tree-Frameworks greifbar zu machen, dient uns eine durchgängige Metapher: der Baum.",
    content: "Jedes seiner Elemente repräsentiert einen Kernbestandteil deines digitalen Imperiums. Die Wurzeln sind Prinzipien & Kultur. Der Stamm ist das Fundament & Architektur. Die Äste sind die Themenbereiche. Die Blätter sind die 90 Praktiken. Die Blüten sind Innovation & Experimente. Die Früchte sind Outcomes & Wert."
  }
];
