import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingInvoiceCard from "./FloatingInvoiceCard";
import logo from "@/assets/invoicemonk-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-primary/3 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/50 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Navigation */}
      <nav className="relative z-10 max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Invoicemonk" className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</a>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">Log in</Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="animation-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/10 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-accent-foreground">Now with AI-powered insights</span>
            </div>

            {/* Headline */}
            <h1 className="animation-fade-in-up-delay-1 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
              Invoicing that{" "}
              <span className="text-gradient">gets you paid</span>{" "}
              faster
            </h1>

            {/* Subheadline */}
            <p className="animation-fade-in-up-delay-2 text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
              Create beautiful invoices in seconds, automate payment reminders, and get real-time insights into your cash flow. All in one place.
            </p>

            {/* CTA Buttons */}
            <div className="animation-fade-in-up-delay-3 flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Start free trial
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="hero-outline" size="xl">
                See how it works
              </Button>
            </div>

            {/* Social Proof */}
            <div className="animation-fade-in-up-delay-3 mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-xs font-medium text-muted-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Loved by <span className="font-semibold text-foreground">10,000+</span> businesses
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Floating Cards */}
          <div className="relative hidden lg:block h-[500px]">
            {/* Main invoice mockup */}
            <div className="animation-slide-in-right absolute top-8 left-8 w-[320px]">
              <div className="card-floating p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Invoice</p>
                    <p className="text-lg font-bold text-foreground">#INV-1247</p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                    Paid
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {[
                    { item: "Website Design", amount: "$1,200" },
                    { item: "Development", amount: "$2,400" },
                    { item: "Consulting", amount: "$600" },
                  ].map((line, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-border/50">
                      <span className="text-sm text-muted-foreground">{line.item}</span>
                      <span className="text-sm font-medium text-foreground">{line.amount}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <span className="font-semibold text-foreground">Total</span>
                  <span className="text-2xl font-bold text-primary">$4,200</span>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <FloatingInvoiceCard 
              variant="paid" 
              className="absolute top-0 right-0 animate-float" 
            />
            <FloatingInvoiceCard 
              variant="pending" 
              className="absolute bottom-24 left-0 animate-float-delayed" 
            />
            <FloatingInvoiceCard 
              variant="amount" 
              className="absolute bottom-0 right-8 animate-float-slow" 
            />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;