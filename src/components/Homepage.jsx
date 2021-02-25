import React from "react";
import CTASection from "./CTASection";
import RandomPhotos from "./RandomPhotos";
import "./Homepage.css";

export default function Homepage() {
  return (
    <main className="homepage">
      <CTASection />
      <RandomPhotos />
    </main>
  );
}
