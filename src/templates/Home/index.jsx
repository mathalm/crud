import React from 'react';
import './styles.css'
import { BiTransferAlt } from 'react-icons/bi'
import { BsArrowClockwise } from 'react-icons/bs'
import { BsFillTelephoneFill } from 'react-icons/bs'

function Home() {
  return (
    <>
      <nav className='menu-topo'>
        <div className='div-logo'>
          <span>Exact</span>tools
        </div>
      </nav>
      <nav className='div-lateral'>
        <div className='div-ferramentas'>
          <BsArrowClockwise className='BsArrowClockwise'/>
          <h3>Atualizar</h3>
        </div>
        <div className='div-ferramentas'>
          <BiTransferAlt className='BiTransferAlt'/>
          <h3>Transferir</h3>
        </div>
        <div className='div-ferramentas'>
          <BsFillTelephoneFill className='BsFillTelephoneFill'/>
          <h3>Recuperar</h3>
        </div>
      </nav>
    </>
  );
}

export default Home;