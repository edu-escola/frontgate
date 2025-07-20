import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">EduEscola</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              A plataforma completa para gestão escolar moderna. Simplifique
              processos e melhore resultados educacionais.
            </p>
          </div>

          {/* Links */}
          <div>
            {/* <h4 className="font-semibold mb-4">Funcionalidades</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Gestão de Usuários</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Controle de Presença</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sistema de Avaliações</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Relatórios</a></li>
            </ul> */}
          </div>

          {/* Support */}
          <div>
            {/* <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentação</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Treinamentos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fale Conosco</a></li>
            </ul> */}
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-white/70">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contato@eduescola.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>&copy; 2025 EduEscola. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
