"use client"

import React, { useState } from "react"
import { motion } from "motion/react"
import { Phone, Mail, MapPin, ChevronDown, Menu, X } from "lucide-react"
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom"
import About from "./pages/About"
import Courses from "./pages/Courses"
import AdmissionITI from "./pages/AdmissionITI"
import AdmissionHSVocational from "./pages/AdmissionHSVocational"
import Placement from "./pages/Placement"
import Notice from "./pages/Notice"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import TradeDetail from "./pages/TradeDetail"
import Admin from "./pages/Admin"
import rkmLogo from "./assets/images/regenerated_image_1778384920650.png"

function MainLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { 
      name: 'Admission', 
      path: '#', 
      hasDropdown: true,
      subItems: [
        { name: 'ITI Admission', path: '/admission/iti' },
        { name: 'H.S. Vocational', path: '/admission/hs-vocational' }
      ]
    },
    { name: 'Placement', path: '/placement' },
    { name: 'Notices', path: '/notices' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div id="top-bar" className="bg-rkm-dark text-white py-2 px-4 md:px-8 text-[10px] md:text-xs flex flex-wrap justify-between items-center border-b border-white/10">
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-1.5">
            <Phone size={12} className="text-rkm-orange" />
            <span>+91 33 2654 1234</span>
          </div>
          <div className="flex items-center gap-1.5 border-l border-white/20 pl-4 hidden sm:flex">
            <Mail size={12} className="text-rkm-orange" />
            <span>office@rkmshilpavidyalaya.ac.in</span>
          </div>
        </div>
        <div className="flex gap-4 items-center uppercase tracking-wider font-medium opacity-80">
          <div className="flex items-center gap-1.5">
            <MapPin size={12} className="text-rkm-orange" />
            <span>Belur Math, Howrah - 711 202</span>
          </div>
          <span className="hidden lg:inline italic border-l border-white/20 pl-4">"Arise, Awake."</span>
        </div>
      </div>

      {/* Main Header */}
      <header id="main-header" className="bg-rkm-blue text-white py-4 px-4 md:px-8 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-14 h-14 md:w-20 md:h-20 relative transition-transform duration-300 group-hover:scale-105">
               <img 
                src={rkmLogo} 
                alt="Ramakrishna Mission Logo" 
                className="w-full h-full object-contain filter drop-shadow-lg saturate-[1.25] rounded-none border-none"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h1 className="font-serif text-[27px] leading-[21.5px] font-bold tracking-tight uppercase">
                Ramakrishna&nbsp;&nbsp;Mission
              </h1>
              <p className="text-[#ffbb6d] text-[30px] leading-[49px] font-bold tracking-wide italic -mt-1 no-underline text-left">Shilpavidyalaya</p>
              <p className="text-[8px] md:text-[10px] opacity-70 uppercase tracking-[0.2em] font-semibold">EST. 1921 • BELUR MATH</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div className="flex items-center gap-1 text-sm font-medium hover:text-[#ffbb6d] transition-colors cursor-pointer py-2 text-white">
                    {item.name} <ChevronDown size={14} />
                  </div>
                ) : (
                  <Link 
                    to={item.path}
                    className={`text-sm font-medium hover:text-[#ffbb6d] transition-colors relative py-2 ${location.pathname === item.path ? 'text-[#ffbb6d]' : 'text-white'}`}
                  >
                    {item.name}
                    {location.pathname === item.path && <motion.div layoutId="underline" className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#ffbb6d]" />}
                  </Link>
                )}

                {item.hasDropdown && item.subItems && (
                  <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 py-2 border-t-2 border-[#ffbb6d]">
                    {item.subItems.map(sub => (
                      <Link 
                        key={sub.name} 
                        to={sub.path} 
                        className="block px-4 py-2 text-xs font-bold text-rkm-blue hover:bg-rkm-blue hover:text-white transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <motion.nav 
        initial={false}
        animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="lg:hidden bg-rkm-dark overflow-hidden text-white sticky top-[104px] z-40 shadow-xl"
      >
        <div className="px-4 py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <div key={item.name} className="flex flex-col">
              <Link 
                to={item.path} 
                onClick={() => !item.hasDropdown && setIsMenuOpen(false)}
                className={`text-lg font-medium border-b border-white/5 pb-2 flex justify-between items-center ${location.pathname === item.path ? 'text-[#ffbb6d]' : 'text-white'}`}
              >
                {item.name}
                {item.hasDropdown && <ChevronDown size={18} className="opacity-50" />}
              </Link>
              {item.hasDropdown && item.subItems && (
                <div className="flex flex-col pl-4 mt-2 gap-3 pb-2 border-b border-white/5">
                  {item.subItems.map(sub => (
                    <Link 
                      key={sub.name} 
                      to={sub.path} 
                      onClick={() => setIsMenuOpen(false)}
                      className="text-sm font-medium text-white/70 hover:text-rkm-gold"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.nav>

      {children}

      {/* Footer */}
      <footer className="bg-rkm-dark text-white py-12 px-4 md:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-3 group px-1">
              <img 
                src={rkmLogo} 
                alt="RKM Logo" 
                className="w-14 h-14 md:w-16 md:h-16 object-contain filter drop-shadow-md saturate-[1.25] brightness-110"
                referrerPolicy="no-referrer"
              />
              <span className="font-serif text-xl font-bold group-hover:text-rkm-gold transition-colors">RKM Shilpavidyalaya</span>
            </div>
            <p className="text-sm text-white/60 max-w-sm leading-relaxed">
              A unit of Ramakrishna Mission Saradapitha, dedicated to the service of God in man 
              through technical and vocational education.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-rkm-orange uppercase text-xs tracking-widest">Quick Links</h4>
            <ul className="text-sm text-white/80 space-y-2">
              <li><Link to="/#courses" className="hover:text-rkm-gold transition-colors">Courses Offered</Link></li>
              <li><a href="#" className="hover:text-rkm-gold transition-colors">Admission Procedure</a></li>
              <li><a href="#" className="hover:text-rkm-gold transition-colors">Placement Records</a></li>
              <li><a href="#" className="hover:text-rkm-gold transition-colors">Privacy Policy</a></li>
              <li><Link to="/admin" className="hover:text-rkm-gold transition-colors opacity-30 text-[10px]">Admin Access</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-rkm-orange uppercase text-xs tracking-widest">Connect</h4>
            <ul className="text-sm text-white/80 space-y-2">
              <li>Belur Math, Howrah, WB</li>
              <li>Mail: office@rkmshilpavidyalaya.ac.in</li>
              <li>Phone: +91 33 2654 1234</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-[10px] uppercase tracking-[0.3em] text-white/40">
          © {new Date().getFullYear()} Ramakrishna Mission Shilpavidyalaya. All Rights Reserved.
        </div>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:slug" element={<TradeDetail />} />
          <Route path="/admission/iti" element={<AdmissionITI />} />
          <Route path="/admission/hs-vocational" element={<AdmissionHSVocational />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/notices" element={<Notice />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}
