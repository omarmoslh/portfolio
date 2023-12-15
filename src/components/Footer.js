import React from "react";
import Layout from "./Layout";
import { motion } from "framer-motion";
import { TwitterIcon, GithubIcon, LinkedInIcon } from "./Icons";
const Footer = () => {
  return (
    <footer className=" w-full font-medium text-lg dark:text-light sm:text-base">
      <Layout className=" py-8 flex items-center justify-center flex-col">
        <div className="flex items-center justify-center flex-wrap py-2">
          <motion.a
            href="https://www.facebook.com/omarmosle7"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className=" w-6 mx-3 "
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className=" w-6 mx-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className=" w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>
        </div>
        <span className=" text-dark/50 dark:text-light">
          {new Date().getFullYear()} &copy; All Rights Reserved.
        </span>
      </Layout>
    </footer>
  );
};

export default Footer;
