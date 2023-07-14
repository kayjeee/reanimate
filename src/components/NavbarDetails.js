import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaLessThan } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { BiSolidMicrophone } from 'react-icons/bi';

const CustomNavbar = () => (
  <Navbar className="flex justify-between items-center p-2 md:pr-20 md:pl-20 bg-sky-700 text-white text-lg">
    {/* Brand/logo section */}
    <Navbar.Brand as={NavLink} to="/" className="flex gap-1 items-center text-white">
      <FaLessThan />
    </Navbar.Brand>

    {/* Navigation links */}
    <Nav className="mr-auto">
      <Nav.Link as={NavLink} to="/" className="font-light text-white">
        Anime Details
      </Nav.Link>
    </Nav>

    {/* Right section */}
    <div className="flex items-center text-white">
      {/* Extra div container */}
      <div className="flex gap-4 items-center">
        {/* Microphone icon */}
        <BiSolidMicrophone style={{ color: 'white' }} />
        {/* Settings icon */}
        <FiSettings style={{ color: 'white' }} />
      </div>
    </div>
  </Navbar>
);

export default CustomNavbar;
