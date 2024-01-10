import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "./components/Posts";
import Search from "./components/Search";
import User from "./components/User";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<User />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
