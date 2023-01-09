import { useState, KeyboardEvent, useEffect, useRef } from 'react'

// Icons
import { BsAlarm } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import BaseBtn from '../../components/BaseBtn'

import { FormCountdownContainer } from './styles'

type CountdownFormProps = {
  nameCountdown: string
  dateCountdown: Date
}

function FormCountdown() {
  const navigate = useNavigate()

  const [formCount, setFormCount] = useState<CountdownFormProps>({
    nameCountdown: 'Nova contagem regressiva',
    dateCountdown: new Date()
  })

  function initCountdown(dateCountdown: Date) {
    navigate(`/${formCount.dateCountdown}`)
  }

  useEffect(() => {}, [])

  return (
    <FormCountdownContainer>
      <div className="containerCountdown">
        <div className="containerDateCountdown">
          <h1>Criar uma contagem regressiva</h1>
          <input type="datetime-local" className="dateCountdown" />
        </div>

        <div className="containerSpecialDates">
          <button className="SpecialDates">
            <BsAlarm /> <span>Novo dia</span>
          </button>
          <button className="SpecialDates">
            <BsAlarm /> <span>Dia dos Pais</span>
          </button>
          <button className="SpecialDates">
            <BsAlarm /> <span>Ano Novo</span>
          </button>
        </div>

        <div className="containerSpecialDates">
          <button className="SpecialDates">
            <BsAlarm /> <span>Dia das mães</span>
          </button>
          <button className="SpecialDates">
            <BsAlarm /> <span>Natal</span>
          </button>
          <button className="SpecialDates">
            <BsAlarm /> <span>Dia dos Namorados</span>
          </button>
        </div>

        <div className="containerNameCountdown">
          <h1>Nome da contagem regressiva</h1>
          <input
            type="text"
            value={formCount.nameCountdown}
            className="nameCountdown"
          />
        </div>

        <BaseBtn
          title="Iniciar"
          onClick={() => initCountdown(formCount.dateCountdown)}
        />
      </div>
    </FormCountdownContainer>
  )
}

export default FormCountdown
