import React from 'react'
import './contato.scss'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useState } from 'react'
import logo from './logo.png'



export default function Contato() {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [mensagem, setMensagem] = useState("")

  const [mensagemSucesso, setMensagemSucesso] = useState("");


  const onSubmit = (e) => {
    e.preventDefault();
    console.log("refresh prevented");
  };


  const handleClick=(e)=> {
    e.preventDefault()
    const lead = {nome, email, mensagem}
    console.log(lead)
    fetch("http://127.0.0.1:8085/api/v1/lead/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(lead)
    }).then(()=> {
        setTimeout(() => {
        setMensagemSucesso("Mensagem enviada com sucesso! Entraremos em contato o quanto antes!");
        }, 10);
        setTimeout(() => {
          setMensagemSucesso("");
          }, 5000);
        setNome("")
        setEmail("")
        setMensagem("")
    })
  }

  return (
    <div className='contato-index'>
            <div className="title">
                <h2>Entre em Contato</h2>
                <h3>mande uma mensagem para nós que um de nossos representantes comerciais entrará em contato</h3>
            </div>

            <div className="container-contato">
              <div className="forms">

                <form noValidate autoComplete='off' onSubmit={onSubmit}>

                    <h3>Nome Completo</h3>
                    <TextField id="standard-basic" className='standard-basic' label="Seu nome completo" variant='outlined' value={nome} 
                    onChange={
                      (e)=>setNome(e.target.value)} 
                    />
                    <h3>Email</h3>
                    <TextField id="standard-basic-email" className='standard-basic' label="Seu email" variant='outlined' value={email} 
                    onChange={
                      (e)=>setEmail(e.target.value)} />

                    <Button variant='contained' className='btn' onClick={handleClick} type="submit" alt="botão para enviar formulário">
                      Enviar
                    </Button>
                </form>
                
                <div className="mensagemSucesso">
                        {mensagemSucesso !== "" ? <p>{mensagemSucesso}</p> : ""}
                </div>
               

              </div>
              <div className="logo">
                      <img src={logo} alt="" />
              </div>
            </div>

            
    </div>
  )
}
