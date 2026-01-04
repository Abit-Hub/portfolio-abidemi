import { notFound } from "next/navigation";
import { projects } from "../../../lib/data/projects";

// Do a deep search research on generateStaticParams and how it works with dynamic routes in Next.js 14 app directory
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen py-20">
      <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
      <p className="text-xl mb-8">{project.tagline}</p>
      <div className="prose">
        <p>{project.description}</p>
      </div>
    </main>
  );
}
