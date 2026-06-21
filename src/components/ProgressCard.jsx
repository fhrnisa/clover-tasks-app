function ProgressCard({ done, total }) {
  const percent = total === 0 ? 0 : Math.round((done / total) * 100)

  return (
    <div className="progress-card">
      <div className="progress-card__top">
        <span className="progress-card__icon" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="28" height="28" rx="14" fill="#D3E6CC"/>
          <path d="M8.99996 16.5C8.77895 16.5 8.56698 16.4122 8.4107 16.2559C8.25442 16.0996 8.16663 15.8877 8.16663 15.6667V12.3333C8.16663 12.1123 8.25442 11.9004 8.4107 11.7441C8.56698 11.5878 8.77895 11.5 8.99996 11.5H14V16.5H8.99996Z" fill="#4C7C3D"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19 9H8.16663C7.50358 9 6.8677 9.26339 6.39886 9.73223C5.93002 10.2011 5.66663 10.837 5.66663 11.5V16.5C5.66663 17.163 5.93002 17.7989 6.39886 18.2678C6.8677 18.7366 7.50358 19 8.16663 19H19C19.663 19 20.2989 18.7366 20.7677 18.2678C21.2366 17.7989 21.5 17.163 21.5 16.5C21.721 16.5 21.9329 16.4122 22.0892 16.2559C22.2455 16.0996 22.3333 15.8877 22.3333 15.6667V12.3333C22.3333 12.1123 22.2455 11.9004 22.0892 11.7441C21.9329 11.5878 21.721 11.5 21.5 11.5C21.5 10.837 21.2366 10.2011 20.7677 9.73223C20.2989 9.26339 19.663 9 19 9ZM19 10.6667H8.16663C7.94561 10.6667 7.73365 10.7545 7.57737 10.9107C7.42109 11.067 7.33329 11.279 7.33329 11.5V16.5C7.33329 16.721 7.42109 16.933 7.57737 17.0893C7.73365 17.2455 7.94561 17.3333 8.16663 17.3333H19C19.221 17.3333 19.4329 17.2455 19.5892 17.0893C19.7455 16.933 19.8333 16.721 19.8333 16.5V11.5C19.8333 11.279 19.7455 11.067 19.5892 10.9107C19.4329 10.7545 19.221 10.6667 19 10.6667Z" fill="#4C7C3D"/>
          </svg>
        </span>
        <span className="progress-card__label">Progres Hari ini</span>
      </div>

      <div className="progress-card__stats">
        <span>
          {done} dari {total} tugas selesai
        </span>
        <span className="progress-card__percent">{percent}%</span>
      </div>

      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  )
}

export default ProgressCard
