import React from 'react';

const HomeFeature = ({ feature }) => {
    // console.log('home',feature)
    return (
        <div className="bg-slate-100 p-5">
            <img className=' mb-5' src={feature.picture} alt="" />
            <h1 className="mt-10 text-2xl font-bold">{feature.title}</h1>
            <p className="mt-10 text-gray">{feature.name}</p>
            <div className='mt-10 flex justify-between'>
            <p className="text-gray"><small>{feature.type[0]}</small></p> 
            <p className="text-gray"><small>{feature.type[1]}</small></p>
            </div>
            <div className='flex justify-between'>
            <p className="text-gray"><small>{feature.location}</small></p> 
            <p className="text-gray"><small>{feature.salary}</small></p>
            </div>
           
          
        </div>
    );
};

export default HomeFeature;