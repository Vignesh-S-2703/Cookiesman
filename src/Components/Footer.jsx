import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
         <footer>
        <div class="footer-container">
            <div class="footer-links">
                <div class="column">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Chocolates</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Stores</a></li>
                        <li><a href="#">Track Your Order</a></li>
                        <li><a href="#">My Account</a></li>
                    </ul>
                </div>
                <div class="column">
                    <h3>Bestseller</h3>
                    <ul>
                        <li><a href="#">Almond Fingers</a></li>
                        <li><a href="#">Chocolate Gift Box</a></li>
                        <li><a href="#">Premium Chocolates</a></li>
                        <li><a href="#">Almond Biscotti</a></li>
                        <li><a href="#">Heart Shaped Chocolates</a></li>
                        <li><a href="#">Black Currant Cookies</a></li>
                    </ul>
                </div>
                <div class="column">
                    <h3>Gifting</h3>
                    <ul>
                        <li><a href="">All Gifting Options</a></li>
                        <li><a href="">Personalized Chocolates</a></li>
                        <li><a href="">Birthday Gifting</a></li>
                        <li><a href="">Best Wishes Gifts</a></li>
                        <li><a href="">Anniversary Gifts</a></li>
                        <li><a href="">Thank You Gifts</a></li>
                    </ul>
                </div>
                <div class="column contact">
                    <h3>Get in Touch</h3>
                    <p style={{color: 'white'}}><i class="fas fa-phone"></i> +91 99529 72101</p>
                    <h3 style={{marginTop: '20px'}}>Follow Us</h3>
                    <div class="social-icons">
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaYoutube /></a>
                        <a href="#"><FaTwitter /></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p><a href="#">Privacy Policy</a> | <a href="#">Refund Policy</a> | <a href="#">Terms</a> | <a href="#">Track Your Order</a></p>
                <p style={{color: 'white', marginTop: '30px'}}>&copy; 2025 CookiesMan | Powered by VIGNESH S</p>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer