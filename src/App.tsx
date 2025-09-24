import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import PageTransition from "./components/PageTransition";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Learn from "./pages/Learn";
import Quiz from "./pages/Quiz";
import Emergency from "./pages/Emergency";
import Contacts from "./pages/Contacts";
import Admin from "./pages/Admin";
import VirtualDrills from "./pages/VirtualDrills";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={
            <PageTransition>
              <Index />
            </PageTransition>
          } />
          <Route path="/dashboard" element={
            <PageTransition>
              <Dashboard />
            </PageTransition>
          } />
          <Route path="/learn" element={
            <PageTransition>
              <Learn />
            </PageTransition>
          } />
          <Route path="/learn/:moduleId" element={
            <PageTransition>
              <Learn />
            </PageTransition>
          } />
          <Route path="/quiz" element={
            <PageTransition>
              <Quiz />
            </PageTransition>
          } />
          <Route path="/emergency" element={
            <PageTransition>
              <Emergency />
            </PageTransition>
          } />
          <Route path="/contacts" element={
            <PageTransition>
              <Contacts />
            </PageTransition>
          } />
          <Route path="/admin" element={
            <PageTransition>
              <Admin />
            </PageTransition>
          } />
          <Route path="/drills" element={
            <PageTransition>
              <VirtualDrills />
            </PageTransition>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
