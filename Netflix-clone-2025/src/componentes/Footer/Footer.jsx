import React from 'react'
import "./footer.css"
import FacebookIcon from "@mui/icons-material/Facebook";

import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <div className="footer-outer-contaier">
      <div className="footer-inner-container">
        <div className="footer-icons">
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="footer-data">
          <div>
            <ul>
              <li>AudioDescription</li>
              <li>investoRelations</li>
              <li>LegalNotice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Helpcenter</li>
              <li>Jabs</li>
              <li>Cookiespreferences</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Giftcards</li>
              <li>Termsofuse</li>
              <li>corporateinformation</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Mediacenter</li>
              <li>Privacye</li>
              <li>contactus</li>
            </ul>
          </div>
        </div>

        <div className="service-code">
          <p>service code</p>
        </div>
        <div className="copy-right">&copy;1997-2025 Netflix,INC.</div>
      </div>
    </div>
  );
}

export default Footer