
const NavBar = () => {
    return (
        <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full px-10 py-6 z-50">
            <div className="relative flex items-center justify-between">

                <a href="#hero" className='sidebar-button'>winnie &lt;3</a>
                <div className="flex gap-20 w-[400px] mr-10 text-pink-800">
                    <a href="#projects" className='sidebar-button'>projects</a>
                    <a href="#about" className='sidebar-button'>about</a>
                    <a href="#contact" className='sidebar-button'>contact</a>
                </div>

            </div>
            
        </nav>
    )
}

export default NavBar;