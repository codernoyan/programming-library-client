import React, { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaUserCircle } from "react-icons/fa";
import { FaEarlybirds } from "react-icons/fa";
import { HiSun } from "react-icons/hi";
import { HiOutlineMoon } from "react-icons/hi";


const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success('Log Out Successful')
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message);
      })
  }

  console.log(user);
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <div className="flex items-center">
          <Link
            to="/"
            className="inline-flex items-center mr-8"
          >
            <FaEarlybirds className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Programming Library
            </span>
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/courses"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <button
              aria-label="Sign in"
              title="Sign in"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              {/* dark/light toggle button */}
              <label for="Toggle3" className="inline-flex items-center p-2 rounded-md cursor-pointer dark:text-gray-800">
                <input id="Toggle3" type="checkbox" className="hidden peer" />
                <span className="px-4 py-2 rounded-l-md dark:bg-rose-400 text-white peer-checked:dark:bg-gray-300 peer-checked:text-gray-900"><HiSun className="w-4 h-4" /></span>
                <span className="px-4 py-2 rounded-r-md dark:bg-gray-300 peer-checked:dark:bg-rose-400 peer-checked:text-white"><HiOutlineMoon className="w-4 h-4" /></span>
              </label>
            </button>
          </li>
          <li>
            {
              user?.uid ?
                <div className="flex items-center gap-4">
                  {
                    user?.photoURL ?
                      <button aria-label="Log Out" title={user?.displayName}>
                        <img className="w-12 h-12 rounded-full object-cover" src={user?.photoURL} alt="user"></img>
                      </button>
                      :
                      <button aria-label="Log Out" title={user?.displayName}>
                        <FaUserCircle className="w-12 h-12" />
                      </button>
                  }
                  <button
                    onClick={handleLogOut}
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-rose-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    aria-label="Log Out"
                    title="Log Out"
                  >
                    Log out
                  </button>
                </div>
                :
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-rose-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                  Login
                </Link>
            }
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
                      className="inline-flex items-center"
                    >
                      <FaEarlybirds className="h-8 w-8" />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Programming Library
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        to="/courses"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Courses
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/faq"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <button
                        aria-label="Sign in"
                        title="Sign in"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        {/* dark/light toggle button */}
                        <label for="Toggle3" className="inline-flex items-center p-2 rounded-md cursor-pointer dark:text-gray-800">
                          <input id="Toggle3" type="checkbox" className="hidden peer" />
                          <span className="px-4 py-2 rounded-l-md dark:bg-rose-400 text-white peer-checked:dark:bg-gray-300 peer-checked:text-gray-900"><HiSun className="w-4 h-4" /></span>
                          <span className="px-4 py-2 rounded-r-md dark:bg-gray-300 peer-checked:dark:bg-rose-400 peer-checked:text-white"><HiOutlineMoon className="w-4 h-4" /></span>
                        </label>
                      </button>
                    </li>
                    <li>
                      {
                        user?.uid ?
                          <div className="flex items-center gap-4">
                            {
                              user?.photoURL ?
                                <button aria-label="Log Out" title={user?.displayName}>
                                  <img className="w-12 h-12 rounded-full object-cover" src={user?.photoURL} alt="user"></img>
                                </button>
                                :
                                <button aria-label="Log Out" title={user?.displayName}>
                                  <FaUserCircle className="w-12 h-12" />
                                </button>
                            }
                            <button
                              onClick={handleLogOut}
                              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-rose-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                              Log out
                            </button>
                          </div>
                          :
                          <Link
                            to="/login"
                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-rose-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          >
                            Login
                          </Link>
                      }
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;