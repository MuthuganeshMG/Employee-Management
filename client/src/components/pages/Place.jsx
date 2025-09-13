import React from 'react'

function Place() {
  return (
    <div className='bg-gradient-to-r from-lime-300 to-purple-300 p-10 '>
      {/* <div className="flex"> */}
        <div 
        className="flex flex-col w-fit overflow-hidden items-center justify-center m-auto p-3 gap-10">
          <div
           className="flex items-center shadow rounded p-5 gap-5">
            <p className='flex flex-col'>
              work place
              <span
                className='font-extrabold text-orange-500'
              >
                Location-1
              </span>
              </p>
            <img src='assets/slr.jpg' alt="img"
              className='w-36 h-36 rounded-full' />
          </div>
          <div className="flex items-center overflow-hidden shadow rounded p-5 gap-5">
            <img src='assets/slr1.jpg' alt="img"
              className='w-36 h-36 rounded-full' />
            <p className='flex flex-col'>
              work place
              <span
                className='font-extrabold text-orange-500'
              >
                Location-2
              </span></p>
          </div>
          <div className="flex items-center shadow rounded p-5 gap-5">
            <p className=' flex flex-col'>
              work place
              <span
                className='font-extrabold text-orange-500'
              >
                Location-3
              </span></p>
            <img src='assets/slr2.jpg' alt="img"
              className='w-36 h-36 rounded-full' />
          </div>
          <div className="flex items-center shadow rounded p-5 gap-5">
            <img src='assets/slr3.jpg' alt="img"
              className='w-36 h-36 rounded-full' />
            <p className='flex flex-col'>
              work place
              <span
                className='font-extrabold text-orange-500'
              >
                Location-4
              </span></p>
          </div>
        </div>
      {/* </div> */}
    </div>
  )
}

export default Place;