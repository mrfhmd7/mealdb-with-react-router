import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorHandle = () => {
     const error = useRouteError();
     console.log(error);
     return (
          <>
               <div className='w-4/5 mx-auto text-center mt-32'>
                    <h1 className='text-5xl font-semibold'>Oops!!!😢😢</h1>
                    <p className='text-4xl font-semibold mt-4'>Sorry, an unexpected error has occurred.</p>
                    <p className='mt-4 text-2xl'>
                         <i>{error.statusText || error.message}</i>
                    </p>
               </div>
          </>
     );
};

export default ErrorHandle;