import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Database,
  Brain,
  Wrench,
  BookOpen,
} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      category: "Programming Languages",
      icon: Code2,
      items: ["C++", "Python"],
    },
    {
      category: "Frontend",
      icon: Layout,
      items: ["React", "HTML", "CSS", "Tailwind CSS", "JavaScript"],
    },
    {
      category: "Backend",
      icon: Server,
      items: ["Node.js", "Express.js", "EJS"],
    },
    {
      category: "Databases",
      icon: Database,
      items: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      category: "AI / ML Libraries",
      icon: Brain,
      items: [
        "NumPy",
        "Pandas",
        "TensorFlow",
        "Scikit-Learn",
        "Matplotlib",
        "MediaPipe",
        "OpenCV",
        "Pygame",
      ],
    },
    {
      category: "Tools",
      icon: Wrench,
      items: ["MS Excel", "GitHub", "Canva"],
    },
    {
      category: "Key Courses Taken",
      icon: BookOpen,
      items: [
        "Algorithms & Data Structures",
        "Operating Systems",
        "Software Engineering*",
        "Optimization Techniques",
        "Human Computer Interaction (UI/UX)",
      ],
    },
  ];

  return (
    <section id = "skills" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-semibold mb-16">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        {skills.map((group, index) => {
          const Icon = group.icon;

          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: false }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <Icon
                  size={20}
                  className="text-appleBlue"
                />
                <h3 className="text-xl font-medium">
                  {group.category}
                </h3>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1.5 text-sm rounded-full
                               bg-blue-50 text-gray-700
                               hover:bg-gray-200 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
