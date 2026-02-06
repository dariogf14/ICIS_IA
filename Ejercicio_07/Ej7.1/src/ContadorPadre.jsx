import { useState, useMemo } from "react";
import ListaIntermedia from "./ListaIntermedia";

export default function ContadorPadre() {
  console.log("Render ContadorPadre");

  const [count, setCount] = useState(0);

  const users = useMemo(
    () =>
      Array.from({ length: 500 }, (_, i) => ({
        id: i + 1,
        name: `Usuario ${i + 1}`,
        email: `user${i + 1}@ejemplo.com`,
        avatar: `https://i.pravatar.cc/150?img=${(i + 1) % 70 + 1}`,
        isOnline: Math.random() > 0.5,
      })),
    []
  );

  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>
        Contador: {count}
      </button>
      <ListaIntermedia users={users} />
    </>
  );
}
