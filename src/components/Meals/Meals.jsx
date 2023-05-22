import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';

const Meals = () => {
     const meals = useLoaderData();
     // console.log(meals);
     return (
          <div className='grid grid-cols-4 gap-4 border'>
               {
                    meals.categories.map(meal => <Meal
                         key={meal.idCategory}
                         meal = {meal}
                    >
                    </Meal>)
               }
          </div>
     );
};

export default Meals;