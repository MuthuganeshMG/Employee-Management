// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// import Signin from './components/auth-page/Signin';
// import Signup from './components/auth-page/Signup';
// import Home from './components/pages/Home';
// import Profile from './components/pages/Profile';
// import Header from './components/pages/Header';
// import Attendance from './components/pages/Attendance';
// import AttendanceList from './components/pages/AttendanceList';
// import Place from './components/pages/Place';
// import About from './components/pages/About';

// function App() {
//   const [data, setData] = useState({
//     name: '',
//     number: '',
//     dob: '',
//     place: '',
//     img: ''
//   });
//   const [profileId, setProfileId] = useState('');
//   const [message, setMessage] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const savedLoginStatus = localStorage.getItem('isLoggedIn') === 'true';
//     if (savedLoginStatus) {
//       setIsLoggedIn(true);
//       fetchData();
//     }
//   }, []);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//     localStorage.setItem('isLoggedIn', 'true'); 
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     localStorage.setItem('isLoggedIn', 'false');
//   };

//   useEffect(() => {
//     if (isLoggedIn) {
//       fetchData();
//     }
//   }, [isLoggedIn]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:3030/pf/fetch');
//       if (response.data && response.data.length > 0) {
//         const profileData = response.data[0];
//         setData({
//           name: profileData.name || '',
//           number: profileData.number || '',
//           dob: profileData.dob || '',
//           place: profileData.place || '',
//           img: profileData.img || ''
//         });
//         setProfileId(profileData._id);
//       }
//     } catch (error) {
//       console.error('Error fetching profile:', error.message);
//       setMessage("Server error: failed to fetch data.");
//     }
//   };

//   return (
//     <div>
//       <BrowserRouter>
//         {isLoggedIn && <Header name={data.name} img={data.img} handleLogout={handleLogout} />}
//         <Routes>
//           <Route path='/' element={isLoggedIn ? <Navigate to='/home' /> : <Signin handleLogin={handleLogin} />} />
//           <Route path='/signin' element={isLoggedIn ? <Navigate to='/home' /> : <Signin handleLogin={handleLogin} />} />
//           <Route path='/signup' element={<Signup />} />
//           <Route path='/home' element={isLoggedIn ? <Home /> : <Navigate to='/signin' />} />
//           <Route path='/attendance' element={isLoggedIn ? <Attendance name={data.name}/> : <Navigate to='/signin' />} />
//           <Route path='/present' element={isLoggedIn ? <AttendanceList /> : <Navigate to='/signin' />} />
//           <Route path='/place' element={isLoggedIn ? <Place /> : <Navigate to='/signin' />} />
//           <Route path='/about' element={isLoggedIn ? <About /> : <Navigate to='/signin' />} />
//           <Route path='/profile' element={isLoggedIn ? <Profile data={data} /> : <Navigate to='/signin' />} />
//           {/* <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Signin setIsLoggedIn={setIsLoggedIn} />} />
//           <Route path="/signin" element={<Signin />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/home" element={isLoggedIn ? (profileId ? <Home /> : <Navigate to="/profile" />) : <Navigate to="/signin" />} />
//           <Route path="/profile" element={isLoggedIn && !profileId ? <Profile setData={setData} setProfileId={setProfileId} /> : <Navigate to="/home" />} />
//           <Route path="/about" element={isLoggedIn ? <About /> : <Navigate to="/signin" />} />
//           <Route path="/header" element={isLoggedIn && <Header />} /> */}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Signin from './components/auth-page/Signin';
import Signup from './components/auth-page/Signup';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Header from './components/pages/Header';
import Attendance from './components/pages/Attendance';
import AttendanceList from './components/pages/AttendanceList';
import Place from './components/pages/Place';
import About from './components/pages/About';
import axios from 'axios';

function App() {
  const [data, setData] = useState({
    name: '',
    number: '',
    dob: '',
    place: '',
    img: ''
  });
  const [profileId, setProfileId] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const savedLoginStatus = localStorage.getItem('isLoggedIn') === 'true';
    if (savedLoginStatus) {
      setIsLoggedIn(true);
      const userId = localStorage.getItem('userId');
      if (userId) {
        fetchData(); // Fetch data only if userId is available
      }
    } else {
      setIsLoggedIn(false); // Make sure to reset the login status if not logged in
    }
  }, []);
  

  const handleLogin = (userId) => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userId', userId); // Store userId after successful login
  };
  

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('userId'); // Remove user-specific data
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchData();
    }
  }, [isLoggedIn]);

  // const fetchData = async () => {
  //   try {
  //     const userId = localStorage.getItem('userId');
  //     if (!userId) {
  //       throw new Error("User is not logged .");
  //     }
  //     const response = await axios.get(`http://localhost:3030/pf/fetch/${userId}`);
  //     if (response.data) {
  //       setData(response.data);
  //       setProfileId(response.data._id);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching profile:', error.message);
  //     setMessage("Server error: failed to fetch data.");
  //   }
  // };
const fetchData = async () => {
    const userId = localStorage.getItem('userId');
    
    if (!userId) {
        console.error('User not logged in');
        return;
    }

    try {
        const response = await axios.get(`http://localhost:3030/pf/pfget/${userId}`);
        console.log('Profile data:', response.data);
        setData(response.data); // Store the profile data in state
    } catch (error) {
        console.error('Error fetching profile:', error.message);
    }
};


  


  return (
    <div>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        {isLoggedIn && <Header name={data.name} img={data.img} handleLogout={handleLogout} />}
        <Routes>
          <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Signin handleLogin={handleLogin} />} />
          <Route path="/signin" element={isLoggedIn ? <Navigate to="/home" /> : <Signin handleLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/signin" />} />
          <Route path="/attendance" element={isLoggedIn ? <Attendance name={data.name} /> : <Navigate to="/signin" />} />
          <Route path="/present" element={isLoggedIn ? <AttendanceList /> : <Navigate to="/signin" />} />
          <Route path="/place" element={isLoggedIn ? <Place /> : <Navigate to="/signin" />} />
          <Route path="/about" element={isLoggedIn ? <About /> : <Navigate to="/signin" />} />
          <Route path="/profile/:id" element={isLoggedIn ? <Profile data={data} setData={setData} profileId={setIsLoggedIn} message={message}/> : <Navigate to="/signin" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
