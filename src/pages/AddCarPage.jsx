import { useState } from "react";
import axios from "axios";

function AddCarPage(props) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [maxSpeedInKm, setMaxSpeedInKm] = useState("");
  const [pricePerDay, setPricePerDay] = useState("");
  const [description, setDescription] = useState("");

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

        props.refreshCars();
      })
      .catch((error) => console.log(error));
  };


  return (
    <div className="AddCar">
      <h3>Add Car</h3>

      <form onSubmit={handleSubmit}>

        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Image:</label>
        <input
          type="file"
          name="image"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <label>Max speed:</label>
        <input
          type="number"
          name="max speed"
          min="1" max="200"
          value={maxSpeedInKm}
          onChange={(e) => setMaxSpeedInKm(e.target.value)}
        />

        <label>Price per day, €:</label>
        <input
          type="number"
          name="price per day"
          min="1"
          value={pricePerDay}
          onChange={(e) => setPricePerDay(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddCarPage;