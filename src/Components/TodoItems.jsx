import React, { useState } from "react";

const TodoItems = ({ todo, onDelete, onToggle, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [desc, setDesc] = useState(todo.desc);

  const handleSave = () => {
    if (!title.trim() || !desc.trim()) {
      alert("Fields cannot be empty");
      return;
    }

    onUpdate({
      ...todo,
      title: title.trim(),
      desc: desc.trim(),
    });

    setIsEditing(false);
  };

  const handleDelete = () => {
    setIsDeleting(true);

    // Wait for animation to finish
    setTimeout(() => {
      onDelete(todo);
    }, 300);
  };

  return (
    <div
      className={`todo-card 
        ${!todo.active ? "completed" : ""} 
        ${isDeleting ? "deleting" : ""}`}
    >
      {!isEditing ? (
        /* VIEW MODE */
        <div className="d-flex align-items-start gap-3">
          <input
            type="checkbox"
            checked={!todo.active}
            onChange={() => onToggle(todo.sno)}
            className="todo-checkbox"
          />

          <div className="flex-grow-1">
            <h5 className="mb-1">{todo.title}</h5>
            <p className="mb-0 text-muted">{todo.desc}</p>
          </div>

          <div className="todo-actions">
            <button
              className="icon-btn"
              title="Edit"
              onClick={() => setIsEditing(true)}
            >
              ✏️
            </button>
            <button
              className="icon-btn"
              title="Delete"
              onClick={handleDelete}
            >
              🗑
            </button>
            <button className="icon-btn" title="Share (coming soon)">
              🔗
            </button>
          </div>
        </div>
      ) : (
        /* EDIT MODE */
        <div className="edit-mode">
          <input
            type="text"
            className="form-control mb-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="form-control mb-3"
            rows="2"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />

          <div className="d-flex gap-2 justify-content-end">
            <button
              className="btn btn-sm btn-outline-secondary"
              onClick={() => {
                setTitle(todo.title);
                setDesc(todo.desc);
                setIsEditing(false);
              }}
            >
              Cancel
            </button>

            <button
              className="btn btn-sm btn-success"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItems;
