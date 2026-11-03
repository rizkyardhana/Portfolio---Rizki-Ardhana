import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import DummyProject from './components/DummyProject';
import Copywriting from './components/Copywriting';
import FeedDesign from './components/FeedDesign';
import StoryDesign from './components/StoryDesign';
import ReelsVideo from './components/ReelsVideo';
import ProductCatalog from './components/ProductCatalog';
import Contact from './components/Contact';
import Closing from './components/Closing';
import Footer from './components/Footer';
import ModalPreview from './components/ModalPreview';

export default function App() {
  const [modalItem, setModalItem] = useState(null);

  const handleSelectImage = (title, image, description) => {
    setModalItem({ title, image, description });
  };

  const handleCloseModal = () => {
    setModalItem(null);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans">
      {/* Top Strip */}
      <div className="bg-lavender-950 text-white text-xs sm:text-sm py-2 px-4 text-center font-medium border-b border-lavender-900 flex items-center justify-center gap-2">
        <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-lavender-600 text-[11px] font-bold uppercase tracking-wider">
          Final Project
        </span>
        <span>MIX Academy Batch 3 – Konten Editor 2026 • Portofolio Resmi Muhammad Rizki Ardhana</span>
      </div>

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <DummyProject />
        <Copywriting />
        <FeedDesign onSelectImage={handleSelectImage} />
        <StoryDesign onSelectImage={handleSelectImage} />
        <ReelsVideo />
        <ProductCatalog onSelectImage={handleSelectImage} />
        <Contact />
        <Closing />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lightbox Modal */}
      <ModalPreview item={modalItem} onClose={handleCloseModal} />
    </div>
  );
}

