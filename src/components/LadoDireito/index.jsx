import React from 'react';
import Table from '../Table';

function LadoDireito({items , keys}) {
  return (
    <div className='lado-direito'>
      <div>
        <p>Tabela:</p>
      </div>
      <div className='div-table'>
        <Table items={items} keys={keys} />
      </div>
    </div>
  );
}

export default LadoDireito;