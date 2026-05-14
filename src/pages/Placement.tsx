import { Card, CardContent } from "../components/ui/Card";
import { Briefcase, TrendingUp, Building2, Quote } from "lucide-react";
import { motion } from "motion/react";
import studentsImg from "../assets/images/regenerated_image_1778315041853.jpg"; // Placeholder
import { PageHero } from "../components/PageHero";

export default function Placement() {
  return (
    <div className="bg-background pb-24">
      <PageHero
        title="Training & Placement"
        subtitle="Our dedicated Placement Cell bridges students with leading industries — 95% placement rate with 50+ partner companies."
        breadcrumb="Placement"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 mt-16">
        
        {/* Placement Overview */}
        <section className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-8 h-1 bg-secondary mr-4"></div>
              <h2 className="text-primary font-bold tracking-widest text-sm uppercase">Our Impact</h2>
            </div>
            <h3 className="text-4xl font-bold mb-8 text-foreground leading-tight">Building Careers,<br/>Changing Lives</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
              The Training and Placement Cell at Ramakrishna Mission Shilpavidyalaya acts as a crucial bridge between our students and the industrial world. We maintain a robust relationship with leading manufacturing and service industries across India.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              Our dedicated cell organizes regular campus interviews, industrial visits, and pre-placement training sessions focusing on communication skills, interview preparation, and professional etiquette.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="bg-white p-6 rounded-xl border-l-4 border-l-secondary shadow-lg flex items-center">
                <div className="p-4 bg-primary rounded-full mr-5 text-white shadow-inner">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">95%</div>
                  <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Placement Rate</div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border-l-4 border-l-accent shadow-lg flex items-center">
                <div className="p-4 bg-primary rounded-full mr-5 text-white shadow-inner">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">50+</div>
                  <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Partners</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square md:aspect-[4/3] rounded-xl overflow-hidden border-8 border-white shadow-2xl relative z-10">
              <img src={studentsImg} alt="Students at RKM Shilpavidyalaya" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-accent/20 rounded-full blur-3xl z-0"></div>
            <div className="absolute top-8 -right-8 w-32 h-32 bg-secondary/30 rounded-full blur-2xl z-0"></div>
          </motion.div>
        </section>

        {/* Top Recruiters */}
        <section className="bg-[#EEF4FF] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-20 border-y border-primary/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-primary">Our Proud Partners in Industry</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Leading organizations that consistently recruit our talent.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Tata Motors", "Larsen & Toubro", "Maruti Suzuki", "Siemens",
                "Godrej & Boyce", "Voltas", "Exide Industries", "ITC Limited"
              ].map((company, i) => (
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  transition={{ type: "spring", stiffness: 400 }} 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  delay={i * 0.1}
                >
                  <Card className="bg-white border-border hover:border-secondary transition-all shadow-sm hover:shadow-lg flex items-center justify-center p-8 h-36 text-center group">
                    <div className="flex flex-col items-center">
                      <Building2 className="h-10 w-10 text-muted-foreground mb-4 group-hover:text-primary transition-colors" />
                      <span className="font-bold text-foreground group-hover:text-primary transition-colors text-lg">{company}</span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Alumni Testimonials */}
        <section className="bg-[#071428] rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl font-bold mb-6 text-white">Alumni Voices</h2>
            <div className="w-20 h-1.5 bg-secondary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 relative z-10">
            <motion.div 
              className="bg-white/5 backdrop-blur-sm p-10 rounded-2xl relative border border-white/10 hover:bg-white/10 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Quote className="absolute top-8 right-8 h-16 w-16 text-secondary/20" />
              <p className="text-white/90 italic mb-8 relative z-10 text-lg leading-relaxed">
                "The discipline and technical skills I learned at Shilpavidyalaya formed the bedrock of my career. The teachers not only taught us the trade but also the value of hard work and honesty."
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-primary font-bold text-2xl mr-5 shadow-lg">
                  S
                </div>
                <div>
                  <div className="font-bold text-white text-lg">Sourav Mukherjee</div>
                  <div className="text-sm text-secondary font-medium tracking-wide">Fitter Batch 2018, Supervisor at L&T</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white/5 backdrop-blur-sm p-10 rounded-2xl relative border border-white/10 hover:bg-white/10 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              delay={0.2}
            >
              <Quote className="absolute top-8 right-8 h-16 w-16 text-accent/20" />
              <p className="text-white/90 italic mb-8 relative z-10 text-lg leading-relaxed">
                "The campus placement drive helped me secure a job before I even finished my final exams. The institute's name carries tremendous respect in the industry."
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center text-white font-bold text-2xl mr-5 shadow-lg">
                  A
                </div>
                <div>
                  <div className="font-bold text-white text-lg">Amit Das</div>
                  <div className="text-sm text-accent font-medium tracking-wide">Electrician Batch 2021, Tata Motors</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}
