const Hero = () => {
    return (
      <section id = "hero" className="min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 pt-32">
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight">
            Hi, I’m Kamakshi.
            <br />
            <span className="text-appleGray text-6xl">
              Budding Software & AI Engineer.
            </span>
          </h1>
  
          <p className="mt-8 text-lg text-appleGray max-w-xl">
            I enjoy building clean software systems and turning ideas
            into well-crafted digital experiences.
          </p>
  
          <div className="mt-12 flex space-x-6">
            <a href="https://drive.google.com/file/d/1rFbbtGINDfAvSIfnIlGMyByUXYqTB0I3/view?usp=sharing" target="_blank">
            <button className="px-6 py-3 bg-appleBlue text-white rounded-full text-sm font-medium hover:opacity-90 transition">
              View Resume
            </button>
            </a>
            
            <a href="https://github.com/KayG2310" target="_blank">
            <button className="px-6 py-3 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-100 transition">
                Github
            </button>
            </a>
            <a href="https://leetcode.com/u/grangergupta/" target="_blank">
                <button className="px-6 py-3 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-100 transition">
                Leetcode
                </button>
            </a>
            <a href="https://codeforces.com/profile/kayg2310" target="_blank">
            <button className="px-6 py-3 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-100 transition">
                Codeforces
            </button>
            </a>
            <a href="https://www.codechef.com/users/kkkkkk23" target="_blank">
            <button className="px-6 py-3 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-100 transition">
                Codechef
            </button>
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  