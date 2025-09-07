'use client'
import { useEffect, useState } from 'react'
import { api } from '../../../lib/api'

export default function MatchesPage() {
  const [matches, setMatches] = useState<any[]>([])
  const [teamId] = useState<number>(1)
  const [opponent, setOpponent] = useState('')
  const [date, setDate] = useState('')
  const [stadium, setStadium] = useState('')

  const load = async () => setMatches(await api.get(`/matches?team_id=${teamId}`))
  useEffect(() => { load() }, [])

  const create = async () => {
    const m = await api.post('/matches', { team_id: teamId, opponent, date, stadium })
    setMatches((prev)=>[...prev,m])
    setOpponent(''); setDate(''); setStadium('')
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="card">
        <h2 className="text-lg font-semibold mb-2">Crear partido</h2>
        <div className="grid gap-3">
          <input className="input" placeholder="Rival" value={opponent} onChange={e=>setOpponent(e.target.value)} />
          <input className="input" placeholder="Fecha (YYYY-MM-DD)" value={date} onChange={e=>setDate(e.target.value)} />
          <input className="input" placeholder="Estadio" value={stadium} onChange={e=>setStadium(e.target.value)} />
          <button className="btn" onClick={create}>Crear Partido</button>
        </div>
      </div>
      <div className="card">
        <h2 className="text-lg font-semibold mb-2">Partidos creados</h2>
        <ul className="space-y-2">
          {matches.map(m => (
            <li key={m.id} className="border rounded-lg p-3">
              <div className="font-medium">{m.opponent}</div>
              <div className="text-sm text-gray-600">{m.date} — {m.stadium}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
