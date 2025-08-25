import React,{useState} from 'react'

export default function navbar(){
const [menuOpen, setMenuOpen] = useState(false)
return(
    <nav className=' bg-white shadow-md px-6 py-3 flex items-center justify-between sticky top=0 z-50'>
        {/* logo */}
        <div className=' text-xl font-bold text-blue-600'>
            SocialFeed
        </div>
        {/* searchbar (hidden on small screens) */}
        <div className=' hidden md:flex flex-1 mx-4'>
            <input type="text" placeholder='Search....' className='w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
        </div>
        {/* Profile+Hamburger */}
        <div className='flex items-center space-x-4'>
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" className='w-10 h-10 rounded-full' />
            {/* Mobile Menu button */}
            <button className=' md:hidden text-gray-600 focus:outline-none' onClick={()=> setMenuOpen(!menuOpen)}>☰
            </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
            <div className=' absolute top-14 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-3 md:hidden z-[9999]'>
                <a href="/" className='text-gray-700'>Home</a>
                <a href="/" className='text-gray-700'>Explore</a>
                <a href="/" className='text-gray-700'>Messages</a>
                <a href="/" className='text-gray-700'>Profile</a>
            </div>
        )}
    </nav>
)
}