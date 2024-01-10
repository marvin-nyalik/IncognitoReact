import { useContext } from "react";
import { UserContext } from "./User";
import Layout from "./Layout";
import FinalContext from "./FinalContext";

const DisplayUser = () => {
  const user = useContext(UserContext);

  return(
    <>
      <Layout>
        <p>{user.name} is {user.age} years old. Consumed from context</p>
        <FinalContext />
      </Layout>
    </>
  )
}

export default DisplayUser;
