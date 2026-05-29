import COLOR from '../../constants/color'
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'
import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="py-5" style={{ backgroundColor: COLOR.scondary, color: '#f1f3f8' }}>
      <div className="container">
        <div className="row gy-4 gy-lg-0">
          <div className="col-12 col-lg-4">
            <h5 className="mb-3" style={{ color: COLOR.primary }}><b>Felecia</b></h5>
            <p className="text- mb-4" style={{ maxWidth: '420px' }}>
              Crafted for modern wellness and elegant service design. We bring calm, clarity, and premium care to every experience.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a href="#" aria-label="Instagram" className="text-white text-decoration-none d-flex align-items-center gap-2">
                <span style={{ width: '28px', height: '28px', backgroundColor: COLOR.primary, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FaInstagram color="#fff" size={14} />
                </span>
                Instagram
              </a>

              <a href="#" aria-label="Facebook" className="text-white text-decoration-none d-flex align-items-center gap-2">
                <span style={{ width: '28px', height: '28px', backgroundColor: COLOR.primary, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FaFacebookF color="#fff" size={14} />
                </span>
                Facebook
              </a>

              <a href="#" className="text-white text-decoration-none d-flex align-items-center gap-2" aria-label="LinkedIn">
                <span style={{ width: '28px', height: '28px', backgroundColor: COLOR.primary, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FaLinkedinIn color="#fff" size={14} />
                </span>
                LinkedIn
              </a>

              <a href="#" className="text-white text-decoration-none d-flex align-items-center gap-2" aria-label="Twitter">
                <span style={{ width: '28px', height: '28px', backgroundColor: COLOR.primary, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FaTwitter color="#fff" size={14} />
                </span>
                Twitter
              </a>
              
              <a href="https://www.tiktok.com/@feleciahammond936?_r=1&_t=ZT-96gLuFeqYKk" className="text-white text-decoration-none d-flex align-items-center gap-2" aria-label="TikTok">
                <span style={{ width: '28px', height: '28px', backgroundColor: COLOR.primary, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <SiTiktok color="#fff" size={14} />
                </span>
                TikTok
              </a>
            </div>
          </div>

          <div className="col-12 col-lg-2">
            <h6 className="mb-3 text-white"><b>Company</b></h6>
            <ul className="list-unstyled text-muted mb-0">
              <li className="mb-2 d-flex align-items-center gap-2">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: COLOR.primary }} />
                <Link to={"/about"} className="text-white text-decoration-none">
                  About
                </Link>
              </li>
              <li className="mb-2 d-flex align-items-center gap-2">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: COLOR.primary }} />
                <Link to={"/services"} className="text-white text-decoration-none">
                  Services
                </Link>
              </li>
              <li className="mb-2 d-flex align-items-center gap-2">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: COLOR.primary }} />
                <Link to={"/contact"} className="text-white text-decoration-none">
                  Contact
                </Link>
              </li>
              <li className="d-flex align-items-center gap-2">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: COLOR.primary }} />
                <Link to={"/blog"} className="text-white text-decoration-none">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-12 col-lg-3">
            <h6 className="mb-3 text-white"><b>Support</b></h6>
            <ul className="list-unstyled text-muted mb-0">
              <li className="mb-2 d-flex align-items-center gap-2">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: COLOR.primary }} />
                <Link to={"/faq"} className="text-white text-decoration-none">
                  FAQ
                </Link>
              </li>
              <li className="mb-2 d-flex align-items-center gap-2">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: COLOR.primary }} />
                <Link to={"/privacy"} className="text-white text-decoration-none">
                  Privacy
                </Link>
              </li>
              <li className="mb-2 d-flex align-items-center gap-2">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: COLOR.primary }} />
                <a href="#" className="text-white text-decoration-none">Terms</a>
              </li>
              <li className="d-flex align-items-center gap-2">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: COLOR.primary }} />
                <a href="#" className="text-white text-decoration-none">Help Center</a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-lg-3">
            <h6 className="mb-3 text-white"><b>Newsletter</b></h6>
            <p className="text-white">Stay in touch for new services and updates.</p>
            <form className="d-flex flex-column gap-3">
              <div className="input-group shadow-sm">
                <span className="input-group-text" style={{ backgroundColor: COLOR.primary, borderColor: COLOR.primary, color: '#fff' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#fff" />
                  </svg>
                </span>
                <input
                  type="email"
                  className="form-control bg-white border-0 text-white"
                  placeholder="Email address"
                  style={{ minHeight: '48px' }}
                />
              </div>
              <button type="submit" className="btn btn-outline-light rounded-pill py-2">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-top border-white-10 pt-4 mt-5 text-center text-white" style={{ color: '#ced4da' }}>
          © {currentYear} Felecia. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer