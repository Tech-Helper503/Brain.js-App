import React from 'react';
import '../styles.css';

const NavLinkList = (props) => {
  return(
    <React.Fragment>
      <ul className="nav-links">{props.children}</ul>
    </React.Fragment>
  );
}

export default NavLinkList;