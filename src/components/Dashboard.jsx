import { useState, useEffect } from 'react'
import ProfileMenu from './ProfileMenu'
import ProgressCard from './ProgressCard'
import EmptyState from './EmptyState'
import TaskFilterTabs from './TaskFilterTabs'
import TaskList from './TaskList'
import AddTaskModal from './AddTaskModal'

function Dashboard({ userName, onLogout, onEditName }) {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const [filter, setFilter] = useState('semua')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const addTask = (taskData) => {
    setTasks((prev) => [
      ...prev,
      { id: crypto.randomUUID(), done: false, ...taskData },
    ])
    setIsModalOpen(false)
  }

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    )
  }

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  const doneCount = tasks.filter((task) => task.done).length

  const visibleTasks = tasks.filter((task) => {
    if (filter === 'aktif') return !task.done
    if (filter === 'selesai') return task.done
    return true
  })

  return (
    <div className="screen dashboard">
      <header className="app-header">
        <span className="app-logo">
          <span aria-hidden="true">
            <svg className="app-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.5 15C28.5 17.8287 27.75 19.59 26.2588 20.2337C25.8238 20.4166 25.3556 20.5073 24.8837 20.5C24.5307 20.4968 24.1789 20.4579 23.8337 20.3838C23.7063 20.3584 23.5936 20.285 23.5187 20.1787C21.7628 17.6843 19.7634 15.3704 17.55 13.2712C17.3574 13.0889 17.1002 12.9906 16.8351 12.9978C16.57 13.0051 16.3186 13.1174 16.1362 13.31C15.9539 13.5026 15.8556 13.7598 15.8628 14.0249C15.8701 14.29 15.9824 14.5414 16.175 14.7237C18.03 16.4625 24.1912 22.66 25.965 29.7575C26.0293 30.0148 25.9887 30.287 25.8523 30.5144C25.7159 30.7418 25.4947 30.9056 25.2375 30.97C25.1598 30.9895 25.0801 30.9995 25 31C24.7772 30.9997 24.5609 30.925 24.3854 30.7878C24.2099 30.6505 24.0853 30.4586 24.0313 30.2425C23.5163 28.1837 22.575 26.1825 21.4737 24.3563C21.4385 24.6665 21.3585 24.9701 21.2363 25.2575C20.59 26.75 18.8287 27.5 16 27.5C13.1713 27.5 11.41 26.75 10.765 25.2575C10.0838 23.685 10.7162 21.405 12.64 18.4813C12.725 18.3563 12.81 18.2313 12.89 18.1063L12.515 18.3563C10.355 19.7838 8.54375 20.5 7.11125 20.5C6.63944 20.5073 6.17125 20.4166 5.73625 20.2337C4.25 19.59 3.5 17.8287 3.5 15C3.5 12.1713 4.25 10.41 5.74125 9.765C7.315 9.08375 9.595 9.71625 12.5188 11.64L12.8938 11.89L12.6438 11.515C10.7175 8.59125 10.085 6.31125 10.7688 4.7375C11.41 3.25 13.1713 2.5 16 2.5C18.8287 2.5 20.59 3.25 21.235 4.74125C21.9162 6.315 21.2838 8.595 19.36 11.5188C19.2767 11.6463 19.1933 11.7713 19.11 11.8938L19.485 11.6438C22.4088 9.7175 24.6887 9.085 26.2625 9.76875C27.75 10.41 28.5 12.1713 28.5 15Z" fill="#4C7C3D"/>
            </svg>
          </span> Clover Tasks
        </span>
        <ProfileMenu
          userName={userName}
          onEditName={onEditName}
          onLogout={onLogout}
        />
      </header>

      <section className="greeting-block">
        <h1 className="greeting-title">
          Halo, {userName}! 👋🏻
          <br />
          Ada rencana apa hari ini?
        </h1>
        <p className="greeting-subtitle">
          Yuk selesaikan satu per satu dan buat hari ini berarti 🌿
        </p>
      </section>

      <ProgressCard done={doneCount} total={tasks.length} />

      {tasks.length === 0 ? (
        <EmptyState onCreate={() => setIsModalOpen(true)} />
      ) : (
        <section className="task-section">
          <h2 className="task-section__title">Tugas</h2>
          <TaskFilterTabs active={filter} onChange={setFilter} />
          <TaskList
            tasks={visibleTasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
          <button
            className="btn btn--primary btn--block"
            type="button"
            onClick={() => setIsModalOpen(true)}
          >
            + Tambah Tugas
          </button>
        </section>
      )}

      {isModalOpen && (
        <AddTaskModal
          onClose={() => setIsModalOpen(false)}
          onSave={addTask}
        />
      )}
    </div>
  )
}

export default Dashboard
