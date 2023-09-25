function ReservationCardPage() {
    return (
      <div>
        <h1>This is reservation card page</h1>
      </div>
    );
  }
   
  export default ReservationCardPage;


// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Link, useParams } from "react-router-dom"; 
// import AddReservationPage from "../pages/AddReservationPage";  



// const API_URL = "http://localhost:5005";       


// function ReservationCardPage (props) {
//     const [reservation, setReservationn] = useState(null);
   
//     const getReservation = () => {
//       axios
//         .get(`${import.meta.env.VITE_API_URL}/reservations/reservations/${props.reservationId}`)
//         .then((response) => {
//           const oneReservation = response.data;
//           setCar(oneReservation);
//         })
//         .catch((error) => console.log(error));
//     };
    
    
//     useEffect(()=> {
//       getReservation();
//     }, [] );
   
    
//     return (
//       <div className="ReservationCardPage">
//         {reservation && (
//           <>
//             <h1>{car.name}</h1>
//             <p>{reservation.pickupTime}</p>
//             <p>{reservation.dropOffTime}</p>
//             <p>{reservation.address}</p>
//             <p>{reservation.phone}</p>
            
//           </>
//         )}
        
//         {/* <AddReservationPage refreshCar={getReservation} reservationId={props.reservationId} />     */}
   
             
//         {/* { car && car.reservations.map((reservation) => (
//           <ReservationCardPage key={reservation._id} {...reservation} /> 
//         ))}  */}
        
   
//         <Link to="/myreservations">
//           <button>Back to reservations</button>
//         </Link>
        
//       </div>
//     );
//   }
   
//   export default ReservationCardPage;