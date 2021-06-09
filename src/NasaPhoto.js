import React from 'react'

export default function NasaPhoto(props) {

    const{ nasaData } = props
    

    return (
        <div className="Nasa">
          <img src={nasaData.hdurl} alt={nasaData.title} />
          <p>©{nasaData.copyright}</p>
          <h3>Taken on: {nasaData.date}</h3>
          <h2>{nasaData.title}</h2>
          <p>{nasaData.explanation}</p>
          <h2>{}</h2>
        </div>
      );
}