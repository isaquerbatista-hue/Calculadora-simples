import { useState } from 'react'
import styles from './form.module.css'

function Calculadora() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [operacao, setOperacao] = useState('+')
  const [resultado, setResultado] = useState(null)

  function limpar() {
    setNum1('')
    setNum2('')
    setOperacao('+')
    setResultado(null)
  }

  function calcular(e) {
    e.preventDefault()

    const n1 = parseFloat(num1)
    const n2 = parseFloat(num2)

    if (isNaN(n1) || isNaN(n2)) {
      setResultado('Por favor, informe números válidos.')
      return
    }

   let res

  if (operacao === '+') {
    res = n1 + n2
  } else if (operacao === '-') {
    res = n1 - n2
  } else if (operacao === '*') {
    res = n1 * n2
  } else if (operacao === '/') {
    if (n2 === 0) {
      setResultado('Erro: Divisão por zero não permitida.')
      return
    }
    res = n1 / n2
  } else {
    res = 0
  }

  setResultado(`Resultado: ${res}`)
}

  return (
    <div className={styles.container}>
      <form onSubmit={calcular} className={styles.formContainer}>
        <h2>Calculadora Simples</h2>

        {/*  Campos de Entrada */}
        <div className={styles.inputGroup}>
          <input 
            type="number" 
            step="any"
            name="num1" 
            placeholder="Primeiro número..." 
            value={num1} 
            onChange={(e) => setNum1(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <select 
            value={operacao} 
            onChange={(e) => setOperacao(e.target.value)}
          >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <input 
            type="number" 
            step="any"
            name="num2" 
            placeholder="Segundo número..." 
            value={num2} 
            onChange={(e) => setNum2(e.target.value)}
          />
        </div>

        {/* Botões */}
        <div className={styles.btnGroup}> 
          <input type="submit" value="Calcular" className={styles.btnCalcular} />
          <input type="button" value="Limpar" onClick={limpar} className={styles.btnLimpar} />
        </div>

        {/* Resultado */}
        <div className={styles.resultado}>
          <p>{resultado}</p>
        </div>
      </form>
    </div>
  )
}

export default Calculadora