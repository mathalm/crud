import React from 'react';
import './styles.css'

function Table({ items, keys }) {

  function renderizarCabecalho(keys) {
    return (
      keys.map((key, index) => {
        return (
          <th scope="col" key={index}>{key}</th>
        );
      })
    )
  }

  function renderizarCelulas(item) {
    return (
      keys.map((key, index) => {
        return (
          <td key={index} className="td">{item[key]}</td>
        )
      })
    )
  }

  return (
    <div className='div-alinha-table'>
      <div className='div-border'>
        <table className="table table-hover">
          <thead className='thead'>
            <tr className='linha-cabecalho'>
            <th>N°</th>
              {renderizarCabecalho(keys)}
            </tr>
          </thead>
          <tbody className='tbody' >
            {items.map((item, index) => {
              return (
                <tr className='tr' key={index}><td>{index}</td>{renderizarCelulas(item)}</tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;