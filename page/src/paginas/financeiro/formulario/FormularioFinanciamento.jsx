import React from 'react'
import './financeiro.scss'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useState } from 'react'



export default function FormularioFinanciamento() {

  const [nome, setNome] = useState("")
  const [ddd, setDDD] = useState("")
  const [telefone, setTelefone] = useState("")
  const [email, setEmail] = useState("")
  const [salario, setSalario] = useState("")
  const [possuiVeiculo, setPossuiVeiculo] = useState("")
  const [estadoCivil, setEstadoCivil] = useState("")
  const [dependentes, setDependentes] = useState("")
  const [valorEntrada, setValorEntrada] = useState("")
  const [modeloInteresse, setModeloInteresse] = useState("")
  const [fiador, setFiador] = useState("")
  const [cidade, setCidade] = useState("")


  const onSubmit = (e) => {
    e.preventDefault();
    console.log("refresh prevented");
  };

  const [mensagemSucesso, setMensagemSucesso] = useState("");



  const handleClick=(e)=> {
    e.preventDefault()
    const dados = {nome, ddd, telefone, email, salario, possuiVeiculo, estadoCivil, dependentes, valorEntrada, modeloInteresse, fiador, cidade}
    console.log(dados)


    fetch("http://127.0.0.1:8085/api/v1/financeiro/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(dados)
    }).then(()=> {
        setTimeout(() => {
        setMensagemSucesso("Recebemos sua mensagem. Logo logo entraremos em contato! ");
        }, 10);
        setTimeout(() => {
          setMensagemSucesso("");
          }, 5000);
          setNome("")
          setDDD("")
          setTelefone("")
          setEmail("")
          setSalario("")
          setPossuiVeiculo("")
          setEstadoCivil("")
          setDependentes("")
          setValorEntrada("")
          setModeloInteresse("")
          setFiador("")
          setCidade("");
    })
  }



  return (
    <div className='formularioFinanceiro'>
            <div className="title">
                <h2>Faça uma simulação de financiamento</h2>
                <h3>mande uma mensagem para nós que um de nossos representantes comerciais entrará em contato</h3>
            </div>

            <div className="container-financeiro-forms">
              <div className="forms-financeiro">

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
                      <TextField id="standard-basic-ddd" className='standard-basic-ddd' label="ddd" variant='outlined' value={ddd}
                      onChange={
                        (e)=>setDDD(e.target.value)} />
                   </div>
                
                  <div className="telefone">
                      <h3>Telefone *</h3>
                      <TextField id="standard-basic-telefone" className='standard-basic-telefone' label="telefone" variant='outlined' value={telefone} 
                      onChange={
                        (e)=>setTelefone(e.target.value)} />
                  </div>
                
                  <div className="email">
                      <h3>Email *</h3>
                      <TextField id="standard-basic-email" className='standard-basic-email' label="Seu email" variant='outlined' value={email} 
                      onChange={
                        (e)=>setEmail(e.target.value)} />
                  </div>

                  <div className="informacoes">

                        <TextField id="standard-basic-salario" className='standard-basic' label="Salário mensal $$" variant='outlined' value={salario} 
                        onChange={
                          (e)=>setSalario(e.target.value)} />
                           <TextField id="standard-basic-possuiVeiculo" className='standard-basic' label="possui veiculo próprio?" variant='outlined' value={possuiVeiculo} 
                        onChange={
                          (e)=>setPossuiVeiculo(e.target.value)} />
                           <TextField id="standard-basic-estadoCivil" className='standard-basic' label="estado civil" variant='outlined' value={estadoCivil} 
                        onChange={
                          (e)=>setEstadoCivil(e.target.value)} />
                           <TextField id="standard-basic-dependentes" className='standard-basic' label="quantidade de dependentes" variant='outlined' value={dependentes} 
                        onChange={
                          (e)=>setDependentes(e.target.value)} />
                           <TextField id="standard-basic-valorEntrada" className='standard-basic' label="valor de entrada $$" variant='outlined' value={valorEntrada} 
                        onChange={
                          (e)=>setValorEntrada(e.target.value)} />
                           <TextField id="standard-basic-modeloInteresse" className='standard-basic' label="Modelo do veículo de interesse" variant='outlined' value={modeloInteresse} 
                        onChange={
                          (e)=>setModeloInteresse(e.target.value)} />
                           <TextField id="standard-basic-fiador" className='standard-basic' label="Possui fiador?" variant='outlined' value={fiador} 
                        onChange={
                          (e)=>setFiador(e.target.value)} />
                           <TextField id="standard-basic-cidade" className='standard-basic' label="Seu email" variant='outlined' value={cidade} 
                        onChange={
                          (e)=>setCidade(e.target.value)} />

                  </div>
                  
                    <Button variant='contained' className='btn' onClick={handleClick} type="submit" alt="botão para enviar formulário">
                      Enviar
                    </Button>

                </form>
                <div className="mensagemSucesso">
                        {mensagemSucesso !== "" ? <p>{mensagemSucesso}</p> : ""}
                </div>
              </div>
              
            </div>

            
    </div>
  )
}
