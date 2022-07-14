import "./Nav.css"
import Logo from "./Logo"
import { useEffect, useState } from "react"


const Navbar = () => {

  const [scroll, setScroll] = useState(false)

  useEffect(() => {
        const toggleScrollTrue = () => {
     setScroll(true) 
  }
  const toggleScrollFalse = () => {
    setScroll(false)
  }
      
      window.addEventListener("scroll", () => {
        const scrollmark = 100
        const scrolled = window.scrollY
      if (scrolled > scrollmark ) {
        toggleScrollTrue();
        
      } else {
        toggleScrollFalse();
      }
    })
    return () => {
      window.removeEventListener("scroll", () => {});
    }
    }, []);
  
 return (
    <div className={scroll ? "header header_black" : "header"}>
      <Logo className="svg" /> 
      
        <button className="signin">Sign in</button>
      
    </div>
  )
}

export default Navbar