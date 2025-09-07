import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WebDevelopmentPricing from "./pages/WebDevelopmentPricing";
import MobileAppPricing from "./pages/MobileAppPricing";
import SoftwareSolutionsPricing from "./pages/SoftwareSolutionsPricing";
import Devis from "./pages/Devis"; // ✅ Import the Devis page

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/web-development-pricing" element={<WebDevelopmentPricing />} />
          <Route path="/mobile-app-pricing" element={<MobileAppPricing />} />
          <Route path="/software-solutions-pricing" element={<SoftwareSolutionsPricing />} />
          <Route path="/devis" element={<Devis />} /> {/* ✅ Add Devis route */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
