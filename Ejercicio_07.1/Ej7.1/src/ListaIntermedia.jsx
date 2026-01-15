import TarjetaUsuario from "./TarjetaUsuario";
import React from "react";

const ListaIntermedia = React.memo(({ users }) => {
  console.log("Render ListaIntermedia");
  return (
    <>
      {users.map(user => (
        <TarjetaUsuario key={user.id} user={user} />
      ))}
    </>
  );
});

export default ListaIntermedia;
