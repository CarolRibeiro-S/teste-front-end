import type { Product, ProductsResponse } from '../types/product'

const OFFICIAL_URL =
  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'

// Em dev usa o proxy do Vite (a API oficial não envia headers CORS).
const PRIMARY_URL = import.meta.env.DEV ? '/api/produtos' : OFFICIAL_URL
const FALLBACK_URL = '/produtos.json'

async function request(url: string, signal?: AbortSignal): Promise<Product[]> {
  const response = await fetch(url, { signal })

  if (!response.ok) {
    throw new Error(`Falha ao buscar produtos (HTTP ${response.status})`)
  }

  const data: ProductsResponse = await response.json()

  if (!data.success) {
    throw new Error('A API retornou uma resposta sem sucesso.')
  }

  return data.products
}

export async function fetchProducts(signal?: AbortSignal): Promise<Product[]> {
  try {
    return await request(PRIMARY_URL, signal)
  } catch (error) {
    if (signal?.aborted) throw error
    return request(FALLBACK_URL, signal)
  }
}
