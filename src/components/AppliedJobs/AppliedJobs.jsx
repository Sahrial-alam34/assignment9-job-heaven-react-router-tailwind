import React from 'react';
import { getStoredCart } from '../utilities/fakebd';
import { useLoaderData } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'


const people = [
    { name: 'Remote' },
    { name: 'Full Time' },
    { name: 'OnSite' },
    
]

const AppliedJobs = () => {
    const [selected, setSelected] = useState(people[0])
    const { cart, products } = useLoaderData();
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
            <div className='bg-slate-100 h-32 lg:pl-40 items-center justify-center mb-20'>
                <h2 className='text-5xl font-bold mt-25 text-center lg:pt-10 '>
                    Applied Job
                </h2>
            </div>

            {/* sorted by */}
            <div className="lg:ml-[800px] w-72 ">
                <Listbox value={selected} onChange={setSelected}>
                    <div className="relative mt-1">
                        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-cyan-200 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                            <span className="block truncate">{selected.name}</span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronUpDownIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </span>
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {people.map((person, personIdx) => (
                                    <Listbox.Option
                                        key={personIdx}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                            }`
                                        }
                                        value={person}
                                    >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                        }`}
                                                >
                                                    {person.name}
                                                </span>
                                                {selected ? (
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>
            </div>
         {/* sorted by end */}

            <div className='flex flex-col lg:max-w-3xl lg:p-6 space-y-4 sm:p-10 items-center justify-center lg:ml-48'>
                <h2 className='text-xl font-semibold'>{cart.length ? 'All Jobs Here' : 'Cart is Empty'}</h2>
                <ul className='flex flex-col divide-y divide-gray-700'>
                    {
                        cart.map(jobInfo => <CartItem
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