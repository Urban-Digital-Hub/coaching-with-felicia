import { useState } from 'react'
import COLOR from '../../constants/color'

function BookSession() {
  const [service, setService] = useState('')

  const handleBook = () => {
    if (!service) return alert('Please select a session type')

    // You can later track this in analytics or EmailJS if needed

    window.open(
    //   'https://calendar.app.google/D3Qd7kxgAXbesDXW9',
          'https://calendly.com/blueinv73/30min',
      '_blank'
    )
  }

  return (
    <section
      className="py-5"
      style={{ backgroundColor: '#f7f3ea' }}
    >
      <div className="container">

        <div className="row justify-content-center">
          <div className="col-12 col-lg-7">

            <div
              className="rounded-4 p-5 shadow"
              style={{ backgroundColor: '#fff' }}
            >

              <h2
                className="fw-bold mb-3"
                style={{ color: COLOR.scondary }}
              >
                Book a Session
              </h2>

              <p className="text-muted mb-4">
                Choose the type of session that fits your needs, then select a time that works for you.
              </p>

              {/* Dropdown */}
              <label className="form-label text-muted">
                Select Session Type
              </label>

              <select
                className="form-control mb-4"
                value={service}
                onChange={(e) => setService(e.target.value)}
                style={{ minHeight: '52px' }}
              >
                <option value="">-- Choose an option --</option>
                <option value="clarity">Clarity Session</option>
                <option value="coaching">1-on-1 Coaching</option>
                <option value="strategy">Strategy Call</option>
                <option value="breakthrough">Breakthrough Session</option>
              </select>

              {/* Dynamic preview */}
              {service && (
                <div className="alert alert-light border mb-4">
                  {service === 'clarity' && 'A session to help you gain clarity and direction.'}
                  {service === 'coaching' && 'Deep personalized coaching session.'}
                  {service === 'strategy' && 'Strategic planning for your goals.'}
                  {service === 'breakthrough' && 'Transformational mindset breakthrough session.'}
                </div>
              )}

              {/* Button */}
              <button
                onClick={handleBook}
                className="btn btn-primary btn-lg w-100 rounded-pill"
                style={{
                  backgroundColor: COLOR.primary,
                  borderColor: COLOR.primary
                }}
              >
                Continue to Booking
              </button>

              <p className="text-muted mt-3 small text-center">
                You will be redirected to choose a time on Calendly.
              </p>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default BookSession