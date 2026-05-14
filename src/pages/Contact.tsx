import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Textarea } from "../components/ui/Textarea";
import { Label } from "../components/ui/Label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageHero } from "../components/PageHero";

export default function Contact() {
  return (
    <div className="bg-background pb-24">
      <PageHero
        title="Contact Us"
        subtitle="We welcome inquiries from prospective students, parents, and industry partners. Reach out to us anytime."
        breadcrumb="Contact"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Get In Touch</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We welcome inquiries from prospective students, parents, and industry partners. Reach out to us through any of the following channels.
              </p>
            </div>

            <div className="grid gap-6">
              <Card className="border-none shadow-lg bg-white overflow-hidden group">
                <CardContent className="p-0 flex items-stretch">
                  <div className="bg-primary w-4 group-hover:bg-accent transition-colors"></div>
                  <div className="p-6 flex items-start">
                    <MapPin className="h-8 w-8 text-secondary mr-5 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-xl text-primary mb-2">Our Campus</h3>
                      <p className="text-muted-foreground text-base leading-relaxed">
                        Ramakrishna Mission Shilpavidyalaya<br/>
                        P.O. Belur Math, Howrah<br/>
                        West Bengal, India - 711 202
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg bg-white overflow-hidden group">
                 <CardContent className="p-0 flex items-stretch">
                  <div className="bg-primary w-4 group-hover:bg-accent transition-colors"></div>
                  <div className="p-6 flex items-start">
                    <Phone className="h-8 w-8 text-secondary mr-5 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-xl text-primary mb-2">Phone</h3>
                      <p className="text-muted-foreground text-base leading-relaxed">
                        +91 33 2654 1234<br/>
                        +91 33 2654 5678 <span className="text-sm font-medium text-accent">(Admission)</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg bg-white overflow-hidden group">
                 <CardContent className="p-0 flex items-stretch">
                  <div className="bg-primary w-4 group-hover:bg-accent transition-colors"></div>
                  <div className="p-6 flex items-start">
                    <Mail className="h-8 w-8 text-secondary mr-5 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-xl text-primary mb-2">Email</h3>
                      <p className="text-muted-foreground text-base leading-relaxed">
                        office@rkmshilpavidyalaya.ac.in<br/>
                        placement@rkmshilpavidyalaya.ac.in
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg bg-white overflow-hidden group">
                 <CardContent className="p-0 flex items-stretch">
                  <div className="bg-primary w-4 group-hover:bg-accent transition-colors"></div>
                  <div className="p-6 flex items-start">
                    <Clock className="h-8 w-8 text-secondary mr-5 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-xl text-primary mb-2">Office Hours</h3>
                      <p className="text-muted-foreground text-base leading-relaxed">
                        <span className="font-medium text-foreground">Mon - Fri:</span> 10:00 AM - 5:00 PM<br/>
                        <span className="font-medium text-foreground">Saturday:</span> 10:00 AM - 1:30 PM<br/>
                        <span className="font-medium text-foreground">Sunday:</span> Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Support / Calling Section */}
          <div className="bg-[#0A1931] p-10 rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col items-center justify-center text-center group overflow-hidden relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-[100px]"></div>
            
            <div className="relative z-10 w-full">
              <div className="w-20 h-20 bg-accent/20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner ring-4 ring-white/5 group-hover:scale-110 transition-transform duration-500">
                <Phone className="h-10 w-10 text-accent animate-pulse" />
              </div>
              
              <h3 className="text-3xl font-bold mb-4 text-white font-serif">Quick Support</h3>
              <p className="text-white/60 text-lg mb-10 max-w-sm mx-auto leading-relaxed">
                Need immediate assistance? Speak directly with our admission coordinators or office staff for fast resolutions.
              </p>

              <div className="space-y-4 w-full">
                <a 
                  href="tel:+913326541234" 
                  className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group/call"
                >
                  <div className="text-left">
                    <p className="text-[10px] text-white/40 uppercase font-bold tracking-[0.2em] mb-1">General Office</p>
                    <p className="text-xl font-bold text-white">+91 (33) 2654 1234</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/10 text-white group-hover/call:bg-[#f2b951] group-hover/call:text-[#0A1931] transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                </a>

                <a 
                  href="tel:+913326545678" 
                  className="flex items-center justify-between p-6 rounded-2xl bg-[#f2b951]/10 border border-[#f2b951]/20 hover:bg-[#f2b951]/20 transition-all group/call"
                >
                  <div className="text-left">
                    <p className="text-[10px] text-[#f2b951] uppercase font-bold tracking-[0.2em] mb-1">Admission Helpline</p>
                    <p className="text-xl font-bold text-white">+91 (33) 2654 5678</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#f2b951] text-[#0A1931] group-hover/call:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                </a>
              </div>

              <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-center gap-4">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0A1931] bg-gray-600 flex items-center justify-center text-[10px] font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-white/40 font-medium">Coordinate with 3 available line agents</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-24">
          <div className="bg-primary w-full h-[500px] rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="relative z-10 flex flex-col items-center p-10 bg-white shadow-xl rounded-2xl max-w-sm text-center">
              <MapPin className="h-16 w-16 text-accent mb-4" />
              <p className="font-bold text-2xl text-primary mb-2">Campus Location</p>
              <p className="text-lg text-muted-foreground">Belur Math, Howrah, West Bengal</p>
              <Button asChild className="mt-6 bg-primary text-white hover:bg-primary/90 font-bold w-full">
                <a href="https://maps.app.goo.gl/BZNwo8yLnp85An8c9" target="_blank" rel="noopener noreferrer">
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
