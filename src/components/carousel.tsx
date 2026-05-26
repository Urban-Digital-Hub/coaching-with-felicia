import COLOR from '../../constants/color'

const slides = [
  {
    title: 'Where your healing, your story, and your next chapter begin.',
    description: 'FELECIA HAMMOND Author. Coach. Mentor. Guide. Helping strong women soften, breathe, and rebuild their lives from the inside out.',
    ctaPrimary: 'Get In Touch',
    ctaPrimaryHref: '/contact',
    ctaSecondary: 'Book a Session',
    ctaSecondaryHref: 'https://calendly.com/blueinv73/30min',
  },
  {
    title: 'A modern sanctuary for growth',
    description: 'Discover elegant solutions designed to support your wellness journey.',
    ctaPrimary: 'Learn More',
    ctaSecondary: 'See Services',
  },
  {
    title: 'Confidence, clarity, calm',
    description: 'Experience premium support in a clean, uplifting environment.',
    ctaPrimary: 'Explore',
    ctaSecondary: 'Contact Us',
  },
]

function Carousel() {
  return (
    <section className="position-relative overflow-hidden">
      <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : undefined}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={slide.title}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              style={{
                backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.55), rgba(15, 23, 42, 0.55)), url(/images/person/14person.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '70vh',
              }}
            >
              <div className="carousel-caption d-flex flex-column justify-content-center align-items-start h-100 text-start p-4 p-md-5">
                <div className="w-100" style={{ maxWidth: '620px' }}>
                  <h1 className="display-5 fw-bold" style={{ color: COLOR.scondary }}>
                    {slide.title}
                  </h1>
                  <p className="lead mb-4" style={{ color: '#e8edf4' }}>
                    {slide.description}
                  </p>
                  <div className="d-flex gap-3 flex-column flex-sm-row">
                    <a className="btn btn-light btn-lg shadow-sm w-100 w-sm-auto" href={slide.ctaPrimaryHref || '#'} style={{ color: COLOR.scondary }}>
                      {slide.ctaPrimary}
                    </a>
                    <a className="btn btn-outline-light btn-lg w-100 w-sm-auto" href={slide.ctaSecondaryHref || '#'}>
                      {slide.ctaSecondary}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  )
}

export default Carousel