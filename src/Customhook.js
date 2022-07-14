import { useState, useEffect } from "react";

const Customhook = () => {
   const [show, handleShow] = useState(false)
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true)
        
      } else {
        handleShow(false)
      }
    })
    return () => {
      window.removeEventListener("scroll");
    }
  }, []);
}

export default Customhook
