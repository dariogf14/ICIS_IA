import React from "react";

const PuntitoVerde = React.memo(({ isOnline }) => {
  console.log("Render PuntitoVerde");
  return (
    <div
      style={{
        width: 10,
        height: 10,
        borderRadius: "50%",
        background: isOnline ? "green" : "red",
      }}
    />
  );
});

export default PuntitoVerde;
