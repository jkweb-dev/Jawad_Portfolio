import WorkCTA from "@/Components/work/cta";
import ProjectsGrid from "@/Components/work/projectGrid";
import WorkHero from "@/Components/work/hero";

import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Home/footer";

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
