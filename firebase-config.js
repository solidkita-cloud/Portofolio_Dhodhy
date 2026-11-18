/**
 * Firebase Google Integration Module — Portofolio Dhodhy Rahmaddi
 * 
 * Modul ini disiapkan untuk menghubungkan portofolio ke Google Cloud Firebase (Firestore)
 * saat nanti dideploy online di Vercel.
 * 
 * Fitur:
 * 1. Mencatat token kunjungan & IP pengunjung untuk proteksi timer 24 jam.
 * 2. Menyimpan leads / analitik pengunjung dari link bio Instagram.
 */

// Ganti konfigurasi ini dengan kredensial dari Firebase Console (https://console.firebase.google.com/)
const firebaseConfig = {
  apiKey: "AIzaSyYOUR_API_KEY_HERE",
  authDomain: "dhodhy-portfolio.firebaseapp.com",
  projectId: "dhodhy-portfolio",
  storageBucket: "dhodhy-portfolio.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456"
};

// Inisialisasi Firebase (saat online)
class PortfolioFirebaseService {
  constructor() {
    this.isOnline = typeof window !== 'undefined' && window.firebase;
    this.db = null;
  }

  init() {
    if (typeof window !== 'undefined' && window.firebase && !window.firebase.apps.length) {
      window.firebase.initializeApp(firebaseConfig);
      this.db = window.firebase.firestore();
      console.log('⚡ Firebase Cloud Firestore terhubung.');
    }
  }

  // Mencatat sesi trial 24 jam ke database cloud
  async recordTrialSession(userId, sampleName) {
    if (!this.db) return null;
    try {
      const ref = this.db.collection('trial_sessions').doc(userId);
      const doc = await ref.get();
      if (!doc.exists) {
        await ref.set({
          userId: userId,
          sample: sampleName,
          firstVisit: window.firebase.firestore.FieldValue.serverTimestamp(),
          expiresAt: Date.now() + (24 * 60 * 60 * 1000),
          userAgent: navigator.userAgent
        });
      }
      return doc.data();
    } catch (err) {
      console.warn('Fallback offline mode:', err.message);
      return null;
    }
  }

  // Mencatat klik tombol WA / Lead
  async trackWaClick(source) {
    if (!this.db) return;
    try {
      await this.db.collection('wa_clicks').add({
        source: source || 'portfolio',
        timestamp: window.firebase.firestore.FieldValue.serverTimestamp(),
        referrer: document.referrer || 'direct'
      });
    } catch (e) {}
  }
}

// Export singleton instance
window.PortfolioFirebase = new PortfolioFirebaseService();
