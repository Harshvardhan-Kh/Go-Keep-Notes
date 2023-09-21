import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <h1 className="app-title">Title</h1>
        <div className="keep-flex-container">
          <div className="keep-flex">
            <h2 className="list-group-item">Keep-Tasks</h2>
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
