import React, { useState } from 'react';
import axios from 'axios';
import { FiAlertTriangle } from "react-icons/fi";

function Attendance({name}) {
    // const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [location, setLocation] = useState('');
    const [area, setArea] = useState('Select');
    const [message, setMessage] = useState('');
    // const [dateTime, setDateTime] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Set current date and time
        // const currentDateTime = new Date().toLocaleString(); 
        // setDateTime(currentDateTime);

        const registrationData = {
            // name,
            id,
            location,
            area,
            // dateTime: currentDateTime,
        };

        try {
            const response = await fetch('http://localhost:3030/api/present', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registrationData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const present = await response.json();
            // setName('');
            setId('');
            setLocation('');
            setArea('Select');
            setMessage('Successfully submitted to attendance present');
        } catch (error) {
            setMessage('Failed to add attendance present');
        }
    };

    setTimeout(() => {
        setMessage('');
    }, (5000));

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    const address = await reverseGeocode(latitude, longitude);
                    setLocation(address);
                },
                (error) => {
                    if (error.code === 1) {
                        alert("Please allow location access for this feature.");
                    }
                }
            );
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    const reverseGeocode = async (lat, lon) => {
        try {
            const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
            return response.data.display_name;
        } catch (error) {
            return "Location not found";
        }
    };

    return (
        <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 p-10'>
            <form
                className='flex flex-col items-center justify-center p-10 gap-5 bg-white rounded-lg shadow-lg w-96'
                onSubmit={handleSubmit}
            >
                <h2 className='text-2xl font-semibold text-center text-gray-700'>Attendance Registration</h2>

                <label htmlFor="name" className='w-full'>
                    <span className='block text-gray-600 mb-1'>Name</span>
                    {/* <input
                        type="text"
                        id='name'
                        value={name}
                        placeholder='Enter your Name'
                        onChange={(e) => setName(e.target.value)}
                        className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
                    /> */}
                    <h1 
                    className='w-full p-2 shadow rounded text-center font-bold font-serif text-2xl uppercase '>
                        {name}
                        </h1>
                </label>

                <label htmlFor="id" className='w-full'>
                    <span className='block text-gray-600 mb-1'>ID</span>
                    <input
                        type="number"
                        id="id"
                        value={id}
                        placeholder='Enter your ID'
                        className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
                        onChange={(e) => setId(e.target.value)}
                    />
                </label>

                <label htmlFor="location" className='w-full'>
                    <span className='block text-gray-600 mb-1'>Location</span>
                    <input
                        type="text"
                        id="location"
                        value={location}
                        placeholder='Click to get your Location'
                        className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
                        onFocus={getLocation}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </label>

                <label htmlFor="area" className='w-full'>
                    <span className='block text-gray-600 mb-1'>Select Your Area</span>
                    <select
                        name="area"
                        id="area"
                        value={area}
                        className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
                        onChange={(e) => setArea(e.target.value)}
                    >
                        <option value="Select" disabled={area !== "Select"}>Select your Area</option>
                        <option value="location-1">Location 1</option>
                        <option value="location-2">Location 2</option>
                        <option value="location-3">Location 3</option>
                    </select>
                </label>

                <button
                    type="submit"
                    className='w-full py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-200'
                >
                    Register
                </button>
                {
                    message &&
                    <p className='flex items-center gap-3 text-center text-red-500'>
                        {message}
                        <FiAlertTriangle
                            className='text-3xl' />
                    </p>
                }
            </form>
        </div>
    );
}

export default Attendance;
