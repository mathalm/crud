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
  const handlePegarLeads = async () => {
    const api = axios.create({
      baseURL: "https://api.exactsales.com.br/v3"
    })
    const config ={
      headers: { "Content-Type": "application/json", "token_exact": "a042af31-8bf1-42df-a545-8a92650b0eac" }
    }

    await api.get("/Leads",config)
      .then(({data}) => {
        console.log(data);
      })
      .catch(erro => console.log(erro))
  }



  // const handlePegarLeads = () => {
    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("token_exact", "a042af31-8bf1-42df-a545-8a92650b0eac");

    // var metodo = {
    //   method: 'GET',
    //   headers: myHeaders,
    //   redirect: 'follow'
    // }

    // fetch("https://api.exactsales.com.br/v3/Leads", metodo)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));

    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("token_exact", "a506d2d2-6045-485d-a41e-ee22c3af75a3");

    // var requestOptions = {
    //   method: 'GET',
    //   headers: myHeaders,
    //   redirect: 'follow'
    // };

    // fetch("https://api.exactspotter.com/v3/Leads", requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
    // console.log(leads);
  // }




  return (
    <div>
      <button className="btn btn-outline-secondary botao" type="button" id="inputGroupFileAddon04" onClick={handleEnvioDoArquivo} >Ver arquivo</button>
      <button className="btn btn-outline-secondary botao" type="button" id="inputGroupFileAddon04" onClick={handleLimparTabela} >Limpar</button>
      <button className="btn btn-outline-secondary botao" type="button" id="inputGroupFileAddon04" onClick={handlePegarLeads} >Atualizar leads</button>
    </div>
  );
}

export default Botoes;