import Header from "@/components/Header";
import ProjectCarousel from "@/components/ProjectCarousel";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 xl:px-12">
        <Header />
      </div>

      <ProjectCarousel />

      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 xl:px-12 space-y-10">
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </div>
  );
}