import { IconCheck, IconCrown, IconX } from '../../components/Icons'

const ICON_BY_KIND = {
  included: IconCheck,
  excluded: IconX,
  vip: IconCrown,
}

export function PricingCard({ variant, price, name, meta, items, buttonText, onClick }) {
  return (
    <div className={`pricingCard pricingCard--${variant}`}>
      <div className={`pricingCard__inner pricing-card-${variant}`}>
        <div className="pricingTop">
          <div className="pricingPrice">{price}</div>
          <div className={`pricingName pricingName--${variant}`}>
            <em>{name}</em>
          </div>
          <div className={`pricingMeta pricingMeta--${variant}`}>{meta}</div>
        </div>

        <ul className="pricingList">
          {items.map(({ text, kind }) => {
            const Icon = ICON_BY_KIND[kind] ?? IconCheck
            return (
              <li key={`${kind}-${text}`} className={`pricingItem pricingItem--${kind}`}>
                <Icon className="pricingIcon" />
                <span>{text}</span>
              </li>
            )
          })}
        </ul>

        <button
          type="button"
          className={`pricingBtn pricingBtn--${variant}`}
          onClick={onClick}
        >
          <span>{buttonText}</span>
        </button>
      </div>
    </div>
  )
}
