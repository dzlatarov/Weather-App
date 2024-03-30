import { useState } from 'react'
import { Routes, Route } from 'react-router-dom' 
import './App.css'
import Home from '../Home/Home'
import SingleWeather from '../SingleWeather/SingleWeather'
import { PageNotFound } from '../PageNotFound/PageNotFound'
import { METRIC_UNIT } from '../../constants'

function App() {

  const [unit, setUnit] = useState(localStorage.getItem('unit') ?? METRIC_UNIT)

  return (
        <Routes>
            <Route path='/' element={<Home setUnit={setUnit} unit={unit} />} />
            <Route path='/weather-details' element={<SingleWeather unit={unit} />}/>
            <Route path='*' element={<PageNotFound />}/>
        </Routes>
  )
}

export default App
