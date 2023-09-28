// function HomePage() {
//     return (
//       <div>
//         <h1>This is a home page</h1>
//       </div>
//     );
//   }
 
//   export default HomePage;


import { useState, useEffect } from 'react';
import axios from 'axios';

import image from '../assets/avtomobil.jpg'


function HomePage(props) {
    // const [cars, setCars] = useState(null);
    
    // useEffect(() => {
    //     axios
    //         .get(`${import.meta.env.VITE_API_URL}/cars`)
    //         .then((response) => {
    //           console.log(response.data)
    //             setCars(response.data);
    //         })
    //         .catch((e) => {
    //             console.log('error fetching cars....', e);
    //         });
    // }, []);

    // const renderList = () => {
    //     if (cars === null) {
    //         return <p>loading...</p>;
    //     }

    return (
       <div>
      <header>
          <h1>this is the homepage</h1>
          <img src={image} alt="Your Image" className='image-background' />
      </header>
  </div> 
    )
}

export default HomePage;


