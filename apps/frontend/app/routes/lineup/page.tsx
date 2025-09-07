'use client'
import { useEffect, useState } from 'react'
import { api } from '../../../lib/api'
import PitchCanvas from '../../../components/PitchCanvas'

export default function LineupPage() {
  const [players, setPlayers] = useState<any[]>([])
  const [lineupId, setLineupId] = useState<number | null>(null)
  const teamId = 1 // TODO selector

  useEffect(() => { api.get(`/players?team_id=${teamId}`).then(setPlayers) }, [])

  const save = async (slots: any[]) => {
    const lineup = await api.post('/lineups', { match_id: null, name: 'Plan A', formation: '4-3-3' })
    setLineupId(lineup.id)
    await api.post(`/lineups/${lineup.id}/slots`, { slots })
    alert('Alineación guardada ✅')
  }

  return (
    <div className="card">
      <h2 className="text-lg font-semibold mb-3">Editor de Alineación</h2>
      <PitchCanvas players={players} onSave={save} />
    </div>
  )
}
