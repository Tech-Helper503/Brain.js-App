import React from 'react';
import range from '../Functions/range';
import '../styles.css'

const TextA = (props) => {
  const fontsize = props.fontsize;
  getComputedStyle(HTMLFontElement).fontSize = 30;

  return(
    <h1>{props.children}</h1>
  )
}