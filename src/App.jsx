import { useState } from 'react'
import { ConverteAiV4Player } from './components/ConverteAiPlayers'
import { Countdown } from './components/Countdown'
import {
  IconCalendar,
  IconChat,
  IconCheck,
  IconChevron,
  IconCrown,
  IconGlobe,
  IconHandshake,
  IconPin,
  IconQuestionCircle,
  IconSliders,
  IconTarget,
  IconX,
} from './components/Icons'
import { TypeformModal } from './components/TypeformModal'
import './App.css'

const TYPEFORM_GENERAL_ID = 'AaEbBnU4'
const TYPEFORM_VIP_ID = 'RRAsPGpo'
const EARLYBIRD_TARGET_ISO = '2026-02-02T00:00:00.000Z'

function App() {
  const [typeform, setTypeform] = useState(null)
  const [openFaqIndex, setOpenFaqIndex] = useState(-1)

  const logoUrl =
    'https://framerusercontent.com/images/FgY6AB73WPLFwE1CBP5OWjeOb2I.png?scale-down-to=512&width=5111&height=1008'

  const dayCards = [
    {
      kicker: 'DAY 1',
      title: 'The Opportunity of the Decade',
      desc: 'Learn why Freelance Brandscaling with AI is the simplest, fastest business to start in 2026.',
      bullets: [
        'Why this is superior to ecom, trading, and every other online business being pushed',
        'How to position yourself as a high-value service provider, even if you have no results',
        'Why brands are desperate for people who can help them get more customers',
      ],
    },
    {
      kicker: 'DAY 2',
      title: 'First High-Paying Client',
      desc: 'Join me for the live premiere of going from zero to premium clients to learn how you can do the same.',
      bullets: [
        'Word-for-word outreach scripts that are proven to get responses',
        'The “Irresistible Offer” framework that makes them feel dumb saying no',
        'Closing deals like a pro, even if you’re introverted or inexperienced',
      ],
    },
    {
      kicker: 'DAY 3',
      title: 'Advertising & Delivering Results',
      desc: 'Understand how to run profitable ads and automate 80% of your work using AI tools.',
      bullets: [
        'Get a complete understanding of Facebook, Google, and TikTok ads manager',
        'How to be smart with your clients’ budgets so you get the most bang for your buck',
        'How to analyze ad performance and know exactly what’s working/not working',
      ],
    },
    {
      kicker: 'DAY 4',
      title: 'Building The System That Works For You',
      desc: 'Transform from solo freelancer into a profitable agency owner. Includes live Q&A with Brez & guest speaker.',
      bullets: [
        'When to hire, who to hire, and how much to pay them',
        "Systems for delegating ad management so you're not doing all the work",
        'How to go from 5 clients to 15+ clients without working more hours',
      ],
    },
    {
      kicker: 'DAY 5',
      title: 'Winners & Advanced Tactics',
      desc: 'Fast-track methods to achieve 5 years of growth in just 1. Giveaway winners announced.',
      bullets: [
        'Insider secrets on personal branding that attract clients TO you (instead of outreach)',
        'The partnership model that lets you charge premium rates to fewer, better clients',
        'Special surprises for attendees who took massive action during the bootcamp',
      ],
    },
  ]

  const normalizeText = (value) =>
    value
      .replaceAll('â€™', "'")
      .replaceAll('â€œ', '"')
      .replaceAll('â€\u009D', '"')
      .replaceAll('â€¦', '...')
      .replaceAll('â€“', '–')
      .replaceAll('â†’', '→')

  const learnRows = [
    {
      number: '01',
      titleLines: ['Day 1: The Opportunity', 'of the Decade'],
      image:
        'https://framerusercontent.com/images/zswQErvhf3Xepx9ZeGlHowCK9ts.webp?width=2941&height=1601',
      card: dayCards[0],
    },
    {
      number: '02',
      reverse: true,
      titleLines: ['Day 2: First High-', 'Paying Client'],
      image:
        'https://framerusercontent.com/images/hKED8vSoLzJAxfwBdmpbR3eZEMk.webp?width=2722&height=1528',
      card: dayCards[1],
    },
    {
      number: '03',
      titleLines: ['Day 3: Advertising &', 'Delivering Results'],
      image:
        'https://framerusercontent.com/images/KvGvIuXi3hAHBtV4OJVCSWtb38.webp?width=2881&height=1271',
      card: dayCards[2],
    },
    {
      number: '04',
      reverse: true,
      titleLines: ['Day 4: Building The', 'System That Works', 'For You'],
      image:
        'https://framerusercontent.com/images/vXTc7JEJxS7WPG6LQKP2LV1mWh4.webp?width=1920&height=1080',
      card: dayCards[3],
    },
    {
      number: '05',
      titleLines: ['Day 5: Winners &', 'Advanced Tactics'],
      image:
        'https://framerusercontent.com/images/lrLLo7TxCfzSuFoWfNNqWcGtlEw.webp?width=1920&height=1080',
      card: dayCards[4],
      cta: true,
    },
  ]

  const testimonialRows = [
    [
      'https://framerusercontent.com/images/fi15hgrQ8RRiGRchQPUI5z1MY.webp?width=500&height=500',
      'https://framerusercontent.com/images/q7JPByXze9gb2Y6qQxLE8C0CE.webp?width=500&height=500',
      'https://framerusercontent.com/images/JnrVW1JCagqIkxRoYMg5tyh89ZM.webp?width=500&height=500',
      'https://framerusercontent.com/images/547auWNZebHznYUozLA9wSZ0eEM.webp?width=500&height=500',
      'https://framerusercontent.com/images/sXkZesX8w7KkMrpnszlV3ywC44.webp?width=500&height=500',
      'https://framerusercontent.com/images/9GdzFNVHrHbGuIc6aKCyRutPQ.webp?width=500&height=500',
    ],
    [
      'https://framerusercontent.com/images/wfytZsbpO51Nsbjx4lZekoqUI.webp?width=500&height=500',
      'https://framerusercontent.com/images/Ap8ezz6oJLzZQDGXZHFrdLCqAlE.webp?width=500&height=500',
      'https://framerusercontent.com/images/I2dxpazwLZvwT4OMFHXq9boTbmk.webp?width=500&height=500',
      'https://framerusercontent.com/images/4zSLWJycf4UMG7h6u6FuEe1PT8.webp?width=500&height=500',
      'https://framerusercontent.com/images/F70wc9UNjd09tWFNgRawgDyaVg.webp?width=500&height=500',
      'https://framerusercontent.com/images/VPYn1uTFNlhKaLKneAdVxbS4Dw.webp?width=500&height=500',
      'https://framerusercontent.com/images/wmgesajcTTQOpypY2WvoY0sBdQ.webp?width=500&height=500',
    ],
  ]

  const faqItems = [
    {
      q: 'I have no experience. Can I still do this?',
      a: "That’s literally the point. The bootcamp is designed to walk complete beginners through the exact steps — live — so you can copy what I’m doing and start signing clients.",
    },
    {
      q: 'How much time do I need to commit?',
      a: 'Each session is 60-90 minutes, plus optional Q&A / VIP breakouts. You can watch live or catch the replays.',
    },
    {
      q: "What if I can't make it live?",
      a: 'You’ll get access to the replays so you can watch on your own schedule.',
    },
    {
      q: 'Will this work in my country?',
      a: 'Yep. The model works worldwide — we have students from the US, Serbia, the UK, Canada, and more.',
    },
  ]

  const pricingCoreItems = [
    'Full access to the 5-Day Brandscaling Bootcamp',
    'Watch Brez go from zero to first client payment live',
    'Learn the exact Freelance Brandscaling with AI system',
    'Daily training on opportunity, client acquisition, media buying, scaling, and fast-track tactics',
    'Access to all live sessions and Q&A',
  ]

  const pricingVipItems = [
    'Chance To Win a Private Group Dinner With Brez In Miami',
    'Private VIP Discord channel with exclusive content',
    'Access to all challenge recordings for replay',
    '30-minute breakout sessions with Brez each day',
    '2x odds in all giveaways and raffles',
    'Priority support and direct feedback',
    'Lifetime access to bootcamp recordings',
  ]

  const openTypeform = (kind) => {
    if (kind === 'general') {
      setTypeform({ id: TYPEFORM_GENERAL_ID, title: 'General Ticket' })
      return
    }
    setTypeform({ id: TYPEFORM_VIP_ID, title: 'VIP Ticket' })
  }

  const closeTypeform = () => setTypeform(null)

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <div className="lp">
      <header className="lp__topbar">
        <div className="container topbarInner">
          <img className="lp__logo" src={logoUrl} alt="The Brand Scaling Bootcamp" />
          <div className="topbarCountdown" aria-label="Earlybird countdown">
            <div className="topbarCountdown__label">EARLYBIRD ACCESS:</div>
            <Countdown targetIso={EARLYBIRD_TARGET_ISO} />
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <div className="hero__inner">
              <div className="pill pill--date">7 PM EST @ FEB 2 ND - FEB 6TH</div>
              <h1 className="hero__title">
                This <span className="red">5 Day Bootcamp</span> Teaches You The{' '}
                <span className="yellow">Beginner-Friendly Skill</span>
                <br />
                That Normal People Are Using To
                <br />
                <span className="yellow">Escape The Traditional Career Path</span>
              </h1>
              <p className="hero__subtitle">
                Follow Along LIVE ON ZOOM. Without showing your face online, gambling in the stock
                market, or spending thousands on inventory
              </p>

              <div className="videoShell">
                <div className="videoShell__inner">
                  <ConverteAiV4Player playerId="69668f6b1fad4f3937c24088" />
                </div>
              </div>

              <div className="heroBelowVideo">
                <p className="heroBelowVideo__brand">The Brand Scaling Bootcamp</p>
                <p className="heroBelowVideo__join">
                  Join the <span className="red">LIVE 5-Day</span> Virtual Event
                </p>
                <a className="btn btn--hero" href="#pricing">
                  GET YOUR TICKET
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="tradeOuter">
              <div className="tradeInner">
                <div className="tradeCopy">
                  <h2 className="tradeTitle">
                    How Long Are You Going to Keep Trading Your Time for a Paycheck That Barely
                    Covers the Bills?
                  </h2>
                  <p className="tradeSubtitle">Be honest with yourself for a second.</p>

                  <ul className="tradeList">
                    <li>
                      <strong className="tradeHl tradeHl--red">The alarm clock</strong> that goes
                      off before you&apos;re ready, every single day
                    </li>
                    <li>
                      <strong className="tradeHl tradeHl--red">The commute</strong> that eats 2
                      hours of your life while you sit in traffic
                    </li>
                    <li>
                      <strong className="tradeHl tradeHl--red">The boss</strong> who doesn&apos;t
                      respect your time, your ideas, or your worth
                    </li>
                    <li>
                      <strong className="tradeHl tradeHl--yellow">The paycheck</strong> that&apos;s
                      gone before the month is over
                    </li>
                    <li>
                      <strong className="tradeHl tradeHl--yellow">The requests</strong> from people
                      you love that you can&apos;t afford to say yes to
                    </li>
                    <li>
                      <strong className="tradeHl tradeHl--yellow">The &quot;someday&quot;</strong>{' '}
                      that never comes… &quot;someday I&apos;ll travel, someday I&apos;ll buy that
                      car, someday I&apos;ll be free&quot;
                    </li>
                    <li>
                      <strong className="tradeHl tradeHl--yellow">The feeling</strong> that
                      you&apos;re capable of MORE but stuck in a system that wasn&apos;t designed
                      for you to win
                    </li>
                  </ul>

                  <p className="tradeBottom tradeBottom--strong">
                    You&apos;re not crazy for wanting something different.
                  </p>
                  <p className="tradeBottom">You&apos;re just looking in the wrong places.</p>
                </div>

                <div className="tradeMedia" aria-hidden="true">
                  <img
                    src="https://framerusercontent.com/images/i6Y09WtVFql2So50DSctHa5Q3Lc.webp?width=1290&height=1601"
                    alt=""
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*
          <section className="section section--tight">
          <div className="container">
            <div className="cardGlass">
              <div className="cardInner stack">
                <h2 className="h2">What Freelance Brand Scaling Really Is:</h2>
                <p className="muted">Instead of trying to start a whole complicated business…</p>
                <p className="muted">
                  You just need to learn a high-value, scalable skill that businesses are desperate
                  to pay for.
                </p>
                <p className="muted">
                  And right now in 2026, businesses want ONE thing more than anything else:
                </p>
                <p className="h3" style={{ margin: 0 }}>
                  Online advertising
                </p>
                <p className="muted">Every business will ALWAYS need more customers.</p>
                <p className="muted">If you can get them more customers by running ads for them…</p>
                <p className="muted">Then you have a skillset that:</p>
                <ul className="list">
                  {[
                    'Is ALWAYS in demand',
                    'Has VERY high profit margins',
                    'Is NOT tied to how many hours you work',
                    'Allows you to work from ANYWHERE in the world',
                    'Becomes MORE valuable as AI gets better',
                  ].map((t) => (
                    <li key={t} className="arrow">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          </section>
        */}

        <section className="brandScalingBg">
          <div className="container brandScalingWrap">
            <div className="brandScalingOuter">
              <div className="brandScalingInner">
                <div className="brandScalingQuote" aria-hidden="true">
                  “
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
                  You just need to learn a high-value, scalable skill that businesses are desperate
                  to pay for.
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
                  ].map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                <a className="btn brandScalingCta" href="#pricing">
                  GET YOUR TICKET
                </a>
              </div>
            </div>
          </div>
        </section>

        {/*
          <section className="section section--tight">
          <div className="container">
            <div className="cardGlass">
              <div className="cardInner grid2 mediaGrid">
                <div className="mediaGrid__media">
                  <img
                    className="mediaImg"
                    src="https://framerusercontent.com/images/aABHUG2bZoOMET3niXkrwf22Tig.webp?width=1537&height=2318"
                    alt="Brez"
                    loading="lazy"
                  />
                </div>
                <div className="stack">
                  <h2 className="h2">Follow Along As I Start Over From Rock Bottom</h2>
                  <p className="muted">I’m starting from ZERO:</p>
                  <ul className="list">
                    {[
                      '❌ No existing clients or connections',
                      '❌ No results to lean on',
                      '❌ No unfair advantages',
                    ].map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <p className="muted">
                    And I&apos;m documenting EVERYTHING as I land my first paying client.
                  </p>
                  <p className="muted">You&apos;ll see it ALL premiere during this bootcamp.</p>
                  <h3 className="h3">Plus, I&apos;m going LIVE to walk you through:</h3>
                  <ul className="list">
                    {[
                      'How I find and contact high-value client',
                      'The exact outreach scripts that get responses',
                      'Real sales conversations where I pitch and closed deals',
                      'Setting up the actual ad campaigns for the client',
                      'Delivering results using simple online tools',
                    ].map((t) => (
                      <li key={t} className="arrow">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </section>
        */}

        <section className="section section--tight rockSection">
          <div className="container">
            <div className="rockOuter">
              <div className="rockInner">
                <div className="rockGrid">
                  <div className="rockMedia" aria-hidden="true">
                  <img
                    src="https://framerusercontent.com/images/aABHUG2bZoOMET3niXkrwf22Tig.webp?width=1537&height=2318"
                    alt=""
                    loading="lazy"
                  />
                  </div>

                  <div className="rockCopy">
                    <h2 className="rockTitle">
                      Follow Along As I Start
                      <br />
                      Over <span className="rockTitle__yellow">From Rock Bottom</span>
                    </h2>

                    <p className="rockKicker">I&apos;m starting from ZERO:</p>
                    <ul className="rockZeroList">
                      {[
                        'No existing clients or connections',
                        'No results to lean on',
                        'No unfair advantages',
                      ].map((t) => (
                        <li key={t}>
                          <IconX className="rockZeroIcon" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="rockText">
                      And I&apos;m documenting EVERYTHING as I land my first paying client.
                    </p>
                    <p className="rockText">You&apos;ll see it ALL premiere during this bootcamp.</p>

                    
                  </div>

                  <ul className="rockIconList rockIconList--left">
                    <li>
                      <IconTarget className="rockIcon" />
                      <span>How I find and contact high-value client</span>
                    </li>
                    <li>
                      <IconHandshake className="rockIcon" />
                      <span>Real sales conversations where I pitch and closed deals</span>
                    </li>
                    <li>
                      <IconGlobe className="rockIcon" />
                      <span>Delivering results using simple online tools</span>
                    </li>
                  </ul>

                  <div className="rockRight">
                    <p className="rockPlus">Plus, I&apos;m going LIVE to walk you through:</p>
                    <ul className="rockIconList rockIconList--right">
                      <li>
                        <IconChat className="rockIcon" />
                        <span>The exact outreach scripts that get responses</span>
                      </li>
                      <li>
                        <IconSliders className="rockIcon" />
                        <span>Setting up the actual ad campaigns for the client</span>
                      </li>
                    </ul>

                    <a className="btn rockCta" href="#pricing">
                      GET YOUR TICKET
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section aboutSection">
          <div className="container">
            <h2 className="aboutHeading">About The Bootcamp</h2>

            <div className="aboutGrid">
              <div className="aboutCard">
                <div className="aboutCard__head">
                  <IconQuestionCircle className="aboutCard__icon" />
                  <div className="aboutCard__label">WHAT</div>
                </div>
                <p className="aboutCard__text">
                  A live 5-Day Brand Scaling Bootcamp where you&apos;ll follow along with me going
                  from zero → first client payment in real time... and copy the exact system
                  step-by-step.
                </p>
              </div>

              <div className="aboutCard">
                <div className="aboutCard__head">
                  <IconPin className="aboutCard__icon" />
                  <div className="aboutCard__label">WHERE</div>
                </div>
                <p className="aboutCard__text">
                  100% online. You&apos;ll get instant access to the private event hub + live room
                  links + community after you grab your ticket.
                </p>
              </div>

              <div className="aboutCard">
                <div className="aboutCard__head">
                  <IconCalendar className="aboutCard__icon" />
                  <div className="aboutCard__label">WHEN</div>
                </div>
                <p className="aboutCard__text">
                  Runs for 5 days in a row. Each session is 60–90 minutes (plus optional Q&amp;A / VIP
                  breakouts).
                </p>
                <p className="aboutCard__meta">
                  <strong>Dates:</strong> February 2nd - 6th
                </p>
                <p className="aboutCard__meta">
                  <strong>Time:</strong> Everyday Starting @7PM EST
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section learnSection">
          <div className="container">
            <h2 className="learnHeading">What You&apos;ll Learn in 5 Days</h2>

            <div className="learnDays">
              {learnRows.map((day) => (
                <div
                  key={day.number}
                  className={`learnDay${day.reverse ? ' learnDay--reverse' : ''}`}
                >
                  <div className="learnNumber" aria-hidden="true">
                    {day.number}
                  </div>

                  <div className="learnInner">
                    <div className="learnCopy">
                      <h3 className="learnTitle">
                        {day.titleLines.map((line) => (
                          <span className="learnTitle__line" key={line}>
                            {line}
                          </span>
                        ))}
                      </h3>

                      <p className="learnDesc">{normalizeText(day.card.desc)}</p>

                      <ul className="learnBullets">
                        {day.card.bullets.map((bullet) => (
                          <li key={bullet}>{normalizeText(bullet)}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="learnMedia">
                      <img src={day.image} alt="" loading="lazy" />
                    </div>

                    {day.cta ? (
                      <div className="learnCtaRow">
                        <button
                          type="button"
                          className="btn learnCta"
                          onClick={() => openTypeform('general')}
                        >
                          GET YOUR TICKET
                        </button>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section testimonialsSection">
          <div className="container">
            <h2 className="testimonialsHeading">See What Regular People Like You Are Saying</h2>

            <div className="testimonialsRows">
              <div className="testimonialsMarquee">
                <ul className="testimonialsTrack" style={{ '--duration': '85s' }}>
                  <li className="testimonialsGroup">
                    {testimonialRows[0].map((src) => (
                      <div className="testimonialsTile" key={src}>
                        <img src={src} alt="" loading="lazy" />
                      </div>
                    ))}
                  </li>
                  <li className="testimonialsGroup" aria-hidden="true">
                    {testimonialRows[0].map((src) => (
                      <div className="testimonialsTile" key={`${src}-dup`}>
                        <img src={src} alt="" loading="lazy" />
                      </div>
                    ))}
                  </li>
                </ul>
              </div>

              <div className="testimonialsMarquee">
                <ul
                  className="testimonialsTrack testimonialsTrack--reverse"
                  style={{ '--duration': '90s', '--delay': '-34s' }}
                >
                  <li className="testimonialsGroup">
                    {testimonialRows[1].map((src) => (
                      <div className="testimonialsTile" key={src}>
                        <img src={src} alt="" loading="lazy" />
                      </div>
                    ))}
                  </li>
                  <li className="testimonialsGroup" aria-hidden="true">
                    {testimonialRows[1].map((src) => (
                      <div className="testimonialsTile" key={`${src}-dup`}>
                        <img src={src} alt="" loading="lazy" />
                      </div>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section proofSection">
          <div className="container">
            <div className="proofOuter">
              <div className="proofInner">
                <div className="proofHeader">
                  <h2 className="proofTitle">
                    Grab Your Ticket To Follow Along
                    <br />
                    And See EXACTLY How It&apos;s Done
                  </h2>
                  <p className="proofKicker">
                    <em>
                      <strong>And if you need extra proof...</strong>
                    </em>
                  </p>
                  <p className="proofDesc">
                    I’ll be sharing wins, screenshots, and real student results throughout the 5
                    days so you can see what’s possible when you follow the system.
                  </p>
                </div>

                <div className="proofGrid">
                  <div className="proofCard">
                    <div className="proofMedia">
                      <div className="videoShell__inner">
                        <ConverteAiV4Player playerId="68bf3e72542d156b8c906b2d" />
                      </div>
                    </div>
                    <p className="proofCaption">“Jaden: Quit his 9–5, hit $14–$18k/month at 19.”</p>
                  </div>

                  <div className="proofCard">
                    <div className="proofMedia">
                      <div className="videoShell__inner">
                        <ConverteAiV4Player playerId="68bf3e5db66852460c675a3f" />
                      </div>
                    </div>
                    <p className="proofCaption">
                      “How Cobu Went From Working As A Butcher In Serbia To Scaling His Agency To
                      20+ Clients”
                    </p>
                  </div>

                  <div className="proofCard">
                    <div className="proofMedia">
                      <div className="videoShell__inner">
                        <ConverteAiV4Player playerId="68f958377e181d1f6b410225" />
                      </div>
                    </div>
                    <p className="proofCaption">
                      “James: College student now at $15–$20k/month, with 20 clients.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section pricingSection" id="pricing">
          <div className="container">
            <div className="pricingHeader">
              <h2 className="pricingHeading">Here’s What You Get When You Join:</h2>
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
                    {pricingCoreItems.map((text) => (
                      <li key={text} className="pricingItem pricingItem--included">
                        <IconCheck className="pricingIcon" />
                        <span>{text}</span>
                      </li>
                    ))}
                    {pricingVipItems.map((text) => (
                      <li key={text} className="pricingItem pricingItem--excluded">
                        <IconX className="pricingIcon" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className="pricingBtn pricingBtn--general"
                    onClick={() => openTypeform('general')}
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
                    {pricingCoreItems.map((text) => (
                      <li key={text} className="pricingItem pricingItem--included">
                        <IconCheck className="pricingIcon" />
                        <span>{text}</span>
                      </li>
                    ))}
                    {pricingVipItems.map((text) => (
                      <li key={text} className="pricingItem pricingItem--vip">
                        <IconCrown className="pricingIcon" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className="pricingBtn pricingBtn--vip"
                    onClick={() => openTypeform('vip')}
                  >
                    <span>GET VIP TICKET</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                  <h3 className="giveawayCard__title">
                    PRIVATE DINNER WITH BREZ IN MIAMI FOR 5 MEMBERS
                  </h3>
                  <div className="giveawayCard__vip">(VIP ONLY)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--tight guaranteeSection">
          <div className="container">
            <div className="guaranteeOuter">
              <div className="guaranteeInner">
                <h2 className="guaranteeTitle">My &quot;Ready to Sign Clients&quot; Guarantee</h2>
                <div className="guaranteeBody">
                  <p>
                    If in 7 days you don&apos;t feel 100% confident that you could go out and sign
                    your first paying client, I&apos;ll refund every penny, no questions asked.
                  </p>
                  <p>
                    Just email my support team at support@brandscalingbootcamp.com, say &quot;refund
                    please,&quot; add your purchase email and you&apos;ll have your money back within 48
                    hours.
                  </p>
                  <p>
                    I can make this guarantee because I know my audience really well. I&apos;ve seen
                    what happens when people actually follow the system.
                  </p>
                  <p>And I know that if you do the work, the results are basically inevitable.</p>
                  <p>The only people who don&apos;t get results are the ones who don&apos;t show up.</p>
                  <p>So show up. I&apos;ll handle the rest.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--tight whySection">
          <div className="container">
            <div className="whyCard">
              <div className="whyGrid">
                <div className="whyCopy">
                  <h2 className="whyTitle">&quot;Why Is This Only $47?&quot;</h2>
                  <div className="whyBody">
                    <p>Fair question.</p>
                    <p>
                      I&apos;ve seen people charge $997 for less than what I&apos;m giving you here. And I
                      could probably charge $297+ and still fill this thing.
                    </p>
                    <p>But here&apos;s my logic:</p>
                    <p>I&apos;m not trying to make money on this bootcamp.</p>
                    <p>
                      I&apos;m trying to find 1,000 people who are serious about building online
                      income, and help them get their first win.
                    </p>
                    <p>
                      Some of those people will go on to join my higher-level programs. Some will
                      become clients. Some will become partners. Some will just succeed on their
                      own and tell their friends about me.
                    </p>
                    <p>All of those outcomes are wins for me.</p>
                    <p>
                      The <strong>$47</strong> covers my ad costs and filters out the people who
                      aren&apos;t serious. That&apos;s it.
                    </p>
                    <p>
                      This is the best deal I&apos;ll ever offer. And I&apos;ll probably never run it at
                      this price again.
                    </p>
                    <p>
                      Once I have enough success stories from this cohort, the price goes up
                      permanently.
                    </p>
                  </div>
                </div>

                <div className="whyMedia">
                  <div className="whyImage">
                    <img
                      src="https://framerusercontent.com/images/obV4RjfiZ6cCF2N1uSJ9E6H6zM.jpg?width=1535&height=2316"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
              {[
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
              ].map((item) => (
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
                I cap enrollment because this is a LIVE event. If there are 10,000 people in the
                chat, I can&apos;t answer questions. I can&apos;t give personal feedback. It becomes a
                lecture instead of a bootcamp.
              </p>
              <p>Right now, there are only a couple hundred spots remaining.</p>
              <p>
                When they&apos;re gone, they&apos;re gone. You&apos;re either in or you&apos;re watching from
                the sidelines while others build their online businesses..
              </p>
            </div>
          </div>
        </section>

        <section className="section hostSection">
          <div className="container">
            <div className="hostCard">
              <div className="hostCard__inner">
                <div className="hostLayout">
                  <h2 className="hostHeading">Meet Your Host</h2>

                  <div className="hostMedia">
                    <img
                      className="hostImage"
                      src="https://framerusercontent.com/images/6uYfMbLfBOn0Yb3E8Okqd42k6I.webp?width=3024&height=4032"
                      alt="Brez"
                      loading="lazy"
                    />
                  </div>

                  <div className="hostCopy">
                    <p>A few years ago, I was exactly where you are.</p>
                    <p>
                      Confused. Trading my life for a paycheck. Jumping from business model to
                      business model.
                    </p>
                    <p>
                      I failed at{' '}
                      <span className="hostEmRed">
                        <em>EVERYTHING</em>
                      </span>{' '}
                      I tried.
                    </p>
                    <p>
                      Then by pure chance… I stumbled onto one skill that changed my entire life
                      forever:
                    </p>
                    <p className="hostEmOrange">
                      <em>Running ads online.</em>
                    </p>
                    <p>It’s simple. It’s in-demand. And it doesn’t require you to be a genius.</p>
                    <p>It gave me the ability to deliver customers-on-command to businesses.</p>
                    <p>
                      And as a result, I got compensated <span className="hostEmYellow">VERY</span>{' '}
                      well.
                    </p>
                    <p>Once I figured this out… everything else took off.</p>
                    <p>Now my only goal is to help people like you do the same.</p>
                    <p>And in this 5-Day Brandscaling Bootcamp, I’m about to prove it works…</p>
                    <p className="hostFinal">
                      <em>By doing it all over again from scratch.</em>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section faqSection">
          <div className="container">
            <h2 className="faqTitle">Frequently Asked Questions</h2>
            <div className="faq">
              {faqItems.map((item, idx) => {
                const open = openFaqIndex === idx
                const answerId = `faq-a-${idx}`
                return (
                  <button
                    key={item.q}
                    type="button"
                    className="faqItem"
                    data-open={open ? 'true' : 'false'}
                    aria-expanded={open}
                    aria-controls={answerId}
                    onClick={() => toggleFaq(idx)}
                  >
                    <div className="faqQ">
                      <span>{item.q}</span>
                      <IconChevron className="faqChevron" />
                    </div>
                    <div id={answerId} className="faqA" aria-hidden={!open}>
                      {item.a}
                    </div>
                  </button>
                )
              })}
            </div>
            <div className="faqCtaRow">
              <a className="btn faqCta" href="#pricing">
                GET YOUR TICKET
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <div className="footerCard">
              <div className="footerCard__inner stack">
            <h3>INCOME DISCLAIMER:</h3>
            <p className="muted-2">Important Notice Regarding Income Claims and Results</p>
            <p className="muted-2">
              The information presented on this website, including but not limited to testimonials,
              examples, and income representations related to The Elite Round Table, reflects
              specific experiences, circumstances, and abilities of selected individuals. There is
              no guarantee that you will experience similar results.
            </p>
            <h3>Understanding Potential Results</h3>
            <p className="muted-2">
              The income statements and examples on this website are not intended to represent or
              guarantee that anyone will achieve the same or similar results. Each individual&apos;s
              success depends on various factors, including but not limited to:
            </p>
            <ul className="list">
              {[
                'Your background, experience, and education',
                'Your commitment, dedication, and willingness to follow the program',
                'Market conditions and industry-specific circumstances',
                'The time and effort invested in implementing the strategies taught',
                'Your ability to take action on the information provided',
              ].map((t) => (
                <li key={t} className="arrow">
                  {t}
                </li>
              ))}
            </ul>
            <h3>No Guarantee of Income</h3>
            <p className="muted-2">
              We do not guarantee or imply that you will generate any specific amount of income, or
              any income at all, by purchasing or participating in The Elite Round Table. Any
              earnings or income statements, or examples of earnings or income, represent our
              understanding of average or typical earnings and should not be construed as a promise
              or guarantee of earnings.
            </p>
            <h3>Success Is Not Typical</h3>
            <p className="muted-2">
              The success stories and testimonials presented are exceptional results and are not
              typical for the average user. These results should not be considered average or
              expected results. We cannot and do not guarantee your success or income level. Your
              results may vary significantly.
            </p>
            <h3>Forward-Looking Statements</h3>
            <p className="muted-2">
              Any forward-looking statements contained on this website or in our materials outline
              our expectations or predictions of future events. These statements are simply
              forecasts and are not guarantees of performance.
            </p>
            <h3>Your Responsibility</h3>
            <p className="muted-2">
              You acknowledge that you are solely responsible for your results. You agree that Brez
              Marketing, its officers, directors, employees, and affiliates are not responsible for
              your success or failure in implementing the teachings and information offered.
            </p>
            <p className="muted-2">
              By using this website and/or purchasing The Elite Round Table, you acknowledge that
              you have read, understood, and agree to be bound by this disclaimer.
            </p>
            <p className="muted-2">Last Updated: December 23rd, 2025</p>
            <div className="stack" style={{ alignItems: 'center', marginTop: 18, gap: 8 }}>
              <img className="footerLogo" src={logoUrl} alt="The Brand Scaling Bootcamp" loading="lazy" />
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Terms of Services
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy
              </a>
              <p className="muted-2">©2026. Brez Marketing LLC. All Rights Reserved.</p>
            </div>
              </div>
            </div>
          </div>
        </footer>
      </main>

      <TypeformModal
        open={!!typeform}
        title={typeform?.title ?? 'Ticket'}
        formId={typeform?.id ?? TYPEFORM_GENERAL_ID}
        onClose={closeTypeform}
      />
    </div>
  )
}

export default App
