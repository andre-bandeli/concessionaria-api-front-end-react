import React from 'react'
import './header.scss'
import './variables.css'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import primeiraImagemSlider from './primeiraImagemSlider.jpg'
import segundaImagemSlider from './segundaImagemSlider.jpg'
import terceiraImagemSlider from './terceiraImagemSlider.webp'


export default function Header() {
  return (
    <div className='headerContainer'>
      <div className='carouselContainer'>
      <Carousel className='carouselBootstrap' indicators={false}>
        <Carousel.Item className='carouselItem' interval={3500}>
          <img
            src={primeiraImagemSlider}
            alt="Primeira imagem do slider: imagem de um carro cinza em uma estrada como background"
          />
           <div className="carouselItemContent">
              <h2>Concessionária Autorizada <br /> <span>WEB MOTORS</span></h2>
              <h3>Experimente a liberdade da estrada com um carro ou moto novo. Escolha entre uma ampla seleção de modelos à sua disposição.</h3>
              <a href="#produtos">
              <button>
                ver ofertas
              </button> </a>
            </div>
        </Carousel.Item>
        <Carousel.Item className='carouselItem' interval={3500}>
          <img
            src={terceiraImagemSlider}
            alt="Terceira imagem do slider: imagem de uma concessionária autorizada WEB MOTORS"
          />
          <div className="carouselItemContent-right">
              <h2>Concessionária Autorizada <br /> <span>WEB MOTORS</span></h2>
              <h3>Dirija o futuro. Descubra uma ampla variedade de opções de carros e motos à sua disposição</h3>
              <a href="#produtos">
              <button>
                ver ofertas
              </button> </a>
            </div>
        </Carousel.Item>
        <Carousel.Item className='carouselItem' interval={3500}>
          <img
            src={segundaImagemSlider}
            alt="Segunda imagem do slider: imagem de carros e motos novos e seminovos"
          />
          <div className="carouselItemContent">
              <h2>Novos e Seminovos<br /> <span>Carros e Motos</span></h2>
              <h3>Transforme sua viagem em uma experiência única com um carro de alta qualidade. Escolha agora mesmo.</h3>
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