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
              <img
                src="https://framerusercontent.com/images/tvQN3TN3ABpBLKsf996xgkGR5NY.jpg?width=3840&height=2160"
                alt=""
                loading="lazy"
              />
            </div>
            <h3 className="giveawayCard__title">THREE BRAND NEW MACBOOKS</h3>
          </div>

          <div className="giveawayCard">
            <div className="giveawayCard__image">
              <img
                src="https://framerusercontent.com/images/mB62E1pQ72OwQYbTTDP2NdxPSyo.png?width=1000&height=1000"
                alt=""
                loading="lazy"
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
              <img
                src="https://framerusercontent.com/images/3kdF6DQdkscylWUeTePdybl4.webp?width=1537&height=2318"
                alt=""
                loading="lazy"
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

