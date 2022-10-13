import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Grid} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/grid';

const Panel = styled(motion.div)`
  margin: 4rem 0rem;
  .swiper-wrapper {
    /* now pagination is below slides */
    margin-bottom: 3em;
    /* just enough width so slides handing off screen are partially 
    visible */
    width: 73.8%;
  }
  @media (min-width: 37.5em) {
    .swiper-wrapper {
      /* now arrows appear */
      /* make room for arrows */
      width: 92%;
    }
  }
  @media (min-width: 43.75em) {
    .swiper-wrapper {
      /* make room for arrows */
      width: 95%;
    }
  }
`;

const Card = styled.div`
  min-height: 16.5rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img{
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    position: absolute;
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
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
    axios.get(`http://localhost:8080/get-recipes/${name}`)
      .then((response) => {
        setRecipe(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  };

  useEffect(() => {
    getRecipes(params.type);
  }, [params.type])


  return (
    <Panel
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
    >
      <Swiper 
        modules={[Navigation, Pagination, Grid]}
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={20}
        navigation
        pagination={{type: 'fraction'}}
        grid={{
          rows: 2,
          fill: 'row'
        }}
        breakpoints={{
          400:{
            slidesPerView: 1,
            spaceBetween: 30,
            slidesPerGroup: 1,
            grid: {
            rows: 2,
            fill: 'row'
            }
          },
          640:{
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 2,
            grid: {
            rows: 2,
            fill: 'row'
            }
          },
          1200:{
            slidesPerView: 3,
            spaceBetween: 40,
            slidesPerGroup: 3,
            grid: {
            rows: 3,
            fill: 'row'
            }
          },
          1920:{
            slidesPerView: 4,
            spaceBetween: 50,
            slidesPerGroup: 4,
            grid: {
            rows: 3,
            fill: 'row'
            }
          }
        }}
      >
        {recipe.map((item) => {
          return(
            <SwiperSlide key={item.id}>
              <Card>
                <Link to={'/recipe/'+item.id}>
                  <img src={item.imgLocation} alt={item.name} />
                  <h4>{item.name}</h4>
                  <Gradient/>
                </Link>
              </Card>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Panel>
  )
}

export default Recipes