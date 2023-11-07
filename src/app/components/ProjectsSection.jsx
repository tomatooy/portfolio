"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "UGA CSSA Website",
    description: "a full-stack website built for CSSA student association",
    image: "/images/projects/project1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tomatooy/CSSAUGA",
    previewUrl: "https://ugacssa.vercel.app/",
  },
  {
    id: 2,
    title: "MEET",
    description: "a feature-rich social media platform",
    image: "/images/projects/project2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tomatooy/meet",
    previewUrl: "",
  },
  {
    id: 3,
    title: "My Cinema",
    description: "php cinema booking web applicationn",
    image: "/images/projects/project3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tomatooy/myCinema",
    previewUrl: "",
  },
  {
    id: 4,
    title: "Shopster",
    description: "E-commerce Website",
    image: "/images/projects/project4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tomatooy/Shopster-main",
    previewUrl: "",
  },
  {
    id: 5,
    title: "ShareRide",
    description: "Ride Sharing Android Mobile App",
    image: "/images/projects/project5.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/tomatooy/shareRide",
    previewUrl: "",
  },
  {
    id: 6,
    title: "Acme",
    description: "NextJS tutorial dashboard app",
    image: "/images/projects/project6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tomatooy/next-tutorial",
    previewUrl: "https://next-tutorial-navy-nu.vercel.app",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="mt-16 py-16 snap-start">
      <h2 className="text-center text-6xl text-black mt-4 mb-2 md:mb-8">
       PROJECTS
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
