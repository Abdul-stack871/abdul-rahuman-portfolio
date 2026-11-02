import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Code2, Brain, Wrench } from 'lucide-react'

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-4 h-4 text-[#FF7547]" />,
      label: 'Education',
      value: 'B.Tech AI & Data Science',
      sub: 'Dr. NGP Institute of Technology',
    },
    {
      icon: <MapPin className="w-4 h-4 text-[#9B72F2]" />,
      label: 'Location',
      value: 'Coimbatore, Tamil Nadu',
      sub: 'India',
    },
    {
      icon: <Code2 className="w-4 h-4 text-[#FF7547]" />,
      label: 'Focus',
      value: 'Full Stack Development',
      sub: 'Web & AI Applications',
    },
    {
      icon: <Brain className="w-4 h-4 text-[#9B72F2]" />,
      label: 'Interests',
      value: 'AI, RAG & LLMs',
      sub: 'Generative AI & Agents',
    },
    {
      icon: <Wrench className="w-4 h-4 text-[#FF7547]" />,
      label: 'Currently',
      value: 'Final Year Student',
      sub: 'Open to Opportunities',
    },
  ]

  return (
    <section id="about" className="py-10 border-t border-[#232328]">
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#FF7547] tracking-wider">00 —</span>
            <h2 className="text-xs font-semibold tracking-wider text-neutral-400 uppercase">
              About Me
            </h2>
          </div>
          <span className="text-[11px] font-semibold tracking-widest text-[#9CA3AF] uppercase hidden sm:block">
            Quick Profile
          </span>
        </div>

        {/* ABOUT CONTENT — 2 COLUMN: TEXT LEFT, HIGHLIGHTS RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

          {/* LEFT — BIO TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-3"
          >
            <p className="text-sm text-neutral-300 leading-relaxed">
              I'm a <span className="text-white font-semibold">Final Year B.Tech AI &amp; Data Science</span> student
              at Dr. NGP Institute of Technology, Coimbatore. I enjoy building software, exploring AI technologies,
              and learning something new along the way.
            </p>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              I like turning ideas into real projects, experimenting with different technologies, and finding better ways
              to solve problems. My primary focus is <span className="text-[#FF7547]">Full Stack Development</span> and
              practical <span className="text-[#9B72F2]">AI applications</span> using modern frameworks.
            </p>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              I've contributed to internships, national hackathons, research paper presentations, and built projects
              spanning RAG-based AI assistants, student accommodation platforms, and generative AI tools.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#FF7547]/10 text-[#FF7547] border border-[#FF7547]/20">
                Open to Internships
              </span>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#9B72F2]/10 text-[#9B72F2] border border-[#9B72F2]/20">
                Open to Full-time Roles
              </span>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#232328] text-neutral-400 border border-[#2B2B32]">
                Available for Freelance
              </span>
            </div>
          </motion.div>

          {/* RIGHT — QUICK STATS GRID */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3"
          >
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="portfolio-card p-3.5 flex items-center gap-3 hover:border-[#FF7547]/30"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0D0D0F] border border-[#232328] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-[#9CA3AF] mb-0.5">{item.label}</p>
                  <p className="text-xs font-semibold text-white truncate">{item.value}</p>
                  <p className="text-[10px] text-neutral-500 truncate">{item.sub}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

