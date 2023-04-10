import { key } from 'localforage';
import React from 'react';
import { Link } from 'react-router-dom';

const HomeFeature = ({ feature }) => {
    // console.log('home',feature)
    return (
        <div className="bg-slate-100 p-5">
            <img className=' mb-5' src={feature.picture} alt="" />
            <h1 className="mt-10 text-2xl font-bold">{feature.title}</h1>
            <p className="mt-10 text-gray">{feature.name}</p>
            <div className='mt-10 flex justify-between'>
                {
                    feature.type.map((pd, index) => (
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
                <p className="text-gray"><small>{feature.location}</small></p>
                <p className="text-gray"><small>{feature.salary}</small></p>
            </div>
            <>
                <Link to='/startApplied'>
                    <button type='button' className='btn-primary'>
                        View Details
                    </button>
                </Link>
            </>

        </div>
    );
};

export default HomeFeature;