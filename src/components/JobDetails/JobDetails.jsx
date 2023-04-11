import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../utilities/fakebd';
import { toast } from 'react-hot-toast';

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

    const handleAddToCart = id => {
        //console.log('add to cart', id)
        addToDb(id);
        return toast.success('Job Applied!!!')
    }

    return (
        <div>
            <div className='bg-slate-100 h-32 justify-center mb-20'>
                <h2 className='text-5xl font-bold lg:mt-25 text-center lg:pt-10 '>
                    Job Details : {jobInfo.name}
                </h2>
            </div>
            <div className='container text-left lg:flex gap-10 '>
                <div className='bg-slate-100 flex-auto lg:w-[70%] p-10'>
                    <p><span className='font-bold '>Job Description:</span> <small>{jobInfo.jobDescription}</small></p>
                    <p className='mt-5'><span className='font-bold'>Job Responsibility:</span> <small>{jobInfo.jobResponsibility}</small></p>
                    <p className='mt-5'><span className='font-bold'>Educational Requirements::</span> <small>{jobInfo.educationRequirements}</small></p>
                    <p className='mt-5'><span className='font-bold'>Experiences:</span> <small>{jobInfo.exprience}</small></p>
                </div>
                <div className=' bg-cyan-100  flex-auto lg:w-[30%] p-10'>
                    <div>
                        <p className='font-bold mb-5'>Job Details</p>
                        <hr className='border-solid border-cyan-700' />
                        <div>
                            <div className='flex gap-3 mt-4'>
                            <img src="https://i.ibb.co/v3xCGcr/Frame.png" alt="Frame" border="0"/>
                                <p><span className='font-bold'>Salary:</span> <small>{jobInfo.salary}</small></p>

                            </div>
                            <div className='flex gap-3 mt-4'>
                            <img src="https://i.ibb.co/z7D278N/Frame-1.png" alt="Frame-1" border="0"/>
                                <p><span className='font-bold'>Job Title:</span> <small>{jobInfo.title}</small></p>

                            </div>
                        </div>
                    </div>

                    <div className='mt-10'>
                        <p className='font-bold mb-5'>Contact Information</p>
                        <hr className='border-solid border-cyan-700' />
                        <div>
                            <div className='flex gap-3 mt-4'>
                            <img src="https://i.ibb.co/N3B1mkk/Frame-2.png" alt="Frame-2" border="0"/>
                                <p><span className='font-bold'>Phone:</span> <small>{jobInfo.phone}</small></p>

                            </div>
                            <div className='flex gap-3 mt-4'>
                            <img src="https://i.ibb.co/XS5WQMq/Frame-3.png" alt="Frame-3" border="0"/>
                                <p><span className='font-bold'>Email:</span> <small>{jobInfo.email}</small></p>

                            </div>
                            <div className='flex gap-3 mt-4'>
                            <img src="https://i.ibb.co/3v3pwp6/Frame-4.png" alt="Frame-4" border="0"/>
                                <p><span className='font-bold'>Address:</span> <small>{jobInfo.address}</small></p>

                            </div>

                        </div>


                    </div>


                </div>

            </div>

            <div className='text-right mb-5'>

                <button onClick={() => handleAddToCart(jobInfo.id)} type='button' className='btn-primary w-full lg:w-[350px]'>
                    Apply Now
                </button>

            </div>
         

            <Link
            to='/'
            className='px-8 py-3 font-semibold rounded  bg-cyan-200 text-gray-900'
          >
            Back to Homepage
          </Link>


        </div>
    );
};

export default JobDetails;