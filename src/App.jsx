import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Header from './components/Header'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} exact={true} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
