import IconoOnline from "./IconoOnline";
import React from "react";

const Avatar = React.memo(({ avatar, isOnline }) => {
  console.log("Render Avatar");
  return (
    <div>
      <img src={avatar} width={50} />
      <IconoOnline isOnline={isOnline} />
    </div>
  );
});

export default Avatar;
