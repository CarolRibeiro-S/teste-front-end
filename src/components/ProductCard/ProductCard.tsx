import type { Product } from '../../types/product'
import { formatPrice } from '../../utils/formatPrice'
import './ProductCard.scss'

interface ProductCardProps {
  product: Product
  onSelect: (product: Product) => void
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  const { descriptionShort, photo, price, productName } = product

  return (
    <article className="product-card">
      <button
        type="button"
        className="product-card__body"
        onClick={() => onSelect(product)}
        aria-label={`Ver detalhes de ${productName}`}
      >
        <img className="product-card__image" src={photo} alt={productName} loading="lazy" />
        <span className="product-card__description">{descriptionShort}</span>
        <span className="product-card__price">{formatPrice(price)}</span>
        <span className="product-card__installments">
          ou 2x de {formatPrice(price / 2)} sem juros
        </span>
        <span className="product-card__shipping">Frete grátis</span>
      </button>
      <button type="button" className="product-card__buy" onClick={() => onSelect(product)}>
        Comprar
      </button>
    </article>
  )
}
