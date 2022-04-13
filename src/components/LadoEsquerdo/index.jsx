import React, { useState } from 'react';
import * as xlsx from 'xlsx/xlsx.mjs';
import Botoes from '../Botoes';
import LadoDireito from '../LadoDireito';
import './styles.css'

function Atualizar() {


  const [items, setItems] = useState([]);
  const [keys, setKeys] = useState([]);
  const [tokenCliente, setTokenCliente] = useState('');
  const [retornoDaRequisicao, setRetornoDaRequisicao] = useState([]);

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = xlsx.read(bufferArray, { type: "buffer" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = xlsx.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setItems(d);

    });



  };

  const handleReceberPlanilha = (e) => {
    let extensãoPermitida = /(.XLSX)$/i;
    if (!extensãoPermitida.exec(e.target.value)) {
      window.alert('Deve ser inserido arquivo do tipo .xlsx');
      setItems([]);
      setKeys([]);
      document.getElementById('formFile').value = '';

    } else {
      const file = e.target.files[0];
      readExcel(file);

    }

  }
  const handleReceberToken = (e) => {
    setTokenCliente(e.target.value);
  }


  return (
    <div className='receber-planilha'>
      <div className='lado-esquerdo'>
        <div className='div-input'>
          <p className='titulo-funcionalidade'>Arquivo xlsx:</p>
          <div className="input-group">
            <input className="form-control inputAquivo" type="file" id="formFile" accept='xlsx' onChange={handleReceberPlanilha} />
          </div>
        </div>
        <div className='div-token'>
          <p className='titulo-funcionalidade'>Token do cliente:</p>
          <input type="text" className="form-control" placeholder="Token do cliente" aria-label="Server" onChange={handleReceberToken} />
        </div>
        <div className='div-botoes'>
          <Botoes setItems={setItems} setKeys={setKeys} items={items} tokenCliente={tokenCliente} setRetornoDaRequisicao={setRetornoDaRequisicao} retornoDaRequisicao={retornoDaRequisicao} />
        </div>
        <div className='retorno-requisicao'>
          <div  className='retorno-requisicao-div'>
           {retornoDaRequisicao.map((retorno, index) => {
             console.log(retornoDaRequisicao);
            return (
              <p className='retornoRequisicao' key={index}>{retorno}</p> 
              )
              
            })}
          
          </div>
        </div>
      </div>
      <LadoDireito items={items} keys={keys} />
    </div>
  );
}

export default Atualizar;






