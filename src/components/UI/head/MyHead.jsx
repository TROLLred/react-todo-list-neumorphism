import React from 'react';
import classes from './MyHead.module.css';

const MyHead = () => {
    return (
        <div className={classes.head}>
            <h1 className={classes.title}>ToDo<span>.jsx</span></h1>
        </div>
    );
};

export default MyHead;