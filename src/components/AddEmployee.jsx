import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
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
    const req = await axios.post("https://springboot-securitycases-hosting-1.onrender.com/api/auth/register", {
      name,
      email,
      password,
      userName,
      roleNames: roleArray,
    });
    console.log(req);
    if (req.data) {
      alert(req.data);
      navigate("/")

    } else {
      alert("Error during Sign up");
    }
  }
  return (
    <section>
      <h2>Add an Employee</h2>
      <div>
        <form onSubmit={addNewEmployee}>
          <label htmlFor="name">Employee Name : </label>
          <input
            type="text"
            id="name"
            name={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            id="name"
            name={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="username">Username :</label>
          <input
            type="text"
            id="name"
            name={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            id="name"
            name={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="roleNames">Roles : </label>
          <input
            type="text"
            id="roleNames"
            name={roleNames}
            onChange={(e) => setRoles(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Add Employee</button>
        </form>
      </div>
    </section>
  );
};
export default AddEmployee;