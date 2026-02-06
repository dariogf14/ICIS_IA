import { ThemeProvider } from "./context/ThemeContext";
import ColorPicker from "./ColorPicker";
import FontSizeSlider from "./FontSizeSlider";
import BotonPreview from "./BotonPreview";
import TextoPreview from "./TextoPreview";
import CardPreview from "./CardPreview";

export default function App() {
  return (
    <ThemeProvider>
      <ColorPicker />
      <FontSizeSlider />
      <BotonPreview />
      <TextoPreview />
      <CardPreview />
    </ThemeProvider>
  );
}
