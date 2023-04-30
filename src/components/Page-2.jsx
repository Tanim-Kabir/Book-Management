import React from 'react'
import Home from './Home';

export const Page2 = () => {
  return (
    <>
    <Home />
    <section className='flex justify-center'>
      <div className='pl-4 pt-4 border-black border-2'>
        <table className='table-auto'>
          <thead>
            <tr className='w-8 border-2 border-black'>
              <th className='w-12'>SL</th>
              <th className='text-left w-80'>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className='w-8 border-2 border-black'>
              <th className='w-12'>SL</th>
              <th className='text-left w-80'>Name</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>1</td>
              <td>January</td>
              <td>
                <button type="button" className='mr-2 w-12 '>Edit</button>
                <button type="button" className='w-12 '>Delete</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>February</td>
              <td>
                <button type="button" className='mr-2 w-12 '>Edit</button>
                <button type="button" className='w-12 '>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    </>

  )
}

export default Page2;