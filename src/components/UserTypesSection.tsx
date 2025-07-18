import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Settings, 
  Users, 
  FileText, 
  BookOpen, 
  CalendarCheck, 
  ClipboardList,
  Target,
  TrendingUp
} from "lucide-react";

const userTypes = [
  {
    type: "Administradores",
    icon: Settings,
    color: "bg-primary",
    description: "Controle total da plataforma educacional",
    features: [
      { icon: Users, text: "Gestão completa de usuários" },
      { icon: Settings, text: "Configuração de turmas e salas" },
      { icon: FileText, text: "Relatórios e análises detalhadas" },
      { icon: TrendingUp, text: "Dashboard com estatísticas" }
    ],
    highlights: ["Visão geral completa", "Controle de permissões", "Relatórios avançados"]
  },
  {
    type: "Professores",
    icon: BookOpen,
    color: "bg-accent",
    description: "Ferramentas dedicadas para o ensino eficiente",
    features: [
      { icon: CalendarCheck, text: "Registro de presença rápido" },
      { icon: BookOpen, text: "Planejamento de aulas detalhado" },
      { icon: ClipboardList, text: "Criação de avaliações" },
      { icon: Target, text: "Fechamento de notas por bimestre" }
    ],
    highlights: ["Interface intuitiva", "Saudações personalizadas", "Ações rápidas"]
  }
];

export const UserTypesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Feito para Diferentes Usuários
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interfaces específicas e otimizadas para cada tipo de usuário, garantindo eficiência máxima em suas atividades.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {userTypes.map((user, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-strong transition-all duration-500 hover:-translate-y-3 bg-gradient-card border-0 overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 ${user.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <user.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground">
                      {user.type}
                    </h3>
                    <p className="text-muted-foreground">
                      {user.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-6">
                  {user.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <feature.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-card-foreground font-medium">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {user.highlights.map((highlight, highlightIndex) => (
                    <Badge 
                      key={highlightIndex} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary border-0"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  variant={index === 0 ? "default" : "cta"} 
                  className="w-full group-hover:scale-105 transition-transform"
                >
                  Explorar Painel {user.type}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};