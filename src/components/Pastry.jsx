import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css'


const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative; 

  img{
    border-radius: 2rem;
    left: 0;
    position: absolute;
    max-height: 100%;
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;  
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;


function Pastry() {

  const [pastry, setPastry] = useState([]);

  useEffect(()=>{
    getPastry();
  }, []);

  const getPastry = () => {
    axios.get('http://localhost:8080/get-recipe/Pastry/6')
      .then((response) => {
        console.log(response.data)
        setPastry(response.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <Wrapper>
        <h3>Pastries</h3>
        <Splide options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '5rem'
        }}>
        {pastry.map((recipe) => {
          return(
            <SplideSlide key={recipe.id}>
              <Card>
                <p>{recipe.name}</p>
                <img src={recipe.imgLocation} alt={recipe.name} />
                <Gradient />
              </Card>
            </SplideSlide>
            );
          })}
          </Splide>
        </Wrapper>
    </div>
  )
}

export default Pastry