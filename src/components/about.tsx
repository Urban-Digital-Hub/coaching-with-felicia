import COLOR from "../../constants/color";

function About() {
  return (
    <section
      className="py-5"
      style={{ backgroundColor: "#f7f4ed", color: COLOR.scondary }}
    >
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-6">
            <div
              className="px-4 py-5 rounded-4 shadow-sm"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.96)" }}
            >
              <span
                className="badge rounded-pill px-3 py-2 mb-3"
                style={{ backgroundColor: COLOR.primary, color: "#fff" }}
              >
                About Me
              </span>
              <h2 className="display-6 fw-bold mb-3">
                A woman who survived the storm — and learned how to heal from
                it.
              </h2>
              <p className="mb-4 text-muted">
                <b>Felecia Hammond</b> is a U.S. Army veteran, mother of two,
                memoirist, and seasoned financial management and government
                contracting professional with over a decade of service in the
                military and federal agencies. Her career—marked by leadership,
                integrity, and the quiet endurance required of women in
                uniform—shaped her understanding of resilience, emotional
                suppression, and the cost of carrying invisible wounds.<br></br> <br></br> For
                years, Felecia became who she needed to be to survive. It wasn’t
                until she transitioned out of the Army that she realized the
                battlefield had followed her home. Determined to understand the
                patterns shaping her relationships, her nervous system, and her
                sense of self, she embarked on a transformative journey of
                emotional healing and spiritual awakening. That journey became
                the foundation of her debut memoir, The Tactical Pause—a
                cinematic, deeply personal exploration of identity, trauma, and
                the courage it takes to reclaim the woman buried beneath
                survival mode.<br></br> <br></br> Her life has been shaped by transitions: from
                childhood into the military, from soldier into mother, from
                high‑functioning survival into embodied healing. Writing became
                her way of piecing herself back together, naming the truths she
                once tucked away, and reclaiming the parts of herself she
                thought she had lost.<br></br> <br></br> Today, Felecia is a wellness content
                creator and the founder of Your Wellness Matters, a coaching and
                mentorship practice dedicated to helping women unlearn survival
                mode, reclaim their softness, and rebuild lives rooted in
                emotional truth. Her work centers on emotional intelligence,
                trauma recovery, nervous‑system awareness, self‑leadership, and
                faith‑rooted healing. Through her YouTube channel, writing, and
                coaching, she creates practical, compassionate content that
                guides women through burnout, boundaries, identity restoration,
                and the long road back to themselves.<br></br> <br></br> At her core, Felecia is a
                storyteller—someone who believes that when we tell the truth
                about our lives, we give other women permission to tell the
                truth about theirs. She holds an Associate of Arts in General
                Studies from the University of Maryland and a Bachelor of
                Science in Finance from Rasmussen University. She currently
                lives in Illinois, where she continues to write, create, and
                guide others toward the healing she once had to fight for
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
                  Your story matters. Your healing matters. And you don’t have
                  to walk this journey alone.
                </p>
              </div>
              <div className="row g-3">
                {/* <div className="col-12">
                  <div className="d-flex align-items-start gap-3">
                    <div
                      className="flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: "48px",
                        height: "48px",
                        backgroundColor: COLOR.primary,
                        color: "#fff",
                      }}
                    >
                      01
                    </div>
                    <div>
                      <h5 className="mb-1">Thoughtful support</h5>
                      <p className="mb-0 text-muted">
                        Personal guidance designed to help you feel confident
                        and cared for.
                      </p>
                    </div>
                  </div>
                </div> */}
                {/* <div className="col-12">
                  <div className="d-flex align-items-start gap-3">
                    <div
                      className="flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: "48px",
                        height: "48px",
                        backgroundColor: COLOR.primary,
                        color: "#fff",
                      }}
                    >
                      02
                    </div>
                    <div>
                      <h5 className="mb-1">Modern design</h5>
                      <p className="mb-0 text-muted">
                        A clean, elegant environment that inspires calm and
                        focus.
                      </p>
                    </div>
                  </div>
                </div> */}
                <a
                  href="#contact"
                  className="btn btn-close-white w-100 w-sm-auto"
                  style={{ backgroundColor: COLOR.scondary, color: "#fff" }}
                >
                  Learn More About Me
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div
              className="rounded-4 overflow-hidden shadow-sm"
              style={{
                background:
                  "linear-gradient(180deg, rgba(153, 113, 21, 0.12), rgba(11, 33, 70, 0.1))",
              }}
            >
              <img
                src="/images/person/first3.jpeg"
                alt="About me"
                className="img-fluid w-100 object-fit-cover"
              />
            </div>
          </div>
        </div>

        <div className="row align-items-center g-5 mt-5">
          <div className="col-12 col-lg-6">
            <div
              className="rounded-4 overflow-hidden shadow-sm"
              style={{
                background:
                  "linear-gradient(180deg, rgba(11, 33, 70, 0.14), rgba(153, 113, 21, 0.08))",
              }}
            >
              <img
                src="/images/person/34person.jpg"
                alt="Our mission"
                className="img-fluid w-100 object-fit-cover"
              />
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div
              className="px-4 py-5 rounded-4 shadow-sm"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.96)" }}
            >
              <span
                className="badge rounded-pill px-3 py-2 mb-3"
                style={{ backgroundColor: COLOR.scondary, color: "#fff" }}
              >
                Mission
              </span>
              <h2 className="display-6 fw-bold mb-3">
                My mission is clear and uplifting.
              </h2>
              <p className="mb-4 text-muted">
                We combine skill, empathy, and thoughtful design to make
                wellness feel accessible, elegant, and meaningful for everyone.
              </p>
              <ul className="list-unstyled mb-0">
                <li className="mb-3 d-flex align-items-start gap-3">
                  <div
                    className="flex-shrink-0 mt-1"
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: COLOR.primary,
                    }}
                  />
                  <span className="text-muted">
                    Design experiences that support every lifestyle.
                  </span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-3">
                  <div
                    className="flex-shrink-0 mt-1"
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: COLOR.primary,
                    }}
                  />
                  <span className="text-muted">
                    Build trust through consistency, care, and quality.
                  </span>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <div
                    className="flex-shrink-0 mt-1"
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: COLOR.primary,
                    }}
                  />
                  <span className="text-muted">
                    Inspire people to feel confident about their next step.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
