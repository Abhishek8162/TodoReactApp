import React from 'react'
import './todos.css';
import Todoitem from './todo-item'
import proptype from 'prop-types';

export default function todos(props) {
    return(
<div className="container">

{props.todos.map((todo)=>
{ 
    return <Todoitem todo ={todo}/>
})}
    
</div>

    );
    
}
