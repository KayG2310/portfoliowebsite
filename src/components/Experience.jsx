import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineering Intern (Incoming)",
      company: "Google",
      duration: "May 2026 - July 2026",
      points: [
      ],
      logo: "/experience/Google_2015_logo.svg.webp", // optional for now
      alt: "Company Logo",
      current: true,
    },
    {
        role: "Tech Intern",
        company: "Haleon",
        duration: "December 2024 - February 2025",
        points: [
            "Visually optimized the ServiceNow Service Portal, enhancing user experience through JavaScript solutions."
        ],
        logo: "/experience/haleon.png", // optional for now
        alt: "Company Logo",
        current: true,
      },
    // Add more experiences here later
  ];

  return (
    <section id = "experience" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-semibold mb-16">Experience</h2>

      <div className="space-y-14">
        {experiences.map((item, index) => (
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
            
            <div className="relative flex items-start justify-between pl-10">
              {/* Gradient timeline */}
              <div className="absolute left-[5px] top-0 h-full w-px bg-gradient-to-b from-appleBlue/40 via-gray-200 to-transparent"></div>

              {/* Ring marker */}
              <span
                className={`absolute left-0 top-2 w-3 h-3 rounded-full border
                ${
                  item.current
                    ? "border-appleBlue bg-white"
                    : "border-gray-300 bg-white"
                }`}
              ></span> 
              {/* Content */}
              <div className="max-w-xl">
                <h3 className="text-xl font-medium">
                  {item.role}
                </h3>

                <p className="text-appleGray mt-2">
                  {item.company} · {item.duration}
                </p>

                <ul className="mt-4 space-y-2 text-appleGray text-sm leading-relaxed">
                  {item.points.map((point, i) => (
                    <li key={i} className="relative pl-4">
                      <span className="absolute left-0 top-2 w-1 h-1 bg-appleGray rounded-full"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Logo */}
              {item.logo && (
                <img
                  src={item.logo}
                  alt={item.alt}
                  className="w-24 h-24 object-contain opacity-70 hidden sm:block"
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
