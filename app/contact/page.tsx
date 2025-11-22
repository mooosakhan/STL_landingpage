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
                    href="https://instagram.com/saylanitech"
                    className="  rounded flex items-center justify-center  transition-colors"
                    aria-label="Twitter"
                  >
                    {instagramSvg}
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

const instagramSvg = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.0276 2C14.1526 2.003 14.7236 2.009 15.2166 2.023L15.4106 2.03C15.6346 2.038 15.8556 2.048 16.1226 2.06C17.1866 2.11 17.9126 2.278 18.5496 2.525C19.2096 2.779 19.7656 3.123 20.3216 3.678C20.8303 4.17773 21.2238 4.78247 21.4746 5.45C21.7216 6.087 21.8896 6.813 21.9396 7.878C21.9516 8.144 21.9616 8.365 21.9696 8.59L21.9756 8.784C21.9906 9.276 21.9966 9.847 21.9986 10.972L21.9996 11.718V13.028C22.002 13.7574 21.9944 14.4868 21.9766 15.216L21.9706 15.41C21.9626 15.635 21.9526 15.856 21.9406 16.122C21.8906 17.187 21.7206 17.912 21.4746 18.55C21.2238 19.2175 20.8303 19.8223 20.3216 20.322C19.8219 20.8307 19.2171 21.2242 18.5496 21.475C17.9126 21.722 17.1866 21.89 16.1226 21.94L15.4106 21.97L15.2166 21.976C14.7236 21.99 14.1526 21.997 13.0276 21.999L12.2816 22H10.9726C10.2429 22.0026 9.51312 21.9949 8.78359 21.977L8.58959 21.971C8.3522 21.962 8.11487 21.9517 7.87759 21.94C6.81359 21.89 6.08759 21.722 5.44959 21.475C4.78242 21.2241 4.17803 20.8306 3.67859 20.322C3.16954 19.8224 2.7757 19.2176 2.52459 18.55C2.27759 17.913 2.10959 17.187 2.05959 16.122L2.02959 15.41L2.02459 15.216C2.00616 14.4868 1.99782 13.7574 1.99959 13.028V10.972C1.99682 10.2426 2.00416 9.5132 2.02159 8.784L2.02859 8.59C2.03659 8.365 2.04659 8.144 2.05859 7.878C2.10859 6.813 2.27659 6.088 2.52359 5.45C2.77529 4.7822 3.16982 4.17744 3.67959 3.678C4.17875 3.16955 4.78278 2.77607 5.44959 2.525C6.08759 2.278 6.81259 2.11 7.87759 2.06C8.14359 2.048 8.36559 2.038 8.58959 2.03L8.78359 2.024C9.51278 2.00623 10.2422 1.99857 10.9716 2.001L13.0276 2ZM11.9996 7C10.6735 7 9.40174 7.52678 8.46406 8.46447C7.52638 9.40215 6.99959 10.6739 6.99959 12C6.99959 13.3261 7.52638 14.5979 8.46406 15.5355C9.40174 16.4732 10.6735 17 11.9996 17C13.3257 17 14.5974 16.4732 15.5351 15.5355C16.4728 14.5979 16.9996 13.3261 16.9996 12C16.9996 10.6739 16.4728 9.40215 15.5351 8.46447C14.5974 7.52678 13.3257 7 11.9996 7ZM11.9996 9C12.3936 8.99993 12.7837 9.07747 13.1477 9.22817C13.5117 9.37887 13.8424 9.5998 14.1211 9.87833C14.3997 10.1569 14.6207 10.4875 14.7715 10.8515C14.9224 11.2154 15 11.6055 15.0001 11.9995C15.0002 12.3935 14.9226 12.7836 14.7719 13.1476C14.6212 13.5116 14.4003 13.8423 14.1218 14.121C13.8432 14.3996 13.5126 14.6206 13.1486 14.7714C12.7847 14.9223 12.3946 14.9999 12.0006 15C11.2049 15 10.4419 14.6839 9.87927 14.1213C9.31666 13.5587 9.00059 12.7956 9.00059 12C9.00059 11.2044 9.31666 10.4413 9.87927 9.87868C10.4419 9.31607 11.2049 9 12.0006 9M17.2506 5.5C16.9191 5.5 16.6011 5.6317 16.3667 5.86612C16.1323 6.10054 16.0006 6.41848 16.0006 6.75C16.0006 7.08152 16.1323 7.39946 16.3667 7.63388C16.6011 7.8683 16.9191 8 17.2506 8C17.5821 8 17.9001 7.8683 18.1345 7.63388C18.3689 7.39946 18.5006 7.08152 18.5006 6.75C18.5006 6.41848 18.3689 6.10054 18.1345 5.86612C17.9001 5.6317 17.5821 5.5 17.2506 5.5Z" fill="black" />
  </svg>
)