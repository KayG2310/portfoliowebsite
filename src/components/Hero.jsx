const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-start md:items-center"
    >
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16 text-center md:text-left">
        
        <h1 className="font-semibold leading-tight">
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
            Hi, I’m Kamakshi.
          </span>
          <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-appleGray">
            Budding Software & AI Engineer.
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-appleGray max-w-xl mx-auto md:mx-0">
          I enjoy building clean software systems and turning ideas
          into well-crafted digital experiences.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
          
          <a
            href="https://drive.google.com/file/d/1_Mx_5Ak4t1M682QKKqhZuKOux5ncCMTE/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-6 py-3 bg-appleBlue text-white rounded-full text-sm font-medium hover:opacity-90 transition">
              View Resume
            </button>
          </a>

          <a href="https://github.com/KayG2310" target="_blank" rel="noreferrer">
            <button className="px-6 py-3 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-100 transition">
              GitHub
            </button>
          </a>

          <a href="https://leetcode.com/u/grangergupta/" target="_blank" rel="noreferrer">
            <button className="px-6 py-3 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-100 transition">
              LeetCode
            </button>
          </a>

          <a href="https://codeforces.com/profile/kayg2310" target="_blank" rel="noreferrer">
            <button className="px-6 py-3 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-100 transition">
              Codeforces
            </button>
          </a>

          <a href="https://www.codechef.com/users/kkkkkk23" target="_blank" rel="noreferrer">
            <button className="px-6 py-3 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-100 transition">
              CodeChef
            </button>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;
