import icons from "../../icons/R.jpg"
import './header.css';
function Header () {
    return(
        <header className='header-menu'>
            <h1>Bem vindo</h1>
            <img src={icons} className='img-logo'/>
            
        </header>
    )
}
export default Header;