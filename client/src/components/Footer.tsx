import { Link } from "wouter";
import { SiFacebook, SiInstagram } from "react-icons/si";
import logoImage from "@assets/1 wow_1761153066101.jpg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(215,25%,25%)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img src={logoImage} alt="WOW - Workshop on Wheels" className="h-16 w-auto mb-2" />
              <p className="font-heading font-bold text-sm">NZ Automotive Care & Repair Ltd</p>
              <p className="text-xs text-white/80 italic">Workshop On Wheels</p>
            </div>
            <p className="text-white/80 text-sm">
              Professional mobile auto repair bringing certified mechanics to your location.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/#services" className="hover:text-white transition-colors">Oil Changes</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Brake Repair</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Battery Service</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Emergency Roadside</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/10 rounded-md flex items-center justify-center hover:bg-chart-2 transition-colors"
                data-testid="link-footer-facebook"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/10 rounded-md flex items-center justify-center hover:bg-chart-2 transition-colors"
                data-testid="link-footer-instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-white/80">
              Call: <a href="tel:+642108233838" className="hover:text-white">+64 21 0823 3838</a>
            </p>
            <p className="text-sm text-white/80 mt-2">
              2/86 Huia Road<br />
              Papatoetoe<br />
              Auckland 2025
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© {currentYear} NZ Automotive Care & Repair Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
