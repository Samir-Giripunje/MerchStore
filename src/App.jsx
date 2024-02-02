
import { Route } from 'react-router-dom'
import './App.css'
import { HomePage,Tshirts,Hoodies, CustomDesign } from './components/index'
import { Routes } from 'react-router-dom'

function App() {


  return (
    <>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tshirt" element={<Tshirts />} />
      <Route path="/hoodie" element={<Hoodies />} />
      <Route path="/customdesign" element={<CustomDesign />} />
    </Routes>
    </>
  )
}

export default App
