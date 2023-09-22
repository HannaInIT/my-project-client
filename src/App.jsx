import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import CarsListPage from "./pages/CarsListPage";
// import CarsListPage from "./pages/CarsListPage";
// import CarDetailsPage from "./pages/CarDetailsPage";
// import EditCarPage from "./pages/EditCarPage";
// import AddCarPage from "./pages/AddCarPage"

// import SignupPage from "./pages/SignupPage";
// import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import AddCar from "./pages/AddCarPage";
 import IsAnon from "./components/IsAnon";
import LoginPage from "./pages/LoginPage";
import AddCarPage from "./pages/AddCarPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>      
        <Route path="/" element={<HomePage />} />

         <Route path="/cars" element={<CarsListPage />} />

       <Route
          path="/addcar"
          element={ <IsPrivate> <AddCarPage/> </IsPrivate> } 
        />
 {/*
        <Route
          path="/cars/:carId"
          element={ <IsPrivate> <CarDetailsPage /> </IsPrivate> }
        />

        <Route
          path="/cars/:carId/edit"
          element={ <IsPrivate> <EditCarPage /> </IsPrivate> } 
        />
        
        <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} /> */}
        <Route path="/login" element={ <LoginPage /> } /> 

      </Routes>
    </div>
  );
}

export default App;
