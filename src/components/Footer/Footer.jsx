import styled from 'styled-components'
import './Footer.css'
  
function Footer() {
    return (
      
      <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li><a href="https://www.juniorstock.it/about-us">about us</a></li>
              <li><a href="#">our services</a></li>
              <li><a href="#">privacy policy</a></li>
              <li><a href="#">affiliate program</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">shipping</a></li>
              <li><a href="#">returns</a></li>
              <li><a href="#">order status</a></li>
              <li><a href="#">payment options</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>online shop</h4>
            <ul>
              <li><a href="#">watch</a></li>
              <li><a href="/cart">bag</a></li>
              <li><a href="#">shoes</a></li>
              <li><a href="#">dress</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/people/Juniorinstock/100067192835936/"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fjuniorinstock"><i className="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/juniorinstock/"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
   </footer>
    );
  }

export default Footer