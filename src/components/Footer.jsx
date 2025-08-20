import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Logo and description */}
        <div>
          <img
            src={assets.logo}
            alt="Logo"
            className="w-36 mb-6"
          />
          <p className="text-base md:text-lg leading-7">
            We deliver fresh groceries and snacks straight to your door. Trusted
            by thousands, we aim to make your shopping experience simple and
            affordable.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:pl-8">
          <h3 className="text-lg font-semibold text-primary mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-primary">Home</a></li>
            <li><a href="/" className="hover:text-primary">Best Sellers</a></li>
            <li><a href="/" className="hover:text-primary">Offers & Deals</a></li>
            <li><a href="/" className="hover:text-primary">Contact Us</a></li>
            <li><a href="/" className="hover:text-primary">FAQs</a></li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="md:pl-8">
          <h3 className="text-lg font-semibold text-primary mb-4">Need help?</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-primary">Delivery Information</a></li>
            <li><a href="/" className="hover:text-primary">Return & Refund Policy</a></li>
            <li><a href="/" className="hover:text-primary">Payment Methods</a></li>
            <li><a href="/" className="hover:text-primary">Track your Order</a></li>
            <li><a href="/" className="hover:text-primary">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="md:pl-8">
          <h3 className="text-lg font-semibold text-primary mb-4">Follow Us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-primary">Instagram</a></li>
            <li><a href="/" className="hover:text-primary">Twitter</a></li>
            <li><a href="/" className="hover:text-primary">Facebook</a></li>
            <li><a href="/" className="hover:text-primary">YouTube</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-300 text-center py-4 text-sm">
        Copyright © 2025 Gully Kart.dev — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

