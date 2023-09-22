import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CarsListPage from "./pages/CarsListPage";
import CarDetailsPage from "./pages/CarDetailsPage";
import EditCarPage from "./pages/EditCarPage";

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>      
        <Route path="/" element={<HomePage />} />

        <Route path="/cars" element={<CarsListPage />} />

        {/* <Route
          path="/addcar"
          element={ <IsPrivate> <AddCar /> </IsPrivate> } 
        /> */}

        <Route
          path="/cars/:carId"
          element={ <IsPrivate> <CarDetailsPage /> </IsPrivate> }
        />

        <Route
          path="/cars/edit/:carId"
          element={ <IsPrivate> <EditCarPage /> </IsPrivate> } 
        />
        
        <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />

      </Routes>
    </div>
  );
}

export default App;
