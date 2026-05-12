import Navbar from "@/components/Navbar";
import BentoGrid from "@/components/BentoGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0b]">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 pt-24 pb-12" id="experience">
        <BentoGrid />
      </main>
    </div>
  );
}
