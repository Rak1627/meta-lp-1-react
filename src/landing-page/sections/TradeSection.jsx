import { Image } from '../../components/Image'

export function TradeSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="tradeOuter">
          <div className="tradeInner">
            <div className="tradeCopy">
              <h2 className="tradeTitle">
                How Long Are You Going to Keep Trading Your Time for a Paycheck That Barely Covers
                the Bills?
              </h2>
              <p className="tradeSubtitle">Be honest with yourself for a second.</p>

              <ul className="tradeList">
                <li>
                  <strong className="tradeHl tradeHl--red">The alarm clock</strong> that goes off
                  before you&apos;re ready, every single day
                </li>
                <li>
                  <strong className="tradeHl tradeHl--red">The commute</strong> that eats 2 hours of
                  your life while you sit in traffic
                </li>
                <li>
                  <strong className="tradeHl tradeHl--red">The boss</strong> who doesn&apos;t respect
                  your time, your ideas, or your worth
                </li>
                <li>
                  <strong className="tradeHl tradeHl--yellow">The paycheck</strong> that&apos;s gone
                  before the month is over
                </li>
                <li>
                  <strong className="tradeHl tradeHl--yellow">The requests</strong> from people you
                  love that you can&apos;t afford to say yes to
                </li>
                <li>
                  <strong className="tradeHl tradeHl--yellow">The &quot;someday&quot;</strong>{' '}
                  that never comes&hellip; &quot;someday I&apos;ll travel, someday I&apos;ll buy that
                  car, someday I&apos;ll be free&quot;
                </li>
                <li>
                  <strong className="tradeHl tradeHl--yellow">The feeling</strong> that you&apos;re
                  capable of MORE but stuck in a system that wasn&apos;t designed for you to win
                </li>
              </ul>

              <p className="tradeBottom tradeBottom--strong">
                You&apos;re not crazy for wanting something different.
              </p>
              <p className="tradeBottom">You&apos;re just looking in the wrong places.</p>
            </div>

            <div className="tradeMedia" aria-hidden="true">
              <Image
                src="trade-phone"
                alt="Phone with trading app"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

