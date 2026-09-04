import { Package, Map, AlertTriangle, Smile } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const stats = [
  { icon: Package, values: 2, label: "Package im Cachen" },
  { icon: Map, values: 1, label: "Karten erstellt" },
  { icon: AlertTriangle, values: 0, label: "Konflikte gefunden" },
  { icon: Smile, values: 0, label: "Zufriedene Benutzer" },
];

export function StatsBar() {
  return (
    <div className="flex flex-row items-center justify-center gap-8 ">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card
            key={stat.label}
            className="w-40 h-40 bg-gray-800/50 backdrop-blur-md"
          >
            <CardHeader>
              <div className="flex items-center gap-2 ">
                <Icon size={50} className="text-white" />
                <CardDescription className="text-white font-bold text-lg">
                  {stat.label}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-white text-4xl font-bold flex items-center justify-center">
                {stat.values}
              </CardTitle>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
