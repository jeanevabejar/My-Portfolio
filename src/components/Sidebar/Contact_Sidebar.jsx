import React from "react";

const Contact_Sidebar = () => {
  return (
    <div className="contact_container">
      <button className="github_link">
        <a href="https://github.com/jeanevabejar" target="_blank">Github</a>
      </button>
      <button className="linkedin_link">
        <a href="https://www.linkedin.com/in/jeanevabejar/" target="_blank">LinkedIn</a>
      </button>
      <div className="arrow_container">
        <span className="arrow"></span>
        <span className="arrow_up">▶︎</span>
      </div>
      <p className="contact_text">Contact me!</p>
    </div>
  );
};

export default Contact_Sidebar;
