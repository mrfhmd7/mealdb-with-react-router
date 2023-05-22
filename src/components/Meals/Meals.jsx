import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Meals = () => {
     const meals = useLoaderData();
     console.log(meals);
     return (
          <div>
               {
                    meals.categories.map(meal => console.log(meal))
               }
          </div>
     );
};

export default Meals;