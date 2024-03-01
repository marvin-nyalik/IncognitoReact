import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "./components/Posts";
import ReducerCom from "./components/reducer";
import User from "./components/User";
import Shopping from "./components/Shopping";
import Form from "./components/IdHook";
import Parent from "./components/Ref";
import TitleChangeComponent from "./components/TitleChange";
import Books from "./components/Books";

function App() {
  const booksData = [
    { author: 'Eunniah Mbabazi', title: 'Breaking Down', year: 1968, category: 'Fiction' },
    { author: 'Chinua Achebe', title: 'Things Fall Apart', year: 1975, category: 'Non-fiction' },
    { author: 'Chinua Achebe', title: 'The River Between', year: 1960, category: 'Folklore' },
    { author: 'Mbongeni Ngema', title: 'Themes of Sarafina', year: 1982, category: 'Science Fiction' },
    { author: 'Marvin Nyalik', title: 'Lyrical Labyrinth', year: 2005, category: 'Fairytales' },
  ];

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<User />}></Route>
          <Route path="/books" element={<Books books={booksData}/>}></Route>
          <Route path="/title" element={<TitleChangeComponent />}></Route>
          <Route path="/ref" element={<Parent />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/shop" element={<Shopping />}></Route>
          <Route path="/reducer" element={<ReducerCom />}></Route>
          <Route path="/form" element={<Form />}></Route>
        </Routes>
      </Router>

      {/* First <br /> 
      <Form></Form>

      Second <br />
      <Form></Form> */}
    </>
  )
}

export default App
