import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">EduEscola</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors font-medium">
              Início
            </a>
            <a href="#funcionalidades" className="text-foreground hover:text-primary transition-colors font-medium">
              Funcionalidades
            </a>
            <a href="#usuarios" className="text-foreground hover:text-primary transition-colors font-medium">
              Usuários
            </a>
            <a href="#beneficios" className="text-foreground hover:text-primary transition-colors font-medium">
              Benefícios
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="default" onClick={() => window.open('https://app.eduescola.com.br', '_blank')}>
              Entrar
            </Button>
            {/* <Button variant="default">
              Começar Grátis
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors font-medium">
                Início
              </a>
              <a href="#funcionalidades" className="text-foreground hover:text-primary transition-colors font-medium">
                Funcionalidades
              </a>
              <a href="#usuarios" className="text-foreground hover:text-primary transition-colors font-medium">
                Usuários
              </a>
              <a href="#beneficios" className="text-foreground hover:text-primary transition-colors font-medium">
                Benefícios
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="default" className="justify-start" onClick={() => window.open('https://app.eduescola.com.br', '_blank')}>
                  Entrar
                </Button>
                {/* <Button variant="default" className="justify-start">
                  Começar Grátis
                </Button> */}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};