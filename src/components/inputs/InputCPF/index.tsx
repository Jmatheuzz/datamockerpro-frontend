import React, { useState } from 'react';
import './index.css'


interface CpfInputProps {
  onCpfChange: (cpf: string) => void
}

export function InputCPF ({ onCpfChange } : CpfInputProps){
  const [cpf, setCpf] = useState<string>('')

  function handleCpfChange (event: React.ChangeEvent<HTMLInputElement>) {
    let newCpf = event.target.value.replace(/\D/g, '')
    if (newCpf.length > 11) {
      newCpf = newCpf.slice(0, 11)
    }

    newCpf = newCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')

    setCpf(newCpf);
    onCpfChange(newCpf)
  }

  return (
    <input
      className='cpf-input'
      type="text"
      placeholder="CPF"
      value={cpf}
      onChange={handleCpfChange}
    />
  );
}

