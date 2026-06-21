import { formatRelativeDay, formatTime } from '../utils/date'

function TaskItem({ task, onToggle, onDelete }) {
  const dayLabel = formatRelativeDay(task.date)
  const timeLabel = formatTime(task.time)

  return (
    <li className={`task-item ${task.done ? 'task-item--done' : ''}`}>
      <button
        className="task-item__check"
        onClick={() => onToggle(task.id)}
        aria-label={task.done ? 'Tandai belum selesai' : 'Tandai selesai'}
        type="button"
      >
        {task.done && '✓'}
      </button>

      <div className="task-item__body">
        <p className="task-item__title">{task.title}</p>
        {(dayLabel || timeLabel) && (
          <p className="task-item__meta">
            <span aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.99996 15.8334C13.2216 15.8334 15.8333 13.2217 15.8333 10C15.8333 6.77836 13.2216 4.16669 9.99996 4.16669C6.7783 4.16669 4.16663 6.77836 4.16663 10C4.16663 13.2217 6.7783 15.8334 9.99996 15.8334Z" stroke="#7EB26D" stroke-width="1.7"/>
              <path d="M4.97078 2.61334C4.40545 2.76475 3.88995 3.06234 3.47611 3.47617C3.06227 3.89001 2.76469 4.40551 2.61328 4.97084M15.0291 2.61334C15.5944 2.76475 16.1099 3.06234 16.5238 3.47617C16.9376 3.89001 17.2352 4.40551 17.3866 4.97084M9.99995 6.66668V9.79168C9.99995 9.90668 10.0933 10 10.2083 10H12.4999" stroke="#7EB26D" stroke-width="1.7" stroke-linecap="round"/>
              </svg>
            </span>
            {dayLabel}
            {timeLabel && `, ${timeLabel}`}
          </p>
        )}
      </div>

      <button
        className="task-item__delete"
        onClick={() => onDelete(task.id)}
        aria-label="Hapus tugas"
        type="button"
      >
        ✕
      </button>
    </li>
  )
}

export default TaskItem
