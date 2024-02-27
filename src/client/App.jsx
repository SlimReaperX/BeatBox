import {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import "./index.css"


function App() {


  return (
  
    <div>
      <Routes>
          <Route path ={"/users"} element={<User/>}/>
      </Routes>
      </div>
  )
}

export default App
