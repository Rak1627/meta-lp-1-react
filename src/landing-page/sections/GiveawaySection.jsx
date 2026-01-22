import { Image } from '../../components/Image'

export function GiveawaySection() {
  return (
    <section className="section section--tight giveawaySection">
      <div className="container">
        <h2 className="giveawayHeading">
          EVERY BOOTCAMP ATTENDEE WILL BE{' '}
          <span className="giveawayHeading__red">
            <em>AUTOMATICALLY</em>
          </span>{' '}
          ENTERED INTO A{' '}
          <span className="giveawayHeading__yellow">
            <em>GIVEAWAY</em>
          </span>{' '}
          FOR THE FOLLOWING
        </h2>

        <div className="giveawayGrid">
          <div className="giveawayCard">
            <div className="giveawayCard__image">
              <Image
                src="giveaway-miami"
                alt="Three brand new MacBooks"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <h3 className="giveawayCard__title">THREE BRAND NEW MACBOOKS</h3>
          </div>

          <div className="giveawayCard">
            <div className="giveawayCard__image">
              <Image
                src="giveaway-setup"
                alt="Brand new Rolex"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <h3 className="giveawayCard__title">
              BRAND NEW
              <br />
              ROLEX
            </h3>
          </div>

          <div className="giveawayCard">
            <div className="giveawayCard__image">
              <Image
                src="giveaway-person"
                alt="Private dinner with Brez in Miami"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="giveawayCard__foot">
              <h3 className="giveawayCard__title">PRIVATE DINNER WITH BREZ IN MIAMI FOR 5 MEMBERS</h3>
              <div className="giveawayCard__vip">(VIP ONLY)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

