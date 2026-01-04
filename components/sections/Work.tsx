// import { projects } from ''

import { projects } from "../../lib/data/projects";

export default function Work() {
  return (
    <section id="work" className="min-h-screen py-20">
      <h2 className="text-4xl font-bold mb-12">Selected Work</h2>
      <div className="grid gap-8">
        {projects.map((project) => (
          <div key={project.slug} className="p-6 border">
            <h3 className="text-2xl">{project.title}</h3>
            <p>{project.tagline}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
