import React from 'react';

function Botoes({setItems, setKeys, items }) {
  const handleEnvioDoArquivo = () => {

    var keys = Object.keys(items[0]);
    setKeys(keys);
  }
  const handleLimparTabela = () => {
    setItems([])
    setKeys([])
    document.getElementById('formFile').value = ''

  }
  return (
    <div>
      <button className="btn btn-outline-secondary botao" type="button" id="inputGroupFileAddon04" onClick={handleEnvioDoArquivo}>Ver arquivo</button>
      <button className="btn btn-outline-secondary botao" type="button" id="inputGroupFileAddon04" onClick={handleLimparTabela} >Limpar</button>
      <button className="btn btn-outline-secondary botao " type="button" id="inputGroupFileAddon04">Atualizar leads</button>
    </div>
  );
}

export default Botoes;