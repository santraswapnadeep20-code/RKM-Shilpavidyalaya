
import { useState } from "react";
import { Link } from "react-router-dom";
import { Wrench, Zap, Factory, Cpu, Flame, BookOpen, GraduationCap, ChevronRight, Monitor, Ruler, PenTool, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { PageHero } from "../components/PageHero";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";

export default function Courses() {
  const [tab, setTab] = useState<"iti" | "hs">("iti");

  const trades = [
    { slug: "electrician", name: "Electrician", duration: "2 Years", seats: 20, icon: Zap, desc: "Training in electrical wiring, installation, and maintenance of electrical systems and equipment." },
    { slug: "fitter", name: "Fitter", duration: "2 Years", seats: 20, icon: Wrench, desc: "Assembly, maintenance, and repair of machinery using various hand tools and precision measuring instruments." },
    { slug: "turner", name: "Turner", duration: "2 Years", seats: 20, icon: Factory, desc: "Operation of lathe machines to produce precision metal parts with exact dimensions." },
    { slug: "welder", name: "Welder", duration: "1 Year", seats: 20, icon: Flame, desc: "Various welding techniques including Arc and Gas welding for fabrication and repair." },
    { slug: "electronic-mechanic", name: "Electronic Mechanic", duration: "2 Years", seats: 20, icon: Cpu, desc: "Repair and maintenance of electronic equipment, consumer electronics, and industrial controls." },
    { slug: "draughtsman-civil", name: "Draughtsman Civil (with AutoCAD)", duration: "2 Years", seats: 20, icon: Ruler, desc: "Preparation of civil engineering drawings, maps, and structural plans using drafting instruments and AutoCAD software." },
    { slug: "draughtsman-mechanical", name: "Draughtsman Mechanical (with AutoCAD)", duration: "2 Years", seats: 20, icon: PenTool, desc: "Creation of detailed mechanical engineering drawings and assembly diagrams using manual drafting and AutoCAD software." },
  ];

  const hsStreams = [
    {
      name: "Electrical",
      fullName: "Electrical Maintenance & Installation (ETEM)",
      icon: Zap,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-400",
      subjects: {
        xi: [
          { label: "Basic Electrical Theory and Practical"},
          { label: "Workshop Practices"},
          { label: "Entrepreneurship Development"},
          { label: "Computer Application"},
          { label: "Maintenance & Repair of Electrical Domestic Appliances"},
        ],
        xii: [
          { label: "Advanced Electrical Theory & Practice"},
          { label: "Industrial Wiring & Protection Systems"},
        ]
      }
    },
    {
      name: "Computer",
      fullName: "Computer Science & Applications",
      icon: Monitor,
      color: "text-blue-700",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-400",
      subjects: {
        xi: [
          { label: "Basic Computer Hardware & Security"},
          { label: "Workshop Practices"},
          { label: "Entrepreneurship Development"},
          { label: "Computer Application"},
          { label: "Electrical Wiring & Installation of Motors"},
        ],
        xii: [
          { label: "Advanced Computer Hardware & Networking with in hand Practical class "},
          { label: "Python Programming Theory with practice session"},
        ]
      }
    }
  ];

  return (
    <div className="bg-background pb-24">
      <PageHero
        title="Our Courses"
        subtitle="NCVT-affiliated ITI trades and H.S. Vocational programs (Class XI & XII) affiliated to WBSCT&VE&SD — building skills and careers since 1921."
        breadcrumb="Courses"
      />

      {/* Tab Switcher */}
      <div className="sticky top-0 z-30 bg-white border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 py-2">
            <button
              onClick={() => setTab("iti")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm transition-all ${tab === "iti" ? "bg-primary text-white shadow-md" : "text-muted-foreground hover:bg-[#EEF4FF] hover:text-primary"}`}
            >
              <Wrench className="h-4 w-4" />
              ITI Trades (NCVT)
            </button>
            <button
              onClick={() => setTab("hs")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm transition-all ${tab === "hs" ? "bg-primary text-white shadow-md" : "text-muted-foreground hover:bg-[#EEF4FF] hover:text-primary"}`}
            >
              <GraduationCap className="h-4 w-4" />
              H.S. Vocational — Class XI & XII
              <span className="bg-accent text-white text-[10px] px-2 py-0.5 rounded-full font-bold ml-1">NEW</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">

        {/* ── ITI TAB ── */}
        {tab === "iti" && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div className="mb-10 flex items-center gap-4">
              <div className="w-10 h-1 bg-secondary"></div>
              <p className="text-muted-foreground font-medium">7 trades affiliated with the National Council for Vocational Training (NCVT), Government of India.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trades.map((trade, i) => (
                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} key={i}>
                  <Link to={`/courses/${trade.slug}`} className="block h-full">
                    <Card className="bg-white border-t-4 border-t-transparent hover:border-t-accent transition-all duration-300 shadow-md hover:shadow-xl flex flex-col h-full group cursor-pointer">
                      <CardHeader className="pt-6 pb-4">
                        <div className="flex justify-between items-start mb-6">
                          <div className="p-4 bg-primary text-white rounded-full group-hover:bg-accent transition-colors shadow-inner">
                            <trade.icon className="h-8 w-8" />
                          </div>
                          <Badge variant="outline" className="bg-[#EEF4FF] text-primary border-primary/20 font-bold uppercase tracking-wider text-[10px] py-1">
                            NCVT
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl font-bold text-primary group-hover:text-accent transition-colors font-serif">{trade.name}</CardTitle>
                        <div className="flex gap-6 mt-4 text-sm font-bold text-foreground">
                          <span className="flex items-center"><span className="w-2.5 h-2.5 rounded-full bg-secondary mr-2"></span>{trade.duration}</span>
                          <span className="flex items-center"><span className="w-2.5 h-2.5 rounded-full bg-accent mr-2"></span>{trade.seats} Seats</span>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0 flex-grow flex flex-col justify-between gap-4">
                        <p className="text-muted-foreground text-sm leading-relaxed">{trade.desc}</p>
                        <span className="inline-flex items-center gap-1.5 text-accent font-bold text-xs uppercase tracking-widest group-hover:gap-3 transition-all pt-4">
                          View Details <ArrowRight className="w-4 h-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── H.S. VOCATIONAL TAB ── */}
        {tab === "hs" && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="space-y-16">

            {/* Overview Banner */}
            <div className="bg-primary text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/5 opacity-10 pointer-events-none"></div>
              <div className="relative z-10 grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 text-secondary border border-secondary/30 mb-6 font-bold tracking-widest text-[10px] uppercase">
                    SINCE 1976
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">Higher Secondary Vocational <br /><span className="text-secondary italic">Class XI & XII</span></h2>
                  <p className="text-white/80 leading-relaxed text-lg mb-6 font-light">
                    Affiliated to the West Bengal State Council of Technical & Vocational Education & Skill Development (WBSCT&VE&SD). The syllabus combines H.S. general subjects with 1st year Diploma Engineering courses, giving students a strong head start in technical education.
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Students who score 60%+ in Class XII can apply for lateral entry to 2nd year of Diploma (Polytechnic) through the VOCLET examination conducted by the West Bengal Technical Education & Training Department.
                  </p>
                </div>
                <div className="flex flex-col gap-5 justify-center">
                  <div className="bg-white/10 border border-white/20 rounded-xl p-5 backdrop-blur-sm">
                    <div className="text-accent font-bold text-[10px] uppercase tracking-widest mb-1">Class XI Fee</div>
                    <div className="text-3xl font-bold">₹7,470</div>
                  </div>
                  <div className="bg-white/10 border border-white/20 rounded-xl p-5 backdrop-blur-sm">
                    <div className="text-accent font-bold text-[10px] uppercase tracking-widest mb-1">Class XII Fee</div>
                    <div className="text-3xl font-bold">₹8,000</div>
                  </div>
                  <div className="bg-white/10 border border-white/20 rounded-xl p-5 backdrop-blur-sm">
                    <div className="text-accent font-bold text-[10px] uppercase tracking-widest mb-1">Min. Attendance</div>
                    <div className="text-3xl font-bold">75%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* General Subjects */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-1 bg-secondary"></div>
                <h3 className="text-2xl font-bold text-primary font-serif">Core Subjects (Both Streams)</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {["Mathematics", "Physics", "Chemistry"].map((sub, i) => (
                  <div key={i} className="bg-white border border-border rounded-xl p-6 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-bold text-primary text-xl">{sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Two Streams */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-1 bg-secondary"></div>
                <h3 className="text-2xl font-bold text-primary font-serif">Technical Streams — Choose One</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {hsStreams.map((stream, i) => (
                  <motion.div key={i} whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card className={`bg-white border-t-4 ${stream.borderColor} shadow-lg h-full overflow-hidden`}>
                      <CardHeader className="pb-6 pt-8 px-8">
                        <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-xl ${stream.bgColor} w-fit mb-4`}>
                          <stream.icon className={`h-6 w-6 ${stream.color}`} />
                          <span className={`font-bold text-lg ${stream.color}`}>{stream.name}</span>
                        </div>
                        <CardTitle className="text-2xl font-bold text-primary leading-tight font-serif">{stream.fullName}</CardTitle>
                        <div className="flex gap-2 mt-4 flex-wrap">
                          <Badge variant="outline" className="bg-[#EEF4FF] text-primary border-primary/20 font-bold text-[10px] uppercase">WBSCT&VE&SD</Badge>
                          <Badge variant="outline" className="bg-[#EEF4FF] text-primary border-primary/20 font-bold text-[10px] uppercase">2 Years</Badge>
                          <Badge variant="outline" className="bg-[#EEF4FF] text-primary border-primary/20 font-bold text-[10px] uppercase">Class XI & XII</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-8 px-8 pb-8">
                        {/* Class XI */}
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <span className="w-2 h-2 rounded-full bg-primary"></span>
                            <span className="text-primary text-[10px] font-bold uppercase tracking-widest">Class XI — Technical Subjects</span>
                          </div>
                          <ul className="space-y-3">
                            {stream.subjects.xi.map((sub, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                                <ChevronRight className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                                <span className="font-semibold text-primary">{sub.label}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Class XII */}
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <span className="w-2 h-2 rounded-full bg-secondary"></span>
                            <span className="text-secondary text-[10px] font-bold uppercase tracking-widest">Class XII — Technical Subjects</span>
                          </div>
                          <ul className="space-y-3">
                            {stream.subjects.xii.map((sub, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                                <ChevronRight className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                                <span className="font-semibold text-primary">{sub.label}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-[#EEF4FF] rounded-2xl p-10 border border-primary/10 shadow-inner">
              <h3 className="text-2xl font-bold text-primary mb-8 font-serif">Important Information</h3>
              <ul className="grid md:grid-cols-2 gap-6">
                {[
                  "Full-time courses with sessional marks for class and workshop work.",
                  "Students failing even one subject in Semester I or II are not promoted to Semester III.",
                  "Overall percentage is calculated based on Class XII examination marks only.",
                  "VOCLET-qualified students (60%+ in Class XII) can seek lateral entry to 2nd year Polytechnic Diploma.",
                  "No hostel facility available for H.S. Vocational students.",
                  "All textbooks must be procured by students; library resources are available for reference.",
                ].map((note, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-700 text-sm leading-relaxed">
                    <span className="w-6 h-6 rounded-full bg-secondary/20 text-secondary font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm">{i + 1}</span>
                    {note}
                  </li>
                ))}
              </ul>
            </div>

          </motion.div>
        )}
      </div>
    </div>
  );
}
