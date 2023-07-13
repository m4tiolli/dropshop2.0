import './Header.css'
import logo from '../../assets/logo.png'
import { BiSearch } from 'react-icons/bi'

function Header() {
    return (
        <div id='containerheader'>
            <img src={logo} alt='' />
            <div id="containerpesquisa">
                <input type='text' placeholder='Pesquise por algo...' />
                <BiSearch size={"1.5vw"} className='button' color={"#2b1c0f"} />
            </div>
            <div id="containerbotoes">
                <button className='button'>entrar</button>
                <button className='button'>criar conta</button>
            </div>
        </div>
    )
}

export default Header