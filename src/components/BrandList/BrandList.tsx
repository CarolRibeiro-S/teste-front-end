import logo from '../../assets/images/logo-econverse.jpg'
import './BrandList.scss'

const BRANDS = [1, 2, 3, 4, 5]

export function BrandList() {
  return (
    <section className="brands" aria-labelledby="marcas-titulo">
      <h2 id="marcas-titulo" className="brands__title">
        Navegue por marcas
      </h2>
      <ul className="brands__list">
        {BRANDS.map((n) => (
          <li key={n}>
            <a href="#" className="brands__item" aria-label={`Marca Econverse ${n}`}>
              <img src={logo} alt="Econverse" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
