import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const jobDetail = useParams();
    //console.log('job details', jobDetail.jobId)
    const allJobData = useLoaderData();
    // console.log(allJobData);
    const [jobInfo, setJobInfo] = useState([])
    //console.log('job info', jobInfo)
    useEffect(() => {
        // console.log('all', allJobData)

        const find = allJobData.find(data => data.id === jobDetail.jobId);
        if (find) {
            setJobInfo(find);
        }


    }, [])


    return (
        <div>
            <div className='bg-slate-100 h-32 justify-center mb-20'>
                <h2 className='text-5xl font-bold mt-25 text-center pt-10 '>
                    Job Details
                </h2>
            </div>
            <div className='container text-left flex gap-10 '>
                <div className='bg-slate-100 flex-auto w-[70%] p-10'>
                    <p><span className='font-bold'>Job Description:</span> <small>{jobInfo.jobDescription}</small></p>
                    <p><span className='font-bold'>Job Responsibility:</span> <small>{jobInfo.jobResponsibility}</small></p>
                    <p><span className='font-bold'>Educational Requirements::</span> <small>{jobInfo.educationRequirements}</small></p>
                    <p><span className='font-bold'>Experiences:</span> <small>{jobInfo.exprience}</small></p>
                </div>
                <div className=' bg-slate-400  flex-auto w-[30%]'>
                    <h2>Title: {jobInfo.title}</h2>
                </div>
            </div>

            {/* <Link
                    to='/'
                    className='px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900'
                >
                    Back to homepage
                </Link> */}
            <div className='mt-20'>
                <a href="/" className='px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900'>
                    Back to homepage
                </a>
            </div>




        </div>
    );
};

export default JobDetails;