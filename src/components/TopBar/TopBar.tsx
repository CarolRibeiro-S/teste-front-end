import { CreditCard, ShieldCheck, Truck } from 'lucide-react'
import './TopBar.scss'

export function TopBar() {
  return (
    <div className="top-bar">
      <ul className="top-bar__list">
        <li className="top-bar__item">
          <ShieldCheck size={18} aria-hidden="true" />
          <span>
            Compra <strong>100% segura</strong>
          </span>
        </li>
        <li className="top-bar__item">
          <Truck size={18} aria-hidden="true" />
          <span>
            <strong>Frete grátis</strong> acima de R$ 200
          </span>
        </li>
        <li className="top-bar__item">
          <CreditCard size={18} aria-hidden="true" />
          <span>
            <strong>Parcele</strong> suas compras
          </span>
        </li>
      </ul>
    </div>
  )
}
