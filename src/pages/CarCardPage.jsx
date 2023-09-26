import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom"; 
import AddCarPage from "../pages/AddCarPage";  
    
function CarCardPage (props) {
    const [car, setCar] = useState(null);
    // const { carId } = useParams();

  
    const getCar = () => {
      axios
        .get(`${import.meta.env.VITE_API_URL}/cars/cars/${props.carId}`)
        .then((response) => {
          const oneCar = response.data;
          setCar(oneCar);
        })
        .catch((error) => console.log(error));
    };
    
    
    useEffect(()=> {
      getCar();
    }, [] );
   
    
    return (
      <div className="CarCardPage">
        {car && (
          <>
            <h1>{car.name}</h1>
            <p>{car.pricePerDay}</p>
            <p>{car.maxSpeedInKm}</p>
            {/* <p>{car.description}</p> */}
          </>
        )}
        
        <Link to={`/cars/${props.carId}`}>
          <button>More details</button>
        </Link>      
        
      </div>
    );
  }
   
  export default CarCardPage;