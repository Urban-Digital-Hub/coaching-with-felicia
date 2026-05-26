import React from 'react'
import { useState } from 'react';
import COLOR from '../../constants/color'
import Swal from 'sweetalert2';
function Contact() {
   const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0e96f1ee-8a50-404c-baab-4973d5e0dbff");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Your message has been sent successfully!'
      }); 
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="py-5" style={{ backgroundColor: '#f7f3ea', color: COLOR.scondary }}>
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-6">
            <div className="rounded-4 p-5" style={{ backgroundColor: '#ffffff', boxShadow: '0 24px 60px rgba(11, 33, 70, 0.08)' }}>
              <span className="badge rounded-pill px-3 py-2 mb-3" style={{ backgroundColor: COLOR.primary, color: '#fff' }}>
                Contact Us
              </span>
              <h2 className="display-6 fw-bold mb-3">We’re here to help you build a better experience.</h2>
              <p className="text-muted mb-4">
                Reach out with any question or request. Our team responds quickly with thoughtful support tailored to your needs.
              </p>
              <div className="mb-4 d-flex flex-column gap-3">
                <div className="d-flex gap-3 align-items-start">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle"
                    style={{ width: '42px', height: '42px', backgroundColor: COLOR.primary, color: '#fff' }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#fff" />
                    </svg>
                  </div>
                  <div>
                    <a href='mailto:mentoringandcoaching@yourwellnessmatters.net' style={{ textDecoration: 'none'}}>
                    <h6 className="mb-1" style={{ color: COLOR.scondary }}>Email</h6>
                    <p className="mb-0 text-muted">mentoringandcoaching@yourwellnessmatters.net</p>
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle"
                    style={{ width: '42px', height: '42px', backgroundColor: COLOR.primary, color: '#fff' }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" fill="#fff" />
                    </svg>
                  </div>
                  <div>
                    <h6 className="mb-1" style={{ color: COLOR.scondary }}>Address</h6>
                    <p className="mb-0 text-muted">123 Elegant Street, City, Country</p>
                  </div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle"
                    style={{ width: '42px', height: '42px', backgroundColor: COLOR.primary, color: '#fff' }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.2.48 2.5.74 3.83.74a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22.5 1.5 13.93 1.5 3a1 1 0 011-1H6a1 1 0 011 1c0 1.34.25 2.63.74 3.83a1 1 0 01-.21 1.11l-2.2 2.2z" fill="#fff" />
                    </svg>
                  </div>
                  <div>
                    <h6 className="mb-1" style={{ color: COLOR.scondary }}>Phone</h6>
                    <p className="mb-0 text-muted">+1 234 567 890</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="rounded-4 p-5" style={{ backgroundColor: '#ffffff', boxShadow: '0 24px 60px rgba(11, 33, 70, 0.08)' }}>
              <h3 className="fw-bold mb-4" style={{ color: COLOR.scondary }}>Send us a message</h3>
              <form className="row g-3" onSubmit={onSubmit}>
                <div className="col-md-6">
                  <label className="form-label text-muted">Name</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control rounded-4 border bg-light"
                    placeholder="Your name"
                    style={{ minHeight: '52px', padding: '1rem 1.1rem', borderColor: '#ddd', backgroundColor: '#fbf8f0' }}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-muted">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="form-control rounded-4 border bg-light"
                    placeholder="you@example.com"
                    style={{ minHeight: '52px', padding: '1rem 1.1rem', borderColor: '#ddd', backgroundColor: '#fbf8f0' }}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label text-muted">Subject</label>
                  <input
                    name="subject"
                    type="text"
                    className="form-control rounded-4 border bg-light"
                    placeholder="What can we help you with?"
                    style={{ minHeight: '52px', padding: '1rem 1.1rem', borderColor: '#ddd', backgroundColor: '#fbf8f0' }}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label text-muted">Message</label>
                  <textarea
                    name="message"
                    className="form-control rounded-4 border bg-light"
                    rows={6}
                    placeholder="Write your message here..."
                    style={{ minHeight: '170px', padding: '1rem 1.1rem', borderColor: '#ddd', backgroundColor: '#fbf8f0' }}
                  ></textarea>
                </div>
                <div className="col-12 text-end">
                  <button type="submit" className="btn btn-primary btn-lg rounded-pill px-5" style={{ backgroundColor: COLOR.primary, borderColor: COLOR.primary, display: 'flex', justifySelf: 'center', minWidth: '160px'   }}>
                    Send Message
                  </button>
                </div>
              </form>
               {/* <span className='text-center'>{result}</span> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact