import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { container, container2, item2, item } from '../animations/animation';

const Hero = () => {
  return (
    <main className="w-full h-[calc(100vh-5rem)] text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="overflow-hidden">
              <motion.p
                className="uppercase text-sm font-medium tracking-widest text-gray-600 dark:text-[#ffb900]"
                variants={item}
              >
                Let's build something together
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                className="py-4 text-gray-700 dark:text-[#F7FAFC]"
                variants={item}
              >
                Hi, I'm{' '}
                <motion.span
                  className="text-[#5651e5] dark:text-blue-500"
                  variants={item}
                >
                  Federico
                </motion.span>
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                className="py-2 text-gray-700 dark:text-white"
                variants={item}
              >
                A Front-End Developer
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.p
                className="py-4 text-lg text-gray-500 dark:text-[#A3ACB9] max-w-[75%] m-auto"
                variants={item}
              >
                I’m focused on building responsive front-end web applications
                with modern technologies.
              </motion.p>
            </div>

            <motion.div
              className="flex items-center justify-between max-w-[300px] m-auto py-4"
              variants={container2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="hover:scale-110 ease-in duration-300">
                <motion.div
                  className="rounded-full shadow-lg dark:shadow-md shadow-gray-400 dark:shadow-gray-500 p-4 "
                  variants={item2}
                >
                  <a
                    href="https://www.linkedin.com/in/federicomigliore/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </motion.div>
              </div>
              <div className="hover:scale-110 ease-in duration-300">
                <motion.div
                  className="rounded-full shadow-lg dark:shadow-md  shadow-gray-400 dark:shadow-gray-500 p-4 "
                  variants={item2}
                >
                  <a
                    href="https://github.com/MrRobot-fm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </a>
                </motion.div>
              </div>
              <div className="hover:scale-110 ease-in duration-300">
                <motion.div
                  className="rounded-full shadow-lg dark:shadow-md  shadow-gray-400 dark:shadow-gray-500 p-4"
                  variants={item2}
                >
                  <a href="mailto:federicomiglioredev@gmail.com">
                    <AiOutlineMail />
                  </a>
                </motion.div>
              </div>
              <div className="hover:scale-110 ease-in duration-300">
                <motion.div
                  className="rounded-full shadow-lg dark:shadow-md  shadow-gray-400 dark:shadow-gray-500 p-4 "
                  variants={item2}
                >
                  <a href="tel:+393792302349" target="blank">
                    <BsFillPersonLinesFill />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
