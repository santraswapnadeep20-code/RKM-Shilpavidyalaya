import React, { useState, useEffect } from "react";
import { auth, db, googleProvider, OperationType, handleFirestoreError } from "../lib/firebase";
import { signInWithPopup, onAuthStateChanged, User, signOut } from "firebase/auth";
import { 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  doc, 
  query, 
  orderBy, 
  Timestamp,
  serverTimestamp 
} from "firebase/firestore";
import { motion, AnimatePresence } from "motion/react";
import { 
  BarChart3, 
  Bell, 
  Image as ImageIcon, 
  Mail, 
  Plus, 
  Trash2, 
  LogOut, 
  ShieldCheck,
  Loader2,
  ExternalLink
} from "lucide-react";

const ADMIN_EMAILS = ['santraswapnadeep20@gmail.com'];

export default function Admin() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeTab, setActiveTab] = useState<'notices' | 'gallery' | 'contacts'>('notices');
  const [items, setItems] = useState<any[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (u && (ADMIN_EMAILS.includes(u.email || ''))) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = () => signOut(auth);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-rkm-blue">
        <Loader2 className="animate-spin w-12 h-12" />
      </div>
    );
  }

  if (!user || !isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-border max-w-md w-full text-center"
        >
          <div className="w-20 h-20 bg-rkm-blue/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-10 h-10 text-rkm-blue" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-rkm-blue mb-4">Admin Portal</h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Please sign in with an authorized account to manage school notices, gallery images, and more.
          </p>
          {!user ? (
            <button 
              onClick={handleLogin}
              className="w-full bg-[#f2b951] hover:bg-[#e0a840] text-rkm-blue font-black h-14 rounded-2xl transition-all shadow-xl shadow-orange-950/10 active:scale-[0.98] border-none text-base"
            >
              Sign in with Google
            </button>
          ) : (
            <div className="space-y-4">
              <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium border border-red-100">
                Logged in as <span className="font-bold underline">{user.email}</span>, but you are not authorized.
              </div>
              <button onClick={handleLogout} className="text-rkm-blue font-bold text-sm hover:underline">Sign out</button>
            </div>
          )}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-rkm-blue text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-8 h-8 text-[#f2b951]" />
            <h1 className="text-xl font-serif font-bold tracking-tight">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center overflow-hidden border border-white/20">
                {user.photoURL ? <img src={user.photoURL} alt="Avatar" /> : user.email?.[0].toUpperCase()}
              </div>
              <span className="text-xs font-bold opacity-80 uppercase tracking-widest">{user.displayName || user.email}</span>
            </div>
            <button 
              onClick={handleLogout}
              className="bg-white/10 hover:bg-white/20 p-2 rounded-xl transition-colors"
              title="Logout"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Tabs Sidebar */}
          <div className="lg:col-span-1 space-y-2">
            {[
              { id: 'notices', label: 'Notices', icon: Bell },
              { id: 'gallery', label: 'Gallery', icon: ImageIcon },
              { id: 'contacts', label: 'Contact Submissions', icon: Mail }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-sm font-bold transition-all ${
                  activeTab === tab.id 
                    ? 'bg-rkm-blue text-white shadow-xl translate-x-2' 
                    : 'text-gray-500 hover:bg-white hover:text-rkm-blue'
                }`}
              >
                <tab.icon size={20} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
             <TabContent 
              activeTab={activeTab} 
              isSubmitting={isSubmitting} 
              setIsSubmitting={setIsSubmitting} 
             />
          </div>
        </div>
      </div>
    </div>
  );
}

function TabContent({ activeTab, isSubmitting, setIsSubmitting }: { 
  activeTab: 'notices' | 'gallery' | 'contacts', 
  isSubmitting: boolean, 
  setIsSubmitting: (s: boolean) => void 
}) {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const path = activeTab === 'notices' ? 'notices' : activeTab === 'gallery' ? 'gallery' : 'contacts';
    try {
      const q = query(collection(db, path), orderBy(activeTab === 'contacts' ? 'timestamp' : 'date', 'desc'));
      const snapshot = await getDocs(q);
      setItems(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } catch (error) {
      // For first time or empty, it might fail if date field missing
      try {
        const snapshot = await getDocs(collection(db, path));
        setItems(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (innerError) {
        handleFirestoreError(innerError, OperationType.GET, path);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this?")) return;
    const path = activeTab === 'notices' ? 'notices' : activeTab === 'gallery' ? 'gallery' : 'contacts';
    try {
      await deleteDoc(doc(db, path, id));
      setItems(items.filter(item => item.id !== id));
    } catch (error) {
       handleFirestoreError(error, OperationType.DELETE, `${path}/${id}`);
    }
  };

  const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data: any = Object.fromEntries(formData.entries());
    
    const path = activeTab === 'notices' ? 'notices' : 'gallery';
    
    try {
      if (activeTab === 'notices') {
        data.date = new Date().toISOString();
      }
      await addDoc(collection(db, path), data);
      await fetchData();
      (e.target as HTMLFormElement).reset();
    } catch (error) {
       handleFirestoreError(error, OperationType.CREATE, path);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      {activeTab !== 'contacts' && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-[2rem] shadow-sm border border-border"
        >
          <h2 className="text-xl font-serif font-bold text-rkm-blue mb-6 flex items-center gap-3">
            <Plus className="text-[#f2b951]" /> Add New {activeTab === 'notices' ? 'Notice' : 'Gallery Item'}
          </h2>
          <form onSubmit={handleAdd} className="grid sm:grid-cols-2 gap-6">
            {activeTab === 'notices' ? (
              <>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Notice Title</label>
                  <input name="title" required className="w-full h-12 bg-gray-50 border-none rounded-xl px-4 text-sm focus:ring-2 focus:ring-rkm-blue/20" placeholder="Important Admission Update" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Type</label>
                  <select name="type" className="w-full h-12 bg-gray-50 border-none rounded-xl px-4 text-sm">
                    <option value="general">General</option>
                    <option value="admission">Admission</option>
                    <option value="exam">Exam</option>
                    <option value="placement">Placement</option>
                  </select>
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Content</label>
                  <textarea name="content" required className="w-full h-32 bg-gray-50 border-none rounded-xl p-4 text-sm resize-none" placeholder="Detailed description of the notice..." />
                </div>
              </>
            ) : (
              <>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Image URL</label>
                  <input name="url" required className="w-full h-12 bg-gray-50 border-none rounded-xl px-4 text-sm" placeholder="https://..." />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Category</label>
                  <input name="category" required className="w-full h-12 bg-gray-50 border-none rounded-xl px-4 text-sm" placeholder="Workshops, Labs, Campus..." />
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Caption (Optional)</label>
                  <input name="caption" className="w-full h-12 bg-gray-50 border-none rounded-xl px-4 text-sm" placeholder="Brief description..." />
                </div>
              </>
            )}
            <div className="sm:col-span-2">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-rkm-blue text-white font-bold h-12 px-8 rounded-xl hover:bg-rkm-dark transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting && <Loader2 className="animate-spin w-4 h-4" />}
                Post {activeTab === 'notices' ? 'Notice' : 'Image'}
              </button>
            </div>
          </form>
        </motion.div>
      )}

      {/* List Area */}
      <div className="space-y-4">
        <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] px-2 flex items-center gap-3">
          Existing {activeTab === 'notices' ? 'Notices' : activeTab === 'gallery' ? 'Images' : 'Messages'}
          <div className="h-px flex-1 bg-gray-200"></div>
          {items.length} Total
        </h3>

        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {loading ? (
              <div className="py-20 flex justify-center">
                <Loader2 className="animate-spin text-rkm-blue/40 w-10 h-10" />
              </div>
            ) : items.length === 0 ? (
              <div className="bg-white p-12 rounded-[2rem] text-center border border-dashed border-gray-200">
                <p className="text-gray-400 font-medium italic">No items found in this section.</p>
              </div>
            ) : (
              items.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white p-6 rounded-2xl border border-border shadow-sm group hover:shadow-md transition-all flex items-start justify-between gap-4"
                >
                  <div className="flex-1 space-y-2">
                    {activeTab === 'notices' ? (
                      <>
                        <div className="flex items-center gap-3">
                           <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-blue-50 text-blue-600 rounded-md">
                            {item.type}
                           </span>
                           <span className="text-[10px] text-gray-400 font-bold">{new Date(item.date).toLocaleDateString()}</span>
                        </div>
                        <h4 className="font-bold text-rkm-blue">{item.title}</h4>
                        <p className="text-sm text-gray-500 line-clamp-2">{item.content}</p>
                      </>
                    ) : activeTab === 'gallery' ? (
                      <div className="flex gap-4">
                        <div className="w-16 h-16 rounded-xl bg-gray-100 overflow-hidden shrink-0 border border-border">
                          <img src={item.url} alt="Gallery" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-[#f2b951]">{item.category}</p>
                          <h4 className="font-bold text-rkm-blue text-sm">{item.caption || 'No caption'}</h4>
                          <p className="text-[10px] text-gray-400 truncate max-w-[200px]">{item.url}</p>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center gap-3">
                           <span className="text-[10px] font-black uppercase tracking-widest text-green-600">New Message</span>
                           <span className="text-[10px] text-gray-400 font-bold">{new Date(item.timestamp).toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                           <h4 className="font-bold text-rkm-blue">{item.name}</h4>
                           <span className="text-gray-400">•</span>
                           <span className="text-xs text-gray-500">{item.email}</span>
                        </div>
                        <p className="text-sm text-gray-600 font-medium italic">"{item.subject || 'No Subject'}"</p>
                        <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg mt-2">{item.message}</p>
                      </>
                    )}
                  </div>
                  <button 
                    onClick={() => handleDelete(item.id)}
                    className="p-3 text-red-100 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                  >
                    <Trash2 size={18} />
                  </button>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
