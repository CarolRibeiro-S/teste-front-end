import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { createPortal } from 'react-dom'
import { Minus, Plus, X } from 'lucide-react'
import type { Product } from '../../types/product'
import { formatPrice } from '../../utils/formatPrice'
import './ProductModal.scss'

interface ProductModalProps {
  product: Product
  onClose: () => void
}

const FOCUSABLE = 'button:not([disabled]), a[href], input, [tabindex]:not([tabindex="-1"])'

export function ProductModal({ product, onClose }: ProductModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null
    document.body.classList.add('no-scroll')
    dialogRef.current?.focus()

    return () => {
      document.body.classList.remove('no-scroll')
      previouslyFocused?.focus()
    }
  }, [])

  useEffect(() => {
    const handleEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Tab' || !dialogRef.current) return

    const items = dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
    const first = items[0]
    const last = items[items.length - 1]

    if (event.shiftKey && document.activeElement === dialogRef.current) {
      event.preventDefault()
      last.focus()
    } else if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  return createPortal(
    <div className="modal-overlay" onClick={onClose} onKeyDown={handleKeyDown}>
      <div
        ref={dialogRef}
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-titulo"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="modal__close" onClick={onClose} aria-label="Fechar">
          <X size={20} aria-hidden="true" />
        </button>

        <div className="modal__image-wrapper">
          <img className="modal__image" src={product.photo} alt={product.productName} />
        </div>

        <div className="modal__info">
          <h2 id="modal-titulo" className="modal__title">
            {product.productName}
          </h2>
          <p className="modal__price">{formatPrice(product.price)}</p>
          <p className="modal__description">{product.descriptionShort}</p>
          <a href="#" className="modal__details">
            Veja mais detalhes do produto &gt;
          </a>

          <div className="modal__actions">
            <div className="modal__quantity" role="group" aria-label="Quantidade">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                disabled={quantity === 1}
                aria-label="Diminuir quantidade"
              >
                <Minus size={14} aria-hidden="true" />
              </button>
              <output aria-live="polite">{String(quantity).padStart(2, '0')}</output>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Aumentar quantidade"
              >
                <Plus size={14} aria-hidden="true" />
              </button>
            </div>
            <button type="button" className="modal__buy">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
