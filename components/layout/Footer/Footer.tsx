"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function Footer() {
  const Router = useRouter();

  return (
    <footer
      className="w-full text-white py-12 px-6 sm:px-10 md:px-16 lg:px-20 rounded-2xl bg-cover bg-center relative md:overflow-hidden scale-100 md:scale-[98%] "
      style={{
        backgroundImage: "url('/images/footer-gradient.png')",
      }}>
      <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
        {/* Left Section */}
        <div className="flex flex-col justify-between gap-8 lg:w-1/2">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug mb-6">
              Let’s Build the <br /> Future Together
            </h2>
            <button
              onClick={() => Router.push('/contact')}
              className="bg-white text-black px-6 py-2.5 rounded-full font-medium hover:bg-gray-100 transition">
              Get Started
            </button>
          </div>

          <div className="flex items-center gap-3 pt-4">
            <Image
              src="/images/logo-stl.png"
              alt="Salyani Tech Logo"
              width={28}
              height={28}
              className="shrink-0"
            />
            <span className="font-semibold tracking-wide text-sm sm:text-base">
              SALYANI TECH
            </span>
          </div>
        </div>

        {/* Right Section - Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 md:gap-16 text-sm w-full lg:w-2/3">
          {/* Features */}
          <div>
            <h4 className="font-semibold mb-3 text-base">Features</h4>
            <ul className="space-y-2 text-gray-200">
              <li><a href="#" className="hover:text-white transition">Plan</a></li>
              <li><a href="#" className="hover:text-white transition">Build</a></li>
              <li><a href="#" className="hover:text-white transition">Insights</a></li>
              <li><a href="#" className="hover:text-white transition">Customer Requests</a></li>
              <li><a href="#" className="hover:text-white transition">Linear Asks</a></li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-3 text-base">Product</h4>
            <ul className="space-y-2 text-gray-200">
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Method</a></li>
              <li><a href="#" className="hover:text-white transition">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition">Changelog</a></li>
              <li><a href="#" className="hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition">Download</a></li>
              <li><a href="#" className="hover:text-white transition">Switch</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3 text-base">Company</h4>
            <ul className="space-y-2 text-gray-200">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Customers</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Now</a></li>
              <li><a href="#" className="hover:text-white transition">Readme</a></li>
              <li><a href="#" className="hover:text-white transition">Quality</a></li>
              <li><a href="#" className="hover:text-white transition">Brand</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="relative z-10 mt-12 border-t border-white/20 pt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} SALYANI TECH. All rights reserved.
      </div>
    </footer>
  );
}
