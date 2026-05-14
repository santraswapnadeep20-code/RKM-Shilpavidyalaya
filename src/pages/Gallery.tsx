import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Badge } from "../components/ui/Badge";
import { X, ExternalLink, Images } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { collection, getDocs } from "firebase/firestore";
import { db, handleFirestoreError, OperationType } from "../lib/firebase";

// Local image imports mapped to available assets
import imgSaraswati from "../assets/images/regenerated_image_1778318138193.jpg";
import img1 from "../assets/images/regenerated_image_1778309606303.jpg";
import img2 from "../assets/images/regenerated_image_1778315041853.jpg";
import img3 from "../assets/images/regenerated_image_1778309223024.jpg";
import img4 from "../assets/images/regenerated_image_1778309223024.jpg";
import img6 from "../assets/images/regenerated_image_1778336595647.jpg";
import imgNew1 from "../assets/images/regenerated_image_1778314943461.jpg";
import imgNew2 from "../assets/images/regenerated_image_1778315041853.jpg";
import imgNew3 from "../assets/images/regenerated_image_1778317985581.jpg";
import imgNew4 from "../assets/images/regenerated_image_1778318138193.jpg";

type Photo = { src: string; category: string; title: string };

const staticPhotos: Photo[] = [
  { src: imgNew2, category: "Events", title: "Annual Sports Gathering — Students with Principle Maharaj on Field" },
  { src: img1, category: "Events", title: "Cricket Tournament Victory Celebration — Team Photo" },
  { src: imgNew1, category: "Workshop", title: "Vishwakarma Puja & Art Exhibition 2025 — Student Model Display" },
  { src: imgNew3, category: "Cultural", title: "Saraswati Puja Celebration" },
  { src: imgNew4, category: "Events", title: "Students Group Gathering — Post Sports Event Celebration" },
];

const GP = "https://lh3.googleusercontent.com/pw/";

// Gallery content below
export default function Gallery() {
  const [lightbox, setLightbox] = useState<Photo | null>(null);
  const [dynamicPhotos, setDynamicPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const path = "gallery";
      try {
        const snapshot = await getDocs(collection(db, path));
        const fetched = snapshot.docs.map(doc => {
          const data = doc.data();
          return {
            src: data.url,
            category: data.category,
            title: data.caption || 'Gallery Image'
          };
        });
        setDynamicPhotos(fetched as Photo[]);
      } catch (error) {
        handleFirestoreError(error, OperationType.GET, path);
      }
    };
    fetchPhotos();
  }, []);

  const allPhotos = [...dynamicPhotos, ...staticPhotos];

  return (
    <div className="bg-background pb-24">
      <PageHero
        title="Photo Gallery"
        subtitle="Moments from our campus, cultural celebrations, events, and trade workshops since 1921."
        breadcrumb="Gallery"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">

        {/* Link to real site */}
        <div className="flex justify-center mb-10">
          <a
            href="https://rkmshilpavidyalaya.ac.in/photo-gallery/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary/30 text-primary font-semibold text-sm hover:bg-primary hover:text-white hover:border-primary transition-all"
          >
            <Images className="h-4 w-4" />
            View Full Gallery on Official Website
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <AnimatePresence>
            {allPhotos.map((photo, i) => (
              <motion.div
                key={photo.src + photo.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                onClick={() => setLightbox(photo)}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-muted border-2 border-white shadow-lg cursor-pointer"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={e => { 
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('regenerated_image')) {
                      target.src = img1; 
                    } else {
                      target.style.display = "none";
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071428] via-[#071428]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <Badge className="w-fit mb-2 bg-secondary text-primary hover:bg-secondary border-none font-bold uppercase tracking-wider text-xs px-2 py-0.5">
                    {photo.category}
                  </Badge>
                  <h3 className="text-white font-bold text-sm leading-tight">{photo.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom link */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm mb-4">Looking for more photos?</p>
          <a
            href="https://rkmshilpavidyalaya.ac.in/photo-gallery/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-white font-bold text-sm hover:bg-primary/90 transition-all shadow-lg"
          >
            <ExternalLink className="h-4 w-4" />
            Visit Official Gallery at rkmshilpavidyalaya.ac.in
          </a>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
              className="max-w-5xl w-full"
            >
              <img
                src={lightbox.src}
                alt={lightbox.title}
                referrerPolicy="no-referrer"
                className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
                onError={e => { 
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('regenerated_image')) {
                    target.src = img1; 
                  }
                }}
              />
              <div className="flex items-center justify-center gap-3 mt-4">
                <Badge className="bg-secondary text-primary font-bold uppercase tracking-wider text-xs px-3 py-1 border-none">
                  {lightbox.category}
                </Badge>
                <p className="text-white/80 font-semibold text-lg">{lightbox.title}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
