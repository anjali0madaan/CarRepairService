import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import teamImage from "@assets/generated_images/Professional_mechanics_team_photo_5b5825ea.png";

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
                About Workshop on Wheels
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Making vehicle repairs hassle-free with certified mechanics and state-of-the-art mobile repair vans
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src={teamImage} 
                  alt="Professional mechanics team" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div>
                <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="text-muted-foreground mb-6">
                  We believe vehicle repair shouldn't disrupt your life. That's why we bring professional, certified mechanics directly to your location—whether you're at home, at work, or stranded on the roadside.
                </p>
                <p className="text-muted-foreground mb-6">
                  Founded in 2015, Workshop on Wheels has grown from a single van to a fleet of fully-equipped mobile repair units serving the greater Chicago area. Our commitment to quality, transparency, and customer convenience has made us the trusted choice for thousands of drivers.
                </p>
                <div className="space-y-3">
                  {[
                    "Over 10 years of mobile repair experience",
                    "ASE-certified mechanics with ongoing training",
                    "Customer-first approach with transparent pricing",
                    "State-of-the-art mobile repair vans",
                    "12-month/12,000-mile warranty on all work"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-chart-3 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <h3 className="font-heading font-bold text-4xl text-primary mb-2">500+</h3>
                <p className="text-muted-foreground">Happy Customers</p>
              </Card>
              <Card className="p-6 text-center">
                <h3 className="font-heading font-bold text-4xl text-primary mb-2">10+</h3>
                <p className="text-muted-foreground">Years of Service</p>
              </Card>
              <Card className="p-6 text-center">
                <h3 className="font-heading font-bold text-4xl text-primary mb-2">24/7</h3>
                <p className="text-muted-foreground">Emergency Support</p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
