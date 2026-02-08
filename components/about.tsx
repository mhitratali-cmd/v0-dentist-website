"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Award, Users, Leaf, ShieldCheck } from "lucide-react"

const values = [
  {
    icon: Award,
    title: "Excellence",
    text: "Board-certified specialists using the latest evidence-based techniques.",
  },
  {
    icon: Users,
    title: "Patient-First",
    text: "Every treatment plan is built around your comfort, goals, and timeline.",
  },
  {
    icon: Leaf,
    title: "Holistic Approach",
    text: "We treat the whole person, integrating wellness into every dental decision.",
  },
  {
    icon: ShieldCheck,
    title: "Transparency",
    text: "Clear pricing, honest recommendations, and no surprise fees. Ever.",
  },
]

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: Image placeholder with decorative frame */}
          <ScrollReveal>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-muted">
                <img
                  src="/images/dental-office.jpg"
                  alt="Modern dental office interior with calming atmosphere"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Floating card overlay */}
              <div className="absolute -bottom-6 -right-4 rounded-2xl border border-border bg-card p-5 shadow-xl md:-right-8">
                <p className="font-serif text-3xl font-bold text-primary">15+</p>
                <p className="text-sm font-medium text-muted-foreground">
                  Years of trusted care
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Copy */}
          <div>
            <ScrollReveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                About Us
              </p>
              <h2 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
                Where science meets
                <br className="hidden sm:block" />
                genuine compassion
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Founded with a vision to redefine dental care, Luminance Dental
                combines cutting-edge technology with a warm, patient-centered
                philosophy. Our team believes that every visit should feel less
                like a clinical appointment and more like a step toward a
                healthier, more confident you.
              </p>
            </ScrollReveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {values.map((v, i) => (
                <ScrollReveal key={v.title} delay={i * 100}>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <v.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-base font-semibold text-foreground">
                        {v.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {v.text}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
