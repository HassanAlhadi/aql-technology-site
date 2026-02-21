import { motion } from 'framer-motion';

const products = [
    {
        title: 'FAIZ',
        subtitle: 'AI-Powered E-commerce Assistant',
        description: 'A smart assistant that helps you manage products, understand customers, and automate your store operations. Built specifically for enterprise commerce intelligence.',
        image: '/faiz.png',
        metrics: [
            { label: 'Decision Automation', value: 'Active' },
            { label: 'Store Operations', value: 'Automated' }
        ]
    },
    {
        title: 'VISION',
        subtitle: 'AI-Powered Data Analytics Dashboard',
        description: 'A dynamic, intelligent dashboard for any data you give it. Turn your raw data into clear insights with real-time analytics and predictive capabilities tailored to your exact business needs.',
        image: '/vision.png',
        metrics: [
            { label: 'Data Integration', value: 'Universal' },
            { label: 'Predictive Insights', value: 'Real-time' }
        ]
    },
    {
        title: 'SIAQ',
        subtitle: 'Automated Workflow Generator',
        description: 'Create content, edit files, design assets, and automate daily tasks — all powered by AI. An enterprise-grade cognitive control system designed for operational perfection.',
        image: '/siaq.png',
        metrics: [
            { label: 'Task Automation', value: 'Enabled' },
            { label: 'Asset Generation', value: 'Active' }
        ]
    }
];

export default function ProductsSection() {
    return (
        <section id="products" className="relative w-full bg-charcoal-950 border-t border-saudi-accent/20 py-32 overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6 md:px-[6%] relative z-10 w-full">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24 border-l-4 border-saudi-accent pl-6"
                >
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <span className="font-mono text-[10px] tracking-[0.3em] text-saudi-accent uppercase">SYS_MODULES // DEPLOYED</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] font-sans">
                            STRATEGIC<br />PRODUCT SUITE.
                        </h2>
                    </div>
                    <div className="font-mono text-[10px] text-white/30 tracking-[0.2em] text-right max-w-xs md:pb-2 uppercase">
                        Architecture Status: Optimal <br />
                        Active Nodes: 3
                    </div>
                </motion.div>

                {/* Product Grid */}
                <div className="flex flex-col gap-1">
                    {products.map((product, idx) => (
                        <motion.div
                            key={product.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1 }}
                            className={`flex flex-col lg:flex-row bg-charcoal-900 border border-white/5 relative group overflow-hidden ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Image Container */}
                            <div className="w-full lg:w-[50%] relative border-r border-b lg:border-b-0 border-white/5 bg-charcoal-950">
                                <div className="relative aspect-[4/3] overflow-hidden mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-700">
                                    <div className="absolute inset-0 bg-navy-900 mix-blend-overlay opacity-40 pointer-events-none z-10" />
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover filter contrast-125 saturate-50 group-hover:scale-105 transition-transform duration-[2s] ease-out"
                                    />
                                    {/* Scanning Line Effect */}
                                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-saudi-accent/50 z-20 opacity-0 group-hover:opacity-100 group-hover:animate-scan" />
                                </div>
                            </div>

                            {/* Text Container */}
                            <div className="w-full lg:w-[50%] flex flex-col justify-center p-8 lg:p-16 relative">
                                <div className="absolute top-8 right-8 font-mono text-sm tracking-[0.3em] text-white/20">
                                    {String(idx + 1).padStart(2, '0')} // MODULE
                                </div>

                                <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 uppercase">{product.title}</h3>
                                <h4 className="text-saudi-accent font-mono text-xs tracking-[0.2em] mb-8 uppercase">{product.subtitle}</h4>

                                <p className="text-gray-400 font-sans leading-relaxed mb-12 max-w-md text-lg">
                                    {product.description}
                                </p>

                                <div className="grid grid-cols-2 gap-8 border-t border-saudi-accent/20 pt-8 mt-auto">
                                    {product.metrics.map((metric) => (
                                        <div key={metric.label} className="flex flex-col gap-2">
                                            <span className="font-mono text-[9px] text-white/40 uppercase tracking-[0.2em]">{metric.label}</span>
                                            <span className="font-mono text-white/90 text-sm font-bold tracking-wider">{metric.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
