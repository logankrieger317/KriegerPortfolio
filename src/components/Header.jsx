import React from 'react';


const Header = (props) => {
 return (
    <header className="header">
      <h1>{props.title}</h1>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/">Who Am I?</a>
          </li>
          <li className="nav-item">
            <a href="/projects">Projects</a>
          </li>
          <li className="nav-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
 );
};

export default Header;



