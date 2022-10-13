import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
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

function Searched() {

  const [searched, setSearched] = useState([]);
  let params = useParams();

  const getSearchResults = (name) => {
    axios.get('http://localhost:8080/search-recipe',{params:{
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
    <Grid>
      {searched.map((item) => {
        return(
          <Card key={item.id}>
            <Link to={'/recipe/'+item.id}>
              <img src={item.imgLocation} alt={item.name} />
              <h4>{item.name}</h4>
            </Link>
          </Card>
        )
      })}
    </Grid>
  )
}

export default Searched