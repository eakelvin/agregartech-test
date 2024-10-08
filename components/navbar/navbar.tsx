import React from 'react'

const Navbar = () => {
    return (
        <nav className='grid grid-cols-2'>
            <div className='py-5 px-8 lg:px-24'>
                <p className="text-[30px] font-bold whitespace-nowrap text-[#3751FE]">
                    Digital
                </p>
            </div>
            <div className='bg-[#E5E5E5] hidden lg:flex justify-center items-center'>
                <ul className="text-base font-normal flex flex-col py-5 px-8 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                    <li>
                        <a href="#" className="block py-2 px-3 md:p-0 border-b-2 border-[#3751FE]" aria-current="page">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            About us
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            Blog
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            Pricing
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
