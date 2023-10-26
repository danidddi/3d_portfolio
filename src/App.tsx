import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './components/components/Navbar'
import { Hero } from './components/components/Hero'
import About from './components/components/About'
import Experience from './components/components/Experience'
import Tech from './components/components/Tech'
import Works from './components/components/Works'
import Contact from './components/components/Contact'

export function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Contact />
      </div>
    </BrowserRouter>
  )
}
