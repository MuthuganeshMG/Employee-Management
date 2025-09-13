import React from 'react';

function Home() {
    return (
        <div className='flex flex-col bg-gradient-to-l from-lime-300 to-purple-300 p-10'>
            {/* <div className="flex items-center gap-2">
                <h1 className='shadow w-fit px-2 rounded'>KANNAN</h1>
                <span className='bg-lime-400 px-2 rounded'>Power Station</span>
            </div>
            <p>
                founder of organization in solar service system.
            </p> */}
            <div className="flex flex-col w-fit overflow-hidden items-center justify-center m-auto p-3 gap-10">
                <div className="flex items-center shadow rounded p-5 gap-5">
                    <p className=''>
                        cleaning process in sequirely and step by step process
                    </p>
                    <img src='assets/slr.jpg' alt="img"
                        className='w-36 h-36 rounded-full' />
                </div>
                <div className="flex items-center overflow-hidden shadow rounded p-5 gap-5">
                    <img src='assets/slr1.jpg' alt="img"
                        className='w-36 h-36 rounded-full' />
                    <p className='flex w-full'>
                        cleaning process in sequirely and step by step process
                    </p>
                </div>
                <div className="flex items-center shadow rounded p-5 gap-5">
                    <p className='flex w-full'>
                        cleaning process in sequirely and step by step process
                    </p>
                    <img src='assets/slr2.jpg' alt="img"
                        className='w-36 h-36 rounded-full' />
                </div>
                <div className="flex items-center shadow rounded p-5 gap-5">
                        <img src='assets/slr3.jpg' alt="img"
                            className='w-36 h-36 rounded-full' />
                    <p className='flex w-full'>
                        cleaning process in sequirely and step by step process
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center mt-5">
            <p>@ SOLARSYSTEM</p>
            </div>
        </div>
    )
}

export default Home;