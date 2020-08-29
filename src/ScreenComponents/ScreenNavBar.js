import React, { useState } from 'react';
import NavBar from '../Components/NavBar';
import NavLinks from '../Components/NavLinkList';
import NavLink from '../Components/NavLink';
import '../styles.css';
import TextA from '../styles.css';
import NavLinkListBuilder from '../Builders/NavLinkListBuilder';

const ScreenNavBar = (props) => {
  const numOfLinks = +props.numOfLinks;
  const fontsize = +props.fontsize;
  const [links,setLinks] = useState(["projects","contact"]);
  getComputedStyle(HTMLFontElement).fontSize = fontsize;
  
  const linkContents = [
    "Home",
    "Projects",
    "Contacts",
  ];

  return(
    <React.Fragment>
      <NavBar className="nav-bar" id="nav-bar-footer">
        <TextA fontSize="">{props.logotext}</TextA>
        <NavLinks className="nav-links">
          <NavLinkListBuilder links={links} numOfLinks={3} linkContents={}></NavLinkListBuilder>
        </NavLinks>
      </NavBar>
    </React.Fragment>
  );  
}

export default ScreenNavBar;