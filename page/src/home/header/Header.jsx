import React from 'react'
import './header.scss'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import imagem from './vw.jpg'
import imagem2 from './bmw2.jpg'
import imagem3 from './bmw.jpg'

export default function Header() {
  return (
    <div className='header'>
    

      <div className='carousel'>
      <Carousel className='carousel-bootstrap'>
        <Carousel.Item className='item' interval={3500}>
          <img
            src={imagem}
            alt="Image One"
          />
           <div className="box">
              <h2>CONCESSIONÁRIA AUTORIZADA <span>WEB MOTORS</span></h2>
              <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro minus labore debitis</h3>
              <a href="#produtos">
              <button>
                ver ofertas
              </button> </a>
            </div>
          
        </Carousel.Item>
        <Carousel.Item className='item' interval={3500}>
          <img
            src={imagem2}
            alt="Image Two"
          />
          <div className="box">
              <h2>CONCESSIONÁRIA AUTORIZADA <span>WEB MOTORS</span></h2>
              <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro minus labore debitis</h3>
              <a href="#produtos">
              <button>
                ver ofertas
              </button> </a>
            </div>
        </Carousel.Item>
        <Carousel.Item className='item' interval={3500}>
          <img
            src={imagem3}
            alt="Image Two"
          />
          <div className="box">
              <h2>CONCESSIONÁRIA AUTORIZADA <span>WEB MOTORS</span></h2>
              <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro minus labore debitis</h3>
              <a href="#produtos">
              <button>
                ver ofertas
              </button> </a>
            </div>
        </Carousel.Item>
      </Carousel>
    </div>
       
    </div>
  )
}
