import { motion } from "motion/react";
import { CheckCircle, Users, Wrench, Zap, Cpu, Flame, Cog, Ruler } from "lucide-react";
import { PageHero } from "../components/PageHero";
import campusImg from "../assets/images/regenerated_image_1778315041853.jpg";

const adminStaff = [
  { name: "Swami Gunindrananda", designation: "Principal", qualification: "B.Tech (Mech. Engg.)" },
  { name: "Br. Amurtachaitanya", designation: "Vice Principal", qualification: "—" },
  { name: "Sri Jagat Kumar Das", designation: "Honorary Accountant", qualification: "CMA" },
  { name: "Sri Sourav Banerjee", designation: "Accountant cum Clerk & Typist", qualification: "B.Com" },
  { name: "Sri Kanchan Chakraborty", designation: "Clerk", qualification: "B.Sc" },
  { name: "Sri Samiran Chakraborty", designation: "Teacher in Computer Applications", qualification: "B.Sc, MCA, B.Ed" },
  { name: "Sri Akash Banerjee", designation: "Teacher in Employability Skill", qualification: "M.A, M.Ed" },
  { name: "Sri Srimanta Chakraborty", designation: "Computer Operator", qualification: "BCA, MCA" },
];

const tradeFaculty = [
  {
    trade: "Draughtsman (Civil)",
    icon: Ruler,
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
    staff: [
      { name: "Sri Malay Ghosh", designation: "Instructor", qualification: "I.T.I. (DMC), Diploma (Civil Engg.)" },
      { name: "Sri Krishnendu Bhattacharya", designation: "Instructor", qualification: "Diploma (Civil Engg.)" },
    ],
  },
  {
    trade: "Draughtsman (Mechanical)",
    icon: Cog,
    color: "bg-slate-50 border-slate-200",
    iconColor: "text-slate-600",
    staff: [
      { name: "Sri Mithun Dhara", designation: "Instructor", qualification: "Diploma (Mechanical Engg.)" },
      { name: "Sri Biswajit Das", designation: "Instructor", qualification: "Diploma (Mechanical Engg.)" },
    ],
  },
  {
    trade: "Electrician",
    icon: Zap,
    color: "bg-yellow-50 border-yellow-200",
    iconColor: "text-yellow-600",
    staff: [
      { name: "Sri Uttam Kumar Das", designation: "Instructor", qualification: "I.T.I (Electrician)" },
      { name: "Sri Sukhendu Moyra", designation: "Instructor", qualification: "I.T.I. (Electrician), Diploma (Electrical Engg.)" },
      { name: "Sri Bamacharan Bhowmick", designation: "Guest-Instructor (Hon.)", qualification: "I.T.I. (Electrician); I.T.I. (Electronics Mechanic)" },
    ],
  },
  {
    trade: "Electronics Mechanic",
    icon: Cpu,
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-600",
    staff: [
      { name: "Sri Sanat Iswar", designation: "Instructor", qualification: "I.T.I (Electronics Mechanic)" },
      { name: "Sri Biswajit Das", designation: "Instructor", qualification: "Diploma (Mechanical Engg.)" },
    ],
  },
  {
    trade: "Welder",
    icon: Flame,
    color: "bg-orange-50 border-orange-200",
    iconColor: "text-orange-600",
    staff: [
      { name: "Sri Nandadulal Mandal", designation: "Instructor", qualification: "B.Sc, ITI (Welder)" },
      { name: "Sri Tapas Mondal", designation: "Instructor – Engg. Drawing & Workshop Cal.", qualification: "Diploma (Mechanical Engg.)" },
      { name: "Sri Partha Pratim Ganguly", designation: "Instructor in Employability Skills", qualification: "M.Tech / M.B.A." },
    ],
  },
  {
    trade: "Turner",
    icon: Wrench,
    color: "bg-purple-50 border-purple-200",
    iconColor: "text-purple-600",
    staff: [
      { name: "Sri Ahindra Ghosh", designation: "Instructor", qualification: "Diploma (Mechanical)" },
      { name: "Sri Bikash Chaudhuri", designation: "Instructor", qualification: "ITI (Turner)" },
      { name: "Sri Tapas Mondal", designation: "Instructor – Engg. Drawing & Workshop Cal.", qualification: "Diploma (Mechanical Engg.)" },
    ],
  },
  {
    trade: "Fitter",
    icon: Wrench,
    color: "bg-red-50 border-red-200",
    iconColor: "text-red-600",
    staff: [
      { name: "Sri Kamal Maity", designation: "Instructor", qualification: "ITI (Fitter), Diploma (Mech. Engg.)" },
      { name: "Sri Tapas Mondal", designation: "Instructor – Engg. Drawing & Workshop Cal.", qualification: "Diploma (Mechanical Engg.)" },
    ],
  },
];

export default function About() {
  return (
    <div className="bg-background pb-24">
      <PageHero
        title="About Us"
        subtitle="Over a century of excellence in technical and vocational education, rooted in the spiritual tradition of the Ramakrishna Mission."
        breadcrumb="About Us"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid md:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-16">
            <section>
              <h2 className="text-3xl font-bold mb-8 text-primary flex items-center">
                <span className="w-8 h-1 bg-secondary mr-4"></span>
                Our History
              </h2>
              <div className="prose prose-lg text-muted-foreground max-w-none">
                <p className="leading-relaxed mb-4">
                  Ramakrishna Mission Shilpavidyalaya, Belur Math, is one of the premier Industrial Training Institutes in West Bengal. Established in the year 1921, it has a glorious history of over a century in imparting technical education to the youth of our country.
                </p>
                <p className="leading-relaxed mb-4">
                  The institution was founded with the vision of Swami Vivekananda to provide man-making and character-building education. It aims to create self-reliant, morally upright, and skilled technicians who can contribute meaningfully to the industrial growth of the nation.
                </p>
                <p className="leading-relaxed">
                  Over the decades, the Shilpavidyalaya has grown from a modest beginning to a comprehensive vocational training center, continually upgrading its infrastructure and curriculum to keep pace with changing industrial requirements.
                </p>
              </div>
            </section>
            
            <section className="p-10 rounded-xl border-l-4 border-l-secondary shadow-lg bg-[#f5f4eb]">
              <h2 className="text-3xl font-bold mb-8 text-primary">
                Vision & Mission
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-accent mb-3 uppercase tracking-wide">
                    Vision
                  </h3>
                  <p className="text-foreground text-lg leading-relaxed font-medium">
                    To be a center of excellence in technical education, blending modern skill development with the timeless spiritual values of the Ramakrishna Mission, thereby producing skilled professionals of strong character.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent mb-4 uppercase tracking-wide">
                    Mission
                  </h3>
                  <ul className="space-y-4 text-muted-foreground">
                    {[
                      "To provide high-quality vocational training aligned with NCVT standards.",
                      "To foster an environment of discipline, hard work, and moral integrity.",
                      "To ensure excellent placement opportunities through strong industry linkages.",
                      "To support students from economically weaker sections in building sustainable livelihoods."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start text-lg text-gray-700">
                        <CheckCircle className="h-6 w-6 text-secondary mr-4 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold mb-8 text-primary flex items-center">
                <span className="w-8 h-1 bg-secondary mr-4"></span>
                Principal's Message
              </h2>
              <div className="flex flex-col sm:flex-row gap-8 items-start bg-[#EEF4FF] p-8 rounded-xl border border-primary/10">
                <div className="w-28 h-28 rounded-full border-4 border-white shadow-md bg-primary flex items-center justify-center shrink-0">
                  <span className="text-4xl font-bold text-secondary">SG</span>
                </div>
                <div>
                  <p className="text-foreground italic mb-6 text-lg leading-relaxed font-medium">
                    "At Shilpavidyalaya, we do not merely teach trades; we build lives. Our commitment is to the holistic development of our students, ensuring they leave these hallowed grounds not just with a certificate, but with the confidence and character to face the world."
                  </p>
                  <p className="font-bold text-2xl text-primary mb-1">
                    Swami Gunindrananda
                  </p>
                  <p className="text-sm text-accent font-bold uppercase tracking-widest">
                    Principal · B.Tech (Mech. Engg.)
                  </p>
                </div>
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-10">
            <div className="bg-primary p-8 rounded-xl shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-8 pb-4 border-b border-white/20 text-white font-serif">
                Key Milestones
              </h3>
              <div className="space-y-6">
                {[
                  { year: "1921", event: "Establishment of the Institute" },
                  { year: "1954", event: "Affiliation with State Council" },
                  { year: "1969", event: "Recognition by NCVT, Govt. of India" },
                  { year: "1996", event: "Inauguration of New Workshop Complex" },
                  { year: "2021", event: "Centenary Celebrations" }
                ].map((milestone, i) => (
                  <div key={i} className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-secondary before:rounded-full before:content-[''] after:absolute after:left-[5px] after:top-5 after:bottom-[-20px] last:after:hidden after:w-0.5 after:bg-white/20 pb-4">
                    <div className="font-bold text-xl text-secondary mb-1">
                      {milestone.year}
                    </div>
                    <div className="text-sm text-white/80 leading-snug">
                      {milestone.event}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-border shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-4 font-serif">
                The Belur Math Campus
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Situated on the serene western bank of the Hooghly River, the campus offers an environment perfectly suited for focused learning and spiritual growth.
              </p>
              <img
                src={campusImg}
                alt="Belur Math"
                className="w-full h-48 object-cover rounded-lg shadow-sm"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Faculty & Staff Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="text-center mb-14">
            <p className="text-accent font-bold uppercase tracking-widest text-sm mb-2">Our People</p>
            <h2 className="text-4xl font-bold text-primary mb-4 font-serif">Faculty & Staff</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-4"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our dedicated team of qualified instructors and administrative staff bring decades of expertise to every classroom and workshop.
            </p>
          </div>

          {/* Administrative Staff */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-lg bg-primary text-white">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold text-primary font-serif">Administrative Staff</h3>
            </div>
            <div className="overflow-x-auto rounded-xl shadow-md border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="py-4 px-6 text-left font-semibold tracking-wide">Name</th>
                    <th className="py-4 px-6 text-left font-semibold tracking-wide">Designation</th>
                    <th className="py-4 px-6 text-left font-semibold tracking-wide">Qualification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {adminStaff.map((member, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="py-3.5 px-6 font-semibold text-foreground">{member.name}</td>
                      <td className="py-3.5 px-6 text-muted-foreground">{member.designation}</td>
                      <td className="py-3.5 px-6 text-muted-foreground">{member.qualification}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Trade-wise Faculty */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8 font-serif">Trade-wise Faculty (ITI)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {tradeFaculty.map((dept, di) => (
                <motion.div
                  key={di}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: di * 0.07 }}
                  className={`rounded-xl border-2 overflow-hidden shadow-sm ${dept.color}`}
                >
                  <div className="flex items-center gap-3 px-5 py-4 border-b border-current/10">
                    <dept.icon className={`h-5 w-5 ${dept.iconColor}`} />
                    <h4 className="font-bold text-primary text-base">Trade: {dept.trade}</h4>
                  </div>
                  <div className="divide-y divide-border/50">
                    {dept.staff.map((s, si) => (
                      <div key={si} className="px-5 py-3.5 flex flex-col sm:flex-row sm:items-start sm:gap-4 bg-white/40">
                        <div className="flex-1">
                          <p className="font-semibold text-foreground text-sm">{s.name}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{s.designation}</p>
                        </div>
                        <div className="mt-1 sm:mt-0 sm:text-right">
                          <span className="inline-block text-xs bg-white border border-border rounded-full px-3 py-1 text-muted-foreground font-medium">
                            {s.qualification}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
