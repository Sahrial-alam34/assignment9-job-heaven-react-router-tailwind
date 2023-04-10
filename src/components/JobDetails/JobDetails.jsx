import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const jobDetail = useParams();
    console.log('job details', jobDetail.jobId)
    const allJobData = useLoaderData();
    // console.log(allJobData);
    const [jobInfo,setJobInfo] = useState([])
    console.log('job info',jobInfo)
    useEffect(()=>{
        console.log('all',allJobData)
        
        const find = allJobData.find(data=>data.id === jobDetail.jobId);
        if(find){
            setJobInfo(find);
        }
       
       
    },[])
   
    
    return (
        <div>
            <h2>This is job details page</h2>
            <div className='container'>
              <h2>Title{jobInfo.title}</h2>
            </div>
            
            {/* <Link
                    to='/'
                    className='px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900'
                >
                    Back to homepage
                </Link> */}
              
                

        </div>
    );
};

export default JobDetails;