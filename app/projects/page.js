import WorkCTA from "@/Components/work/cta";
import ProjectsGrid from "@/Components/work/projectGrid";
import WorkHero from "@/Components/work/hero";

import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Home/footer";

export const metadata = {
  title: "Projects",
  description:
    "Explore Jawad Khan's full-stack web development projects, including web applications built with React, Next.js, Node.js, Express, and MongoDB.",
};

const ProjectsPage = () => {
return ( <main className="min-h-screen bg-[#0F1D18]"> <Navbar />

  <WorkHero />

  <ProjectsGrid />

  <WorkCTA />

  <Footer />
</main>


);
};

export default ProjectsPage
