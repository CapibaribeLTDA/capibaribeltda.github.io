import './contact.scss';

export default function About() {
  return (
    <div className="contact-page">
      {/* <a 
        href='https://docs.google.com/forms/d/e/1FAIpQLSfXFRuP28sUtH-E46y1CinLiOiKQ6-mHtGMeIm2y_d7kArPIg/viewform'
        target='_blank'
        >Forms</a> */}
        {/* <ContactForm/> */}
        <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfXFRuP28sUtH-E46y1CinLiOiKQ6-mHtGMeIm2y_d7kArPIg/viewform?embedded=true"
        width="100%"
        height="600"
        style={{ border: "none" }}
        allowFullScreen
      ></iframe>
    </div>
  );
}
