import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

function AddCarPage(props) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [maxSpeedInKm, setMaxSpeedInKm] = useState("");
  const [pricePerDay, setPricePerDay] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { name, imageUrl, maxSpeedInKm, pricePerDay, description };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');

    // Send the token through the request "Authorization" Headers
    axios
      .post(
        `${import.meta.env.VITE_API_URL}/cars/cars`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        // Reset the state
        setName("");
        setImageUrl("");
        setMaxSpeedInKm("");
        setPricePerDay("");
        setDescription("");

        // props.refreshCars();

        navigate("/cars");
      })
      .catch((error) => {
        const errorDescription = error?.response?.data?.message||error;
        console.log(error)
        setErrorMessage(errorDescription);
      })
  };


  return (
    <div className="AddCar">
      <div className="form-container d-flex flex-column justify-content-center align-items-center">
        <h3>Add your car</h3>

        <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center align-items-center w-50 ">
          <div className="mb-4 ">

            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              className="w-100"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="image" className="form-label">Image</label>
            <input
              type="text"
              name="image"
              value={imageUrl}
              
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="maxSpeedInKm" className="form-label">Max speed</label>
            <input
              type="number"
              name="max speed"
              min="1" max="200"
              className="w-100"

              value={maxSpeedInKm}
              onChange={(e) => setMaxSpeedInKm(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="pricePerDay" className="form-label">Price per day, €</label>
            <input
              type="number"
              name="price per day"
              min="1"
              className="w-100"

              value={pricePerDay}
              onChange={(e) => setPricePerDay(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              type="text"
              name="description"
              className="w-100"

              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>

          { errorMessage && <p className="error-message">{errorMessage}</p> }
          
        </form>
      </div>
    </div>
  );
}

export default AddCarPage;