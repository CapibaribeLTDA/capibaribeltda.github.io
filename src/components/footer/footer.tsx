import './footer.scss';

export const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                {/* Company Info */}
                <div className="footer-section">
                    <h2>CapibaribeTI</h2>
                    <p>Soluções tecnológicas para impulsionar o seu negócio</p>
                </div>

                {/* Quick Links */}
                <div className="footer-section">
                    <h3>Mapa do site</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="footer-section">
                    <h3>Nos siga</h3>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>

                {/* Newsletter Signup */}
                {/* <div className="footer-section">
                    <h3>Subscribe</h3>
                    <p>Get the latest updates and news.</p>
                    <form>
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div> */}
            </div>

            {/* Copyright */}
            <div className="footer-bottom">
                &copy; 2025 CapibaribeTI. Sala 0203 Cxpst 429, Rua Dona Maria César, nº 170, CEP 50030-140, Recife, PE. CNPJ 49.603.685/0001-50
            </div>
        </div>
    )
}