import React, { useState } from 'react'

const AddCardForm = () => {
    const [formData, setFromData] = useState({
        name: "",
        city: "",
        state: "",
        description: "",
        location: "",
        image: ""
    })
    function changeHandler(event) {
        const { name, value } = event.target;
        setFromData({
            ...formData,
            [name]: value
        })
    }
    function submitHandler(e) {
        e.preventDefault();
        console.log(formData);
    }
    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6 text-center">Add a New Card</h2>
            <form onSubmit={submitHandler} className="bg-white shadow-lg rounded-lg p-8">
                <div className="mb-4">
                    <label for="title" className="block text-gray-700 text-sm font-semibold mb-2">Place Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        placeholder="Enter the place name"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-4">
                    <label for="category" className="block text-gray-700 text-sm font-semibold mb-2">City</label>
                    <input type="text" name="city" value={formData.city} placeholder="Enter the city" onChange={changeHandler} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div className="mb-4">
                    <label for="category" className="block text-gray-700 text-sm font-semibold mb-2">State</label>
                    <input type="text" name="state" value={formData.state} placeholder="Enter the state" onChange={changeHandler} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div className="mb-4">
                    <label for="full-description" className="block text-gray-700 text-sm font-semibold mb-2">Full Description</label>
                    <textarea name="description" value={formData.description} placeholder="Enter a full description" onChange={changeHandler} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                </div>



                <div className="mb-4">
                    <label for="location" className="block text-gray-700 text-sm font-semibold mb-2">Location</label>
                    <input type="text" name="location" value={formData.location} placeholder="Enter the location" onChange={changeHandler} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>

                <div className="mb-4 p-2">
                    <label for="image-upload" className="block text-gray-700 text-sm font-semibold mb-2">Choose Image</label>
                    <input type="file" name="image" value={formData.image} accept="image/*" onChange={changeHandler} className="w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>

                <button type="submit" className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">Submit</button>
            </form>
        </div>
    )
}

export default AddCardForm