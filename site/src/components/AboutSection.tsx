import { motion } from 'framer-motion';

export default function AboutSection() {
    return (
        <section id="about" className="relative w-full bg-charcoal-950 border-t border-white/5 py-32 overflow-hidden z-10">
            <div className="max-w-[1600px] mx-auto px-6 md:px-[6%]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Column: Title & Label */}
                    <div className="lg:col-span-4 flex flex-col">
                        <div className="inline-flex items-center gap-3 mb-16">
                            <span className="w-1.5 h-1.5 bg-saudi-accent opacity-80" />
                            <h3 className="font-mono text-xs tracking-[0.3em] text-white/50 uppercase">AQL_TECHNOLOGY_NODE</h3>
                        </div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight leading-[1.1] font-sans border-l-4 border-saudi-accent pl-6"
                        >
                            SECURE.<br />INNOVATIVE.<br /><span className="text-white/40">INTELLIGENT.</span>
                        </motion.h2>
                    </div>

                    {/* Right Column: Content & Metrics */}
                    <div className="lg:col-span-8 flex flex-col justify-center">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-gray-400 font-mono text-sm leading-relaxed mb-16 max-w-2xl"
                        >
                            AQL Technology delivers modern, practical tech solutions. We build software, AI systems, and cybersecurity services that actually make a difference for your business. Leading Saudi technology company specializing in digital transformation for enterprises and government entities.
                        </motion.p>

                        {/* Brutalist Metrics Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 border-t border-white/10 pt-12">
                            {[
                                { val: '—', label: 'Trusted Clients' },
                                { val: '—', label: 'Expert Team' },
                                { val: '—', label: 'Years Experience' }
                            ].map((metric, idx) => (
                                <motion.div
                                    key={metric.label}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.4 + (idx * 0.1) }}
                                    className="flex flex-col items-start p-6 bg-charcoal-900 border-l border-white/5 hover:bg-white/[0.02] transition-colors"
                                >
                                    <span className="text-5xl font-bold text-white mb-4 tracking-tighter">{metric.val}</span>
                                    <span className="text-xs font-mono tracking-[0.2em] text-saudi-accent uppercase">{metric.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
