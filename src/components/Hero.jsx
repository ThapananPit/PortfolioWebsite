import { personal } from '../data/portfolio'
import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Background grid lines */}
      <div className="hero__grid" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="hero__grid-line" />
        ))}
      </div>

      {/* Corner decorations */}
      <div className="hero__corner hero__corner--tl" aria-hidden="true" />
      <div className="hero__corner hero__corner--br" aria-hidden="true" />

      <div className="container hero__content">
        <p className="hero__eyebrow">
          <span className="hero__eyebrow-line" />
          Initializing Portfolio
        </p>

        <h1 className="hero__name">
          {personal.name || 'Your Name'}
        </h1>

        <div className="hero__title-row">
          <span className="hero__accent-bar" />
          <h2 className="hero__title">
            {personal.title || 'Your Title'}
          </h2>
        </div>

        <p className="hero__tagline">
          {personal.tagline || 'Your tagline goes here'}
        </p>

        <div className="hero__cta">
          <a href="#projects" className="hero__btn hero__btn--primary">
            View Projects
          </a>
          <a href="#contact" className="hero__btn hero__btn--ghost">
            Get In Touch
          </a>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="hero__bottom-line" aria-hidden="true">
        <span />
        <span />
      </div>
    </section>
  )
}
