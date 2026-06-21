import { useState } from 'react'

function AddTaskModal({ onClose, onSave }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = title.trim()
    if (!trimmed) {
      setError('Judul tugas tidak boleh kosong')
      return
    }
    onSave({ title: trimmed, description: description.trim(), date, time })
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Tambah tugas"
      >
        <h2 className="modal-title">Tambah Tugas</h2>

        <form className="modal-form" onSubmit={handleSubmit}>
          <label className="field-label" htmlFor="task-title">
            Judul
          </label>
          <input
            id="task-title"
            className="field-input"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
              setError('')
            }}
            placeholder="Apa yang ingin kamu selesaikan?"
            autoFocus
          />
          {error && <p className="name-error">{error}</p>}

          <label className="field-label" htmlFor="task-description">
            Deskripsi
          </label>
          <textarea
            id="task-description"
            className="field-input field-textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Opsional"
          />

          <label className="field-label">Tanggal & Waktu</label>
          <div className="field-row">
            <input
              className="field-input"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              aria-label="Tanggal"
            />
            <input
              className="field-input"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              aria-label="Waktu"
            />
          </div>

          <button className="btn btn--primary btn--block" type="submit">
            Simpan
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddTaskModal
