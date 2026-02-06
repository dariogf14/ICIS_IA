import { createContext, useReducer } from "react";

export const TasksContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "TOGGLE":
      return state.map(t =>
        t.id === action.payload ? { ...t, completed: !t.completed } : t
      );
    case "DELETE":
      return state.filter(t => t.id !== action.payload);
    default:
      return state;
  }
}

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(reducer, [
    { id: 1, text: "Configurar entorno", author: "Ana", completed: false },
    { id: 2, text: "Optimizar componentes", author: "Luis", completed: false }
  ]);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
}
