# Teste Econverse: Desenvolvedor Front-End

Página Home de e-commerce desenvolvida a partir do layout do Figma do teste técnico da Econverse, com vitrines de produtos (carrossel feito à mão) e modal de detalhes do produto.

## Tecnologias

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) (modo estrito, sem `any`)
- [Vite](https://vite.dev/)
- [Sass](https://sass-lang.com/) (SCSS), sem bibliotecas de UI (Bootstrap, MUI, Tailwind etc.)
- [lucide-react](https://lucide.dev/) para ícones pequenos
- ESLint (typescript-eslint + react-hooks)
- Fontes Poppins e Outfit (Google Fonts)

## Como instalar, rodar e compilar

Pré-requisito: Node.js 20.19+ (ou 22.13+ se usar a linha 22) e npm.

```bash
npm install       # instala as dependências
npm run dev       # servidor de desenvolvimento (http://localhost:5173)
npm run build     # checagem de tipos + build de produção em dist/
npm run preview   # serve o build de produção localmente
npm run lint      # análise estática com ESLint
```

> O projeto não possui testes automatizados; a validação é feita por `npm run build` (TypeScript) e `npm run lint`.

## Estrutura de pastas

```
src/
├── assets/        imagens e ícones de categoria
├── components/
│   ├── Header/ TopBar/ Hero/ CategoryList/
│   ├── ProductShowcase/ ProductCard/ Carousel/
│   ├── PromoBanners/ BrandList/ Newsletter/ Footer/
│   └── ProductModal/
├── hooks/         useProducts (fetch + loading/error), useVisibleCount (cards por breakpoint)
├── services/      productService (acesso ao JSON de produtos)
├── styles/        _variables, _mixins, _reset, global
├── types/         product.ts
└── utils/         formatPrice.ts
```

Cada componente tem seu `.tsx` e seu `.scss` na mesma pasta.

## Decisões técnicas

- **Preço antigo omitido:** o layout exibe um preço antigo riscado, mas o JSON da API não fornece esse dado (`Product` tem apenas `productName`, `descriptionShort`, `photo` e `price`). Para não inventar valores, ele foi omitido.
- **Parcelamento:** "ou 2x de R$ X sem juros" é calculado como `price / 2` e formatado em BRL com `Intl.NumberFormat('pt-BR')`. "Frete grátis" é um texto fixo.
- **CORS, proxy e fallback:** a API oficial responde sem o header `Access-Control-Allow-Origin`, então o navegador bloqueia a requisição feita a partir de `localhost` (`Failed to fetch`). Em desenvolvimento, o `vite.config.ts` define um proxy (`/api/produtos` → JSON oficial) e o `productService` usa essa rota (`import.meta.env.DEV`); em produção usa a URL oficial. Se a requisição principal falhar, o service tenta `/produtos.json` (cópia local em `public/produtos.json`) antes de exibir o erro. Os estados de loading e erro continuam funcionando.
- **Dados compartilhados:** os 10 produtos são buscados uma única vez (`useProducts`) e alimentam as 3 vitrines.
- **Carrossel sem biblioteca:** `Carousel` move uma faixa com `transform: translateX`, exibindo 4 cards (desktop), 2 (tablet, ≤1024px) e 1 (mobile, ≤640px).
- **Design tokens:** todas as cores, fontes, espaçamentos, raios e sombras ficam em `styles/_variables.scss`; breakpoints e helpers em `_mixins.scss`.
- **Ícones de categoria:** os arquivos têm fundo branco, então a imagem usa `mix-blend-mode: multiply` sobre a caixa cinza.
- **Ícones de redes sociais:** a versão instalada do `lucide-react` não inclui ícones de marcas, então Instagram, Facebook e LinkedIn são SVGs locais (`Footer/SocialIcons.tsx`).
- **Modal acessível:** `role="dialog"`, `aria-modal`, `aria-labelledby`; fecha com X, clique no overlay e Esc; o foco vai para o modal ao abrir (com retenção de foco por Tab) e volta ao elemento de origem ao fechar; o scroll do body é bloqueado enquanto aberto.
- **Newsletter:** formulário com `label`s e validação simples no envio (nome, e-mail válido e aceite dos termos), sem backend.
- **SEO e semântica:** `lang="pt-BR"`, `title`, `meta description`, Open Graph, `alt` nas imagens, um único `h1`, e uso de `header`, `nav`, `main`, `section`, `article`, `footer`.
- **Responsividade:** o desktop (1440px) é a referência; tablet e mobile têm adaptações (carrossel com menos cards, navegação com rolagem horizontal, banners e rodapé empilhados).

## Autora

Desenvolvido por Carol Ribeiro. Portfólio: https://carolribeiros.com.br | GitHub: https://github.com/CarolRibeiro-S
