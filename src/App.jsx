import './App.css'
import Header from './compoent/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import View from './page/View'
import Skill from './page/Skill'
import Footer from './compoent/Footer/Footer'
import { Toaster } from 'react-hot-toast'


function App() {


  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
       <Route path='/about' element={<About />} />
        <Route path='/view' element={<View />} />
        <Route path='/skill' element={<Skill/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
