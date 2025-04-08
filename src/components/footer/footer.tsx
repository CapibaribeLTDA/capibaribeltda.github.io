import Link from "next/link";
import "./footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        {/* Company Info */}
        {/* <div className="footer-section">
          <h2>CapibaribeTI</h2>
          <p>Soluções tecnológicas para impulsionar o seu negócio</p>
        </div> */}

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Mapa do site</h3>
          <ul>
            <li>
              <Link href="/">Início</Link>
            </li>
            <li>
              <Link href="/about">Sobre</Link>
            </li>
            <li>
              <Link href="/services">Serviços</Link>
            </li>
            <li>
              <Link href="/contact">Contato</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Nos siga</h3>
          <div className="social-icons">
            <Link href="#">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link href="#">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link href="#">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link href="#">
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Privacidade</h3>
          <ul>
            <li>
              <Link href="/privacidade">Políticas de privacidade e LGPD</Link>
            </li>
          </ul>
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
        &copy; 2025 CapibaribeTI. Sala 0203 Cxpst 429, Rua Dona Maria César, nº
        170, CEP 50030-140, Recife, PE. CNPJ 49.603.685/0001-50
      </div>
    </div>
  );
};
