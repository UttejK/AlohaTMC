import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "./context/ThemeContext";
import About from "./pages/About";
import CapabilityDetail from "./pages/CapabilityDetail";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Industries from "./pages/Industries";
import IndustryDetail from "./pages/IndustryDetail";
import PageNotFound from "./pages/PageNotFound";
import ServiceDetail from "./pages/ServiceDetail";
import Services from "./pages/Services";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="services/:slug" element={<ServiceDetail />} />
              <Route path="industries" element={<Industries />} />
              <Route path="industries/:slug" element={<IndustryDetail />} />
              <Route path="capabilities/:slug" element={<CapabilityDetail />} />
              <Route path="contact" element={<Contact />} />
              <Route path="careers" element={<Careers />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Toaster richColors />
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
