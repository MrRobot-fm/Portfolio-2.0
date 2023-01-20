import Skill from '../components/Skill';
import { skillsData } from '../data/skillsData';
import { motion } from 'framer-motion';
import { container, item3 } from '../animations/animation';

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <motion.div
        className="max-w-[1240px] mx-auto  flex flex-col justify-center h-full"
        variants={container}
        initial="hidden"
        // animate="show"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.p
          className="text-xl font-semibold tracking-widest uppercase text-[#5651e5] dark:text-[#ffb900]"
          variants={item3}
        >
          Skills
        </motion.p>
        <motion.h2 className="py-4 " variants={item3}>
          What I Can Do
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map(item => {
            const { id, skill, icon } = item;
            return <Skill key={id} skill={skill} icon={icon} />;
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
