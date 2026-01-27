import React, { useState } from "react";

const Welcome = ({ onLogin }) => {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim()) {
            alert("Please enter your name 😊");
            return;
        }

        localStorage.setItem("username", name);
        onLogin(name);
    };

    return (
        <div className="welcome-bg">
            <div className="welcome-card animate-fade">
                <h1 className="display-4 fw-bold mb-3">
                    Hey there 👋
                </h1>

                <p className="lead text-muted mb-4">
                    Let’s plan your day and build momentum.
                </p>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="What should we call you?"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <button className="btn btn-dark btn-lg w-100">
                        Enter Your Space →
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Welcome;
