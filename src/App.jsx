import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Loading from './components/Loading.jsx'

function App() {
  const [technologies, setTechnologies] = useState([])
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

      {loading ? (
        <Loading />
      ) : (
        <p className="text-center text-gray-500 pb-16">
          Loaded {technologies.length} technologies. (Cards grid coming in the next step.)
        </p>
      )}
    </div>
  )
}

export default App
