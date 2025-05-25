import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import PageNotFound from "./pages/PageNotFound";
import Careers from "./pages/Careers";
import { Toaster } from "./components/ui/sonner";

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
              <Route path="careers" element={<Careers />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Toaster />
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
