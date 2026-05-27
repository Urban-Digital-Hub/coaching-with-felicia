import React, { useState } from 'react'
import COLOR from '../../constants/color'
import { Link } from 'react-router-dom'
export default function Header() {
  const [showModal, setShowModal] = useState(false)
  const [email, setEmail] = useState('')

  const openModal = () => setShowModal(true)
  const closeModal = () => {
    setEmail('')
    setShowModal(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Replace with real submit logic as needed
    if (!email) return
    alert(`Subscribed with ${email}`)
    closeModal()
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="/images/logo.jpeg" alt="Logo" width="30" height="24" className="me-2" />
          Felecia
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: COLOR.scondary }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ color: COLOR.scondary }}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services" style={{ color: COLOR.scondary }}>
                Services
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="moreDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: COLOR.scondary }}
              >
                More
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="moreDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    coaching Programs
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                   Fitness & Lifestyle
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Menstorship & Business </a>
                </li>
                <li>
                  <Link className="dropdown-item" to="/testimonial">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/blog">
                    Blog & Resources
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <button onClick={openModal} className="btn btn-primary ms-lg-3" style={{ backgroundColor: COLOR.primary, borderColor: COLOR.primary }}>
            Subscribe
          </button>
        </div>
      </div>
    </nav>
    {showModal && (
      <>
        <div className="modal fade show" style={{ display: 'block' }} tabIndex={-1} role="dialog" aria-modal="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Subscribe</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={closeModal} style={{ backgroundColor: COLOR.scondary}}>
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary" style={{ backgroundColor: COLOR.primary, borderColor: COLOR.primary }}>
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="modal-backdrop fade show"></div>
      </>
    )}
    </>
  )
}
