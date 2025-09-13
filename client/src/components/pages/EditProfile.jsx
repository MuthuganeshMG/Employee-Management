// // import axios from 'axios';
// // import React, { useEffect, useRef, useState } from 'react';
// // import Header from './Header';

// // export default function EditProfile() {
// //     const [data, setData] = useState({
// //         name: '',
// //         number: '',
// //         dob: '',
// //         place: '',
// //         img: ''
// //     });
// //     const [edit, setEdit] = useState(false);
// //     const [profileId, setProfileId] = useState('');
// //     const [message, setMessage] = useState('');
// //     const imgRef = useRef();

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setData((prevData) => ({
// //             ...prevData,
// //             [name]: value
// //         }));
// //     };

// //     const handleImageChange = (e) => {
// //         const file = e.target.files[0];
// //         if (file) {
// //             const imageUrl = URL.createObjectURL(file);
// //             setData((prevData) => ({
// //                 ...prevData,
// //                 img: file 
// //             }));
// //         }
// //     };

// //     // useEffect(() => {
// //     //     fetchData(); 
// //     // }, []);

// //     // const fetchData = async () => {
// //     //     try {
// //     //         const response = await axios.get('http://localhost:3030/pf/fetch');
// //     //         if (response.data && response.data.length > 0) {
// //     //             const profileData = response.data[0]; 
// //     //             setData({
// //     //                 name: profileData.name || '',
// //     //                 number: profileData.number || '',
// //     //                 dob: profileData.dob || '',
// //     //                 place: profileData.place || '',
// //     //                 img: profileData.img || ''
// //     //             });
// //     //             setProfileId(profileData._id);
// //     //         } 
// //     //     } catch (error) {
// //     //         console.error('Error fetching profile:', error.message);
// //     //         setMessage("Server error: failed to fetch data.");
// //     //     }
// //     // };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         const formData = new FormData();
// //         formData.append('name', data.name);
// //         formData.append('number', data.number);
// //         formData.append('dob', data.dob);
// //         formData.append('place', data.place);
// //         formData.append('img', data.img);
// //         try {
// //             const response = profileId
// //                 ? await axios.put(`http://localhost:3030/pf/edit/${profileId}`, formData, {
// //                     headers: {
// //                         'Content-Type': 'multipart/form-data'
// //                     }
// //                 })
// //                 : await axios.post('http://localhost:3030/pf/create', formData, {
// //                     headers: {
// //                         'Content-Type': 'multipart/form-data'
// //                     }
// //                 });
// //             setData(response.data);
// //             setProfileId(response.data._id);
// //             setEdit(false);
// //             setMessage('Profile updated successfully!');
// //         } catch (error) {
// //             setMessage('Failed to update your profile.');
// //         }
// //     };

// //     return (
// //         <div className="h-screen p-10">
// //             <form
// //                 className="flex flex-col items-center gap-8 p-10 shadow w-96 justify-center m-auto"
// //                 onSubmit={handleSubmit}>

// //                 <button
// //                     type="button"
// //                     className="bg-blue-500 text-white px-4 py-2 rounded"
// //                     onClick={() => setEdit(!edit)} 
// //                 >
// //                     {edit ? 'Cancel Edit' : 'Edit'}
// //                 </button>

// //                 <div className="flex flex-col items-center">
// //                     <div className="relative">
// //                         {
// //                             data.img ?
// //                                 <img
// //                                     src={typeof data.img === 'string' ? `http://localhost:3030/uploads/${data.img}` : URL.createObjectURL(data.img)}
// //                                     alt="Profile"
// //                                     className="rounded-full border w-32 h-32 object-cover"
// //                                 />
// //                                 :
// //                                 <img
// //                                     src='assets/logo.jpg'
// //                                     alt="Profile"
// //                                     className="rounded-full border w-32 h-32 object-cover"
// //                                 />
// //                         }
// //                         {edit && (
// //                             <button
// //                                 type="button"
// //                                 onClick={() => imgRef.current.click()}
// //                                 className="absolute bottom-0 right-0 bg-blue-500 text-white px-2 py-1 rounded-full"
// //                             >
// //                                 Edit
// //                             </button>
// //                         )}
// //                     </div>
// //                     <input
// //                         type="file"
// //                         accept="image/*"
// //                         hidden
// //                         onChange={handleImageChange}
// //                         ref={imgRef}
// //                     />
// //                 </div>

// //                 <input
// //                     type="text"
// //                     placeholder="Name"
// //                     name="name"
// //                     value={data.name|| ''}
// //                     disabled={!edit} 
// //                     onChange={handleChange}
// //                     className="px-4 py-2 rounded border"
// //                 />

// //                 <input
// //                     type="number"
// //                     placeholder="Phone Number"
// //                     name="number"
// //                     value={data.number|| ''}
// //                     disabled={!edit} 
// //                     onChange={handleChange}
// //                     className="px-4 py-2 rounded border"
// //                 />

// //                 <input
// //                     type="date"
// //                     placeholder="Date of Birth"
// //                     name="dob"
// //                     value={data.dob|| ''}
// //                     disabled={!edit} 
// //                     onChange={handleChange}
// //                     className="px-4 py-2 rounded border"
// //                 />

// //                 <input
// //                     type="text"
// //                     placeholder="Place"
// //                     name="place"
// //                     value={data.place|| ''}
// //                     disabled={!edit} 
// //                     onChange={handleChange}
// //                     className="px-4 py-2 rounded border"
// //                 />

// //                 {edit && (
// //                     <input
// //                         type="submit"
// //                         value="Save Changes"
// //                         className="bg-green-500 text-white px-6 py-2 rounded-full cursor-pointer"
// //                     />
// //                 )}
// //                 {message && <p className="text-center text-red-500 mt-4">{message}</p>}
// //             </form>

// //         <Header name={data.name}/>
// //         </div>
// //     );
// // }
// import React, { useEffect, useRef, useState } from 'react';
// import Profile from './Profile';
// import axios from 'axios';
// import Header from './Header';

// export default function EditProfile() {
//     const [data, setData] = useState({
//         name: '',
//         number: '',
//         dob: '',
//         place: '',
//         img: ''
//     });
//     const [profileId, setProfileId] = useState('');
//     const [message, setMessage] = useState('');

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const response = await axios.get('http://localhost:3030/pf/fetch');
//             if (response.data && response.data.length > 0) {
//                 const profileData = response.data[0];
//                 setData({
//                     name: profileData.name || '',
//                     number: profileData.number || '',
//                     dob: profileData.dob || '',
//                     place: profileData.place || '',
//                     img: profileData.img || ''
//                 });
//                 setProfileId(profileData._id);
//             }
//         } catch (error) {
//             console.error('Error fetching profile:', error.message);
//             setMessage("Server error: failed to fetch data.");
//         }
//     };
//     return ( 
//         <div>
//             <Profile />
//             <Header name={data.name} img={data.img}/>
//         </div>
//     )
// }
// {/* <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Signin setIsLoggedIn={setIsLoggedIn} />} />
//       <Route path="/signin" element={<Signin />} />
//       <Route path="/signup" element={<Signup />} />
//       <Route path="/home" element={isLoggedIn ? (profileId ? <Home /> : <Navigate to="/profile" />) : <Navigate to="/signin" />} />
//       <Route path="/profile" element={isLoggedIn && !profileId ? <Profile setData={setData} setProfileId={setProfileId} /> : <Navigate to="/home" />} />
//       <Route path="/about" element={isLoggedIn ? <About /> : <Navigate to="/signin" />} />
//       <Route path="/header" element={isLoggedIn && <Header /> } />*/}