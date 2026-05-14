import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import {
  ArrowRight, BookOpen, GraduationCap, Users, Calendar,
  Trophy, ChevronRight, Zap, Monitor, Wrench, CheckCircle2,
  Building2, Award, ShieldCheck, Bell, FileText, Video, ExternalLink
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";

// Asset imports
import slideImg1 from "../assets/images/regenerated_image_1778315041853.jpg";
import slideImg2 from "../assets/images/regenerated_image_1778317985581.jpg";
import slideImg3 from "../assets/images/regenerated_image_1778318138193.jpg";
import slideImg4 from "../assets/images/regenerated_image_1778336595647.jpg";
import saraswatiImg from "../assets/images/regenerated_image_1778315041853.jpg";

function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (ts: number) => {
      if (!startTimestamp) startTimestamp = ts;
      const progress = Math.min((ts - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);
  return <span>{count}</span>;
}

const heroSlides = [
  slideImg1,
  slideImg2,
  slideImg3,
  slideImg4,
];

export default function Home() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      {/* ── Marquee ── */}
      <div className="bg-[#ff972b] py-2 px-4 overflow-hidden whitespace-nowrap text-white text-sm font-medium border-b border-white/10">
        <div className="inline-block animate-marquee tracking-wide">
          <span className="mx-3 bg-white/20 text-white px-2 py-0.5 rounded text-xs font-bold uppercase">Notice</span>
          Admission open for ITI &amp; H.S. Vocational 2026-27. Last date: <strong>6th June 2026.</strong>
          &nbsp;&nbsp;&nbsp;
          <span className="mx-3 bg-white/20 text-white px-2 py-0.5 rounded text-xs font-bold uppercase">Notice</span>
          Campus placement drive by Tata Motors on 15th July. All eligible students must register.
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="relative bg-[#0A1931] text-white overflow-hidden min-h-[92vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>

        {/* Sliding background photos */}
        {heroSlides.map((src, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === slide ? 0.22 : 0 }}
          >
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1931] via-[#0A1931]/90 to-[#0A1931]/40 z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rkm-gold/20 text-rkm-gold border border-rkm-gold/30 mb-8 text-xs font-bold tracking-widest">
                <span className="h-2 w-2 rounded-full bg-rkm-gold animate-pulse"></span>
                ESTABLISHED 1921 · BELUR MATH
              </div>
              <h1
                className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Empowering Youth <br />
                Through{" "}
                <span className="text-rkm-gold italic underline decoration-rkm-orange/30">Technical Education</span>
              </h1>
              <p className="text-lg text-white/75 mb-10 leading-relaxed max-w-xl font-light">
                Rooted in the spiritual heritage of Ramakrishna Mission, we have been shaping careers and building character for over a century — right from the banks of the holy Ganga at Belur Math.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-rkm-orange text-white hover:bg-rkm-orange/90 font-bold tracking-wide h-14 px-8 text-base shadow-xl shadow-orange-950/40 border-none"
                >
                  <Link to="/admission/iti">Apply for Admission</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-rkm-gold text-rkm-gold hover:bg-rkm-gold hover:text-primary font-bold tracking-wide h-14 px-8 text-base transition-all"
                >
                  <Link to="/about">Our Heritage</Link>
                </Button>
              </div>
            </motion.div>

            {/* Photo card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden md:block relative"
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-4 border-rkm-gold/40 shadow-2xl">
                {heroSlides.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="School events"
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                    style={{ opacity: i === slide ? 1 : 0 }}
                  />
                ))}
                {/* Slide dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {heroSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSlide(i)}
                      className={`h-1.5 rounded-full transition-all ${i === slide ? "w-6 bg-rkm-gold" : "w-1.5 bg-white/50"}`}
                    />
                  ))}
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#0A1931] border-4 border-rkm-gold rounded-xl p-5 shadow-xl">
                <div className="text-rkm-gold text-3xl font-bold" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>100+</div>
                <div className="text-white/70 text-xs font-bold uppercase tracking-widest">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L1440 60L1440 0C1200 50 240 50 0 0Z" fill="hsl(0 0% 100%)" />
          </svg>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: 100, suffix: "+", label: "Years of Legacy", color: "text-primary" },
              { value: 10, suffix: "", label: "NCVT Trades", color: "text-accent" },
              { value: 95, suffix: "%", label: "Placement Rate", color: "text-primary" },
              { value: 15, suffix: "k+", label: "Alumni", color: "text-accent" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-rkm-gold/40 hover:shadow-lg transition-all"
              >
                <div className={`text-5xl font-bold mb-2 ${stat.color}`} style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  <CountUp end={stat.value} duration={2} />{stat.suffix}
                </div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIVEKANANDA QUOTE ── */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-rkm-gold/10 rounded-full blur-3xl"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
          <div className="text-rkm-gold/20 text-9xl font-serif leading-none mb-2 select-none">"</div>
          <blockquote
            className="text-2xl md:text-3xl text-white font-medium leading-relaxed -mt-10"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Education is the manifestation of the perfection already in man.
          </blockquote>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-12 h-px bg-rkm-gold/50"></div>
            <p className="text-rkm-gold font-bold text-sm tracking-widest uppercase">Swami Vivekananda</p>
            <div className="w-12 h-px bg-rkm-gold/50"></div>
          </div>
        </div>
      </section>

      {/* ── UPDATES & ANNOUNCEMENTS CENTER ── */}
      <section className="py-24 bg-white border-y border-border relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -z-10 skew-x-[-15deg] translate-x-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-3">Stay Informed</p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary">Campus News &amp; Notices</h2>
            </div>
            <div className="flex gap-4">
              <Button asChild variant="outline" className="border-primary/20 text-primary hover:bg-primary hover:text-white font-bold transition-all">
                <Link to="/notices">View All Notices</Link>
              </Button>
              <Button asChild className="bg-primary text-white hover:bg-primary/90 font-bold transition-all shadow-lg shadow-blue-900/10">
                <Link to="/gallery">Visit Photo Gallery</Link>
              </Button>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            
            {/* Notice Board */}
            <div className="w-full">
              <div className="bg-[#FFF9F0] border-2 border-primary/10 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl">
                {/* Background watermark */}
                <Bell className="absolute -bottom-10 -right-10 w-64 h-64 text-primary/5 rotate-[-20deg]" />

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-blue-900/20">
                        <Bell className="w-7 h-7 text-accent" />
                      </div>
                      <h3 className="font-serif text-3xl font-bold text-primary">Notice Board</h3>
                    </div>
                    <Button asChild variant="outline" className="border-primary/20 text-primary hover:bg-primary hover:text-white font-bold transition-all h-11 px-6">
                      <Link to="/notices">View All Announcements</Link>
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        title: "ITI Admission 2026 — Prospectus Published",
                        date: "Apr 17",
                        type: "Admission",
                        color: "bg-red-500",
                        icon: FileText,
                        link: "https://rkmshilpavidyalaya.ac.in/wp-content/uploads/2026/04/Online_ITI-PROSPECTUS-2026.pdf"
                      },
                      {
                        title: "Semester 4 AITT Exam Form Fill-up Notice",
                        date: "Apr 15",
                        type: "Exam",
                        color: "bg-blue-500",
                        icon: Calendar,
                        link: "/notices"
                      },
                      {
                        title: "H.S. Vocational (Class XI) Admission 2026",
                        date: "Mar 05",
                        type: "Admission",
                        color: "bg-red-500",
                        icon: GraduationCap,
                        link: "/notices"
                      },
                      {
                        title: "Tata Motors Campus Placement Drive (Graduates)",
                        date: "Feb 22",
                        type: "Placement",
                        color: "bg-purple-500",
                        icon: Award,
                        link: "/placement"
                      },
                      {
                        title: "Official Holiday List for Academic Session 2026",
                        date: "Jan 10",
                        type: "Holiday",
                        color: "bg-pink-500",
                        icon: CheckCircle2,
                        link: "/notices"
                      }
                    ].map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <motion.div 
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          key={i} 
                          className="group relative pl-12 pb-6 border-l-2 border-primary/5 last:pb-0"
                        >
                          <div className={`absolute top-0 -left-[17px] w-8 h-8 rounded-xl ${item.color} flex items-center justify-center text-white shadow-md ring-4 ring-[#FFF9F0] group-hover:scale-110 transition-transform`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <span className="text-[10px] font-bold text-muted-foreground bg-white border border-border px-2 py-0.5 rounded uppercase tracking-wider">{item.date}</span>
                            <span className={`text-[10px] font-bold text-white px-2 py-0.5 rounded uppercase tracking-wider ${item.color}`}>{item.type}</span>
                          </div>
                          <Link to={item.link.startsWith('http') ? '#' : item.link} 
                            onClick={() => { if(item.link.startsWith('http')) window.open(item.link, '_blank') }}
                            className="text-base md:text-lg font-bold text-primary group-hover:text-secondary transition-colors leading-tight block"
                          >
                            {item.title}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Student Quick Links Area */}
                  <div className="mt-10 pt-10 border-t border-primary/5">
                    <p className="text-[11px] font-bold text-primary/40 uppercase tracking-[0.2em] mb-5">Digital Resources</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Link to="/courses" className="flex items-center justify-between p-4 rounded-2xl bg-white border border-border transition-all hover:shadow-md group">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                            <BookOpen className="w-5 h-5 text-secondary" />
                          </div>
                          <span className="text-sm font-bold text-primary">Syllabus & Course Details</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-primary/20 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                      </Link>
                      <Link to="/contact" className="flex items-center justify-between p-4 rounded-2xl bg-white border border-border transition-all hover:shadow-md group">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                            <Users className="w-5 h-5 text-blue-600" />
                          </div>
                          <span className="text-sm font-bold text-primary">Technical Support</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-primary/20 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-rkm-orange font-bold uppercase tracking-[0.2em] text-xs mb-3">What We Offer</p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4 mx-auto">Courses & Training Programs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base">
              NCVT-affiliated ITI trades and Higher Secondary Vocational programs (Class XI & XII) designed to build job-ready, skilled professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* ITI Card */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-primary text-white rounded-2xl p-8 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 border border-white/20">
                  <Wrench className="h-7 w-7 text-rkm-gold" />
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  ITI Trades <span className="text-rkm-gold">(NCVT)</span>
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  7 trades — Electrician, Fitter, Turner, Welder, Electronic Mechanic, Draughtsman Civil & Mechanical (with AutoCAD). Duration: 1–2 years.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Electrician", "Fitter", "Turner", "Welder", "Electronic Mechanic", "Draughtsman Civil", "Draughtsman Mechanical"].map((t, i) => (
                    <span key={i} className="bg-white/10 border border-white/20 text-white text-xs px-3 py-1 rounded-full font-medium">{t}</span>
                  ))}
                </div>
                <Link to="/courses" className="flex items-center text-rkm-gold font-bold text-sm group-hover:gap-3 gap-2 transition-all">
                  View all ITI trades <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            {/* H.S. Vocational Card */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white border-2 border-rkm-gold/30 rounded-2xl p-8 relative overflow-hidden group hover:border-rkm-gold transition-colors shadow-sm"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-rkm-gold/5 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6 border border-rkm-gold/30">
                  <GraduationCap className="h-7 w-7 text-rkm-orange" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-primary" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  H.S. Vocational <span className="text-rkm-orange">Class XI & XII</span>
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Two streams in Engineering & Technology — Electrical and Computer — affiliated to WBSCT&VE&SD. Syllabus combines H.S. and 1st-year Diploma Engineering.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: Zap, label: "Electrical", color: "text-yellow-600 bg-yellow-50" },
                    { icon: Monitor, label: "Computer", color: "text-blue-700 bg-blue-50" },
                  ].map((s, i) => (
                    <div key={i} className={`flex items-center gap-3 rounded-xl p-3 ${s.color.split(" ")[1]}`}>
                      <s.icon className={`h-5 w-5 ${s.color.split(" ")[0]}`} />
                      <span className="text-sm font-semibold text-foreground">{s.label}</span>
                    </div>
                  ))}
                </div>
                <Link to="/admission/hs-vocational" className="flex items-center text-rkm-orange font-bold text-sm group-hover:gap-3 gap-2 transition-all">
                  View H.S. Vocational details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="bg-rkm-gold py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-serif">
            Begin Your Journey at Shilpavidyalaya
          </h2>
          <p className="text-primary/80 mb-8 text-base max-w-xl mx-auto font-medium">
            Join thousands of alumni who built their careers here. Apply now for ITI or H.S. Vocational admissions for 2026-27.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold h-14 px-10 shadow-xl border-none">
              <Link to="/admission/iti">Apply for Admission</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold h-14 px-10 transition-all bg-transparent">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
