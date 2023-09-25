function MyReservationsPage() {
  return (
    <div>
      <h1>This is my reservations page</h1>
    </div>
  );
}
 
export default MyReservationsPage;



// import { useState, useEffect } from "react";
// import axios from "axios";
// import ReservationCardPage from "../pages/ReservationCardPage";
// import { Link, useParams } from "react-router-dom";

// const API_URL = "http://localhost:5005";

// function MyReservationsPage(props) {
//   const [reservations, setReservations] = useState([]);
//   const { name, pickupTime, dropOffTime, address, phone } = useParams();
//   const { carId } = useParams();

//   const getAllReservations = () => {
//     // Get the token from the localStorage
//     const storedToken = localStorage.getItem("authToken");

//     // Send the token through the request "Authorization" Headers
//     axios
//       .get(`${import.meta.env.VITE_API_URL}/reservations/reservations`)
//       .then((response) => {
//         setReservations(response.data)
//         console.log(response.data);
//       })
//       .catch((error) => console.log(error));
//   };


//   // We set this effect will run only once, after the initial render
//   // by setting the empty dependency array - []
//   useEffect(() => {
//     getAllReservations();
//   }, []);

//   return (
//     <div className="MyReservationsPage">
//       <h3>Reservations</h3>

//       {reservations.map((reservation) => {
//         return (
//           <>
//         <p>{reservation.pickupTime}</p> 
//         <p>{reservation.dropOffTime}</p>
//         <p>{reservation.address}</p>
//         <p>{reservation.phone}</p>
//         </>
//         )
//       })

//       }

//       {/* {reservations.map((reservation) => (
        
//         <ReservationCardPage
//           carId ={props.carId}
//           key={props.reservationId}
//           name={props.name}
//           pickupTime={reservation.pickupTime}
//           dropOffTime={reservation.dropOffTime}
//           address={reservation.address}
//           phone={reservation.phone}
//         />
//       ))} */}
//     </div>
//   );
// }

// export default MyReservationsPage;


// //   <div className="MyReservationsPage">
// //   <h3>{name}</h3>

// //   <h4>Pick up time:</h4>
// //   <p>{pickupTime}</p>

// //   <h4>Drop off time:</h4>
// //   <p>{dropOffTime}</p>

// //   <h4>Address:</h4>
// //   <p>{address}</p>

// //   <h4>Phone:</h4>
// //   <p>{phone}</p>

// // </div>