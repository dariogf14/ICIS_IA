import Avatar from "./Avatar";
import React from "react";

const TarjetaUsuario = React.memo(({ user }) => {
  console.log("Render TarjetaUsuario", user.id);

  return (
    <div style={{ border: "1px solid #ccc", margin: 4, padding: 4 }}>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <Avatar avatar={user.avatar} isOnline={user.isOnline} />
    </div>
  );
});

export default TarjetaUsuario;
