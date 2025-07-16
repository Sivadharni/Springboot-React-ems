import { useEffect, useState } from "react";
import axios from "axios";

const GetEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const token = localStorage.getItem("token");
  
  // Fix: Handle role properly
  const rawRole = localStorage.getItem("role");
  const role = rawRole?.includes("ROLE_ADMIN") ? "ROLE_ADMIN" : "ROLE_USER";

  useEffect(() => {
    console.log("Role from localStorage:", localStorage.getItem("role"));
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:8080/employee", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setEmployees(response.data);
      } catch (err) {
        console.error("Error fetching employees", err);
        alert("Unauthorized or Error fetching data");
      }
    };
    fetchEmployees();
  }, [token]);

  const handleDelete = async (empId) => {
    try {
      await axios.delete(`http://localhost:8080/employee/${empId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setEmployees(employees.filter((emp) => emp.empId !== empId));
      alert("Employee deleted successfully");
    } catch (err) {
      console.error("Error deleting employee", err);
      alert("Delete failed");
    }
  };

  const handleEdit = (emp) => {
    alert(`Edit clicked for ${emp.name} (functionality not implemented yet).`);
  };

  return (
    <div className="container mt-4">
      <h2>Employee List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            {role === "ROLE_ADMIN" && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.empId}>
              <td>{emp.empId}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              {role === "ROLE_ADMIN" && (
                <td>
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => handleEdit(emp)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(emp.empId)}
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetEmployees;
