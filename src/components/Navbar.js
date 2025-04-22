import { useEffect, useState } from 'react'

export default function Navbar({ activeSection, onNavigate }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sections = [
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'projects', name: 'Projects' },
    { id: 'contact', name: 'Contact' },
    { id: 'resume', name: 'Resume' }
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all ${scrolled ? 'py-2 bg-gray-900 shadow-lg' : 'py-4 bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => onNavigate('hero')}
            className="text-xl font-bold hover:text-blue-400 transition"
          >
            Sagar Giragani
          </button>
          <div className="hidden md:flex space-x-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => onNavigate(section.id)}
                className={`px-3 py-2 rounded transition ${activeSection === section.id ? 'text-blue-400 font-medium' : 'hover:text-blue-400'}`}
              >
                {section.name}
              </button>
            ))}
          </div>
          <button className="md:hidden">
            {/* Mobile menu button would go here */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
