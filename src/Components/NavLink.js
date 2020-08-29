import React from 'react';

const NavLink = (props) => {
  const onClick = props.onClick;

  return(
    <React.Fragment>
      <li>
        <a href={props.link} onClick={onClick}>{props.children}</a>
      </li>
    </React.Fragment>
  )
}

export default NavLink;