'use client'
import { useEffect, useState } from 'react'
import { api } from '../../../lib/api'
import PlayerForm from '../../../components/PlayerForm'
import PlayerList from '../../../components/PlayerList'

export default function SquadPage() {
  const [players, setPlayers] = useState<any[]>([])
  const [teamId, setTeamId] = useState<number>(1) // TODO: selector de equipo

  const load = async () => setPlayers(await api.get(`/players?team_id=${teamId}`))
  useEffect(() => { load() }, [teamId])

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="card">
        <h2 className="text-lg font-semibold mb-2">Plantilla</h2>
        <PlayerList players={players} onRefresh={load} />
      </div>
      <div className="card">
        <h2 className="text-lg font-semibold mb-2">Agregar nuevo jugador</h2>
        <PlayerForm teamId={teamId} onCreated={load} />
      </div>
    </div>
  )
}
