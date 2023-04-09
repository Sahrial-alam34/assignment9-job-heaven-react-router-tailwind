import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
      <div className='relative flex items-center justify-between'>
        <Link
          to='/'
          aria-label='JobHeaven'
          title='JobHeaven'
          className='inline-flex items-center'
        >
         
          <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 '>
            Job Heaven
          </span>
        </Link>
        <ul className='items-center hidden space-x-8 lg:flex'>
          <li>
            <NavLink
              to='/'
              aria-label='Home'
              title='Home'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/statistics'
              aria-label='Statistics'
              title='Statistics'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Statistics
            </NavLink>
          </li>
        
          <li>
            <NavLink
              to='/appliedJob'
              aria-label='Applied Job'
              title='Applied Job'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Applied Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/blogs'
              aria-label='Blogs'
              title='Blogs'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Blogs
            </NavLink>
          </li>
        </ul>
        <Link to='/startApplied'>
              <button type='button' className='btn-primary'>
                Shop Now
              </button>
            </Link>
        <div className='lg:hidden'>
          <button
            aria-label='Open Menu'
            title='Open Menu'
            className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
              />
              <path
                fill='currentColor'
                d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
              />
              <path
                fill='currentColor'
                d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className='absolute z-10 top-0 left-0 w-full'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link
                      to='/'
                      aria-label='HeroGadget'
                      title='HeroGadget'
                      className='inline-flex items-center'
                    >
                     
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                        Job Heaven
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                      onClick={() => setIsMenuOpen(false)}
                    >
                   
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className='space-y-4 '>
                    <li className='flex flex-col gap-3'>
                      <NavLink
                        to='/'
                        aria-label='Home'
                        title='Home'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                      >
                        Home
                      </NavLink>
                      <NavLink
                        to='/statistics'
                        aria-label='Statistics'
                        title='Statistics'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                      >
                        Statistics
                      </NavLink>
                      <NavLink
                        to='/appliedJob'
                        aria-label='Applied Job'
                        title='Applied Job'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                      >
                        Applied Job
                      </NavLink>
                      <NavLink
                        to='/blogs'
                        aria-label='Blogs'
                        title='Blogs'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                      >
                        Blogs
                      </NavLink>
                    </li>
               
                    <li>
                     
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header