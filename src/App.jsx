import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import GetEmployees from "./components/GetEmployees";
import AddEmployee from "./components/AddEmployee";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/addemployee" element={<AddEmployee />} />
      <Route path="/employees" element={<GetEmployees />} />
      <Route path="/register" element={<Signup />} />
    </Routes>
  </Router>
);

export default App;