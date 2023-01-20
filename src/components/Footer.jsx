import React from 'react';
import { BsInstagram, BsFacebook, BsGithub, BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10 text-center   text-sm py-[4rem] border-t-[1px] border-slate-600">
        <span>©️ 2022 Federico Migliore. All rights reserved.</span>
        <span>Terms - Privacy Policy</span>
        <div className="text-gray-200">
          <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-[#5651e5] dark:hover:bg-blue-500 ease-in-out duration-1000">
            <a
              href="https://www.facebook.com/federico.migliore.11/"
              target="blank"
            >
              <BsFacebook />
            </a>
          </span>
          <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-[#5651e5] dark:hover:bg-blue-500 ease-in-out duration-1000">
            <a href="https://www.instagram.com/federix_aegon/" target="blank">
              <BsInstagram />
            </a>
          </span>
          <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-[#5651e5] dark:hover:bg-blue-500 ease-in-out duration-1000">
            <a href="https://github.com/Federix87" target="blank">
              <BsGithub />
            </a>
          </span>
          <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-[#5651e5] dark:hover:bg-blue-500 ease-in-out duration-1000">
            <a href="https://wa.me/393289076191" target="blank">
              <BsWhatsapp />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
