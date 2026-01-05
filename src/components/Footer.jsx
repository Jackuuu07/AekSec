import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 px-10 pt-16 pb-8 text-gray-500">
      <div className="max-w-7xl mx-auto">

        {/* ===== Top Row ===== */}
        <div className="flex flex-col md:flex-row justify-between gap-10 cursor-pointer">

          {/* Left Links */}
          <div className="flex flex-wrap gap-6 text-sm font-medium">
            <Link to="/about" className="hover:text-blue-600">About</Link>
            <Link to="/about" className="hover:text-blue-600">Careers</Link>
            <Link to="/about" className="hover:text-blue-600">Contact</Link>
            <Link to="/about" className="hover:text-blue-600">
              Connect with AekSec
            </Link>
          </div>

          {/* Right Social Icons */}
          <div className="flex gap-5 items-center">
            <Link to="/about" className="hover:text-blue-600 transition">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link to="/about" className="hover:text-blue-600 transition">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link to="/about" className="hover:text-blue-600 transition">
              <Twitter className="w-5 h-5" />
            </Link>

            {/* Threads & X */}
            <Link to="/about" className="font-semibold hover:text-blue-600 transition">
              Threads
            </Link>
            <Link to="/about" className="font-semibold hover:text-blue-600 transition">
              X
            </Link>
          </div>

        </div>

        {/* ===== Divider ===== */}
        <hr className="my-10 border-gray-200" />

        {/* ===== Bottom Row ===== */}
        <div className="flex flex-col md:flex-row justify-between gap-6 text-sm">

          {/* Legal Links */}
          <div className="flex flex-wrap gap-6 cursor-pointer">
            <Link to="/about" className="hover:text-blue-600">Feedback</Link>
            <Link to="/about" className="hover:text-blue-600">Privacy</Link>
            <Link to="/about" className="hover:text-blue-600">Cookies</Link>
            <Link to="/about" className="hover:text-blue-600">Help</Link>
            <Link to="/about" className="hover:text-blue-600">
              Terms & Conditions
            </Link>
          </div>

          {/* Copyright */}
          <div>
            © 2025 AekSec Systems, Inc.
          </div>

        </div>

      </div>
    </footer>
  );
}
