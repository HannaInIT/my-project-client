import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


function CarCardPage(props) {
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

  useEffect(() => {
    getCar();
  }, []);


  return (
    <div className="row">
      <div className="col-sm-8">
        <div className="card" style={{ width: "18rem" }}>
         

          <img src="public/images/image-car.jpg" className="card-img-top" alt="car-image" />
          
          <div className="card-body">
            {car && (
              <>
                <h5 className="card-title">{car.name}</h5>
                <p className="card-text"></p>
                <p>Price per day: {car.pricePerDay}</p>
                <p>Max speed: {car.maxSpeedInKm}</p>
              </>
            )}

            {/* <a href="#" className="btn btn-primary">More details</a> */}
            <Link to={`/cars/${props.carId}`} className="btn btn-primary">More details</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCardPage;



