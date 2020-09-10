import React, {createContext ,useState} from 'react';
//import uuid from 'uuid/v1'
import { v4 as uuidv4 } from 'uuid';
export const TodoContext = createContext();

const TodoContextProvider = (props) =>{
    const[Todo, setTodo] = useState([
        {List:"Walking", id: 1},
        {List:"Workout", id: 2},
    ]);

    const addTodo = (List) => {
        setTodo([...Todo, {List}]);
    }

    const removeTodo = (id) =>{
        setTodo(Todo.filter(list => list.id !== id));
    }
    
    return(
        <TodoContext.Provider value = {{Todo, addTodo, removeTodo}}>
            {props.children}
        </TodoContext.Provider>
    )
}
export default TodoContextProvider;