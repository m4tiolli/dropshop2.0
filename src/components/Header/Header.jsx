import './Header.css'
import logo from '../../assets/logo.png'
import { BiSearch } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate()
    return (
        <div>
            <div id='containerheader'>
                <img src={logo} alt='' />
                <div className='search-box'>
                    <input type="text" class="input-search" placeholder="Pesquise por algo..." />
                    <BiSearch size={"1.5vw"} className='button btn-search' color={"#2b1c0f"} />
                </div>
                <div id="containerbotoes">
                    <button className='button' onClick={() => navigate("/login")}>entrar</button>
                    <button className='button'>criar conta</button>
                </div>
            </div>
            <div id='back'></div>
        </div>
    )
}

export default Header