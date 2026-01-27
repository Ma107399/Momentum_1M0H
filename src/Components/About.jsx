import React from "react";

const About = () => {
    return (
        <div className="container my-5">
            <div className="about-card animate-fade">
                <h2 className="fw-bold mb-3">About This App</h2>

                <p className="text-muted mb-4">
                    This is a modern productivity app built as a learning project to
                    explore React, component-driven UI, and real-world frontend patterns.
                </p>

                <h5 className="fw-semibold mt-4">✨ What you can do</h5>
                <ul className="about-list">
                    <li>Add, edit, and delete tasks</li>
                    <li>Mark tasks as completed</li>
                    <li>Enjoy smooth animations and clean UI</li>
                    <li>Experience a personalized welcome flow</li>
                </ul>

                <h5 className="fw-semibold mt-4">🛠 Tech Stack</h5>
                <ul className="about-list">
                    <li>React (Hooks & Functional Components)</li>
                    <li>Vite (Fast build tool)</li>
                    <li>Bootstrap 5 + Custom CSS</li>
                    <li>LocalStorage for persistence</li>
                </ul>

                <p className="text-muted mt-4 mb-0">
                    Built with ❤️ as part of a continuous learning journey.
                </p>
            </div>
        </div>
    );
};

export default About;
