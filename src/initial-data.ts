const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      operation: "SUM",
      content: "asjdaoijdoiasjd",
      type: "NUMBER",
      name: "Soma De Domicilio",
    },
    "task-2": {
      id: "task-2",
      operation: "AVERAGE",
      type: "NUMBER",
      name: "Rendimento Mensal Médio",
    },
    "task-3": {
      id: "task-3",
      operation: "Expression",
      type: "DERIVED",
      name: "Moradores/Domicilios",
    },
    "task-4": {
      id: "task-4",
      operation: "COUNT",
      type: "NUMBER",
      name: "Total De Empresas",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      taskIds: ["task-1", "task-2"],
    },
    "column-2": {
      id: "column-2",
      taskIds: ["task-3", "task-4"],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2"],
};

export default initialData;
