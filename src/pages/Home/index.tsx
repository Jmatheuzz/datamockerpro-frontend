import { useState } from "react";
import { GenerateCPF } from "../GenerateCPF";
import './index.css'
import { MdArrowForwardIos } from "react-icons/md";
import { ValidateCPF } from "../ValidateCPF/Index";

export function Home() {
  const [actualPage, setActualPage] = useState('gerar-cpf')
  return (
    <div className="container">
        <div className="side-bar">
          <div className="section">
            <h2>Geradores</h2>
            <div className={actualPage === 'gerar-cpf' ? 'option-selected' : "option"} onClick={() => setActualPage('gerar-cpf')}>
              <div className="option-text">
                <span>Gerar CPF</span>
              </div>
              <MdArrowForwardIos className="icon-arrow"/>
            </div>
          </div>
          <div className="section">
            <h2>Validadores</h2>
            <div className={actualPage === 'validar-cpf' ? 'option-selected' : "option"} onClick={() => setActualPage('validar-cpf')}>
              <div className="option-text">
                <span>Validar CPF</span>
              </div>
              <MdArrowForwardIos className="icon-arrow"/>
            </div>
          </div>
        </div>
        <div className="page">
          { actualPage === 'gerar-cpf' && <GenerateCPF /> }
          { actualPage === 'validar-cpf' && <ValidateCPF /> }
        </div>
    </div>
  )
}