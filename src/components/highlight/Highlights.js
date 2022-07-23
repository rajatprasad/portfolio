import React from "react";
import "./highlights.css";

const Highlights = () => {
  return (
    <div className="highlights">
      <h3 className="highlights__title">Highlights</h3>
      <ul className="highlights__list">
        <li>
          <a
            href="https://github.com/rajatprasad"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live/Local Github Repos
          </a>

          <span className="highlights__newTag">New</span>
        </li>
        <li>Story page</li>
        <li>
          <a href="#skills">Tech Stack</a>
        </li>
        <li>Achivements</li>
      </ul>
    </div>
  );
};

export default Highlights;
