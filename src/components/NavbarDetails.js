import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaLessThan } from 'react-icons/fa';
import { BiSolidMicrophone } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';

const CustomNavbar = () => (
  <Navbar className="flex justify-between items-center p-2 md:pr-20 md:pl-20 bg-sky-700 text-white text-lg">
    <Navbar.Brand as={NavLink} to="/" className="flex gap-1 items-center text-white">
      <FaLessThan />
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link as={NavLink} to="/" className="font-light text-white">
        Anime Details
      </Nav.Link>
    </Nav>
    <div className="flex gap-4 items-center text-white">
      <BiSolidMicrophone style={{ color: 'white' }} />
      <FiSettings style={{ color: 'white' }} />
    </div>
  </Navbar>
);

export default CustomNavbar;
