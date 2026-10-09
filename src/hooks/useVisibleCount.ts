import { useEffect, useState } from 'react'

const TABLET_QUERY = '(max-width: 1024px)'
const MOBILE_QUERY = '(max-width: 640px)'

function getCount(): number {
  if (window.matchMedia(MOBILE_QUERY).matches) return 1
  if (window.matchMedia(TABLET_QUERY).matches) return 2
  return 4
}

/** Quantidade de cards visíveis no carrossel: 4 (desktop), 2 (tablet) e 1 (mobile). */
export function useVisibleCount(): number {
  const [count, setCount] = useState(getCount)

  useEffect(() => {
    const update = () => setCount(getCount())
    const queries = [TABLET_QUERY, MOBILE_QUERY].map((q) => window.matchMedia(q))
    queries.forEach((q) => q.addEventListener('change', update))
    return () => queries.forEach((q) => q.removeEventListener('change', update))
  }, [])

  return count
}
