// function EditCarPage() {
//     return (
//       <div>
//         <h1>This is edit car page</h1>
//       </div>
//     );
//   }
   
//   export default EditCarPage;

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const API_URL = "http://localhost:5005";

function EditCarPage(props) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [maxSpeedInKm, setMaxSpeedInKm] = useState("");
  const [pricePerDay, setPricePerDay] = useState("");
  const [description, setDescription] = useState("");

  const navigate =  useNavigate();
  const { carId } = useParams();
  
  
  useEffect(() => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');
    
    // Send the token through the request "Authorization" Headers 
    axios
      .get(
        `${API_URL}/cars/cars/${carId}`,
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
    const requestBody = { title, description };
  
    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');  

    // Send the token through the request "Authorization" Headers   
    axios
      .put(
        `${API_URL}/cars/cars/${carId}`,
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
        `${API_URL}/cars/cars/${carId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }           
      )
      .then(() => navigate("/cars"))
      .catch((err) => console.log(err));
  };  

  
  return (
    <div className="EditCarPage">
      <h3>Edit the Car</h3>

      <form onSubmit={handleFormSubmit}>

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

        <button type="submit">Update Car</button>
      </form>

      <button onClick={deleteCar}>Delete Car</button>
    </div>
  );
}

export default EditCarPage;