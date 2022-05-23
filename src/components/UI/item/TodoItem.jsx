import React, { useState } from 'react';
import classes from './TodoItem.module.css';
import MyCheckbox from '../checkbox/MyCheckbox';
import MyButton from '../button/MyButton';

const TodoItem = (props) => {
    const [checked, setChecked] = useState(props.item.completed);
    const dynamic_classes = [classes.body];
    
    if(checked) {
        dynamic_classes.push(classes.done);
    }

    return (
        <div {...props} className={classes.listItem}>
            <p className={classes.index}>
                {props.number}
            </p>
            <MyCheckbox checked={checked} onChange={() => setChecked(!checked)}/>
            <div className={dynamic_classes.join(' ')}>
                <p>
                    {props.item.body}
                </p>
            </div>
            <MyButton onClick={() => props.remove(props.item)}>
                <i className="fa-solid fa-minus"></i>
            </MyButton>
        </div>
    );
};

export default TodoItem;