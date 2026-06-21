import { useState, useEffect } from 'react'
import SplashScreen from './components/SplashScreen'
import NameInput from './components/NameInput'
import LoadingScreen from './components/LoadingScreen'
import Dashboard from './components/Dashboard'

function App() {
  // step menentukan layar mana yang aktif: splash | nameInput | loading | dashboard
  const [step, setStep] = useState('splash')
  const [userName, setUserName] = useState('')

  // Saat app pertama kali load, cek apakah nama sudah pernah disimpan
  useEffect(() => {
    const savedName = localStorage.getItem('userName')
    if (savedName) {
      setUserName(savedName)
    }
  }, [])

  // Hapus nama dari localStorage, reset state, kembali ke splash
  const handleLogout = () => {
    localStorage.removeItem('userName')
    setUserName('')
    setStep('splash')
  }

  // Update nama tanpa mengubah alur/step (dipanggil dari menu profil)
  const handleEditName = (newName) => {
    localStorage.setItem('userName', newName)
    setUserName(newName)
  }

  return (
    <div className="app-shell">
      {step === 'splash' && (
        <SplashScreen
          onFinish={() => setStep(userName ? 'loading' : 'nameInput')}
        />
      )}

      {step === 'nameInput' && (
        <NameInput
          onSubmit={(name) => {
            localStorage.setItem('userName', name)
            setUserName(name)
            setStep('loading')
          }}
        />
      )}

      {step === 'loading' && (
        <LoadingScreen onFinish={() => setStep('dashboard')} />
      )}

      {step === 'dashboard' && (
        <Dashboard
          userName={userName}
          onLogout={handleLogout}
          onEditName={handleEditName}
        />
      )}
    </div>
  )
}

export default App
