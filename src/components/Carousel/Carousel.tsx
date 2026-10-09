import { useState, type ReactNode } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useVisibleCount } from '../../hooks/useVisibleCount'
import './Carousel.scss'

interface CarouselProps {
  label: string
  children: ReactNode[]
}

export function Carousel({ label, children }: CarouselProps) {
  const visible = useVisibleCount()
  const [requestedIndex, setRequestedIndex] = useState(0)

  const maxIndex = Math.max(children.length - visible, 0)
  const index = Math.min(requestedIndex, maxIndex)

  const goPrev = () => setRequestedIndex(Math.max(index - 1, 0))
  const goNext = () => setRequestedIndex(Math.min(index + 1, maxIndex))

  return (
    <div className="carousel" role="region" aria-roledescription="carrossel" aria-label={label}>
      <button
        type="button"
        className="carousel__arrow carousel__arrow--prev"
        onClick={goPrev}
        disabled={index === 0}
        aria-label="Produtos anteriores"
      >
        <ChevronLeft size={22} aria-hidden="true" />
      </button>

      <div className="carousel__viewport">
        <ul
          className="carousel__track"
          style={{ transform: `translateX(-${(index * 100) / visible}%)` }}
        >
          {children.map((child, i) => (
            <li
              key={i}
              className="carousel__slide"
              style={{ flexBasis: `${100 / visible}%` }}
              aria-hidden={i < index || i >= index + visible}
            >
              {child}
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        className="carousel__arrow carousel__arrow--next"
        onClick={goNext}
        disabled={index === maxIndex}
        aria-label="Próximos produtos"
      >
        <ChevronRight size={22} aria-hidden="true" />
      </button>
    </div>
  )
}
