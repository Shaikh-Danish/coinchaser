
import { Route, Routes } from 'react-router-dom'
import { react } from 'react';

import NavBar from './components/NavBar/Navbar'
import Home from './components/Home/Home'
import CryptoCurrencies from './components/CryptoCurrencies/CryptoCurrencies'
import News from './components/News/News'
import './App.sass'

function App() {
  // consol
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cryptocurrencies" element={<CryptoCurrencies />} />
            <Route exact path="/news" element={<News />} />
          </Routes>
        </div>
      </main>
      <footer>
        <div>
          <p>footer</p>
        </div>
      </footer>
    </div>
  )
}

export default App
