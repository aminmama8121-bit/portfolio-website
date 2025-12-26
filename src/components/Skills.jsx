import { useEffect, useRef, useState } from 'react'
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiFastapi,
  SiVite,
  SiVercel,
  SiGithub,
  SiHtml5,
  SiCss3
} from 'react-icons/si'

const Skills = () => {
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

  const technologies = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
    { name: 'Vite', icon: SiVite, color: '#646CFF' },
  ]

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-violet-500 font-medium mb-4">Technologies</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Tools
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon
            return (
              <div
                key={tech.name}
                className={`group relative flex flex-col items-center gap-3 p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50 hover:border-violet-500/50 dark:hover:border-violet-500/50 hover:bg-gradient-to-br hover:from-violet-500/5 hover:to-fuchsia-500/5 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-2 cursor-pointer transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + index * 50}ms` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-violet-500/0 group-hover:bg-violet-500/5 blur-xl transition-all duration-300 -z-10" />

                {/* Icon with grayscale to color effect */}
                <div className="relative">
                  <IconComponent
                    className="w-12 h-12 transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:scale-110"
                    style={{ color: tech.color }}
                  />
                </div>

                {/* Name */}
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors text-center">
                  {tech.name}
                </span>
              </div>
            )
          })}
        </div>

        {/* Additional Skills Categories */}
        <div className={`grid md:grid-cols-3 gap-6 mt-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '800ms' }}>
          {[
            {
              title: 'Frontend',
              skills: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS'],
              gradient: 'from-blue-500 to-cyan-500'
            },
            {
              title: 'Backend',
              skills: ['Python', 'Node.js', 'FastAPI', 'REST APIs', 'GraphQL'],
              gradient: 'from-violet-500 to-purple-500'
            },
            {
              title: 'Tools & Others',
              skills: ['Git', 'Docker', 'Vercel', 'VS Code', 'Figma'],
              gradient: 'from-fuchsia-500 to-pink-500'
            }
          ].map((category) => (
            <div
              key={category.title}
              className="group p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50 hover:border-violet-500/50 dark:hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300"
            >
              <h3 className={`text-lg font-bold mb-4 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-violet-500/10 hover:text-violet-600 dark:hover:text-violet-400 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
