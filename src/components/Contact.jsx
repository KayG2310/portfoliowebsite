import { motion } from "framer-motion";
import { Mail, LinkedinIcon} from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
      >
        {/* Left */}
        <div>
          <h2 className="text-4xl font-semibold mb-6">
            Let’s build something meaningful.
          </h2>

          <p className="text-lg text-appleGray leading-relaxed max-w-md">
            I’m always open to interesting conversations, collaborations,
            and opportunities where I can learn and contribute.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-4">
          <a
            href="mailto:kamakshig2310@gmail.com"
            className="group flex items-center justify-between
                       px-6 py-4 rounded-xl border
                       border-gray-200 hover:border-appleBlue
                       transition"
          >
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-appleBlue" />
              <span className="font-medium">Email</span>
            </div>
            <span className="text-sm text-appleGray group-hover:translate-x-1 transition">
              →
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/kamakshi-gupta23"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between
                       px-6 py-4 rounded-xl border
                       border-gray-200 hover:border-appleBlue
                       transition"
          >
            <div className="flex items-center gap-4">
              <LinkedinIcon className="w-5 h-5 text-appleBlue" />
              <span className="font-medium">LinkedIn</span>
            </div>
            <span className="text-sm text-appleGray group-hover:translate-x-1 transition">
              →
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
