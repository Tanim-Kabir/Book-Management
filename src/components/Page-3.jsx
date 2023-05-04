import React from 'react';
import Home from './Home';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Page3 = () => {
  let type = null;

  const [inputs, setInputs] = useState({
    firstName: '', pAge: '', type: '', f: null
  })
  let f = inputs.f;

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  const handleCheckBox = (event) => {
    type = event.target.checked ? event.target.name : null;
    setInputs(values => ({...values, ["type"]: type}));
  }

  const page3Submit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:80/api/page3.php', inputs).then(function(response){
      console.log(inputs);
    });
  }

  return (
    <>
    <Home />
    <section className='flex justify-center'>
      <form onSubmit={page3Submit} className='pl-4 w-96'>
        <div className='mt-2 flex'>
          <label className='text-sm w-16  font-medium text-gray-900 pt-1'>
            Name
          </label>
          <input
            type="text"
            name="firstName"
            value={inputs.firstName}
            onChange={handleChange}
            className="pl-2 block w-72 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className='mt-2 flex'>
          <label className='w-16 text-sm font-medium text-gray-900 pt-1'>
            P. Age
          </label>
          <select
            name="pAge"
            value={inputs.pAge}
            onChange={handleChange}
            className="pl-1 block w-60 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          >
            <option></option>
            <option>10</option><option>15</option><option>20</option><option>25</option><option>30</option><option>35</option>
            <option>40</option><option>45</option><option>50</option><option>55</option><option>60</option><option>65</option>
            <option>70</option><option>75</option><option>80</option><option>85</option><option>90</option><option>95</option><option>100</option>
          </select>
        </div>

        <div className='mt-2 contect-center flex'>
          <label className=' w-16 text-sm font-medium text-gray-900 pt-1'>
            Type
          </label>
          <label className=' w-9 text-sm font-medium text-gray-900 pt-1'>
            sci-fi
          </label>
          <input
            name="sci-fi"
            type="checkbox"
            checked={f}
            onChange={handleCheckBox}
            className="h-4 w-4 mt-2 mr-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label className=' w-12 text-sm font-medium text-gray-900 pt-1'>
            Drama
          </label>
          <input
            name="Drama"
            type="checkbox"
            checked={f}
            onChange={handleCheckBox}
            className="h-4 w-4 mt-2 mr-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label className='w-12 text-sm font-medium text-gray-900 pt-1'>
            Novel
          </label>
          <input
            name="Novel"
            type="checkbox"
            checked={f}
            onChange={handleCheckBox}
            className="h-4 w-4 mt-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
        </div>

        <div className="mt-2 flex gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Search
          </button>
        </div>
      </form>
    </section>

    <section className='flex justify-center mt-4'>
      <div className='pl-4 '>
        <table className='border-black border-2'>
          <thead>
            <tr className='text-left w-8 border-black border-b-2'>
              <th className='w-12 pl-1'>SL</th>
              <th className='text-left w-60'>Name</th>
              <th className='text-left w-20'>P.Name</th>
              <th className='text-left w-20'>P.Date</th>
            </tr>
          </thead>
          <tbody>
            {/* {users.map((user, key) =>
              <tr key={key} className='border-t-2 hover:bg-zinc-300'>
                <td className='pl-1'>{user.SL}</td>
                <td>{user.Name}</td>
                <td>
                  <button className='btn-page2'>Edit</button>
                  <button className='btn-page2'>Delete</button>
                </td>
              </tr>
            )}  */}
          </tbody>
        </table>
      </div>
    </section>
    </>

  )
}

export default Page3;