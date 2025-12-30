

export const NavBar = () => {
  return (
    <nav 
      className='
        sticky top-0 z-10 
        flex items-center justify-between 
        w-full h-[65px] 
        py-4 px-9 
        bg-[#1E1B4D] text-white shadow-md
      '
    >
      {/* Lado Izquierdo */}
      <ul className='flex items-center gap-4'>
        <li className='font-semibold text-lg'>
          Be Kined Network
        </li>
      </ul>

      {/* Lado Derecho */}
      <ul className='flex items-center gap-4'>    
        <li className='flex items-center cursor-pointer'>
          <p>User</p>
        </li>
      </ul>
    </nav>
  )
}