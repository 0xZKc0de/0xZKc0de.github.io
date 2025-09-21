import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Terminal from "./pages/Terminal";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./components/DashboardLayout";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Terminal />} />
          <Route path="/terminal" element={<Terminal />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          } />
          
          {/* Protected Routes */}
          <Route path="/projects" element={
            <DashboardLayout>
              <Projects />
            </DashboardLayout>
          } />
          
          {/* Blog Routes */}
          <Route path="/blog" element={
            <DashboardLayout>
              <Blog />
            </DashboardLayout>
          } />

          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
