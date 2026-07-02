import { personal } from '../data/portfolio'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__line" aria-hidden="true">
        <span /><span />
      </div>
      <div className="container footer__inner">
        <p className="footer__name">
          {personal.name || 'Portfolio'}
        </p>
        <p className="footer__copy">
          Designed & Built by {personal.name || 'You'} · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
