const limitedCards = [
  {
    icon: '⚠️',
    text: 'Enrollment closes February 1st at midnight (or when we hit the maximum amount of participants — whichever comes first)',
  },
  {
    icon: '💰',
    text: 'Price increases to $67 in the next days (VIP goes to $127)',
  },
  {
    icon: '🎁',
    text: 'Giveaway entries only valid for people who register before January 31st',
  },
]

export function LimitedSection() {
  return (
    <section className="section section--tight limitedSection">
      <div className="container">
        <div className="limitedHeading">
          <h2 className="limitedTitle">This Won&apos;t Be Available For Long</h2>
          <div className="limitedLead">
            <p className="limitedLeadMuted">Here&apos;s what&apos;s happening:</p>
            <p className="limitedLeadHighlight">
              <strong>📅 Bootcamp runs February 2-6, 2025</strong>
            </p>
            <p className="limitedLeadHighlight">
              <strong>7PM EST daily | 60-90 minutes per session</strong>
            </p>
          </div>
        </div>

        <div className="limitedGrid">
          {limitedCards.map((item) => (
            <div key={item.icon} className="limitedCard">
              <div className="limitedCardIcon" aria-hidden="true">
                {item.icon}
              </div>
              <p className="limitedCardText">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="limitedFooter">
          <p>
            I cap enrollment because this is a LIVE event. If there are 10,000 people in the chat,
            I can&apos;t answer questions. I can&apos;t give personal feedback. It becomes a lecture
            instead of a bootcamp.
          </p>
          <p>Right now, there are only a couple hundred spots remaining.</p>
          <p>
            When they&apos;re gone, they&apos;re gone. You&apos;re either in or you&apos;re watching from the
            sidelines while others build their online businesses..
          </p>
        </div>
      </div>
    </section>
  )
}

