import React from "react";

const LeftSideBar = () => {
  return (
    <div className="left-sidebar">

      <div className="sidebar-header">Webcloud</div>
      <ul className="sidebar-subsections">
        <li><a href="/webcloud">Webcloud</a></li>
        <li><a href="/how-to-connect">How to connect?</a></li>
      </ul>
      {/* <div className="sidebar-header">Blogs</div>
      <ul className="sidebar-subsections">
        <li>quickstart</li>
        <li>frontend</li>
        <li>backend</li>
        <li>database</li>
        <li>aws</li>
      </ul>
      <div className="sidebar-header">Talks</div>
      <ul className="sidebar-subsections">
        <li>chat</li>
        <li>...</li>
      </ul> */}

      <div className="sidebar-header">About</div>
      <ul className="sidebar-subsections">
        <li><a href="/about">Who am I?</a></li>
        <li><a href="/contact">Contact me</a></li>
      </ul>
    </div>
  );
};

export default LeftSideBar;
