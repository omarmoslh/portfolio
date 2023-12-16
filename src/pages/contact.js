import TransitionEffect from "@/components/TransitionEffect";
import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";

const contact = () => {
  return (
    <>
      <Head>
        <title>Omar Mosleh | Contact </title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16 ">
          <AnimatedText
            text="Contact"
            className="mb-16 text-8xl lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="flex flex-col items-center justify-center">
            <p className="flex flex-col text-center my-4 text-xl font-medium md:text-sm sm:text-xs pb-6">
              {`I'm currently open to freelance and actively looking for full-time job opportunties, so if you like what you've seen please don't hesitate to get in touch!`}
            </p>
            <p className="flex flex-col text-center my-4 text-xl font-medium md:text-sm sm:text-xs pb-6">
              {`If you have any questions or would just like to say hi, my inbox is always open and I'll endeavour to get back to you as soon as I can.`}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Link
            
              href="mailto:omoslh@gmail.com"
              target={"_blank"}
              className="flex items-center  bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
            >
              Git In Touch
            </Link>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default contact;
