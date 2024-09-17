import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
const NavBar = () => {
    return (
        <header>
            <h1>Big Shop</h1>
            <nav>
                <ul>
                    <li>Importados</li>
                    <li>Cosmeticos</li>
                    <li>Franquicias</li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default NavBar