import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Signin({handleLogin}) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const createAuth = async (e) => {
    e.preventDefault();
    if (!name || !password) {
      alert('Invalid credentials');
      setError('Invalid credentials');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3030/auth/signin', {
        username: name,
        password
      });
      setError('Login successfully!');
      // alert(response.data.message);
      // Redirect to home page on successful sign-in
      handleLogin(true);
      navigate('/home');
    } catch (error) {
      // alert(error.response?.data.message || 'Please try again');
      setError('Invalid credentials');
    }
  };

  return (
    <div className='flex flex-col items-center p-16 bg-gradient-to-br from-cyan-400 to-red-500 h-screen'>
      <div className="flex flex-col items-center shadow rounded p-5">
        <h1 className='font-extrabold'>Sign In</h1>
        <form onSubmit={createAuth} className='flex flex-col mx-auto p-10 gap-4'>
          <label htmlFor="name">UserName
            <input
              type="text"
              id='name'
              placeholder='UserName'
              className='flex gap-5 p-2 shadow rounded'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label htmlFor="password">Password
            <input
              type="password"
              id='password'
              placeholder='Password'
              className='flex gap-5 p-2 shadow rounded'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <input
            type="submit"
            className='flex m-auto w-fit px-3 py-1 shadow rounded bg-blue-500 cursor-pointer'
          />
          {
            error &&
            <p className='text-red-500 m-auto'>{error}</p>
          }
        </form>
        <div className="-mt-5">
          <div className="flex w-full items-center gap-3">
            <hr className='w-full' />
            OR
            <hr className='w-full' />
          </div>
          <div className="flex flex-col items-center">
            <Link
              className='text-blue-600 hover:text-white'>
              Forgot password?
            </Link>
            <p className='flex gap-2'>
              Don't have an account?
              <Link
                to='/signup'
                className='text-blue-600 hover:text-white'>
                Sign up
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
