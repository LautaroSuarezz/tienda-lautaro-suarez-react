import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <header>
        <h1>SatMat</h1>

        <nav className='navbarStyle'>
            <ul>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Nosotros</li>
            </ul>
        </nav>
      <CartWidget/>
    </header>
  )
}

export default NavBar