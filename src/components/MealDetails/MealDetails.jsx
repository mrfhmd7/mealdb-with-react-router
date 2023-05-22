import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowDetails from '../ShowDetails/ShowDetails';

const MealDetails = () => {
     const mealDetails = useLoaderData();
     // console.log(mealDetails.meals);
     return (
          <div className='grid grid-cols-3 gap-4'>
               {
                    mealDetails.meals.map(meal => <ShowDetails
                         key={meal.idMeal}
                         mealDetails = {meal}
                    ></ShowDetails>)
               }
          </div>
     );
};

export default MealDetails;