import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

export default function BotonPreview() {
  const { theme } = useContext(ThemeContext);

  return (
    <button style={{ background: theme.primaryColor, fontSize: theme.fontSize }}>
      Botón
    </button>
  );
}
