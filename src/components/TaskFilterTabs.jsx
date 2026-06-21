const FILTERS = [
  { key: 'semua', label: 'Semua' },
  { key: 'aktif', label: 'Aktif' },
  { key: 'selesai', label: 'Selesai' },
]

function TaskFilterTabs({ active, onChange }) {
  return (
    <div className="filter-tabs" role="tablist">
      {FILTERS.map((filter) => (
        <button
          key={filter.key}
          type="button"
          role="tab"
          aria-selected={active === filter.key}
          className={`filter-tab ${
            active === filter.key ? 'filter-tab--active' : ''
          }`}
          onClick={() => onChange(filter.key)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}

export default TaskFilterTabs
