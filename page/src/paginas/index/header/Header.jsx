import React from 'react'
import './header.scss'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import primeiraImagemSlider from './vw.jpg'
import segundaImagemSlider from './bmw2.jpg'
import terceiraImagemSlider from './bmw.jpg'

export default function Header() {
  return (
    <div className='headerContainer'>
      <div className='carouselContainer'>
      <Carousel className='carouselBootstrap'>
        <Carousel.Item className='carouselItem' interval={3500}>
          <img
            src={primeiraImagemSlider}
            alt="Primeiro slider: imagem de um carro cinza em uma estrada como background"
          />
           <div className="carouselItemContent">
              <h2>Concessionária Autorizada <br /> <span>WEB MOTORS</span></h2>
              <br />
              <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro minus labore debitis</h3>
              <a href="#produtos">
              <button>
                ver ofertas
              </button> </a>
            </div>
          
        </Carousel.Item>
        <Carousel.Item className='carouselItem' interval={3500}>
          <img
            src={segundaImagemSlider}
            alt="Image Two"
          />
          <div className="carouselItemContent">
              <h2>Concessionária Autorizada <br /> <span>WEB MOTORS</span></h2>
              <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro minus labore debitis</h3>
              <a href="#produtos">
              <button>
                ver ofertas
              </button> </a>
            </div>
        </Carousel.Item>
        <Carousel.Item className='carouselItem' interval={3500}>
          <img
            src={terceiraImagemSlider}
            alt="Image Two"
          />
          <div className="carouselItemContent">
              <h2>Concessionária Autorizada <br /> <span>WEB MOTORS</span></h2>
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
