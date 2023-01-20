import { useState } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import DarkMode from './DarkMode';
import { motion } from 'framer-motion';
import { item6 } from '../animations/animation';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(prev => !prev);
  };

  const closeNavMobile = () => {
    setNav(false);
  };

  return (
    <div id="home" className="flex w-full h-20 z-[100] relative">
      <motion.div
        className="flex justify-between items-center w-full h-full px-1 ss:px-6 2xl:px-16 "
        variants={item6}
        initial="hidden"
        animate="show"
      >
        <h3 className="ss:block hidden uppercase font-extrabold text-[2rem]  dark:text-blue-500/90 text-[#5651e5]">
          Fm
        </h3>
        <div
          className="flex flex-[0.5] items-center"
          variants={item6}
          initial="hidden"
          animate="show"
        >
          <ul className="hidden lg:flex w-full justify-evenly items-center font-medium ml-12 ">
            <li>
              <a
                href="#about"
                className="text-sm uppercase hover:text-[#5651e5] ease-in duration-300 dark:hover:text-blue-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-sm uppercase hover:text-[#5651e5] ease-in duration-300 dark:hover:text-blue-500"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-sm uppercase hover:text-[#5651e5] ease-in duration-300 dark:hover:text-blue-500"
              >
                Projects
              </a>
            </li>{' '}
            <li>
              <a
                href="#contact"
                className="text-sm uppercase hover:text-[#5651e5] ease-in duration-300 dark:hover:text-blue-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full ss:w-auto flex items-center justify-between ss:gap-10 ">
          <DarkMode />
          <div className="lg:hidden cursor-pointer" onClick={handleNav}>
            <AiOutlineMenu size={32} />
          </div>
        </div>
      </motion.div>

      {/* Hamburger menu */}
      <div
        className={
          nav
            ? 'lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70 dark:bg-gray-600/60'
            : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 bg-[#ecf0f3] dark:bg-blueRadialGradient ease-in duration-500 '
              : 'fixed left-[-100%] top-0 ease-in duration-500 '
          }
        >
          <div className="flex w-full items-center justify-between">
            <h3 className="uppercase font-extrabold text-[2rem]  dark:text-blue-500/90 text-[#5651e5]">
              Fm
            </h3>
            <div
              className="rounded-full p-3 shadow-lg  shadow-gray-400 dark:shadow-gray-600  cursor-pointer"
              onClick={handleNav}
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4 font-medium">
            <p className="w-[85%] md:w-[90%] py-4 ">
              Let's build something together
            </p>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <li className=" text-sm py-4">
                <a href="#home" onClick={closeNavMobile}>
                  Home
                </a>
              </li>
              <li className="text-sm py-4">
                <a href="#about" onClick={closeNavMobile}>
                  About
                </a>
              </li>
              <li className="text-sm py-4">
                <a href="#skills" onClick={closeNavMobile}>
                  Skills
                </a>
              </li>
              <li className="text-sm py-4">
                <a href="#projects" onClick={closeNavMobile}>
                  Projects
                </a>
              </li>
              <li className="text-sm py-4">
                <a href="#contact" onClick={closeNavMobile}>
                  Contact
                </a>
              </li>
            </ul>
            <div className="xxs:pt-10 xs:pt-28">
              <p className="uppercase tracking-widest text-[#5651e5] dark:text-blue-500">
                Let's connect
              </p>
              <div className="flex items-center justify-between my-4 sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600  p-3 hover:scale-105 ease-in duration-300">
                  <a
                    href="https://www.linkedin.com/in/federicomigliore/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600  p-3 hover:scale-105 ease-in duration-300">
                  <a
                    href="https://github.com/MrRobot-fm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </a>
                </div>
                <div className="rounded-full shadow-lg  shadow-gray-400 dark:shadow-gray-600 p-3 hover:scale-105 ease-in duration-300">
                  <a href="mailto:federicomiglioredev@gmail.com">
                    <AiOutlineMail />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600  p-3 hover:scale-105 ease-in duration-300">
                  <a href="tel:+393792302349" target="blank">
                    <BsFillPersonLinesFill />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
