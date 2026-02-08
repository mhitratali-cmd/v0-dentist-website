"use client"

import { ArrowRight, Star } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden animated-gradient">
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute top-1/2 -left-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-1/4 h-64 w-64 rounded-full bg-primary/3 blur-3xl animate-float" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
        {/* Trust badge */}
        <div className="animate-fade-in mb-8 flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur-sm px-5 py-2.5">
          <div className="flex -space-x-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-accent text-accent"
              />
            ))}
          </div>
          <span className="text-sm font-medium text-muted-foreground">
            Trusted by 2,000+ patients
          </span>
        </div>

        {/* Heading */}
        <h1 className="animate-fade-in-up font-serif text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl text-balance">
          Your smile deserves
          <br />
          <span className="text-primary">exceptional care</span>
        </h1>

        {/* Subheading */}
        <p
          className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          style={{ animationDelay: "0.15s" }}
        >
          Where modern dental science meets genuine compassion. We craft confident
          smiles with personalized treatments in a calming, luxurious environment.
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-in-up mt-10 flex flex-col items-center gap-4 sm:flex-row"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:gap-3 hover:opacity-90 animate-pulse-glow"
          >
            Book Your Visit
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
          <a
            href="#services"
            className="rounded-full border border-border bg-card/60 backdrop-blur-sm px-8 py-4 text-base font-semibold text-foreground transition-all duration-300 hover:bg-card"
          >
            Explore Services
          </a>
        </div>

        {/* Stats */}
        <div
          className="animate-fade-in-up mt-16 grid grid-cols-3 gap-8 md:gap-16"
          style={{ animationDelay: "0.45s" }}
        >
          {[
            { value: "15+", label: "Years Experience" },
            { value: "2,000+", label: "Happy Patients" },
            { value: "98%", label: "Satisfaction Rate" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl font-bold text-primary md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
