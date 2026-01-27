import { useState, useEffect } from 'react';
import './App.css';

import Header from './Components/Header';
import Todos from './Components/Todos';
import Footer from './Components/Footer';
import AddTodo from './Components/AddTodo';
import About from './Components/About';
import Welcome from './Components/Welcome';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  /* ================================
     NEW CHANGE – 27 Jan 2026
     App boot control (prevents UI flash)
  ================================== */
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("username");

    if (storedUser) {
      setUser(storedUser);
    }

    setLoading(false); // app is ready
  }, []);

  /* ================================
     LOAD TODOS FROM LOCAL STORAGE
  ================================== */
  const initialTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

  const [todos, setTodos] = useState(initialTodos);

  /* ================================
     DELETE TODO
  ================================== */
  const onDelete = (todo) => {
    const updatedTodos = todos.filter((e) => e.sno !== todo.sno);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  /* ================================
     ADD TODO
  ================================== */
  const addTodo = (todo) => {
    const sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;

    const myTodo = {
      sno,
      title: todo.title,
      desc: todo.desc,
      active: true,
    };

    const updatedTodos = [...todos, myTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  /* ================================
   NEW CHANGE – 27 Jan 2026
   Toggle todo completion
================================== */
  const toggleTodo = (sno) => {
    const updatedTodos = todos.map((todo) =>
      todo.sno === sno
        ? { ...todo, active: !todo.active }
        : todo
    );

    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  /* ================================
   NEW CHANGE – 27 Jan 2026
   Update todo (edit)
================================== */
  const updateTodo = (updatedTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo.sno === updatedTodo.sno ? updatedTodo : todo
    );

    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };


  /* ================================
     Prevent rendering until ready
  ================================== */
  if (loading) {
    return null; // or loader later
  }

  return (
    <div className="app-wrapper">
      <Router>
        {!user ? (
          <Welcome onLogin={setUser} />
        ) : (
          <>
            <Header title={`Hola, ${user} ✨`} />

            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <AddTodo addTodo={addTodo} />
                    <Todos
                      todos={todos}
                      onDelete={onDelete}
                      onToggle={toggleTodo}
                      onUpdate={updateTodo}
                    />
                  </>
                }
              />
              <Route path="/about" element={<About />} />
            </Routes>

            <Footer />
          </>
        )}
      </Router>
    </div>
  );

}

export default App;
