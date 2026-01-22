import { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Image } from '../../components/Image'

function TestimonialsMarquee({ images, reverse = false, duration, delay }) {
  const style = useMemo(() => {
    const baseStyle = { '--duration': duration }
    if (delay) {
      baseStyle['--delay'] = delay
    }
    return baseStyle
  }, [duration, delay])

  return (
    <div className="testimonialsMarquee">
      <ul
        className={`testimonialsTrack${reverse ? ' testimonialsTrack--reverse' : ''}`}
        style={style}
      >
        <li className="testimonialsGroup">
          {images.map((src) => (
            <div className="testimonialsTile" key={src}>
              <Image
                src={src}
                alt="Customer testimonial"
                sizes="(max-width: 500px) 100vw, 500px"
              />
            </div>
          ))}
        </li>
        <li className="testimonialsGroup" aria-hidden="true">
          {images.map((src) => (
            <div className="testimonialsTile" key={`${src}-dup`}>
              <Image
                src={src}
                alt="Customer testimonial"
                sizes="(max-width: 500px) 100vw, 500px"
              />
            </div>
          ))}
        </li>
      </ul>
    </div>
  )
}

export function TestimonialsSection({ rows }) {
  return (
    <section className="section testimonialsSection">
      <div className="container">
        <h2 className="testimonialsHeading">See What Regular People Like You Are Saying</h2>

        <div className="testimonialsRows">
          <TestimonialsMarquee images={rows[0]} duration="85s" />
          <TestimonialsMarquee images={rows[1]} reverse duration="90s" delay="-34s" />
        </div>
      </div>
    </section>
  )
}

TestimonialsMarquee.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  reverse: PropTypes.bool,
  duration: PropTypes.string.isRequired,
  delay: PropTypes.string,
}

TestimonialsSection.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
}

