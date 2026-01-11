// import iitrprLogo from "../assets/education/iitrpr.svg";
// import amityLogo from "../assets/education/amity.svg";
import { motion } from "framer-motion";

const Education = () => {
  const categories = [
    {
      title: "B.Tech in Artificial Intelligence and Data Engineering",
      institution: "Indian Institute of Technology, Ropar",
      grade: "CGPA: 8.73 (Till 5th semester)",
      period: "2023 – 2027",
      logo: "/education/iitrpr.svg",
      alt: "IIT Ropar",
    },
    {
      title: "Senior Secondary (Grade 12)",
      institution: "Amity International School",
      grade: "Percentage: 97.6",
      period: "2021 – 2023",
      logo: "/education/amity.svg",
      alt: "Amity International School",
    },
    {
      title: "High School (Grade 10)",
      institution: "Amity International School",
      grade: "Percentage: 99.6",
      period: "2017 – 2021",
      logo: "/education/amity.svg",
      alt: "Amity International School",
    },
  ];

  return (
    <section id = "education" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-semibold mb-16">Education</h2>

      <div className="space-y-14">
        {categories.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.1,
            }}
            viewport={{ once: false }}
          >
            <div className="relative flex items-start justify-between pl-8 border-l border-gray-200">
              <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-appleBlue rounded-full"></span>

              <div>
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="text-appleGray mt-3">{item.institution}</p>
                <p className="text-appleGray mt-2">{item.grade}</p>
                <p className="text-sm text-appleGray mt-1">{item.period}</p>
              </div>

              <img
                src={item.logo}
                alt={item.alt}
                className="w-12 h-12 object-contain opacity-70 hidden sm:block"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
