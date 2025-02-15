import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Students from "./components/Students"
// import Tutors from "./components/Tutors"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/students" element={<Students />} />
        {/* <Route path="/tutors" element={<Tutors />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
