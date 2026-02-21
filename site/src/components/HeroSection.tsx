import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center bg-charcoal-950">
            {/* Background Image Container - Split Layout */}
            <motion.div
                className="absolute inset-0 z-0 lg:w-[60%] lg:right-0 lg:left-auto"
                initial={{ filter: "brightness(0)", scale: 1.05 }}
                animate={{ filter: "brightness(1)", scale: 1 }}
                transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="absolute inset-0 bg-charcoal-950/60 mix-blend-multiply z-10" />
                <div className="absolute inset-0 bg-navy-900/40 mix-blend-color z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/80 to-transparent z-20" />
                <img
                    src="/hero-image.png"
                    alt="AQL Engineering Intelligence"
                    className="w-full h-full object-cover object-center filter grayscale-[0.5] contrast-125"
                />
            </motion.div>

            {/* Brutalist Hard Grid Lines */}
            <div className="absolute top-0 bottom-0 left-[6%] w-[1px] bg-white/10 z-20 hidden md:block" />
            <div className="absolute top-[25%] left-0 right-0 h-[1px] bg-white/10 z-20 hidden md:block" />

            {/* Content Container - Asymmetric */}
            <div className="relative z-30 px-6 md:px-[6%] w-full max-w-[1600px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-start max-w-2xl bg-charcoal-950/40 backdrop-blur-md p-8 lg:p-12 border-l-2 border-saudi-accent/50"
                >
                    {/* Top Label */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-1.5 h-1.5 bg-saudi-accent" />
                        <div className="font-mono text-xs tracking-[0.2em] text-white/50 uppercase">
                            SYS_INIT // STRATEGIC
                        </div>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-bold tracking-tight text-white mb-6 leading-[0.9] font-sans">
                        ENGINEERED<br />
                        <span className="text-saudi-accent/90">INTELLIGENCE.</span>
                    </h1>

                    {/* Subline */}
                    <p className="font-mono text-xs md:text-sm text-gray-400 tracking-widest uppercase mb-12 leading-loose">
                        Cybersecurity Architecture.<br />
                        AI Infrastructure Provisioning.<br />
                        Strategic Data Operations.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row w-full gap-4">
                        <button className="relative group bg-white text-charcoal-950 px-8 py-4 font-mono text-xs font-bold tracking-[0.2em] uppercase hover:bg-gray-200 transition-colors w-full sm:w-auto">
                            <span className="relative z-10">Initialize Capability</span>
                        </button>
                        <button className="relative group border border-white/20 text-white px-8 py-4 font-mono text-xs tracking-[0.2em] uppercase hover:border-white/60 hover:bg-white/5 transition-all w-full sm:w-auto">
                            <span className="relative z-10">Authorize Access</span>
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Decorative vertical coordinates */}
            <div className="absolute left-10 bottom-16 font-mono text-[10px] text-white/30 tracking-[0.3em] hidden lg:block transform origin-bottom-left -rotate-90">
                [51.5072° N, 0.1276° W] // NODE_AQL
            </div>
        </section>
    );
}
