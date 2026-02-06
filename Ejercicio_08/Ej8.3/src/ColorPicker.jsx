import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

export default function ColorPicker() {
  const { dispatch } = useContext(ThemeContext);

  return (
    <input type="color" onChange={e => dispatch({ type: "COLOR", payload: e.target.value })} />
  );
}
