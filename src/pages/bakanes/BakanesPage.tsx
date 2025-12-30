import { 
  Search, 
  Filter, 
  Pencil, 
  Trash2, 
  Eye, // Icono de "Ver detalle" (Ojo)
  ChevronDown, 
  ChevronLeft, 
  ChevronRight,
  User, 
  ArrowUpDown 
} from "lucide-react";

// Datos simulados
const categoriesData = [
  {
    id: 1,
    name: "Foto + Descripción",
    status: "Activo",
    description: "Realizar actividad física al menos 30 minutos cada dia",
    date: "Abr 3, 2024",
  },
  {
    id: 2,
    name: "Foto + Descripción",
    status: "Activo",
    description: "Realizar actividad física al menos 30 minutos cada dia",
    date: "Abr 3, 2024",
  },
  // ... más datos
];

export const BakanesPage = () => {
  return (
    <div className="w-full p-8 bg-white min-h-screen">
      
      {/* 1. TÍTULO */}
      <h1 className="text-[32px] font-bold text-black mb-6 tracking-tight">
        Categorias
      </h1>

      {/* 2. TABS */}
        <div className="flex gap-6 border-b border-gray-200">
        {["Categorias", "Tipos", "Evidencias"].map((tab, i) => (
            <button
            key={tab}
            className={`pb-2 text-sm font-medium ${
                i === 0
                ? "text-indigo-700 border-b-2 border-indigo-700"
                : "text-gray-500 hover:text-gray-700"
            }`}
            >
            {tab}
            </button>
        ))}
        </div>


      {/* 3. BARRA DE HERRAMIENTAS */}
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <input
                type="text"
                placeholder="Buscar"
                className="w-64 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />

                <button className="flex items-center gap-2 text-sm text-gray-700">
                <span>Filtros</span>
                </button>
            </div>

            <button className="bg-indigo-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-800">
                Crear tipo de categoria
            </button>
        </div>


      {/* 4. TABLA */}
      <div className="border border-gray-200 rounded-md overflow-hidden">
        <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
            <tr>
                <th className="px-4 py-3 text-left">Nombre de la categoria</th>
                <th className="px-4 py-3 text-left">Icono de la categoria</th>
                <th className="px-4 py-3 text-left">Estado</th>
                <th className="px-4 py-3 text-left">Descripción</th>
                <th className="px-4 py-3 text-left">Fecha de creación</th>
                <th className="px-4 py-3 text-center">Acciones</th>
            </tr>
            </thead>

            <tbody>
            {[1, 2].map((_, i) => (
                <tr key={i} className="border-t">
                <td className="px-4 py-4">Foto + Descripción</td>

                <td className="px-4 py-4">
                    <div className="w-6 h-6 bg-pink-400 rounded flex items-center justify-center text-white text-xs">
                    👤
                    </div>
                </td>

                <td className="px-4 py-4">
                    <span className="inline-flex items-center justify-center px-3 py-1 text-xs font-medium text-green-700 border border-green-500 rounded-md bg-green-100">
                    Activo
                    </span>
                </td>

                <td className="px-4 py-4 text-gray-700">
                    Realizar actividad fisica al menos 30 minutos cada dia
                </td>

                <td className="px-4 py-4">Abr 3, 2024</td>

                <td className="px-4 py-4 text-center space-x-3">
                    ✏️ 🗑 👁
                </td>
                </tr>
            ))}
            </tbody>
        </table>

        {/* Paginación */}
        <div className="flex items-center justify-center gap-6 px-4 py-3 border-t text-sm text-gray-600">
            <span>Resultados por página</span>
            <select className="border rounded px-2 py-1">
            <option>10</option>
            </select>
            <span>1 - 10 de 40</span>
            <span className="cursor-pointer">«</span>
            <span className="cursor-pointer">‹</span>
            <span className="cursor-pointer">›</span>
            <span className="cursor-pointer">»</span>
        </div>
        </div>


    </div>
  );
}

export default BakanesPage;