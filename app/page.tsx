"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import ResearchInterestCard from "./components/ResearchInterestCard";
import { researchArticles } from "./data/ResearchArticles";
import { Experience } from "./data/Experience";



export default function Home() {
  const scrollToSection = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollToSection.current) {
      scrollToSection.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-cover bg-center bg-no-repeat text-white bg-white space-y-64 md:space-y-24">
      {/* Top Section */}
      <section className="flex justify-center items-center gap-5 min-h-screen pl-10">
        <div className="flex flex-col md:flex-row justify-center items-start gap-10 md:gap-4">
          <motion.div
            className="md:w-3/5 space-y-5 my-auto px-5"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-DM text-6xl font-medium text-black ">
              Hello! I&apos;m Albert a PhD Student and Biomedical Researcher at St. Augusta University
            </h1>
            <p className="font-DM text-md font-normal text-gray-500 md:w-4/5 leading-normal">
             I am passionate about advancing mobility and improving the quality of life for older adults. With a background in Biomedical Engineering, I focus on research in fall-risk predictors in individuals with mild traumatic brain injuries.
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
            className="md:w-2/5 md:h-screen overflow-hidden"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/profile.jpg"
              width={500}
              height={200}
              alt="Profile Picture"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <div className="absolute bottom-1 md:bottom-5 right-5">
        <motion.button
          onClick={handleScroll}
          className="border-b border-b-white text-white  font-Reco text-lg tracking-wide font-normal flex justify-center items-center gap-2 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          Scroll Down
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
</svg>

        </motion.button>
      </div>

    
      <motion.section
        ref={scrollToSection}
        className="h-screen flex flex-col justify-center items-start px-5 md:px-20 gap-4 "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
          <div className="flex justify-center items-center gap-4">
            <hr className="bg-dark w-24 h-[0.2rem]"/>
          <h2 className="text-black font-DM text-6xl font-normal">Intro</h2>
          </div>
       
        <p className="font-DM text-black text-xl leading-normal text-justify">
        I am a PhD student in the Applied Health Sciences Program at St. Augusta University, where my research explores predictors of falls in older adults with mild traumatic brain injuries. Prior to starting my PhD, I earned my Bachelor’s degree in Biomedical Engineering from Kwame Nkrumah University of Science and Technology (KNUST), where I also worked as a biomechanics research and teaching assistant.
<br/>
<br/>
My career aspirations include becoming a research and teaching professional in the fields of biomechanics and fall-risk intervention, with the ultimate goal of establishing my own research laboratory to further contribute to solving mobility challenges faced by older adults and individuals with musculoskeletal disorders.
        </p>
      </motion.section>
      <motion.section
        className="h-screen flex flex-col justify-center items-end px-20 gap-6"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
          <div className="flex  justify-center items-center gap-4">
            <hr className="bg-dark w-24 h-[0.2rem]"/>
          <h2 className="text-black font-DM text-6xl font-normal">Research</h2>
          
        </div>
          
          <p className="font-DM text-gray-500 text-sm">Here are some of my reasearch interest </p>
          <div className="flex justify-end items-center flex-wrap gap-4">
            <ResearchInterestCard interest="Predictors of falls in older adults"/>
            <ResearchInterestCard interest="Mild traumatic brain injuries and mobility impairment"/>
            <ResearchInterestCard interest="Biomechanics and fall-risk intervention"/>
            <ResearchInterestCard interest="Rehabilitation engineering"/>
            <ResearchInterestCard interest="Assistive technologies for aging populations"/>
          </div>

      </motion.section>
      <motion.section
  className="h-screen flex flex-col justify-center items-start px-20 gap-6"
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <div className="flex justify-center items-center gap-4">
    <hr className="bg-dark w-24 h-[0.2rem]" />
    <h2 className="text-black font-DM text-6xl font-normal">Articles & Publications</h2>
  </div>
  <p className="text-sm text-gray-500 font-DM">
    I have contributed actively to some key research topics and articles
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
    {researchArticles.map((researchArticle) => (
      <div
        key={researchArticle.id}
        className="bg-cover bg-center h-[60vh] w-[35rem] flex flex-col justify-end items-start"
        style={{ backgroundImage: `url(${researchArticle.imgSrc || '/default.jpg'})` }}
      >
        <div className="p-4 w-full space-y-7">
          <h3 className="text-white font-medium text-2xl font-DM">{researchArticle.title}</h3>
          <hr className="bg-white h-[0.05rem] w-full"/>
          <div className="flex  justify-start items-center gap-4 font-DM">
          <p className="text-white text-md">{researchArticle.dateOfPublication}</p>
          <span className="bg-white w-2 h-2 rounded-md">
          </span>
          <p className="text-white text-md">{researchArticle.topic}</p>
          <span className="bg-white w-2 h-2 rounded-md">
          </span>

          {researchArticle.link && (
            <Link href={researchArticle.link} passHref className="text-md">
             Read More
            </Link>
          )}
          </div>
        </div>
      </div>
    ))}
  </div>
</motion.section>
<motion.section
  className="h-auto flex flex-col justify-center items-center px-20 gap-6"
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <div className="flex justify-center items-center gap-4">
    <hr className="bg-dark w-24 h-[0.2rem]" />
    <h2 className="text-black font-DM text-6xl font-normal">Working & Teaching Experiences</h2>
  </div>
  <p className="text-sm text-gray-500 font-DM">
    I have contributed actively to some key research topics and articles
  </p>
  <div className=" w-full flex flex-col justify-center items-center gap-20">
{Experience.map((experience)=>(
    <div key={experience.id} className="flex flex-row justify-between items-center gap-96">
        <div className=" w-4/5 flex flex-col justify-center items-start gap-2">
          <span className="text-gray-700 text-lg uppercase font-DM">{experience.startDate} - {experience.endDate}</span>
          <h4 className="text-3xl font-DM font-medium text-black">{experience.role}, {experience.company}</h4>
          <p className="text-md text-gray-500 font-DM">{experience.description}</p>
          </div>
          <div className="w-1/5">
            <button className="rounded-full border border-black px-5 py-2 text-md text-black">
              <Link href={experience.link}>
              Visit Link
              </Link>
            </button>
            </div>
    </div>
))}
  </div>
</motion.section>


    </main>
  );
}
