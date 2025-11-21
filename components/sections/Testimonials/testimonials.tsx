import { SectionHeader } from "@/components/common/SectionHeader/SectionHeader";
import Image from "next/image";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Soonbong K.",
      role: "CTO",
      company: "TechNova",
      companyLogo: "/images/testimonial-company-logo.png",
      text: "The STL team is great, I totally recommend them for a job well done, with a proactive attitude and organized approach. I am impressed by their dedication and abilities. Will surely rehire. Thank you guys!",
      avatar: "/images/testimonial-dummy-man.png",
    },
    {
      id: 2,
      name: "Stephen H.",
      role: "Product Manager",
      company: "Byte Insights",
      companyLogo: "/images/testimonial-company-logo.png",
      text: "They transformed our platform into a fast, scalable product, boosting performance and efficiency. With their innovative solutions, we can now handle higher traffic while ensuring a seamless user experience.",
      avatar: "/images/testimonial-dummy-man.png",
    },
    {
      id: 3,
      name: "George B.",
      role: "CTO",
      company: "Egg Heads Club",
      companyLogo: "/images/testimonial-company-logo.png",
      text: "Excellent work by the team. They understood the requirements and did a good job of translating to UI design without need to repeat the requirements. Team responded well to feedback and was able to replicate the ask when provided with suitable examples. Look forward to working with the team again!.",
      avatar: "/images/testimonial-dummy-man.png",
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
                <p className="text-gray-700 text-md md:text-md leading-8">
                  {item.text}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between">
                {/* User */}
                <div className="flex items-center gap-3">
                  {/* <Image
                    src={item.avatar}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-md object-cover"
                  /> */}
                  <div>
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-500/50">{item.role}</p>
                  </div>
                </div>

                {/* Company */}
                  {item.company}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
