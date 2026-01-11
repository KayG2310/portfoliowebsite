import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Layers, Code2 , Heading6} from "lucide-react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { id: "fullstack", label: "Full Stack", icon: Layers },
    { id: "algorithmic", label: "Algorithmic", icon: Code2 },
    { id: "aiml", label: "AI / ML", icon: Brain },
    { id : "front", label: "Frontend", icon : Heading6},
  ];

  const projects = [
      {
        title: "CleanTrack Hostel Sanitation Ticket Management System ",
        category: "fullstack",
        description:
         [
          "Deployed a full-stack smart cleanliness-ticketing system enabling students to raise room/hostel maintenance tickets with real-time status tracking.", 
          "Integrated an AI-powered scoring pipeline by running Python ML models (CLIP + LLM via OpenRouter) from the backend to analyze images and descriptions, generating an urgency score for each ticket to assist decision-making."
         ], 
        tech: ["MongoDB Atlas", "OpenRouter LLM " ],
        link: "https://github.com/KayG2310/Hostel-Sanitation-Ticket-Management",
        image: "/projects/clean.png",
      },
    {
      title: "Stock Prediction based on Sentimental Analysis",
      category: "fullstack",
      description:
       [
        "Developed a real-time financial news sentiment analysis system to generate stock trend predictions.", 
        "Engineered a backend to process live news data and analyze sentiment patterns for enhanced forecasting accuracy."
       ], 
      tech: ["Node.js", "Express.js", "EJS", "MongoDB", "NewsAPI", "Tailwind CSS" ],
      link: "https://github.com/KayG2310/stocks",
      image: "/projects/stock.png",
    },
    {
        title: "ReferDINO: Referring Video Object Segmentation ",
        category: "aiml",
        description:
         [
          "Enhanced a state-of-the-art grounding-based video segmentation model by integrating advanced IoU-based loss functions (DIoU and CIoU) and optimizing multi-frame matching for higher localization accuracy.", 
         ], 
        tech: [],
        link: "https://github.com/shubhamgupta1017/Seg_5",
        image: "/projects/refer.png",
    },
    {
        title: "Basic Simulation of a Blockchain System",
        category: "algorithmic",
        description:
         [
          "Designed a peer-to-peer blockchain simulation demonstrating secure transactions, leveraging linked lists and Merkle trees.", 
          "Designed a transaction validation system ensuring authorized additions while implementing security measures to prevent unauthorized modifications."
         ], 
        tech: ["C++"],
        link: "https://github.com/KayG2310/blockchain",
        image: "/projects/block.webp",
    },
    {
        title: "Scotland Yard Game",
        category: "algorithmic",
        description:
         [
          "Integrated file handling for game state management and built an interactive graphical interface with Python and Pygame for an immersive experience.", 
         ], 
        tech: ["C++", "Python"],
        link: "https://github.com/KayG2310/Scotland-Yard",
        image: "/projects/scot.jpeg",
    },
    {
        title: "Memory Management System",
        category: "algorithmic",
        description:
         [
          "Simulated advanced memory paging architectures (single-level, multi-level, and map-based) for scalable virtual memory management, validating efficiency with real-world OS traces.", 
         ], 
        tech: ["C++"],
        link: "https://github.com/KayG2310/Memory-Management-System",
        image: "/projects/pg.png",
    },
    {
        title: "Implementing Semaphores in Xv6",
        category: "algorithmic",
        description:
         [
          "Implement a read–write spinlock in xv6 by completing the rwspinlock API in kernel/spinlock.c, updating its structure in kernel/spinlock.h, and validating correctness using rwlktest.", 
         ], 
        tech: ["C++"],
        link: "https://github.com/Prachi-Chhabra/OS_Xv6",
        image: "/projects/xv6.jpg",
    },
    {
        title: "A Comparative Analysis of MPI Message Matching Strategies",
        category: "algorithmic",
        description:
         [
          "Lock-Free Optimistic Matching scales dramatically (76,528 messages/s no conflict), with throughput orders of magnitude higher even with conflicts. Synchronization overhead is confined to minimal final commit.", 
         ], 
        tech: ["C++"],
        link: "https://github.com/KayG2310/CS303-Assignment",
        image: "/projects/mpi.png",
    },
    {
        title: "Spotify Player",
        category: "front",
        description:
         [
          "Tried emulating my own version of a spotify player, using spotify API", 
         ], 
        tech: ["React"],
        link: "https://github.com/KayG2310/spotify-player",
        image: "/projects/s.png.jpeg",
    },
    {
        title: "Tic-Tac-Toe",
        category: "algorithmic",
        description:
         [
          "A classic implementation of the Tic-Tac-Toe game, combining C++ and Python to create an interactive gaming experience.", 
         ], 
        tech: ["C++", "Pygame"],
        link: "https://github.com/KayG2310/Tic-Tac-Toe",
        image: "/projects/tic.png",
    },
    {
        title: "OpenCV Projects",
        category: "aiml",
        description:
         [
          "Created Virtual Painter, Eye Blink Counter to assist eye relaxation and an emergency responder using eye blinks as morse code", 
         ], 
        tech: ["C++", "Pygame"],
        link: "hhttps://github.com/KayG2310/OpenCV",
        image: "/projects/o.png",
    },
    

  ];

  const filteredProjects = selectedCategory
    ? projects.filter((p) => p.category === selectedCategory)
    : [];

  return (
    <section id = "projects" className="max-w-6xl mx-auto px-6 py-32">
      <h2 className="text-4xl font-semibold mb-20">Projects</h2>

      {/* Category selector */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex flex-col items-center justify-center gap-4 p-8 rounded-2xl border transition
                ${
                  selectedCategory === cat.id
                    ? "border-appleBlue bg-appleBlue/5"
                    : "border-gray-200 hover:border-gray-300"
                }`}
            >
              <Icon
                size={48}
                className={
                  selectedCategory === cat.id
                    ? "text-appleBlue"
                    : "text-appleGray"
                }
              />
              <span className="text-xl font-medium">{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Project cards (UNCHANGED) */}
      <AnimatePresence mode="wait">
        {filteredProjects.length > 0 && (
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-32"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
              >
                {/* SAME CARD AS BEFORE */}
                <div>
                  <h3 className="text-3xl font-medium mb-6">
                    {project.title}
                  </h3>
                  {Array.isArray(project.description) ? (
                    <ul className="text-appleGray text-lg mb-8 leading-relaxed space-y-2">
                      {project.description.map((point, i) => (
                        <li key={i} className="relative pl-6">
                          <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-appleBlue rounded-full"></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-appleGray text-lg mb-8 leading-relaxed">
                      {project.description}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1.5 text-sm rounded-full
                                   bg-gray-100 text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-medium
                               text-appleBlue hover:underline"
                  >
                    View Project →
                  </a>
                </div>

                <div className="hidden md:flex items-center justify-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 rounded-2xl object-cover border border-gray-200"
                    />
                  ) : (
                    <div className="w-full h-64 rounded-2xl bg-gray-100 flex items-center justify-center text-appleGray">
                      Project Preview
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
