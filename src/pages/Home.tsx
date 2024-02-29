import Bannerimage from "../assets/img/banner_image.jpg"
import ceoImg from "../assets/img/ceo.jpg"
import blog1 from "../assets/img/blog_1.jpg"
import blog2 from "../assets/img/blog_2.jpg"
import blog3 from "../assets/img/blog_3.jpg"
import thumbnail1 from "../assets/img/vide_thumbnail_1.jpg"
import thumbnail2 from "../assets/img/vide_thumbnail_2.jpg"
import thumbnail3 from "../assets/img/vide_thumbnail_3.jpg"
import thumbnail4 from "../assets/img/vide_thumbnail_4.jpg"



const Home = () => {
  return (
    <>
      <div className="head_panel">
        {/* ============================ SLIDER ========================== */}
        <div className="slider_wrapper">
          <div id="head_panel_slider" className="owl-carousel">
            {/* ============================ SLIDE ========================== */}
            <div className="stretchy-wrapper ratio_slider">
              <div
                style={{
                  backgroundImage: `url(${Bannerimage})`,
                }} aria-hidden="true" className="item dark_section" >
                <video width="100%" height="auto" muted autoPlay loop 
                style={{
                    WebkitFilter: 'brightness(25%)',
                    filter: 'brightness(25%)',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                    objectFit: 'cover',
                  }}
                >
                  <source src="/src/assets/video/Contact_us_Video_Qinty_Waterfall.MP4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="container">
                  <div className="caption caption_elegant text-center">
                    <div className="inner animated fadeIn">
                      <div className="t3 uppercase animate__animated animate__fadeInDown ">
                        Heal your mind, body, spirit at Qinty’s house where indigenous plant
                        medicines transform the soul.
                      </div>
                      {/* <div className="t1 animate__animated animate__fadeInUp ">Wasi: The Quechua word for house</div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END========================= SLIDE ========================== */}
          </div>
        </div>
        {/* END========================= SLIDER ========================== */}
      </div>
      {/* main section */}
      <div className="main">
      <div className="container">
        <section className="no_padding dark_section booking-form">
          <div className="row">
            <div className="col-md-10 col-md-offset-1 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
              <p>Chamán Qinty, of Peruvian nationality, was born on December 21 in the city of Tarapoto, province and
                region of San Martín. In 2003 he began his journey of natural medicine when he was only 15 years old,
                managing to gain experience and confidence to transmit it in each session of taking Ayahuasca. The
                reason for starting the journey was through a spiritual call that he perceived and together with his
                first teacher, he began the long journey that today stands out in his method of healing and preparing
                plants. He spent seven years working together with different ayahuasquero masters, purguero masters,
                master perfumers and aquatic masters. His preparation also required many diets and purges, even
                strengthening his body, mind, and heart. In each session, Shaman Qinty conveys the peace one needs to
                heal or learn. Through his select Amazonian icarus, it detonates harmony for the soul and humility for
                the heart. Today it can be noticed in his patients. In 2017, he began his independent path as a plant
                teacher, managing to travel abroad, taking his medicine prepared by himself. The trust and guidance he
                processes are unique, and today his goal is to reach all the people who need it. There are no boundaries
                when it comes to healing, and there are no races. For Ayahuasca we are all equal.</p>
            </div>
          </div>
        </section>
      </div>
      <section className="light_section section_header">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
            </div>
            <div className="col-md-10 col-md-offset-1 text-center margin_bottom">
              <div className="text_block full_container">
                <h3 className="wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">Excelling in service provision</h3>
                <p className="wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">We are not like other centers. We hand select our participants in small groups to align with the
                  energy of Maestro Qinty. You are not one of hundreds, you are in a small group by design. Also,
                  private groups can also be requested.</p>
                <p className="wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">Yours truly,<small>Qinty.</small></p>
                <div className="footer wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
                  <img src={ceoImg} width="70" alt="Image" className="img-circle" />
                  <span>Chamán Qinty<small>CEO</small></span></div>
              </div>
            </div>
            <div className="col-md-12 text-center">
              <div className="section_header elegant">
                <h1>Gallery</h1>
              </div>
            </div>
       <div className="col-md-12">
          <div className="main_mtslide">
         {/*  <!-- image testimonial slider --> */}
          <div className="swiper mtSlider">
            <div className="swiper-wrapper">
            {/*   <!-- slide1  --> */}
              <div className="swiper-slide ">
                <div className="negative_margin_bottom small_screen_margin_top wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                  <div className="entry">
                    <a href={blog1} data-fancybox="gallery">
                      <img src={blog1} alt="Image" />
                      <div className="entry_paragraph">
                        <p>+</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- slide2 --> */}
              <div className="swiper-slide">
                <div className="negative_margin_bottom small_screen_margin_top wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                  <div className="entry">
                    <a href={blog2} data-fancybox="gallery"><img src={blog2} alt="Image" />
                      <div className="entry_paragraph">
                        <p>+</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- slide3 --> */}
              <div className="swiper-slide">
                <div className="negative_margin_bottom small_screen_margin_top wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                  <div className="entry">
                    <a href={blog3} data-fancybox="gallery"><img src={blog3} alt="Image" />
                      <div className="entry_paragraph">
                        <p>+</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
             {/*  <!-- slid4 --> */}
              <div className="swiper-slide">
                <div className="negative_margin_bottom small_screen_margin_top wow animate__animated animate__fadeInUp" data-wow-delay="0.8s">
                  <div className="entry">
                    <a href={blog3} data-fancybox="gallery"><img src={blog2} alt="Image"/>
                      <div className="entry_paragraph">
                        <p>+</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
             {/*  <!-- slide end --> */}
            </div>
          </div>
          <div className="swiper-button-next pst"></div>
          <div className="swiper-button-prev pst"></div>
          {/* <!-- image testimonial slider --> */}
         </div>
        </div>
          </div>
        </div>
      </section>
      <section className="white_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section_header elegant">
                <h1>VIDEOS TESTIMONIALS</h1>
                <p>What our clients says</p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="space-medium">
                <div className="container">
                 {/*  <!-- video testimonila start--> */}
                  <div className="monial_video">
                    <div className="swiper mtVideoSlider">
                      <div className="swiper-wrapper">
                        {/* <!-- slide1  --> */}
                        <div className="swiper-slide">
                          <div className="video_item wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                            <div className="video-testimonial-block">
                              <div className="video-thumbnail">
                                <img src={thumbnail1} alt="video thumbnail 1" className="img-fluid" />
                                </div>
                              <a href="https://drive.google.com/file/d/11Ns6CPxHWou3QHCHYYnvKOXJuo-NQclA/preview" className="video-play" data-fancybox="YotubeVideo" data-type="iframe"></a>
                            </div>
                            <div className="video-testimonial-content">
                              <h4 className="mb10">Bond Tarapoto Peru </h4>
                              <p>Bond Tarapoto Peru Retreat English</p>
                            </div>
                          </div>
                        </div>
                       {/*  <!-- slide2  --> */}
                        <div className="swiper-slide">
                          <div className="video_item wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                            <div className="video-testimonial-block">
                              <div className="video-thumbnail"><img src={thumbnail2} alt="video thumbnail 2" className="img-fluid" /></div>
                              <a href="https://drive.google.com/file/d/1LF4dl1agNA-3O1c8TDOJxNRsh41asDZi/preview" className="video-play" data-fancybox="YotubeVideo"  data-type="iframe"></a>
                            </div>
                            <div className="video-testimonial-content">
                              <h4 className="mb10">Kelli Tarapoto Peru</h4>
                              <p>Kelli Tarapoto Peru Retreat English</p>
                            </div>
                          </div>
                        </div>
                        {/* <!-- slide3  --> */}
                        <div className="swiper-slide">
                          <div className="video_item wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                            <div className="video-testimonial-block">
                              <div className="video-thumbnail"><img src={thumbnail3} alt="video thumbnail 3 " className="img-fluid" /></div>
                              <a href="https://drive.google.com/file/d/1c4FevBCwOlOvpEKyQyg058MYUeYovDO9/preview" className="video-play" data-fancybox="YotubeVideo" data-type="iframe"></a>
                            </div>
                            <div className="video-testimonial-content">
                              <h4 className="mb10">Cancun</h4>
                              <p>Cancun Retreat Female Spanish</p>
                            </div>
                          </div>
                        </div>
                        {/* <!-- slide4  --> */}
                        <div className="swiper-slide">
                          <div className="video_item wow animate__animated animate__fadeInUp" data-wow-delay="0.8s">
                            <div className="video-testimonial-block">
                              <div className="video-thumbnail"><img src={thumbnail4} alt="video thumbnail 4" className="img-fluid" /></div>
                              <a href="https://drive.google.com/file/d/1N-IDUzNGBDLro1j21wgVP9RGICcOx-ew/preview" className="video-play" data-fancybox="YotubeVideo" data-type="iframe"></a>
                            </div>
                            <div className="video-testimonial-content">
                              <h4 className="mb10"> San Cristobal </h4>
                              <p> San Cristobal Retreat Spanish</p>
                            </div>
                          </div>
                        </div>
                        {/* <!-- slides end --> */}
                      </div>{/* <!-- Wrapper --> */}
                    </div>{/* <!-- mtvideoSlider --> */}
                    <div className="swiper-button-next asx"></div>
                    <div className="swiper-button-prev asx"></div>
                  </div>
                  {/* <!-- video testimonila end--> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;
