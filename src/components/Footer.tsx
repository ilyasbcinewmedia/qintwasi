import footerLogo from '../assets/img/logo.png'
export default function Footer() {
    return (
        <>
           {/*  <!-- ============================ FOOTER ============================--> */}
            <footer className="footer undefined">
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-12 padding_top padding_bottom text-center">
                    {/* <!-- <div className="logo"><a href="index.html" className="brand"><span>Qinty</span> Wasi</a></div> --> */}
                    <div className="logo ft_logo"><a href="index.html" className="brand">
                        <img src={footerLogo} alt="" /></a>
                    </div>
                    <div className="text_block">
                    </div>
                    <div className="text_block margin_top">
                  {/*   <!-- <div className="footer_block"><i className="fas fa-phone-square margin_left_custom_1"></i>123-456-789</div>
                    <div className="footer_block"><i className="fas fa-globe margin_left_custom_1"></i>abc address, street 2</div> --> */}
                    <div className="footer_block"><i className="fas fa-envelope margin_left_custom_1"></i><a href="mailto:info@qintywasi.com">info@qintywasi.com</a></div>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-12 copyright_content vcenter">
                    <div className="col-md-6">
                    <div className="copyright small_screen_text_center">
                        <p>© 2024 ALL RIGHTS RESERVED. WEBSITE BY <a href="https://www.belsito.com/" target="_blank">Belsito Communications Inc.</a></p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </footer>
        </>
    )
}
