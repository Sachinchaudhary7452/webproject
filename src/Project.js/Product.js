// import React, { useEffect, useState } from 'react';

// const Product = () => {
//   const [photoUrl, setPhotoUrl] = useState('');

//   useEffect(() => {
//     const fetchPhoto = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com');
//         const data = await response.json();
//         setPhotoUrl(data.url);
        
//       } catch (error) {
//         console.error('Error fetching photo:', error);
//       }
//     };

//     fetchPhoto();
//   }, []); // Empty dependency array ensures that the effect runs once after the initial render

//   return (
//     <div>
//       {photoUrl && <img src={'https://picsum.photos/id/870/200/300?grayscale&blur=2'} alt="Product" />}
//     </div>
//   );
// };

// export default Product;


// import React from 'react';
// const Product = () => {
//   const filefetch = fetch('https://jsonplaceholder.typicode.com/photos');
//   filefetch.then((value) => {
//     return value.json();
//   }). then((value1) => {
//     console.log(value1);
//   });
//   return (
//     <>
      
//     </>
//   );
// };

// export default Product;


//

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HeroSection from './HeroSection'; 

const Product = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await response.json();
        // Sirf pehli 10 photos ko slice method se select karein
        const firstTenPhotos = data.slice(0, 60);
        setPhotos(firstTenPhotos);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);
  return (
    <> 
    
    <div className='sc'>
      <h1>First 10 Photos</h1>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <img src={"//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg"} alt={photo.title} width={'250px'} />
            <img src={"https://m.media-amazon.com/images/I/71jI0AcBRjL._SL1500_.jpg"} alt={photo.title} width={'250px'} />
            <img src={"//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg"} alt={photo.title} width={'250px'} />
            <img src={"https://m.media-amazon.com/images/I/71jI0AcBRjL._SL1500_.jpg"} alt={photo.title} width={'250px'} />

          </li>
        ))}
      </ul>
      </div>
      <HeroSection></HeroSection>

    
    </>
  );
};

export default Product;








