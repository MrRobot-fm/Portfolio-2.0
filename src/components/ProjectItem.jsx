import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { item2, item7 } from '../animations/animation';

const ProjectItem = ({
  id,
  title,
  img,
  imgDetails,
  technologies,
  description,
  demoLink,
  githubLink
}) => {
  return (
    <motion.div
      className="relative flex items-center justify-center h-auto w-full shadow-xl  shadow-gray-400 dark:shadow-black rounded-xl p-0 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]"
      variants={item7}
    >
      <img
        src={img}
        alt="property"
        className="rounded-xl group-hover:opacity-10 ease-in duration-300"
      />
      <div className="hidden group-hover:block absolute top-[50%]left-[50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{technologies.at(0)}</p>
        <Link
          to={`/${title}`}
          state={{
            title,
            img,
            imgDetails,
            technologies,
            description,
            demoLink,
            githubLink
          }}
        >
          <p className="text-center py-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
