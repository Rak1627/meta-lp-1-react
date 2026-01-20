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
              What <span className="brandScalingTitle__yellow">Freelance Brand Scaling</span>
              <br />
              Really Is:
            </h2>

            <p className="brandScalingText">
              Instead of trying to start a whole complicated business...
            </p>
            <p className="brandScalingText">
              You just need to learn a high-value, scalable skill that businesses are desperate to
              pay for.
            </p>
            <p className="brandScalingText">
              And right now in 2026, businesses want{' '}
              <span className="brandScalingText__red">ONE</span> thing more than anything else:
            </p>
            <p className="brandScalingHighlight">
              <em>Online advertising</em>
            </p>
            <p className="brandScalingText">Every business will ALWAYS need more customers.</p>
            <p className="brandScalingText">
              If you can get them more customers by running ads for them...
            </p>
            <p className="brandScalingText">Then you have a skillset that:</p>

            <ul className="brandScalingList">
              {[
                'Is ALWAYS in demand',
                'Has VERY high profit margins',
                'Is NOT tied to how many hours you work',
                'Allows you to work from ANYWHERE in the world',
                'Becomes MORE valuable as AI gets better',
              ].map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>

            <a className="btn brandScalingCta" href="#pricing">
              GET YOUR TICKET
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

