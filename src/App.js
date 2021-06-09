import React, { useState, useEffect } from "react";
import MarsPhoto from './MarsPhoto'
import NasaPhoto from './NasaPhoto'
import axios from 'axios'
import "./App.css";
import { API_KEY, BASE_URL, MARS_URL } from "./constants";

function App() {
  const [nasaData, setNasaData] = useState([])
  const [marsPhoto, setMarsPhoto] = useState([])

  useEffect(() => {
    axios
    .get(`${BASE_URL}${API_KEY}`)
    .then(res => {
      setNasaData(res.data)
      console.log('NASA', res.data)
    })
    .catch(err => {
      console.log('AXIOS ERROR')
    })
  }, [])

  // useEffect(() => {
  //   axios
  //   .get(`${MARS_URL}${API_KEY}`)
  //   .then(res => {
  //     setMarsPhoto(res.data)
  //     console.log('Mars', res.data)
  //   })
  //   .catch(err => {
  //     console.log('AXIOS ERROR')
  //   })
  // }, [])
  

  
  return (
    <div className="App">
      <header>
        <h1>NASA</h1>
        <h2>Astronomy Photo of the Day</h2>
      </header>
      <NasaPhoto nasaData={nasaData} />
      <footer>
        <h3>Thanks for looking at NASA stuff!</h3>
      </footer>
    </div>
  );
}

export default App;
