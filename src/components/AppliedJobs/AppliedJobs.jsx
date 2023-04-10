import React from 'react';
import { getStoredCart } from '../utilities/fakebd';
import { useLoaderData } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';

const AppliedJobs = () => {

    const {cart,products} = useLoaderData();
    console.log(cart);
    // console.log(products);
    // const jData = useLoaderData();
    // //    console.log(jData);
    // let cart = [];
    // const savedCart = getStoredCart();
    // for(const id in savedCart){
    //     const foundProduct = jData.find(job=>job.id === id)
    //     if(foundProduct){
    //         cart.push(foundProduct);
    //     }
    // }
    // console.log(cart);


    return (
        <>
            <div className='bg-slate-100 h-32 pl-40 items-center justify-center mb-20'>
                <h2 className='text-5xl font-bold mt-25 text-center pt-10 '>
                    Applied Job
                </h2>
            </div>
            <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 items-center justify-center lg:ml-48'>
                <h2 className='text-xl font-semibold'>{cart.length?'All Jobs Here':'Cart is Empty'}</h2>
             <ul className='flex flex-col divide-y divide-gray-700'>
             {
                cart.map(jobInfo=><CartItem
                key={jobInfo.id}
                jobInfo={jobInfo}
                ></CartItem>)
               }
             </ul>
            </div>
        </>
    );
};

export default AppliedJobs;