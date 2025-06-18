import { Route, Routes } from "react-router-dom";
import { Home } from "./Home.js";
import { Login } from "./Login.js";
import AppLayout from "./layout/AppLayout.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout><Home /></AppLayout>} />
      <Route path="/login" element={<AppLayout><Login /></AppLayout>} />
    </Routes>
  );
}

export default App;