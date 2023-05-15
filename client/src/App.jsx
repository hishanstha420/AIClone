import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Header from './component/Header'
import Main from './component/main'
import { Home, CreatePost} from './pages'
const App = () => {
  return (
    <div>
     <BrowserRouter>
      <Header />
      <Main />
     </BrowserRouter>

    </div>
  )
}

export default App
