import React, { useState } from 'react';
import classes from './TodoList.module.css';
import TodoItem from '../item/TodoItem';

const TodoList = ({todos, remove, replace}) => {
    const [dragIndex, setDragIndex] = useState(null);
    const dragStartHandler = (e, item, i) => {
        /*console.log('drag', item);*/
        setDragIndex(i);
        /*console.log(i);*/
    };
    const dragEndHandler = (e) => {

    };
    const dragOverHandler = (e) => {
        e.preventDefault();
    };
    const dropHandler = (e, item, i) => {
        e.preventDefault();
        /*console.log('drop', item);
        console.log(i);*/
        replace(dragIndex, i);
    };
    return (
        <div className={classes.table}>
            {
                todos.length !== 0 
                ? <div className={classes.table__head}>
                    <span className={classes.indexator}>#</span>
                    <span className={classes.title}>todo</span>
                  </div>
                : <div className={classes.table__head}>
                    <span className={classes.void}>Как-то здесь пусто... Давайте придумаем, чем займемся сегодня?</span>
                  </div>
            }
            {todos.map((item, i) => 
                <TodoItem 
                    onDragStart={(e) => dragStartHandler(e, item, i)}
                    onDragLeave={(e) => dragEndHandler(e)}
                    onDragEnd={(e) => dragEndHandler(e)}
                    onDragOver={(e) => dragOverHandler(e)}
                    onDrop={(e) => dropHandler(e, item, i)}
                    draggable={true} 
                    remove={remove} 
                    number={i + 1} 
                    item={item} 
                    key={item.id}
                />
            )}
        </div>
    );
};

export default TodoList;