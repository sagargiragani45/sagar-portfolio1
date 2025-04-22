import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Navbar from './components/Navbar'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  const renderSection = () => {
    switch(activeSection) {
      case 'about': return <About />
      case 'skills': return <Skills />
      case 'projects': return <Projects />
      case 'contact': return <Contact />
      case 'resume': return <Resume />
      default: return <Hero onNavigate={setActiveSection} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar activeSection={activeSection} onNavigate={setActiveSection} />
      {renderSection()}
    </div>
  )
}

export default App
