import './App.scss'
import { useState } from 'react'
import { Header } from './Component/Header'
import { Home } from './Pages/Home'
import  TaxCalculation  from './Pages/TaxCalculation'
import { Footer } from './Component/Footer'
import { Route, Routes } from 'react-router-dom'
import Loader from './Component/Loader'

function App() {

  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && (
        <Loader
          onComplete={() => setLoading(false)}
        />
      )}

      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/tax-calculation"
            element={<TaxCalculation />}/>
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App