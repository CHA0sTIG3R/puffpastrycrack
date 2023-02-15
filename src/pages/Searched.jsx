import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Spinner } from 'react-bootstrap';


const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  position: relative;
`;

const Card = styled.div`
  min-height: 16rem;
  max-width: 25rem;
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

function Searched() {

  const [searched, setSearched] = useState([]);
  let params = useParams();

  const getSearchResults = (name) => {
    axios.get('https://puffpastrycrack.uk.r.appspot.com/search-recipe',{params:{
      query: name
    }})
      .then((response) => {
        setSearched(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  };

  useEffect(() => {
    getSearchResults(params.search);
  }, [params.search]);

  return (
    <div className='pt-5 mb-5'>
      <Grid
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
      >
        {searched.length? searched.map((item) => {
          return(
            <Card key={item.id}>
              <Link to={'/recipe/'+item.id}>
                <img className='img-fluid' src={item.imgLocation} alt={item.name} />
                <h4>{item.name}</h4>
                <Gradient/>
              </Link>
            </Card>
          )
        }): <Spinner className='align-center' animation='border' variant='dark'/> }
      </Grid>
    </div>
    
  )
}

export default Searched