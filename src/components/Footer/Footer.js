import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-body">
          <div className="footer-text">
            <p className="footer-github-link">
              {" "}
              <a href="https://github.com/Harshvardhan-Kh/Go-Keep-Notes.git">
                Created By @Harshvardhan Kh.{" "}
                <i className="fa-brands fa-github"></i>
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
