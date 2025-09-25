import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface LanguageCardProps {
  id: string;
  name: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  category: string;
  popularity: number;
  logo: string;
  colorClass: string;
  trending?: boolean;
}

const LanguageCard = ({
  id,
  name,
  description,
  difficulty,
  category,
  popularity,
  logo,
  colorClass,
  trending = false,
}: LanguageCardProps) => {
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Advanced":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-muted";
    }
  };

  return (
    <Card className="group relative overflow-hidden hover-lift soft-card transition-all duration-300 hover:shadow-xl hover:border-primary/30">
      {trending && (
        <div className="absolute top-2 right-2 z-10">
          <Badge variant="secondary" className="flex items-center space-x-1 bg-primary/20 text-primary border-primary/30">
            <TrendingUp className="w-3 h-3" />
            <span>Trending</span>
          </Badge>
        </div>
      )}
      
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center text-2xl font-bold text-background", colorClass)}>
              {logo}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{name}</h3>
              <Badge variant="outline" className="text-xs">
                {category}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <Badge className={getDifficultyColor(difficulty)}>
            {difficulty}
          </Badge>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{popularity}/5</span>
          </div>
        </div>

        <Button 
          asChild 
          className="w-full group/button transition-all duration-300 hover:soft-glow rounded-xl"
          variant="default"
        >
          <Link to={`/language/${id}`} className="flex items-center justify-center space-x-2">
            <span>Learn {name}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/button:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default LanguageCard;