import React from 'react';

export const Cards = ({ smurfs }) => {
   return (
      <div>
         {smurfs.map(smurf => {
            return (
               <div className='card' key={smurf.id}>
                  <h3>
                     NAME: <b>{smurf.name}</b>
                  </h3>
                  <p>AGE: {smurf.age}</p>
                  <p>HEIGHT: {smurf.height}</p>
               </div>
            );
         })}
      </div>
   );
};
