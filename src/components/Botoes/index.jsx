import React, { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';

function Botoes({ setItems, setKeys, items, tokenCliente }) {
  const [certeza, setCerteza] = useState(false)
  const [leads, setLeads] = useState();

  const handleEnvioDoArquivo = () => {

    var keys = Object.keys(items[0]);
    setKeys(keys);

  }
  const handleLimparTabela = () => {
    setItems([])
    setKeys([])
    document.getElementById('formFile').value = ''

  }
  // const handleValidarCerteza = () => {
  //   setCerteza(true);
  //   console.log(certeza);
  // }
  // const handleFecharModal = () => {
  //   setCerteza(false);
  // }
  const handleAtualizarLeads = async () => {
    const api = axios.create({
      baseURL: "https://api.exactspotter.com/v3/"
    })
    const config ={
      headers: { "Content-Type": "application/json", "token_exact": "ba6d401d-2b9d-4d44-8374-40de572e6945" }
    }
        
    await api.get("Leads",config)
      .then(({data}) => {
        console.log(data);
      })
      .catch(erro => console.log(erro))
  }



  // const  handlePegarLeads = () => {
  //   const myHeaders = new Headers({
  //     'Content-Type': 'application/json',
  //     'token_exact': 'ba6d401d-2b9d-4d44-8374-40de572e6945'
  //   })
  //   const metodo = {
  //     method: 'GET',
  //     headers: myHeaders,
  //     mode: "no-cors"
  //   }

  //   fetch(`https://api.exactspotter.com/v3/Leads`, metodo)
  //   .then(function(response){
  //     const dados = response.json()
  //     setLeads(dados);
  //   });
  //   console.log(leads);

  // }



  return (
    <div>
      <button className="btn btn-outline-secondary botao" type="button" id="inputGroupFileAddon04" onClick={handleEnvioDoArquivo} >Ver arquivo</button>
      <button className="btn btn-outline-secondary botao" type="button" id="inputGroupFileAddon04" onClick={handleLimparTabela} >Limpar</button>
      <button className="btn btn-outline-secondary botao" type="button" id="inputGroupFileAddon04" onClick={handleAtualizarLeads} >Atualizar leads</button>
    </div>
  );
}

export default Botoes;