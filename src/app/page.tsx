"use client";

import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  MapPin, 
  GraduationCap, 
  Code, 
  Briefcase, 
  Terminal, 
  ExternalLink,
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[#050505] min-h-screen text-neutral-300 selection:bg-indigo-500/30 font-sans px-4 py-8 md:p-12">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* --- LEFT SIDEBAR (Sticky & Professional) --- */}
        <aside className="lg:col-span-4 lg:h-screen lg:sticky lg:top-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-neutral-900/40 border border-white/5 rounded-[2rem] p-8 backdrop-blur-xl shadow-2xl"
          >
            {/* Profile Header */}
            <div className="relative group w-24 h-24 mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative w-full h-full bg-neutral-900 rounded-2xl flex items-center justify-center text-4xl font-black text-white border border-white/10">
                R
              </div>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tighter text-white mb-2 leading-tight">
              Rayan <br/> Saadani Hassani
            </h1>
            <p className="text-indigo-400 font-medium tracking-wide mb-8 uppercase text-xs">
              Software Engineering Student
            </p>

            {/* Info List */}
            <div className="space-y-4 mb-10 text-sm">
              <SidebarLink icon={<MapPin size={16}/>} label="Ottawa, Ontario, Canada" />
              <SidebarLink icon={<GraduationCap size={16}/>} label="uOttawa (Dean's Honour List)" />
              <SidebarLink icon={<Code size={16}/>} label=".NET, Python, React, AWS" />
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <a href="mailto:shmrayan@gmail.com" className="w-full bg-white text-black py-4 rounded-2xl font-bold hover:scale-[1.02] active:scale-95 transition-all flex justify-center items-center gap-2 shadow-lg shadow-white/5">
                <Mail size={18}/> Contact Me
              </a>
              <div className="grid grid-cols-2 gap-3">
                <SocialLink href="https://linkedin.com/in/Saadani-Hassani-Rayan" icon={<Linkedin size={20}/>} label="LinkedIn" />
                <SocialLink href="https://github.com/ShmRayan" icon={<Github size={20}/>} label="GitHub" />
              </div>
              <a href="#" className="w-full border border-white/10 py-4 rounded-2xl font-medium hover:bg-white/5 transition flex justify-center items-center gap-2 text-neutral-400">
                <Download size={18}/> Download Resume
              </a>
            </div>
          </motion.div>
        </aside>

        {/* --- MAIN CONTENT (Scrollable & Dynamic) --- */}
        <main className="lg:col-span-8 flex flex-col gap-24">
          
          {/* SECTION: EXPERIENCE TIMELINE */}
          <section>
            <SectionHeader icon={<Briefcase size={18}/>} title="Work Experience" />
            
            <div className="space-y-16"> {/* Espace entre les entreprises */}
                
                {/* GROUPE 1 : UOTTAWA (Regroupé) */}
                <CompanyGroup logo="/uottawa.png" company="University of Ottawa">
                    
                    {/* Role 1 */}
                    <RoleItem 
                      title="Software Developer"
                      date="Sep 2024 – Present"
                      type="Internship / Part-time"
                      tags={['.NET', 'C#', 'GitLab CI', 'Azure AD', 'SQL']}
                    />

                    {/* Role 2 */}
                    <RoleItem 
                      title="Teaching Assistant"
                      date="Jan 2025 – Present"
                      type="Part-time"
                      tags={['Python', 'Intro to Software Eng.', 'Digital Systems']}
                    />

                </CompanyGroup>

                {/* GROUPE 2 : KRUGER */}
                <CompanyGroup logo="/kruger2.png" company="Kruger Products">
                    
                    <RoleItem 
                      title="Data Analyst"
                      date="Jan 2024 – May 2024"
                      type="Internship"
                      tags={['Power BI', 'SQL', 'Power Automate']}
                    />

                </CompanyGroup>

            </div>
          </section>

          {/* --- SECTION: EDUCATION (Séparée et avec Logo) --- */}
          <section>
             <SectionHeader icon={<GraduationCap size={18}/>} title="Education" />
             
             <div className="space-y-12">
                
                <CompanyGroup logo="/uottawa.png" company="University of Ottawa">
                    <RoleItem 
                      title="BASc in Software Engineering"
                      date="Sep 2022 – Dec 2026"
                      type="Dean's Honour List (GPA: 8.4/10)"
                      desc="Relevant Coursework: Data Structures & Algorithms, Operating Systems, Software QA, User Interfaces, Networking."
                      tags={['CO-OP', 'Engineering']}
                    />
                </CompanyGroup>

             </div>
          </section>

          {/* SECTION: PROJECTS (Compact Grid) */}
          <section>
            <SectionHeader icon={<Terminal size={18}/>} title="Featured Projects" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5"> {/* Grille 2 colonnes */}
                
                <ProjectShowcase 
                  title="AutoApply AI Agent"
                  desc="Intelligent bot using Generative AI & Selenium to automate job applications."
                  stack={['Python', 'Selenium', 'OpenAI']}
                  links={{ repo: "https://github.com/ShmRayan", demo: "#" }} // Mets tes liens ici
                  color="from-indigo-500/20 to-purple-500/20"
                />

                <ProjectShowcase 
                  title="Fitness Coaching App"
                  desc="Full-stack platform with personalized workout plans and secure JWT auth."
                  stack={['React', 'Node.js', 'JWT']}
                  links={{ repo: "https://github.com/ShmRayan", demo: "#" }}
                  color="from-blue-500/20 to-cyan-500/20"
                />

                <ProjectShowcase 
                  title="Task Management"
                  desc="Cloud-native task tracking app containerized with Docker on AWS."
                  stack={['Flask', 'Docker', 'AWS']}
                  links={{ repo: "https://github.com/ShmRayan", demo: "#" }}
                  color="from-orange-500/20 to-red-500/20"
                />

                <ProjectShowcase 
                  title="Online Coaching"
                  desc="UX-focused coaching platform with dynamic scheduling features."
                  stack={['React', 'Figma', 'UX']}
                  links={{ repo: "https://github.com/ShmRayan", demo: "#" }}
                  color="from-emerald-500/20 to-teal-500/20"
                />

            </div>
          </section>

          <footer className="py-12 border-t border-white/5 text-neutral-600 text-[10px] uppercase tracking-[0.2em] flex justify-between">
            <span>© 2025 Rayan Saadani Hassani</span>
            <span>Ottawa, Canada</span>
          </footer>

        </main>
      </div>
    </div>
  );
}

// --- SUB-COMPONENTS (PRO STYLE) ---

function SectionHeader({ icon, title }: { icon: React.ReactNode, title: string }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <div className="p-2 bg-white/5 border border-white/10 rounded-xl text-indigo-400">
        {icon}
      </div>
      <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-neutral-500">
        {title}
      </h3>
    </div>
  );
}

function SidebarLink({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <div className="flex items-center gap-3 text-neutral-400 hover:text-white transition cursor-default group">
      <span className="text-neutral-600 group-hover:text-indigo-400 transition">{icon}</span>
      {label}
    </div>
  );
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <a href={href} target="_blank" className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition group">
      <span className="group-hover:scale-110 transition duration-300">{icon}</span>
    </a>
  );
}

function TimelineCard({ date, title, company, desc, tags, highlight, isEducation }: any) {
  return (
    <div className="relative pl-10 group">
      {/* Animated Dot */}
      <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-4 border-[#050505] transition-all duration-500 group-hover:scale-150 ${isEducation ? 'bg-emerald-500' : 'bg-indigo-500'} ${highlight ? 'shadow-[0_0_15px_rgba(99,102,241,0.5)]' : ''}`}></div>
      
      <div className="bg-white/5 border border-white/5 p-6 rounded-3xl hover:border-white/10 transition group-hover:bg-white/[0.07]">
        <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
          <h4 className="text-xl font-bold text-white tracking-tight">{title}</h4>
          <span className="text-[10px] font-mono text-neutral-500 bg-black/40 px-3 py-1 rounded-full border border-white/5">{date}</span>
        </div>
        <div className={`text-sm font-medium mb-3 ${isEducation ? 'text-emerald-400' : 'text-indigo-400'}`}>{company}</div>
        {desc && <p className="text-sm text-neutral-400 mb-4 leading-relaxed">{desc}</p>}
        
        <div className="flex flex-wrap gap-2">
          {tags.map((t: string) => (
            <span key={t} className="text-[10px] uppercase font-bold tracking-wider text-neutral-500 bg-neutral-800/50 px-2 py-1 rounded border border-white/5">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- COMPOSANTS CORRIGÉS (Logos Full Size & Alignement Parfait) ---

function CompanyGroup({ logo, company, children }: any) {
  return (
    <div className="relative">
      {/* Ligne verticale avec dégradé */}
      <div className="absolute left-[24px] top-12 bottom-0 w-[2px] bg-gradient-to-b from-neutral-800 via-neutral-800 to-transparent"></div>
      
      <div className="flex gap-12"> {/* J'ai augmenté l'espace ici (gap-12) pour aérer */}
        
        {/* LOGO FIX : Prend tout le bloc, fond blanc, coins arrondis */}
        <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-white rounded-xl overflow-hidden flex items-center justify-center border border-white/10 shadow-lg shadow-white/5">
          <img 
            src={logo} 
            alt={company} 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Conteneur des roles */}
        <div className="flex-1 flex flex-col gap-10 pt-1">
            {children}
        </div>
      </div>
    </div>
  );
}

function RoleItem({ title, date, type, desc, tags }: any) {
  return (
    <div className="relative group">
      {/* POINT */}
      <div className="absolute -left-[77px] top-[10px] w-2.5 h-2.5 rounded-full border-2 border-[#050505] bg-indigo-500 hidden group-[&:not(:first-child)]:block shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
      
      {/* HEADER: TITRE + DATE */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
        <h4 className="text-xl font-bold text-neutral-100 tracking-tight group-hover:text-indigo-400 transition">{title}</h4>
        
        {/* Date style "Badge" */}
        <div className="flex items-center gap-2 mt-1 sm:mt-0">
            <span className="text-[10px] font-semibold text-neutral-500 bg-white/5 border border-white/5 px-3 py-1 rounded-full uppercase tracking-wider">
                {date}
            </span>
        </div>
      </div>
      
      {/* TYPE DE POSTE */}
      <div className="text-sm font-medium text-indigo-400/80 mb-3">{type}</div>
      
      {/* DESCRIPTION */}
      {desc && <p className="text-sm text-neutral-400 mb-5 leading-relaxed max-w-2xl">{desc}</p>}
      
      <div className="flex flex-wrap gap-2.5 mt-4">
        {tags.map((t: string) => (
          <span 
            key={t} 
            className="px-3 py-1.5 rounded-full text-[11px] font-medium tracking-wide 
                      text-neutral-300 bg-white/5 border border-white/10 
                      transition-all duration-300 cursor-default shadow-sm"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
function ProjectShowcase({ title, desc, stack, color, links }: any) {
  return (
    <div className="group relative bg-neutral-900/40 border border-white/5 rounded-3xl overflow-hidden hover:bg-neutral-900/60 transition-all duration-500 flex flex-col">
      {/* Background Glow Discret */}
      <div className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br ${color} rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
      
      <div className="relative z-10 p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <h4 className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-400 transition-colors">
            {title}
          </h4>
          <div className="flex gap-2">
            <a href={links?.repo} target="_blank" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 text-neutral-400 hover:text-white transition">
              <Github size={16}/>
            </a>
            <a href={links?.demo} target="_blank" className="p-2 bg-indigo-500/10 rounded-lg hover:bg-indigo-500 text-indigo-400 hover:text-white transition">
              <ExternalLink size={16}/>
            </a>
          </div>
        </div>

        <p className="text-sm text-neutral-400 leading-relaxed mb-6 flex-grow">
          {desc}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {stack.map((s: string) => (
            <span key={s} className="flex items-center gap-1 text-[10px] font-bold text-neutral-500 bg-white/5 px-2 py-1 rounded-lg border border-white/10">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}