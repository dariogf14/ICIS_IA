import { useContext, useMemo } from "react";
import { ThemeContext } from "./context/ThemeContext";

export default function CardPreview() {
  const { theme } = useContext(ThemeContext);

  const shadow = useMemo(
    () => `0 4px 10px ${theme.primaryColor}99`,
    [theme.primaryColor]
  );

  return (
    <div style={{ boxShadow: shadow, padding: 16 }}>
      Tarjeta
    </div>
  );
}
