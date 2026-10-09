import { Crown, Heart, Package, Search, ShoppingCart, User } from 'lucide-react'
import logo from '../../assets/images/logo-econverse.jpg'
import { TopBar } from '../TopBar/TopBar'
import './Header.scss'

const NAV_ITEMS = ['Todas categorias', 'Supermercado', 'Livros', 'Moda', 'Lançamentos']

const ICON_ACTIONS = [
  { label: 'Meus pedidos', Icon: Package },
  { label: 'Favoritos', Icon: Heart },
  { label: 'Minha conta', Icon: User },
  { label: 'Carrinho', Icon: ShoppingCart },
]

export function Header() {
  return (
    <header className="header">
      <TopBar />
      <div className="header__main">
        <a href="/" className="header__logo">
          <img src={logo} alt="Econverse" width={130} height={40} />
        </a>
        <form className="header__search" role="search" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="busca" className="sr-only">
            Buscar produtos
          </label>
          <input id="busca" type="search" placeholder="O que você está buscando?" />
          <button type="submit" aria-label="Buscar">
            <Search size={20} aria-hidden="true" />
          </button>
        </form>
        <ul className="header__actions">
          {ICON_ACTIONS.map(({ label, Icon }) => (
            <li key={label}>
              <button type="button" aria-label={label}>
                <Icon size={22} aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <nav className="header__nav" aria-label="Principal">
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
          <li>
            <a href="#" className="header__nav-highlight">
              Ofertas do dia
            </a>
          </li>
          <li>
            <a href="#" className="header__nav-crown">
              <Crown size={16} aria-hidden="true" />
              Assinatura
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
