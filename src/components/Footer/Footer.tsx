import type { ReactElement } from 'react'
import { SOCIAL_LINKS, type SocialNetwork } from '../../constants/socialLinks'
import logo from '../../assets/images/logo-econverse.jpg'
import { FacebookIcon, InstagramIcon, LinkedinIcon } from './SocialIcons'
import './Footer.scss'

const LINK_COLUMNS = [
  { title: 'Institucional', links: ['Sobre Nós', 'Movimento', 'Trabalhe conosco'] },
  { title: 'Ajuda', links: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'] },
  { title: 'Termos', links: ['Termos e Condições', 'Política de Privacidade', 'Troca e Devolução'] },
]

const SOCIAL_ICONS: Record<SocialNetwork, () => ReactElement> = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  linkedin: LinkedinIcon,
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__brand">
          <img src={logo} alt="Econverse" className="footer__logo" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <ul className="footer__social">
            {SOCIAL_LINKS.map(({ network, href, ariaLabel }) => {
              const Icon = SOCIAL_ICONS[network]
              return (
                <li key={network}>
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
                    <Icon />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="footer__columns">
          {LINK_COLUMNS.map(({ title, links }) => (
            <nav key={title} className="footer__column" aria-label={title}>
              <h2 className="footer__column-title">{title}</h2>
              <ul>
                {links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <p className="footer__copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </footer>
  )
}
