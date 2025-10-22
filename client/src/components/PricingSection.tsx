import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function PricingSection() {
  const pricingItems = [
    {
      service: "Oil Change",
      price: "$79",
      features: ["Synthetic blend oil", "New oil filter", "Fluid top-off", "Multi-point inspection"],
    },
    {
      service: "Brake Pad Replacement",
      price: "$199",
      features: ["Premium brake pads", "Rotor inspection", "Brake fluid check", "Test drive included"],
      popular: true,
    },
    {
      service: "Battery Replacement",
      price: "$149",
      features: ["Quality battery", "Free testing", "Terminal cleaning", "Warranty included"],
    },
  ];

  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No hidden fees • Free quotes • Competitive rates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {pricingItems.map((item, index) => (
            <Card 
              key={index}
              className={`p-6 relative ${item.popular ? 'border-primary border-2' : ''}`}
              data-testid={`card-pricing-${item.service.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {item.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-chart-2 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="font-heading font-semibold text-2xl text-foreground mb-2">
                {item.service}
              </h3>
              <div className="mb-6">
                <span className="font-heading font-bold text-4xl text-primary">{item.price}</span>
                <span className="text-muted-foreground ml-2">starting at</span>
              </div>
              <ul className="space-y-3 mb-6">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-chart-3 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full" 
                variant={item.popular ? "default" : "outline"}
                onClick={scrollToBooking}
                data-testid={`button-book-${item.service.toLowerCase().replace(/\s+/g, "-")}`}
              >
                Book Now
              </Button>
            </Card>
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
          <p className="text-lg font-medium text-foreground mb-2">
            Need a custom quote for other services?
          </p>
          <p className="text-muted-foreground mb-4">
            Contact us for a free, no-obligation estimate on any repair
          </p>
          <Button variant="outline" asChild data-testid="button-get-quote">
            <a href="tel:+642108233838">Get Free Quote</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
