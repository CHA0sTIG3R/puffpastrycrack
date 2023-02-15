import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css'
import { Spinner } from 'react-bootstrap';

const Card = styled.div`
  min-height: 16rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative; 

  img{
    border-radius: 2rem;
    left: 0;
    position: absolute;
    max-height: 100%;
    max-width: 100%;
    height: 100%;
    width: 100%;
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


function Culinary() {

  const [culinary, setCulinary] = useState([]);

  useEffect(()=>{
    getCulinary();
  }, []);

  const getCulinary = () => {
    axios.get('https://puffpastrycrack.uk.r.appspot.com/get-recipes/recent/culinary')
      .then((response) => {
        console.log(response.data)
        setCulinary(response.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
        <div>
        <h3>Recent <Link to='/recipes/Culinary'>Cookery</Link> Recipes</h3>
        <Splide options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '5rem',
          breakpoints:{
            990: {perPage: 3, gap: '2rem'},
            480: {perPage: 1, gap: '1rem'},
          }
        }}>
        {culinary.length? culinary.map((recipe) => {
          return(
            <SplideSlide key={recipe.id}>
              <Card>
                <Link to={'/recipe/'+recipe.id}>
                  <p>{recipe.name}</p>
                  <img src={recipe.imgLocation} className='img-fluid' alt={recipe.name} />
                  <Gradient />
                </Link>
              </Card>
            </SplideSlide>
            );
          }) : <Spinner className='align-center' animation='border' variant='dark'/>}
          </Splide>
        </div>
    </div>
  )
}

export default Culinary