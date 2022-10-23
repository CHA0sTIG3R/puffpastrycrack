import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Spinner } from 'react-bootstrap';

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  overflow: auto;
  position: relative;
`;

const Card = styled.div`
  min-height: 16rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img{
    max-height: 100%;
    max-width: 100%;
    position: absolute;
    border-radius: 2rem;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  a{
    text-decoration: none;
  }

  h4{
    text-align: center;
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
`
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;

function Recipes() {

  const [recipe, setRecipe] = useState([]);

  let params = useParams();

  const getRecipes = (name) => {
    axios.get(`https://puffpastrycrack.uk.r.appspot.com/get-recipes/${name}`)
      .then((response) => {
        setRecipe(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getRecipes(params.type);
  }, [params.type])

  return (
    <div>
      <h2 className='pt-3 mb-3' style={{color: '#f7f5f2'}}>{params.type} Recipes</h2>
      <Grid
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
      >
        {recipe.length? recipe.map((item) => {
          return(
            <Card key={item.id}>
              <Link to={'/recipe/'+item.id}>
                <img className='img-fluid' src={item.imgLocation} alt={item.name} />
                <h4>{item.name}</h4>
                <Gradient/>
              </Link>
            </Card>
          )
        }): <Spinner className='align-center' animation='border' variant='light'/> }
      </Grid>
    </div>
  )
}

export default Recipes