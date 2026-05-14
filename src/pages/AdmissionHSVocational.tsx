import { Card, CardContent } from "../components/ui/Card";
import { FileText, Calendar, CheckCircle2, AlertCircle, ClipboardList, Users, ExternalLink, ChevronRight, BookOpen, Info, Phone, PenLine, GraduationCap, Briefcase, Award, Star, Smartphone } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Link } from "react-router-dom";
import hsAdmissionPoster from "../assets/images/poster.jpg";
import hsAdmissionQR from "../assets/images/regenerated_image_1778309223024.jpg";

export default function AdmissionHSVocational() {
  const applyUrl = "https://docs.google.com/forms/d/e/1FAIpQLSf9l-VJqDG8zjLIYXytgmunM5Lme8dQKOtTp6OejppOSOxEAA/viewform";

  return (
    <div className="bg-background pb-24">
      <PageHero
        title="H.S. Vocational Admission"
        subtitle="Step-by-step guide to joining the Higher Secondary Vocational programme for the 2026 academic session. Please read the full procedure carefully before applying."
        breadcrumb="H.S. Vocational Admission"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">

        {/* Tab Switcher */}
        <div className="flex gap-3 justify-center mb-12">
          <Link
            to="/admission/iti"
            className="px-7 py-2.5 rounded-full text-sm font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
          >
            ITI Admission
          </Link>
          <span className="px-7 py-2.5 rounded-full text-sm font-semibold bg-primary text-white border-2 border-primary cursor-default">
            H.S. Vocational
          </span>
        </div>

        {/* Prospectus Banner */}
        <div className="bg-primary text-white rounded-2xl p-6 md:p-8 mb-14 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-secondary/20 border border-secondary/30 flex items-center justify-center shrink-0">
              <BookOpen className="w-7 h-7 text-secondary" />
            </div>
            <div>
              <p className="text-secondary font-bold uppercase tracking-widest text-xs mb-1">First Step</p>
              <h3 className="text-xl font-bold">Read the Admission Notice Carefully</h3>
              <p className="text-white/70 text-sm mt-0.5">Visit the official website to download the latest H.S. Vocational admission notification before proceeding.</p>
            </div>
          </div>
          <a href="https://rkmshilpavidyalaya.ac.in/h-s-vocational-admission-2024/" target="_blank" rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-secondary text-primary font-bold px-6 py-3 rounded-xl hover:bg-secondary/90 transition-colors text-sm">
            View Official Notice <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Official Admission Poster */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
              Official Admission Notice 2026
            </h2>
          </div>
          <div className="bg-white border-2 border-border rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-primary/5 border-b border-border px-6 py-3 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">একাদশ শ্রেণীতে ভর্তির বিজ্ঞপ্তি ২০২৬ — উচ্চমাধ্যমিক (বৃত্তিমূলক)</p>
              <a
                href={hsAdmissionPoster}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-accent transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" /> View full size
              </a>
            </div>
            <div className="flex justify-center p-4 md:p-8 bg-gray-50">
              <img
                src={hsAdmissionPoster}
                alt="H.S. Vocational Admission Notice 2026 — Ramakrishna Mission Shilpavidyalaya"
                className="max-w-full md:max-w-2xl w-auto rounded-xl shadow-md border border-border"
              />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">

          {/* ── Main Content ── */}
          <div className="lg:col-span-2 space-y-16">

            {/* Benefits of the Programme */}
            <section>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                <Star className="text-secondary h-8 w-8 shrink-0" />
                Benefits of the Programme
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: BookOpen,
                    title: "Technical Education via H.S.",
                    desc: "Gain hands-on engineering knowledge alongside the regular Higher Secondary curriculum — all in one programme.",
                  },
                  {
                    icon: GraduationCap,
                    title: "Pathway to Higher Studies",
                    desc: "Opens doors to Diploma Engineering (Polytechnic), B.Tech, ITI, BCA, B.Voc., and B.Sc (Pass) admissions after passing.",
                  },
                  {
                    icon: Briefcase,
                    title: "Direct Employment Opportunity",
                    desc: "Vocational training prepares students for direct job placement immediately after completing the H.S. programme.",
                  },
                  {
                    icon: Award,
                    title: "Additional NSQF Certificate",
                    desc: "Students receive an NSQF-aligned vocational certificate alongside the standard H.S. board certificate — a dual credential.",
                  },
                ].map((b, i) => (
                  <div key={i} className="bg-white border border-border rounded-xl p-5 shadow-sm flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary/15 rounded-xl flex items-center justify-center shrink-0">
                      <b.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-primary text-sm mb-1">{b.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Courses Offered */}
            <section>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                <BookOpen className="text-secondary h-8 w-8 shrink-0" />
                Vocational Streams Offered
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  {
                    code: "ETEM",
                    name: "Electrical Technology",
                    seats: 20,
                    subjects: [
                      "Electrical Home Appliances Repair Technician",
                      "Domestic Wireman & Motor Installation Technician",
                    ],
                  },
                  {
                    code: "CMT",
                    name: "Computer Technology",
                    seats: 20,
                    subjects: [
                      "Computer Maintenance & Networking Assistant",
                      "Python Programming Language",
                    ],
                  },
                ].map((t) => (
                  <div key={t.code} className="bg-white border-2 border-border rounded-2xl p-6 shadow-sm hover:border-secondary transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-lg text-primary">{t.name}</h3>
                        <span className="text-xs font-mono bg-secondary/15 text-primary px-2 py-0.5 rounded mt-1 inline-block">{t.code}</span>
                      </div>
                      <span className="text-xs font-bold bg-primary/10 text-primary px-2.5 py-1 rounded-full shrink-0">{t.seats} seats</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">2-Year Programme · Class XI – XII</p>
                    <p className="text-xs font-semibold text-primary/60 uppercase tracking-wide mb-2">Vocational Subjects</p>
                    <ul className="space-y-2">
                      {t.subjects.map((s, idx) => (
                        <li key={s} className="flex items-start gap-2 text-sm text-foreground/80">
                          <span className="w-5 h-5 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{idx + 1}</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-[#EEF4FF] border border-primary/15 rounded-xl p-4 flex items-start gap-3">
                <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/80 leading-relaxed">
                  The H.S. Vocational programme is affiliated to the <strong>West Bengal State Council of Technical &amp; Vocational Education &amp; Skill Development (WBSCT&amp;VE&amp;SD)</strong>. Successful students receive a board-recognised Higher Secondary certificate with a vocational specialisation.
                </p>
              </div>
            </section>

            {/* Curriculum Structure */}
            <section>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                <ClipboardList className="text-secondary h-8 w-8 shrink-0" />
                Curriculum Structure
              </h2>
              <div className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden">
                <div className="bg-primary px-6 py-4">
                  <p className="text-white font-semibold">Like a regular H.S. course — plus a vocational Engineering subject</p>
                  <p className="text-white/70 text-xs mt-1">Students study all standard H.S. subjects alongside one chosen vocational Engineering stream.</p>
                </div>
                <div className="p-6 space-y-6">

                  {/* Class XI */}
                  <div className="border border-primary/15 rounded-xl overflow-hidden">
                    <div className="bg-primary/8 px-4 py-2.5 flex items-center gap-2 border-b border-primary/15">
                      <span className="bg-primary text-white text-xs font-bold px-2.5 py-0.5 rounded-full">Class XI</span>
                      <span className="text-sm font-semibold text-primary">Common Subjects</span>
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-muted-foreground mb-3">General subjects for all students in Year 1</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {["Bengali", "English", "Mathematics"].map((sub) => (
                          <span key={sub} className="bg-[#EEF4FF] text-sm font-medium px-3 py-1.5 rounded-full border border-primary/15 text-[#193cc8]">{sub}</span>
                        ))}
                        {["Physics Theory", "Physics Practical", "Chemistry Theory", "Chemistry Practical", "Fundamental of Mechanics and Technical Drawing (FMTD)", "Entrepreneurship Development & Computer Application (EDCA)"].map((sub) => (
                          <span key={sub} className="bg-blue-50 text-blue-800 text-sm font-medium px-3 py-1.5 rounded-full border border-blue-200">{sub}</span>
                        ))}
                      </div>
                      <p className="text-xs font-semibold text-primary mb-2">Co-curricular &amp; Additional Activities</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {[
                          { label: "Spiritual Class", emoji: "🙏" },
                          { label: "Games", emoji: "🏃" },
                        ].map(({ label, emoji }) => (
                          <span key={label} className="bg-green-50 text-green-800 text-sm font-medium px-3 py-1.5 rounded-full border border-green-200 flex items-center gap-1.5">
                            <span>{emoji}</span>{label}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs font-semibold text-primary mb-2">Workshops</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {["Electrical", "Fitter", "Carpentry"].map((w) => (
                          <span key={w} className="bg-orange-50 text-orange-800 text-sm font-medium px-3 py-1.5 rounded-full border border-orange-200 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0 inline-block"></span>{w}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs font-semibold text-primary mb-2">+ Vocational Engineering Stream <span className="font-normal text-muted-foreground">(choose one)</span></p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div className="border border-secondary/40 rounded-lg p-3 bg-secondary/5">
                          <p className="font-bold text-primary text-xs mb-1.5 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-secondary inline-block"></span>Computer (ETIT)
                          </p>
                          <ul className="space-y-1 text-xs text-foreground/80">
                            <li className="flex gap-1.5"><ChevronRight className="w-3 h-3 text-accent shrink-0 mt-0.5" />Basic Computer Hardware &amp; Security Theory</li>
                          </ul>
                        </div>
                        <div className="border border-accent/40 rounded-lg p-3 bg-accent/5">
                          <p className="font-bold text-primary text-xs mb-1.5 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-accent inline-block"></span>Electrical (ETEM)
                          </p>
                          <ul className="space-y-1 text-xs text-foreground/80">
                            <li className="flex gap-1.5"><ChevronRight className="w-3 h-3 text-accent shrink-0 mt-0.5" />Basic Electrical Theory</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Class XII */}
                  <div className="border border-secondary/25 rounded-xl overflow-hidden">
                    <div className="bg-secondary/10 px-4 py-2.5 flex items-center gap-2 border-b border-secondary/25">
                      <span className="bg-secondary text-primary text-xs font-bold px-2.5 py-0.5 rounded-full">Class XII</span>
                      <span className="text-sm font-semibold text-primary">Common Subjects</span>
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-muted-foreground mb-3">General subjects for all students in Year 2</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {["Bengali", "English", "Mathematics"].map((sub) => (
                          <span key={sub} className="bg-amber-50 text-primary text-sm font-medium px-3 py-1.5 rounded-full border border-secondary/30">{sub}</span>
                        ))}
                        {[
                          { label: "Physics Theory", tag: "T" },
                          { label: "Physics Practical", tag: "P" },
                          { label: "Chemistry Theory", tag: "T" },
                          { label: "Chemistry Practical", tag: "P" },
                        ].map(({ label }) => (
                          <span key={label} className="bg-blue-50 text-blue-800 text-sm font-medium px-3 py-1.5 rounded-full border border-blue-200">
                            {label}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs font-semibold text-primary mb-2">Co-curricular &amp; Additional Activities</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {[
                          { label: "Games", emoji: "🏃" },
                          { label: "Spiritual Class", emoji: "🙏" },
                          { label: "Spoken English", emoji: "🗣️" },
                        ].map(({ label, emoji }) => (
                          <span key={label} className="bg-green-50 text-green-800 text-sm font-medium px-3 py-1.5 rounded-full border border-green-200 flex items-center gap-1.5">
                            <span>{emoji}</span>{label}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs font-semibold text-primary mb-2">+ Vocational Engineering Stream <span className="font-normal text-muted-foreground">(continues from Class XI)</span></p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div className="border border-secondary/40 rounded-lg p-3 bg-secondary/5">
                          <p className="font-bold text-primary text-xs mb-1.5 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-secondary inline-block"></span>Computer (ETIT)
                          </p>
                          <ul className="space-y-1 text-xs text-foreground/80">
                            <li className="flex gap-1.5"><ChevronRight className="w-3 h-3 text-accent shrink-0 mt-0.5" />Computer Maintenance &amp; Networking Assistant</li>
                            <li className="flex gap-1.5"><ChevronRight className="w-3 h-3 text-accent shrink-0 mt-0.5" />Python Programming Language</li>
                          </ul>
                        </div>
                        <div className="border border-accent/40 rounded-lg p-3 bg-accent/5">
                          <p className="font-bold text-primary text-xs mb-1.5 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-accent inline-block"></span>Electrical (ETEM)
                          </p>
                          <ul className="space-y-1 text-xs text-foreground/80">
                            <li className="flex gap-1.5"><ChevronRight className="w-3 h-3 text-accent shrink-0 mt-0.5" />Electrical Home Appliances Repair Technician</li>
                            <li className="flex gap-1.5"><ChevronRight className="w-3 h-3 text-accent shrink-0 mt-0.5" />Domestic Wireman &amp; Motor Installation Technician</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* Minimum Qualification */}
            <section>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                <CheckCircle2 className="text-secondary h-8 w-8 shrink-0" />
                Minimum Qualification
              </h2>
              <div className="bg-white border border-border rounded-2xl shadow-lg overflow-hidden">
                <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-3 text-primary">Electrical (ETEM)</h3>
                    <p className="text-muted-foreground text-xs mb-4 leading-relaxed">2-Year Higher Secondary Vocational stream</p>
                    <div className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">Passed Class X with <strong>Science and Mathematics</strong> as subjects.</span>
                    </div>
                  </div>
                  <div className="p-6 bg-[#EEF4FF]">
                    <h3 className="font-bold text-lg mb-3 text-primary">Computer (ETIT)</h3>
                    <p className="text-muted-foreground text-xs mb-4 leading-relaxed">2-Year Higher Secondary Vocational stream</p>
                    <div className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">Passed Class X with <strong>Science and Mathematics</strong> as subjects.</span>
                    </div>
                  </div>
                </div>

                {/* Eligible to apply */}
                <div className="border-t border-border bg-green-50 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 className="w-5 h-5 text-green-700 shrink-0" />
                    <h4 className="font-bold text-green-800">Who is Eligible to Apply</h4>
                  </div>
                  <ul className="space-y-2.5">
                    {[
                      "Passed Class X (Madhyamik or equivalent) with Mathematics and Science as compulsory subjects.",
                      "Medically fit: no colour blindness, skin allergy, cardiovascular issues, physical deformities, or psychiatric ailments.",
                      "Not simultaneously enrolled in any other full-time course.",
                      "Possesses a valid Aadhaar card with a unique mobile number and email address for registration purposes.",
                    ].map((note, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-green-900">
                        <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Other Criteria */}
            <section>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                <Info className="text-secondary h-8 w-8 shrink-0" />
                Other Criteria
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Age Limit", icon: Calendar, text: "Male candidates must be at least 14 years of age as on 1st August 2026. Maximum age preferably not more than 22 years." },
                  { label: "Sex", icon: Users, text: "Only for Boys (Male candidates only)." },
                  { label: "Medical Fitness", icon: CheckCircle2, text: "Candidate should not have colour blindness, skin allergy, chronic ailments, cardiovascular issues, physical deformities, fits, fainting history or psychiatric ailments." },
                  { label: "Language", icon: BookOpen, text: "Should be a little familiar with English." },
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-border rounded-xl p-5 shadow-sm flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-primary text-sm mb-1">{item.label}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800 leading-relaxed">
                  Candidates must maintain <strong>Aadhaar card, unique Mobile number and Email address</strong> for admission purposes. Each student will receive a user account linked to their registered mobile number — keep it unchanged throughout the course. Also ensure Aadhaar details match the Madhyamik certificate.
                </p>
              </div>
            </section>

            {/* Selection Criteria */}
            <section>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                <ClipboardList className="text-secondary h-8 w-8 shrink-0" />
                Selection Criteria
              </h2>
              <div className="bg-white border border-border rounded-2xl p-6 shadow-sm space-y-4">
                {[
                  "Eligible candidates are admitted on the basis of a direct personal interview — no written entrance test is conducted. Have Good Knowleged in Basic Scince and Mathamatics.",
                  "The interview is conducted at the institution premises on the scheduled date. Candidates must bring all original documents.",
                  "Medical fitness is assessed before final seat allotment. Candidates with colour blindness or conditions affecting practical work may not be eligible.",
                  "Priority is given to candidates from schools within West Bengal. The decision of the institution will be final.",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                    <p className="text-sm text-foreground leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* How to Apply */}
            <section>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                <FileText className="text-secondary h-8 w-8 shrink-0" />
                How to Apply
              </h2>

              {/* Offline */}
              <div className="bg-white border border-border rounded-2xl shadow-sm p-6 mb-6">
                <h3 className="font-bold text-lg text-primary mb-3 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">A</span>
                  Apply Offline
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Forms are available at the <strong>office of the institution</strong>.<br />
                  <strong>Timing:</strong> Monday to Friday — 10:00 am to 4:00 pm &amp; Saturdays up to 2:00 pm.
                </p>
              </div>

              {/* Online — 2 step */}
              <div className="bg-white border-2 border-primary rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-primary px-6 py-4">
                  <h3 className="font-bold text-lg text-white flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-secondary text-primary text-xs font-bold flex items-center justify-center">B</span>
                    Apply Online — Two-Step Process
                  </h3>
                  <p className="text-white/70 text-xs mt-1">Please read this entire section carefully before starting the payment process.</p>
                </div>

                <div className="p-6 space-y-6">
                  {/* Prep */}
                  <div className="bg-[#EEF4FF] rounded-xl p-5 border border-primary/10">
                    <p className="font-bold text-primary text-sm mb-2">Before you begin, keep ready:</p>
                    <ul className="space-y-1.5 text-sm text-foreground mb-4">
                      {[
                        "Your Own Mobile No.",
                        "Your Own Email ID",
                        "Class 10th Registration No.",
                        "Mark Sheet",
                        "Aadhaar Card",
                        "Candidate's Photo (Passport Size)",
                        "Madhyamik Admit Card",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <ChevronRight className="w-3.5 h-3.5 text-accent shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Candidate must maintain unique Mobile number and Email address — these will be used during payment, form fill-up, and all future communications. Ensure Aadhaar details match the Madhyamik certificate.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="border-2 border-primary rounded-xl overflow-hidden">
                    <div className="bg-primary px-5 py-3 flex items-center gap-3">
                      <div>
                        <p className="text-white font-bold text-[15px]">Documentation Required</p>
                        <p className="text-white/70 text-xs">Complete the online admission form</p>
                      </div>
                      <FileText className="w-6 h-6 text-white/60 ml-auto" />
                    </div>
                    <div className="p-5 space-y-3">
                      <p className="text-sm text-foreground font-medium mb-2">Keep the following ready Soft Copy before filling the form:</p>
                      <ul className="space-y-1.5 text-sm text-foreground mb-4">
                        {[
                          "Passport-size photograph (scan or mobile photo, max 1 MB)",
                          "Class 10th Admit Card (scan or mobile photo, max 1 MB)",
                          "Aadhaar Card (scan or mobile photo, max 1 MB)",
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <ChevronRight className="w-3.5 h-3.5 text-accent shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Fill up the form, upload documents, <strong>check the form again</strong>, and then submit. You will receive an acknowledgement email with a <strong>Registration Number</strong> after submission.
                      </p>
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-800 space-y-1.5">
                        <p><strong>Note:</strong> You can submit only ONE application form.</p>
                        <p>Documents can be self-attested. Originals need to be shown only during document verification at admission.</p>
                        <p><strong>Application form by hand is not available at present</strong> nor can it be submitted by hand or by post. Please follow the website for any updates on this.</p>
                      </div>
                      <a href={applyUrl} target="_blank" rel="noopener noreferrer"
                        className="mt-2 w-full flex items-center justify-center gap-2 bg-primary text-white font-bold px-5 py-3.5 rounded-xl hover:bg-primary/90 transition-colors text-base shadow-md">
                        <PenLine className="w-5 h-5" /> Fill the Admission Form
                      </a>
                    </div>
                  </div>

                  {/* Help */}
                  <div className="flex items-center gap-3 bg-[#EEF4FF] rounded-xl p-4 border border-primary/10">
                    <Phone className="w-5 h-5 text-primary shrink-0" />
                    <p className="text-sm text-foreground">
                      <strong>Need help?</strong> Call <a href="tel:03326542080" className="text-accent font-bold hover:underline">033-2654-2080</a> if you face any trouble during form submission.
                    </p>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* ── Sidebar ── */}
          <div className="space-y-8">

            {/* Important Dates */}
            <Card className="border-none shadow-xl bg-white overflow-hidden">
              <div className="bg-primary p-6">
                <h3 className="text-2xl font-bold text-white mb-1">Important Dates</h3>
                <p className="text-secondary font-bold tracking-wide uppercase text-xs">Session 2026–27</p>
              </div>
              <CardContent className="p-0">
                <ul className="divide-y divide-border">
                  <li className="p-5">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Application Opens</p>
                    <p className="text-lg font-bold text-foreground">April 17, 2026</p>
                  </li>
                  <li className="p-5">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Last Date</p>
                    <p className="text-lg font-bold text-accent">To be announced</p>
                  </li>
                  <li className="p-5">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Interview &amp; Selection</p>
                    <p className="text-lg font-bold text-foreground">To be announced</p>
                  </li>
                  <li className="p-5 bg-[#EEF4FF]">
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Session Begins</p>
                    <p className="text-lg font-bold text-primary">July 2026</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Apply Now CTA */}
            <div className="bg-secondary rounded-2xl p-7 text-center shadow-xl">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">If  You Ready To Apply?</h3>
              <a href={applyUrl} target="_blank" rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-primary text-white font-bold py-3.5 rounded-xl hover:bg-primary/90 transition-colors text-sm">
                <PenLine className="w-4 h-4" /> Fill the Admission Form
              </a>
            </div>

            {/* QR Code */}
            <div className="bg-white border-2 border-primary/20 rounded-2xl shadow-sm p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Smartphone className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-primary text-base">Apply via QR Code</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                Scan with your phone camera to open the admission application form directly.
              </p>
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white border-2 border-primary/20 rounded-xl inline-block shadow-sm">
                  <img
                    src={hsAdmissionQR}
                    alt="QR Code — H.S. Vocational Admission Form"
                    width={160}
                    height={160}
                    className="block rounded-lg"
                  />
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Scan to open · <a href={applyUrl} target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">or tap here</a>
              </p>
            </div>

            {/* Required Documents */}
            <div className="bg-white border border-border rounded-2xl shadow-sm p-6">
              <h3 className="font-bold text-primary text-base mb-4 flex items-center gap-2">
                <ClipboardList className="w-5 h-5 text-secondary" />
                Documents Required
              </h3>
              <ul className="space-y-2">
                {[
                  "Class X Admit Card",
                  "Class X Marksheet",
                  "Class X Certificate",
                  "Passport-size Photograph",
                  "Aadhaar Card",
                  "Payment Challan / Screenshot",
                ].map((doc, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-primary rounded-2xl p-6 text-white">
              <h3 className="font-bold text-base mb-3 flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary" />
                Admission Enquiry
              </h3>
              <p className="text-white/70 text-sm mb-3">For H.S. Vocational admission queries, contact the office directly.</p>
              <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">Mobile No.</p>
              <a href="tel:03326541052" className="block text-center bg-secondary text-primary font-bold py-2.5 rounded-xl hover:bg-secondary/90 transition-colors text-sm">
                033-2654-1052
              </a>
              <a href="tel:03326542080" className="block text-center mt-2 border border-white/30 text-white font-semibold py-2.5 rounded-xl hover:bg-white/10 transition-colors text-sm">
                033-2654-2080
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
