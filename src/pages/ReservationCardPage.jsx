// function ReservationCardPage() {
//     return (
//       <div>
//         <h1>This is reservation card page</h1>
//       </div>
//     );
//   }
   
//   export default ReservationCardPage;


import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom"; 
import AddReservationPage from "../pages/AddReservationPage";  
       
function ReservationCardPage (props) {
    const [reservation, setReservation] = useState(null);
   
    const getReservation = () => {
      axios
        .get(`${import.meta.env.VITE_API_URL}/reservations/reservations/${props.reservationId}`)
        .then((response) => {
          const oneReservation = response.data;
          setReservation(oneReservation);
        })
        .catch((error) => console.log(error));
    };
    
    
    useEffect(()=> {
      getReservation();
    }, [] );
   
    
    return (
      <div className="reservation-card">
        {reservation && (
          <>
            {/* <h1>{car.name}</h1> */}
            <p>Pickup Time: {reservation.pickupTime}</p>
            <p>Drop-off Time: {reservation.dropOffTime}</p>
            <p>Address: {reservation.address}</p>
            <p>Phone: {reservation.phone}</p>
           
          </>
        )}
        
        {/* <AddReservationPage refreshCar={getReservation} reservationId={props.reservationId} />     */}
   
             
        {/* { car && car.reservations.map((reservation) => (
          <ReservationCardPage key={reservation._id} {...reservation} /> 
        ))}  */}
        
   
        {/* <Link to="/reservations">
          <button>Back to reservations</button>
        </Link> */}
        
      </div>
    );
  }
   
  export default ReservationCardPage;