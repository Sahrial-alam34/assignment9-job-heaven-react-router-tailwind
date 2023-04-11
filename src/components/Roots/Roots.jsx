import React from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';


const Roots = () => {

    return (
        <div>
            <Header></Header>
            <div className='min-h-[calc(100vh-171px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Roots;