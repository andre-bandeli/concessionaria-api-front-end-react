import React from 'react'
import './financiamentos.scss'

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

export default function Financiamentos() {
  return (
    <div className='financiamentos'>
        <div className="title">

        <h2>Financiamentos e Consórcios</h2>
        <h3>Trabalhamos com as prinpais financiadoras do mercado!</h3>

        </div>
        <div className="container">
        <Accordion className='acordion'>
                                <AccordionItem className='ac'>
                                    <AccordionItemHeading className='head'>
                                        <AccordionItemButton className='h' >
                                            Financiamentos
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Transforme seu sonho de ter um carro novo em realidade com nossos planos de financiamento. 
                                            Oferecemos opções flexíveis e personalizadas para atender às suas necessidades e orçamento.
                                        </p>
                                        <p>
                                            Não deixe a falta de recursos financeiros atrapalhar a realização de 
                                            seu objetivo. Nós trabalhamos com as melhores instituições 
                                            financeiras para lhe oferecer taxas competitivas e prazos de pagamento que 
                                            cabem no seu bolso. Entre em contato conosco agora mesmo para mais
                                            informações e tire todas as suas dúvidas.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem className='ac'>
                                    <AccordionItemHeading className='head'>
                                        <AccordionItemButton className='h'>
                                            Consórcio
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                    <p>
                                        Adquira o carro dos seus sonhos com nossos planos de consórcio.
                                        Oferecemos opções flexíveis e personalizadas para atender às suas necessidades e orçamento.
                                    </p>
                                    <p>
                                        Com o consórcio, você tem a chance de adquirir um bem sem juros, sem burocracia e com 
                                        parcelas acessíveis. Não perca mais tempo e invista no seu futuro agora mesmo. 
                                        Entre em contato conosco para saber mais sobre nossas opções e condições.
                                    </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem className='ac'>
                                    <AccordionItemHeading className='head'>
                                        <AccordionItemButton className='h'>
                                            Seguros
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                    <p>
                                        Proteja seu veículo e a sua família com nossos seguros de automóvel. Oferecemos opções personalizadas 
                                        e adequadas ao seu orçamento, com coberturas completas e amplas para garantir a tranquilidade que você precisa.
                                    </p>
                                    <p>
                                        Não corra riscos desnecessários ao dirigir. Escolha nossos seguros e fique protegido contra imprevistos, 
                                        como colisões, furto, incêndios, entre outros. Entre em contato conosco para saber mais sobre nossas 
                                        opções de seguro e escolha a que melhor atende às suas necessidades.
                                    </p>
                                    </AccordionItemPanel>
                                </AccordionItem>     
                                <AccordionItem className='ac'>
                                    <AccordionItemHeading className='head'>
                                        <AccordionItemButton className='h'>
                                            Peças e Acessórios
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                    <p>
                                            Mantenha o seu veículo sempre em ótimas condições com nossas peças e acessórios de alta qualidade. 
                                            Oferecemos uma ampla variedade de itens, desde peças básicas até acessórios de alta performance, 
                                            tudo para garantir o melhor desempenho do seu carro.
                                            </p>
                                            <p>
                                            Não perca tempo procurando por peças e acessórios em diferentes lojas. Na nossa loja, você encontra 
                                            tudo o que precisa para manter o seu veículo sempre em pleno funcionamento. Entre em contato conosco 
                                            para saber mais sobre nossas opções e escolha o que melhor atende às suas necessidades.
                                            </p>
                                    </AccordionItemPanel>
                                </AccordionItem>     
                                <AccordionItem className='ac'>
                                    <AccordionItemHeading className='head'>
                                        <AccordionItemButton className='h'>
                                        Manutenção
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                    <p>
                                        Mantenha o seu veículo sempre em ótimo estado de funcionamento com nossos serviços de manutenção. 
                                        Nós oferecemos uma ampla gama de opções para garantir o desempenho ideal do seu carro.
                                        </p>
                                        <p>
                                        Não perca tempo procurando por diferentes mecânicos. Na nossa loja, você encontra profissionais altamente qualificados 
                                        para cuidar da manutenção do seu veículo. Entre em contato conosco para saber mais sobre nossos serviços 
                                        e escolher o que melhor atende às suas necessidades.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>     
                              
                    </Accordion>
        </div>

    </div>
  )
}
