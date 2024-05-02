import { useState } from "react";
import { InputCPF } from "../../components/inputs/InputCPF";
import api from "../../services/api";
import './index.css'

export function ValidateCPF () {
  const [cpf, setCpf] = useState<string>('')
  const [cpfIsValid, setCpfIsValid] = useState<boolean | null>(null)

  async function validateCpf() {
    const { data: { valid } } = await api.post('/validation/cpf', { value: cpf })
    setCpfIsValid(valid)
  }
  return (
    <div className="container-validated-cpf">
      <InputCPF onCpfChange={setCpf}/>
      <div className="container-result">
        <span>Resultado:</span>
        <span className="valid-cpf">{cpfIsValid !== null && cpfIsValid &&'CPF válido'}</span>
        <span className="invalid-cpf">{cpfIsValid !== null && !cpfIsValid && 'CPF inválido'}</span>
      </div>
      <button className="btn-gerar" onClick={validateCpf}>Gerar CPF</button>
    </div>
  )
}