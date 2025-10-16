import { Card } from "@/components/ui/card";
import { Wrench, Disc, Battery, Droplet, AlertTriangle, Gauge } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Gauge,
      title: "Engine Diagnostics",
      description: "Advanced computer diagnostics to identify and resolve engine issues quickly and accurately.",
    },
    {
      icon: Disc,
      title: "Brake Repair",
      description: "Complete brake system inspection, pad replacement, and rotor resurfacing for optimal safety.",
    },
    {
      icon: Wrench,
      title: "Tire Services",
      description: "Tire changes, rotation, balancing, and emergency roadside tire replacement.",
    },
    {
      icon: Battery,
      title: "Battery Services",
      description: "Battery testing, replacement, and charging system diagnostics to keep you running.",
    },
    {
      icon: Droplet,
      title: "Oil Changes",
      description: "Quick and professional oil changes with quality filters and your choice of oil grade.",
    },
    {
      icon: AlertTriangle,
      title: "Emergency Roadside",
      description: "24/7 emergency assistance for breakdowns, jump starts, and urgent repairs.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive mobile auto repair services for cars, trucks, and SUVs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-6 hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="w-12 h-12 bg-chart-2/10 rounded-md flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-chart-2" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
