import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import ReservationCardPage from "../pages/ReservationCardPage";
import AddReservationPage from "./AddReservationPage";
import ReservationsListPage from "./ReservationsListPage"

function CarDetailsPage(props) {
  const [car, setCar] = useState(null);
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
                <button type="button" class="btn btn-outline-secondary">Back to cars</button>
              </Link>

              <Link to={`/cars/${carId}/edit`}>
                <button type="submit" class="btn btn-outline-success">Edit Car</button>
              </Link>
            </div>
            <AddReservationPage refreshCar={getCar} carId={carId} />

          </div>
          <div className="col-sm-4">

            <ReservationsListPage refreshCar={getCar} carId={carId} />

            {car && car.reservations && car.reservations.map((reservation) => (
              <ReservationCardPage key={reservation._id} {...reservation} />))}

          </div>
        </div>
      </div>
    </div>


  );
}

export default CarDetailsPage;