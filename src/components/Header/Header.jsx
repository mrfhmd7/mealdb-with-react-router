import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
     return (
          <div className='bg-teal-800 text-white font-bold rounded-lg w-11/12 mx-auto h-14 flex justify-center items-center gap-x-16'>
               <Link to='/'>Home</Link>
               <Link to='meals'>Meals</Link>
          </div>
     );
};

export default Header;