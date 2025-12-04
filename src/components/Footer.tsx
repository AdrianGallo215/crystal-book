import { Link } from "react-router-dom";
import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold tracking-tighter text-foreground mb-4">
              Clínica Dental
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Transformando sonrisas en San Isidro desde 2015. Tecnología de vanguardia y atención personalizada.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                Av. Javier Prado 1234, San Isidro
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                +51 999 999 999
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                Lun - Sáb: 9:00 - 19:00
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <a href="#treatments" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Tratamientos
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Clínica Dental. Todos los derechos reservados.
          </p>
          <Link 
            to="/dashboard" 
            className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors"
          >
            Staff Login
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
