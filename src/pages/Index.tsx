import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { UserTypesSection } from "@/components/UserTypesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <section id="inicio">
          <HeroSection />
        </section>
        
        <section id="funcionalidades">
          <FeaturesSection />
        </section>
        
        <section id="usuarios">
          <UserTypesSection />
        </section>
        
        <section id="beneficios">
          <BenefitsSection />
        </section>
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
