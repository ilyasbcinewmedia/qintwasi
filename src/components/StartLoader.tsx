import "../assets/css/theme.css";
import Headerlogo from '../assets/img/logo.png';

export default function StartLoader() {
  return (
    <>
      {/* loader */}
      <div className="backDrop">
       <section className="fixed_Ld">
        <div className="logoimg_holder">
            <img src={Headerlogo} alt="logo_image" />
        </div>
        <span className="loader-71"></span>
        </section>
      </div>
      
    </>
  )
}
