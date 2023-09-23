import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import CarsListPage from "./pages/CarsListPage";
import AddCarPage from "./pages/AddCarPage";
import CarDetailsPage from "./pages/CarDetailsPage";
import EditCarPage from "./pages/EditCarPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

// import IsPrivate from "./components/IsPrivate";
// import IsAnon from "./components/IsAnon";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>      
        <Route path="/" element={<HomePage />} />


        <Route path="/cars" element={<CarsListPage />} />


       {/* <Route path="/addcar" element={ <IsPrivate> <AddCarPage/> </IsPrivate> } /> */}
      <Route path="/addcar" element={ <AddCarPage/> }  /> 
      
        {/* <Route path="/cars/:carId" element={ <IsPrivate> <CarDetailsPage /> </IsPrivate> } /> */}
       <Route path="/cars/:carId" element={ <CarDetailsPage />} /> 
       
        {/* <Route path="/cars/:carId/edit" element={ <IsPrivate> <EditCarPage /> </IsPrivate> }  /> */}
        <Route path="/cars/:carId/edit" element={ <EditCarPage /> }   /> 
             
        {/* <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} /> */}
        <Route path="/signup" element={ <SignupPage />} /> 


        {/* <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />  */}
        <Route path="/login" element={ <LoginPage /> } /> 

      </Routes>
    </div>
  );
}

export default App;
