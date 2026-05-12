import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0c0c0e]">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 flex gap-0 lg:gap-16">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}
