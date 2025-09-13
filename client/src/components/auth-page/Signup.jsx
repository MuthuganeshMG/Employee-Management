// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// export default function Signup() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [msg, setMsg] = useState('');
//   const navigate = useNavigate();

//   const createAuth = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3030/auth/signup', {
//         username: name,
//         email,
//         password
//       });
//       // console.log(response);
//       alert(response.data.message);
//       setMsg('signup successfully!');
//       navigate('/profile/:id');
//     } catch (error) {
//       alert(error.response.data.message || 'plaese try again');
//       setMsg('Require all field*');
//     }
//   };

//   return (
//     <div
//       className='flex flex-col items-center bg-gradient-to-br from-cyan-400 to-red-500 h-screen p-16 '>
//       <div
//         className="flex flex-col items-center shadow rounded p-5">
//         <h1 className='font-extrabold'>
//           SignUP
//         </h1>
//         <form onSubmit={createAuth}
//           className='flex flex-col mx-auto p-10 gap-4'>
//           <label htmlFor="name">UserName
//             <input
//               type="text"
//               id='name'
//               placeholder='userName'
//               className='flex gap-5 p-2 shadow rounded '
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </label>
//           <label htmlFor="email">Email
//             <input
//               type="email"
//               id="email"
//               placeholder='email'
//               className='flex gap-5 p-2 shadow rounded '
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </label>
//           <label htmlFor="password">Password
//             <input
//               type="password"
//               id='password'
//               placeholder='password'
//               className='flex gap-5 p-2 shadow rounded '
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </label>
//           <input
//             type="submit"
//             className='flex m-auto w-fit px-3 py-1 shadow rounded bg-blue-500 cursor-pointer'
//           />
//           {
//             msg &&
//             <p>{msg}</p>
//           }
//         </form>
//         <p className='flex gap-3 -mt-3'>
//           already have an account?
//           <Link to={'/'}
//             className='text-blue-700 hover:text-white'>SignIn</Link>
//         </p>
//       </div>
//     </div>
//   )
// };


// Signup.js
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const createAuth = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3030/auth/signup', {
        username: name,  // Only sending username
        email,  // Only sending email
        password  // Only sending password
      });

      // Log response to check if data contains userId
      console.log(response);

      alert(response.data.message);  // Alerting the server response message
      setMsg('Signup successful!');

      // After signup, redirect to profile page with the user's ID
      navigate(`/profile/${response.data.userId}`);  // Assuming the backend returns a userId
    } catch (error) {
      // Handle errors such as missing fields or duplicates
      setMsg(error.response?.data.message || 'Signup failed');
    }
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-tl from-cyan-400 to-red-500 h-screen p-16">
      <div className="flex flex-col items-center shadow rounded p-5">
        <h1 className="font-extrabold">Sign Up</h1>
        <form onSubmit={createAuth} className="flex flex-col mx-auto p-10 gap-4">
          <label htmlFor="name">UserName
            <input
              type="text"
              id="name"
              placeholder="UserName"
              className="flex gap-5 p-2 shadow rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label htmlFor="email">Email
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="flex gap-5 p-2 shadow rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label htmlFor="password">Password
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="flex gap-5 p-2 shadow rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {msg && <p className='text-red-600 m-auto'>{msg}</p>}
          <input
            type="submit"
            className="flex m-auto w-fit px-3 py-1 shadow rounded bg-blue-500 cursor-pointer"
          />
        </form>
        <p className="flex gap-3 -mt-3">
          Already have an account?
          <Link to="/signin" className="text-blue-700 hover:text-white">Sign In</Link>
        </p>
      </div>
    </div>
  );
}
