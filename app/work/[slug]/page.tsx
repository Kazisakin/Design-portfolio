import { notFound } from 'next/navigation';
import { projects } from '../../data/projects';
import ProjectDetail from '../../components/ProjectDetail';
import CaseStudy from '../../components/CaseStudy';
import { cases } from '../../data/cases';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Not Found' };
  return {
    title: `${project.title === 'ROBOFLIGHT' ? 'RoboFlight' : project.title} — Kazi Sakin Design`,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return cases[slug] ? <CaseStudy slug={slug} /> : <ProjectDetail project={project} />;
}
