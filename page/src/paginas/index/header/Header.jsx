import React from 'react'
import './header.scss'
import './variables.css'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import {primeiroSlide} from './slidesData'
import { useState } from 'react';


export default function Header() {


  const [inicialSlider] = useState(primeiroSlide);
  return (
    <div className='headerContainer'>
      <div className='carouselContainer'>
      <Carousel className='carouselBootstrap' indicators={false}>
          {inicialSlider.map((d) => (
            <Carousel.Item className='carouselItem' interval={3500}>
              <img
                src={d.imgSrc}
                alt={d.imgAlt} 
              />
              <div className="carouselItemContent">
                  <h2>{d.primeiroTexto} <br /> <span>{d.span}</span></h2>
                  <h3>{d.segundoTexto}</h3>
                  <a href="#produtos">
                  <button>
                    ver ofertas
                  </button> </a>
                </div>
            </Carousel.Item>
          ))}
      </Carousel>
      </div>
    </div>
  )
}
