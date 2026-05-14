import { motion } from "motion/react"

interface PageHeroProps {
  title: string
  subtitle: string
  breadcrumb: string
}

export function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative bg-primary py-24 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary opacity-5 -skew-x-12 transform translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-accent opacity-5 skew-y-6 transform -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span className="opacity-50">/</span>
              <span>{breadcrumb}</span>
            </div>
            
            <h1 className="font-serif text-[50px] font-bold tracking-tight">
              {title}
            </h1>
            
            <p className="max-w-2xl text-lg opacity-80 leading-relaxed font-light">
              {subtitle}
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary" />
    </section>
  )
}
