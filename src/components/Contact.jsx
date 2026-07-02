import { contact, personal } from '../data/portfolio'
import './Contact.css'

const socialLinks = [
  { key: 'github',   label: 'GitHub',   icon: 'GH' },
  { key: 'linkedin', label: 'LinkedIn', icon: 'LI' },
  { key: 'twitter',  label: 'Twitter',  icon: 'TW' },
  { key: 'discord',  label: 'Discord',  icon: 'DC' },
]

export default function Contact() {
  const activeSocials = socialLinks.filter(s => contact[s.key])

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-label">
          <h2><span>03.</span>Contact</h2>
        </div>

        <div className="contact__layout">
          <div className="contact__copy">
            <h3 className="contact__heading">Let's Work Together</h3>
            <p className="contact__body">
              Whether you have a project in mind, want to collaborate, or just want
              to say hi — my inbox is always open.
            </p>

            {contact.email && (
              <a href={`mailto:${contact.email}`} className="contact__email-btn">
                <span className="contact__email-icon">@</span>
                {contact.email}
              </a>
            )}

            {activeSocials.length > 0 && (
              <div className="contact__socials">
                {activeSocials.map(({ key, label, icon }) => (
                  <a
                    key={key}
                    href={contact[key]}
                    target="_blank"
                    rel="noreferrer"
                    className="contact__social-btn"
                    title={label}
                  >
                    <span className="contact__social-icon">{icon}</span>
                    {label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Decorative side panel */}
          <div className="contact__panel" aria-hidden="true">
            <div className="contact__panel-inner">
              <span className="contact__panel-label">STATUS</span>
              <span className="contact__panel-status">
                <span className="contact__status-dot" />
                Available for work
              </span>
              <div className="contact__panel-lines">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="contact__panel-line" style={{ opacity: 1 - i * 0.1 }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
