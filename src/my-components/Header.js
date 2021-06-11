import React from 'react';
import './header.css';
import proptype from 'prop-types';

export default function Header() {
return(
<>
<div className="top"><h1>Todo App</h1></div>
<p>Welcome to my Application</p>

<h2>TO-DO</h2>

</>

);
}
 
Header.proptype=
{
    title: proptype.string
} 

Header.defaultProps=
{
    title: "HI the title is default "
    
}
