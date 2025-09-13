import React, { useEffect, useState } from 'react';

function AttendanceList() {
  const [listData, setListData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getList = async () => {
      try {
        const response = await fetch('http://localhost:3030/api/list');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const list = await response.json();
        setListData(list);
      } catch (error) {
        setError('Failed to fetch attendance list: ' + error.message);
      }
    };

    getList();
  }, []);

  return (
    <div className='bg-gradient-to-r from-blue-400 to-purple-500 p-5'>
      {error && <p className="text-red-500">{error}</p>}
      {listData.length === 0 ? ( 
        <p>No attendance records found.</p>
      ) : (
        listData.map((list) => (
          <div key={list._id} className="bg-blue-200 p-4 mb-2 rounded">
            <ul>
              <li>Name : {list.name}</li>
              <li>ID : {list.id}</li>
              <li>Location : {list.location}</li>
              <li>Area : {list.area}</li>
              <li> Date :
                {/* {new Date(list.createdAt).toLocaleDateString([],
                  {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                  }).split('/').reverse().join('/')
                } */}

                {new Date(list.createdAt).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric'
                })}
              </li>
              <li> Time :
                {new Date(list.createdAt).toLocaleTimeString()}
              </li>
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default AttendanceList;
