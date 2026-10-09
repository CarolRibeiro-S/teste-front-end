import heroImage from '../../assets/images/hero-black-friday.jpg'
import './Hero.scss'

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-titulo">
      <img className="hero__image" src={heroImage} alt="Vitrine de loja com letreiros de neon da Black Friday" />
      <div className="hero__overlay" />
      <div className="hero__content">
        <h1 id="hero-titulo" className="hero__title">
          Venha conhecer nossas promoções
        </h1>
        <p className="hero__offer">
          <strong>50% Off</strong> nos produtos
        </p>
        <a href="#vitrine-relacionados" className="hero__button">
          Ver produto
        </a>
      </div>
    </section>
  )
}
