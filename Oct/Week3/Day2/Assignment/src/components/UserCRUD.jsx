
import React, { useEffect, useState } from "react";
import axios from "axios";

function UserCRUD() {
  const API = "https://jsonplaceholder.typicode.com/users";

  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.get(API);
      setUsers(res.data);
    } catch (error) {
      setError("Failed to fetch users.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");

      if (editingId !== null) {
        const res = await axios.put(
          `${API}/${editingId}`,
          formData
        );

        setUsers((prev) =>
          prev.map((user) =>
            user.id === editingId
              ? { ...user, ...formData }
              : user
          )
        );

        console.log("Updated user:", res.data);
        setEditingId(null);
      } else {
        const res = await axios.post(API, formData);

        const newUser = {
          ...formData,
          id: Date.now(),
        };

        setUsers((prev) => [...prev, newUser]);

        console.log("Created user:", res.data);
      }

      setFormData({ name: "", email: "" });
    } catch (error) {
      setError("Operation failed. Please try again.");
      console.log(error);
    }
  };

  const handleEdit = (user) => {
    setFormData({
      name: user.name,
      email: user.email || "",
    });

    setEditingId(user.id);
  };

  const handleDelete = async (id) => {
    try {
      setError("");

      const res = await axios.delete(`${API}/${id}`);

      setUsers((prev) =>
        prev.filter((user) => user.id !== id)
      );

      console.log("Deleted successfully:", res.data);
    } catch (error) {
      setError("Failed to delete user.");
      console.log(error);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({ name: "", email: "" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Axios CRUD Operations</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {editingId !== null ? "Update User" : "Create User"}
        </button>

        {editingId !== null && (
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        )}
      </form>

      <hr />

      <h2>All Users</h2>

      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading &&
        users.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid gray",
              padding: "12px",
              marginBottom: "10px",
            }}
          >
            <h3>{user.name}</h3>
            <p>{user.email}</p>

            <button onClick={() => handleEdit(user)}>
              Edit
            </button>

            <button onClick={() => handleDelete(user.id)}>
              Delete
            </button>
          </div>
        ))}
    </div>
  );
}

export default UserCRUD;
