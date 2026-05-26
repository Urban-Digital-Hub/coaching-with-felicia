
import COLOR from '../../constants/color'
import Swal from 'sweetalert2';
import { AiOutlineMail } from 'react-icons/ai'
import { FiMapPin, FiPhone } from 'react-icons/fi'
import type { FormEvent } from 'react'
function Contact() {

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "0e96f1ee-8a50-404c-baab-4973d5e0dbff");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Your message has been sent successfully!'
      }); 
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to send your message. Please try again.'
      });
    }
  };

  return (
    <section className="py-5" style={{ backgroundColor: '#f7f3ea', color: COLOR.scondary }}>
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-12 col-lg-6">
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
                    <AiOutlineMail size={20} />
                  </div>
                  <div>
                    <a href='mailto:mentoringandcoaching@yourwellnessmatters.net' style={{ textDecoration: 'none'}}>
                    <h6 className="mb-1" style={{ color: COLOR.scondary }}>Email</h6>
                    <p className="mb-0 text-muted" style={{ fontSize: '0.770rem' }}>mentoringandcoaching@yourwellnessmatters.net</p>
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle"
                    style={{ width: '42px', height: '42px', backgroundColor: COLOR.primary, color: '#fff' }}
                  >
                    <FiMapPin size={18} />
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
                    <FiPhone size={18} />
                  </div>
                  <div>
                    <a href='tel:+16086719776' style={{ textDecoration: 'none'}}>
                    <h6 className="mb-1" style={{ color: COLOR.scondary }}>Phone</h6>
                    <p className="mb-0 text-muted">+1 608 671 9776</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
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
                  <button type="submit" className="btn btn-primary btn-lg rounded-pill w-100 w-sm-auto px-5" style={{ backgroundColor: COLOR.primary, borderColor: COLOR.primary, display: 'flex', justifySelf: 'center' }}>
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