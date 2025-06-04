import React, { useState } from 'react'
import { useOutletContext } from 'react-router'

const AddPage = () => {

    const {bloqs, setBloqs} = useOutletContext();
    const [input, setInput] = useState("")
    const [textarea, setTextarea] = useState("")

    const addBloqs = (title, description) => {
        const newBloqs = {
            id: bloqs.length + 1,
            tit: title,
            des: description
        };
        setBloqs(prev => [...prev, newBloqs])
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() != "" && textarea.trim() != "") {
            addBloqs(input, textarea)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder='input a text'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                <textarea
                    value={textarea}
                    placeholder="input something"
                    onChange={(e) => setTextarea(e.target.value)}
                ></textarea>

                <button type='submit'>Add A Bloq</button>

            </form>
        </div>
    )
}

export default AddPage