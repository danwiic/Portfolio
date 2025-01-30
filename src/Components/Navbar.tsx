

export default function Navbar({ children } : { children: React.ReactNode }) {
  return(
    <>
        <div className="flex justify-between bg-white p-4 shadow-md text-md mb-1 sticky top-0 z-10">
            <div>
                Danwiic
            </div>

            <div className="flex justify-around gap-8">
                <ul className="flex gap-6">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div>
                    <button className="cursor-pointer">Lightmode</button>
                </div>
            </div>
        </div>
        {children}
    </>
  )
}
