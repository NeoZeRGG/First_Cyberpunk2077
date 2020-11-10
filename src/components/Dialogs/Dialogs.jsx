import React from 'react';
import newStyles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = () => {

    let dialogs = [
        {id: 1, name: "Alex"},
        {id: 2, name: "Evjeniya"},
        {id: 3, name: "Dina"},
        {id: 4, name: "Vlad"},
        {id: 5, name: "Ruslan"},
        {id: 6, name: "Friend"}
    ];

    let messages = [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How is everything goes?"},
        {id: 3, message: "Yo!"},
        {id: 4, message: "Yo!"},
        {id: 5, message: "Yo!"},
    ];

    let dialogsElements = dialogs
        .map(d => <DialogItem name = {d.name} id={d.id} />);

    let messagesElements = messages
        .map( m => <Message message={m.message} />);

    return (
        <div className={newStyles.dialogs}>
            <div className={newStyles.dialogsItems}>
                {dialogsElements}
            </div>

        <div className={newStyles.messages}>
            {messagesElements}
        </div>
    </div>
    )
}

export default Dialogs;