import React from 'react'

export const Page3 = () => {
  return (
    <div>
      <form className='pl-4 pt-4 border-black border-2 h-60 w-96'>
        <div className='mt-2 flex'>
          <label htmlFor="first-name" className=' text-sm w-16  font-medium text-gray-900 pt-1'>
            KeyWord
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="block w-72 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className='mt-2 flex'>
          <label htmlFor="country" className='w-16 text-sm font-medium text-gray-900 pt-1'>
            P. Age
          </label>
          <select
            id="country"
            name="country"
            autoComplete="country-name"
            className="block w-60 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          >
            <option>--Age--</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
            <option>25</option>
            <option>30</option>
            <option>35</option>
            <option>40</option>
            <option>45</option>
            <option>50</option>
            <option>55</option>
            <option>60</option>
            <option>65</option>
            <option>70</option>
            <option>75</option>
            <option>80</option>
            <option>85</option>
            <option>90</option>
            <option>95</option>
            <option>100</option>
          </select>
        </div>

        <div className='mt-2 contect-center flex'>
          <label htmlFor="country" className=' w-16 text-sm font-medium text-gray-900 pt-1'>
            Type
          </label>
          <label htmlFor="country" className=' w-9 text-sm font-medium text-gray-900 pt-1'>
            sci-fi
          </label>
          <input
            id="offers"
            name="offers"
            type="checkbox"
            className="h-4 w-4 mt-2 mr-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label htmlFor="country" className=' w-12 text-sm font-medium text-gray-900 pt-1'>
            Drama
          </label>
          <input
            id="offers"
            name="offers"
            type="checkbox"
            className="h-4 w-4 mt-2 mr-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label htmlFor="country" className='w-12 text-sm font-medium text-gray-900 pt-1'>
            Novel
          </label>
          <input
            id="offers"
            name="offers"
            type="checkbox"
            className="h-4 w-4 mt-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
        </div>

        <div className="mt-6 flex gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Search
          </button>
        </div>
      </form>

      <div>
          <table className='table-auto'>
            <tr className='w-8 border-2 border-black'>
              <th className='w-12'>SL</th>
              <th className='text-left w-60'>Name</th>
              <th className='w-60'>P.Name</th>
              <th className='text-left w-80'>Date</th>
            </tr>
            <tr>
              <td>1</td>
              <td>January</td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td>February</td>
              <td></td>
            </tr>
        </table>
      </div>
    </div>


    

    


  )
}

export default Page3;