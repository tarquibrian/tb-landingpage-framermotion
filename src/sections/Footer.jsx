import React from "react";
import BrandName from "../components/BrandName";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { AiFillInstagram, AiFillLinkedin, AiOutlineSend } from "react-icons/ai";
import "../styles/sections/Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container">
        <div className="main-container">
          <div className="news-letter">
            <BrandName isFooter={true} />
            <p>
              Join our newsletter to get updated with our Offers & Discounts.
            </p>
            <div className="mail">
              <input type="email" placeholder="Please enter your email" />
              <button>
                <AiOutlineSend />
              </button>
            </div>
          </div>
          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Testimonials</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Portfolio</a>
              </li>
              <li>
                <a href="">Career</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Terms & Conditions</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="industries">
            <h3>Industries</h3>
            <ul>
              <li>
                <a href="#">Website Development</a>
              </li>
              <li>
                <a href="#">Mobile App Development</a>
              </li>
              <li>
                <a href="#">Website Design</a>
              </li>
              <li>
                <a href="#">Mobile App Design</a>
              </li>
              <li>
                <a href="#">Digital Marketing</a>
              </li>
              <li>
                <a href="#">Graphic Design</a>
              </li>
              <li>
                <a href="#">Ios App developmen</a>
              </li>
            </ul>
          </div>
          <div className="touch">
            <h3>Get in touch</h3>
            <div className="touch-section">
              <div className="icon">
                <FaPhoneAlt />
              </div>
              <div className="details">
                <div className="detail-name">Phone</div>
                <div className="detail-content">
                  <a href="#">+591 63909428</a>
                </div>
              </div>
            </div>
            <div className="touch-section">
              <div className="icon">
                <MdEmail />
              </div>
              <div className="details">
                <div className="detail-name">Email</div>
                <div className="detail-content">
                  <a href="#">tarquibrian@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="touch-section">
              <div className="icon">
                <ImLocation />
              </div>
              <div className="details">
                <div className="detail-name">Location</div>
                <div className="detail-content">
                  <a href="#">av costanera Cbba</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="copy">
            <p>Copyright c 2022. All Rights Reserved.</p>
          </div>
          <div className="icons">
            <div className="icon">
              <a href="#">
                <FaFacebookF />
              </a>
            </div>
            <div className="icon">
              <a href="#">
                <AiFillInstagram />
              </a>
            </div>
            <div className="icon">
              <a href="#">
                <AiFillLinkedin />
              </a>
            </div>
            <div className="icon">
              <a href="#">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
