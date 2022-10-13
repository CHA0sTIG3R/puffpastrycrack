import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  img{
    width: 100%;
    height: 70%;
    object-fit: cover;
  }

  h2{
    margin-bottom: 2rem;
  }
  li{
    font-size: 1.2rem;
    line-height: 2rem;
  }
  ul{
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Details = styled.div`
  margin-left: 10rem;
  .btn{
    display: flex;
  }
`

function Recipe() {

  const [attributes, setAttributes] = useState({});
  const [selectedTab, setSelectedTab] = useState('ingredients');
  let params = useParams();

  const getRecipe = (id) => {
    axios.get(`http://localhost:8080/get-recipe/${id}`)
      .then((response) => {
        console.log(response.data);
        setAttributes(response.data);
      })
      .catch((err) => {
        console.log(err)
      })
  };

  useEffect(() => {
    getRecipe(params.id);
  }, [params.id])

  return (
    <Wrapper>
      <div>
        <h2>{attributes.name}</h2>
        <img src={attributes.imgLocation} alt={attributes.name}/>
      </div>
      <Details>
        <div className='btn'>
          <Button 
            className={selectedTab === 'ingredients'? 'active': ''} 
            onClick={() => setSelectedTab('ingredients')}
          >
            Ingredients
          </Button>
          <Button 
            className={selectedTab === 'instructions'? 'active': ''} 
            onClick={() => setSelectedTab('instructions')}
          >
            Instructions
          </Button>
        </div>
        <h3>{attributes.description}</h3>
        {selectedTab === 'ingredients'&&(
          <div>
            <ul>
              {attributes.ingredients ? attributes.ingredients.map((ing, index) => (
                <li key={index}>{ing}</li>
              )) : ''}
            </ul>
          </div>
        )}
        {selectedTab === 'instructions' &&(
          <div>
              <ul>
              {attributes.directions ? attributes.directions.map((dir, index) => (
                <li key={index}>{dir}</li>
              )) : ''}
              </ul>
          </div>
        )}
        
      </Details>
    </Wrapper>
  )
}

export default Recipe