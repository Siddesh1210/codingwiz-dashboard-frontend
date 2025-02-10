import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import resmicLogo from '../assets/images/resmic_logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();


  return (
    <nav className="bg-white">
      <div className="flex justify-between items-center p-4 shadow-md">
        {/* Left: Logo and Title */}
        <div className="flex items-center space-x-3">
          <img src={resmicLogo} width="50px"/>
          <span className="text-2xl inline font-extrabold text-primary">Resmic</span>
        </div>

        {/* Right: Icons for md+ screens */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="px-3 py-1 rounded-xl bg-gray-200 text-gray-500 mx-2 text-md">Resmic Mint <span className="ml-6 text-yellow-500 font-semibold">100 <i className="bi bi-coin"></i></span></div>
          <div className="text-md text-gray-700 cursor-pointer font-semibold"><i className="bi bi-headphones"></i> Support</div>
          <div className="text-md text-gray-700 cursor-pointer font-semibold"><i className="bi bi-pencil"></i> Feedback</div>
          <i className="bi bi-person-circle text-2xl mr-3 cursor-pointer text-gray-500"></i>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="flex space-x-2 md:space-x-4 lg:hidden items-center">
            {/* <div className="px-3 py-1 rounded-xl bg-gray-200 text-gray-500 mx-2 text-lg">Resmic Mint <span className="md:ml-6 text-yellow-500 font-semibold">100 <i className="bi bi-coin"></i></span></div> */}
            <i className="bi bi-person-circle text-2xl mr-3 cursor-pointer text-gray-500"></i>
          <button onClick={() => setIsOpen(!isOpen)}>
            <i className="bi bi-list text-3xl text-primary"></i>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed z-10 top-0 left-0 h-full w-64 bg-gray-100 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 lg:hidden`}
      >
        <button className="absolute top-4 right-4 space-x-2" onClick={() => setIsOpen(false)}>
            <i className="bi bi-x text-4xl text-gray-800"></i>
        </button>
        <ul className="flex flex-col space-y-4 p-6 mt-8">
          <Link onClick={() => setIsOpen(false)} to="/" className={`hover:bg-gray-200 p-2 rounded text-xl cursor-pointer ${ location.pathname === "/" ? "bg-primary text-white" : "text-primary" }`}><i className="bi bi-grid"></i> &nbsp;Home</Link>
          <Link onClick={() => setIsOpen(false)} to="/payment" className={`hover:bg-gray-200 p-2 rounded text-xl cursor-pointer ${ location.pathname === "/payment" ? "bg-primary text-white" : "text-primary" }`}><i className="bi bi-wallet2"></i> &nbsp;Payment</Link>
          <Link onClick={() => setIsOpen(false)} to="/customer" className={`hover:bg-gray-200 p-2 rounded text-xl cursor-pointer ${ location.pathname === "/customer" ? "bg-primary text-white" : "text-primary" }`}><i className="bi bi-list-columns"></i> &nbsp;Customer</Link>
          <Link onClick={() => setIsOpen(false)} to="/payment-link" className={`hover:bg-gray-200 p-2 rounded text-xl cursor-pointer ${ location.pathname === "/payment-link" ? "bg-primary text-white" : "text-primary" }`}><i className="bi bi-list-columns"></i> &nbsp;Payment Links</Link>
          <Link onClick={() => setIsOpen(false)} to="/invoice" className={`hover:bg-gray-200 p-2 rounded text-xl cursor-pointer ${ location.pathname === "/invoice" ? "bg-primary text-white" : "text-primary" }`}><i className="bi bi-list-columns"></i> &nbsp;Invoice</Link>
          <Link onClick={() => setIsOpen(false)} to="/coupon" className={`hover:bg-gray-200 p-2 rounded text-xl cursor-pointer ${ location.pathname === "/coupon" ? "bg-primary text-white" : "text-primary" }`}><i className="bi bi-graph-up"></i> &nbsp;Coupons</Link>
          <Link onClick={() => setIsOpen(false)} to="/developer" className={`hover:bg-gray-200 p-2 rounded text-xl cursor-pointer ${ location.pathname === "/developer" ? "bg-primary text-white" : "text-primary" }`}><i className="bi bi-gear"></i> &nbsp;Developer</Link>
          <Link onClick={() => setIsOpen(false)} to="/subscription" className={`hover:bg-gray-200 p-2 rounded text-xl cursor-pointer ${ location.pathname === "/subscription" ? "bg-primary text-white" : "text-primary" }`}><i className="bi bi-gear"></i> &nbsp;Subscription</Link>
          <Link onClick={() => setIsOpen(false)} to="/setting" className={`hover:bg-gray-200 p-2 rounded text-xl cursor-pointer ${ location.pathname === "/setting" || location.pathname === "/setting/account-detail" || location.pathname === "/support/business-detail" ? "bg-primary text-white" : "text-primary" }`}><i className="bi bi-gear"></i> &nbsp;Settings</Link>
          <a onClick={() => setIsOpen(false)} href= "mailto:support@resmic.com" className={`p-2 rounded text-xl cursor-pointer text-primary`}><i className="bi bi-gear"></i> &nbsp;Support</a>
        </ul>
      </div>
    </nav>
  );
}


export default Navbar;
