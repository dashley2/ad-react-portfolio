import React from "react";

const determineActiveClass = (currentPage, pageName) =>
  `nav-link ${currentPage === pageName ? "active" : "nav-link"}`;
const pageName = ["About", "Projects", "Resume", "Contact"];

function Header({ currentPage, handlePageChange }) {
  return (
    <header className="header" id="header">
      <h2>Ashley Darr</h2>
      <nav>
        <ul>
          {pageName.map((pageName) => {
            return (
              <li className="links" key={pageName}>
                <a
                  href={`#${pageName.toLowerCase()}`}
                  onClick={() => handlePageChange(pageName)}
                  className={determineActiveClass(currentPage, pageName)}>
                  {pageName}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;