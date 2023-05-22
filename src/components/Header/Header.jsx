import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
     return (
          <>
               <div className='bg-teal-800 text-white font-bold rounded-lg w-11/12 mx-auto h-14 flex justify-center items-center gap-x-16'>
                    <ActiveLink  to='/'>Home</ActiveLink>
                    <ActiveLink to='meals'>Meals</ActiveLink>
               </div>
          </>
     );
};

export default Header;