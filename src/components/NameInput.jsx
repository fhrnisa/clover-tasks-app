import { useState } from 'react'

function NameInput({ onSubmit }) {
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = name.trim()
    if (!trimmed) {
      setError('Nama tidak boleh kosong')
      return
    }
    onSubmit(trimmed)
  }

  return (
    <div className="screen screen--center name-input-screen">
      {/* pola clover di background, dekoratif saja */}
      <div className="clover-pattern" aria-hidden="true" />

      <div className="name-card">
        <h2 className="name-card__title">Halo! 👋🏻</h2>
        <p className="name-card__subtitle">
          Mari mulai langkah kecil hari ini.
          Siapa namamu?
        </p>

        <form className="name-form" onSubmit={handleSubmit}>
          <input
            className="field-input"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
              setError('')
            }}
            placeholder="Nama panggilan kamu"
            autoFocus
          />
          {error && <p className="name-error">{error}</p>}
          <button className="btn btn--primary btn--block" type="submit">
            Mulai
          </button>
        </form>
      </div>
    </div>
  )
}

export default NameInput
