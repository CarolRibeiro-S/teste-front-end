import { useState } from 'react'
import type { Product } from '../../types/product'
import { Carousel } from '../Carousel/Carousel'
import { ProductCard } from '../ProductCard/ProductCard'
import './ProductShowcase.scss'

interface ProductShowcaseProps {
  id: string
  title: string
  products: Product[]
  loading: boolean
  error: string | null
  onSelectProduct: (product: Product) => void
  tabs?: string[]
  seeAllLink?: boolean
}

export function ProductShowcase({
  id,
  title,
  products,
  loading,
  error,
  onSelectProduct,
  tabs,
  seeAllLink = false,
}: ProductShowcaseProps) {
  const [activeTab, setActiveTab] = useState(0)
  const titleId = `${id}-titulo`

  return (
    <section id={id} className="showcase" aria-labelledby={titleId}>
      <div className="showcase__content">
        <h2 id={titleId} className="showcase__title">
          {title}
        </h2>

        {seeAllLink && (
          <a href="#" className="showcase__see-all">
            Ver todos
          </a>
        )}

        {tabs && (
          <ul className="showcase__tabs" role="tablist" aria-label={title}>
            {tabs.map((tab, i) => (
              <li key={tab} role="presentation">
                <button
                  type="button"
                  role="tab"
                  aria-selected={i === activeTab}
                  className={`showcase__tab${i === activeTab ? ' showcase__tab--active' : ''}`}
                  onClick={() => setActiveTab(i)}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        )}

        {loading && <p className="showcase__status">Carregando produtos...</p>}
        {error && (
          <p className="showcase__status showcase__status--error" role="alert">
            Não foi possível carregar os produtos. {error}
          </p>
        )}
        {!loading && !error && (
          <Carousel label={title}>
            {products.map((product, i) => (
              <ProductCard key={`${product.productName}-${i}`} product={product} onSelect={onSelectProduct} />
            ))}
          </Carousel>
        )}
      </div>
    </section>
  )
}
