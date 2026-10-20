import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2, Info, ArrowUpRight } from 'lucide-react';
import { Github } from './Icons';
import { projectsData } from '../data/content';
import { ProjectModal } from './ProjectModal';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filterCategories = ['All', 'Computer Vision & ML', 'Full-Stack (MERN)'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => {
        if (activeFilter === 'Computer Vision & ML') {
          return p.category.includes('Vision') || p.category.includes('ML') || p.category.includes('AI');
        }
        if (activeFilter === 'Full-Stack (MERN)') {
          return p.category.includes('Full-Stack');
        }
        return true;
      });

  return (
    <section id="projects" aria-label="Projects" className="py-16 sm:py-24 border-t border-[#5882E8]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#11162b] border border-[#5882E8]/30 text-[#5882E8] text-xs font-mono uppercase tracking-wider mb-2">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Research & Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
            Selected Projects
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
            Applied deep learning architectures, monocular 3D estimation, and scalable production platforms.
          </p>

          {/* Filter Tabs — Solid Colors, Zero Gradients */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                data-bubble="true"
                className={`bubble-interactive px-3.5 py-1.5 rounded-md text-xs font-mono font-medium transition-colors cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#E3EF4F] text-[#0b0e1b] font-semibold'
                    : 'bg-[#11162b] text-slate-300 border border-[#5882E8]/30 hover:border-[#5882E8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#11162b] border border-[#5882E8]/25 hover:border-[#5882E8] rounded-xl p-6 flex flex-col justify-between transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#0F42C0]/25 text-[#5882E8] border border-[#5882E8]/30">
                    {project.category}
                  </span>
                  <span
                    className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                      project.status === 'In progress'
                        ? 'bg-[#E3EF4F]/10 text-[#E3EF4F] border-[#E3EF4F]/30'
                        : 'bg-[#5882E8]/10 text-[#5882E8] border-[#5882E8]/30'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <h3
                  onClick={() => setSelectedProject(project)}
                  className="font-serif font-bold text-xl sm:text-2xl text-white group-hover:text-[#E3EF4F] transition-colors cursor-pointer leading-snug"
                >
                  {project.title}
                </h3>

                <p className="mt-1 text-xs sm:text-sm font-serif italic text-[#5882E8]">
                  {project.subtitle}
                </p>

                <p className="mt-3.5 text-sm text-slate-300 leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#5882E8]/20">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-xs font-mono bg-[#0b0e1b] text-slate-300 border border-[#5882E8]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    data-bubble="true"
                    className="bubble-interactive inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#5882E8] hover:text-[#E3EF4F] transition-colors cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>View Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-bubble="true"
                      aria-label={`${project.title} GitHub repository`}
                      className="bubble-interactive p-2 rounded-md bg-[#0b0e1b] border border-[#5882E8]/30 text-slate-300 hover:text-[#E3EF4F] hover:border-[#E3EF4F] transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-bubble="true"
                        aria-label={`${project.title} live preview`}
                        className="bubble-interactive p-2 rounded-md bg-[#0b0e1b] border border-[#5882E8]/30 text-slate-300 hover:text-[#E3EF4F] hover:border-[#E3EF4F] transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
