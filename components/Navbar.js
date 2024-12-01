"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import logo from '../public/assets/images/logo.png';
import Image from 'next/image';


const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search submitted:", searchValue);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="nav-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            {/* Logo Section */}
            <Link href="/" className="nav-logo">
              <Image
                alt="One Ring Rentals"
                src={logo}
                width="200"
                height="100"
                className="d-inline-block align-top"
              />
            </Link>

            {/* Search Bar */}
            <div id="sb-search" className="sb-search">
              <form onSubmit={handleSearchSubmit}>
                <input
                  className="sb-search-input"
                  placeholder="Search..."
                  type="text"
                  value={searchValue}
                  onChange={handleSearchChange}
                  name="search"
                  id="search"
                />
                <input type="submit" className="sb-search-submit"/>
                  <i className="fa fa-search sb-icon-search"></i>
               
              </form>
            </div>

            {/* Navigation Bar */}
            <nav className="navbar">
              {/* Mobile Button for Navigation */}
              <button
                id="nav-mobile-btn"
                onClick={toggleMenu}
                aria-label="Toggle navigation"
              >
                <i className="fa fa-bars"></i>
              </button>

              {/* Navigation Links */}
              <ul className={`nav navbar-nav ${isMenuOpen ? "open" : ""}`}>
                <li>
                  <Link href="/">Find a Rental</Link>
                </li>
                <li>
                  <Link href="/Rentals">List your rental</Link>
                </li>
                <li>
                  <Link href ="#">Travel Guides</Link>
                </li>
                <li>
                  <Link href ="/regions">Regions</Link>
                </li>
                <li>
                  <Link href ="/news">News</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
