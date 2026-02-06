import { useState, useMemo } from "react";
import SearchInput from "./SearchInput";
import UserList from "./UserList";

export default function App() {
  const [search, setSearch] = useState("");

  const users = useMemo(
    () =>
      Array.from({ length: 10000 }, (_, i) => ({
        id: i,
        name: `Usuario ${i}`,
        email: `user${i}@ejemplo.com`,
      })),
    []
  );

  const filteredUsers = useMemo(() => {
    return users.filter(u =>
      u.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  return (
    <>
      <SearchInput value={search} onChange={setSearch} />
      <UserList users={filteredUsers} />
    </>
  );
}
