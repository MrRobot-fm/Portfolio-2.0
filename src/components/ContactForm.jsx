import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { container, item4 } from '../animations/animation';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_dvwh9g2',
        'template_zfpawkj',
        form.current,
        '31NmIPC3WrRZQ4D4B'
      )
      .then(
        result => {
          console.log(result.text);
          console.log('inviato');
        },
        error => {
          console.log(error.text);
        }
      );

    form.current.reset();
  };
  return (
    <motion.div
      className="p-2"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <form ref={form} onSubmit={sendEmail}>
        <motion.div
          className="grid md:grid-cols-2 gap-4 w-full py-2"
          variants={item4}
        >
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2 dark:text-[#A3ACB9]">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              className="border-2 border-gray-200 rounded-lg p-2 flex text-black"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2 dark:text-[#A3ACB9]">
              Phone Number
            </label>
            <input
              type="text"
              name="user_phone"
              className="border-2 border-gray-200 rounded-lg p-2 flex text-black"
            />
          </div>
        </motion.div>
        <motion.div className="flex flex-col py-2" variants={item4}>
          <label className="uppercase text-sm py-2 dark:text-[#A3ACB9]">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            className="border-2 border-gray-200 rounded-lg p-2 flex text-black"
            required
          />
        </motion.div>
        <motion.div className="flex flex-col py-2" variants={item4}>
          <label className="uppercase text-sm py-2 dark:text-[#A3ACB9]">
            Subject
          </label>
          <input
            type="text"
            name="user_subject"
            className="border-2 border-gray-200 rounded-lg p-2 flex text-black"
            required
          />
        </motion.div>
        <motion.div className="flex flex-col py-2" variants={item4}>
          <label className="uppercase text-sm py-2 dark:text-[#A3ACB9]">
            Message
          </label>
          <textarea
            type="text"
            name="user_message"
            className="border-2 rounded-lg p-2 border-gray-200 text-black mb-8"
            rows={3}
            required
          ></textarea>
          <button type="submit" className=" p-3 text-gray-100 bg-[#5543faea]">
            Send Message
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
