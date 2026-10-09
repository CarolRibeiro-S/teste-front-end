export type SocialNetwork = 'instagram' | 'facebook' | 'linkedin'

export interface SocialLink {
  network: SocialNetwork
  href: string
  ariaLabel: string
}

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    network: 'instagram',
    href: 'https://www.instagram.com/econverse.ag',
    ariaLabel: 'Instagram da Econverse',
  },
  {
    network: 'facebook',
    href: 'https://www.facebook.com/agenciaeconverse',
    ariaLabel: 'Facebook da Econverse',
  },
  {
    network: 'linkedin',
    href: 'https://www.linkedin.com/company/econverse/posts/',
    ariaLabel: 'LinkedIn da Econverse',
  },
]
