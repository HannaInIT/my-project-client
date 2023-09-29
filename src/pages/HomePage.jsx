import { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage(props) {

    const netlifyUrl = "https://project-retro-legend.netlify.app/"

    return (
       <div>
      <header>
          <img src="public/images/avtomobil.jpg" className="card-img-top" alt="car-image" />
      </header>
      <footer>
      <div className="p-3 text-center">
      <h6>Created by Ironhacker Hanna</h6>
      <a href={netlifyUrl}>Netlify Project</a>
      </div>
      </footer>
  </div> 
    )
}

export default HomePage;



