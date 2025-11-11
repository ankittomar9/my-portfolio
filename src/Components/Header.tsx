
const Header=()=>{
    return(
      <nav className="flex justify-between p-6 bg-[#0A192F] text-[#64FFDA]">
        <h1 className="">My Portfolio Header</h1>
        <div>

          <a className="text-[#8892B0]"  href="#about" >About</a>
          <a  href="#work" >Work</a>
          <a  href="#experience" >Experience</a>
          <a  href="#skills" >Skills</a>
           <a  href="#contact" >Contact</a>
        
        </div>

      </nav>
    )
}

export default Header;