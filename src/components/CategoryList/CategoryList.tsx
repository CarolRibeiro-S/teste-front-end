import tecnologia from '../../assets/icons/categoria-tecnologia.jpg'
import supermercado from '../../assets/icons/categoria-supermercado.jpg'
import bebidas from '../../assets/icons/categoria-bebidas.jpg'
import ferramentas from '../../assets/icons/categoria-ferramentas.jpg'
import saude from '../../assets/icons/categoria-saude.jpg'
import esportes from '../../assets/icons/categoria-esportes.jpg'
import moda from '../../assets/icons/categoria-moda.jpg'
import './CategoryList.scss'

const CATEGORIES = [
  { name: 'Tecnologia', icon: tecnologia, active: true },
  { name: 'Supermercado', icon: supermercado, active: false },
  { name: 'Bebidas', icon: bebidas, active: false },
  { name: 'Ferramentas', icon: ferramentas, active: false },
  { name: 'Saúde', icon: saude, active: false },
  { name: 'Esportes e Fitness', icon: esportes, active: false },
  { name: 'Moda', icon: moda, active: false },
]

export function CategoryList() {
  return (
    <section className="categories" aria-label="Categorias">
      <ul className="categories__list">
        {CATEGORIES.map(({ name, icon, active }) => (
          <li key={name}>
            <a
              href="#"
              className={`categories__item${active ? ' categories__item--active' : ''}`}
              aria-current={active ? 'true' : undefined}
            >
              <span className="categories__box">
                <img src={icon} alt="" />
              </span>
              <span className="categories__name">{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
