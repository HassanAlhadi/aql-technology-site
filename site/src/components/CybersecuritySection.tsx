import { motion } from 'framer-motion';
import { Shield, Target, Crosshair, FileCheck, Radar } from 'lucide-react';

const services = [
    { icon: Target, name: 'Penetration Testing', id: 'PT.01' },
    { icon: Shield, name: 'Security Assessments', id: 'SA.02' },
    { icon: Crosshair, name: 'Red Team / Blue Team', id: 'RB.03' },
    { icon: FileCheck, name: 'Governance & Compliance', id: 'GC.04' },
    { icon: Radar, name: 'Threat Intelligence', id: 'TI.05' },
];

export default function CybersecuritySection() {
    return (
        <section id="cybersecurity" className="relative w-full min-h-screen bg-charcoal-950 border-t border-saudi-accent/20 py-32 overflow-hidden flex flex-col justify-center">
            {/* Background Grid Lines */}
            <div className="absolute top-0 bottom-0 left-[10%] w-[1px] bg-white/5 z-0 hidden lg:block" />
            <div className="absolute top-0 bottom-0 left-[50%] w-[1px] bg-white/5 z-0 hidden lg:block" />
            <div className="absolute top-[30%] left-0 right-0 h-[1px] bg-white/5 z-0 hidden lg:block" />

            <div className="max-w-[1600px] mx-auto px-6 md:px-[6%] relative z-10 w-full flex flex-col lg:flex-row items-center gap-16">

                {/* Left Side: Content & List */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full lg:w-1/2 flex flex-col border-l-4 border-saudi-accent pl-6 lg:pl-12 py-8 bg-charcoal-900/60 backdrop-blur-sm"
                >
                    <div className="inline-flex items-center gap-3 mb-8">
                        <span className="w-2 h-2 bg-saudi-accent animate-pulse" />
                        <h3 className="font-mono text-[10px] tracking-[0.3em] text-white/50 uppercase">DEFENSE_INFRASTRUCTURE // ACTIVE</h3>
                    </div>

                    <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold mb-8 text-white tracking-tight leading-[0.95] font-sans">
                        FORTIFIED<br />COMMAND.
                    </h2>

                    <p className="text-gray-400 font-mono text-sm mb-16 max-w-lg leading-relaxed mix-blend-lighten">
                        Historical depth transformed into controlled digital defense. We architect national-level cyber layers designed to withstand the most complex multi-vector threats.
                    </p>

                    <div className="flex flex-col gap-2 w-full max-w-lg">
                        {services.map((service, idx) => (
                            <motion.div
                                key={service.name}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                                className="group flex flex-row items-center justify-between p-5 border border-white/10 bg-charcoal-950 hover:bg-white/[0.03] transition-colors cursor-default relative overflow-hidden"
                            >
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-saudi-accent transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom" />
                                <div className="flex items-center gap-6 text-gray-400 group-hover:text-white transition-colors z-10 pl-2">
                                    <service.icon className="w-5 h-5 text-saudi-accent/50 group-hover:text-saudi-accent transition-colors" />
                                    <span className="font-sans font-bold tracking-wide uppercase text-sm">{service.name}</span>
                                </div>
                                <span className="font-mono text-[10px] text-white/30 tracking-[0.2em] group-hover:text-saudi-accent transition-colors">{service.id}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Side: Architectural Imagery */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="w-full lg:w-1/2 relative flex justify-center lg:justify-end mt-16 lg:mt-0"
                >
                    <div className="relative w-full max-w-xl aspect-square border-2 border-white/10 p-4 bg-charcoal-900 group">
                        <img
                            src="/cybersecurity.png"
                            alt="Cybersecurity Fortress Architecture"
                            className="w-full h-full object-cover filter grayscale-[0.8] contrast-125 brightness-90 group-hover:grayscale-[0.2] transition-all duration-[2s] ease-out mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:mix-blend-normal"
                        />
                        {/* Targeting Box / Brutalist Details */}
                        <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-saudi-accent z-20 pointer-events-none transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:top-0 group-hover:left-0 group-hover:border-white/20" />
                        <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-saudi-accent z-20 pointer-events-none transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:bottom-0 group-hover:right-0 group-hover:border-white/20" />
                    </div>

                    {/* Floating structural node decoration */}
                    <div className="absolute -bottom-10 -left-10 z-30 p-6 border border-saudi-accent/40 bg-charcoal-950 backdrop-blur-md hidden md:block">
                        <div className="font-mono text-[10px] text-saudi-accent tracking-[0.3em] mb-2 uppercase">NODE.DEFENSE // ONLINE</div>
                        <div className="font-mono text-white/40 text-[10px] tracking-widest uppercase mb-1">Packet Inspection: <span className="text-white">Active</span></div>
                        <div className="font-mono text-white/40 text-[10px] tracking-widest uppercase">Firewall Integrity: <span className="text-saudi-light">100%</span></div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
