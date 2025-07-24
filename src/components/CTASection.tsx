import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/5 w-32 h-32 bg-white rounded-full animate-float"></div>
        <div
          className="absolute bottom-1/3 right-1/5 w-24 h-24 bg-white rounded-full animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-full animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Revolucione a Gestão da Sua Escola
            <span className="block text-primary-glow">Começe Hoje Mesmo!</span>
          </h2>

          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Simplifique processos, economize tempo e melhore resultados. O
            EduEscola é a solução completa que sua instituição precisa.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {/* <Button variant="hero" size="xl" className="group bg-white text-primary hover:bg-white/90">
              Começar Gratuitamente
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button> */}
            <Button
              variant="hero"
              size="xl"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => {
                const subject = encodeURIComponent(
                  "Agendamento de Demonstração - EduEscola"
                );
                const body = encodeURIComponent(
                  "Olá!\n\nGostaria de agendar uma demonstração do EduEscola.\n\nPor favor, me informe:\n- Data e horário preferidos\n- Nome da instituição\n- Número de alunos\n\nAguardo seu retorno.\n\nAtenciosamente,\n[Seu nome]"
                );
                const emailUrl = `mailto:contato@eduescola.com.br?subject=${subject}&body=${body}`;
                window.open(emailUrl);
              }}
            >
              Agendar Demonstração
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/80">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>contato@eduescola.com.br</span>
            </div>
            {/* <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>(11) 9999-9999</span>
            </div> */}
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            {/* <p className="text-white/60 text-sm mb-4">Confiado por mais de 500+ escolas em todo o Brasil</p> */}
            <div className="flex justify-center items-center gap-8 text-white/40 text-xs">
              <span>✓ Suporte Dedicado</span>
              <span>✓ Dados Seguros</span>
              <span>✓ Interface Intuitiva</span>
              <span>✓ Sem Limitações</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
