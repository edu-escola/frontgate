import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Clock, 
  TrendingUp, 
  Shield, 
  Smartphone,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Economia de Tempo",
    description: "Automatize processos repetitivos e concentre-se no que realmente importa: o ensino de qualidade.",
    stat: "70% menos tempo",
    statLabel: "em tarefas administrativas"
  },
  {
    icon: TrendingUp,
    title: "Melhores Resultados",
    description: "Acompanhe o progresso em tempo real e tome decisões baseadas em dados concretos.",
    stat: "85% melhoria",
    statLabel: "no acompanhamento acadêmico"
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Proteção de dados avançada e controle de acesso personalizado para cada usuário.",
    stat: "100% seguro",
    statLabel: "dados protegidos"
  },
  {
    icon: Smartphone,
    title: "Acesso Anywhere",
    description: "Interface responsiva que funciona perfeitamente em qualquer dispositivo, a qualquer hora.",
    stat: "24/7 disponível",
    statLabel: "em todos os dispositivos"
  }
];

const achievements = [
  "Gestão completa de usuários e permissões",
  "Relatórios automáticos e personalizáveis", 
  "Interface intuitiva e fácil de usar",
  "Suporte técnico especializado",
  "Atualizações constantes e melhorias",
  "Integração com sistemas existentes"
];

export const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        {/* Benefits Grid */}
        <div className="mb-20">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Por que Escolher o EduEscola?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Benefícios comprovados que transformam a gestão educacional da sua instituição.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="group text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-background border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div className="mb-3">
                    <div className="text-2xl font-bold text-primary">{benefit.stat}</div>
                    <div className="text-sm text-muted-foreground">{benefit.statLabel}</div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements + CTA */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Tudo o que Você Precisa em Uma Plataforma
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-card-foreground font-medium text-sm">
                    {achievement}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center lg:text-left animate-scale-in">
            <div className="bg-primary/5 rounded-3xl p-8 mb-6">
              <h4 className="text-xl font-bold text-foreground mb-4">
                Pronto para Transformar sua Escola?
              </h4>
              <p className="text-muted-foreground mb-6">
                Junte-se a centenas de instituições que já revolucionaram sua gestão educacional com o EduEscola.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="hero" size="lg" className="group flex-1">
                  Começar Gratuitamente
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  Falar com Especialista
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};