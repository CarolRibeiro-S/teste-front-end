import bannerImage from '../../assets/images/banner-parceiros.jpg'
import './PromoBanners.scss'

interface PromoBannersProps {
  id: string
}

const BANNERS = [1, 2]

export function PromoBanners({ id }: PromoBannersProps) {
  return (
    <section className="promo-banners" aria-label="Parceiros">
      <ul className="promo-banners__list">
        {BANNERS.map((n) => {
          const titleId = `${id}-${n}`
          return (
            <li key={n} className="promo-banners__item">
              <article className="promo-banner" aria-labelledby={titleId}>
                <img className="promo-banner__image" src={bannerImage} alt="" />
                <div className="promo-banner__content">
                  <h3 id={titleId} className="promo-banner__title">
                    Parceiros
                  </h3>
                  <p className="promo-banner__text">Lorem ipsum dolor sit amet, consectetur</p>
                  <a href="#" className="promo-banner__button">
                    Confira
                  </a>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
