// import React, { useEffect, useRef, useState } from 'react';
// import { FaRegEdit } from "react-icons/fa";
// import { LiaUserEditSolid } from "react-icons/lia";
// import axios from 'axios';

// function Profile({ data, setData, profileId }) {
    
//         // const [data, setData] = useState({
//         //     name: '',
//         //     number: '',
//         //     dob: '',
//         //     place: '',
//         //     img: ''
//         // });
//         // const [profileId, setProfileId] = useState('');
//         // const [message, setMessage] = useState('');
//         const [editMode, setEditMode] = useState(false);
//   const [message, setMessage] = useState('');
//         const imageRef = useRef();
    
//         const handleInputChange = (e) => {
//             const { name, value } = e.target;
//             setData((prevData) => ({
//                 ...prevData,
//                 [name]: value
//             }));
//         };
    
//         const handleImageChange = (e) => {
//             const file = e.target.files[0];
//             if (file) {
//                 const imageUrl = URL.createObjectURL(file);
//                 setData((prevData) => ({
//                     ...prevData,
//                     img: file 
//                 }));
//             }
//         };
    
//         // useEffect(() => {
//         //     fetchData(); 
//         // }, []);
    
//         // const fetchData = async () => {
//         //     try {
//         //         const response = await axios.get('http://localhost:3030/pf/fetch');
//         //         if (response.data && response.data.length > 0) {
//         //             const profileData = response.data[0]; 
//         //             setData({
//         //                 name: profileData.name || '',
//         //                 number: profileData.number || '',
//         //                 dob: profileData.dob || '',
//         //                 place: profileData.place || '',
//         //                 img: profileData.img || ''
//         //             });
//         //             setProfileId(profileData._id);
//         //         } 
//         //     } catch (error) {
//         //         console.error('Error fetching profile:', error.message);
//         //         setMessage("Server error: failed to fetch data.");
//         //     }
//         // };
    
//         const handleSubmit = async (e) => {
//             e.preventDefault();
//             const formData = new FormData();
//             formData.append('name', data.name);
//             formData.append('number', data.number);
//             formData.append('dob', data.dob);
//             formData.append('place', data.place);
//             formData.append('img', data.img);
//             try {
//                 const response = profileId
//                     ? await axios.put(`http://localhost:3030/pf/pfedit/${profileId}`, formData, {
//                         headers: {
//                             'Content-Type': 'multipart/form-data'
//                         }
//                     })
//                     : await axios.post('http://localhost:3030/pf/pfcreate', formData, {
//                         headers: {
//                             'Content-Type': 'multipart/form-data'
//                         }
//                     });
//                 setData(response.data);
//                 // fetchData();
//                 // setProfileId(response.data._id);
//                 setEditMode(false);
//                 setMessage('Profile updated successfully!');
//             } catch (error) {
//                 setMessage('Failed to update your profile.');
//             }
//         };
    
//     return (
//         <div className='flex items-center justify-center bg-gradient-to-r from-lime-300 to-orange-400 p-5'>
//             <div className='flex flex-col items-center shadow rounded p-10 gap-1'>
//                 <div className="flex justify-end w-full -mr-5 -mt-5">
//                     <FaRegEdit
//                         className='w-5 text-red-500 hover:text-white cursor-pointer'
//                         onClick={() => setEditMode(true)}
//                     />
//                 </div>
//                 <div className="relative">
//                     {
//                         data.img ?
//                            ( 
//                            <img
//                             src={typeof data.img === 'string' ? `http://localhost:3030/uploads/${data.img}` : URL.createObjectURL(data.img)}
//                             alt="profile-picture"
//                                 className='w-36 h-36 rounded-full border-b-2 border-red-500 p-0.5 shadow'
//                             />
//                         ):(
//                              <img
//                              src='assets/logo.jpg'                           
//                                   alt="profile-picture"
//                                 className='w-36 h-36 rounded-full border-b-2 border-red-500 p-0.5 shadow'
//                             />
//                         )
//                     }
//                     {editMode && (
//                         <div 
//                         className="absolute bottom-5 right-3 bg-gray-600 rounded-full p-1" 
//                         onClick={() => imageRef.current.click()}
//                         >
//                             <LiaUserEditSolid 
//                             className='  text-white hover:cursor-pointer hover:text-red-700 text-2xl' />
//                         </div>
//                     )}
//                     <input
//                         type="file"
//                         accept='image/*'
//                         hidden
//                         onChange={handleImageChange}
//                         ref={imageRef}
//                     />
//                 </div>
//                 <form className='flex flex-col p-1 gap-5' onSubmit={handleSubmit}>
//                     <label htmlFor="name">Name
//                         <input
//                             type="text"
//                             name='name'
//                             id='name'
//                             value={data.name}
//                             disabled={!editMode}
//                             className={`flex font-extrabold p-2 shadow-xl rounded ${!editMode ? 'bg-stone-300' : ''}`}
//                             onChange={handleInputChange}
//                         />
//                     </label>
//                     <label htmlFor="number">Phone Number
//                         <input
//                             type="text"
//                             name='number'
//                             id='number'
//                             value={data.number}
//                             disabled={!editMode}
//                             className={`flex font-extrabold p-2 shadow-xl rounded ${!editMode ? 'bg-stone-300' : ''}`}
//                             onChange={handleInputChange}
//                         />
//                     </label>
//                     <label htmlFor="dob">Date of Birth
//                         <input
//                             type="date"
//                             name='dob'
//                             id='dob'
//                             value={data.dob}
//                             disabled={!editMode}
//                             className={`flex w-52 font-extrabold p-2 shadow-xl rounded ${!editMode ? 'bg-stone-300' : ''}`}
//                             onChange={handleInputChange}
//                         />
//                     </label>
//                     <label htmlFor="place">Work Place
//                         <input
//                             type="text"
//                             name='place'
//                             id='place'
//                             value={data.place|| ''}
//                             disabled={!editMode}
//                             className={`flex font-extrabold p-2 shadow-xl rounded ${!editMode ? 'bg-stone-300' : ''}`}
//                             onChange={handleInputChange}
//                         />
//                     </label>
                   
//                 {editMode && (
//                     <input
//                         type="submit"
//                         value="Save Changes"
//                         className="bg-green-500 text-white px-6 py-2 rounded-full cursor-pointer"
//                     />
//                 )}
//                 {message && 
//                 <p 
//                 className="text-center text-red-500 mt-4">
//                     {message}
//                     </p>}
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Profile;


// import React, { useEffect, useRef, useState } from 'react';
// import { FaRegEdit } from "react-icons/fa";
// import { LiaUserEditSolid } from "react-icons/lia";
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Updated import

// function Profile({ data, setData, setIsLoggedIn }) {
//     const [editMode, setEditMode] = useState(false);
//     const [message, setMessage] = useState('');
//     const imageRef = useRef();
//     const navigate = useNavigate(); // Using useNavigate for navigation

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setData((prevData) => ({
//             ...prevData,
//             [name]: value
//         }));
//     };

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const imageUrl = URL.createObjectURL(file);
//             setData((prevData) => ({
//                 ...prevData,
//                 img: file
//             }));
//         }
//     };

//     const handleLogin = async (loginData) => {
//         try {
//             const response = await axios.post('http://localhost:3030/login', loginData);
//             const { userId } = response.data; // Assuming the response contains the userId
//             localStorage.setItem('userId', userId); // Store userId in localStorage
//             setIsLoggedIn(true);
//         } catch (error) {
//             console.error('Login failed:', error);
//             setMessage('Login failed. Please try again.');
//         }
//     };
    
//     const userId = localStorage.getItem('userId');
//     try {
//         const response = await axios.get(`http://localhost:3030/pf/pfget/${userId}`);
//         console.log(response.data); // Handle the response
//     } catch (error) {
//         console.error('Error fetching profile:', error.message);
//     }
    

//     const handleProfileCreate = async (profileData) => {
//         const userId = localStorage.getItem('userId');
        
//         if (!userId) {
//             console.error('User not logged in');
//             return;
//         }
    
//         try {
//             const response = await axios.post('http://localhost:3030/pf/pfcreate', {
//                 userId,
//                 ...profileData
//             });
//             console.log('Profile created:', response.data);
//         } catch (error) {
//             console.error('Error creating profile:', error.message);
//         }
//     };
    

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const userId = localStorage.getItem('userId');
//         if (!userId) {
//             setMessage('User is not logged in');
//             return;
//         }
      
//         const formData = new FormData();
//         formData.append('name', data.name);
//         formData.append('number', data.number);
//         formData.append('dob', data.dob);
//         formData.append('place', data.place);
//         formData.append('img', data.img);
      
//         try {
//             const response = await axios.post(`http://localhost:3030/pf/pfcreate`, formData, {
//                 headers: { 'Content-Type': 'multipart/form-data' }
//             });
//             setData(response.data);
//             setEditMode(false);
//             setMessage('Profile updated successfully!');
//             navigate('/some-path'); // Example of navigation after success
//         } catch (error) {
//             setMessage('Failed to update your profile.');
//         }
//     };

//     return (
//         <div className='flex items-center justify-center bg-gradient-to-r from-lime-300 to-orange-400 p-5'>
//             <div className='flex flex-col items-center shadow rounded p-10 gap-1'>
//                 <div className="flex justify-end w-full -mr-5 -mt-5">
//                     <FaRegEdit
//                         className='w-5 text-red-500 hover:text-white cursor-pointer'
//                         onClick={() => setEditMode(true)}
//                     />
//                 </div>
//                 <div className="relative">
//                     {data.img ? (
//                         <img
//                             src={typeof data.img === 'string' ? `http://localhost:3030/uploads/${data.img}` : URL.createObjectURL(data.img)}
//                             alt="profile-picture"
//                             className='w-36 h-36 rounded-full border-b-2 border-red-500 p-0.5 shadow'
//                         />
//                     ) : (
//                         <img
//                             src='assets/logo.jpg'
//                             alt="profile-picture"
//                             className='w-36 h-36 rounded-full border-b-2 border-red-500 p-0.5 shadow'
//                         />
//                     )}
//                     {editMode && (
//                         <div
//                             className="absolute bottom-5 right-3 bg-gray-600 rounded-full p-1"
//                             onClick={() => imageRef.current.click()}
//                         >
//                             <LiaUserEditSolid className='text-white hover:cursor-pointer hover:text-red-700 text-2xl' />
//                         </div>
//                     )}
//                     <input
//                         type="file"
//                         accept='image/*'
//                         hidden
//                         onChange={handleImageChange}
//                         ref={imageRef}
//                     />
//                 </div>
//                 <form className='flex flex-col p-1 gap-5' onSubmit={handleSubmit}>
//                     <label htmlFor="name">Name
//                         <input
//                             type="text"
//                             name='name'
//                             id='name'
//                             value={data.name}
//                             disabled={!editMode}
//                             placeholder='Name'
//                             className={`flex font-extrabold p-2 shadow-xl rounded ${!editMode ? 'bg-stone-300' : ''}`}
//                             onChange={handleInputChange}
//                         />
//                     </label>
//                     <label htmlFor="number">Phone Number
//                         <input
//                             type="text"
//                             name='number'
//                             id='number'
//                             value={data.number}
//                             disabled={!editMode}
//                             placeholder='Phone Number'
//                             className={`flex font-extrabold p-2 shadow-xl rounded ${!editMode ? 'bg-stone-300' : ''}`}
//                             onChange={handleInputChange}
//                         />
//                     </label>
//                     <label htmlFor="dob">Date of Birth
//                         <input
//                             type="date"
//                             name='dob'
//                             id='dob'
//                             value={data.dob}
//                             disabled={!editMode}
//                             className={`flex w-52 font-extrabold p-2 shadow-xl rounded ${!editMode ? 'bg-stone-300' : ''}`}
//                             onChange={handleInputChange}
//                         />
//                     </label>
//                     <label htmlFor="place">Work Place
//                         <input
//                             type="text"
//                             name='place'
//                             id='place'
//                             value={data.place || ''}
//                             disabled={!editMode}
//                             placeholder='work place'
//                             className={`flex font-extrabold p-2 shadow-xl rounded ${!editMode ? 'bg-stone-300' : ''}`}
//                             onChange={handleInputChange}
//                         />
//                     </label>

//                     {editMode && (
//                         <input
//                             type="submit"
//                             value="Save Changes"
//                             className="bg-green-500 text-white px-6 py-2 rounded-full cursor-pointer"
//                         />
//                     )}
//                 </form>
//                 {message && <p className="text-center text-red-500 mt-4">{message}</p>}
//             </div>
//         </div>
//     );
// }

// export default Profile;


import React, { useEffect, useRef, useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { LiaUserEditSolid } from "react-icons/lia";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Profile({ data, setData, setIsLoggedIn }) {
    const [editMode, setEditMode] = useState(false);
    const [message, setMessage] = useState('');
    const imageRef = useRef();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setData((prevData) => ({
                ...prevData,
                img: file
            }));
        }
    };

    const handleLogin = async (loginData) => {
        try {
            const response = await axios.post('http://localhost:3030/login', loginData);
            const { userId } = response.data;
            localStorage.setItem('userId', userId);
            setIsLoggedIn(true);
        } catch (error) {
            console.error('Login failed:', error);
            setMessage('Login failed. Please try again.');
        }
    };

    // Use useEffect to handle the profile fetching logic
    useEffect(() => {
        const fetchProfileData = async () => {
            const userId = localStorage.getItem('userId');
            if (!userId) {
                setMessage('User not logged in');
                return;
            }

            try {
                const response = await axios.get(`http://localhost:3030/pf/pfget/${userId}`);
                console.log(response.data); // Handle the response
                setData(response.data); // Set profile data to state
            } catch (error) {
                console.error('Error fetching profile:', error.message);
                setMessage('Error fetching profile.');
            }
        };

        fetchProfileData();
    }, [setData]); // Dependency on setData, so it runs on mount

    const handleProfileCreate = async (profileData) => {
        const userId = localStorage.getItem('userId');
        if (!userId) {
            console.error('User not logged in');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3030/pf/pfcreate', {
                userId,
                ...profileData
            });
            console.log('Profile created:', response.data);
        } catch (error) {
            console.error('Error creating profile:', error.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userId = localStorage.getItem('userId');
        if (!userId) {
            setMessage('User is not logged in');
            return;
        }

        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('number', data.number);
        formData.append('dob', data.dob);
        formData.append('place', data.place);
        formData.append('img', data.img);

        try {
            const response = await axios.post(`http://localhost:3030/pf/pfcreate`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setData(response.data);
            setEditMode(false);
            setMessage('Profile updated successfully!');
            navigate('/some-path'); // Example of navigation after success
        } catch (error) {
            setMessage('Failed to update your profile.');
        }
    };

    return (
        <div className='flex items-center justify-center bg-gradient-to-r from-lime-300 to-orange-400 p-5'>
            <div className='flex flex-col items-center shadow rounded p-10 gap-1'>
                <div className="flex justify-end w-full -mr-5 -mt-5">
                    <FaRegEdit
                        className='w-5 text-red-500 hover:text-white cursor-pointer'
                        onClick={() => setEditMode(true)}
                    />
                </div>
                <div className="relative">
                    {data.img ? (
                        <img
                            src={typeof data.img === 'string' ? `http://localhost:3030/uploads/${data.img}` : URL.createObjectURL(data.img)}
                            alt="profile-picture"
                            className='w-36 h-36 rounded-full border-b-2 border-red-500 p-0.5 shadow'
                        />
                    ) : (
                        <img
                            src='assets/logo.jpg'
                            alt="profile-picture"
                            className='w-36 h-36 rounded-full border-b-2 border-red-500 p-0.5 shadow'
                        />
                    )}
                    {editMode && (
                        <div
                            className="absolute bottom-5 right-3 bg-gray-600 rounded-full p-1"
                            onClick={() => imageRef.current.click()}
                        >
                            <LiaUserEditSolid className='text-white hover:cursor-pointer hover:text-red-700 text-2xl' />
                        </div>
                    )}
                    <input
                        type="file"
                        accept='image/*'
                        hidden
                        onChange={handleImageChange}
                        ref={imageRef}
                    />
                </div>
                <form className='flex flex-col p-1 gap-5' onSubmit={handleSubmit}>
                    <label htmlFor="name">Name
                        <input
                            type="text"
                            name='name'
                            id='name'
                            value={data.name}
                            disabled={!editMode}
                            placeholder='Name'
                            className={`flex font-extrabold p-2 shadow-xl rounded ${!editMode ? 'bg-stone-300' : ''}`}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label htmlFor="number">Phone Number
                        <input
                            type="text"
                            name='number'
                            id='number'
                            value={data.number}
                            disabled={!editMode}
                            placeholder='Phone Number'
                            className={`flex font-extrabold p-2 shadow-xl rounded ${!editMode ? 'bg-stone-300' : ''}`}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label htmlFor="dob">Date of Birth
                        <input
                            type="date"
                            name='dob'
                            id='dob'
                            value={data.dob}
                            disabled={!editMode}
                            className={`flex w-52 font-extrabold p-2 shadow-xl rounded ${!editMode ? 'bg-stone-300' : ''}`}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label htmlFor="place">Work Place
                        <input
                            type="text"
                            name='place'
                            id='place'
                            value={data.place || ''}
                            disabled={!editMode}
                            placeholder='work place'
                            className={`flex font-extrabold p-2 shadow-xl rounded ${!editMode ? 'bg-stone-300' : ''}`}
                            onChange={handleInputChange}
                        />
                    </label>

                    {editMode && (
                        <input
                            type="submit"
                            value="Save Changes"
                            className="bg-green-500 text-white px-6 py-2 rounded-full cursor-pointer"
                        />
                    )}
                </form>
                {message && <p className="text-center text-red-500 mt-4">{message}</p>}
            </div>
        </div>
    );
}

export default Profile;
