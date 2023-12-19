import React from "react";
import { Content_Navbar } from "components/Navbar";
import { Contact_Sidebar } from "components/Sidebar";

function HomePage() {
  return (
    <>
      <div className="homepage_container">
        <div className="inner_container">
          <div className="left_container">
            <Content_Navbar />
            <Homepage_text />
          </div>
          <Contact_Sidebar />
        </div>
      </div>
    </>
  );
}

function Homepage_text() {
  return (
    <>
      <div className="homepage_text">
        <div>
          <h1>Hello world!</h1>
          <span>I'm Jean</span>
          <p>
            I&apos;m the code-slinger turning caffeine into pixel-perfect
            dreams. Join me on a quick journey through my digital realm &#x2D;
            where every click tells a joke and bugs are just shy features in
            disguise!
          </p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
