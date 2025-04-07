import './App.css';
import Nav from './components/Nav';
import './animations.css';
import { useEffect } from 'react';
import {PhoneIcon, MapPinIcon, ClockIcon} from 'lucide-react'

function App() {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('[class*="animated-"]');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing this element after adding the class
        }
      });
    });

    animatedElements.forEach((el) => observer.observe(el));

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <div id='hero'className="w-100 hero vh-100 px-5 d-flex flex-column justify-content-center align-items-center">
        <h1 className="primary-text fw-bold grotesk">Nasi Goreng</h1>
      </div>
      <section id="about" className="w-100 container grotesk p-5 d-flex flex-column justify-content-center align-items-center">
        <h1 className='h1 fw-bold mb-5'>Tentang Nasi Goreng Wira</h1>
        <p>
        Nasi Goreng Wira adalah pilihan terbaik untuk Anda yang mencari hidangan nasi goreng yang lezat, 
        bergizi, 
        dan dibuat dengan bahan-bahan berkualitas tinggi. 
        Kami berkomitmen untuk memberikan cita rasa autentik yang memuaskan setiap selera. Dengan pengalaman sejak tahun 1992, 
        kami telah menjadi kepercayaan banyak pelanggan dalam menghadirkan hidangan yang tidak hanya menggugah selera, 
        tetapi juga memberikan kenikmatan yang tak terlupakan. 
        Setiap porsi nasi goreng kami dibuat dengan penuh dedikasi dan perhatian terhadap kualitas, 
        sehingga Anda dapat menikmati kelezatan yang sempurna di setiap suapan. Kami percaya bahwa makanan yang baik adalah kunci kebahagiaan, dan itulah yang selalu kami upayakan untuk Anda.
          <br />
          semenjak 1992
        </p>
      </section>
      <section id="menu d-flex">
        <div className="d-flex my-2 sec2">
          <div className="sec2-img animated-appear"></div>
          <div className="d-flex sec2-text bg-light flex-column justify-content-center align-items-center animated-slide">
            <span className="fw-bold h2">Nasi Goreng</span>
            <h2>Rp 15.000</h2>
          </div>
        </div>
        <div className="d-flex my-2 sec2">
          <div
            className="sec2-img animated-appear"
            style={{ backgroundImage: "url('/Nasgor-wira/kwetiau.png')" }}
          ></div>
          <div className="d-flex sec2-text bg-light flex-column justify-content-center align-items-center animated-slide">
            <span className="fw-bold h2">Kwetiau</span>
            <h2>Rp 15.000</h2>
          </div>
        </div>
        <div className="d-flex my-2 sec2">
          <div
            className="sec2-img animated-appear"
            style={{ backgroundImage: "url('/Nasgor-wira/mie-goreng.png')" }}
          ></div>
          <div className="d-flex sec2-text bg-light flex-column justify-content-center align-items-center animated-slide">
            <span className="fw-bold h2">Mie Goreng</span>
            <h2>Rp 12.000</h2>
          </div>
        </div>
        <div className="d-flex my-2 sec2">
          <div
            className="sec2-img animated-appear"
            style={{ backgroundImage: "url('/Nasgor-wira/mie-siram.png')" }}
          ></div>
          <div className="d-flex sec2-text bg-light flex-column justify-content-center align-items-center animated-slide">
            <span className="fw-bold h2">Mie Siram</span>
            <h2>Rp 14.000</h2>
          </div>
        </div>
      </section>
      <section id='footer' className="d-flex fw-bold flex-column justify-content-center align-items-center">
        <p className='grotesk py-5 fw-bold h1'>Contacts</p>
        <iframe
        className='shadow-lg rounded-3' 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6634500161003!2d106.7775035!3d-6.1757897999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f79e601255b9%3A0xfda55d6b25c49040!2sNasi%20goreng%20wira!5e0!3m2!1sid!2sid!4v1744024166245!5m2!1sid!2sid" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        <div className="contacts w-100 d-flex py-5 justify-content-evenly align-items-center">
          <div style={{borderLeft:"solid black"}} className="d-flex py-3 flex-column border-2 ps-2 border-dark justify-content-center align-items-left">
            <h1 className='fw-bold h2 animated-slide'> <PhoneIcon  className='me-2'/>Kontak</h1>
            <span className='fw-bold animated-slide'>08123456789</span>
          </div>
          <div style={{borderLeft:" solid black"}}  className="text-right py-3 d-flex border-2 ps-2 flex-column justify-content-left align-items-left">
            <h1 className='fw-bold h2 animated-slide'><MapPinIcon  className='me-2'/>Alamat</h1>
            <span className='fw-bold animated-slide'>Jl. Raya No. 123, Jakarta</span>
          </div>
          <div style={{borderLeft:" solid black"}}  className="d-flex border-2 py-3 ps-2 flex-column justify-content-center align-items-left">
            <h1 className='fw-bold h2 animated-slide'><ClockIcon className='me-2'/>Jam Buka</h1>
            <span className='fw-bold animated-slide'>Setiap Hari 19:00 - 01:00</span>
          </div>
        </div>
        <span className='text-dark fw-light py-5'>Jakarta, 2024, jl mangga II no6. 1</span>
      </section>
    </>
  );
}

export default App;
