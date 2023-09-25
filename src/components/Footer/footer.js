import icons0 from "../../icons/icons8-casa-100.png"
import icons1 from "../../icons/icons8-farol-64.png"
import icons2 from "../../icons/lighthouse-8191282_1920.jpg"
import './footer.css';
function Footer (){
    return(
   <footer className="footer-menu">
    <div className="Footer-casa">
            <img src={icons0} className='icons-casa' alt="casa01"/>
    
    <h3>as melhores casas em todo lugar </h3>
    
        <img src={icons1} className='icons-farol' alt="farol0"/>
    </div>
     <div className="Footer-farol1">
        <img src={icons2} className='icons-farol2' alt="farol1" />
    </div>
   </footer>
       

    )
}
export default Footer;