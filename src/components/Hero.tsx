import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Download, Github, Linkedin, Mail, Code2, FileText } from 'lucide-react'
import avatarImg from '../assets/profile.jpg'

export const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects')
    if (el) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = el.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Subtle background ambient glow matching screenshot */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-gradient-to-tr from-[#FF7547]/5 via-[#9B72F2]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
        
        {/* HERO PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-6"
        >
          {/* Subtle Ambient Outer Neon Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FF7547] via-[#EC4899] to-[#9B72F2] blur-2xl opacity-50 scale-110 pointer-events-none" />

          {/* Glowing Circular Frame (Orange, Pink & Purple Gradient Border) */}
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full p-[3.5px] bg-gradient-to-tr from-[#FF7547] via-[#EC4899] to-[#9B72F2] shadow-[0_0_35px_rgba(255,117,71,0.4),0_0_65px_rgba(155,114,242,0.3)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#0D0D0F] flex items-center justify-center">
              <img
                src={avatarImg}
                alt="Abdul Rahuman - Full Stack Developer & AI Enthusiast"
                className="w-full h-full object-cover scale-[1.11] object-center"
                loading="eager"
              />
            </div>
          </div>
        </motion.div>

        {/* ACADEMIC STATUS INDICATOR */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151518] border border-[#232328] mb-4 text-xs font-medium text-[#9CA3AF]"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF7547] animate-pulse" />
          <span>Final Year | B.Tech AI &amp; Data Science</span>
        </motion.div>

        {/* MAIN HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-3"
        >
          Hi, I'm <br className="sm:hidden" />
          <span>Abdul </span>
          <span className="text-[#FF7547]">Rahuman</span>
        </motion.h1>

        {/* PROFESSIONAL POSITIONING */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg font-medium text-neutral-300 mb-6 tracking-wide"
        >
          Full Stack Developer <span className="text-[#9B72F2] mx-1.5">•</span> AI Enthusiast <span className="text-[#FF7547] mx-1.5">•</span> Problem Solver
        </motion.p>

        {/* APPROVED INTRODUCTION */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="max-w-2xl text-sm sm:text-base text-[#9CA3AF] leading-relaxed mb-8"
        >
          I enjoy building software, exploring AI technologies, and learning something new along the way. I like turning ideas into real projects, experimenting with different technologies, and finding better ways to solve problems.
        </motion.p>

        {/* HERO CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8"
        >
          <button
            onClick={scrollToProjects}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#FF7547] hover:bg-[#ff855c] transition-all duration-200 shadow-[0_4px_20px_rgba(255,117,71,0.3)] hover:shadow-[0_6px_25px_rgba(255,117,71,0.4)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>View My Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href="/resume.pdf"
            download="Abdul_Rahuman_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium text-white bg-[#151518] border border-[#2B2B32] hover:border-[#FF7547]/50 hover:bg-[#1A1A20] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#9CA3AF]" />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* SOCIAL LINKS ROW */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex items-center justify-center gap-3"
        >
          <a
            href="https://github.com/Abdul-stack871"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#9CA3AF] hover:text-white bg-[#151518] border border-[#232328] hover:border-[#FF7547]/40 hover:bg-[#1A1A20] transition-all"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/abdul-rahuman281/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#9CA3AF] hover:text-white bg-[#151518] border border-[#232328] hover:border-[#FF7547]/40 hover:bg-[#1A1A20] transition-all"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href="https://leetcode.com/u/AbdulStack/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode Profile"
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#9CA3AF] hover:text-white bg-[#151518] border border-[#232328] hover:border-[#FF7547]/40 hover:bg-[#1A1A20] transition-all"
          >
            <Code2 className="w-4 h-4" />
          </a>

          <a
            href="mailto:abdulrahumanrock15@gmail.com"
            aria-label="Send Email"
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#9CA3AF] hover:text-white bg-[#151518] border border-[#232328] hover:border-[#FF7547]/40 hover:bg-[#1A1A20] transition-all"
          >
            <Mail className="w-4 h-4" />
          </a>

          <a
            href="/resume.pdf"
            download="Abdul_Rahuman_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resume"
            title="Download Resume (PDF)"
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#9CA3AF] hover:text-white bg-[#151518] border border-[#232328] hover:border-[#FF7547]/40 hover:bg-[#1A1A20] transition-all"
          >
            <FileText className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
