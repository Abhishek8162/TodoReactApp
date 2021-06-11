import React from 'react'
import './todos.css';
import proptype from 'prop-types';

export default function todoitem({todo}) {
    return(
        <div>
    <h4>
     {todo.sno}
     {todo.title}
     {todo.time}
     
</h4>
<button>Delete</button>

</div>


    );
    
}
