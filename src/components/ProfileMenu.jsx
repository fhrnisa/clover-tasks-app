import { useState } from 'react'

function ProfileMenu({ userName, onEditName, onLogout }) {
  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState(false)
  const [draftName, setDraftName] = useState(userName)

  const closeMenu = () => {
    setOpen(false)
    setEditing(false)
  }

  const startEdit = () => {
    setDraftName(userName)
    setEditing(true)
  }

  const saveEdit = (e) => {
    e.preventDefault()
    const trimmed = draftName.trim()
    if (!trimmed) return
    onEditName(trimmed)
    setEditing(false)
    setOpen(false)
  }

  return (
    <>
      <button
        className="profile-menu__trigger"
        onClick={() => setOpen(true)}
        aria-label="Menu profil"
        type="button"
      >
        {userName ? userName.charAt(0).toUpperCase() : '?'}
      </button>

      {open && (
        <div
          className="modal-backdrop modal-backdrop--center"
          onClick={closeMenu}
        >
          <div
            className="profile-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Menu profil"
          >
            <button
              className="profile-modal__close"
              onClick={closeMenu}
              aria-label="Tutup"
              type="button"
            >
              ✕
            </button>

            <div className="profile-modal__avatar" aria-hidden="true">
              {userName ? userName.charAt(0).toUpperCase() : '?'}
            </div>

            {editing ? (
              <form className="profile-menu__edit-form" onSubmit={saveEdit}>
                <label className="field-label" htmlFor="profile-name">
                  Nama
                </label>
                <input
                  id="profile-name"
                  className="field-input"
                  value={draftName}
                  onChange={(e) => setDraftName(e.target.value)}
                  autoFocus
                />
                <div className="profile-menu__edit-actions">
                  <button
                    type="button"
                    className="link-btn"
                    onClick={() => setEditing(false)}
                  >
                    Batal
                  </button>
                  <button type="submit" className="link-btn link-btn--accent">
                    Simpan
                  </button>
                </div>
              </form>
            ) : (
              <>
                <p className="profile-modal__name">{userName}</p>
                <button
                  className="btn btn--primary btn--block"
                  type="button"
                  onClick={startEdit}
                >
                  Edit Nama
                </button>
                <button
                  className="profile-modal__logout"
                  type="button"
                  onClick={onLogout}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default ProfileMenu
