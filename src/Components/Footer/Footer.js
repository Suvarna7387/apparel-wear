import React from 'react'
import "../Footer/Footer.css"
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook"
import Twitter from "@mui/icons-material/Twitter"

const Footer = () => {
  return (
    <div className="contact-container">
    <div className="contactus-firstchild">
      <div className="contactUStext-outer">
        <h3>CONTACT US</h3>
        <div className="contactUS-icons-wrapper">
          <PhoneIcon className="contactUS-icons" />{" "}
          <div>1800 123456</div>
        </div>
        <div className="contactUS-icons-wrapper">
          <EmailIcon className="contactUS-icons" />{" "}
          Yeshwanthsinha143@gmail.com
        </div>
        <div className="contactUS-icons-wrapper">
          <LocationOnIcon className="contactUS-icons" />Hyderabad, Telangana

        </div>
        <div>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="contactUS-icons" />
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="contactUS-icons" />
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon className="contactUS-icons" />
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="contactUS-icons" />
          </a>
        </div>
      </div>

      <div>
        <h3 className="conatctus_services">Quick Shop</h3>
        <div>Wedding Collections</div>
        <div>Skirts</div>
        <div>Tops</div>
        <div>Jeans</div>
        <div>Sarees</div>
      </div>
      <div className="logo-social-wrapper">
      <h3 className="conatctus_services">Info</h3>
        <div>Shipping Info</div>
        <div>Returns Info</div>
        <div>Privacy Policy</div>
        <div>Terms of Services</div>
      </div>
    </div>
    <div className="contactus-secondchild">
      Copyright © 2024 | Powered by Deepthi Mounika fashion wear A brand for complete ladies wear
    </div>
  </div>
  )
}

export default Footer
