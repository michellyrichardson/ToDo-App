import React, {useContext} from 'react';
import {TodoContext} from '../contexts/TodoContext';

const TodoDetails = ({list}) => {
    const {removeTodo, Todo} = useContext(TodoContext);

    

    return Todo.length? (
        <li className="flex-container">
            <div className="TList">{list?.List}</div>
            <button onClick={()=>{removeTodo(list?.id)}} 
            className="button">Delete</button>
        </li>
    ) : (
        <div></div>
    );
}
export default TodoDetails;