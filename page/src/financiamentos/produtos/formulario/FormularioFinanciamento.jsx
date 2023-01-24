import React from 'react'
import './contato.scss'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useState } from 'react'
import logo from './logo.png'



export default function FormularioFinanciamento() {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [mensagem, setMensagem] = useState("")


  const onSubmit = (e) => {
    e.preventDefault();
    console.log("refresh prevented");
  };


  const handleClick=(e)=> {
    e.preventDefault()
    const lead = {nome, email, mensagem}
    console.log(lead)
    fetch("http://localhost:8080/api/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(lead)
    }).then(()=> {
      console.log("lead adicionado")
    })
  }



  return (
    <div className='formularioFinanceiro'>
            <div className="title">
                <h2>Faça uma simulação de financiamento</h2>
                <h3>mande uma mensagem para nós que um de nossos representantes comerciais entrará em contato</h3>
            </div>

            <div className="container-contato">
              <div className="forms">

                <form noValidate autoComplete='off' onSubmit={onSubmit} className="form">

                  <div className='nome'>
                    <h3>Nome Completo *</h3>
                        <TextField id="standard-basic-nome" className='standard-basic-nome' label="nome completo" variant='outlined' value={nome} 
                        onChange={
                          (e)=>setNome(e.target.value)} 
                      />
                  </div>
                   
                   <div className="ddd">
                      <h3>ddd *</h3>
                      <TextField id="standard-basic-ddd" className='standard-basic-ddd' label="ddd" variant='outlined' value={email}
                      onChange={
                        (e)=>setEmail(e.target.value)} />
                   </div>
                
                  <div className="telefone">
                      <h3>Telefone *</h3>
                      <TextField id="standard-basic-telefone" className='standard-basic-telefone' label="telefone" variant='outlined' value={email} 
                      onChange={
                        (e)=>setEmail(e.target.value)} />
                  </div>
                
                  <div className="email">
                      <h3>Email *</h3>
                      <TextField id="standard-basic-email" className='standard-basic-email' label="Seu email" variant='outlined' value={email} 
                      onChange={
                        (e)=>setEmail(e.target.value)} />
                  </div>

                  <div className="informacoes">

                        <TextField id="standard-basic-email" className='standard-basic' label="Salário mensal $$" variant='outlined' value={email} 
                        onChange={
                          (e)=>setEmail(e.target.value)} />
                           <TextField id="standard-basic-email" className='standard-basic' label="possui veiculo próprio?" variant='outlined' value={email} 
                        onChange={
                          (e)=>setEmail(e.target.value)} />
                           <TextField id="standard-basic-email" className='standard-basic' label="estado civil" variant='outlined' value={email} 
                        onChange={
                          (e)=>setEmail(e.target.value)} />
                           <TextField id="standard-basic-email" className='standard-basic' label="quantidade de dependentes" variant='outlined' value={email} 
                        onChange={
                          (e)=>setEmail(e.target.value)} />
                           <TextField id="standard-basic-email" className='standard-basic' label="valor de entrada $$" variant='outlined' value={email} 
                        onChange={
                          (e)=>setEmail(e.target.value)} />
                           <TextField id="standard-basic-email" className='standard-basic' label="Modelo do veículo de interesse" variant='outlined' value={email} 
                        onChange={
                          (e)=>setEmail(e.target.value)} />
                           <TextField id="standard-basic-email" className='standard-basic' label="Possui fiador?" variant='outlined' value={email} 
                        onChange={
                          (e)=>setEmail(e.target.value)} />
                           <TextField id="standard-basic-email" className='standard-basic' label="Seu email" variant='outlined' value={email} 
                        onChange={
                          (e)=>setEmail(e.target.value)} />

                  </div>
                  
                    <Button variant='contained' className='btn' onClick={handleClick} type="submit" alt="botão para enviar formulário">
                      Enviar
                    </Button>

                </form>

              </div>
              
            </div>

            
    </div>
  )
}
