import PropTypes from 'prop-types'
import { ConverteAiV4Player } from '../../components/ConverteAiPlayers'
import { GetTicketButton } from '../components/GetTicketButton'

export function HeroSection({ heroPlayerId }) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="pill pill--gradient">Stop Wasting Money on Agencies</div>
          <h1 className="hero__title">
            Turn Meta Ads/Marketing Into a Simple System That Brings You Buyers Every Day
          </h1>
          <p className="hero__subtitle">
            Get the free Meta Ads Cheat Sheet and short video that
            show you how to plug your ads into GHL so you book more calls and make more sales without hiring anyone.
          </p>

          <div className="videoShell">
            <div className="videoShell__inner">
              <ConverteAiV4Player playerId={heroPlayerId} />
            </div>
          </div>

          <div className="heroBelowVideo">
            <p className="heroBelowVideo__brand">The Brand Scaling Bootcamp</p>
            <p className="heroBelowVideo__join">
              Join the <span className="red">LIVE 5-Day</span> Virtual Event
            </p>
            <GetTicketButton />
          </div>
        </div>
      </div>
    </section>
  )
}

HeroSection.propTypes = {
  heroPlayerId: PropTypes.string.isRequired,
}
