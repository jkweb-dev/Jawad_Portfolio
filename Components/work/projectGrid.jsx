import ProjectCard from "./projectCard";

const projects = [
{
title: "Security Guard Management",
category: "Management System",
type: "Full Stack",
description:
"A centralized system for managing guard assignments, attendance, fines, supervisors, and operations across four security zones.",
image: "/images/projects/security 5.png",
technologies: ["Next.js", "Node.js", "Express", "MongoDB"],
href: "",
 github:"https://github.com/jkweb-dev/Security-Management-System.git"
},
{
title: "RecruitFlow ATS",
category: "Recruitment Platform",
type: "Full Stack",
description:
"A recruitment management platform with candidate pipelines, drag-and-drop application stages, analytics, and password-reset functionality.",
image: "/images/projects/Application Tracking 2.png",
technologies: ["Next.js", "Node.js", "Express", "MongoDB"],
href: "",
 github:"https://github.com/jkweb-dev/Application-Tracking-System-SAAS-.git"
},
{
title: "AI Customer Support",
category: "AI Application",
type: "Full Stack",
description:
"An AI support assistant that answers questions using uploaded documents through text extraction, embeddings, and similarity-based retrieval.",
image: "/images/projects/Ai4.png",
technologies: ["Next.js", "Gemini", "MongoDB","Socket.IO" , "Embeddings"],
href: "",
 github:"https://github.com/jkweb-dev/Ai-Customer-Support-System.git"
},
{
title: "Disaster Response",
category: "Emergency Management",
type: "Full Stack",
description:
"A role-based emergency response platform for incident reporting, location mapping, rescue-team coordination, and live status updates.",
image: "/images/projects/Disaster 2.png",
technologies: ["Next.js", "Node.js", "MongoDB", "Leaflet"],
href: "",
 github:"https://github.com/jkweb-dev/Disaster-Management-System.git"
},
{
title: "DineFlow",
category: "Restaurant Platform",
type: "Full Stack",
description:
"A restaurant ordering and management platform with menu administration, checkout, order tracking, and delivery workflows.",
image: "/images/projects/DineFlow1.png",
technologies: ["Next.js", "Express", "MongoDB", "Cloudinary"],
href: "",
 github: "https://github.com/jkweb-dev/Dine_Flow.git"
},
{
title: "E-commerce Website",
category: "Online Store",
type: "Web Application",
description:
"A product-focused online shopping experience designed to make browsing products and exploring an online store simple and intuitive.",
image: "/images/projects/Ecommerce6.png",
technologies: ["React", "JavaScript", "CSS" , "MongoDB"],
href: "",
 github: "https://github.com/jkweb-dev/Basic-E_commerce-.git"
},
];

const ProjectsGrid = () => {
return ( <section
   id="projects"
   className="bg-[#0F1D18] px-5 pb-20 pt-10 text-[#EFE8D8] sm:px-8 sm:pb-28 lg:px-12"
 > <div className="mx-auto max-w-7xl">
{/* Section heading */} <div className="mb-10 flex flex-col gap-4 border-b border-[#EFE8D8]/15 pb-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between"> <div> <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[#C9A55C]">
The Portfolio </p>


        <h2 className="font-serif text-3xl tracking-tight sm:text-4xl md:text-5xl">
          Selected projects<span className="text-[#C9A55C]">.</span>
        </h2>
      </div>

      <p className="max-w-sm text-sm leading-6 text-[#EFE8D8]/50">
        Six projects. Different challenges. One focus on building useful
        digital experiences.
      </p>
    </div>

    {/* Responsive project cards */}
    <div className="grid grid-cols-1 gap-x-7 gap-y-12 md:grid-cols-2 md:gap-y-16">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.title}
          project={project}
          index={index}
        />
      ))}
    </div>
  </div>
</section>

);
};

export default ProjectsGrid ;
