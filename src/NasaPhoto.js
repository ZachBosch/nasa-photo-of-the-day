import React from 'react'
import styled from 'styled-components'

export default function NasaPhoto(props) {

    const{ nasaData } = props

    const StyledNasa = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    align-items: center;

    font-weight: bold;
    `
    const StyledPhoto = styled.img`
    max-width: 60%;
    margin: 3%;
  
    `
    const StyledContent = styled.div`
    margin: 2% 2%;
    width: 50%;
    `

    return (
        <StyledNasa>
          <StyledPhoto src={nasaData.hdurl} alt={nasaData.title} />
          <StyledContent>
            <p>©{nasaData.copyright}</p>
            <h3>Taken on: {nasaData.date}</h3>
            <h2>{nasaData.title}</h2>
            <p>{nasaData.explanation}</p>
            <h2>{}</h2>
          </StyledContent>
        </StyledNasa>
      );
}