import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();

        if (!title.trim() || !desc.trim()) {
            alert("Please fill in both fields ✨");
            return;
        }

        addTodo({ title, desc });
        setTitle("");
        setDesc("");
    };

    return (
        <div className="container my-4">
            <div className="addtodo-card animate-fade">
                <h4 className="mb-3">Add a new task ✨</h4>

                <form onSubmit={submit}>
                    <input
                        type="text"
                        className="form-control form-control-lg mb-2"
                        placeholder="Task title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <textarea
                        className="form-control mb-3"
                        rows="2"
                        placeholder="Task details"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />

                    <button className="btn btn-primary w-100">
                        ➕ Add Task
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddTodo;
