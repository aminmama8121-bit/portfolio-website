import { useEffect, useRef, useState } from 'react'
import { Code2, Palette, Zap, Users } from 'lucide-react'

const About = () => {
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

  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code with best practices'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'UI/UX Focus',
      description: 'Creating beautiful, intuitive user experiences'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance',
      description: 'Building fast, optimized applications'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaboration',
      description: 'Working effectively with teams and clients'
    }
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-violet-500 font-medium mb-4">About Me</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Passionate about building{' '}
              <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                great products
              </span>
            </h2>

            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                I'm a fullstack developer based in Baku, Azerbaijan with a passion for creating
                exceptional digital experiences. I specialize in building modern web applications
                using React, Python, and other cutting-edge technologies.
              </p>
              <p>
                My approach combines clean code practices with a keen eye for design. I believe
                that great software is not just functional—it should be a joy to use and maintain.
              </p>
              <p>
                When I'm not coding, I'm exploring new technologies, contributing to open-source,
                or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-6 mt-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {[
                { number: '5+', label: 'Projects' },
                { number: '2+', label: 'Years Exp' },
                { number: '100%', label: 'Satisfied' }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50 hover:border-violet-500/50 dark:hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 flex items-center justify-center text-violet-500 mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-violet-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
