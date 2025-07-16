import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUsername] = useState("");
  const [roleNames, setRoles] = useState("");

  async function addNewEmployee(e) {
    e.preventDefault();
    const roleArray = roleNames.split(",").map((role) => role.trim());
    try {
      const req = await axios.post("http://localhost:8080/api/auth/register", {
        name,
        email,
        password,
        userName,
        roleNames: roleArray,
      });
      console.log(req);
      alert(req.data || "Registered Successfully");
       navigate("/employees");
    } catch (error) {
      console.error("Signup Error", error);
      alert("Error during Sign up");
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">
              <h2>Register</h2>
            </div>
            <div className="card-body">
              <form onSubmit={addNewEmployee}>
                <div className="mb-3">
                  <label>Employee Name</label>
                  <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label>Username</label>
                  <input type="text" className="form-control" value={userName} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label>Password</label>
                  <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label>Roles (comma separated)</label>
                  <input type="text" className="form-control" value={roleNames} onChange={(e) => setRoles(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary w-100">Sign Up</button>
              </form>
              <p className="mt-3 text-center">
                Already a user? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
