import { useState, useEffect } from "react";
import axios from "axios";
import ReservationCardPage from "../pages/ReservationCardPage";
import { Link, useParams } from "react-router-dom";

function ReservationsListPage(props) {
  const [reservations, setReservations] = useState([]);
  const { pickupTime, dropOffTime, address, phone } = useParams();
  const { carId } = useParams()

  const getAllReservations = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers

    axios
      .get(`${import.meta.env.VITE_API_URL}/reservations/reservations-by-car/${props.carId}`)
      .then((response) =>
        setReservations(response.data))
      .catch((error) => console.log(error));
  }

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllReservations();
  }, []);

  return (
    <div className="ReservationsListPage">
       {reservations.length > 0 && <h3>Reservations</h3>}

      {reservations.map((reservation) => (
        <ReservationCardPage
          reservationId={reservation._id}
          key={reservation._id}
          pickupTime={reservation.pickupTime}
          dropOffTime={reservation.dropOffTime}
          address={reservation.address}
          phone={reservation.phone}
        />
      ))}

      
     
      

    </div>
  );
}

export default ReservationsListPage;

