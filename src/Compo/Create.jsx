import React, { useState } from 'react';
// import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';


const Create = (props) => {

    const [note, setNote] = useState({
        title: '',
        content: '',
    });

    const changeEvent = (event) => {

        const { name, value } = event.target;

        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            }
        });

    }

    const addBtn = () => {
        props.passNote(note);
        setNote({
            title: '',
            content: '',
        })
    }


    return (
        <>
            <div className="main_note">
                <form>
                    <input type="text"
                        placeholder="Title"
                        value={note.title}
                        onChange={changeEvent}
                        name="title" />

                    <textarea
                        rows=""
                        column=""
                        placeholder="Write a note.."
                        value={note.content}
                        onChange={changeEvent}
                        name="content"></textarea>

                    <IconButton aria-label="add" disabled={!note.title}>
                        <AddCircleIcon className="plus_sign" onClick={addBtn} />
                    </IconButton>
                </form>
            </div>
        </>
    )
}

export default Create;