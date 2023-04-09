import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import jobHunt from '../../assets/Animation/103199-hiring-pt-2.json'


const Home = () => {
    return (
        <>
            {/* banner section */}
            <div className='my-container flex flex-col items-center justify-between lg:flex-row'>
                {/* Text Content */}
                <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
                    <div className='max-w-xl mb-6 lg:mt-8'>

                        <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                            One Step <br className='hidden md:block' /> Closer To Your{' '}
                            <span className='inline-block text-blue-400'>Dream Job</span>
                        </h2>
                        <p className='text-base text-gray-700 md:text-lg'>
                            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                        </p>
                    </div>
                    <div className='flex flex-col items-center md:flex-row'>
                        <Link to='/blogs' className='btn md:w-auto md:mr-4 btn-primary'>
                            <div className='inline-flex  items-center justify-center w-full h-full'>
                                <p className='mr-3'>Get Started</p>

                            </div>
                        </Link>

                    </div>
                </div>

                <div className='relative lg:w-1/2  '>
                    <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96 mt-5'>
                        {/* <img src='/src/assets/All Images/jobhunt.png' alt="" /> */}
                        {/* Lottie Animation */}

                        <Lottie animationData={jobHunt} loop={true} />
                    </div>
                </div>
            </div>

            {/* job category list */}
            <section class="container mx-auto lg:px-32 mb-28 mt-20">
                <>

                    <div class="text-center">
                        <h1 class="text-5xl font-bold">Job Category List</h1>
                        <p class="text-gray mt-8">
                            Explore thousands of job opportunities with all the information you need. Its your future.
                        </p>

                    </div>
                    <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-4 mt-16">
                        <div className="bg-slate-100 text-center p-5">
                            <img className='mx-auto mb-5' src="/src/assets/Icons/accounts 1.png" alt="" />
                            <h1 className="text-2xl font-bold">Account & Finance</h1>
                            <p className="text-gray"><small>300 Jobs Available</small></p>
                        </div>
                        <div className="bg-slate-100 text-center p-5">
                            <img className='mx-auto mb-5' src="/src/assets/Icons/business 1.png" alt="" />
                            <h1 className="text-2xl font-bold">Creative Design</h1>
                            <p className="text-gray"><small>100+ Jobs Available</small></p>
                        </div>
                        <div className="bg-slate-100 text-center p-5">
                            <img className='mx-auto mb-5' src="/src/assets/Icons/social-media 1.png" alt="" />
                            <h1 className="text-2xl font-bold">Marketing & Sales</h1>
                            <p className="text-gray"><small>150 Jobs Available</small></p>
                        </div>
                        <div className="bg-slate-100 text-center p-5">
                            <img className='mx-auto mb-5' src="/src/assets/Icons/chip 1.png" alt="" />
                            <h1 className="text-2xl font-bold">Engineering Job</h1>
                            <p className="text-gray"><small>224 Jobs Available</small></p>
                        </div>

                    </div>
                </>
            </section>

            {/* job feature */}
            <section class="container mx-auto lg:px-32 mb-5 mt-20">
                <>

                    <div class="text-center">
                        <h1 class="text-5xl font-bold">Featured Jobs</h1>
                        <p class="text-gray mt-8">
                            Explore thousands of job opportunities with all the information you need. Its your future.
                        </p>

                    </div>
                    <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 mt-16">
                        <div className="bg-slate-100 text-center p-5">
                            <img className='mx-auto mb-5' src="/src/assets/All Images/google-1-1 1.png" alt="" />
                            <h1 className="text-2xl font-bold">Account & Finance</h1>
                            <p className="text-gray"><small>300 Jobs Available</small></p>
                        </div>
                        <div className="bg-slate-100 text-center p-5">
                            <img className='mx-auto mb-5' src="/src/assets/Icons/business 1.png" alt="" />
                            <h1 className="text-2xl font-bold">Creative Design</h1>
                            <p className="text-gray"><small>100+ Jobs Available</small></p>
                        </div>
                        <div className="bg-slate-100 text-center p-5">
                            <img className='mx-auto mb-5' src="/src/assets/Icons/social-media 1.png" alt="" />
                            <h1 className="text-2xl font-bold">Marketing & Sales</h1>
                            <p className="text-gray"><small>150 Jobs Available</small></p>
                        </div>
                        <div className="bg-slate-100 text-center p-5">
                            <img className='mx-auto mb-5' src="/src/assets/Icons/chip 1.png" alt="" />
                            <h1 className="text-2xl font-bold">Engineering Job</h1>
                            <p className="text-gray"><small>224 Jobs Available</small></p>
                        </div>

                    </div>
                </>
            </section>
            <div>
                <Link to='/blogs' className='btn md:w-auto md:mr-4 btn-primary'>
                    <div className='inline-flex  items-center justify-center w-full h-full'>
                        <p className='mr-3'>See All Jobs</p>

                    </div>
                </Link>
            </div>
        </>

    );
};

export default Home;