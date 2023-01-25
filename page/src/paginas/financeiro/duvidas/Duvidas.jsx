import React from 'react'
import './duvidas.scss'

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

export default function Duvidas() {
  return (
    <div className='duvidas'>
        <div className="container-duvidas">

        <h2>Principais dúvidas</h2>
        <h3>Retire aqui algumas das principais dúvidas sobre o processo de financiamento.</h3>
        
        <Accordion className='acordion'>
                                <AccordionItem className='ac'>
                                    <AccordionItemHeading className='head'>
                                        <AccordionItemButton className='h' >
                                            Financiamentos
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <h3>
                                            Exercitation in fugiat est ut ad ea cupidatat ut in
                                            cupidatat occaecat ut occaecat consequat est minim minim
                                            esse tempor laborum consequat esse adipisicing eu
                                            reprehenderit enim.
                                        </h3>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem className='ac'>
                                    <AccordionItemHeading className='head'>
                                        <AccordionItemButton className='h'>
                                            Consórcio
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <h3>
                                            Exercitation in fugiat est ut ad ea cupidatat ut in
                                            cupidatat occaecat ut occaecat consequat est minim minim
                                            esse tempor laborum consequat esse adipisicing eu
                                            reprehenderit enim.
                                        </h3>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem className='ac'>
                                    <AccordionItemHeading className='head'>
                                        <AccordionItemButton className='h'>
                                            Condições contratuais
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <h3>
                                            Exercitation in fugiat est ut ad ea cupidatat ut in
                                            cupidatat occaecat ut occaecat consequat est minim minim
                                            esse tempor laborum consequat esse adipisicing eu
                                            reprehenderit enim.
                                        </h3>
                                    </AccordionItemPanel>
                                </AccordionItem>     
                                <AccordionItem className='ac'>
                                    <AccordionItemHeading className='head'>
                                        <AccordionItemButton className='h'>
                                            Condições contratuais
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <h3>
                                            Exercitation in fugiat est ut ad ea cupidatat ut in
                                            cupidatat occaecat ut occaecat consequat est minim minim
                                            esse tempor laborum consequat esse adipisicing eu
                                            reprehenderit enim.
                                        </h3>
                                    </AccordionItemPanel>
                                </AccordionItem>     
                                <AccordionItem className='ac'>
                                    <AccordionItemHeading className='head'>
                                        <AccordionItemButton className='h'>
                                            Condições contratuais
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <h3>
                                            Exercitation in fugiat est ut ad ea cupidatat ut in
                                            cupidatat occaecat ut occaecat consequat est minim minim
                                            esse tempor laborum consequat esse adipisicing eu
                                            reprehenderit enim.
                                        </h3>
                                    </AccordionItemPanel>
                                </AccordionItem>     
                                <AccordionItem className='ac'>
                                    <AccordionItemHeading className='head'>
                                        <AccordionItemButton className='h'>
                                            Condições contratuais
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <h3>
                                            Exercitation in fugiat est ut ad ea cupidatat ut in
                                            cupidatat occaecat ut occaecat consequat est minim minim
                                            esse tempor laborum consequat esse adipisicing eu
                                            reprehenderit enim.
                                        </h3>
                                    </AccordionItemPanel>
                                </AccordionItem>               
                          
                    </Accordion>
        </div>
    </div>
  )
}
