import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

function EditCarPage(props) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [maxSpeedInKm, setMaxSpeedInKm] = useState("");
  const [pricePerDay, setPricePerDay] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
  const { carId } = useParams();


  useEffect(() => {
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
        setName(oneCar.name);
        setImageUrl(oneCar.imageUrl);
        setMaxSpeedInKm(oneCar.maxSpeedInKm);
        setPricePerDay(oneCar.pricePerDay);
        setDescription(oneCar.description);

      })
      .catch((error) => console.log(error));

  }, [carId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { name, imageUrl, maxSpeedInKm, pricePerDay, description };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');

    // Send the token through the request "Authorization" Headers   
    axios
      .put(
        `${import.meta.env.VITE_API_URL}/cars/cars/${carId}`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        navigate(`/cars/${carId}`)
      });
  };


  const deleteCar = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');

    // Send the token through the request "Authorization" Headers   
    axios
      .delete(
        `${import.meta.env.VITE_API_URL}/cars/cars/${carId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then(() => navigate("/cars"))
      .catch((err) => console.log(err));
  };


  return (
    <div className="EditCarPage">
      <div className="form-container">
        <h3>Edit the Car</h3>

        <form onSubmit={handleFormSubmit}>

          <div className="mb-4">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="imege" className="form-label">Image:</label>
            <input
              type="file"
              name="image"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="imege" className="form-label">Max speed:</label>
            <input
              type="number"
              name="max speed"
              min="1" max="200"
              value={maxSpeedInKm}
              onChange={(e) => setMaxSpeedInKm(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="pricePerDay" className="form-label">Price per day, €:</label>
            <input
              type="number"
              name="price per day"
              min="1"
              value={pricePerDay}
              onChange={(e) => setPricePerDay(e.target.value)}
            />
          </div>

          <div className="mb-4">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          </div>

          <button type="submit" class="btn btn-outline-success">Update Car</button>
        </form>

        <button onClick={deleteCar} type="submit" class="btn btn-outline-danger">Delete Car</button>
      </div>
    </div>
  );
}

export default EditCarPage;