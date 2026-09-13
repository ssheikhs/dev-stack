import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Loading from './components/Loading.jsx'
import TechGrid from './components/TechGrid.jsx'

function App() {
  const [technologies, setTechnologies] = useState([])
  const [stack, setStack] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => setTechnologies(data))
      .catch((err) => console.error('Failed to load technologies:', err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      <section id="technologies" className="max-w-6xl mx-auto px-4 pb-20">
        <h2 className="text-3xl font-bold text-gray-900">
          Explore the <span className="text-pink-600">Technologies</span>
        </h2>
        <p className="mt-2 text-gray-500">Pick one technology per category to build your ideal stack.</p>

        <div className="mt-8">
          {loading ? (
            <Loading />
          ) : (
            <TechGrid technologies={technologies} stack={stack} onAdd={() => {}} />
          )}
        </div>
      </section>
    </div>
  )
}

export default App
