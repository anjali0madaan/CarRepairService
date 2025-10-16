import { Card } from "@/components/ui/card";
import { Shield, Award, CreditCard, Clock } from "lucide-react";

export default function TrustBadgesSection() {
  const badges = [
    {
      icon: Award,
      title: "ASE Certified",
      description: "All mechanics certified",
    },
    {
      icon: Shield,
      title: "12-Month Warranty",
      description: "Parts & labor guaranteed",
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Safe & encrypted",
    },
    {
      icon: Clock,
      title: "24/7 Emergency",
      description: "Always available",
    },
  ];

  return (
    <section className="py-12 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((badge, index) => (
            <div 
              key={index} 
              className="text-center p-4"
              data-testid={`badge-trust-${badge.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <badge.icon className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">{badge.title}</h4>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
