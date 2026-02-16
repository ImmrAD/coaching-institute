import type { Metadata } from "next";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import WeUnderstandYou from "@/components/WeUnderstandYou";
import VideoTestimonials from "@/components/VideoTestimonials";
import FinalDecisionSection from "@/components/FinalDecisionSection";
import PathSelector from "@/components/PathSelector";
import FloatingCTA from "@/components/FloatingCTA";
import FAQSection from "@/components/FAQSection";



export const metadata: Metadata = {
  title:
    "JEE & NEET Coaching in PCMC | MHT CET & 8th–10th Classes | Durga & P K Classes",
  description:
    "Looking for the best JEE coaching in PCMC? Durga & P K Classes offers expert guidance for JEE, NEET, MHT CET and 8th to 10th coaching in PCMC with personal mentoring and structured preparation.",
  keywords: [
    "JEE coaching in PCMC",
    "Best NEET coaching in PCMC",
    "MHT CET classes in PCMC",
    "8th to 10th coaching in PCMC",
    "Coaching classes in PCMC",
    "Durga & P K Classes"
  ],
  openGraph: {
    title:
      "Best JEE & NEET Coaching in PCMC | Durga & P K Classes",
    description:
      "Structured preparation for JEE, NEET, MHT CET and foundation courses for 8th to 10th students in PCMC.",
    url: "https://yourdomain.com",
    siteName: "Durga & P K Classes",
    locale: "en_IN",
    type: "website"
  }
};

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <WeUnderstandYou />
      <VideoTestimonials />
      <PathSelector />
      <FAQSection />
      <FinalDecisionSection />
      <FloatingCTA />
    </>
  );
}
