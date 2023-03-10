import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '../Layout'
import CountdownTimer from '../pages/Countdown'
import Home from '../pages/Home'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":countdownTimer" element={<CountdownTimer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
