"use client";

interface IProps {
  address: string;
  phoneNo: string;
  email: string;
}
const Footer = ({ address, phoneNo, email }: IProps) => {
  return (
    <footer className="bg-green-400 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Address & Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <p>{address}</p>
          <p>Phone: {phoneNo}</p>
          <p>Email: {email}</p>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="hover:text-gray-300 transition">
              Facebook
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              Instagram
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              Twitter
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/privacy-policy"
                className="hover:text-gray-300 transition"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-gray-300 transition">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/support" className="hover:text-gray-300 transition">
                Customer Support
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-8 border-t border-gray-400 pt-4">
        © 2024 Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
