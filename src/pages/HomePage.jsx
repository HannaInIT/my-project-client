function HomePage() {
    return (
      <div>
        <h1>This is a home page</h1>
      </div>
    );
  }
 
  export default HomePage;



// import { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// import axios from 'axios';


// function HomePage(props) {
//     const [cars, setCars] = useState(null);
    
//     useEffect(() => {
//         axios
//             .get(`${import.meta.env.VITE_API_URL}/cars`)
//             .then((response) => {
//               console.log(response.data)
//                 setCars(response.data);
//             })
//             .catch((e) => {
//                 console.log('error fetching cars....', e);
//             });
//     }, []);

//     const renderList = () => {
//         if (cars === null) {
//             return <p>loading...</p>;
//         }

//     return (
//         <header>
//             <h1>this is the homepage</h1>
//         </header>
//     )
// }
// }

// export default HomePage;