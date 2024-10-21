import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Root from './routes/Root'
import './App.css'



function App() {
  return (
    <Router>
      <Layout/>
      <Root/>
    </Router>
  )
}

export default App
