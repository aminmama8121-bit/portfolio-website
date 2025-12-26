import { useEffect, useRef, useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: 1,
      title: 'SaaS Landing Page',
      description: 'Modern landing page with responsive layout, smooth animations, and conversion-optimized design.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      tech: ['React', 'Tailwind CSS', 'Vite'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      color: 'violet'
    },
    {
      id: 2,
      title: 'Weather Application',
      description: 'Clean weather app with API integration, location search, and 5-day forecast display.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop',
      tech: ['React', 'OpenWeather API', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      color: 'blue'
    },
    {
      id: 3,
      title: 'E-commerce Product Page',
      description: 'Product page with cart functionality, size selection, and smooth user experience.',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=500&fit=crop',
      tech: ['React', 'Tailwind CSS', 'Context API'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      color: 'rose'
    },
    {
      id: 4,
      title: 'Analytics Dashboard',
      description: 'Professional dashboard with interactive charts and real-time data visualization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      tech: ['React', 'Recharts', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      color: 'emerald'
    },
    {
      id: 5,
      title: 'Task Management App',
      description: 'Feature-rich task manager with categories, filters, and drag-and-drop functionality.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop',
      tech: ['React', 'Tailwind CSS', 'LocalStorage'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      color: 'amber'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Modern portfolio with smooth animations, dark mode, and responsive design.',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=500&fit=crop',
      tech: ['React', 'Tailwind CSS', 'Vite'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      color: 'fuchsia'
    }
  ]

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-violet-500 font-medium mb-4">My Work</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            A selection of projects that showcase my skills in frontend development, UI design, and problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:border-violet-500/50 dark:hover:border-violet-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${150 + index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-fuchsia-600/0 group-hover:from-violet-600/5 group-hover:to-fuchsia-600/5 transition-all duration-500 z-10 pointer-events-none" />

              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Overlay with buttons on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-white text-gray-900 rounded-lg font-medium hover:scale-105 transition-transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
                    style={{ transitionDelay: '100ms' }}
                  >
                    <span className="flex items-center gap-2">
                      <ExternalLink size={16} />
                      Demo
                    </span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 border-2 border-white text-white rounded-lg font-medium hover:scale-105 transition-transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
                    style={{ transitionDelay: '150ms' }}
                  >
                    <span className="flex items-center gap-2">
                      <Github size={16} />
                      Code
                    </span>
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6 z-20">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-violet-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom gradient line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className={`text-center mt-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '800ms' }}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-semibold rounded-xl hover:border-violet-500 dark:hover:border-violet-500 hover:bg-violet-500/10 hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300"
          >
            <Github size={20} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
