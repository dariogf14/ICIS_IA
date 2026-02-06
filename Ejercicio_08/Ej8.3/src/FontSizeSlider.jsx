import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

export default function FontSizeSlider() {
  const { dispatch } = useContext(ThemeContext);

  return (
    <input type="range" min="12" max="30" onChange={e => dispatch({ type: "SIZE", payload: +e.target.value })} />
  );
}
