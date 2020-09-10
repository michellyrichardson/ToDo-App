import React, {useState, useContext} from 'react';
import {TodoContext} from '../contexts/TodoContext';

const NewTodo = () => {
    const {addTodo} = useContext(TodoContext);
    const [List, setList] = useState('');
    const [Time, setTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(title, author);
        addTodo(List);
        setList('');
        //setTime('');
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="What r u up today?" value={List}
                onChange={(e) => setList(e.target.value)} />

            <input type="submit" value="Add" />
        </form>
    );
}
export default NewTodo;