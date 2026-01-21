import { Countdown } from '../../components/Countdown'

export function Topbar({ logoUrl, earlybirdTargetIso }) {
  return (
    <header className="lp__topbar">
      <div className="container topbarInner">
        <img className="lp__logo" src={logoUrl} alt="The Brand Scaling Bootcamp" />
        <div className="topbarCountdown" aria-label="Earlybird countdown">
          <div className="topbarCountdown__label">EARLYBIRD ACCESS:</div>
          <Countdown targetIso={earlybirdTargetIso} />
        </div>
      </div>
    </header>
  )
}

