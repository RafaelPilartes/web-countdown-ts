import { useState, KeyboardEvent, useEffect, useRef } from 'react'

// Icons
import { BsAlarm } from 'react-icons/bs'
import { useLocation } from 'react-router-dom'
import BaseBtn from '../../components/BaseBtn'
import Counter from '../../components/Counter'
import { defaultTheme } from '../../themes/default'
import FormCountdown from '../FormCountdown'

import { CountdownTimerContainer } from './styles'

type CountdownFormProps = {
  title: string
  description: string
}

function CountdownTimer() {
  let location = useLocation()

  const [isCounting, setIsCounting] = useState<boolean>(true)
  const [dateCountdown, setDateCountdown] = useState<string>()

  function handleKeyUp(event: KeyboardEvent) {
    event.preventDefault

    if (event.code === 'Enter') {
    }
  }

  function stopCountdown() {
    setIsCounting(false)
  }

  useEffect(() => {
    setIsCounting(true)
    setDateCountdown(location.pathname)
  }, [location])

  return (
    <CountdownTimerContainer>
      <div className="container">
        {isCounting && (
          <div className="countdown">
            <h1> Contagem regressiva</h1>

            <div className="timer">
              <Counter number={9} title={'Dias'} />
              <Counter number={8} title={'Horas'} />
              <Counter number={40} title={'Minutos'} />
              <Counter number={11} title={'Segundos'} />
            </div>

            <BaseBtn
              title="Parar"
              onClick={stopCountdown}
              colorBg={defaultTheme.colors['base-error-light']}
            />
          </div>
        )}

        {!isCounting && <FormCountdown />}
      </div>
    </CountdownTimerContainer>
  )
}

export default CountdownTimer
