import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Badge } from "../components/ui/Badge";
import { Bell, Pin, Calendar, ExternalLink, Search, ChevronRight, FileDown } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db, handleFirestoreError, OperationType } from "../lib/firebase";

type Notice = {
  id: string | number;
  title: string;
  date: string;
  category: string;
  pinned?: boolean;
  link?: string;
  pdfUrl?: string;
  description?: string;
  isNew?: boolean;
};

const staticNotices: Notice[] = [
  {
    id: 1,
    title: "ITI Admission Notice 2026",
    date: "2026-04-17",
    category: "Admission",
    pinned: true,
    isNew: true,
    link: "https://rkmshilpavidyalaya.ac.in/iti-admission-notice-2026/",
    pdfUrl: "https://rkmshilpavidyalaya.ac.in/wp-content/uploads/2026/04/ITI-Admission-Notice-2026.pdf",
    description: "Applications are now open for ITI (NCVT) trades for the session 2026–2028. Eligible male candidates who have passed Class X (Madhyamik or equivalent) may apply online. Written test and interview will be conducted for final selection.",
  },
  {
    id: 2,
    title: "H.S. (Vocational) Admission 2026",
    date: "2026-03-05",
    category: "Admission",
    pinned: true,
    isNew: true,
    link: "https://rkmshilpavidyalaya.ac.in/h-s-vocational-admission-2026/",
    pdfUrl: "https://rkmshilpavidyalaya.ac.in/wp-content/uploads/2026/03/HS-Vocational-Admission-2026.pdf",
    description: "Admission notice for Higher Secondary (Vocational) streams — Electrical Technology with IT Application (ETIT) and Computer Application (CMT). Open to Class X pass students from WBCHSE-affiliated schools.",
  }
];

const categories = ["All", "Admission", "Exam", "Academic", "Placement", "General", "Holiday"];

const categoryColors: Record<string, string> = {
  Admission: "bg-blue-100 text-blue-800 border-blue-200",
  Exam:      "bg-red-100 text-red-800 border-red-200",
  Academic:  "bg-green-100 text-green-800 border-green-200",
  Placement: "bg-purple-100 text-purple-800 border-purple-200",
  General:   "bg-amber-100 text-amber-800 border-amber-200",
  Holiday:   "bg-pink-100 text-pink-800 border-pink-200",
};

export default function Notice() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<string | number | null>(null);
  const [dynamicNotices, setDynamicNotices] = useState<Notice[]>([]);

  useEffect(() => {
    const fetchNotices = async () => {
      const path = "notices";
      try {
        const q = query(collection(db, path), orderBy("date", "desc"));
        const snapshot = await getDocs(q);
        const fetched = snapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title,
            date: data.date,
            category: data.type ? (data.type.charAt(0).toUpperCase() + data.type.slice(1)) : 'General',
            description: data.content,
            isNew: data.date ? ((new Date().getTime() - new Date(data.date).getTime()) < 7 * 24 * 60 * 60 * 1000) : false
          };
        });
        setDynamicNotices(fetched as Notice[]);
      } catch (error) {
        handleFirestoreError(error, OperationType.GET, path);
      }
    };
    fetchNotices();
  }, []);

  const allNotices = [...dynamicNotices, ...staticNotices];

  const filtered = allNotices.filter((n) => {
    const matchCat = activeCategory === "All" || n.category === activeCategory;
    const matchSearch = n.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const pinned = filtered.filter((n) => n.pinned);
  const rest = filtered.filter((n) => !n.pinned);

  return (
    <div className="bg-[#F7F6F0] min-h-screen pb-24">
      <PageHero
        title="Notice Board"
        subtitle="Official announcements, admission notices, examination updates, and circulars from the institute."
        breadcrumb="Notice Board"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">

        {/* Board Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
            <Bell className="w-5 h-5 text-secondary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Official Notice Board
            </h2>
            <p className="text-sm text-muted-foreground">Ramakrishna Mission Shilpavidyalaya, Belur Math</p>
          </div>
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search notices…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow"
                    : "bg-white border border-border text-primary hover:border-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Notice Board Frame */}
        <div className="bg-white rounded-2xl shadow-xl border border-border overflow-hidden">

          {/* Board title bar */}
          <div className="bg-primary px-6 py-4">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm">
              Notices &amp; Circulars
            </span>
          </div>

          {/* Pinned Notices */}
          {pinned.length > 0 && (
            <div className="divide-y divide-border border-b-2 border-accent/30 bg-amber-50/60">
              {pinned.map((notice) => (
                <NoticeRow
                  key={notice.id}
                  notice={notice}
                  expanded={expanded}
                  setExpanded={setExpanded}
                />
              ))}
            </div>
          )}

          {/* Regular Notices */}
          <AnimatePresence>
            <div className="divide-y divide-border">
              {rest.length > 0 ? rest.map((notice) => (
                <NoticeRow
                  key={notice.id}
                  notice={notice}
                  expanded={expanded}
                  setExpanded={setExpanded}
                />
              )) : (
                <p className="text-center text-muted-foreground py-12 text-sm">No notices found.</p>
              )}
            </div>
          </AnimatePresence>
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          For the most up-to-date information, visit{" "}
          <a
            href="https://rkmshilpavidyalaya.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline font-medium"
          >
            rkmshilpavidyalaya.ac.in
          </a>{" "}
          or contact the institute office.
        </p>
      </div>
    </div>
  );
}

interface NoticeRowProps {
  notice: Notice;
  expanded: number | null;
  setExpanded: Dispatch<SetStateAction<number | null>>;
}

const NoticeRow: React.FC<NoticeRowProps> = ({
  notice,
  expanded,
  setExpanded,
}) => {
  const isOpen = expanded === notice.id;

  return (
    <motion.div
      layout
      className={`px-6 py-5 hover:bg-[#EEF4FF] transition-colors cursor-pointer ${
        notice.pinned ? "bg-amber-50/40" : "bg-white"
      }`}
      onClick={() => setExpanded(isOpen ? null : notice.id)}
    >
      <div className="flex items-start gap-4">
        {/* Pin indicator */}
        <div className="mt-1 shrink-0">
          {notice.pinned ? (
            <Pin className="w-4 h-4 text-accent fill-accent" />
          ) : (
            <ChevronRight className={`w-4 h-4 text-primary/40 transition-transform ${isOpen ? "rotate-90" : ""}`} />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span
              className={`inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${categoryColors[notice.category]}`}
            >
              {notice.category}
            </span>
            {notice.isNew && (
              <span className="inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-accent text-white animate-pulse">
                New
              </span>
            )}
            {notice.pinned && (
              <span className="text-xs font-semibold text-accent/80 uppercase tracking-wider">Pinned</span>
            )}
          </div>

          <p className="font-bold text-foreground text-base leading-snug mb-2 hover:text-primary transition-colors">
            {notice.title}
          </p>

          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-secondary" />
              {notice.date}
            </span>
          </div>

          {/* Expandable description */}
          <AnimatePresence>
            {isOpen && notice.description && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="mt-4">
                  <p className="text-sm text-foreground/80 leading-relaxed border-l-2 border-secondary pl-4">
                    {notice.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 mt-4">
                  {notice.link && (
                    <a
                      href={notice.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-accent hover:underline"
                    >
                      Read full notice <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {notice.pdfUrl && (
                    <a
                      href={notice.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 bg-primary text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <FileDown className="w-3.5 h-3.5" /> Download PDF
                    </a>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
