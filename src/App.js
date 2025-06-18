import { Route, Routes } from "react-router-dom";
import { Home } from "./Home.js";
import { Login } from "./Login.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;