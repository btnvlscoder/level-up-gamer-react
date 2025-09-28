import '../styles/Layout.css'
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout = ({ children, activePage = 'home' }) => {
  return (
    <div className="wrapper">
      <aside>
        <Header />
        <nav>
          <ul className="menu">
            <li>
              <a className={`btn-menu ${activePage === 'home' ? 'active' : ''}`} href="/">
                <i className="bi bi-house-door"></i> Inicio
              </a>
            </li>
            <li>
              <a className={`btn-menu ${activePage === 'products' ? 'active' : ''}`} href="/productos">
                <i className="bi bi-controller"></i> Productos
              </a>
            </li>
            <li>
              <a className={`btn-menu ${activePage === 'contact' ? 'active' : ''}`} href="/contacto">
                <i className="bi bi-chat-dots-fill"></i> Contactanos
              </a>
            </li>
            <li>
              <a className={`btn-menu btn-carrito ${activePage === 'cart' ? 'active' : ''}`} href="/carrito">
                <i className="bi bi-cart"></i> Carrito <span className="numerito">0</span>
              </a>
            </li>
          </ul>
        </nav>
        <Footer />
      </aside>

      <main>
        {children}
      </main>
    </div>
  )
}
