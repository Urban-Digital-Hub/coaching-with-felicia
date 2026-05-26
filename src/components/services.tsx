import COLOR from '../../constants/color'

function Services() {
  return (
    <section className="py-5" style={{ backgroundColor: '#f7f3ea', color: COLOR.scondary }}>
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-12 col-lg-6">
            <div className="px-4 py-5 rounded-4" style={{ backgroundColor: '#ffffff', boxShadow: '0 24px 60px rgba(11, 33, 70, 0.08)' }}>
              <span className="badge rounded-pill px-3 py-2 mb-3" style={{ backgroundColor: COLOR.primary, color: '#fff' }}>
                Services
              </span>
              <h1 className="display-6 fw-bold mb-4">Elegant services that support every step of your journey.</h1>
              <p className="mb-4 text-muted">
                Our services are designed for clarity, comfort, and premium results. Each offering blends modern strategy, thoughtful design, and personal attention.
              </p>
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="p-4 rounded-4 h-100" style={{ backgroundColor: '#f9f7f1', border: `1px solid ${COLOR.primary}20` }}>
                    <div className="mb-3 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '44px', height: '44px', backgroundColor: COLOR.primary, color: '#fff' }}>
                      01
                    </div>
                    <h5 className="mb-2">Wellness Planning</h5>
                    <p className="mb-0 text-muted">Custom strategies rooted in balance, confidence, and long-term growth.</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="p-4 rounded-4 h-100" style={{ backgroundColor: '#f9f7f1', border: `1px solid ${COLOR.primary}20` }}>
                    <div className="mb-3 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '44px', height: '44px', backgroundColor: COLOR.primary, color: '#fff' }}>
                      02
                    </div>
                    <h5 className="mb-2">Expert Support</h5>
                    <p className="mb-0 text-muted">Dedicated guidance from experienced professionals who understand your goals.</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="p-4 rounded-4 h-100" style={{ backgroundColor: '#f9f7f1', border: `1px solid ${COLOR.primary}20` }}>
                    <div className="mb-3 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '44px', height: '44px', backgroundColor: COLOR.primary, color: '#fff' }}>
                      03
                    </div>
                    <h5 className="mb-2">Flexible Programs</h5>
                    <p className="mb-0 text-muted">Adaptable experiences built to fit your schedule and lifestyle.</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="p-4 rounded-4 h-100" style={{ backgroundColor: '#f9f7f1', border: `1px solid ${COLOR.primary}20` }}>
                    <div className="mb-3 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '44px', height: '44px', backgroundColor: COLOR.primary, color: '#fff' }}>
                      04
                    </div>
                    <h5 className="mb-2">Premium Experience</h5>
                    <p className="mb-0 text-muted">A refined interface and polished touchpoints that feel premium and calm.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="rounded-4 overflow-hidden shadow-sm" style={{ background: 'linear-gradient(180deg, rgba(153, 113, 21, 0.15), rgba(11, 33, 70, 0.08))' }}>
              <img
                src="/images/person/3person.jpg"
                alt="Service illustration"
                className="img-fluid w-100 object-fit-cover"
              />
            </div>
          </div>
        </div>

        <div className="row g-4 mt-5">
          <div className="col-12 col-lg-4">
            <div className="p-4 rounded-4 h-100" style={{ backgroundColor: '#ffffff', border: `1px solid ${COLOR.primary}20` }}>
              <h5 style={{ color: COLOR.scondary }}>Consultation</h5>
              <p className="text-muted">Personalized introductions and clear paths to the right service for you.</p>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="p-4 rounded-4 h-100" style={{ backgroundColor: '#ffffff', border: `1px solid ${COLOR.primary}20` }}>
              <h5 style={{ color: COLOR.scondary }}>Strategy</h5>
              <p className="text-muted">Focused plans that help you move forward with confidence and ease.</p>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="p-4 rounded-4 h-100" style={{ backgroundColor: '#ffffff', border: `1px solid ${COLOR.primary}20` }}>
              <h5 style={{ color: COLOR.scondary }}>Growth</h5>
              <p className="text-muted">Support that evolves with your progress and keeps goals within reach.</p>
            </div>
          </div>
        </div>

        <div className="rounded-4 mt-5 p-5 text-center" style={{ backgroundColor: COLOR.scondary, color: '#fff' }}>
          <h2 className="fw-bold mb-3">A services experience built around you.</h2>
          <p className="mb-4 text-white-75">From one-on-one guidance to premium digital support, our services bring calm, clarity, and confidence to every part of your journey.</p>
          <a className="btn btn-outline-light btn-lg" href="https://calendly.com/blueinv73/30min" target='blank'  rel="noreferrer" style={{ borderColor: '#fff' }}>
            Book a Session
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services