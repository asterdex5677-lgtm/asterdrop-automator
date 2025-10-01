import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ClaimDashboard } from "@/components/ClaimDashboard";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <ClaimDashboard />
      <Footer />
    </main>
  );
};

export default Index;
