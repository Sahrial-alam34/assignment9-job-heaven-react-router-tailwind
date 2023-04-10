import React from 'react';

const HomeFindJob = ({findJob}) => {
    // console.log(findJob)
    return (
        <div className="bg-slate-100 text-center p-5">
            <img className='mx-auto mb-5' src={findJob.picture} alt="" />
            <h1 className="text-2xl font-bold">{findJob.title}</h1>
            <p className="text-gray mt-5"><small>{findJob.availability}</small></p>
        </div>
        
    );
};

export default HomeFindJob;