export default function FooterSection() {
    return (
        <footer className="w-full bg-charcoal-950 border-t-4 border-saudi-accent py-16 relative z-10">
            <div className="max-w-[1600px] mx-auto px-6 md:px-[6%] grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 border-2 border-white flex items-center justify-center font-bold text-xl tracking-tight bg-charcoal-900">AQL</div>
                            <div className="flex flex-col">
                                <span className="font-sans font-bold text-lg tracking-widest text-white uppercase">AQL Technology</span>
                                <span className="font-mono text-[10px] tracking-[0.3em] text-saudi-accent uppercase">Strategic Systems</span>
                            </div>
                        </div>
                        <p className="text-gray-400 font-mono text-sm max-w-sm leading-relaxed mb-6 border-l border-white/20 pl-4">
                            AQL Technology delivers scalable, secure digital platforms tailored to your business needs with cutting-edge technologies.
                        </p>
                    </div>
                    <div className="font-mono text-[10px] text-white/30 tracking-widest uppercase mt-8 md:mt-0">
                        © 2026 AQL TECHNOLOGY NODE. ALL RIGHTS RESERVED.
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <h4 className="text-white font-mono text-xs tracking-[0.2em] border-b border-saudi-accent/30 pb-2 uppercase">Comms Link</h4>
                    <a href="mailto:contact@aql-tech.com" className="text-gray-400 hover:text-saudi-accent transition-colors font-mono text-sm group flex items-center gap-2">
                        <span className="text-saudi-accent opacity-0 group-hover:opacity-100 transition-opacity">{'>'}</span>
                        contact@aql-tech.com
                    </a>
                    <span className="text-gray-400 font-mono text-sm group flex items-center gap-2">
                        <span className="text-white/20">{'>'}</span>
                        +966 (0) 123 456 789
                    </span>
                    <span className="text-gray-400 font-mono text-sm group flex items-center gap-2 mt-4">
                        <span className="w-1.5 h-1.5 bg-saudi-accent/50 group-hover:bg-saudi-accent transition-colors" />
                        Riyadh, Saudi Arabia
                    </span>
                </div>

                <div className="flex flex-col gap-6">
                    <h4 className="text-white font-mono text-xs tracking-[0.2em] border-b border-saudi-accent/30 pb-2 uppercase">Index</h4>
                    <a href="#about" className="text-gray-400 hover:text-white transition-colors font-mono text-sm uppercase tracking-wider relative group w-fit">
                        ABOUT US
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-saudi-accent group-hover:w-full transition-all duration-300" />
                    </a>
                    <a href="#cybersecurity" className="text-gray-400 hover:text-white transition-colors font-mono text-sm uppercase tracking-wider relative group w-fit">
                        SERVICES
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-saudi-accent group-hover:w-full transition-all duration-300" />
                    </a>
                    <a href="#products" className="text-gray-400 hover:text-white transition-colors font-mono text-sm uppercase tracking-wider relative group w-fit">
                        PRODUCTS
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-saudi-accent group-hover:w-full transition-all duration-300" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
