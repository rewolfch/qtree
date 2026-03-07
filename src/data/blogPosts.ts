import { LocalizedString } from '../types';

export interface BlogPost {
  id: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  content: LocalizedString;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "quality-engineering-vs-testing",
    title: {
      de: "Quality Engineering vs. Testing: Ein Paradigmenwechsel",
      en: "Quality Engineering vs. Testing: A Paradigm Shift"
    },
    excerpt: {
      de: "Warum traditionelles Testen nicht mehr ausreicht und wie Quality Engineering den gesamten Lebenszyklus der Softwareentwicklung transformiert.",
      en: "Why traditional testing is no longer enough and how Quality Engineering transforms the entire software development lifecycle."
    },
    content: {
      de: `
        <h2>Vom Finden zum Verhindern von Fehlern</h2>
        <p>Traditionelles Software-Testing konzentrierte sich oft darauf, Fehler zu finden, nachdem der Code geschrieben wurde. Quality Engineering hingegen beginnt viel früher. Es geht darum, Qualität in den Prozess zu integrieren, von der ersten Anforderung bis zum Betrieb.</p>
        
        <h3>Die drei Säulen des Quality Engineering</h3>
        <ul>
          <li><strong>Kultur:</strong> Qualität ist die Verantwortung des gesamten Teams, nicht nur der Tester.</li>
          <li><strong>Technologie:</strong> Einsatz von Automatisierung, CI/CD und modernen Tools.</li>
          <li><strong>Prozess:</strong> Shift-Left und Shift-Right Ansätze.</li>
        </ul>

        <p>Der Quality Tree hilft dabei, diese Aspekte zu strukturieren und sichtbar zu machen. Er zeigt auf, dass Qualität mehr ist als nur "Test Automation".</p>
      `,
      en: `
        <h2>From Finding to Preventing Defects</h2>
        <p>Traditional software testing often focused on finding bugs after the code was written. Quality Engineering, however, starts much earlier. It's about integrating quality into the process, from the first requirement to operations.</p>
        
        <h3>The Three Pillars of Quality Engineering</h3>
        <ul>
          <li><strong>Culture:</strong> Quality is the responsibility of the whole team, not just testers.</li>
          <li><strong>Technology:</strong> Use of automation, CI/CD, and modern tools.</li>
          <li><strong>Process:</strong> Shift-Left and Shift-Right approaches.</li>
        </ul>

        <p>The Quality Tree helps to structure and visualize these aspects. It shows that quality is more than just "Test Automation".</p>
      `
    },
    author: "Serge Baumberger",
    date: "2025-03-15",
    readTime: "5 min",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    tags: ["Strategy", "Quality Engineering"]
  },
  {
    id: "ai-in-testing",
    title: {
      de: "KI im Testing: Hype oder Realität?",
      en: "AI in Testing: Hype or Reality?"
    },
    excerpt: {
      de: "Wie künstliche Intelligenz das Testen verändert und welche Tools heute schon einen echten Mehrwert bieten.",
      en: "How artificial intelligence is changing testing and which tools already offer real value today."
    },
    content: {
      de: `
        <h2>Die Evolution der Testautomatisierung</h2>
        <p>Mit dem Aufkommen von LLMs und visueller KI stehen wir vor der nächsten Stufe der Testautomatisierung. Self-healing Tests, automatische Testdatengenerierung und visuelle Regressionstests sind keine Zukunftsmusik mehr.</p>
        
        <h3>Anwendungsfälle</h3>
        <p>Wir sehen heute schon erfolgreiche Einsätze in:</p>
        <ul>
          <li>Automatisierter Testfall-Erstellung aus Requirements</li>
          <li>Visueller Validierung von UIs</li>
          <li>Log-Analyse und Fehler-Triagierung</li>
        </ul>
      `,
      en: `
        <h2>The Evolution of Test Automation</h2>
        <p>With the rise of LLMs and visual AI, we are facing the next stage of test automation. Self-healing tests, automatic test data generation, and visual regression tests are no longer dreams of the future.</p>
        
        <h3>Use Cases</h3>
        <p>We are already seeing successful implementations in:</p>
        <ul>
          <li>Automated test case generation from requirements</li>
          <li>Visual validation of UIs</li>
          <li>Log analysis and bug triage</li>
        </ul>
      `
    },
    author: "Serge Baumberger",
    date: "2025-04-02",
    readTime: "7 min",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    tags: ["AI", "Innovation"]
  },
  {
    id: "roots-of-quality",
    title: {
      de: "Die Wurzeln der Qualität: Warum Kultur entscheidet",
      en: "The Roots of Quality: Why Culture Decides"
    },
    excerpt: {
      de: "Ohne die richtige Einstellung hilft das beste Tool nicht. Ein Deep-Dive in die 'Wurzeln' des Quality Tree Frameworks.",
      en: "Without the right mindset, the best tool won't help. A deep dive into the 'Roots' of the Quality Tree Framework."
    },
    content: {
      de: `
        <h2>Mindset > Toolset</h2>
        <p>Im Quality Tree Framework bilden die Wurzeln das Fundament. Sie stehen für die Werte und die Kultur einer Organisation. Wenn hier Fäulnis herrscht, kann der Baum nicht wachsen.</p>
        
        <p>Ein Quality Engineer muss daher auch immer ein Kultur-Wandler sein. Es geht darum, Silos aufzubrechen und ein gemeinsames Verständnis für Qualität zu schaffen.</p>
      `,
      en: `
        <h2>Mindset > Toolset</h2>
        <p>In the Quality Tree Framework, the roots form the foundation. They represent the values and culture of an organization. If there is rot here, the tree cannot grow.</p>
        
        <p>A Quality Engineer must therefore always be a culture changer. It is about breaking down silos and creating a shared understanding of quality.</p>
      `
    },
    author: "Serge Baumberger",
    date: "2025-02-20",
    readTime: "4 min",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    tags: ["Culture", "Leadership"]
  }
];
