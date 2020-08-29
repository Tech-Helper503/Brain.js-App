import React from 'react';
import NavLink from '../Components/NavLink';

const NavLinkListBuilder = (props) => {
  const navLinkListLength = props.navLinkListLength;
  const links = props.links;
  const linkContents = props.linkContents;
  const onCliks = props.onCliks;

  for(let link in links){
    if(typeof link === "number"){
      continue;
    }else{
      parseInt(link,10);
    }
  }



  for(let i = 0; i <  navLinkListLength;i++){
    return(
      <React.Fragment>
        <NavLink link={links[i]} onCliks={onCliks[i]}>{linkContents[i]}</NavLink>
      </React.Fragment>
    )
  }

  
}

export default NavLinkListBuilder;