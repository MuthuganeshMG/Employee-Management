import React from 'react'

function About() {
  return (
    <div
      className='p-10 bg-gradient-to-r from-green-300 to-fuchsia-300 h-screen '>
      <div
        className="flex flex-col justify-cente p-10 shadow rounded gap-5"
      >
        <div className="flex -ml-8">
          <img src="assets/slr1.jpg" alt="logo"
            className='w-40 h-36 rounded-full ' />
        </div>
        <div className="flex items-end justify-end right-0.5 -mr-8">
          <p className="flex p-1 bg-white shadow rounded text-center">
            "As the founder of the Solar Service System,
            I am dedicated to providing innovative and sustainable
            energy solutions for power stations, ensuring a greener
            future for our communities."
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;