import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import News from './components/News'
import { Routes, Route, HashRouter } from "react-router-dom"


export default class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
      <Header/>
      <Routes>
        <Route path="/" element={<News key="general" category="general" pageSize={6}/>}/>
          
           <Route path="business" element={<News key="business" category="business" pageSize={6} />} />
          <Route path="entertainment" element={<News key="entertainment" category="entertainment" pageSize={6} />} />
          <Route path="sports" element={<News key="sports" category="sports" pageSize={6} />} />
          <Route path="science" element={<News key="science" category="science" pageSize={6}/>} />
          <Route path="technology" element={<News key="technology" category="technology" pageSize={6} />} />
          <Route path="health" element={<News key="health" category="health" pageSize={6} />} /> 
          
          {/* <Route path="*" element={<NoPage />} /> */}
        
      </Routes>
      <Footer/>
      </HashRouter>
    )
  }
}
