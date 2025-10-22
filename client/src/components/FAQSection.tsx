import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "What vehicles do you service?",
      answer: "We service all makes and models of cars, trucks, and SUVs. Our certified mechanics are equipped to handle domestic and foreign vehicles of all ages.",
    },
    {
      question: "How long do repairs typically take?",
      answer: "Most common services like oil changes and battery replacements take 30-60 minutes. More complex repairs may take 2-4 hours. We'll provide an accurate time estimate when you book.",
    },
    {
      question: "Are your mechanics certified?",
      answer: "Yes! All our mechanics are ASE-certified professionals with years of experience. They undergo regular training to stay current with the latest automotive technologies.",
    },
    {
      question: "What if I need service outside your listed areas?",
      answer: "Contact us directly! While we primarily serve the Auckland area, we may be able to accommodate special requests in nearby regions for an additional travel fee.",
    },
    {
      question: "Do you offer emergency roadside assistance?",
      answer: "Absolutely! We provide 24/7 emergency roadside assistance for breakdowns, jump starts, tire changes, and other urgent repairs. Call us anytime at +64 21 0823 3838.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, and digital payment methods. Payment can be made upfront when booking or after service completion.",
    },
    {
      question: "Is there a warranty on your work?",
      answer: "Yes! We provide a 12-month/12,000-mile warranty on all parts and labor. We stand behind our work and ensure your complete satisfaction.",
    },
    {
      question: "Can I watch the mechanic work on my vehicle?",
      answer: "Of course! We encourage customers to observe the repair process. Our mechanics are happy to explain what they're doing and answer any questions you have.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our mobile repair service
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="bg-card border border-card-border rounded-lg px-6"
              data-testid={`faq-${index}`}
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
