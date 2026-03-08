export const rawConfig = {
  arrows: [],
  lanes: [
    {
      label: "Quality Assurance",
      startRow: 1,
      endRow: 2,
      details: {
        description: "Focus on preventing defects.",
        importance: "Ensures product quality from the start.",
        gettingStarted: "Start by defining quality standards.",
        resources: []
      }
    }
  ],
  cells: [
    {
      id: "R1C1",
      label: "Unit Testing",
      tooltip: "Testing individual components.",
      acceptanceCriteria: ["All tests pass", "Coverage > 80%"]
    }
  ]
};
