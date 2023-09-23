import React from "react";
import './Task.css';

const Task = ({id, title, description, priority, time}) => {
    return (
        <div className="task">
            <h2 className="task-title">{title}</h2>
            <p className="task-description">{description}</p>
            <span className="task-priority">{priority}</span>
            <p className="task-time">{time}</p>
        </div>
    )
}

export default Task;