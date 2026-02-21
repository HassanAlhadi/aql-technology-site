import { motion } from 'framer-motion';
import { Shield, Cloud, Brain, LineChart } from 'lucide-react';

const skills = [
    {
        title: 'Cybersecurity Services',
        description: 'Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.',
        tags: ['Advanced Penetration Testing', 'Application Security Assessment', 'Comprehensive Security Audits', 'DevSecOps Integration'],
        icon: Shield,
        id: 'SEC.01'
    },
    {
        title: 'Digital Platforms',
        description: 'Build scalable, secure digital platforms tailored to your business needs with cutting-edge technologies.',
        tags: ['Custom Enterprise Systems', 'Real-time Dashboards', 'Secure API Integrations', 'Cloud-Native Solutions'],
        icon: Cloud,
        id: 'PLT.02'
    },
    {
        title: 'Artificial Intelligence',
        description: 'Use AI to automate work, understand your data better, and move faster than the competition.',
        tags: ['Predictive Analytics', 'Intelligent Process Automation', 'Machine Learning Models', 'AI-Powered Decision Making'],
        icon: Brain,
        id: 'AII.03'
    },
    {
        title: 'Strategic Consulting',
        description: 'Expert guidance to align your technology strategy with business objectives and regulatory requirements.',
        tags: ['IT Governance Framework', 'Compliance & Risk Management', 'Digital Transformation Strategy', 'Technical Architecture Design'],
        icon: LineChart,
        id: 'CNS.04'
    }
];

export default function SkillsSection() {
    return (
        <section id="capabilities" className="relative w-full bg-charcoal-900 border-t border-saudi-accent/20 py-32 overflow-hidden z-10">
            <div className="max-w-[1600px] mx-auto px-6 md:px-[6%]">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1 }}
                    className="flex flex-col mb-16 border-l-4 border-saudi-accent pl-6"
                >
                    <div className="inline-flex items-center gap-3 mb-4">
                        <span className="font-mono text-[10px] tracking-[0.3em] text-saudi-accent uppercase">SYS_CAPABILITIES // ACTIVE</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] font-sans">
                        OPERATIONAL<br />INFRASTRUCTURE.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-1 border-t border-white/10 pt-1">
                    {skills.map((skill, idx) => (
                        <motion.div
                            key={skill.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className="group flex flex-col bg-charcoal-950 p-8 border-r border-b border-white/5 hover:bg-white/[0.02] transition-colors relative"
                        >
                            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] tracking-widest text-white/20 group-hover:text-saudi-accent transition-colors">
                                {skill.id}
                            </div>

                            <div className="w-12 h-12 flex items-center justify-center bg-white/[0.02] border border-white/10 mb-8 group-hover:border-saudi-accent/50 transition-colors">
                                <skill.icon className="w-5 h-5 text-gray-400 group-hover:text-saudi-accent transition-colors" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4 tracking-tight uppercase leading-snug">{skill.title}</h3>
                            <p className="text-gray-400 font-mono text-xs leading-relaxed mb-8 flex-grow">
                                {skill.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {skill.tags.map(tag => (
                                    <span key={tag} className="font-mono text-[9px] tracking-[0.15em] uppercase text-white/40 border border-white/10 px-2 py-1 bg-white/[0.01]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
