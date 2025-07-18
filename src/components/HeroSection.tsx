import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="text-left space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                EduEscola
                <span className="block text-primary-glow">Gestão Escolar Inteligente</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl">
                Simplifique a administração escolar com nossa plataforma completa para gestão de turmas, presença, avaliações e relatórios.
              </p>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-6 text-white">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary-glow" />
                <span className="font-semibold">Gestão de Usuários</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary-glow" />
                <span className="font-semibold">Planejamento de Aulas</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary-glow" />
                <span className="font-semibold">Relatórios Detalhados</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Começar Agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Saiba Mais
              </Button>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="relative animate-scale-in">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="EduEscola - Plataforma educacional moderna" 
                className="w-full h-auto rounded-2xl shadow-strong"
              />
            </div>
            {/* Floating decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-80 animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-glow rounded-full opacity-60 animate-float" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};