import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const Navbar = () => {
    const {Todo} = useContext(TodoContext)
    
    return(
        <div className="navbar">
            <div>
                <h1>My ToDo App</h1>                
                
            </div>
            <h>You have {Todo.length} remaining activities</h>
        </div>
    )
}
export default Navbar;