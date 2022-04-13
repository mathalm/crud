import React from 'react';
import './styles.css';

function Botoes({ setItems, setKeys, items, tokenCliente, setRetornoDaRequisicao, retornoDaRequisicao }) {

  const handleEnvioDoArquivo = () => {

    var keys = Object.keys(items[0]);
    setKeys(keys);

  }
  const handleLimparTabela = () => {
    setItems([])
    setKeys([])
    document.getElementById('formFile').value = ''

  }
  const handlePegarLeads = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("token_exact", tokenCliente);

    for (let i = 0; i < items.length; i++) {
      var primeiroItem = items[i];
      var idLead = primeiroItem.id
      // console.log(primeiroItem);
      // primeiroItem.shift()
      delete primeiroItem.id
      var json = JSON.stringify({
        "duplicityValidation": "false",
        "lead": primeiroItem
      })
      // console.log(json);
      // console.log(idLead);
      var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: json,
        redirect: 'follow'
      };

      // ---------------------------------------------------------------------------------------ultima alteração
      fetch(`https://api.exactsales.com.br/v3/LeadsUpdate/${idLead}`, requestOptions)
        .then(response => response.text())
        .then(result => setRetornoDaRequisicao([JSON.stringify(result)]))
        .catch(error => console.log('error', error));
    }

  };

  return (
    <div>
      <button className="btn btn-outline-secondary botao" type="button" id="inputGroupFileAddon04" onClick={handleEnvioDoArquivo} >Ver arquivo</button>
      <button className="btn btn-outline-secondary botao" type="button" id="inputGroupFileAddon04" onClick={handleLimparTabela} >Limpar</button>
      <button className="btn btn-outline-secondary botao" type="button" id="inputGroupFileAddon04" onClick={handlePegarLeads} >Atualizar leads</button>
    </div>
  );
}

export default Botoes;