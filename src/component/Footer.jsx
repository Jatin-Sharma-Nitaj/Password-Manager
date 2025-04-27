import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';

const Footer = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <footer className="bg-[#1a1a1a] text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Left: Social Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <h2>@Jatin Sharma</h2>
          <a
            href="https://github.com/Jatin-Sharma-Nitaj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/jatin-sharma-434723279/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://x.com/Nitaj333"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition duration-300"
            aria-label="Twitter"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
        </div>

        {/* Center: Project Info */}
        <div className="text-center">
          <p className="text-sm md:text-lg font-semibold">
            <span className="text-purple-400">&lt;</span>PassGuard
            <span className="text-purple-400">/&gt;</span> 
          </p>
          <p className="text-xs md:text-sm text-gray-400 mt-2 flex items-center justify-center gap-2">
            <MdAccessTime className="w-4 h-4 text-gray-400" />
            {currentDate}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
