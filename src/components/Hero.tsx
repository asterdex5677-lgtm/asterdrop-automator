import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { LazyReveal } from "@/components/LazyReveal";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          {/* Badge */}
          <LazyReveal delay={0}>
            <div className="glass-card px-4 py-2 rounded-full">
              <p className="text-sm font-medium text-muted-foreground">
                🚀 Automated Airdrop Claiming for AsterDex
              </p>
            </div>
          </LazyReveal>

          {/* Heading */}
          <LazyReveal delay={100}>
            <div className="space-y-4 max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Never Miss an{" "}
                <span className="gradient-text">Airdrop</span>
                {" "}Again
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Automate your AsterDex airdrop claims with AsterDrop. Secure, fast, and effortless token collection.
              </p>
            </div>
          </LazyReveal>

          {/* CTA Buttons */}
          <LazyReveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-base">
                <Zap className="mr-2" />
                Connect Wallet
              </Button>
              <Button variant="glass" size="lg" className="text-base">
                Learn More
              </Button>
            </div>
          </LazyReveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
