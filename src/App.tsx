import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import Yoga from "./pages/Yoga";
import Meditation from "./pages/Meditation";
import Emergency from "./pages/Emergency";
import NotFound from "./pages/NotFound";
import EarlyDetection from "./pages/EarlyDetection";
import VitalBuddy from "./pages/VitalBuddy";
import Pregnancy from "./pages/Pregnancy";
import BloodDonor from "./pages/BloodDonor";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vitalbuddy" element={<VitalBuddy />} />
            <Route path="/pregnancy" element={<Pregnancy />} />
            <Route path="/blood-donor" element={<BloodDonor />} />
            <Route path="/yoga" element={<Yoga />} />
            <Route path="/meditation" element={<Meditation />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/early-detection" element={<EarlyDetection />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
