"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { researchArticles } from "./data/ResearchArticles";
import { twentyThreeExperience, twentyFourExperience } from "./data/Experience";
import { FaLinkedin,FaSquareXTwitter,FaResearchgate ,FaGoogleScholar } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
import Loader from "./components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const scrollToSection = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollToSection.current) {
      scrollToSection.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    // Simulate a loading delay
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 11000); // Adjust the duration as needed

    return () => clearTimeout(loadingTimeout);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <main className="h-auto bg-gray-100 bg-cover bg-center bg-no-repeat  text-white space-y-36  md:space-y-16">
      {/* Top Section */}
      <section className="pt-20 pb-5 md:py-0 flex justify-center items-center gap-5 min-h-screen md:pl-10">
        <div className="flex flex-col md:flex-row justify-center items-start gap-10 md:gap-4">
          <motion.div
            className="md:w-3/5 space-y-5 my-auto px-5"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-DM text-4xl md:text-6xl font-medium text-black ">
              Hello! I am Albert K. Okrah, a PhD student and Graduate Research Assistant at Augusta University
            </h1>
            <p className="font-DM text-md font-normal text-gray-500 md:w-4/5 leading-normal">
            My research focuses on fall-related mild traumatic brain injury in older adults and the psychological harm associated with falls across all populations. I aim to identify fall-related risk factors, develop targeted prevention strategies, and enhance research and clinical approaches to improve well-being
            </p>
            <button className="bg-primary/80 text-white text-[1rem] font-DM font-normal text-md px-10 py-4 rounded-sm group transition-all">
              <Link href="" className="flex justify-center items-center gap-3">
                <span>Explore My Research</span>
                <motion.span
                  className="hidden group-hover:block transition-all"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="size-[1rem]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </motion.span>
              </Link>
            </button>
          </motion.div>

          <motion.div
            className="w-2/5 h-screen overflow-hidden hidden md:block"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/aobert.jpg"
            width={1920}
              height={1080}
              alt="Profile Picture"
              className="w-full h-full object-cover "
            />
          </motion.div>
          <motion.div
            className="w-full  justify-center items-center md:w-2/5 md:h-screen overflow-hidden md:hidden block "
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/aobert.jpg"
              width={500}
              height={200}
              alt="Profile Picture"
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      <div className="absolute bottom-1 md:bottom-5 right-5">
        <motion.button
          onClick={handleScroll}
          className="bg-primary/70 px-4 py-2 text-white  font-Reco text-lg tracking-wide font-normal flex justify-center items-center gap-2 hover:font-bold "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          Scroll Down
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
        </motion.button>
      </div>

     
      {/* Research and Publications */}
      <motion.section
        id="research"
        className=" flex flex-col justify-center items-start md:items-start mt-48 md:mt-0 px-5 md:px-20 gap-6"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        ref={scrollToSection}
      >
        <div className="flex  justify-center items-center gap-4">
          <hr className="bg-dark w-24 h-[0.2rem]" />
          <h2 className="text-black font-DM text-4xl md:text-6xl font-normal">
            Research{" "}
          </h2>
        </div>

        <p className="font-DM text-gray-500 text-sm">
          Explore my research work{" "}
        </p>
        <div className=" w-full flex-col flex md:flex-row md:justify-center items-center">
          {/* <ResearchInterestCard interest="Fall related pyschological harm" />
          <ResearchInterestCard interest="Mild traumatic brain injuries and mobility impairment" /> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {researchArticles.map((researchArticle) => (
            <div
              key={researchArticle.id}
              className="bg-cover bg-center h-[60vh] md:w-[35rem] flex flex-col justify-end items-start"
              style={{
                backgroundImage: `url(${
                  researchArticle.imgSrc || "/default.jpg"
                })`,
              }}
            >
              <div className="p-4 w-full space-y-7">
                <h3 className="text-white font-medium text-2xl font-DM">
                  {researchArticle.title}
                </h3>
                <hr className="bg-white h-[0.05rem] w-full" />
                <div className="flex  justify-start items-center gap-4 font-DM">
                  <p className="text-white text-sm md:text-md">
                    {researchArticle.dateOfPublication}
                  </p>
                  <span className="bg-white w-2 h-2 rounded-md"></span>
                  <p className="text-white md:text-md text-sm">{researchArticle.topic}</p>
                  <span className="bg-white w-2 h-2 rounded-md"></span>

                  {researchArticle.link && (
                    <Link
                      href={researchArticle.link}
                      passHref
                      className=" text-sm md:text-md"
                    >
                      Read More
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <button className="bg-primary text-white font-medium hover:font-bold px-5 py-2">
          See More
          </button>
          </div>
      </motion.section>

      <motion.section
        id="experience"
        className="h-auto flex flex-col justify-center items-center mt-48 md:mt-0  px-5 md:px-20 gap-6"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-center items-center gap-4">
          <hr className="bg-dark w-24 h-[0.2rem]" />
          <h2 className="text-black font-DM text-4xl md:text-6xl font-normal">
            Conference Presentations
          </h2>
        </div>
        <p className="text-sm text-gray-500 font-DM">
          I have contributed actively to some key research topics and articles
        </p>
        <div className="flex flex-col justify-start items-start gap-4">
          <h2 className="text-4xl font-bold text-primary">2024</h2>

          <div className=" w-full flex flex-col justify-center items-start gap-20">
            {twentyFourExperience.map((experience) => (
              <div
                key={experience.id}
                className="flex  flex-col md:flex-row md:justify-between items- gap-10 md:gap-96"
              >
                <div className=" w-full flex flex-col justify-center items-start gap-2">
                  <span className="text-gray-700 text-lg uppercase font-DM">
                    {experience.startDate} - {experience.endDate}
                  </span>
                  <h4 className="text-3xl font-DM font-medium text-blue-800 hover:text-blue-950 underline">
                    <Link href={experience.link} >
                    {experience.company}
                    </Link>
                  
                  </h4>
                  <p className="text-md text-gray-500 font-DM">
                    {experience.description}
                  </p>
                </div>
                
              </div>
            ))}
          </div>

<div className="mt-20 gap-4">
          <h2 className="text-4xl font-bold text-primary">2023</h2>
          <div className=" w-full flex flex-col justify-center items-center gap-20">
            {twentyThreeExperience.map((experience) => (
              <div
                key={experience.id}
                className="flex  flex-col md:flex-row md:justify-between items- gap-10 md:gap-96"
              >
                <div className=" w-full flex flex-col justify-center items-start gap-2">
                  <span className="text-gray-700 text-lg uppercase font-DM">
                    {experience.startDate} - {experience.endDate}
                  </span>
                  <h4 className="text-3xl font-DM font-medium text-blue-800 hover:text-blue-950 underline">
                    <Link href={experience.link} >
                    {experience.company}
                    </Link>
                  
                  </h4>
                  <p className="text-md text-gray-500 font-DM">
                    {experience.description}
                  </p>
                </div>
                
              </div>
            ))}
          </div>
          </div>
        </div>
      </motion.section>
      <footer className=" px-20  pb-10 md:py-10 flex flex-col md:flex-row justify-between items-center  md:items-start gap-4">
        <div className="flex justify-center items-center gap-5">
          <span className="text-black font-DM underline hover:text-primary">
            <Link href="https://www.linkedin.com/in/albertokrah/">
              <FaLinkedin size={30}/>
            </Link>
          </span>
          <span className="text-black font-DM underline hover:text-primary">
            <Link href="https://x.com/AlbertKOkrah">
              <FaSquareXTwitter size={30}/>
            </Link>
          </span>
          <span className="text-black font-DM underline hover:text-primary">
            <Link href="pokrah@augusta.edu">
            <IoMdMailUnread size={30}/>
            </Link>
          </span>
          <span className="text-md text-black font-DM underline hover:text-primary">
            <Link href="https://www.researchgate.net/profile/Albert-Okrah">
              <FaResearchgate size={30}/>
            </Link>
          </span>
          <span className="text-md text-black font-DM underline hover:text-primary">
            <Link href="https://scholar.google.com/citations?hl=en&user=82CLCSoAAAAJ">
              <FaGoogleScholar size={30}/>
            </Link>
          </span>
        </div>
        <div>
          <span className="text-md text-black font-DM">
            Developed by Selasie Sepenu❤️‍🔥
          </span>
        </div>
      </footer>
    </main>
  );
}
