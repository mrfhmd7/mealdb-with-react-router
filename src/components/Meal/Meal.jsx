import React from 'react';
import { Link } from 'react-router-dom';

const Meal = ({ meal }) => {
     const {strCategory, strCategoryThumb} = meal;
     return (
          <div className='border-2 border-emerald-500 rounded-lg'>
               <h2 className='text-xl font-bold'>{strCategory}</h2>
               <img className='w-36 h-32 mx-auto' src={strCategoryThumb} />  
               <Link to={`/meal/${strCategory}`}><button className='border-2 font-semibold p-2 bg-lime-800 text-white rounded-md mb-1'>See all</button></Link>
          </div>
     );
};

export default Meal;