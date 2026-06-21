const HARI = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']

// Mengubah tanggal (yyyy-mm-dd) jadi label relatif: "Hari ini", "Besok",
// "Kemarin", nama hari (kalau masih dalam seminggu), atau dd/mm.
export function formatRelativeDay(dateStr) {
  if (!dateStr) return ''

  const target = new Date(`${dateStr}T00:00:00`)
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const diffDays = Math.round((target - today) / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return 'Hari ini'
  if (diffDays === 1) return 'Besok'
  if (diffDays === -1) return 'Kemarin'
  if (diffDays > 1 && diffDays < 7) return HARI[target.getDay()]
  if (diffDays < -1 && diffDays > -7) return HARI[target.getDay()]

  const dd = String(target.getDate()).padStart(2, '0')
  const mm = String(target.getMonth() + 1).padStart(2, '0')
  return `${dd}/${mm}`
}

// "14:30" -> "14.30", sesuai gaya penulisan waktu di desain
export function formatTime(timeStr) {
  if (!timeStr) return ''
  return timeStr.replace(':', '.')
}
