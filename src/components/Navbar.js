import { FaLessThan } from 'react-icons/fa';
import { BiSolidMicrophone } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';

const Navbar = () => (
  <nav className="flex justify-between items-center p-2 md:pr-20 md:pl-20 bg-sky-700 text-white text-lg">
    {/* Left section */}
    <div className="flex gap-1 items-center">
      <div>
        {' '}
        {/* Add an additional <div> wrapper */}
        <FaLessThan />
      </div>
      {/* Year */}
      <h2 className="font-semibold">2023</h2>
    </div>
    {/* Middle section */}
    {/* Replaced <span> with <h2> heading */}
    <h2 className="font-light">Most Animetions</h2>
    {/* Right section */}
    <div className="flex gap-4 items-center">
      {/* Microphone icon */}
      <BiSolidMicrophone />
      {/* Settings icon */}
      <FiSettings />
    </div>
  </nav>
);

export default Navbar;
