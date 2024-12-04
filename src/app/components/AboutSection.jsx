"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB,PostgreSQL</li>
        <li>React</li>
        <li>NextJS</li>
        <li>TailWind, MaterialUI</li>
        <li>Java</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>NYU Master in Computer Engineering</li>
        <li>UGA Bachalor in Computer Science</li>
      </ul>
    ),
  },
  {
    title: "Interets",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Web development</li>
        <li>UI/UX Design</li>
        <li>Body Building</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-black py-10  mt-8 h-screen sm:items-center flex justify-center snap-start" id="about">

      <div className="md:grid md:grid-cols-2 gap-10 items-center  xl:gap-16 sm:py-16 xl:px-16">

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h1 className="inline sm:hidden text-4xl mb-5">ABOUT ME</h1>
          <p className="text-black lg:text-lg">
            I am a student at NYU studying computer engineering who is also passionate about building innovative software especially web applications. I have experience
            working with most modern web development techonologies including  TypeScript, React, Node.js, Express, MongoDB. I am a quick learner and I am always
            looking forward to learning something new!
          </p>
          <div className="flex flex-row justify-start mt-8 text-black">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Interests{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
        <div className=" h-full flex-col">
        <h1 className="text-center text-7xl z-2 hidden sm:block">ABOUT ME</h1>
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg  "></div>
        </div>
      </div>
      
    </section>
  );
};

export default AboutSection;
