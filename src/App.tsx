import { useState } from 'react'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { CategoryList } from './components/CategoryList/CategoryList'
import { ProductShowcase } from './components/ProductShowcase/ProductShowcase'
import { PromoBanners } from './components/PromoBanners/PromoBanners'
import { BrandList } from './components/BrandList/BrandList'
import { Newsletter } from './components/Newsletter/Newsletter'
import { Footer } from './components/Footer/Footer'
import { ProductModal } from './components/ProductModal/ProductModal'
import { useProducts } from './hooks/useProducts'
import type { Product } from './types/product'

const SHOWCASE_TABS = ['Celular', 'Acessórios', 'Tablets', 'Notebooks', 'TVs', 'Ver todos']

function App() {
  const { products, loading, error } = useProducts()
  const [selected, setSelected] = useState<Product | null>(null)

  const showcaseProps = {
    products,
    loading,
    error,
    onSelectProduct: setSelected,
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <CategoryList />
        <ProductShowcase
          {...showcaseProps}
          id="vitrine-relacionados"
          title="Produtos relacionados"
          tabs={SHOWCASE_TABS}
        />
        <PromoBanners id="banners-parceiros-1" />
        <ProductShowcase
          {...showcaseProps}
          id="vitrine-destaques"
          title="Produtos relacionados"
          seeAllLink
        />
        <PromoBanners id="banners-parceiros-2" />
        <BrandList />
        <ProductShowcase
          {...showcaseProps}
          id="vitrine-ofertas"
          title="Produtos relacionados"
          seeAllLink
        />
        <Newsletter />
      </main>
      <Footer />
      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </>
  )
}

export default App
