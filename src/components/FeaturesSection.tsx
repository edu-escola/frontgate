import { Card, CardContent } from "@/components/ui/card";
import { 
  Mail, 
  Users, 
  Calendar, 
  ClipboardCheck, 
  BookOpen, 
  GraduationCap,
  BarChart3,
  Shield
} from "lucide-react";

const features = [
  {
    icon: Mail,
    title: "Autenticação Segura",
    description: "Login por e-mail com código de verificação. Acesso diferenciado para administradores e professores."
  },
  {
    icon: Users,
    title: "Gestão de Usuários",
    description: "Administre perfis de estudantes, professores e administradores com controle completo de permissões."
  },
  {
    icon: Calendar,
    title: "Controle de Presença",
    description: "Registro eficiente de presença com calendário integrado, seleção de turmas e relatórios automáticos."
  },
  {
    icon: ClipboardCheck,
    title: "Sistema de Avaliações",
    description: "Criação e gestão de avaliações, lançamento de notas com salvamento automático das alterações."
  },
  {
    icon: BookOpen,
    title: "Planejamento de Aulas",
    description: "Organize aulas com data, horário, tema e objetivos. Campos detalhados para planos de ensino completos."
  },
  {
    icon: GraduationCap,
    title: "Fechamento de Notas",
    description: "Consolidação de notas e frequências por bimestre, edição de valores e controle de aulas ministradas."
  },
  {
    icon: BarChart3,
    title: "Relatórios Inteligentes",
    description: "Relatórios de presença, notas e combinados. Filtragem por turma e período com impressão em PDF."
  },
  {
    icon: Shield,
    title: "Múltiplos Perfis",
    description: "Interface adaptável para usuários com diferentes funções. Acesso simultâneo como administrador e professor."
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Funcionalidades Completas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Todas as ferramentas que sua escola precisa em uma única plataforma integrada e fácil de usar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};