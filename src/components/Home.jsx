import React from 'react';
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <nav className="bg-gray-50 dark:bg-gray-700">
    <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                <li>
                    <Link to="/Page1" className="text-gray-900 dark:text-white hover:underline" aria-current="page"> Page-1 </Link>
                </li>
                <li>
                    <Link to="/Page2" className="text-gray-900 dark:text-white hover:underline"> Page-2 </Link>
                </li>
                <li>
                    <Link to="/Page3" className="text-gray-900 dark:text-white hover:underline"> Page-3 </Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Home;
