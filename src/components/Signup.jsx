import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUsername] = useState("");
  const [roleNames, setRoles] = useState("");
  const navigate = useNavigate();

  async function addNewEmployee(e) {
    e.preventDefault();
    const roleArray = roleNames.split(",").map((role) => role.trim());
    console.log(roleArray);
    const req = await axios.post(
      "https://springboot-securitycases-hosting-1.onrender.com/api/auth/register",
      {
        name,
        email,
        password,
        userName,
        roleNames: roleArray,
      }
    );
    console.log(req);
    if (req.data) {
      alert(req.data);
      navigate("/");
    } else {
      alert("Error during Sign up");
    }
  }

  return (
    <section className="container mt-5">
      <h2 className="text-center mb-4">Sign Up</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={addNewEmployee} className="p-4 border rounded shadow">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Employee Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="roleNames" className="form-label">Roles (comma separated)</label>
              <input
                type="text"
                className="form-control"
                id="roleNames"
                value={roleNames}
                onChange={(e) => setRoles(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">Sign Up</button>
          </form>

          <p className="mt-3 text-center">
            Already a user? <Link to="/">Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
