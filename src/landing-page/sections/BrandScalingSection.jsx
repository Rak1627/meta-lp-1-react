import { GetTicketButton } from '../components/GetTicketButton'

export function BrandScalingSection() {
  return (
    <section className="brandScalingBg">
      <div className="container brandScalingWrap">
        <div className="brandScalingOuter">
          <div className="brandScalingInner">
            <div className="brandScalingQuote" aria-hidden="true">
              &ldquo;
            </div>

            <h2 className="brandScalingTitle">
             <span className="brandScalingTitle__yellow"> Only 3%</span> of your market wakes up ready to buy
            </h2>
             

            <p className="brandScalingText">
              Only 3% of your market wakes up ready to buy

if you don’t have a system for the other 97%, you’re lighting
your advertising budget on fire


            </p>
            <p className="brandScalingText">
              Because here’s what actually happens:
            </p>
            <p className="brandScalingText">
              • The 3% who are ready to buy now will click, compare you
to 3 other tabs, and choose whoever feels the most
dialed‑in.
            </p>
            <p className="brandScalingText">
              • The next 40% are interested but distracted—they need
follow‑up, reminders, and proof before they move.


            </p>
            <p className="brandScalingText"> • The remaining 57% don’t even know they have a problem
yet—until your content and ads make it painfully obvious.</p>
            <p className="brandScalingHighlight">
              Your Meta ads shouldn’t just “get traffic.”
            </p>
            <p className="brandScalingText">They should push all three groups into one simple GHL
system that captures them, follows up with them, and turns
them into booked calls while you work—or sleep.</p>

            <GetTicketButton />
          </div>
        </div>
      </div>
    </section>
  )
}
