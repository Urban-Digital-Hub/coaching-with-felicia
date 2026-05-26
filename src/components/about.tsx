import COLOR from '../../constants/color'

function About() {
  return (
    <section className="py-5" style={{ backgroundColor: '#f7f4ed', color: COLOR.scondary }}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="px-4 py-5 rounded-4 shadow-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.96)' }}>
              <span className="badge rounded-pill px-3 py-2 mb-3" style={{ backgroundColor: COLOR.primary, color: '#fff' }}>
                About Me
              </span>
              <h2 className="display-6 fw-bold mb-3">A woman who survived the storm — and learned how to heal from it.</h2>
              <p className="mb-4 text-muted">
               I’m a memoirist, wellness creator, and emotional healing coach for women who have lived in survival mode for far too long. My work blends nervous-system awareness, spiritual grounding, emotional intelligence, and lived experience.
              </p>
              <div className="mb-4">
                <h5 className="fw-bold">I help women:</h5>
                <ul className="list-unstyled text-muted mb-3">
                  <li>• Break old survival patterns</li>
                  <li>• Heal emotional flashbacks</li>
                  <li>• Rebuild identity</li>
                  <li>• Strengthen their bodies</li>
                  <li>• Nourish themselves without shame</li>
                  <li>• Create lives rooted in peace, not pressure</li>
                </ul>
                <p className="mb-3 text-muted">
                  Your story matters. Your healing matters. And you don’t have to walk this journey alone.
                </p>
                
              </div>
              <div className="row g-3">
                <div className="col-12">
                  <div className="d-flex align-items-start gap-3">
                    <div className="flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px', backgroundColor: COLOR.primary, color: '#fff' }}>
                      01
                    </div>
                    <div>
                      <h5 className="mb-1">Thoughtful support</h5>
                      <p className="mb-0 text-muted">Personal guidance designed to help you feel confident and cared for.</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-start gap-3">
                    <div className="flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px', backgroundColor: COLOR.primary, color: '#fff' }}>
                      02
                    </div>
                    <div>
                      <h5 className="mb-1">Modern design</h5>
                      <p className="mb-0 text-muted">A clean, elegant environment that inspires calm and focus.</p>
                    </div>
                  </div>
                </div>
                <a href="#contact" className="btn btn-close-white w-100 w-sm-auto" style={{ backgroundColor: COLOR.scondary, color: '#fff' }}>
                  Learn More About Me
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="rounded-4 overflow-hidden shadow-sm" style={{ background: 'linear-gradient(180deg, rgba(153, 113, 21, 0.12), rgba(11, 33, 70, 0.1))' }}>
              <img src="/images/person/24person.jpg" alt="About me" className="img-fluid w-100 object-fit-cover" />
            </div>
          </div>
        </div>

        <div className="row align-items-center g-5 mt-5">
          <div className="col-lg-6">
            <div className="rounded-4 overflow-hidden shadow-sm" style={{ background: 'linear-gradient(180deg, rgba(11, 33, 70, 0.14), rgba(153, 113, 21, 0.08))' }}>
              <img src="/images/person/34person.jpg" alt="Our mission" className="img-fluid w-100 object-fit-cover" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="px-4 py-5 rounded-4 shadow-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.96)' }}>
              <span className="badge rounded-pill px-3 py-2 mb-3" style={{ backgroundColor: COLOR.scondary, color: '#fff' }}>
                Mission
              </span>
              <h2 className="display-6 fw-bold mb-3">Our mission is clear and uplifting.</h2>
              <p className="mb-4 text-muted">
                We combine skill, empathy, and thoughtful design to make wellness feel accessible, elegant, and meaningful for everyone.
              </p>
              <ul className="list-unstyled mb-0">
                <li className="mb-3 d-flex align-items-start gap-3">
                  <div className="flex-shrink-0 mt-1" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: COLOR.primary }} />
                  <span className="text-muted">Design experiences that support every lifestyle.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-3">
                  <div className="flex-shrink-0 mt-1" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: COLOR.primary }} />
                  <span className="text-muted">Build trust through consistency, care, and quality.</span>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <div className="flex-shrink-0 mt-1" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: COLOR.primary }} />
                  <span className="text-muted">Inspire people to feel confident about their next step.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About