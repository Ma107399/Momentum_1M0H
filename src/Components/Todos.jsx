import React from "react";
import TodoItems from "./TodoItems";
import EmptyState from "./EmptyState";

const Todos = ({ todos, onDelete, onToggle, onUpdate }) => {
  const activeTodos = todos.filter((todo) => todo.active);
  const completedTodos = todos.filter((todo) => !todo.active);

  return (
    <div className="container my-4">
      {todos.length === 0 && <EmptyState />}

      {activeTodos.length > 0 && (
        <>
          <h4 className="mb-3">Active Tasks</h4>
          {activeTodos.map((todo) => (
            <TodoItems
              key={todo.sno}
              todo={todo}
              onDelete={onDelete}
              onToggle={onToggle}
              onUpdate={onUpdate}
            />
          ))}
        </>
      )}

      {completedTodos.length > 0 && (
        <>
          <h4 className="mt-4 mb-3 text-muted">Completed</h4>
          {completedTodos.map((todo) => (
            <TodoItems
              key={todo.sno}
              todo={todo}
              onDelete={onDelete}
              onToggle={onToggle}
              onUpdate={onUpdate}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Todos;
