import UserCard from "./UserCard";
import React from "react";

const UserList = React.memo(({ users }) => {
  return (
    <>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </>
  );
});

export default UserList;
