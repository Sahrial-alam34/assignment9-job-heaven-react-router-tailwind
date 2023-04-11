import React from 'react';
import { Link } from 'react-router-dom';

const CartItem = ({ jobInfo }) => {
    console.log(jobInfo);
    const { id, title, picture, location, name, type, salary } = jobInfo

    return (

        <li className='flex flex-col py-6 sm:flex-row sm:justify-between bg-gray-100 gap-5 p-5'>
            <div className='flex w-full space-x-2 sm:space-x-4'>

                <div className=' rounded bg-gray-400 w-48 px-3'>
                    <img
                        className='object-cover mt-16'
                        src={picture}
                        alt='Polaroid camera'
                    />
                </div>


                <div className='flex flex-col justify-between w-full pb-4'>
                    <div className='flex justify-between w-full pb-2 space-x-2'>
                        <div className='space-y-1'>
                            <h3 className='text-lg font-semibold leading-snug sm:pr-8'>
                                {title}
                            </h3>
                            <p className='text-sm text-left text-gray-400'>
                                {name}</p>
                            <div className='mt-10 flex gap-5 mb-5'>
                                {
                                    type.map((pd, index) => (
                                        <div key={index}>

                                            <button type='button' className='bg-transparent hover:bg-cyan-300 text-cyan-700 font-semibold hover:text-black py-2 px-4 border border-cyan-200 hover:border-transparent rounded'>
                                                {pd}
                                            </button>
                                        </div>

                                    ))
                                }

                            </div>
                            <div className='flex justify-between mb-5'>
                                <div className='flex gap-3 mt-4'>
                                    <img src="/src/assets/Icons/Frame-4.png" alt="" />
                                    <p className="text-gray"><small>{location}</small></p>
                                </div>
                                <div className='flex gap-3 mt-4'>
                                    <img src="/src/assets/Icons/Frame.png" alt="" />
                                    <p className="text-gray"><small>{salary}</small></p>
                                </div>

                            </div>
                        </div>
                        <div className='text-right mt-10'>
                            <Link to='/'>
                               
                               <button className='btn-primary'>View Details</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

        </li>
    );
};

export default CartItem;
