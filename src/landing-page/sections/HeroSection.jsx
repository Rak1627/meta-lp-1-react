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
            Turn <span className="text-gradient">Meta Ads/Marketing</span> Into a{' '}
            <span className="text-gradient">Simple System</span> That Brings You{' '}
            <span className="text-gradient">Buyers Every Day</span>
          </h1>
          <p className="hero__subtitle">
            Get the <span className="text-gradient">free</span> Meta Ads{' '}
            <span className="text-gradient">Cheat Sheet</span> and{' '}
            <span className="text-gradient">short video</span> that show you how to plug{' '}
            <span className="text-gradient">your ads</span> <span className="text-gradient">into GHL</span> so you{' '}
            <span className="text-gradient">book</span> more{' '}
            <span className="text-gradient">calls</span> and make{' '}
            <span className="text-gradient">more sales</span> without{' '}
            <span className="text-gradient">hiring anyone</span>.
          </p>

          <div className="videoShell">
            <div className="videoShell__inner">
              <ConverteAiV4Player playerId={heroPlayerId} />
            </div>
          </div>

          <div className="heroBelowVideo">
            
            <p className="heroBelowVideo__join">
              For <span className="gradientText"> Operators</span> or <span className="gradientText">Founders</span> who are tired of
              feast‑or‑famine <span className="gradientText">clients.</span>
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
