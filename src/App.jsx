import { useState } from 'react'

const items = [
  { name: 'Videos', type: 'folder' },
  { name: 'Fotos', type: 'folder' },
  { name: 'PDFs', type: 'folder' },
  { name: 'TXT', type: 'folder' }
]

export default function App() {
  const [search, setSearch] = useState('')

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <header className="bg-white p-4 shadow-sm flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-orange-500"></div>

        <div>
          <h1 className="text-2xl font-bold text-orange-500">
            Files
          </h1>
        </div>
      </header>

      <div className="p-4">
        <input
          className="w-full p-3 rounded-2xl border border-gray-200 mb-5"
          placeholder="Pesquisar arquivos..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />

        <div className="grid grid-cols-2 gap-4">
          {items
            .filter(i => i.name.toLowerCase().includes(search.toLowerCase()))
            .map((item,index)=>(
            <div
              key={index}
              className="bg-white rounded-3xl shadow-sm p-4"
            >
              <div className="aspect-video rounded-2xl bg-orange-100 mb-3 flex items-center justify-center text-5xl">
                📁
              </div>

              <h2 className="font-semibold text-lg">
                {item.name}
              </h2>

              <button
                className="mt-3 w-full bg-orange-500 text-white rounded-2xl p-2"
              >
                Abrir
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
