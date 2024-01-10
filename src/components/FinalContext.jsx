import { useContext } from "react";
import { UserContext } from "./User";

const FinalContext = () => {
  const user = useContext(UserContext);

  return (
    <>
      <small> &copy; {user.name} - {user.age} yo.</small>
    </>
  )
}

export default FinalContext;