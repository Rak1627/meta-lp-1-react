import { IconCheck, IconCrown, IconX } from '../../components/Icons'

export function PricingSection({ coreItems, vipItems, onOpenTypeform }) {
  return (
    <section className="section pricingSection" id="pricing">
      <div className="container">
        <div className="pricingHeader">
          <h2 className="pricingHeading">Here&rsquo;s What You Get When You Join:</h2>
          <p className="pricingSub">
            <em>Choose Your Bootcamp Ticket Before Price Increases!</em>
          </p>
        </div>

        <div className="pricingGrid">
          <div className="pricingCard pricingCard--general">
            <div className="pricingCard__inner pricing-card-general">
              <div className="pricingTop">
                <div className="pricingPrice">$47</div>
                <div className="pricingName pricingName--general">
                  <em>General Ticket</em>
                </div>
                <div className="pricingMeta pricingMeta--general">Increases to $67 soon</div>
              </div>

              <ul className="pricingList">
                {coreItems.map((text) => (
                  <li key={text} className="pricingItem pricingItem--included">
                    <IconCheck className="pricingIcon" />
                    <span>{text}</span>
                  </li>
                ))}
                {vipItems.map((text) => (
                  <li key={text} className="pricingItem pricingItem--excluded">
                    <IconX className="pricingIcon" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="pricingBtn pricingBtn--general"
                onClick={() => onOpenTypeform('general')}
              >
                <span>GET GENERAL TICKET</span>
              </button>
            </div>
          </div>

          <div className="pricingCard pricingCard--vip">
            <div className="pricingCard__inner pricing-card-vip">
              <div className="pricingTop">
                <div className="pricingPrice">$97</div>
                <div className="pricingName pricingName--vip">
                  <em>VIP Ticket</em>
                </div>
                <div className="pricingMeta pricingMeta--vip">Increases to $127 soon</div>
              </div>

              <ul className="pricingList">
                {coreItems.map((text) => (
                  <li key={text} className="pricingItem pricingItem--included">
                    <IconCheck className="pricingIcon" />
                    <span>{text}</span>
                  </li>
                ))}
                {vipItems.map((text) => (
                  <li key={text} className="pricingItem pricingItem--vip">
                    <IconCrown className="pricingIcon" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="pricingBtn pricingBtn--vip"
                onClick={() => onOpenTypeform('vip')}
              >
                <span>GET VIP TICKET</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

