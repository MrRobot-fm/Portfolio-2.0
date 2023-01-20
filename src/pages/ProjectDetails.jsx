import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { container, item5 } from '../animations/animation';

const ProjectDetails = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div className="w-full dark:bg-blueRadialGradient h-screen pb-6">
      <div className="w-full h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <img
          src={state.imgDetails}
          alt={state.title}
          className="absolute w-screen h-[30vh] lg:h-[40vh] z-1 object-contain"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 px-6 overflow-hidden">
          <motion.div initial="hidden" animate="show" variants={container}>
            <motion.h2 className="mb-2" variants={item5}>
              {state.title}
            </motion.h2>
            <motion.h3 className="mb-2" variants={item5}>
              {state.technologies.join(' / ')}
            </motion.h3>
          </motion.div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 px-6 grid md:grid-cols-5 gap-8 pt-8  overflow-hidden">
        <motion.div
          className="col-span-4 text-justify"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p
            className="text-xl font-semibold tracking-widest uppercase text-[#5651e5] dark:text-[#ffb900]"
            variants={item5}
          >
            Project
          </motion.p>
          <motion.h2
            className="py-4 text-[#3C4257] dark:text-white"
            variants={item5}
          >
            Overview
          </motion.h2>
          <motion.p
            className="text-lg text-[#4F566B] dark:text-[#A3ACB9]"
            variants={item5}
          >
            {state.description}
          </motion.p>
          <motion.button className="px-8 py-2 mt-4 mr-8" variants={item5}>
            <a href={state.demoLink} target="_blank" rel="noreferrer">
              Demo
            </a>
          </motion.button>

          <motion.button className="px-8 py-2 mt-4 " variants={item5}>
            <a href={state.githubLink} target="_blank" rel="noreferrer">
              Code
            </a>
          </motion.button>
          <Link to={-1}>
            <motion.p
              className="underline cursor-pointer mt-10  text-[#3C4257] dark:text-[#A3ACB9]"
              variants={item5}
            >
              Back to projects
            </motion.p>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;
