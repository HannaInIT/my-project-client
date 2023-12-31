import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import ReservationCardPage from "../pages/ReservationCardPage";
import AddReservationPage from "./AddReservationPage";

function CarDetailsPage(props) {
  const [car, setCar] = useState(null);
  const [reservations, setReservations] = useState([]);
  const { carId } = useParams();

  const getCar = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');

    // Send the token through the request "Authorization" Headers
    axios
      .get(
        `${import.meta.env.VITE_API_URL}/cars/cars/${carId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        const oneCar = response.data;
        setCar(oneCar);
      })
      .catch((error) => console.log(error));


      
    axios
    .get(`${import.meta.env.VITE_API_URL}/reservations/reservations-by-car/${carId}`)
    .then((response) =>
      setReservations(response.data))
    .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCar();

  }, []);



  return (
    <div className="CarDetailsPage">

      <div className="container text-center">
        <div className="row">
          <div className="col-sm-8">
            <div className="card text-center">

              {car && (
                <>
                  <h1>{car.name}</h1>
                  <p>{car.imageUrl}</p>
                  <p>Max speed: {car.maxSpeedInKm}</p>
                  <p>Price per day: {car.pricePerDay}</p>
                  <p>Description: {car.description}</p>
                </>
              )}

              <Link to="/cars">
                <button type="button" className="btn btn-outline-secondary">Back to cars</button>
              </Link>

              <Link to={`/cars/${carId}/edit`}>
                <button type="submit" className="btn btn-outline-success">Edit Car</button>
              </Link>
            </div>
            <AddReservationPage refreshCars={getCar} carId={carId} />

          </div>
          <div className="col-sm-4">

       {reservations.length > 0 && <h3>Reservations</h3>}
      {reservations && reservations.map((reservation) => (
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

          </div>
        </div>
      </div>

  );
}

export default CarDetailsPage;