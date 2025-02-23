import { Card } from "@/components/ui/card";
import { Users, Shield, Zap, Star, Box, BarChart3 } from "lucide-react";
const icons = { Users, Shield, Zap, Star, Box, BarChart3 };

export default function FeatureCard({ icon, title, description }) {
  const IconComponent = icons[icon];
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
        <IconComponent className="h-6 w-6" />
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </Card>
  );
}
