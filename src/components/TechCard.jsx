function TechCard({ tech, isAdded, onAdd }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 flex flex-col">
      <div className="flex items-start justify-between">
        <img src={tech.icon} alt={tech.name} className="h-9 w-9" />
        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600">
          {tech.badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-gray-900">{tech.name}</h3>
      <p className="mt-1 text-sm text-gray-500 flex-1">{tech.description}</p>

      <div className="mt-4 flex items-center gap-3 text-xs text-gray-500">
        <span className="rounded-full bg-gray-100 px-3 py-1">{tech.category}</span>
        <span>{tech.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 text-gray-700">
          ★ {tech.rating}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={
          'mt-4 w-full rounded-xl py-2.5 text-sm font-medium transition ' +
          (isAdded
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-gray-900 text-white hover:bg-gray-800')
        }
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  )
}

export default TechCard
