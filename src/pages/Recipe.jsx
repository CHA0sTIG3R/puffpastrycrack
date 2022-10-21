import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  
  .contain{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  @media (max-width: 800px) {
    .contain{
      flex-direction: column;
      align-items: center;
    }
  }

  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  .img{
    margin: 1.5rem;
    width: 50vh;
    height: auto;
  }
  img{
    height: 100%;
    width: 100%;
  }

  h2{
    margin-bottom: 2rem;
    color: #f7f5f2;
  }
  li{
    font-size: 1.2rem;
    line-height: 2rem;
    color: #f7f5f2;
  }
  ul{
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 1.5rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Details = styled.div`
  margin: 1.5rem;
  .btn{
    display: flex;
  }
`

function Recipe() {

  const [attributes, setAttributes] = useState({});
  const [selectedTab, setSelectedTab] = useState('ingredients');
  let params = useParams();

  const getRecipe = (id) => {
    axios.get(`https://puffpastrycrack.uk.r.appspot.com/get-recipe/${id}`)
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
    <div>
    <Wrapper>
      <div className="contain">
        <div className="img">
          <h2>{attributes.name}</h2>
          <img className='img-fluid' src={attributes.imgLocation} alt={attributes.name}/>
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
      </div>
    </Wrapper>
    </div>
  )
}

export default Recipe