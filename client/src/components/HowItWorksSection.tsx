import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Wrench } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: Calendar,
      number: "1",
      title: "Book Online or Call",
      description: "Choose your service, select a convenient time slot, and provide your location details.",
    },
    {
      icon: MapPin,
      number: "2",
      title: "We Come to You",
      description: "Our certified mechanic arrives at your location with a fully-equipped mobile repair van.",
    },
    {
      icon: Wrench,
      number: "3",
      title: "Get Fixed On-Site",
      description: "Your vehicle is repaired professionally on-site while you relax at home or work.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to hassle-free vehicle repair
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative" data-testid={`step-${step.number}`}>
              <Card className="p-8 text-center h-full">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-chart-2 rounded-full flex items-center justify-center">
                  <span className="font-heading font-bold text-2xl text-white">{step.number}</span>
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
