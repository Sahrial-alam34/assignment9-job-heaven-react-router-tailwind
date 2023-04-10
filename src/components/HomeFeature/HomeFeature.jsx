import { key } from 'localforage';
import React from 'react';
import { Link } from 'react-router-dom';
import JobDetails from '../JobDetails/JobDetails';

const HomeFeature = ({ feature }) => {
    // console.log('home',feature)
    const { picture, title, name, type, location, salary, id } = feature;


    return (
        <div className="bg-slate-100 p-5 text-left">
            <img className=' mb-5' src={picture} alt="" />
            <h1 className="mt-10 text-2xl font-bold">{title}</h1>
            <p className="mt-10 text-gray">{name}</p>
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
                {/* <p className="text-gray"><small>{feature.type[0]}</small></p> 
            <p className="text-gray"><small>{feature.type[1]}</small></p> */}
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
            <>
                <Link to={`/jobDetails/${id}`}>
                    <button type='button' className='btn-primary'>
                        View Details
                    </button>
                </Link>
            </>

        </div>
    );
};

export default HomeFeature;