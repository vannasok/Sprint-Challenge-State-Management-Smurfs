import React from 'react';

export const Cards = ({ smurfs }) => {
   return (
      <div>
         {smurfs.map(smurf => {
            return (
               <div className='card' key={smurf.id}>
                  <p>
                     NAME: <b>{smurf.name}</b>
                  </p>
                  <p>AGE: {smurf.age}</p>
                  <p>HEIGHT: {smurf.height}</p>
               </div>
            );
         })}
      </div>
   );
};
