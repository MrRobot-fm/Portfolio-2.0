import { motion } from 'framer-motion';
import { item3 } from '../animations/animation';

const Skill = ({ icon, skill }) => {
  return (
    <div className="p-2">
      <motion.div
        className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        variants={item3}
      >
        <div className="grid grid-cols-2 justify-center items-center">
          <div className="m-auto">
            <img src={icon} alt="html" width={50} height={50} />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="uppercase">{skill}</h3>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skill;
