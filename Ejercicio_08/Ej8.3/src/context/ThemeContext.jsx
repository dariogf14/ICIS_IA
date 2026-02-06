import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "COLOR":
      return { ...state, primaryColor: action.payload };
    case "SIZE":
      return { ...state, fontSize: action.payload };
    case "TRANSFORM":
      return { ...state, textTransform: action.payload };
    default:
      return state;
  }
}

export function ThemeProvider({ children }) {
  const [theme, dispatch] = useReducer(reducer, {
    primaryColor: "#6c5ce7",
    fontSize: 16,
    textTransform: "none"
  });

  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}
