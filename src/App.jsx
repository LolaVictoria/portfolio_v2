import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './sections/Home'
import Projects from './sections/Projects'
import Resume from './sections/Resume'
import Articles from './sections/Articles'
import Contact from './sections/Contact'

const App = () => {
  const [activeSection, setActiveSection] = useState('home')

  const renderSection = () => {
    switch (activeSection) {
      case 'projects':
        return <Projects />
      case 'resume':
        return <Resume />
      case 'articles':
        return <Articles />
      case 'contact':
        return <Contact />
      case 'home':
      default:
        return <Home setActiveSection={setActiveSection} />
    }
  }

  return (
    <div className="min-h-screen bg-paper text-ink font-sans flex flex-col">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-1">{renderSection()}</main>
      <Footer />
    </div>
  )
}

export default App
