import PropTypes from 'prop-types'
import { ConverteAiV4Player } from '../../components/ConverteAiPlayers'

export function ProofSection({ videos }) {
  return (
    <section className="section proofSection">
      <div className="container">
        <div className="proofOuter">
          <div className="proofInner">
            <div className="proofHeader">
              <h2 className="proofTitle">
                Grab Your Ticket To Follow Along
                <br />
                And See EXACTLY How It&apos;s Done
              </h2>
              <p className="proofKicker">
                <em>
                  <strong>And if you need extra proof...</strong>
                </em>
              </p>
              <p className="proofDesc">
                I&rsquo;ll be sharing wins, screenshots, and real student results throughout the 5
                days so you can see what&rsquo;s possible when you follow the system.
              </p>
            </div>

            <div className="proofGrid">
              {videos.map((video) => (
                <div className="proofCard" key={video.playerId}>
                  <div className="proofMedia">
                    <div className="videoShell__inner">
                      <ConverteAiV4Player playerId={video.playerId} />
                    </div>
                  </div>
                  <p className="proofCaption">{video.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ProofSection.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      playerId: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
    })
  ).isRequired,
}

