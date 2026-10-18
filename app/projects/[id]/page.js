import { Suspense } from "react";
import { notFound } from "next/navigation";

import { projects } from "@/data/projects";


import Footer from "@/Components/Home/footer";

import { ProjectHero } from "@/Components/Projects/hero";
import { ProjectOverview } from "@/Components/Projects/Overview";
import { ProjectAudience } from "@/Components/Projects/Audience";
import { ProjectFeatures } from "@/Components/Projects/features";
import { ProjectShowcase } from "@/Components/Projects/Showcase";
import { ProjectChallenges } from "@/Components/Projects/challenges";
import { ProjectLearnings } from "@/Components/Projects/Learning";
import { ProjectNavigation } from "@/Components/Projects/navigation";

const ProjectDetails = async ({ params }) => {
  const { id } = await params;

  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#06130F] text-[#EFE8D8]">

      
      <ProjectHero project={project} />

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-14 ">
          <aside className="pt-8 lg:py-12">
            <div className="lg:sticky lg:top-8">
              <ProjectNavigation
                projects={projects}
                currentProject={project}
              />
            </div>
          </aside>

          <div className="min-w-0">
            <ProjectOverview project={project} />
            <ProjectAudience project={project} />
            <ProjectFeatures project={project} />
            <ProjectShowcase project={project} />
            <ProjectChallenges project={project} />
            <ProjectLearnings project={project} />
            
          </div>
        </div>
      </div>

      <Footer/>
    </main>
  );
};

const ProjectDetailsPage = ({ params }) => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#06130F]" />
      }
    >
      <ProjectDetails params={params} />
    </Suspense>
  );
};

export default ProjectDetailsPage;