import React, { useState } from 'react'
import './EditableLabel.css'
const EditableLabel = (props) => {

    const {text, onChange, id }= props
    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState(text);

    function handleClick() {
        setEditing(true);
      
    }
    function handleChange(e) {
        setValue(e.target.value);
    }

    function handleBlur() {
        setEditing(false);
        if (value !== text) {
            onChange(id,value);
        }
        else{
            setEditing(false);
        }
    }
    return (
        <>
            <div onClick={handleClick}>
                {editing ? (
                    <input
                        type="text"
                        value={value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                ) : (
                    <span>{text}</span>
                )}
            </div>
        </>
    )
}

export default EditableLabel
