import Header from "./components/header"
import Carousel from "./components/carousel"
import About from "./components/about"
import Services from "./components/services"
import Footer from "./components/footer"
import Testimonial from "./components/testimonial"
import Contact from "./components/contact"
import { Route, Routes } from "react-router-dom"
import Notfound from "./pages/notfound"
import Swal from "sweetalert2"
import { useEffect } from "react"


function App() {
 

var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6a159c10ab32691c3031f901/1jpi6j8qr';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();


  const welcomeMessage = () => {
    const audio = new Audio('/sound/week7-brrring.mp3')

    Swal.fire({
      title: 'Welcome to Coaching with Felicia!',
      text: `You’ve carried so much for so long. You’ve survived seasons that tried to break you. You’ve held families, careers, relationships, and expectations together with your bare hands. But now… you’re ready for something different. You’re ready for peace. You’re ready for clarity. You’re ready to come home to yourself. This is where your Tactical Pause begins.`,

      icon: 'success',
      confirmButtonText: 'Explore Now',
      background: '#f7f4ed',
      color: '#1e293b',

      didOpen: () => {
        audio.play()
      },

      willClose: () => {
        audio.pause()
        audio.currentTime = 0
      }
    }).then((result) => {
      if (result.isConfirmed) {
        audio.play()
      }
    })
  }

  // Show welcome message on initial load
  useEffect(() => {
    welcomeMessage()
  }, [])
  return (
    <>
      <Header />

      <Routes>
        {/* Home route composes the main landing sections */}
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <About />
              <Services />
              <Testimonial />
              <Contact />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>

      <Footer />

    </>
  )
}

export default App
