import { Image } from '../../components/Image'

export function TradeSection() {
  return (
    <section className="section tradeSection">
      <div className="container">
        <div className="tradeOuter">
          <div className="tradeInner">
            <div className="tradeCopy">
              <h2 className="tradeTitle">
                How Long Are You Going to Let Broken Marketing Decide Your Income?
              </h2>
              <p className="tradeSubtitle">Be honest with yourself for a second.</p>

              <ul className="tradeList">
                <li>
                  <strong className="tradeHl tradeHl--red">The “lucky”</strong> month where your ads somehow work…
                   followed by two months of crickets.
                </li>
                
                <li>
                  <strong className="tradeHl tradeHl--red">The agency</strong> that sends screenshots and buzzwords but
                    not buyers in your Stripe.
                   
                </li>
                <li>
                  <strong className="tradeHl tradeHl--red">The campaigns</strong> that get clicks, likes, and comments—but
                    almost no booked calls.
                </li>
                
                <li>
                  <strong className="tradeHl tradeHl--yellow">The feeling</strong> that you’re smart enough to fix this, but you
                    don’t know what to change.  
                </li>
                <li>
                  <strong className="tradeHl tradeHl--yellow">The quiet</strong> panic every time you check Ads Manager and
see money going out, not coming back.

                   
                </li>
              </ul>

              <p className="tradeBottom tradeBottom--strong">
                You’re not crazy for wanting predictable clients and cashflow.
              </p>
              <p className="tradeBottom">You’ve just never been shown a simple system that makes
Meta ads work for you, not against you.</p>
            </div>

            <div className="tradeMedia" aria-hidden="true">
              <Image
                src="image-562"
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

