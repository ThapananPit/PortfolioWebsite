import { personal, skills } from '../data/portfolio'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-label">
          <h2><span>01.</span>About Me</h2>
        </div>

        <div className="about__layout">
          <div className="about__text">
            <p className="about__bio">
              {personal.about || 'Your bio goes here. Edit src/data/portfolio.js to update this.'}
            </p>

            {skills.length > 0 && (
              <div className="about__skills">
                <p className="about__skills-label">Technologies</p>
                <ul className="about__skills-list">
                  {skills.map(skill => (
                    <li key={skill} className="about__skill-tag">
                      <span className="about__skill-bullet" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {personal.avatarUrl ? (
            <div className="about__avatar-wrap">
              <img
                src={personal.avatarUrl}
                alt={personal.name}
                className="about__avatar"
              />
            </div>
          ) : (
            <div className="about__avatar-placeholder">
              <div className="about__avatar-inner">
                <span>
                  {personal.name
                    ? personal.name.split(' ').map(w => w[0]).join('').toUpperCase()
                    : '?'}
                </span>
                <p>Add avatarUrl in<br />portfolio.js</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
