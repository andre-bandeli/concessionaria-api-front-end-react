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
                                            Como posso saber se sou elegível para um financiamento?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <h3>
                                        Para saber se você é elegível para um financiamento, basta entrar em contato com a
                                         instituição financeira e informar seus dados. Eles farão uma avaliação e informarão se você atende aos requisitos.
                                        </h3>

                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem className='ac'>
                                    <AccordionItemHeading className='head'>
                                        <AccordionItemButton className='h'>
                                            Qual é o prazo máximo para pagamento de um financiamento?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <h3>
                                            O prazo máximo para pagamento de um financiamento varia de 
                                            acordo com a instituição financeira e o valor financiado. Em média, pode ser de até 60 meses.
                                        </h3>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem className='ac'>
                                    <AccordionItemHeading className='head'>
                                        <AccordionItemButton className='h'>
                                            Existe algum tipo de juros aplicável aos financiamentos?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <h3>
                                        Sim, os financiamentos geralmente possuem juros aplicados, que podem 
                                        ser fixos ou variáveis. É importante comparar as taxas de juros antes de escolher uma instituição financeira.
                                        </h3>
                                    </AccordionItemPanel>
                                </AccordionItem>     
                                <AccordionItem className='ac'>
                                    <AccordionItemHeading className='head'>
                                        <AccordionItemButton className='h'>
                                            Posso escolher a forma de pagamento do meu financiamento?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <h3>
                                        Sim, a forma de pagamento é uma escolha do solicitante do 
                                        financiamento. É possível optar por pagamentos mensais, semanais
                                         ou até quinzenais, dependendo da instituição financeira.
                                        </h3>
                                    </AccordionItemPanel>
                                </AccordionItem>     
                                <AccordionItem className='ac'>
                                    <AccordionItemHeading className='head'>
                                        <AccordionItemButton className='h'>
                                        Qual é o valor mínimo que posso financiar?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <h3>
                                        O valor mínimo que você pode financiar varia de acordo 
                                        com a instituição financeira. Em geral, é possível financiar valores a partir de R$ 1.000,00.
                                        </h3>
                                    </AccordionItemPanel>
                                </AccordionItem>     
                                <AccordionItem className='ac'>
                                    <AccordionItemHeading className='head'>
                                        <AccordionItemButton className='h'>
                                            É necessário apresentar garantias para conseguir um financiamento?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <h3>
                                        Depende da instituição financeira. Algumas exigem garantias, como imóveis ou veículos, 
                                        enquanto outras podem oferecer financiamentos sem garantias, mas com juros mais elevados. É
                                         importante informar-se antes de solicitar o financiamento.

                                        </h3>
                                    </AccordionItemPanel>
                                </AccordionItem>               
                          
                    </Accordion>
        </div>
    </div>
  )
}
