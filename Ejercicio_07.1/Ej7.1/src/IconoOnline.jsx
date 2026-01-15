import PuntitoVerde from "./PuntitoVerde";
import React from "react";

const IconoOnline = React.memo(({ isOnline }) => {
  console.log("Render IconoOnline");
  return <PuntitoVerde isOnline={isOnline} />;
});

export default IconoOnline;
