import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { red } from '@material-ui/core/colors';

const Note = (props) => {

    const deleteNote = () => {
        return (props.deleteItem(props.id));
    }

    return (
        <>
            <div className="main">
                <div className="note">
                    <h1>{props.title}</h1>
                    <br />
                    <p>{props.content}</p>
                    <br />
                    <IconButton aria-label="delete" style={{ color: red[500] }} onClick={deleteNote} className="deleteIcon"><DeleteIcon /></IconButton>
                </div>
            </div>
        </>
    );
}

export default Note;
