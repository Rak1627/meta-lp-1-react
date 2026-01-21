import { GetTicketButton } from '../components/GetTicketButton'

export function LearnSection({ rows }) {
  return (
    <section className="section learnSection">
      <div className="container">
        <h2 className="learnHeading">What You&apos;ll Learn in 5 Days</h2>

        <div className="learnDays">
          {rows.map((day) => (
            <div key={day.number} className={`learnDay${day.reverse ? ' learnDay--reverse' : ''}`}>
              <div className="learnNumber" aria-hidden="true">
                {day.number}
              </div>

              <div className="learnInner">
                <div className="learnCopy">
                  <h3 className="learnTitle">
                    {day.titleLines.map((line) => (
                      <span className="learnTitle__line" key={line}>
                        {line}
                      </span>
                    ))}
                  </h3>

                  <p className="learnDesc">{day.card.desc}</p>

                  <ul className="learnBullets">
                    {day.card.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>

                <div className="learnMedia">
                  <img src={day.image} alt="" loading="lazy" />
                </div>

                {day.cta ? (
                  <div className="learnCtaRow">
                    <GetTicketButton />
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
