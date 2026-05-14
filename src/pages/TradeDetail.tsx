import React from "react";
import { useParams, Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { Badge } from "../components/ui/Badge";
import { 
  Zap, Wrench, Factory, Cpu, Flame, Ruler, PenTool, 
  Clock, Users, GraduationCap, Briefcase, ChevronRight, 
  BookOpen, Award, ArrowLeft, ArrowRight, Building2, Lightbulb
} from "lucide-react";
import { motion } from "motion/react";

type Trade = {
  slug: string;
  name: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  borderColor: string;
  duration: string;
  seats: number;
  ageLimit: string;
  entryQual: string;
  intro: string;
  objectives: string[];
  employment: string[];
  syllabus: { semester: string; topics: string[] }[];
  certification: string;
  videoUrl?: string;
};

const trades: Trade[] = [
  {
    slug: "electrician",
    name: "Electrician",
    icon: Zap,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-400",
    duration: "2 Years (4 Semesters)",
    seats: 20,
    ageLimit: "14 – 22 years",
    entryQual: "Passed Class X (Madhyamik) with Science and Mathematics",
    intro: "This course is meant for candidates who aspire to become Technicians in Electrician. Students are trained in repairing, maintenance, and production of different types of electrical equipment and machinery. In both the public sector and private sector, Electricians are in high demand for maintenance, repairing, and production of various electrical equipment.",
    objectives: [
      "Carry out installation, maintenance & repair works of Electrical AC/DC machinery, lighting circuits, domestic appliances and industrial equipment.",
      "Read and interpret electrical layout drawings as per BIS specifications & standards.",
      "Carry out domestic and industrial wiring and earthing systems.",
      "Test electrical wiring installations, locate and rectify faults using megger and earth tester.",
      "Use electrical instruments (analogue/digital) like voltmeter, ammeter, wattmeter, energy meter, oscilloscope, etc.",
      "Perform armature winding — single & three-phase motor winding and small transformer winding.",
      "Operate, maintain and test switch gears, circuit breakers, relays and transformers.",
      "Carry out breakdown, overhauling, routine and preventive maintenance of electrical machines.",
    ],
    employment: [
      "All State Electricity Boards and Departments",
      "Public sector, MNC, Private and Government Industries",
      "License Certificate for self-employment",
      "Wiring contractors",
      "Huge job opportunities in power generation, transmission, distribution sectors",
      "Overseas employment opportunities",
    ],
    syllabus: [
      {
        semester: "Semester I & II (Year 1)",
        topics: ["Electrical Fundamentals & Safety", "DC Circuits & AC Circuits", "Electrical Measuring Instruments", "Wiring Systems & Installations", "Transformers – Operation & Maintenance", "Workshop Calculation & Science", "Engineering Drawing"],
      },
      {
        semester: "Semester III & IV (Year 2)",
        topics: ["Single & Three-Phase Motors", "Generator & Alternator Maintenance", "Industrial Wiring & Control Panels", "Switch Gears & Protective Devices", "PLC Basics & Industrial Automation", "House Wiring Estimating & Costing", "Employability & Entrepreneurship Skills"],
      },
    ],
    certification: "National Trade Certificate (NTC) awarded by the National Council for Vocational Training (NCVT), Ministry of Skill Development & Entrepreneurship, Government of India.",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    slug: "fitter",
    name: "Fitter",
    icon: Wrench,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-400",
    duration: "2 Years (4 Semesters)",
    seats: 20,
    ageLimit: "14 – 22 years",
    entryQual: "Passed Class X (Madhyamik) with Science and Mathematics",
    intro: "Fitter Craftsmen are specialist mechanical engineering trade persons. Even after using automatic machines with good accuracy, further machining or bench-work and fitting by hand are needed to finish the metal work to the desired accuracy. Fitters perform various operations on metal pieces — filing, marking, sawing, chipping, scraping, grinding, drilling, reaming, tapping — and precisely fit them in assembly using knowledge of Fits and Tolerances. Students are also taught allied trades: Turning, Welding, Sheet Metal, Forging, and Plumbing.",
    objectives: [
      "Install, align, and commission new machines, plant and equipment in factories and work sites.",
      "Carry out routine scheduled maintenance on machines — lubrication, inspection, minor adjustments.",
      "Diagnose mechanical problems, locate their cause, and carry out repairs.",
      "Overhaul machines by dismantling, analysing components for wear, replacing or repairing, and reassembling.",
      "Read engineering drawings and work to precision tolerances using hand tools and precision measuring instruments.",
      "Perform allied operations: Gas and Electric Welding, Sheet Metal work, Forging, and basic Plumbing.",
    ],
    employment: [
      "Heavy and medium engineering industries across India and abroad",
      "Automobile manufacturing plants and service centres",
      "Defence establishments (Indian Army, Navy, Air Force workshops)",
      "Railways workshops and production units",
      "Public sector enterprises — BHEL, SAIL, ONGC, BEML, NTPC",
      "Self-employment as maintenance contractor",
    ],
    syllabus: [
      {
        semester: "Semester I & II (Year 1)",
        topics: ["Fitting Tools & Bench Work", "Marking, Filing & Sawing", "Drilling, Tapping & Threading", "Measurement & Precision Instruments", "Gas Welding & Electric Arc Welding", "Sheet Metal Work & Forging", "Engineering Drawing & Workshop Calculation"],
      },
      {
        semester: "Semester III & IV (Year 2)",
        topics: ["Advanced Fitting & Assembly", "Scraper Work & Surface Finishing", "Lathe Operation Basics (Turning)", "Gear & Pulley Assembly", "Hydraulic & Pneumatic Systems Basics", "Fits, Tolerances & Limits", "Employability & Entrepreneurship Skills"],
      },
    ],
    certification: "National Trade Certificate (NTC) awarded by the National Council for Vocational Training (NCVT), Ministry of Skill Development & Entrepreneurship, Government of India.",
  },
  {
    slug: "turner",
    name: "Turner",
    icon: Factory,
    color: "text-green-700",
    bgColor: "bg-green-50",
    borderColor: "border-green-400",
    duration: "2 Years (4 Semesters)",
    seats: 20,
    ageLimit: "14 – 22 years",
    entryQual: "Passed Class X (Madhyamik) with Science and Mathematics",
    intro: "Turner trade trains students in the operation of lathe machines and other machine tools to produce precision metal components. Turners are required in all mechanical engineering industries where metal parts must be manufactured or machined to exact dimensional specifications. The course covers turning operations, threading, boring, milling, and the use of precision measuring instruments to produce components meeting tight tolerances.",
    objectives: [
      "Operate centre lathe and other machine tools safely and accurately.",
      "Perform turning, facing, taper turning, threading (internal & external), knurling, boring and parting operations.",
      "Set up and use milling machines, drilling machines, surface grinders, and cylindrical grinders.",
      "Read and interpret engineering drawings and produce components to given tolerances.",
      "Use precision measuring instruments — vernier callipers, micrometers, dial gauges, and comparators.",
      "Sharpen cutting tools — select correct tool geometry, rake angles, and cutting speeds.",
      "Perform heat treatment processes — hardening, tempering, annealing — and understand their effects.",
    ],
    employment: [
      "Machine tool manufacturing industries",
      "Automobile and engineering workshops",
      "Defence and aerospace manufacturing units",
      "Railways production units and workshops",
      "Public sector: BHEL, HAL, BEL, HMT, BEML",
      "Self-employment as precision machining contractor",
    ],
    syllabus: [
      {
        semester: "Semester I & II (Year 1)",
        topics: ["Lathe Machine — Parts & Safety", "Plain Turning, Facing & Parting", "Taper Turning Methods", "Thread Cutting (Metric & BSW)", "Drilling & Boring on Lathe", "Measurement with Precision Instruments", "Engineering Drawing & Workshop Science"],
      },
      {
        semester: "Semester III & IV (Year 2)",
        topics: ["Milling Machine Operations", "Surface & Cylindrical Grinding", "Gear Cutting (Introduction)", "CNC Lathe Basics", "Tool Geometry & Tool Grinding", "Fits, Limits & Tolerances", "Employability & Entrepreneurship Skills"],
      },
    ],
    certification: "National Trade Certificate (NTC) awarded by the National Council for Vocational Training (NCVT), Ministry of Skill Development & Entrepreneurship, Government of India.",
  },
  {
    slug: "welder",
    name: "Welder",
    icon: Flame,
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-400",
    duration: "1 Year (2 Semesters)",
    seats: 20,
    ageLimit: "Minimum 14 years",
    entryQual: "Passed Class VIII or Class X with Science and Mathematics",
    intro: "Welders are specialist engineering fabrication trade persons who join or cut metals in beams, girders, vessels, piping, and other metal components. Welding usually involves applying heat to metal pieces to melt and fuse them together. In electric arc welding, heat is created as electric current flows through an arc between the welding electrode and the metal. This course covers Arc Welding, Oxy-acetylene gas welding and cutting, pipe welding, TIG and MIG welding and more.",
    objectives: [
      "Perform Shielded Metal Arc Welding (SMAW) in flat, horizontal, vertical, and overhead positions.",
      "Carry out Oxy-Acetylene Gas Welding and Cutting operations.",
      "Perform TIG (GTAW) and MIG (GMAW) welding on mild steel, stainless steel, and aluminium.",
      "Perform pipe welding in various positions as per industrial standards.",
      "Read welding symbols and interpret engineering drawings for fabrication.",
      "Inspect and test weld quality — visual inspection, dye-penetrant testing basics.",
      "Maintain welding equipment and follow safety procedures including PPE usage.",
    ],
    employment: [
      "Structural fabrication — bridges, roof structures, building & construction",
      "Automobile and allied industries; ship building and repair",
      "Site construction for power stations, process industries, and mining",
      "Service industries — road transportation and Railways",
      "Public sector: BHEL, BEML, NTPC, SAIL, ONGC, IOCL, HPCL",
      "Overseas employment in petrochemical and construction industries",
    ],
    syllabus: [
      {
        semester: "Semester I",
        topics: ["Welding Safety & PPE", "Arc Welding Equipment & Electrodes", "SMAW — Flat & Horizontal Position", "Oxy-Acetylene Gas Welding & Cutting", "Gas Cutting & Profile Cutting", "Distortion Control & Weld Defects", "Engineering Drawing & Workshop Calculation"],
      },
      {
        semester: "Semester II",
        topics: ["SMAW — Vertical & Overhead Position", "TIG Welding (GTAW) Basics", "MIG Welding (GMAW) Basics", "Pipe Welding in Various Positions", "Weld Inspection & Quality Testing", "Welding Symbols & Joint Design", "Employability & Entrepreneurship Skills"],
      },
    ],
    certification: "National Trade Certificate (NTC) awarded by the National Council for Vocational Training (NCVT), Ministry of Skill Development & Entrepreneurship, Government of India.",
  },
  {
    slug: "electronic-mechanic",
    name: "Electronic Mechanic",
    icon: Cpu,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-400",
    duration: "2 Years (4 Semesters)",
    seats: 20,
    ageLimit: "14 – 22 years",
    entryQual: "Passed Class X (Madhyamik) with Science and Mathematics",
    intro: "Electronic Mechanic trade prepares students to install, test, repair, and maintain electronic equipment used in homes, offices, and industries. The course covers consumer electronics — televisions, audio systems, home appliances — as well as industrial electronics, communication systems, computers, and microcontroller-based systems.",
    objectives: [
      "Identify and test electronic components: resistors, capacitors, inductors, diodes, transistors, ICs.",
      "Read and interpret circuit diagrams, PCB layouts, and service manuals.",
      "Carry out soldering, de-soldering, and PCB repair using proper techniques.",
      "Service and repair consumer electronics — CRT/LCD televisions, audio amplifiers, DVD players.",
      "Install, maintain and repair communication equipment — intercom systems, CCTV, and antenna systems.",
      "Work with microcontrollers, PLCs, and basic industrial control systems.",
      "Perform computer hardware maintenance — assembly, troubleshooting, and networking basics.",
    ],
    employment: [
      "Consumer electronics service centres (Samsung, LG, Sony, Philips, etc.)",
      "Telecommunications companies and BPO/IT hardware support",
      "Medical electronics — hospital equipment maintenance",
      "Defence electronics — Indian Army, Navy, Air Force",
      "Public sector: BEL, BHEL, ECIL, DRDO, ISRO",
      "Self-employment as electronics repair technician",
    ],
    syllabus: [
      {
        semester: "Semester I & II (Year 1)",
        topics: ["Electronics Fundamentals & Safety", "Passive & Active Components", "Diodes, Transistors & Amplifiers", "Power Supplies & Rectifiers", "Soldering & PCB Fabrication Techniques", "Digital Electronics — Logic Gates & Combinational Circuits", "Engineering Drawing & Workshop Calculation"],
      },
      {
        semester: "Semester III & IV (Year 2)",
        topics: ["Microcontrollers & Embedded Systems Basics", "Consumer Electronics Servicing (TV, Audio)", "Industrial Electronics & PLCs", "Computer Hardware Assembly & Troubleshooting", "Communication Systems & CCTV Installation", "Test & Measuring Instruments — CRO, Function Generator, LCR Meter", "Employability & Entrepreneurship Skills"],
      },
    ],
    certification: "National Trade Certificate (NTC) awarded by the National Council for Vocational Training (NCVT), Ministry of Skill Development & Entrepreneurship, Government of India.",
  },
  {
    slug: "draughtsman-civil",
    name: "Draughtsman Civil",
    icon: Ruler,
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-400",
    duration: "2 Years (4 Semesters)",
    seats: 20,
    ageLimit: "14 – 22 years",
    entryQual: "Passed Class X (Madhyamik) with Science and Mathematics",
    intro: "Draughtsman Civil trade trains students in the preparation of civil engineering drawings, maps, and structural plans using both traditional drafting instruments and modern AutoCAD software.",
    objectives: [
      "Prepare civil engineering drawings — building plans, elevations, sections, and details — manually and using AutoCAD.",
      "Draw topographic maps, site plans, and survey drawings.",
      "Prepare structural drawings for RCC, steel, and timber structures.",
      "Produce road, highway, bridge, and drainage drawings.",
      "Use AutoCAD for 2D drafting, dimensioning, hatching, plotting, and file management.",
      "Read and interpret soil investigation reports, structural analysis output, and specifications.",
      "Prepare building service drawings — water supply, sanitation, and electrification layouts.",
    ],
    employment: [
      "Construction companies, real estate developers, and builders",
      "Architectural firms and urban planning offices",
      "Public Works Departments (PWD), CPWD, NHAI, Railways",
      "Survey departments and mapping agencies",
      "Public sector: WBHIDCO, KMDA, KMRC, RITES, IRCON",
      "Self-employment as AutoCAD draughtsman / freelance CAD operator",
    ],
    syllabus: [
      {
        semester: "Semester I & II (Year 1)",
        topics: ["Engineering Drawing Principles & BIS Standards", "Building Materials & Construction Methods", "Plain & Descriptive Geometry", "Architectural Drawing — Plans, Elevations & Sections", "Structural Drawing Basics (RCC & Steel)", "Introduction to AutoCAD — Interface, Commands & 2D Drawing", "Workshop Calculation, Science & Engineering Drawing"],
      },
      {
        semester: "Semester III & IV (Year 2)",
        topics: ["Advanced AutoCAD — Blocks, Layers, Plotting", "Road & Highway Drawings", "Bridge & Culvert Drawings", "Surveying & Levelling (Field Work)", "Soil & Foundation Drawings", "Estimation & Costing Basics", "Employability & Entrepreneurship Skills"],
      },
    ],
    certification: "National Trade Certificate (NTC) awarded by the National Council for Vocational Training (NCVT), Ministry of Skill Development & Entrepreneurship, Government of India.",
  },
  {
    slug: "draughtsman-mechanical",
    name: "Draughtsman Mechanical",
    icon: PenTool,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-400",
    duration: "2 Years (4 Semesters)",
    seats: 20,
    ageLimit: "14 – 22 years",
    entryQual: "Passed Class X (Madhyamik) with Science and Mathematics",
    intro: "Draughtsman Mechanical trade trains students to create detailed mechanical engineering drawings, assembly diagrams, and production drawings using both manual drafting and AutoCAD software.",
    objectives: [
      "Prepare detailed and assembly drawings of machine parts and sub-assemblies manually and using AutoCAD.",
      "Draw orthographic projections, isometric views, and sectional views as per BIS conventions.",
      "Produce manufacturing drawings with tolerances, surface finish symbols, and GD&T annotations.",
      "Prepare jig and fixture drawings and basic tooling layouts.",
      "Use AutoCAD for 2D mechanical drafting, dimensioning, tolerance notation, and file management.",
      "Read and interpret assembly drawings to prepare part drawings and bill of materials (BOM).",
      "Draw pipe layout and piping & instrumentation diagrams (P&ID) basics.",
    ],
    employment: [
      "Mechanical engineering manufacturing companies",
      "Automobile industry — design and production departments",
      "Fabrication and heavy engineering industries",
      "Public sector: BHEL, HMT, HAL, BEML, RITES",
      "Defence Research & Development: DRDO, Ordnance Factories",
      "Self-employment as mechanical CAD draughtsman / freelance AutoCAD operator",
    ],
    syllabus: [
      {
        semester: "Semester I & II (Year 1)",
        topics: ["Engineering Drawing Principles & BIS Standards", "Plain & Descriptive Geometry", "Orthographic Projection — 1st & 3rd Angle", "Sectional Views & Auxiliary Views", "Fasteners, Keys, Couplings & Pipe Fittings Drawing", "Introduction to AutoCAD — Interface, Commands & 2D Drawing", "Workshop Calculation, Science & Engineering Drawing"],
      },
      {
        semester: "Semester III & IV (Year 2)",
        topics: ["Advanced AutoCAD — Blocks, Attributes, Plotting", "Assembly & Detail Drawings of Machine Components", "Tolerances, Fits & Surface Finish Symbols", "Jig, Fixture & Tooling Layout Drawings", "Production Drawing & Bill of Materials", "Introduction to 3D Modelling (AutoCAD/SolidWorks basics)", "Employability & Entrepreneurship Skills"],
      },
    ],
    certification: "National Trade Certificate (NTC) awarded by the National Council for Vocational Training (NCVT), Ministry of Skill Development & Entrepreneurship, Government of India.",
  },
];

export default function TradeDetail() {
  const { slug } = useParams<{ slug: string }>();
  const trade = trades.find((t) => t.slug === slug);

  if (!trade) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-background">
        <h1 className="text-3xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>Trade not found</h1>
        <Link to="/courses" className="text-accent font-semibold hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Courses
        </Link>
      </div>
    );
  }

  const Icon = trade.icon;

  return (
    <div className="bg-background pb-24">
      <PageHero
        title={trade.name}
        subtitle={`NCVT-affiliated ITI Trade · ${trade.duration} · ${trade.seats} seats per unit`}
        breadcrumb={trade.name}
      />

      {/* Breadcrumb / Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-2">
        <nav className="flex items-center gap-2 text-sm">
          <Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors">Courses</Link>
          <ChevronRight className="w-4 h-4 text-muted-foreground/40" />
          <span className="text-primary font-bold">{trade.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Main content */}
          <div className="lg:col-span-2 space-y-16">

            {/* Introduction Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-2xl ${trade.bgColor} ${trade.borderColor} border shadow-inner`}>
                  <Icon className={`w-8 h-8 ${trade.color}`} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary font-serif">Trade Overview</h2>
                  <div className="h-1.5 w-12 bg-secondary mt-1 rounded-full"></div>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed text-lg font-light">
                {trade.intro}
              </p>
            </motion.section>

            {/* Learning Objectives */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-primary mb-8 font-serif flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-accent" />
                Key Learning Objectives
              </h3>
              <div className="grid sm:grid-cols-1 gap-4">
                {trade.objectives.map((obj, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-border group hover:border-accent/40 hover:shadow-lg transition-all duration-300">
                    <span className="mt-0.5 w-7 h-7 rounded-lg bg-accent/10 text-accent flex items-center justify-center text-xs font-bold shrink-0 transition-colors group-hover:bg-accent group-hover:text-white">{i + 1}</span>
                    <span className="text-foreground/80 text-sm leading-relaxed">{obj}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Syllabus */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-primary mb-8 font-serif flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-accent" />
                Curriculum Journey
              </h3>
              <div className="space-y-6">
                {trade.syllabus.map((sem, i) => (
                  <div key={i} className="relative group">
                    {i !== trade.syllabus.length - 1 && (
                      <div className="absolute left-[2.25rem] top-12 bottom-0 w-0.5 bg-dashed-border border-l-2 border-dashed border-primary/10"></div>
                    )}
                    <div className="bg-white border border-border rounded-3xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500">
                      <div className="bg-primary px-6 py-5 flex items-center justify-between">
                        <h4 className="text-base font-bold text-white flex items-center gap-3">
                          <div className="p-2 bg-white/10 rounded-lg">
                            <Clock className="w-4 h-4 text-secondary" />
                          </div>
                          {sem.semester}
                        </h4>
                        <Badge className="bg-secondary/20 text-secondary border-none uppercase tracking-widest text-[10px]">NCVT Accredited</Badge>
                      </div>
                      <div className="p-8 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                        {sem.topics.map((topic, j) => (
                          <div key={j} className="flex items-start gap-3 group/item">
                            <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5 group-hover/item:translate-x-1 transition-transform" />
                            <span className="text-sm text-foreground/75 leading-relaxed">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Employment */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-primary mb-8 font-serif flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-accent" />
                Future Prospects & Careers
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {trade.employment.map((emp, i) => (
                  <div key={i} className="flex items-center gap-4 bg-gray-50/50 border border-border rounded-2xl p-5 hover:bg-white hover:shadow-md transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                      <Building2 className="w-5 h-5 text-accent group-hover:text-white" />
                    </div>
                    <span className="text-sm text-foreground/80 font-medium">{emp}</span>
                  </div>
                ))}
              </div>
            </motion.section>

          </div>

          {/* Sidebar - Quick Info */}
          <div className="space-y-8">
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="sticky top-28"
            >
              <div className="bg-[#0A1931] text-white rounded-[2rem] shadow-2xl overflow-hidden border border-white/10 group">
                {/* Header with Pattern */}
                <div className="relative p-8 pb-10">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-[80px]"></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl ${trade.bgColor} flex items-center justify-center mb-6 shadow-xl ring-4 ring-white/5`}>
                      <Icon className={`w-8 h-8 ${trade.color}`} />
                    </div>
                    <h2 className="text-3xl font-bold leading-tight mb-2 font-serif">{trade.name}</h2>
                    <div className="flex gap-2">
                       <Badge className="bg-secondary/20 text-secondary border-none text-[10px] uppercase font-bold tracking-widest px-3">NCVT Affiliated</Badge>
                       <Badge className="bg-white/10 text-white/50 border-none text-[10px] uppercase font-bold tracking-widest px-3">DGT India</Badge>
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="px-8 pb-8 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/5 hover:bg-white/10 transition-colors">
                      <Clock className="w-5 h-5 text-accent mb-2" />
                      <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Duration</p>
                      <p className="text-sm font-bold text-white leading-tight">{trade.duration}</p>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/5 hover:bg-white/10 transition-colors">
                      <Users className="w-5 h-5 text-accent mb-2" />
                      <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Intake</p>
                      <p className="text-sm font-bold text-white leading-tight">{trade.seats} Students</p>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-5 border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-accent/20 rounded-lg">
                        <Award className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Eligibility</p>
                        <p className="text-xs font-bold text-white leading-relaxed">{trade.entryQual}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-5 border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-secondary/20 rounded-lg">
                        <GraduationCap className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Age Criteria</p>
                        <p className="text-xs font-bold text-white leading-relaxed">{trade.ageLimit}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Area */}
                <div className="p-8 pt-0 space-y-3">
                  <Button asChild className="w-full bg-[#f2b951] hover:bg-[#e0a840] text-[#0A1931] font-black h-14 rounded-2xl transition-all shadow-xl shadow-orange-950/20 active:scale-[0.98] border-none text-base">
                    <Link to="/admission/iti">Apply for Admission</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full border-white/10 text-white hover:bg-white/10 h-14 rounded-2xl transition-all text-base bg-transparent font-bold">
                    <Link to="/contact">Get Callback</Link>
                  </Button>
                </div>

                {/* Footer certification text */}
                <div className="px-8 py-6 bg-white/5 border-t border-white/5">
                   <div className="flex gap-3">
                      <Award className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <p className="text-[10px] text-white/40 leading-relaxed italic">
                        {trade.certification}
                      </p>
                   </div>
                </div>
              </div>

               {/* Trade Switcher / Other Links */}
              <div className="mt-8 bg-white border border-border rounded-[2.5rem] p-8 shadow-sm">
                <h3 className="font-bold text-primary text-xs mb-6 uppercase tracking-[0.2em] flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  Browse More Trades
                </h3>
                <div className="space-y-2">
                  {trades.filter((t) => t.slug !== trade.slug).slice(0, 4).map((t) => {
                    const OtherIcon = t.icon;
                    return (
                      <Link 
                        key={t.slug} 
                        to={`/courses/${t.slug}`}
                        className="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 transition-all group border border-transparent hover:border-border"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`p-2 rounded-xl ${t.bgColor} group-hover:scale-110 transition-transform`}>
                            <OtherIcon className={`w-4 h-4 ${t.color}`} />
                          </div>
                          <span className="text-sm font-bold text-primary/70 group-hover:text-primary transition-colors">{t.name}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary transition-colors" />
                      </Link>
                    );
                  })}
                  <Link to="/courses" className="flex items-center justify-center gap-2 pt-4 text-xs font-black text-accent uppercase tracking-widest hover:gap-4 transition-all">
                    View All 7 Trades <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Simple Button component for consistency if UI library isn't globally exported
function Button({ children, className, asChild, variant, ...props }: any) {
  const Comp = asChild ? "span" : "button";
  const variants: any = {
    outline: "border border-input bg-background",
  };
  return (
    <Comp className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${variants[variant] || ""} ${className}`} {...props}>
      {children}
    </Comp>
  );
}
