import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
     return (
          <div>
               <Header></Header>
               <h1 className='text-5xl font-semibold my-9'>This is Home page</h1>
               <Outlet></Outlet>
          </div>
     );
};

export default Home;