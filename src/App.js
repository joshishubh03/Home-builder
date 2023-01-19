import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup.js";
import Home from "./components/Home.js";
function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Signup/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
