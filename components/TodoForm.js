"use client";
import { useState } from "react";
import { db, collection, addDoc } from "../lib/firebase";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title || !description || !dueDate) {
      alert("Please fill all fields");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "todos"), {
        title,
        description,
        dueDate,
        createdAt: new Date(),
      });

      alert("Todo added successfully!");
      setTitle("");
      setDescription("");
      setDueDate("");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error saving todo");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2>Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
