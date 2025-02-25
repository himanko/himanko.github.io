export default function ProjectCard({ project }) {
  return (
    <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1.5">
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <span className="inline-flex items-center text-white font-medium text-sm">
              View Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="text-lg font-semibold text-neutral-800 line-clamp-1">
            {project.title}
          </h3>
          {project.category && (
            <span className="text-sm text-yellow-400 font-medium inline-block mt-1">
              {project.category}
            </span>
          )}
        </div>

        {project.description && (
          <p className="text-neutral-600 text-sm leading-snug line-clamp-2">
            {project.description}
          </p>
        )}

        {/* Tech Stack */}
        {project.tech && project.tech.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tech.map((technology, index) => (
              <span
                key={index}
                className="px-2.5 py-1 bg-neutral-100 text-neutral-600 rounded-full text-xs font-medium transition-colors duration-200 group-hover:bg-neutral-200/80"
              >
                {technology}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Hidden Link for Accessibility */}
      <a
        href={project.link}
        className="absolute inset-0 z-10 focus:outline-none focus:ring-2 ring-offset-2 ring-red-500 rounded-xl"
        aria-label={`View ${project.title} project`}
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  )
}