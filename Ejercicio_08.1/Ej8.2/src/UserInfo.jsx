import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

export default function UserInfo() {
  const { user, setUser } = useContext(AuthContext);

  return (
    <>
      <select onChange={e => setUser({ name: e.target.value })}>
        <option>Ana</option>
        <option>Luis</option>
        <option>Invitado</option>
      </select>
      <p>Logueado como: {user.name}</p>
    </>
  );
}
