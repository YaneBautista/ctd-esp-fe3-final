import { useContext } from "react"; 
import { ContextGlobal } from "./utils/global.context"; 

const Footer = () => {
  const { state } = useContext(ContextGlobal); 
  const isLightTheme = state.theme === "light";

  return (
    <footer className={isLightTheme ? "footer light-theme" : "footer dark-theme"}>
    
        <p>Powered by</p>
        <img src="./public/images/DH.png" alt='DH-logo' /> 
        
        <div className="social-icons">
          <img src="/images/ico-facebook.png" alt="Facebook" className="social-icon"/>
          <img src="/images/ico-instagram.png" alt="Instagram" className="social-icon"/>
          <img src="/images/ico-whatsapp.png" alt="Whatsapp" className="social-icon"/>
          <img src="/images/ico-tiktok.png" alt="Tik-Tok" className="social-icon"/>
        </div>


    </footer>
  )
}

export default Footer;
