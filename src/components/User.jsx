import React, { useMemo } from "react";
import DisplayUser from "./DisplayUser";

export const UserContext = React.createContext();

const User = () => {
  const age = 12;
  const name = 'Melisa';

  const user = useMemo(() => {
    return {name: name, age: age}
  }, [age, name])

  return (
    <>
      <UserContext.Provider value={user}>
        <DisplayUser />
      </UserContext.Provider>
    </>
  )
}

export default User;
