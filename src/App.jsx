import "./App.css";
import { Routes, Route } from "react-router-dom";
import FrontPage from "../components/FrontPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
    </Routes>
  );
}

export default App;
