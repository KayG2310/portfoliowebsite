import {
    FiCode,
    FiCpu,
    FiTarget,
    FiUsers,
    FiAward,
  } from "react-icons/fi";
  import { motion } from "framer-motion";
  const About = () => {
    const categories = [
      {
        title: "Software Development",
        desc: "Passionate about building scalable applications and solving complex problems through coding. Have created projects using full-stack development with modern technologies.",
        icon: <FiCode />,
      },
      {
        title: "Machine Learning & AI",
        desc: "As a part of my major, I have worked on projects involving research learnings and buzzing domains like Computer Vision.",
        icon: <FiCpu />,
      },
      {
        title: "Problem Solving",
        desc: "Strong foundation in data structures and algorithms with regular practice in solving logical problems. Have solved over 600 problems across platforms like Leetcode and Codeforces, classified pupil on the latter. ",
        icon: <FiTarget />,
      },
      {
        title: "Leadership",
        desc: "Served as Assistant Internship Coordinator, Vice President of Society of Women Engineers-IIT Ropar, Branch Representative, Event Head and Sponsorship Head to gain exposure to leadership and management.",
        icon: <FiUsers />,
      },
      {
        title: "Achievements",
        desc: "Besides academic accolades, namely AIR 2399 in JEE Mains and AIR 4623 in JEE Advanced, receiving distinction in Cambridge Assessment of English C2 Level, winning CBSE Haryana Science Quiz, have taken part and won silver medal in Odyssey of the Mind, a dramatics competition.",
        icon: <FiAward />,
      },
    ];
  
    return (
        <section id = "about" className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-4xl font-semibold mb-16">About</h2>
    
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
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
                {/* Icon + Accent */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-appleBlue text-xl">
                    {item.icon}
                  </span>
                  <span className="h-px w-12 bg-appleBlue/30"></span>
                </div>
                <h3 className="text-xl font-medium mb-3">
              {item.title}
            </h3>

            <p className="text-appleGray leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );    
  };
  
  export default About;
  