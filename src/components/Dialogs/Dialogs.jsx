import React from 'react';
import s from './Dialogs.module.css';


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Alex
                </div>
                <div className={s.dialog}>
                    Evjeniya
                </div>
                <div className={s.dialog}>
                    Dina
                </div>
                <div className={s.dialog}>
                    Vlad
                </div>
                <div className={s.dialog}>
                    Ruslan
                </div>
                <div className={s.dialog}>
                    Friend
                </div>
            </div>
        <div className={s.messages}>
           <div className={s.message}>Hi</div>
            <div className={s.message}>How are you?</div>
            <div className={s.message}>Yo</div>
        </div>
    </div>
    )
}

export default Dialogs;