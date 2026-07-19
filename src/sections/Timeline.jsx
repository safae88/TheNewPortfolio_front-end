// Timeline.jsx
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { timeline } from "../data/timeline";
import SectionHeading from "../components/ui/SectionHeading";
import { fadeUp, staggerContainer } from "../hooks/animations";

const icons={education:GraduationCap,experience:Briefcase};

export default function Timeline(){
return(
<section id="experience" className="section-padding relative overflow-hidden">
<div className="mx-auto max-w-6xl">
<SectionHeading eyebrow="Experience & Education" title="My journey so far" description="A timeline of learning, building, and growing as a software engineer."/>
<motion.div className="relative mt-16" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once:true,margin:"-80px"}}>
<div className="absolute left-4 top-0 h-full w-px bg-neutral-200 dark:bg-slate-700 md:left-1/2 md:-translate-x-px"/>
<div className="space-y-12">
{timeline.map((item,index)=>{const Icon=icons[item.type]||Briefcase;const isLeft=index%2===0;return(
<motion.div key={item.id} variants={fadeUp} className={`relative flex flex-col md:flex-row ${isLeft?"md:flex-row-reverse":""}`}>
<div className="hidden flex-1 md:block"/>
<div className="absolute left-4 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:ring-4 dark:ring-slate-700/50 dark:shadow-lg dark:shadow-cyan-500/10 md:left-1/2">
<Icon size={18} className="text-neutral-700 dark:text-slate-300"/>
</div>
<motion.div className={`ml-14 flex-1 md:ml-0 ${isLeft?"md:pr-12 md:text-right":"md:pl-12"}`} whileHover={{y:-6}} transition={{type:"spring",stiffness:280,damping:18}}>
<div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800/70 dark:backdrop-blur-xl dark:hover:bg-slate-700/80 dark:shadow-2xl dark:shadow-black/20 md:p-8">
<span className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-400 dark:text-slate-400">{item.period}</span>
<h3 className="mt-2 text-xl md:text-2xl font-bold text-neutral-950 dark:text-white" style={{fontFamily:"var(--font-display)"}}>{item.title}</h3>
<p className="mt-1 text-sm font-medium text-neutral-500 dark:text-slate-400">{item.organization}</p>
<p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-slate-300">{item.description}</p>
</div>
</motion.div>
</motion.div>
)})}
</div>
</motion.div>
</div>
</section>
)}
