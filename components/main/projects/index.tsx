import ProjectCard from "../../project-card";
import { projects } from "@/data/projects";


export default function Projects(): JSX.Element {
   return (
      <section
         id="projects"
         className="container w-full pb-6 z-30 overflow-hidden my-6 flex items-center flex-col gap-14"
      >
         <h2 className="text-bold text-3xl text-center my-4 text-primary">My Recents projects</h2>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project: IprojectCard, key: number) => (
               <ProjectCard
                  key={key}
                  title={project.title}
                  description={project.description}
                  picture={project.picture}
                  github={project.github}
                  view={project.view}
               />
            ))}
         </div>
      </section>
   );
}
