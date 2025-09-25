import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import LanguageCard from "@/components/LanguageCard";
import { languages } from "@/data/languages";
import { Search, Filter, Grid, List } from "lucide-react";

const Languages = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = ["All", ...new Set(languages.map(lang => lang.category))];
  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredLanguages = languages.filter(language => {
    const matchesSearch = language.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         language.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || language.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "All" || language.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <ScrollReveal>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text leading-tight">
                Programming Languages
              </h1>
            </ScrollReveal>
            <ScrollReveal delayClassName="reveal-delay-1">
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Explore our comprehensive collection of programming languages. 
                Find the perfect language for your next project or learning journey with our interactive guides and tutorials.
              </p>
            </ScrollReveal>
          </div>

          {/* Filters and Search */}
          <ScrollReveal>
            <div className="mb-12 space-y-6">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                <div className="relative flex-1 max-w-lg">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    placeholder="Search languages..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 h-12 text-base rounded-2xl border-border/50 bg-background/80 backdrop-blur-sm smooth-focus"
                  />
                </div>
                
                <div className="flex items-center space-x-3">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-xl"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-xl"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-3 items-center">
                <div className="flex items-center space-x-3">
                  <Filter className="w-5 h-5 text-muted-foreground" />
                  <span className="text-base font-medium text-muted-foreground">Categories:</span>
                </div>
                {categories.map(category => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary/10 transition-all duration-300 px-4 py-2 text-sm rounded-xl"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>

              {/* Difficulty Filters */}
              <div className="flex flex-wrap gap-3 items-center">
                <div className="flex items-center space-x-3">
                  <span className="text-base font-medium text-muted-foreground">Difficulty:</span>
                </div>
                {difficulties.map(difficulty => (
                  <Badge
                    key={difficulty}
                    variant={selectedDifficulty === difficulty ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary/10 transition-all duration-300 px-4 py-2 text-sm rounded-xl"
                    onClick={() => setSelectedDifficulty(difficulty)}
                  >
                    {difficulty}
                  </Badge>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Results Count */}
          <ScrollReveal>
            <div className="mb-8">
              <p className="text-lg text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{filteredLanguages.length}</span> of <span className="font-semibold text-foreground">{languages.length}</span> languages
              </p>
            </div>
          </ScrollReveal>

          {/* Languages Grid/List */}
          <div className={
            viewMode === "grid" 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-6"
          }>
            {filteredLanguages.map((language, idx) => (
              <ScrollReveal key={language.id} delayClassName={`reveal-delay-${(idx % 3) + 1}`}>
                <LanguageCard 
                  {...language} 
                />
              </ScrollReveal>
            ))}
          </div>

          {/* No Results */}
          {filteredLanguages.length === 0 && (
            <ScrollReveal>
              <div className="text-center py-20">
                <div className="w-24 h-24 mx-auto mb-8 bg-muted/50 rounded-3xl flex items-center justify-center">
                  <Search className="w-12 h-12 text-muted-foreground" />
                </div>
                <h3 className="text-3xl font-bold mb-4">No languages found</h3>
                <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
                  Try adjusting your search criteria or filters to find what you're looking for.
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                    setSelectedDifficulty("All");
                  }}
                  variant="soft"
                  size="lg"
                  className="px-8"
                >
                  Clear All Filters
                </Button>
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Languages;