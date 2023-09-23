import React from "react";
import "./Home.css";
import { useState } from "react";
import Task from "../../components/Task/Task";

const Home = () => {
  const [keeplist, setKeeplist]= useState([
    {
      id: 1,
      title: "keep your tasks",
      description: "tasks Description",
      priority: "highest priority",
      time: "12:00:00"
    },
    {
      id: 1,
      title: "keep your tasks",
      description: "tasks Description",
      priority: "highest priority",
      time: "12:00:00"
    },
    {
      id: 1,
      title: "keep your tasks",
      description: "tasks Description",
      priority: "highest priority",
      time: "12:00:00"
    },
    {
      id: 1,
      title: "keep your tasks",
      description: "tasks Description",
      priority: "highest priority",
      time: "12:00:00"
    }
  ]);
  return (
    <>
      <div className="container">
        <h1 className="app-title">Title</h1>
        <div className="keep-flex-container">
          <div className="keep-flex scroll-cont">
            <h2 className="list-group-item">Keep-Tasks</h2>
            <div className="list-group">
            {
              keeplist.map((taskitem, index) => {
                const {id, title, description, priority, time} = taskitem;
                return <Task id={id} title={title} description={description} priority={priority} time={time} />
              })
            }
            </div>
          </div>

          <div className="keep-flex">
            <h2 className="list-group-item">Add-Tasks</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
