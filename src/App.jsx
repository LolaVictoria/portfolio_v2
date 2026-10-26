
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './sections/Home'
import Projects from './sections/Projects'
import Resume from './sections/Resume'
import Articles from './sections/Articles'
import Contact from './sections/Contact'
import JobAlertArticle from './sections/JobAlertArticle'

const Layout = ({ children }) => (
  <div className="min-h-screen bg-paper text-ink font-sans flex flex-col">
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/projects" element={<Layout><Projects /></Layout>} />
        <Route path="/resume" element={<Layout><Resume /></Layout>} />
        <Route path="/articles" element={<Layout><Articles /></Layout>} />
        <Route
          path="/articles/building-a-reliable-job-alert-system"
          element={<Layout><JobAlertArticle /></Layout>}
        />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
