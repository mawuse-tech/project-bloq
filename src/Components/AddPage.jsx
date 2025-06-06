import React, { useState } from 'react';
import { useOutletContext } from 'react-router';

const AddPage = () => {
    const { bloqs, setBloqs } = useOutletContext();
    const [input, setInput] = useState("");
    const [textarea, setTextarea] = useState("");

    const addBloqs = (title, description) => {
        const newBloqs = {
            id: bloqs.length + 1,
            tit: title,
            des: description,
        };
        setBloqs(prev => [...prev, newBloqs]);
        alert('bloq added succesfully')
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() !== "" && textarea.trim() !== "") {
            addBloqs(input, textarea);
            setInput("");      // Clear input
            setTextarea("");   // Clear textarea
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
            >
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-4"> Add a New Bloq</h2>

                <input
                    type="text"
                    placeholder="Enter title"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <textarea
                    placeholder="Enter description"
                    value={textarea}
                    onChange={(e) => setTextarea(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>

                <button
                    type="submit"
                    className="w-full bg-amber-900 text-white font-semibold py-2 px-4 rounded hover:bg-amber-800 transition duration-200"
                >
                    Add A Bloq
                </button>
            </form>
        </div>
    );
};

export default AddPage;
