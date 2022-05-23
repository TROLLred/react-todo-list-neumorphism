import React, { useState } from 'react';
import classes from './MyForm.module.css';
import MyInput from '../input/MyInput';
import MyButton from '../button/MyButton';

const MyForm = ({add}) => {
    const [todo, setTodo] = useState('');
    const clearInput = (e) => {
        e.preventDefault();
        setTodo('');
    };
    const addNewTodo = (e) => {
        try {
            e.preventDefault();
            if(todo.trim().length === 0) {
                throw new Error('Вы ввели пустую строку');
            }
            if(todo.trim().length > 30) {
                throw new Error('Строка должна состоять не более чем из 30 сиволов');
            }
            const newTodo = {
                id: Date.now(),
                fixed: false,
                completed: false,
                body: todo
            };
            add(newTodo);
            setTodo('');
        } catch (err) {
            setTodo(err.message);
        }
    };
    return (
        <form className={classes.myForm}>
            <MyInput 
                value={todo}
                onChange={e => setTodo(e.target.value)}
                type='text' 
                placeholder='Что будем делать сегодня?'
            />
            <MyButton id={classes.sendBtn} onClick={addNewTodo}>
                <i className="fa-solid fa-angles-right"></i>
            </MyButton>
            <MyButton onClick={clearInput}>
                <i className="fa-solid fa-xmark"></i>
            </MyButton>
            <div className={classes.splitter}/>
        </form>
    );
};

export default MyForm;