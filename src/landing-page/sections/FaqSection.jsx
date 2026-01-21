import { useState } from 'react'
import { IconChevron } from '../../components/Icons'
import { GetTicketButton } from '../components/GetTicketButton'

export function FaqSection({ items }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(-1)

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <section className="section faqSection">
      <div className="container">
        <h2 className="faqTitle">Frequently Asked Questions</h2>
        <div className="faq">
          {items.map((item, idx) => {
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
          <GetTicketButton />
        </div>
      </div>
    </section>
  )
}
