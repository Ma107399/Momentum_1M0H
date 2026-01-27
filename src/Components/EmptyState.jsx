import React from "react";

const EmptyState = () => {
    return (
        <div className="empty-state animate-fade">
            <h2 className="fw-bold mb-2">
                What's your first task today? ✨
            </h2>

            <p className="text-muted mb-3">
                Start small. Momentum builds faster than motivation.
            </p>

            <div className="empty-icon">
                🚀
            </div>
        </div>
    );
};

export default EmptyState;
