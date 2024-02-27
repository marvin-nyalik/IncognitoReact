import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "./components/Posts";
import ReducerCom from "./components/reducer";
import User from "./components/User";
import Shopping from "./components/Shopping";
import Form from "./components/IdHook";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<User />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/shop" element={<Shopping />}></Route>
          <Route path="/reducer" element={<ReducerCom />}></Route>
          <Route path="/form" element={<Form />}></Route>
        </Routes>
      </Router>

      First <br /> 
      <Form></Form>

      Second <br />
      <Form></Form>
    </>
  )
}

export default App
