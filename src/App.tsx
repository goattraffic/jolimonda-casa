import { Toaster } from "@/components/ui/sonner";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import TermsConditions from "./pages/TermsConditions";
import RefundsPolicy from "./pages/RefundsPolicy";
import NotFound from "./pages/NotFound";

const App = () => {
  useEffect(() => {
    // Capture UTM parameters and tracking IDs on initial load
    const urlParams = new URLSearchParams(window.location.search);
    const params = {
      utm_source: urlParams.get('utm_source') || '',
      utm_medium: urlParams.get('utm_medium') || '',
      utm_campaign: urlParams.get('utm_campaign') || '',
      utm_term: urlParams.get('utm_term') || '',
      utm_content: urlParams.get('utm_content') || '',
      gclid: urlParams.get('gclid') || '',
      fbclid: urlParams.get('fbclid') || ''
    };
    
    Object.entries(params).forEach(([key, value]) => {
      if (value) sessionStorage.setItem(key, value);
    });
  }, []);

  return (
    <HashRouter>
      <Toaster />
      <CookieBanner />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<About />} />
          <Route path="/servizi" element={<Services />} />
          <Route path="/servizi/:slug" element={<ServiceDetail />} />
          <Route path="/contatti" element={<Contact />} />
          <Route path="/grazie" element={<ThankYou />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/termini-condizioni" element={<TermsConditions />} />
          <Route path="/politica-rimborsi" element={<RefundsPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
};

export default App;
