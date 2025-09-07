'use client'
import { useEffect, useState } from 'react'
import { api } from '../../lib/api'
import TeamCard from '../../components/TeamCard'

export default function HomePage() {
  const [teams, setTeams] = useState<any[]>([])
  const [name, setName] = useState('')
  const [category, setCategory] = useState('Juvenil')

  useEffect(() => { api.get('/teams').then(setTeams) }, [])

  const create = async () => {
    if (!name) return
    const t = await api.post('/teams', { name, category })
    setTeams((prev) => [...prev, t])
    setName('')
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="card">
        <h2 className="text-lg font-semibold mb-3">Mis equipos</h2>
        <div className="grid gap-3">
          {teams.map((t) => (<TeamCard key={t.id} team={t}/>))}
        </div>
      </div>
      <div className="card">
        <h2 className="text-lg font-semibold mb-3">Crear nuevo equipo</h2>
        <div className="grid gap-3">
          <input className="input" placeholder="Nombre del equipo" value={name} onChange={e=>setName(e.target.value)} />
          <input className="input" placeholder="Categoría" value={category} onChange={e=>setCategory(e.target.value)} />
          <button className="btn w-full" onClick={create}>Crear</button>
        </div>
      </div>
    </div>
  )
}
