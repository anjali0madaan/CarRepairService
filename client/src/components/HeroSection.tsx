import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone } from "lucide-react";
import heroImage from "@assets/generated_images/Mobile_repair_van_hero_image_65ce2e5f.png";

export default function HeroSection() {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,25%,25%)]/90 via-[hsl(215,25%,25%)]/70 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            We Come to You,<br />So You Don't Have To!
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            Professional mobile auto repair service bringing certified mechanics directly to your location—home, office, or roadside.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-chart-2 hover:bg-chart-2 text-white border border-chart-2 text-lg h-12 px-8"
              onClick={scrollToBooking}
              data-testid="button-book-service"
            >
              Book Service Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-background/10 backdrop-blur-sm text-white border-white/30 hover:bg-background/20 text-lg h-12 px-8"
              asChild
              data-testid="button-learn-more"
            >
              <a href="tel:+642108233838">
                <Phone className="h-5 w-5 mr-2" />
                Call Us Now
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {[
              "Certified Mechanics",
              "500+ Happy Customers",
              "Same-Day Service"
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-white" data-testid={`badge-${item.toLowerCase().replace(/\s+/g, "-")}`}>
                <CheckCircle2 className="h-5 w-5 text-chart-2" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
