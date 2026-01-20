import { IconCalendar, IconPin, IconQuestionCircle } from '../../components/Icons'

export function AboutSection() {
  return (
    <section className="section aboutSection">
      <div className="container">
        <h2 className="aboutHeading">About The Bootcamp</h2>

        <div className="aboutGrid">
          <div className="aboutCard">
            <div className="aboutCard__head">
              <IconQuestionCircle className="aboutCard__icon" />
              <div className="aboutCard__label">WHAT</div>
            </div>
            <p className="aboutCard__text">
              A live 5-Day Brand Scaling Bootcamp where you&apos;ll follow along with me going from
              zero &rarr; first client payment in real time... and copy the exact system step-by-step.
            </p>
          </div>

          <div className="aboutCard">
            <div className="aboutCard__head">
              <IconPin className="aboutCard__icon" />
              <div className="aboutCard__label">WHERE</div>
            </div>
            <p className="aboutCard__text">
              100% online. You&apos;ll get instant access to the private event hub + live room links
              + community after you grab your ticket.
            </p>
          </div>

          <div className="aboutCard">
            <div className="aboutCard__head">
              <IconCalendar className="aboutCard__icon" />
              <div className="aboutCard__label">WHEN</div>
            </div>
            <p className="aboutCard__text">
              Runs for 5 days in a row. Each session is 60&ndash;90 minutes (plus optional Q&amp;A /
              VIP breakouts).
            </p>
            <p className="aboutCard__meta">
              <strong>Dates:</strong> February 2nd - 6th
            </p>
            <p className="aboutCard__meta">
              <strong>Time:</strong> Everyday Starting @7PM EST
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

