import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`

  img{
    width: 100%;
    border-radius: 2rem;
  }

  a{
    text-decoration: none;
  }

  h4{
    text-align: center;
    padding: 1rem;
  }
`

function Recipes() {

  const [recipe, setRecipe] = useState([]);

  let params = useParams();

  const getRecipes = (name) => {
    axios.get(`http://localhost:8080/get-recipe/${name}`)
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
    <Grid>
      {recipe.map((item) => {
        return(
          <Card key={item.id}>
            <img src={item.imgLocation} alt={item.name} />
            <h4>{item.name}</h4>
          </Card>
        )
      })}
    </Grid>
  )
}

export default Recipes