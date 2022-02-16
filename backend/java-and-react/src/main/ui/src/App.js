import "./App.css"
import UsersList from "./components/UsersList"
import Header from "./components/Header"
import AddEdit from "./components/AddEdit"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" exact element={<UsersList />}></Route>
          <Route path="/users" element={<UsersList />}></Route>
          <Route path="/users/:id" element={<AddEdit />}></Route>
        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
  )
}

export default App
