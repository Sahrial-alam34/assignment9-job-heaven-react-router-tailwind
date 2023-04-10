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
                    <p><span className='font-bold '>Job Description:</span> <small>{jobInfo.jobDescription}</small></p>
                    <p className='mt-5'><span className='font-bold'>Job Responsibility:</span> <small>{jobInfo.jobResponsibility}</small></p>
                    <p className='mt-5'><span className='font-bold'>Educational Requirements::</span> <small>{jobInfo.educationRequirements}</small></p>
                    <p className='mt-5'><span className='font-bold'>Experiences:</span> <small>{jobInfo.exprience}</small></p>
                </div>
                <div className=' bg-cyan-100  flex-auto w-[30%] p-10'>
                    <div>
                        <p className='font-bold mb-5'>Job Details</p>
                        <hr  className='border-solid border-cyan-700' />
                        <div>
                            <div className='flex gap-3 mt-4'>
                                <img src="/src/assets/Icons/Frame.png" alt="" />
                                <p><span className='font-bold'>Salary:</span> <small>{jobInfo.salary}</small></p>

                            </div>
                            <div className='flex gap-3 mt-4'>
                                <img src="/src/assets/Icons/Frame-1.png" alt="" />
                                <p><span className='font-bold'>Job Title:</span> <small>{jobInfo.title}</small></p>

                            </div>
                        </div>
                    </div>

                    <div className='mt-10'>
                        <p className='font-bold mb-5'>Contact Information</p>
                        <hr  className='border-solid border-cyan-700' />
                        <div>
                            <div className='flex gap-3 mt-4'>
                                <img src="/src/assets/Icons/Frame-2.png" alt="" />
                                <p><span className='font-bold'>Phone:</span> <small>{jobInfo.phone}</small></p>

                            </div>
                            <div className='flex gap-3 mt-4'>
                                <img src="/src/assets/Icons/Frame-3.png" alt="" />
                                <p><span className='font-bold'>Email:</span> <small>{jobInfo.email}</small></p>

                            </div>
                            <div className='flex gap-3 mt-4'>
                                <img src="/src/assets/Icons/Frame-4.png" alt="" />
                                <p><span className='font-bold'>Address:</span> <small>{jobInfo.address}</small></p>

                            </div>
                        </div>
                    </div>

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