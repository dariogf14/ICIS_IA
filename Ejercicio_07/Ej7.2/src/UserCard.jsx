import React from "react";

const UserCard = React.memo(({ user }) => {
  return <div>{user.name}</div>;
});

export default UserCard;
