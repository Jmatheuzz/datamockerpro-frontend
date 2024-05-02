import './index.css'


interface SelectStateProps {
  handleChange: (e: { target: { value: string } }) => void
}

export function SelectState({handleChange}: SelectStateProps) {
  return (
    <select className="state-select" onChange={handleChange}>
      <option value="">Indiferente</option>
      <option value="ac">Acre</option>
      <option value="al">Alagoas</option>
      <option value="am">Amazonas</option>
      <option value="ap">Amapá</option>
      <option value="ba">Bahia</option>
      <option value="ce">Ceará</option>
      <option value="df">Distrito Federal</option>
      <option value="es">Espírito Santo</option>
      <option value="go">Goiás</option>
      <option value="ma">Maranhão</option>
      <option value="mg">Minas Gerais</option>
      <option value="ms">Mato Grosso do Sul</option>
      <option value="mt">Mato Grosso</option>
      <option value="pa">Pará</option>
      <option value="pb">Paraíba</option>
      <option value="pe">Pernambuco</option>
      <option value="pi">Piauí</option>
      <option value="pr">Paraná</option>
      <option value="rj">Rio de Janeiro</option>
      <option value="rn">Rio Grande do Norte</option>
      <option value="rs">Rio Grande do Sul</option>
      <option value="ro">Rondônia</option>
      <option value="rr">Roraima</option>
      <option value="sc">Santa Catarina</option>
      <option value="se">Sergipe</option>
      <option value="sp">São Paulo</option>
      <option value="to">Tocantins</option>
    </select>
  )
}