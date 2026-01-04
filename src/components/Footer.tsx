import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">AeThex</h3>
            <p className="text-gray-600 text-sm">
              Enterprise-grade API platform for modern developers.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">API Reference</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Status</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Privacy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Terms</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm text-center">
            © 2024 AeThex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
