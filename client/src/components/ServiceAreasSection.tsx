import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function ServiceAreasSection() {
  const [zipCode, setZipCode] = useState("");
  const [checkResult, setCheckResult] = useState<"available" | "unavailable" | null>(null);

  const areas = [
    "Downtown Chicago",
    "North Suburbs",
    "West Loop",
    "Lincoln Park",
    "Oak Park",
    "Evanston",
    "Naperville",
    "Schaumburg",
  ];

  const checkAvailability = () => {
    console.log("Checking availability for zip code:", zipCode);
    // Mock check - in real app would check against service database
    if (zipCode.length === 5) {
      setCheckResult("available");
    } else {
      setCheckResult("unavailable");
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Service Areas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We serve the greater Chicago area and surrounding regions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="p-6">
            <h3 className="font-heading font-semibold text-xl text-foreground mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Areas We Cover
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {areas.map((area, index) => (
                <div key={index} className="flex items-center gap-2" data-testid={`area-${area.toLowerCase().replace(/\s+/g, "-")}`}>
                  <CheckCircle2 className="h-4 w-4 text-chart-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{area}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
              Check Service Availability
            </h3>
            <p className="text-muted-foreground mb-4">
              Enter your ZIP code to confirm we service your area
            </p>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Enter ZIP code"
                value={zipCode}
                onChange={(e) => {
                  setZipCode(e.target.value);
                  setCheckResult(null);
                }}
                maxLength={5}
                data-testid="input-zip-code"
              />
              <Button onClick={checkAvailability} data-testid="button-check-availability">
                Check
              </Button>
            </div>
            {checkResult === "available" && (
              <div className="mt-4 p-3 bg-chart-3/10 border border-chart-3/20 rounded-md">
                <p className="text-chart-3 font-medium flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  Great! We service your area.
                </p>
              </div>
            )}
            {checkResult === "unavailable" && (
              <div className="mt-4 p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                <p className="text-destructive font-medium">
                  Please enter a valid 5-digit ZIP code.
                </p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
