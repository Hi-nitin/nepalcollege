import React from 'react';

const Navbar = () => {
    return (
        <>
            {/* Top Navbar */}
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <a href="tel:5541251234" className="text-sm text-gray-500 dark:text-white hover:underline">(555) 412-1234</a>
                        <a href="#" className="text-sm text-blue-600 dark:text-blue-500 hover:underline">Login</a>
                    </div>
                </div>
            </nav>

            {/* Main Navigation */}
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Company</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Team</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Features</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
