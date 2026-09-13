import StackItem from './StackItem.jsx'

function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="rounded-2xl border border-gray-200 bg-white p-5 lg:sticky lg:top-20 h-fit">
      <h3 className="text-lg font-semibold text-gray-900">Your Stack</h3>
      <p className="text-sm text-gray-400">
        {stack.length === 0 ? 'No technologies selected yet.' : `${stack.length} Technology Selected`}
      </p>

      {stack.length === 0 ? (
        <div className="mt-4 rounded-xl border border-dashed border-gray-300 py-8 text-center text-sm text-gray-400">
          Your stack is empty.
        </div>
      ) : (
        <>
          <div className="mt-4 flex flex-col gap-3">
            {stack.map((item) => (
              <StackItem key={item.id} item={item} onRemove={onRemove} />
            ))}
          </div>

          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-4 w-full rounded-full border border-red-200 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  )
}

export default YourStack
