import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

export default function TextoPreview() {
  const { theme } = useContext(ThemeContext);

  return (
    <p style={{ fontSize: theme.fontSize, textTransform: theme.textTransform }}>
      Texto de ejemplo
    </p>
  );
}
