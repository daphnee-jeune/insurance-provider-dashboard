import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
