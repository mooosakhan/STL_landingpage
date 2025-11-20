"use client";
import React, { useState } from 'react';
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import { FooterCTA } from '@/components/common/FooterCTA/FooterCTA';
import { Navigation } from '@/components/layout/Navigation/Navigation';
import { Footer } from '@/components/layout/Footer/Footer';
import { PageHeader } from '@/components/common/Header/PageHeader';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectDetails: '',
    interest: 'UI/UX Design'
  });

  const [selectedInterest, setSelectedInterest] = useState("UI/UX Design");

  const interests = [
    "Websites",
    "UI/UX Design",
    "AI Solutions",
    "Graphic Design",
    "Apps",
    "Other",
  ];

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Form submitted! Check console for details.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInterestClick = (interest: string) => {
    setFormData({ ...formData, interest });
  };

  return (
    <>
      <Navigation theme="light" />
      <div className="min-h-screen  px-6 md:px-16 py-5 ">
        <div className="mx-auto space-y-10">
          <PageHeader
            title="Let's Create Something Amazing Together"
            subtitle="Whether you have a project in mind or just want to say hello, we're here to listen. Fill out the form below, and let's start a conversation about how we can bring your ideas to life with innovative digital solutions."
          />


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Form */}
            <div>
              <div>
                <div className="mb-8">
                  <label className="block text-gray-900 font-semibold mb-4 text-lg">
                    Iam Interested in
                  </label>


                  <div className="flex flex-wrap gap-3 sm:gap-4 mb-8">
                    {interests.map((item) => (
                      <button
                        key={item}
                        onClick={() => setSelectedInterest(item)}
                        className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-200 ${selectedInterest === item
                          ? "bg-[#4B0F31] text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>



                </div>

                <form className="space-y-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full text-lg sm:text-2xl placeholder:text-gray-900 font-medium border-b-2 border-gray-400 focus:border-[#4B0F31] outline-none py-4 bg-transparent"
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full text-lg sm:text-2xl placeholder:text-gray-900 font-medium border-b-2 border-gray-400 focus:border-[#4B0F31] outline-none py-4 bg-transparent"
                  />

                  <input
                    type="text"
                    placeholder="Phone No"
                    className="w-full text-lg sm:text-2xl placeholder:text-gray-900 font-medium border-b-2 border-gray-400 focus:border-[#4B0F31] outline-none py-4 bg-transparent"
                  />

                  <textarea
                    placeholder="Project Details"
                    className="w-full text-lg sm:text-2xl placeholder:text-gray-900 font-medium border-b-2 border-gray-400 focus:border-[#4B0F31] outline-none pt-4 bg-transparent"
                  />

                  <button
                    type="submit"
                    onClick={handleSubmit}

                    className="bg-[#4B0F31] text-lg sm:text-xl text-white mt-6 px-8 py-3 rounded-full hover:bg-[#3a0b26] transition-all w-full sm:w-auto"
                  >
                    Submit
                  </button>
                </form>



                <p className="mt-6 text-gray-600 text-sm">
                  We respond to all inquiries within 12–24 hours, Monday to Saturday.<br />
                  Tell us what you need — we'll take care of the rest.
                </p>
              </div>
            </div>

            {/* Right Column - Contact Info */}
            <div>
              <div className="mb-8">
                <h3 className="text-gray-900 font-semibold mb-3">Email Us</h3>
                <p className="text-gray-700 mb-1">rajpermuneeb@gmail.com</p>
                <p className="text-gray-700">muneeb.rehman@saylaniwelfare.com</p>
              </div>

              <div className="mb-8">
                <h3 className="text-gray-900 font-semibold mb-3">Contact US</h3>
                <p className="text-gray-700 mb-1">+92 3121196012</p>
                <p className="text-gray-700">+92 3065422880</p>
              </div>

              <div className="mb-8">
                <h3 className="text-gray-900 font-semibold mb-3">Meet us</h3>
                <p className="text-gray-700 mb-4">
                  23/A Block 7/8, Amir Khusro Road, C.P. & Berar Society<br />
                  Block B Shabbirabad, Karachi, Pakistan
                </p>
                <div className="w-full h-64 bg-gray-300 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3716.016748378157!2d67.0779093152417!3d24.880029399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f004da4f54d%3A0x44f9127c313c369!2sSaylani+Tech!5e0!3m2!1sen!2s!4v1699381672680!5m2!1sen!2s"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>

                </div>
              </div>

              <div>
                <h3 className="text-gray-900 font-semibold mb-3">Reach Us Out on</h3>
                <div className="flex gap-2">
                  <a
                    href="https://www.facebook.com/saylanitech"
                    className=" rounded flex items-center justify-center  transition-colors"
                    aria-label="Facebook"
                  >
                    {facebookSvg}
                  </a>
                  <a
                    href="https://www.linkedin.com/company/saylanitech"
                    className="  rounded flex items-center justify-center  transition-colors"
                    aria-label="LinkedIn"
                  >
                    {linkedinSvg}
                  </a>
                  <a
                    href="https://github.com/saylanitech"
                    className="  rounded flex items-center justify-center  transition-colors"
                    aria-label="Twitter"
                  >
                    {twitterSvg}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterCTA
          title="Shaping Better Digital Experiences for Everyone"
          subtitle="Contact us today to discuss your project and discover how we can help bring your vision to life with innovative digital solutions."
        />
      </div>
      <Footer />
    </>
  );
}

const facebookSvg = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_835_1732" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
      <path d="M24 0H0V24H24V0Z" fill="white" />
    </mask>
    <g mask="url(#mask0_835_1732)">
      <path d="M22 16.19C22 19.83 19.83 22 16.19 22H15C14.45 22 14 21.55 14 21V15.23C14 14.96 14.22 14.73 14.49 14.73L16.25 14.7C16.39 14.69 16.51 14.59 16.54 14.45L16.89 12.54C16.92 12.36 16.78 12.19 16.59 12.19L14.46 12.22C14.18 12.22 13.96 12 13.95 11.73L13.91 9.28C13.91 9.12 14.04 8.98001 14.21 8.98001L16.61 8.94C16.78 8.94 16.91 8.81001 16.91 8.64001L16.87 6.23999C16.87 6.06999 16.74 5.94 16.57 5.94L13.87 5.98001C12.21 6.01001 10.89 7.37 10.92 9.03L10.97 11.78C10.98 12.06 10.76 12.28 10.48 12.29L9.28 12.31C9.11 12.31 8.98001 12.44 8.98001 12.61L9.01001 14.51C9.01001 14.68 9.14 14.81 9.31 14.81L10.51 14.79C10.79 14.79 11.01 15.01 11.02 15.28L11.11 20.98C11.12 21.54 10.67 22 10.11 22H7.81C4.17 22 2 19.83 2 16.18V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81V16.19Z" fill="#2A2A2A" />
    </g>
  </svg>
)

const linkedinSvg = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="#2A2A2A" />
  </svg>
)

const twitterSvg = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.114 3H8.415L13.1325 9.747L18.795 3H20.4885L13.7775 10.671L21 21H15.702L10.7745 13.9545L4.692 21H3L10.1295 13.032L3.114 3Z" fill="#2A2A2A" />
  </svg>
)