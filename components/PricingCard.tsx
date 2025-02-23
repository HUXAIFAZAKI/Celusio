import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingCard({ plan }) {
  return (
    <Card
      className={`p-8 ${
        plan.featured ? "bg-primary text-white scale-105 shadow-lg" : ""
      } hover:shadow-xl transition-shadow duration-300`}
    >
      <h3 className="font-semibold mb-2">{plan.title}</h3>
      <div className="text-3xl font-bold mb-4">{plan.price}</div>
      <ul className="space-y-2 mb-8">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <Star className="h-4 w-4" />
            {feature}
          </li>
        ))}
      </ul>
      <Button
        className={
          plan.featured ? "bg-white text-primary hover:bg-white/90" : "w-full"
        }
      >
        Get Started
      </Button>
    </Card>
  );
}
