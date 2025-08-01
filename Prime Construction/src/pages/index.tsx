import { useState } from "react";
import Layout from "@/components/Layout";
import Dashboard from "@/components/Dashboard";
import ProductCatalog from "@/components/ProductCatalog";
import OrderManagement from "@/components/OrderManagement";

const Index = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />;
      case "products":
        return <ProductCatalog />;
      case "orders":
        return <OrderManagement />;
      case "customers":
        return <div className="text-center py-12 text-muted-foreground">Customer Management - Coming Soon</div>;
      case "projects":
        return <div className="text-center py-12 text-muted-foreground">Project Management - Coming Soon</div>;
      case "deliveries":
        return <div className="text-center py-12 text-muted-foreground">Delivery Management - Coming Soon</div>;
      case "settings":
        return <div className="text-center py-12 text-muted-foreground">Settings - Coming Soon</div>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
};

export default Index;
