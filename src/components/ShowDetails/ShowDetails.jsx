import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShowDetails = ({ mealDetails }) => {
     const {strArea, strMeal, strMealThumb} = mealDetails;
     // console.log(mealDetails);

     const navigate = useNavigate();
     const goBack = () => {
          navigate(-1);
     }

     return (
          <div className='border-2 border-green-800 rounded-lg'>
               <img className='mx-auto object-contain h-48 w-96' src={strMealThumb}/>
               <h2 className='text-2xl font-semibold'>Name: {strMeal}</h2>
               <h4 className='text-xl font-semibold'>Area: {strArea}</h4>
               <button className='bg-teal-900 text-white font-bold p-1 rounded mt-6 mb-1' onClick={goBack}>Back</button>
          </div>
     );
};

export default ShowDetails;