import React, { useState } from "react";

const Content_Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    isOpen === false ? setIsOpen(true) : setIsOpen(false);
  };

  return (
    <>
      <div className="content_container">
        <button
          className={isOpen === true ? "active-navbar" : "inactive-navbar"}
          onClick={toggle}
        >
          Contents
        </button>
      </div>
      {isOpen === true && <div className="dropdown_container">
        <a href="#">About</a>
        <a href="#">Work</a>
      </div> }
    </>
  );
};

export default Content_Navbar;
