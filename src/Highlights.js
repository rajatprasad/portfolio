import React from "react";
import "./highlights.css";

const Highlights = () => {
  return (
    <div className="highlights">
      <h3 className="highlights__title">Highlights</h3>
      <ul className="highlights__list">
        <li>
          Live/Local Github Repos
          <span className="highlights__newTag">New</span>
        </li>
        <li>Story page</li>
        <li>Tech Stack</li>
        <li>Achivements</li>
      </ul>
    </div>
  );
};

export default Highlights;
