import React from 'react'
import CSSModules from 'react-css-modules';
import styles from '../../styles/header.css'

const Header = (props) => {
  let signComponent = (props.signStatus) ?
    <a href="#">profile</a> :
    <span><a href="#">sign in</a>
    <a href="#">sign out</a></span>;
  return <nav>
      <a href="#">PROJECT A</a>
        <form><input type="text"/></form>
      <a href="#">Catalog</a>
      { signComponent }
  </nav>    
}

export default CSSModules(Header, styles, {allowMultiple: true});
