import React from 'react';
import { Navbar, Header, Footer, Home, Join, Events, Resources, Sponsor, Executives, Collections } from './pages';
import './App.scss'

export const App = () => {
  let component = "/home"
  switch (window.location.pathname){
    case '/What%20is%20NSBE':
      component = <Header/>
      break
    case '/Becoming%20a%20Member':
      component = <Join/>
      break
    case '/Member%20Resources':
      component = <Resources/>
      break
    case '/Events':
      component = <Events/>
      break
    case '/Sponsor%20NSBE':
      component = <Sponsor/>
      break
    case '/Collections':
      component = <Collections/>
      break
    case '/Excutive%20Members':
    component = <Executives/>
    break
    default:
      component = <Home/>
      break
    
  }
  return (
    <>
      <Navbar/>
      {component}
      <Footer/>  
    </>
  )
}
export default App
