import React from "react";

const LeftSideBar = () => {
  return (
    <div className="left-sidebar">

      <div className="sidebar-header">Webcloud</div>
      <ul className="sidebar-subsections">
        <li><a href="/webcloud">webcloud</a></li>
      </ul>
      <div className="sidebar-header">Blogs</div>
      <ul className="sidebar-subsections">
        <li>Quickstart</li>
        <li>Frontend</li>
        <li>Backend</li>
        <li>Database</li>
        <li>AWS</li>
      </ul>
      <div className="sidebar-header">Talks</div>
      <ul className="sidebar-subsections">
        <li>Bard</li>
        <li>...</li>
      </ul>

    </div>
  );
};

export default LeftSideBar;
