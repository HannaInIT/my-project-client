import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import AddReservation from "../components/AddReservation";

import ReservationCard from "../components/ReservationCard";

const API_URL = "http://localhost:5005";


function CarDetailsPage (props) {
  const [car, setCar] = useState(null);
  const { carId } = useParams();
  
  
  const getCar = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');

    // Send the token through the request "Authorization" Headers
    axios
      .get(
        `${import.meta.env.VITE_API_URL}/api/cars/${carId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        const oneCar = response.data;
        setProject(oneCar);
      })
      .catch((error) => console.log(error));
  };
  
  
  useEffect(()=> {
    getCar();
  }, [] );

  
  return (
    <div className="CartDetails">
      {car && (
        <>
          <h1>{car.name}</h1>
          <p>{car.imageUrl}</p>
          <p>{car.maxSpeedInKm}</p>
          <p>{car.pricePerDay}</p>
          <p>{car.description}</p>
        </>
      )}

      
      <AddReservation refreshCar={getCar} carId={carId} />          

      { car && car.reservations.map((task) => <ReservationCard key={reservation._id} {...reservation} /> )} 

      <Link to="/cars">
        <button>Back to cars</button>
      </Link>
          
      <Link to={`/cars/edit/${carId}`}>
        <button>Edit Car</button>
      </Link>
      
    </div>
  );
}

export default CarDetailsPage;