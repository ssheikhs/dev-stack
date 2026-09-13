function StackItem({ item, onRemove }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-gray-200 p-3">
      <img src={item.icon} alt={item.name} className="h-8 w-8" />

      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900">{item.name}</p>
        <p className="text-xs text-gray-400">{item.category}</p>
      </div>

      <button
        type="button"
        onClick={() => onRemove(item.id)}
        aria-label={`Remove ${item.name} from stack`}
        className="text-gray-400 hover:text-red-500"
      >
        ✕
      </button>
    </div>
  )
}

export default StackItem
