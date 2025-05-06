
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Gamification from "./pages/Gamification";
import NotFound from "./pages/NotFound";
import AnimatedCursor from "./components/AnimatedCursor";
import GreenCare from "./pages/GreenCare";

// Create a new query client
const queryClient = new QueryClient();

// Add dark mode class to document
document.documentElement.classList.add('dark');

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AnimatedCursor />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gamification" element={<Gamification />} />
          <Route path="/greencare" element={<GreenCare />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
