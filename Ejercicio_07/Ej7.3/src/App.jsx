import { useState, useCallback } from "react";
import ToastContainer from "./ToastContainer";

export default function App() {
  const [errors, setErrors] = useState([]);

  const addError = () => {
    setErrors(e => [
      ...e,
      { id: Date.now(), message: "Error aleatorio" },
    ]);
  };

  const clearError = useCallback((id) => {
    setErrors(errors => errors.filter(e => e.id !== id));
  }, []);

  const clearAll = () => setErrors([]);

  return (
    <>
      <button onClick={addError}>Agregar error</button>
      <button onClick={clearAll}>Limpiar todos</button>
      <ToastContainer errors={errors} onClose={clearError} />
    </>
  );
}
