
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ThankYou from "./pages/ThankYou";
import EventRegistration from "./pages/Event-Registration";
import EventThankYou from "./pages/EventThankYou";
import Test from "./pages/Test";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/event-registration" element={<EventRegistration />} />
          <Route path="/event-thank-you" element={<EventThankYou />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
