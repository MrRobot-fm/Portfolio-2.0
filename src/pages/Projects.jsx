import ProjectItem from '../components/ProjectItem';
import { projectsData } from '../data/projectsData';
import { motion } from 'framer-motion';
import { container, item7 } from '../animations/animation';

const Projects = () => {
  return (
    <div id="projects" className="w-full overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <motion.div
          variants={container}
          initial="hidden"
          // animate="show"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.p
            className="text-xl font-semibold tracking-widest uppercase text-[#5651e5] dark:text-[#ffb900]"
            variants={item7}
          >
            Projects
          </motion.p>
          <motion.h2 className="py-4 " variants={item7}>
            What I've Built
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projectsData.map((item, index) => {
              const {
                id,
                title,
                img,
                imgDetails,
                technologies,
                description,
                demoLink,
                githubLink
              } = item;
              return (
                <ProjectItem
                  index={index}
                  key={id}
                  id={id}
                  title={title}
                  img={img}
                  imgDetails={imgDetails}
                  technologies={technologies}
                  description={description}
                  demoLink={demoLink}
                  githubLink={githubLink}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
