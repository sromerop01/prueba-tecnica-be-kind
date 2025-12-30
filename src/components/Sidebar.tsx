import { NavLink } from "react-router-dom";
import { 
  House, 
  ChartSpline, 
  Users, 
  BadgeDollarSign, 
  Store, 
  CircleStar, 
  SquareMousePointer, 
  Package2,
  LogOut
} from "lucide-react";

const menuItems = [
  { label: "Home", icon: House, path: "/" },
  { label: "Impacto Social", icon: ChartSpline, path: "/social-impact" },
  { label: "Comunidad", icon: Users, path: "/community" },
  { label: "Sponsors", icon: BadgeDollarSign, path: "/sponsors" },
  { label: "Marketplace", icon: Store, path: "/marketplace" },
  { label: "Bakanes", icon: CircleStar, path: "/bakanes" },
  { label: "Contenidos", icon: SquareMousePointer, path: "/content" },
  { label: "Categorias de acciones", icon: Package2, path: "/actegories-actions" },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-white h-[calc(100vh-65px)] border-r border-gray-200 flex flex-col fixed left-0 top-[65px] overflow-y-auto">
      
      {/* Header del Sidebar con Logo */}
      <div className="h-[151px] w-full flex items-center justify-center bg-white">
          {/* LOGO */}
          <div className="w-full h-full bg-gradient-to-br from-purple-100 to-yellow-100 flex items-center justify-center text-slate-700 font-bold shadow-sm">
             Logo BeKind
          </div>
      </div>

      {/* 3. Navegación con NavLink para estado Activo */}
      <nav className="flex-1 mt-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => `
                  relative flex items-center gap-3 px-6 py-3.5 text-sm font-medium transition-colors duration-200
                  ${isActive 
                    ? "bg-teal-50 text-slate-800 border-l-4 border-teal-500"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900 border-l-4 border-transparent"
                  }
                `}
              >
                {/* Renderizamos el icono dinámicamente */}
                <item.icon size={20} strokeWidth={1.5} />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer con Cerrar Sesión */}
      <div className="p-4 mt-auto mb-4">
        <button className="flex items-center gap-3 px-6 py-3 text-sm font-medium text-slate-600 hover:text-red-600 transition-colors w-full">
            <LogOut size={20} />
            <span>Cerrar sesión</span>
        </button>
      </div>

    </aside>
  );
};