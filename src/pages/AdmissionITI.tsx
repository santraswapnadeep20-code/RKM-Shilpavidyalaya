import { Card, CardContent } from "../components/ui/Card";
import {
  FileText,
  Calendar,
  CheckCircle2,
  AlertCircle,
  ClipboardList,
  Users,
  CreditCard,
  ExternalLink,
  ChevronRight,
  BookOpen,
  Info,
  Phone,
  PenLine,
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Link } from "react-router-dom";

export default function AdmissionITI() {
  const prospectusUrl =
    "https://rkmshilpavidyalaya.ac.in/wp-content/uploads/2026/04/Online_ITI-PROSPECTUS-2026.pdf";
  const paymentUrl = "https://rzp.io/rzp/SOP9ukeh";
  const applyUrl = "https://forms.gle/Vkm4imQNhB7RJhfn6";

  return (
    <div className="bg-background pb-24">
      <PageHero
        title="Admission Process"
        subtitle="Step-by-step guide to joining ITI trades for the 2026 academic session. Please read the full procedure carefully before applying."
        breadcrumb="Admission"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Tab Switcher */}
        <div className="flex gap-3 justify-center mb-12">
          <span className="px-7 py-2.5 rounded-full text-sm font-semibold bg-primary text-white border-2 border-primary cursor-default shadow-md shadow-primary/20">
            ITI Admission
          </span>
          <Link
            to="/admission/hs-vocational"
            className="px-7 py-2.5 rounded-full text-sm font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
          >
            H.S. Vocational
          </Link>
        </div>

        {/* Prospectus Banner */}
        <div className="bg-primary text-white rounded-2xl p-6 md:p-8 mb-14 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-14 h-14 rounded-xl bg-secondary/20 border border-secondary/30 flex items-center justify-center shrink-0">
              <BookOpen className="w-7 h-7 text-secondary" />
            </div>
            <div>
              <p className="text-secondary font-bold uppercase tracking-widest text-[10px] mb-1">
                First Step
              </p>
              <h3 className="text-xl font-bold font-serif">
                Read the Prospectus Carefully
              </h3>
              <p className="text-white/70 text-sm mt-0.5">
                Download and go through the full prospectus before proceeding
                with your application.
              </p>
            </div>
          </div>
          <a
            href={prospectusUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-secondary text-primary font-bold px-6 py-3 rounded-xl hover:bg-secondary/90 transition-all hover:scale-105 active:scale-95 text-sm shadow-lg shadow-black/20"
          >
            Download Prospectus 2026 <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Eligibility / Minimum Qualification */}
            <section>
              <h2
                className="text-3xl font-bold mb-8 flex items-center gap-3 text-primary font-serif"
              >
                <CheckCircle2 className="text-secondary h-8 w-8 shrink-0" />
                Minimum Qualification
              </h2>
              <div className="bg-white border border-border rounded-2xl shadow-lg overflow-hidden">
                <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-3 text-primary font-serif">
                      2-Year Trades
                    </h3>
                    <p className="text-muted-foreground text-xs mb-4 leading-relaxed">
                      Electrician, Fitter, Turner, Electronic Mechanic,
                      Draughtsman Civil (with AutoCAD), Draughtsman Mechanical
                      (with AutoCAD)
                    </p>
                    <div className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">
                        Passed Class X exam with{" "}
                        <strong>Science and Mathematics</strong> as subjects.
                      </span>
                    </div>
                  </div>
                  <div className="p-6 bg-[#EEF4FF]">
                    <h3 className="font-bold text-lg mb-3 text-primary font-serif">
                      1-Year Trade (Welder)
                    </h3>
                    <p className="text-muted-foreground text-xs mb-4 leading-relaxed">
                      Welder trade only
                    </p>
                    <div className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">
                        Passed Class VIII <strong>or</strong> Class X with{" "}
                        <strong>Science and Mathematics</strong> as subjects.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Eligible to apply */}
                <div className="border-t border-border bg-green-50 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 className="w-5 h-5 text-green-700 shrink-0" />
                    <h4 className="font-bold text-green-800">
                      Who is Eligible to Apply
                    </h4>
                  </div>
                  <ul className="space-y-2.5">
                    {[
                      "Passed Class 10th (Madhyamik or equivalent) with Mathematics and Science as subjects — for all 2-year trades.",
                      "Passed Class VIII or Class X with Mathematics and Science — for the 1-year Welder trade.",
                      "Male candidates aged at least 14 years as on 1st August 2026 (preferably not more than 22 years).",
                      "Medically fit: no colour blindness, skin allergy, cardiovascular issues, physical deformities, or psychiatric ailments.",
                      "Not simultaneously enrolled in any other full-time course (candidates completing Class XI should apply after completing H.S.).",
                      "Possesses a valid Aadhaar card with a unique mobile number and email address for registration purposes.",
                    ].map((note, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-green-900"
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Additional Criteria */}
            <section>
              <h2
                className="text-3xl font-bold mb-8 flex items-center gap-3 text-primary font-serif"
              >
                <Info className="text-secondary h-8 w-8 shrink-0" />
                Other Criteria
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    label: "Age Limit",
                    icon: Calendar,
                    text: "Male candidates must be at least 14 years of age as on 1st August 2026. Maximum age preferably not more than 22 years.",
                  },
                  {
                    label: "Sex",
                    icon: Users,
                    text: "Only for Boys (Male candidates only).",
                  },
                  {
                    label: "Medical Fitness",
                    icon: CheckCircle2,
                    text: "Candidate should not have colour blindness, skin allergy, chronic ailments, cardiovascular issues, physical deformities, fits, fainting history or psychiatric ailments.",
                  },
                  {
                    label: "Language",
                    icon: BookOpen,
                    text: "Should be a little familiar with English.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white border border-border rounded-xl p-5 shadow-sm flex items-start gap-4"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-primary text-sm mb-1">
                        {item.label}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Aadhar note */}
              <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-start gap-3 shadow-sm shadow-amber-900/5">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800 leading-relaxed">
                  Candidates must maintain{" "}
                  <strong>
                    Aadhar card, unique Mobile number and Email address
                  </strong>{" "}
                  for admission purposes. Each trainee will receive a user
                  account linked to their registered mobile number — keep it
                  unchanged throughout the course. Also ensure Aadhar details
                  match the Madhyamik certificate.
                </p>
              </div>
            </section>

            {/* Reservation */}
            <section>
              <h2
                className="text-3xl font-bold mb-8 flex items-center gap-3 text-primary font-serif"
              >
                <Users className="text-secondary h-8 w-8 shrink-0" />
                Reservation of Seats
              </h2>
              <div className="bg-white border border-border rounded-2xl shadow-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="text-left p-4 font-bold uppercase tracking-wider text-xs">Category</th>
                      <th className="text-left p-4 font-bold uppercase tracking-wider text-xs">Seats</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      [
                        "ITI Electrician trade",
                        "2 seats for H.S. Vocational pass students of Shilpavidyalaya",
                      ],
                      [
                        "ITI trades except Electrician",
                        "1 seat per trade for H.S. Vocational pass students of Shilpavidyalaya",
                      ],
                      [
                        "SC / ST / OBC (all ITI trades except Electrician)",
                        "SC – 3, ST – 1, OBC – 1",
                      ],
                      [
                        "Physically Challenged",
                        "1 seat per trade for DMM, DMC and related trades only",
                      ],
                      ["Industry Sponsored", "1 seat in any suitable trade"],
                      [
                        "Management Discretion",
                        "2 seats in any suitable trade",
                      ],
                    ].map(([cat, seats], i) => (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                      >
                        <td className="p-4 text-foreground font-medium">
                          {cat}
                        </td>
                        <td className="p-4 text-muted-foreground">{seats}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="bg-amber-50 border-t border-amber-200 p-4 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-800">
                    Candidates not encouraged to apply: Class X pass from a
                    school located outside West Bengal.
                  </p>
                </div>
              </div>
            </section>

            {/* Selection Criteria */}
            <section>
              <h2
                className="text-3xl font-bold mb-8 flex items-center gap-3 text-primary font-serif"
              >
                <ClipboardList className="text-secondary h-8 w-8 shrink-0" />
                Selection Criteria
              </h2>
              <div className="bg-white border border-border rounded-2xl p-8 shadow-lg space-y-6">
                {[
                  "Eligible male candidates will be shortlisted on the basis of combined merit of a written admission test and Class 10th marks in Mathematics and Physical Science (Physics and Chemistry).",
                  "Written Test will be of 50% marks based on short questions from Mathematics and Physical Science.",
                  "A personal interview and medical fitness report for undergoing the course will also be considered before allotment of seat.",
                  "The decision of the institute will be final and no objection can be raised on this issue by the applicant.",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-foreground leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* How to Apply */}
            <section>
              <h2
                className="text-3xl font-bold mb-8 flex items-center gap-3 text-primary font-serif"
              >
                <FileText className="text-secondary h-8 w-8 shrink-0" />
                How to Apply
              </h2>

              {/* Offline */}
              <div className="bg-white border border-border rounded-2xl shadow-md p-6 mb-8 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg text-primary mb-3 flex items-center gap-2 font-serif">
                  <span className="w-8 h-8 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                    A
                  </span>
                  Apply Offline
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Forms are available at the <strong>office of the ITI</strong>.
                  <br />
                  <span className="inline-block mt-2 font-semibold text-primary">Timing:</span> 10:30 am to 4:00 pm — Monday to
                  Friday &amp; up to 2:00 pm on Saturday.
                </p>
              </div>

              {/* Online — 2 step */}
              <div className="bg-white border-2 border-primary rounded-2xl shadow-xl overflow-hidden focus-within:ring-2 ring-accent">
                <div className="bg-primary px-8 py-6">
                  <h3 className="font-bold text-xl text-white flex items-center gap-3 font-serif">
                    <span className="w-8 h-8 rounded-full bg-secondary text-primary text-sm font-bold flex items-center justify-center">
                      B
                    </span>
                    Apply Online — Two-Step Process
                  </h3>
                  <p className="text-white/70 text-sm mt-2">
                    Please read this entire section carefully before starting
                    the payment process.
                  </p>
                </div>

                <div className="p-8 space-y-8">
                  {/* Prep */}
                  <div className="bg-[#EEF4FF] rounded-xl p-6 border border-primary/10 shadow-inner">
                    <p className="font-bold text-primary text-lg mb-4 flex items-center gap-2">
                      <Info className="w-5 h-5 text-accent" />
                      Before you begin, keep ready:
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-foreground mb-4">
                      {[
                        "Your own active Email ID",
                        "Unique mobile number linked to Aadhaar",
                        "Class 10th Registration No.",
                        "Class 10th Mark Sheet",
                        "Candidate's Photo (Passport Size)",
                        "Madhyamik Admit Card",
                        "Aadhaar number",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="text-[10px] text-muted-foreground leading-relaxed border-t border-primary/10 pt-4 uppercase tracking-widest font-semibold">
                      Candidate must maintain unique Mobile number and Email
                      address. Ensure Aadhaar details match Madhyamik certificate.
                    </p>
                  </div>

                  {/* Step 1 */}
                  <div className="border border-border rounded-2xl overflow-hidden shadow-md group">
                    <div className="bg-accent px-6 py-4 flex items-center gap-4 transition-colors group-hover:bg-accent/90">
                      <span className="w-10 h-10 rounded-full bg-white text-accent font-bold text-lg flex items-center justify-center shrink-0">
                        1
                      </span>
                      <div>
                        <p className="text-white font-bold">
                          STEP 1 — Online Payment
                        </p>
                        <p className="text-white/80 text-xs mt-0.5">
                          Pay application fee of ₹200/- only via Razorpay
                        </p>
                      </div>
                      <CreditCard className="w-7 h-7 text-white/30 ml-auto" />
                    </div>
                    <div className="p-6 space-y-4">
                      <p className="text-sm text-foreground leading-relaxed italic">
                        Go to the Razorpay payment link below and pay the{" "}
                        <strong>Application Fee of ₹200/-</strong>.
                      </p>
                      <a
                        href={paymentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-accent/90 transition-all hover:scale-[1.02] active:scale-95 text-base shadow-lg shadow-black/10"
                      >
                        Pay ₹200 via Razorpay{" "}
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3 mt-2">
                        <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                        <p className="text-sm text-amber-800 leading-relaxed">
                          After successful payment,{" "}
                          <strong>save your Payment ID</strong> (e.g.
                          pay_NpLAaODYhrUHmY) and take a screenshot of the
                          payment confirmation (Challan).
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="border border-border rounded-2xl overflow-hidden shadow-md group">
                    <div className="bg-primary px-6 py-4 flex items-center gap-4 transition-colors group-hover:bg-primary/90">
                      <span className="w-10 h-10 rounded-full bg-white text-primary font-bold text-lg flex items-center justify-center shrink-0">
                        2
                      </span>
                      <div>
                        <p className="text-white font-bold">
                          STEP 2 — Fill the Application Form
                        </p>
                        <p className="text-white/80 text-xs mt-0.5">
                          Only after completing Step 1 payment
                        </p>
                      </div>
                      <FileText className="w-7 h-7 text-white/30 ml-auto" />
                    </div>
                    <div className="p-6 space-y-6">
                      <p className="text-sm text-foreground font-bold border-b border-border pb-2">
                        Keep the following ready before filling the form:
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-4 text-sm text-foreground">
                        {[
                          "Payment ID number",
                          "Screenshot of payment",
                          "Passport-size photo",
                          "Class 10th Admit Card",
                          "Class 10th Marksheet",
                          "Class 10th Certificate",
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                            <ChevronRight className="w-4 h-4 text-accent shrink-0" />
                            <span className="font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                        <p className="text-sm text-primary leading-relaxed">
                          Fill up the form, upload documents,{" "}
                          <strong>check the form again</strong>, and then submit.
                          You will receive an acknowledgement email with a{" "}
                          <strong>Registration Number</strong> after submission.
                        </p>
                      </div>
                      
                      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-amber-900 space-y-3 leading-relaxed">
                        <p>
                          <strong className="text-amber-950">Note:</strong> You can submit only ONE
                          application form. Documents can be self-attested.
                        </p>
                        <p>
                          <strong>
                            Application form by hand is not available
                          </strong>{" "}
                          nor can it be submitted by post.
                        </p>
                        <p className="text-xs uppercase tracking-wider font-bold">
                          Welder candidates with Class VIII must apply by phone/email.
                        </p>
                      </div>

                      <a
                        href={applyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-3 bg-primary text-white font-bold px-8 py-5 rounded-xl hover:bg-primary/95 transition-all hover:scale-[1.01] active:scale-95 text-lg shadow-xl shadow-primary/20"
                      >
                        <PenLine className="w-6 h-6" /> Fill the Admission Form
                      </a>
                    </div>
                  </div>

                  {/* Help */}
                  <div className="flex items-center gap-4 bg-[#EEF4FF] rounded-2xl p-6 border border-primary/10 shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground">
                        <strong className="text-primary">Need help?</strong> Call{" "}
                        <a
                          href="tel:03326542080"
                          className="text-accent font-bold hover:underline"
                        >
                          033-2654-2080
                        </a>{" "}
                        if you face any trouble during form submission.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Important Dates */}
            <Card className="border-none shadow-2xl bg-white overflow-hidden">
              <div className="bg-primary p-8">
                <h3 className="text-3xl font-bold text-white mb-1 font-serif">
                  Important Dates
                </h3>
                <p className="text-secondary font-bold tracking-widest uppercase text-[10px]">
                  Session 2026
                </p>
              </div>
              <CardContent className="p-0">
                <ul className="divide-y divide-border">
                  <li className="p-6 hover:bg-slate-50 transition-colors">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-2">
                      Application Opens
                    </p>
                    <p className="text-xl font-bold text-primary font-serif">
                      April 17, 2026
                    </p>
                  </li>
                  <li className="p-6 hover:bg-slate-50 transition-colors">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-2">
                      Last Date
                    </p>
                    <p className="text-xl font-bold text-accent font-serif italic">
                      To be announced
                    </p>
                  </li>
                  <li className="p-6 hover:bg-slate-50 transition-colors">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-2">
                      Written Test &amp; Interview
                    </p>
                    <p className="text-xl font-bold text-primary font-serif">
                      To be announced
                    </p>
                  </li>
                  <li className="p-8 bg-[#EEF4FF] border-t-2 border-primary/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      <p className="text-[10px] font-bold text-primary uppercase tracking-[0.25em]">
                        Session Begins
                      </p>
                    </div>
                    <p className="text-2xl font-bold text-primary font-serif">
                      August 2026
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Apply Now CTA */}
            <div className="bg-gradient-to-br from-secondary to-orange-400 rounded-2xl p-8 text-center shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm shadow-inner">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3 font-serif">
                Ready to Apply?
              </h3>
              <p className="text-primary/80 text-sm mb-8 leading-relaxed">
                Complete Step 1 (payment) first, then proceed to the online
                admission form.
              </p>
              <a
                href={applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 text-base shadow-lg shadow-black/20"
              >
                <PenLine className="w-5 h-5" /> Fill Form Now
              </a>
              <a
                href={paymentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-4 flex items-center justify-center gap-3 bg-white/30 border-2 border-primary/20 text-primary font-bold py-4 rounded-xl hover:bg-white/40 transition-all text-sm backdrop-blur-sm"
              >
                Pay App Fee <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Required Documents */}
            <div className="bg-white border border-border rounded-2xl shadow-lg p-8">
              <h3 className="font-bold text-primary text-lg mb-6 flex items-center gap-3 font-serif">
                <ClipboardList className="w-6 h-6 text-secondary" />
                Docs Checklist
              </h3>
              <ul className="space-y-4">
                {[
                  "Class 10th Admit Card",
                  "Class 10th Marksheet",
                  "Class 10th Certificate",
                  "Passport photograph",
                  "Aadhaar Card",
                  "Payment Challan",
                ].map((doc, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 text-sm text-foreground/80 group"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                    <span className="font-medium">{doc}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-[10px] text-muted-foreground leading-relaxed uppercase tracking-widest font-bold">
                  Self-attested docs accepted. Max size: 300 KB each.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-[#031c49]/5 border border-[#031c49]/10 rounded-2xl p-8 relative overflow-hidden">
               <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#031c49]/5 rounded-full blur-2xl" />
              <h3 className="font-bold text-[#031c49] text-xs mb-6 uppercase tracking-[0.2em]">
                Admission Desk
              </h3>
              <div className="space-y-4 text-sm text-foreground relative z-10">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-[#031c49]/40 uppercase mb-1">Phone</span>
                  <a
                    href="tel:03326542080"
                    className="text-accent font-bold hover:underline text-base"
                  >
                    033-2654-2080
                  </a>
                </div>
                <div className="flex flex-col">
                   <span className="text-[10px] font-bold text-[#031c49]/40 uppercase mb-1">Email</span>
                  <a
                    href="mailto:office@rkmshilpavidyalaya.ac.in"
                    className="text-primary font-medium hover:underline break-all"
                  >
                    office@rkmshilpavidyalaya.ac.in
                  </a>
                </div>
                <div className="flex flex-col">
                   <span className="text-[10px] font-bold text-[#031c49]/40 uppercase mb-1">Hours</span>
                   <p className="font-medium text-slate-600">
                    Mon–Fri: 10:30 am – 4:00 pm<br />
                    Sat: up to 2:00 pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
