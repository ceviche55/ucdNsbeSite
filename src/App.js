import React from 'react';
import { Navbar, Home, What, SponsorPage, Executives, Footer } from './pages';
import './App.scss'

export const App = () => {
  let component = "/home"
  switch (window.location.pathname) {
    case '/NSBE':
      component = <What />
      break
    case '/SPONSORSHIP':
      component = <SponsorPage />
      break
    case '/BOARD':
      component = <Executives />
      break
    default:
      component = <Home />
      break

  }
  return (
    <>
      <Navbar />
      {component}
      <Footer />
    </>
  )
}
export default App
