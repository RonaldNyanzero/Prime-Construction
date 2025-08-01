import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Plus, Filter, Calendar, MapPin, Phone } from "lucide-react";

const OrderManagement = () => {
  const orders = [
    {
      id: "ORD-001",
      customer: "Metro Construction Ltd",
      contact: "+353 1 234 5678",
      product: "Ready Mix Concrete C25",
      quantity: "50 m³",
      value: "€4,250",
      status: "In Production",
      priority: "High",
      orderDate: "2024-01-15",
      deliveryDate: "2024-01-17",
      location: "Dublin City Centre",
      progress: 75
    },
    {
      id: "ORD-002",
      customer: "BuildRight Solutions",
      contact: "+353 1 876 5432",
      product: "Precast Concrete Panels",
      quantity: "24 units",
      value: "€4,320",
      status: "Ready",
      priority: "Medium",
      orderDate: "2024-01-14",
      deliveryDate: "2024-01-16",
      location: "Cork Industrial Estate",
      progress: 100
    },
    {
      id: "ORD-003",
      customer: "City Infrastructure Group",
      contact: "+353 21 345 6789",
      product: "High Strength Concrete C40",
      quantity: "100 m³",
      value: "€12,000",
      status: "Scheduled",
      priority: "Low",
      orderDate: "2024-01-16",
      deliveryDate: "2024-01-22",
      location: "Galway Business Park",
      progress: 25
    },
    {
      id: "ORD-004",
      customer: "Heritage Restoration Co",
      contact: "+353 61 987 6543",
      product: "Fiber Reinforced Concrete",
      quantity: "30 m³",
      value: "€3,300",
      status: "Pending",
      priority: "High",
      orderDate: "2024-01-16",
      deliveryDate: "2024-01-18",
      location: "Limerick Historic District",
      progress: 0
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ready": return "success";
      case "In Production": return "warning";
      case "Scheduled": return "secondary";
      case "Pending": return "destructive";
      default: return "secondary";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "destructive";
      case "Medium": return "warning";
      case "Low": return "secondary";
      default: return "secondary";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Order Management</h1>
          <p className="text-muted-foreground mt-2">Track and manage all concrete orders</p>
        </div>
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Plus className="w-4 h-4 mr-2" />
          New Order
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input 
            placeholder="Search orders, customers..." 
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Calendar className="w-4 h-4 mr-2" />
            Date Range
          </Button>
        </div>
      </div>

      {/* Orders Grid */}
      <div className="grid gap-6">
        {orders.map((order) => (
          <Card key={order.id} className="border-border">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <CardTitle className="text-xl text-foreground">{order.id}</CardTitle>
                    <Badge variant={getStatusColor(order.status) as "default"}>
                      {order.status}
                    </Badge>
                    <Badge variant={getPriorityColor(order.priority) as "default"}>
                      {order.priority} Priority
                    </Badge>
                  </div>
                  <CardDescription className="flex items-center gap-4">
                    <span className="font-medium">{order.customer}</span>
                    <span className="flex items-center gap-1">
                      <Phone className="w-3 h-3" />
                      {order.contact}
                    </span>
                  </CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-foreground">{order.value}</div>
                  <div className="text-sm text-muted-foreground">Order Value</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Product Details */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Product Details</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Product:</span>
                      <span className="font-medium text-foreground">{order.product}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Quantity:</span>
                      <span className="font-medium text-foreground">{order.quantity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Order Date:</span>
                      <span className="font-medium text-foreground">{order.orderDate}</span>
                    </div>
                  </div>
                </div>

                {/* Delivery Info */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Delivery Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
                      <span className="text-foreground">{order.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-foreground">{order.deliveryDate}</span>
                    </div>
                  </div>
                </div>

                {/* Progress */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Progress</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Completion</span>
                      <span className="font-medium text-foreground">{order.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-accent h-2 rounded-full transition-all duration-300"
                        style={{ width: `${order.progress}%` }}
                      />
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                      <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        Update Status
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OrderManagement;