import { FaMapMarkerAlt } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { AiFillCode } from 'react-icons/ai';
import { GrMail } from 'react-icons/gr';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
import { container, item5 } from '../animations/animation';

const Contact = () => {
  return (
    <div id="contact" className="w-full ">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <motion.p
            className="text-xl font-semibold tracking-widest uppercase text-[#5651e5] dark:text-[#ffb900]"
            variants={item5}
          >
            Contact
          </motion.p>
          <motion.h2 className="py-2" variants={item5}>
            Get In Touch
          </motion.h2>
        </motion.div>
        <div className="grid lg:grid-cols-7 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-3 w-full h-full md:pt-8 xxs:pt-1 ">
            <motion.div
              className="h-full"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={container}
            >
              <motion.div className="pt-5 text-base" variants={item5}>
                <h2 className="py-1">Federico Migliore</h2>
                <p className="dark:text-blue-500/90 text-[#5651e5] font-semibold text-lg">
                  Junior Front-End Developer
                </p>
                <p className="py-3">
                  I am available for stage or full-time position.
                  <br /> Contact me and let's talk.
                </p>
              </motion.div>
              <div className="gap-8 flex flex-col items-start justify-start pt-6">
                <motion.div
                  className="flex items-center w-full gap-4"
                  variants={item5}
                >
                  <div className="rounded-full shadow-lg dark:shadow-md shadow-gray-400 dark:shadow-gray-500 p-4 hover:scale-110 ease-in duration-300">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-lg font-semibold dark:text-blue-500/90 text-[#5651e5]">
                      Position
                    </p>
                    <p>Rome, Italy</p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center w-full gap-4"
                  variants={item5}
                >
                  <div className="rounded-full shadow-lg dark:shadow-md shadow-gray-400 dark:shadow-gray-500 p-4 hover:scale-110 ease-in duration-300 ">
                    <AiFillCode />
                  </div>
                  <div>
                    <p className="text-lg font-semibold dark:text-blue-500/90 text-[#5651e5]">
                      Job
                    </p>
                    <p>Stage / full-time / full-remote</p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center w-full gap-4"
                  variants={item5}
                >
                  <div className="rounded-full shadow-lg dark:shadow-md shadow-gray-400 dark:shadow-gray-500 p-4 hover:scale-110 ease-in duration-300">
                    <GrMail />
                  </div>
                  <div>
                    <p className="text-lg font-semibold dark:text-blue-500/90 text-[#5651e5]">
                      Email
                    </p>
                    <p>federicomiglioredev@gmail.com</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          {/* right */}
          <div className="col-span-3 place-self-center w-full h-auto lg:p-4">
            <ContactForm />
          </div>
        </div>
        <div className="flex justify-center py-10">
          <a href="#home">
            <div className="rounded-full shadow-lg dark:shadow-md shadow-gray-400 dark:shadow-gray-600 p-4 hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp
                size={25}
                className="m-auto text-[#5651e5] dark:text-white"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
