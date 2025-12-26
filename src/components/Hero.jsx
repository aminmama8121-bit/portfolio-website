import { useState, useEffect } from 'react'
import { Github, Mail, ArrowRight } from 'lucide-react'

const Hero = () => {
  const [text, setText] = useState('')
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const fullText = 'Fullstack Developer building modern web applications'

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1))
      }, 50)
      return () => clearTimeout(timeout)
    } else {
      setIsTypingComplete(true)
    }
  }, [text])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient dark:mesh-gradient">
        {/* Subtle animated glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Greeting */}
        <p className="text-violet-400 font-medium mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          Hey there, I'm
        </p>

        {/* Name with gradient */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500 bg-clip-text text-transparent animate-gradient">
            Amin
          </span>
        </h1>

        {/* Typing subtitle */}
        <div className="h-12 mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300">
            <span className={isTypingComplete ? '' : 'typing-cursor'}>{text}</span>
          </h2>
        </div>

        {/* Bio */}
        <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          I create fast, accessible, and beautiful web experiences using React, Python, and modern technologies.
          Currently available for freelance projects.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
          {/* Primary Button */}
          <button
            onClick={() => scrollToSection('projects')}
            className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold rounded-xl overflow-hidden shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/40 hover:scale-105 transition-all duration-300 btn-shine"
          >
            <span className="relative flex items-center justify-center gap-2">
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          {/* Secondary Button */}
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-semibold rounded-xl hover:border-violet-500 dark:hover:border-violet-500 hover:bg-violet-500/10 hover:shadow-lg hover:shadow-violet-500/20 hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
          <a
            href="https://github.com/aminmama8121-bit"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-xl bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 hover:bg-violet-500/20 hover:text-violet-500 hover:scale-110 hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="mailto:aminmama8121@gmail.com"
            className="group p-3 rounded-xl bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 hover:bg-violet-500/20 hover:text-violet-500 hover:scale-110 hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
        <button
          onClick={() => scrollToSection('projects')}
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-violet-500 transition-colors"
        >
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  )
}

export default Hero
