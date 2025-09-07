'use client'
import { useState } from 'react'
import { api } from '../lib/api'

export default function PlayerForm({ teamId, onCreated }: { teamId: number, onCreated: ()=>void }) {
  const [name, setName] = useState('')
  const [dorsal, setDorsal] = useState('')
  const [position, setPosition] = useState('')
  const [foot, setFoot] = useState('')

  const submit = async () => {
    await api.post('/players', { team_id: teamId, name, dorsal, position, foot, status: 'OK' })
    setName(''); setDorsal(''); setPosition(''); setFoot('')
    onCreated()
  }

  return (
    <div className="grid gap-3">
      <input className="input" placeholder="Nombre" value={name} onChange={e=>setName(e.target.value)} />
      <input className="input" placeholder="Dorsal" value={dorsal} onChange={e=>setDorsal(e.target.value)} />
      <input className="input" placeholder="Posición" value={position} onChange={e=>setPosition(e.target.value)} />
      <input className="input" placeholder="Pie hábil" value={foot} onChange={e=>setFoot(e.target.value)} />
      <button className="btn" onClick={submit}>Agregar jugador</button>
    </div>
  )
}
