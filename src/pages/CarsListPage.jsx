import { useState, useEffect } from "react";
import axios from "axios";
import CarCardPage from "../pages/CarCardPage";
import { Link, useParams } from "react-router-dom";

function CarsListPage(props) {
  const [cars, setCars] = useState([]);
  const { imageUrl, maxSpeedInKm, pricePerDay } = useParams();

  const getAllCars = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(`${import.meta.env.VITE_API_URL}/cars/cars`)
      .then((response) => setCars(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllCars();
  }, []);

  return (
    <div className="CarsListPage">
      <h3>Cars</h3>
      <div className="container text-center">
        <div className="row row-cols-auto car-cards-container">


          {cars.map((car) => (

            <div key={car._id} className="col car-card-container">

              <CarCardPage
                key={car._id}
                carId={car._id}
                name={car.name}
                imageUrl={car.imageUrl}
                maxSpeedInKm={car.maxSpeedInKm}
                pricePerDay={car.pricePerDay}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarsListPage;