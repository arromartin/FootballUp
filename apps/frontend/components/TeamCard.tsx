export default function TeamCard({ team }: { team: any }) {
  return (
    <div className="border rounded-xl p-4 flex items-center justify-between">
      <div>
        <div className="font-semibold">{team.name}</div>
        <div className="text-sm text-gray-600">Categoría: {team.category}</div>
      </div>
      <span className="text-xs bg-gray-100 rounded px-2 py-1">ID {team.id}</span>
    </div>
  )
}
