import React from 'react';
import Image from 'next/image'; // Added Next.js Image import

const Footercontact = () => {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DK EXPORTING</h3>
            <p className="text-green-100">Your Trusted Partner in Global Trade</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-green-100 hover:text-white transition-colors">About</a></li>
              <li><a href="#products" className="text-green-100 hover:text-white transition-colors">Products</a></li>
              <li><a href="#services" className="text-green-100 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-green-100 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/d-k-exporting/" className="bg-green-700 hover:bg-green-600 p-2 rounded-full transition-colors">
                <Image 
                  className="mix-blend-screen w-14" 
                  src="/linkedin.jpeg" 
                  alt="LinkedIn Logo" 
                  width={56} // Assuming w-14 = 56px (14 * 4 based on Tailwind default)
                  height={56} // Assuming a square image
                />
              </a>
              {/* <a href="#" className="bg-green-700 hover:bg-green-600 p-2 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="bg-green-700 hover:bg-green-600 p-2 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a> */}
            </div>
          </div>
        </div>
        <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-100">
          <p>© {new Date().getFullYear()} DK Exporting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footercontact;