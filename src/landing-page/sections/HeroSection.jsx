import { ConverteAiV4Player } from '../../components/ConverteAiPlayers'
import { Button } from '../components/Button'

export function HeroSection({ heroPlayerId }) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="pill pill--date">7 PM EST @ FEB 2 ND - FEB 6TH</div>
          <h1 className="hero__title">
            This <span className="red">5 Day Bootcamp</span> Teaches You The{' '}
            <span className="yellow">Beginner-Friendly Skill</span>
            <br />
            That Normal People Are Using To
            <br />
            <span className="yellow">Escape The Traditional Career Path</span>
          </h1>
          <p className="hero__subtitle">
            Follow Along LIVE ON ZOOM. Without showing your face online, gambling in the stock
            market, or spending thousands on inventory
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
            <Button href="#pricing">
              GET YOUR TICKET
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
