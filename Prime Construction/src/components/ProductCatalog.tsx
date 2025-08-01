import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Package, Zap, Shield, Building } from "lucide-react";
import { Input } from "@/components/ui/input";

const ProductCatalog = () => {
  const products = [
    {
      id: "PROD-001",
      name: "Ready Mix Concrete C25",
      category: "Ready Mix",
      strength: "25 MPa",
      description: "Standard grade concrete suitable for most construction applications",
      price: "€85",
      unit: "per m³",
      icon: Package,
      features: ["Fast Setting", "Weather Resistant", "High Durability"],
      inStock: true
    },
    {
      id: "PROD-002",
      name: "High Strength Concrete C40",
      category: "Ready Mix",
      strength: "40 MPa",
      description: "High-performance concrete for demanding structural applications",
      price: "€120",
      unit: "per m³",
      icon: Zap,
      features: ["Superior Strength", "Low Permeability", "Chemical Resistant"],
      inStock: true
    },
    {
      id: "PROD-003",
      name: "Precast Concrete Panels",
      category: "Precast",
      strength: "35 MPa",
      description: "Factory-made concrete panels for efficient construction",
      price: "€180",
      unit: "per panel",
      icon: Building,
      features: ["Quality Controlled", "Fast Installation", "Architectural Finish"],
      inStock: false
    },
    {
      id: "PROD-004",
      name: "Fiber Reinforced Concrete",
      category: "Specialty",
      strength: "30 MPa",
      description: "Concrete with added fibers for enhanced crack resistance",
      price: "€110",
      unit: "per m³",
      icon: Shield,
      features: ["Crack Resistant", "Impact Resistant", "Flexible Application"],
      inStock: true
    },
    {
      id: "PROD-005",
      name: "Self-Compacting Concrete",
      category: "Specialty",
      strength: "28 MPa",
      description: "No-vibration concrete that flows and consolidates under its own weight",
      price: "€95",
      unit: "per m³",
      icon: Package,
      features: ["Self-Leveling", "Superior Finish", "Complex Geometries"],
      inStock: true
    },
    {
      id: "PROD-006",
      name: "Rapid Set Concrete",
      category: "Specialty",
      strength: "32 MPa",
      description: "Fast-setting concrete for urgent repairs and applications",
      price: "€150",
      unit: "per m³",
      icon: Zap,
      features: ["Rapid Setting", "Early Strength", "Emergency Repairs"],
      inStock: true
    }
  ];

  const categories = ["All", "Ready Mix", "Precast", "Specialty"];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Product Catalog</h1>
          <p className="text-muted-foreground mt-2">Browse our concrete products and solutions</p>
        </div>
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
          Add New Product
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input 
            placeholder="Search products..." 
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className={category === "All" ? "bg-primary hover:bg-primary/90" : ""}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <product.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-foreground">{product.name}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary">{product.category}</Badge>
                      <span className="text-sm text-muted-foreground">{product.strength}</span>
                    </div>
                  </div>
                </div>
                <Badge variant={product.inStock ? "success" : "destructive"}>
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="text-muted-foreground">
                {product.description}
              </CardDescription>
              
              <div className="flex flex-wrap gap-1">
                {product.features.map((feature, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {feature}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <span className="text-2xl font-bold text-foreground">{product.price}</span>
                  <span className="text-sm text-muted-foreground ml-1">{product.unit}</span>
                </div>
                <Button 
                  size="sm" 
                  disabled={!product.inStock}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground disabled:opacity-50"
                >
                  Add to Order
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;