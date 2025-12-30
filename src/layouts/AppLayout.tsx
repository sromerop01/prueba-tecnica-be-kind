
import { Outlet } from "react-router-dom"
import { NavBar } from "../components/NavBar"
import { Sidebar } from "../components/Sidebar"

export const AppLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <Sidebar />
      
      <main className="pt-[65px] ml-64 p-10">
        <Outlet /> 
      </main>
    </div>
  )
}