import {
  IconChat,
  IconGlobe,
  IconHandshake,
  IconSliders,
  IconTarget,
  IconX,
} from '../../components/Icons'
import { GetTicketButton } from '../components/GetTicketButton'

export function RockSection() {
  return (
    <section className="section section--tight rockSection">
      <div className="container">
        <div className="rockOuter">
          <div className="rockInner">
            <div className="rockGrid">
              <div className="rockMedia" aria-hidden="true">
                <img
                  src="https://framerusercontent.com/images/aABHUG2bZoOMET3niXkrwf22Tig.webp?width=1537&height=2318"
                  alt=""
                  loading="lazy"
                />
              </div>

              <div className="rockCopy">
                <h2 className="rockTitle">
                  Follow Along As I Start
                  <br />
                  Over <span className="rockTitle__yellow">From Rock Bottom</span>
                </h2>

                <p className="rockKicker">I&apos;m starting from ZERO:</p>
                <ul className="rockZeroList">
                  {[
                    'No existing clients or connections',
                    'No results to lean on',
                    'No unfair advantages',
                  ].map((text) => (
                    <li key={text}>
                      <IconX className="rockZeroIcon" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>

                <p className="rockText">
                  And I&apos;m documenting EVERYTHING as I land my first paying client.
                </p>
                <p className="rockText">You&apos;ll see it ALL premiere during this bootcamp.</p>
                <p className="rockPlus">Plus, I&apos;m going LIVE to walk you through:</p>
                <ul className="rockIconList rockIconList--right">
                  <li>
                    <IconChat className="rockIcon" />
                    <span>The exact outreach scripts that get responses</span>
                  </li>
                  <li>
                    <IconSliders className="rockIcon" />
                    <span>Setting up the actual ad campaigns for the client</span>
                  </li>
                </ul>
                <ul className="rockIconList">
                  <li>
                    <IconTarget className="rockIcon" />
                    <span>How I find and contact high-value client</span>
                  </li>
                  <li>
                    <IconHandshake className="rockIcon" />
                    <span>Real sales conversations where I pitch and closed deals</span>
                  </li>
                  <li>
                    <IconGlobe className="rockIcon" />
                    <span>Delivering results using simple online tools</span>
                  </li>
                </ul>

                <GetTicketButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
