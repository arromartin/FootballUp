'use client'

// TODO: This is a placeholder component.
// The actual implementation should use react-konva to draw a soccer pitch
// and allow placing players on it.

export default function PitchCanvas({ players, onSave }: { players: any[], onSave: (slots: any[]) => void }) {
  return (
    <div className="bg-green-700 aspect-[7/10] w-full rounded-lg text-white flex items-center justify-center">
      <p>PitchCanvas placeholder</p>
      <button className="btn ml-4" onClick={() => onSave([])}>Save (dummy)</button>
    </div>
  )
}
