'use client'
import { api } from '../lib/api'

export default function PlayerList({ players, onRefresh }: { players: any[], onRefresh: () => void }) {
  const deletePlayer = async (id: number) => {
    if (confirm('¿Seguro que quieres eliminar este jugador?')) {
      await api.delete(`/players/${id}`)
      onRefresh()
    }
  }

  if (!players || players.length === 0) {
    return <p className="text-gray-500">No hay jugadores en la plantilla.</p>
  }

  return (
    <ul className="space-y-2">
      {players.map(p => (
        <li key={p.id} className="border rounded-lg p-3 flex justify-between items-center">
          <div>
            <div className="font-medium">{p.name} (#{p.dorsal})</div>
            <div className="text-sm text-gray-600">{p.position} / {p.foot}</div>
          </div>
          <button onClick={() => deletePlayer(p.id)} className="text-red-500 hover:text-red-700">
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  )
}
