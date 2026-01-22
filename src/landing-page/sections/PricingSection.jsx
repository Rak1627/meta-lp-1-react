import PropTypes from 'prop-types'
import { PricingCard } from '../components/PricingCard'

export function PricingSection({ coreItems, vipItems, onOpenTypeform }) {
  const generalItems = [
    ...coreItems.map((text) => ({ text, kind: 'included' })),
    ...vipItems.map((text) => ({ text, kind: 'excluded' })),
  ]

  const vipCardItems = [
    ...coreItems.map((text) => ({ text, kind: 'included' })),
    ...vipItems.map((text) => ({ text, kind: 'vip' })),
  ]

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
          <PricingCard
            variant="general"
            price="$47"
            name="General Ticket"
            meta="Increases to $67 soon"
            items={generalItems}
            buttonText="GET GENERAL TICKET"
            onClick={() => onOpenTypeform('general')}
          />

          <PricingCard
            variant="vip"
            price="$97"
            name="VIP Ticket"
            meta="Increases to $127 soon"
            items={vipCardItems}
            buttonText="GET VIP TICKET"
            onClick={() => onOpenTypeform('vip')}
          />
        </div>
      </div>
    </section>
  )
}

PricingSection.propTypes = {
  coreItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  vipItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  onOpenTypeform: PropTypes.func.isRequired,
}
