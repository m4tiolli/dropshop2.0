import './Header.css'
import logo from '../../../assets/logo_white.png'

function Header() {
  return (
    <div className="header-vend">
      <img src={logo} className='logo' alt="" />
      <div id="containerbotoes">
        <button className="button">entrar</button>
        <button className="button">criar conta</button>
      </div>
    </div>
  );
}

export default Header;
