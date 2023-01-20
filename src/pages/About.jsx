import { motion } from 'framer-motion';
import { container, item5 } from '../animations/animation';

const About = () => {
  return (
    <div id="about" className="w-full p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto lg:grid grid-cols-6 lg:gap-24 overflow-hidden">
        <motion.div
          className="col-span-5 lg:pb-0 pb-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.p
            className="uppercase text-xl font-semibold tracking-widest text-[#5651e5] dark:text-[#ffb900]"
            variants={item5}
          >
            About
          </motion.p>
          <motion.h2 className="py-4" variants={item5}>
            Who I Am{' '}
          </motion.h2>
          <motion.p
            className="py-2 text-gray-600 dark:text-[#A3ACB9] text-lg"
            variants={item5}
          >
            I am not your normal developer
          </motion.p>
          <motion.p
            className="text-justify text-lg py-2 text-gray-600 dark:text-[#A3ACB9]"
            variants={item5}
          >
            👋 Hello, my name is Federico! I describe myself as precise,
            reliable, and curious to learn new things in order to achieve my
            goals. I love traveling and learning more about topics such as
            environmental sustainability.
          </motion.p>
          <motion.p
            className="text-justify text-lg py-2 text-gray-600 dark:text-[#A3ACB9]"
            variants={item5}
          >
            ➡️ Over the years i have developed an interest in the world of the
            web, so I decided, after years of experience in the pharmaceutical
            distribution sector, to get back into the game and undertake
            training in front-end web programming where I developed several
            projects and learned how to use technologies such as: Html | Css |
            Sass | Javascript | React Js | Redux Toolkit | Tailwind Css | GitHub
            | Git .
          </motion.p>
          <motion.p
            className="py-2 text-gray-600  dark:text-[#A3ACB9] underline cursor-pointer"
            variants={item5}
          >
            <a href="#projects">Check out some of my latest projects</a>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
