function TestimonialsMarquee({ images, reverse = false, duration, delay }) {
  return (
    <div className="testimonialsMarquee">
      <ul
        className={`testimonialsTrack${reverse ? ' testimonialsTrack--reverse' : ''}`}
        style={{
          '--duration': duration,
          ...(delay ? { '--delay': delay } : null),
        }}
      >
        <li className="testimonialsGroup">
          {images.map((src) => (
            <div className="testimonialsTile" key={src}>
              <img src={src} alt="" loading="lazy" />
            </div>
          ))}
        </li>
        <li className="testimonialsGroup" aria-hidden="true">
          {images.map((src) => (
            <div className="testimonialsTile" key={`${src}-dup`}>
              <img src={src} alt="" loading="lazy" />
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

