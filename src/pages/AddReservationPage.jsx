import { useState } from "react";
import axios from "axios";

function AddReservationPage(props) {
  const [pickupTime, setPickupTime ] = useState("");
  const [dropOffTime, setDropOffTime ] = useState("");
  const [address, setAddress ] = useState("");
  const [phone, setPhone] = useState("");

  const { carId } = props;
  
  const handleSubmit = (e) => {
    e.preventDefault(); 

    // We need the project id when creating the new task
   
    // Create an object representing the body of the POST request
    const requestBody = { pickupTime, dropOffTime, address, phone, carId };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');

    // Send the token through the request "Authorization" Headers   
    axios
      .post(
        `${import.meta.env.VITE_API_URL}/reservations/reservations`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }        
      )
      .then((response) => {
        // Reset the state to clear the inputs
        setPickupTime("");
        setDropOffTime("");
        setAddress("");
        setPhone("");
      
        // Invoke the callback function coming through the props
        // from the ProjectDetailsPage, to refresh the project details
        props.refreshCars();
      })
      .catch((error) => console.log(error));
  };

  
  return (
    <div className="AddReservationPage">
      <h3>Add New Reservation</h3>
      
      <form onSubmit={handleSubmit}>

        <label>Pick up time:</label>
        <input
          type="text"
          name="pickupTime"
          value={pickupTime}
          onChange={(e) => setPickupTime(e.target.value)}
        />

      <label>Drop off time:</label>
        <input
          type="text"
          name="dropOffTime"
          value={dropOffTime}
          onChange={(e) => setDropOffTime(e.target.value)}
        />

        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button type="submit">Add Reservation</button>
      </form>
    </div>
  );
}

export default AddReservationPage;