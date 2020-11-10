import React from 'react';
import newStyles from './../Dialogs.module.css';


const Message = (props) => {
    return <div className={newStyles.messages}>{props.message}</div>
}


export default Message;