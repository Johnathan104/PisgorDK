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
        <h1 className="primary-text fw-bold grotesk">Pisang Goreng Keju Crispy "Bang Jago" Duri Kepa</h1>
      </div>
      <section id="about" className="w-100 container grotesk p-5 d-flex flex-column justify-content-center align-items-center">
        <h1 className='h1 fw-bold mb-5'>Tentang Pisang Goreng Keju Crispy "Bang Jago" Duri Kepa</h1>
        <p>
        Pisang Goreng Keju Crispy "Bang Jago" adalah camilan sempurna yang memadukan 
        renyahnya pisang goreng dengan kelezatan keju yang melimpah. Dibuat dari bahan-bahan berkualitas tinggi, 
        
        setiap gigitan menghadirkan perpaduan rasa manis, gurih, dan tekstur crispy yang tak tertandingi. 
        Dengan berbagai varian rasa seperti Original, Keju Susu, hingga Keju Green Tea, 
        kami menghadirkan pengalaman kuliner yang memanjakan lidah Anda. Cocok dinikmati kapan saja, 
        Pisang Goreng Keju Crispy "Bang Jago" adalah pilihan terbaik untuk menemani waktu santai Anda!
          <br />
          semenjak 1992
        </p>
      </section>
      <section id="menu" className="d-flex flex-wrap flex-column align-items-center justify-content-center">
        <h1 className='grotesk'>Menu</h1>
        <div className="py-5 container  border-top border-bottom border-light">
          <h2>Keju Crispy Original</h2>
          <p className='py-2'>Merupakan rasa Keju Crispy Original kami, tanpa topping, rasakan kriuk pisang goreng yang manis sekali dengan harga yang murah!</p>
        </div>
        <div className="py-5 container  border-top border-bottom border-light">
          <h2>Keju Susu</h2>
          <p className='py-2'>Pisang goreng crispy dengan taburan keju dan susu yang melimpah, memberikan rasa manis dan gurih yang sempurna.</p>
        </div>
        <div className="py-5 container  border-top border-bottom border-light">
          <h2>Keju Strawberry</h2>
          <p className='py-2'>Kombinasi unik antara pisang goreng crispy, keju, dan manisnya strawberry yang menyegarkan.</p>
        </div>
        <div className="py-5 container  border-top border-bottom border-light">
          <h2>Keju Blueberry</h2>
          <p className='py-2'>Rasakan perpaduan pisang goreng crispy dengan keju dan blueberry yang manis dan sedikit asam.</p>
        </div>
        <div className="py-5 container  border-top border-bottom border-light">
          <h2>Keju Meses</h2>
          <p className='py-2'>Pisang goreng crispy dengan keju dan taburan meses coklat yang menggugah selera.</p>
        </div>
        <div className="py-5 container  border-top border-bottom border-light">
          <h2>Keju Nanas</h2>
          <p className='py-2'>Pisang goreng crispy dengan keju dan rasa nanas yang segar dan manis.</p>
        </div>
        <div className="py-5 container  border-top border-bottom border-light">
          <h2>Keju Green Tea</h2>
          <p className='py-2'>Pisang goreng crispy dengan keju dan rasa green tea yang khas dan menenangkan.</p>
        </div>
        <div className="py-5 container  border-top border-bottom border-light">
          <h2>Keju Tiramisu</h2>
          <p className='py-2'>Pisang goreng crispy dengan keju dan rasa tiramisu yang kaya dan creamy.</p>
        </div>
        <div className="py-5 container  border-top border-bottom border-light">
          <h2>Keju Durian</h2>
          <p className='py-2'>Pisang goreng crispy dengan keju dan aroma durian yang khas dan menggoda.</p>
        </div>
        <div className="py-5 container  border-top border-bottom border-light">
          <h2>Keju Coklat</h2>
          <p className='py-2'>Pisang goreng crispy dengan keju dan coklat yang manis dan lezat.</p>
        </div>
      </section>
      <section id='footer' className="d-flex fw-bold flex-column justify-content-center align-items-center">
        <p className='grotesk py-5 fw-bold h1'>Contacts</p>
        <iframe
         className='shadow-lg rounded-3 w-50' 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.663668013368!2d106.77495049999999!3d-6.1757607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7db242a7cef%3A0xf3f67fd34dedd9a6!2sPisang%20Goreng%20Keju%20Crispy%20Duri%20Kepa!5e0!3m2!1sid!2sid!4v1748089398004!5m2!1sid!2sid" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        <div className="contacts w-100 d-flex py-5 justify-content-evenly align-items-center">
          <div style={{borderLeft:"solid black"}} className="d-flex py-3 flex-column border-2 ps-2 border-dark justify-content-center align-items-left">
            <h1 className='fw-bold h2 animated-slide'> <PhoneIcon  className='me-2'/>Kontak</h1>
            <span className='fw-bold animated-slide'>0858-1912-7828</span>
          </div>
          <div style={{borderLeft:" solid black"}}  className="text-right py-3 d-flex border-2 ps-2 flex-column justify-content-left align-items-left">
            <h1 className='fw-bold h2 animated-slide'><MapPinIcon  className='me-2'/>Alamat</h1>
            <span className='fw-bold animated-slide'>Jl mangga 17, Duri Kepa, Jakarta Barat</span>
          </div>
          <div style={{borderLeft:" solid black"}}  className="d-flex border-2 py-3 ps-2 flex-column justify-content-center align-items-left">
            <h1 className='fw-bold h2 animated-slide'><ClockIcon className='me-2'/>Jam Buka</h1>
            <span className='fw-bold animated-slide'>Setiap Hari 7:00 - 19:00</span>
          </div>
        </div>
        <span className='primary-text fw-light py-5'>Jakarta, 2024, jl mangga II no6. 1</span>
      </section>
    </>
  );
}

export default App;
