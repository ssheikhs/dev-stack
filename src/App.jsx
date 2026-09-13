import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Loading from './components/Loading.jsx'
import TechGrid from './components/TechGrid.jsx'
import YourStack from './components/YourStack.jsx'

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

  const addToStack = (tech) => {
    const alreadyAdded = stack.some((item) => item.id === tech.id)

    if (alreadyAdded) {
      toast.warn(`${tech.name} is already in your stack.`)
      return
    }

    setStack((prev) => [...prev, tech])
    toast.success(`${tech.name} added to your stack.`)
  }

  const removeFromStack = (id) => {
    const item = stack.find((tech) => tech.id === id)
    setStack((prev) => prev.filter((tech) => tech.id !== id))
    if (item) toast.info(`${item.name} removed from your stack.`)
  }

  const removeAll = () => {
    setStack([])
    toast.info('All technologies removed from your stack.')
  }

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
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
              <div className="lg:col-span-3">
                <TechGrid technologies={technologies} stack={stack} onAdd={addToStack} />
              </div>

              <YourStack stack={stack} onRemove={removeFromStack} onRemoveAll={removeAll} />
            </div>
          )}
        </div>
      </section>

      <ToastContainer position="bottom-right" autoClose={2500} />
    </div>
  )
}

export default App
