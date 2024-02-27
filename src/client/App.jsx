import { Route, Routes } from "react-router-dom";
import "./index.css";
import Users from "./components/users/Users";
import Nav from "./components/navigation/Nav";
import Home from "./components/home/Home";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/users"} element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
