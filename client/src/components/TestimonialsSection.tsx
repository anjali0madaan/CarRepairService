import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import sarahAvatar from "@assets/generated_images/Customer_testimonial_avatar_Sarah_2c323aa7.png";
import michaelAvatar from "@assets/generated_images/Customer_testimonial_avatar_Michael_4817b054.png";
import robertAvatar from "@assets/generated_images/Customer_testimonial_avatar_Robert_57503e8f.png";
import jenniferAvatar from "@assets/generated_images/Customer_testimonial_avatar_Jennifer_bea9cd98.png";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Downtown Chicago",
      avatar: sarahAvatar,
      rating: 5,
      comment: "Absolutely fantastic service! The mechanic came to my office and fixed my brake issue while I was in a meeting. So convenient and professional!",
    },
    {
      name: "Michael Chen",
      location: "North Suburbs",
      avatar: michaelAvatar,
      rating: 5,
      comment: "Best mobile repair experience ever. They diagnosed my engine problem quickly and had it fixed the same day. Transparent pricing and friendly service.",
    },
    {
      name: "Robert Thompson",
      location: "West Loop",
      avatar: robertAvatar,
      rating: 5,
      comment: "I was stranded on the highway and they came to my rescue within 30 minutes. Changed my battery on-site and got me back on the road. Highly recommend!",
    },
    {
      name: "Jennifer Davis",
      location: "Lincoln Park",
      avatar: jenniferAvatar,
      rating: 5,
      comment: "The convenience of having my oil changed in my driveway while working from home is unbeatable. Quality service without the hassle of driving to a shop!",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust us with their vehicles
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6"
              data-testid={`card-testimonial-${testimonial.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-chart-2 text-chart-2" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "{testimonial.comment}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
