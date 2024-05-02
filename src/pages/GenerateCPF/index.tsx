import { useState } from "react"
import api from "../../services/api"
import './index.css'
import { SelectState } from "../../components/inputs/SelectState/Index"

export function GenerateCPF() {
  const [cpfGenerated, setCpfGenerated] = useState(null)
  const [state, setState] = useState('Indiferente')

  async function generateCpf() {
    const { data: { value } } = await api.post(`/generate/cpf?state=${state}`)
    setCpfGenerated(value)
  }
  function handleChange(e: { target: { value: string } }) {
    setState(e.target.value) 
  }
  return (
    <div className="component-gerar-cpf">
      <div className="personalize">
        <div className="option-gerar-cpf">
          <SelectState handleChange={handleChange}/>
        </div>
        <div className="option-pontuacao">
          <input type="checkbox" id="pontuation"/>
          <label htmlFor="pontuation" className="checkbox-custom "></label>
          <span className="text-with-pontuation">Com pontuação</span>
        </div>
      </div>
      <div className="result">
        <p className="cpf-gerado">
          CPF gerado: {cpfGenerated ?? '***.***.***-**'}
        </p>
      </div>
      <button className="btn-gerar" onClick={generateCpf}>Gerar CPF</button>
    </div>
  )
}