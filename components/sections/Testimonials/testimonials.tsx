import { SectionHeader } from "@/components/common/SectionHeader/SectionHeader";
import Image from "next/image";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Rana Zaeem",
      role: "Freelancer",
      company: "AYSHM",
      companyLogo: "/images/testimonial-company-logo.png",
      text: "Saylani Tech helped us transform our outdated platform into a fast, scalable product. Their attention to detail and timely delivery exceeded expectations.",
      avatar: "/images/testimonial-dummy-man.png", // replace with your actual avatar path
    },
    {
      id: 2,
      name: "Rana Zaeem",
      role: "Freelancer",
      company: "AYSHM",
      companyLogo: "/images/testimonial-company-logo.png",
      text: "Saylani Tech helped us transform our outdated platform into a fast, scalable product. Their attention to detail and timely delivery exceeded expectations.",
      avatar: "/images/testimonial-dummy-man.png", // replace with your actual avatar path
    },
    {
      id: 3,
      name: "Rana Zaeem",
      role: "Freelancer",
      company: "AYSHM",
      companyLogo: "/images/testimonial-company-logo.png",
      text: "Saylani Tech helped us transform our outdated platform into a fast, scalable product. Their attention to detail and timely delivery exceeded expectations.",
      avatar: "/images/testimonial-dummy-man.png", // replace with your actual avatar path
    },
  ];

  return (
    <section className="w-full py-5 md:py-20">
      <div className="max-w-8xl mx-auto px-6 lg:px-16">
        <SectionHeader
          title={
            <>
              Trusted by Teams Who Believe in What We
              <br className="hidden md:block" />
              Build
            </>

          }
          description="Hear directly from our clients about their experiences working with us and the impact we've made together."  
          layout="split"
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 md:mt-10">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#f5f5f5] rounded-2xl p-8 px-6  flex flex-col justify-between duration-300"
            >
              <div>
                <div className="text-6xl mb-8">

                  <Image
                    src="/images/testimonial-doublequote.png"
                    alt="Quote"
                    width={20}
                    height={20}
                  />
                </div>
                <p className="text-gray-700 text-2xl leading-8">
                  {item.text}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between">
                {/* User */}
                <div className="flex items-center gap-3">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-md object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-500/50">{item.role}</p>
                  </div>
                </div>

                {/* Company */}
                <div className="border border-gray-500 rounded-lg px-4 py-2 text-md text-gray-400">
                  <Image
                    src={item.companyLogo}
                    alt={item.company}
                    width={20}
                    height={20}
                    className="inline-block mr-1"
                  />
                  {item.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
