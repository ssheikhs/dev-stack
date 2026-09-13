import TechCard from './TechCard.jsx'

function TechGrid({ technologies, stack, onAdd }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {technologies.map((tech) => (
        <TechCard
          key={tech.id}
          tech={tech}
          isAdded={stack.some((item) => item.id === tech.id)}
          onAdd={onAdd}
        />
      ))}
    </div>
  )
}

export default TechGrid
