import React from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';


const Roots = () => {
   
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
           
        </div>
    );
};

export default Roots;