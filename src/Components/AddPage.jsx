import axios from 'axios';
import React, { useState } from 'react';
import { useOutletContext } from 'react-router';

const AddPage = () => {
    const { setBloqs, API_URL, setLoading } = useOutletContext();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    async function handleSubmit(e) {
        e.preventDefault();
        if (title.trim() !== "" && description.trim() !== "") {
            try {
                setLoading(true);

                const res = await axios.post(API_URL, { title, description });
                // setBloqs(prev => [...prev, res.data])

                setTitle("");      // Clear input
                setDescription("");   // Clear textarea

                setLoading(false);

            } catch (error) {
                console.log(error)
            }
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
                    name='title'
                    placeholder="Enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <textarea
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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
