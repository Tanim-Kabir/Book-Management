import React, { useEffect, useState } from 'react'
import Home from './Home';
import axios from 'axios';

export const Page2 = () => {
  const [users, setUsers] = useState([{}]);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get('http://localhost:80/api/user').then(function(response){
      console.log(response.data);
      setUsers(response.data);
    });
  }
  
  return (
    <>
    <Home />
    <section className='flex justify-center'>
      <div className='pl-4 pt-4'>
        <table className='border-black border-2'>
          <thead>
            <tr className='text-left w-8 border-black border-b-2'>
              <th className='w-12 pl-1'>SL</th>
              <th className='text-left w-80'>Name</th>
              <th className='text-center'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, key) =>
              <tr key={key} className='border-t-2 hover:bg-zinc-300'>
                <td className='pl-1'>{user.SL}</td>
                <td>{user.Name}</td>
                <td>
                  <button className='btn-page2'>Edit</button>
                  <button className='btn-page2'>Delete</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
    </>

  )
}

export default Page2;