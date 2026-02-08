"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Sparkles, Shield, Smile, Heart, Stethoscope, Clock } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description:
      "Veneers, whitening, and smile makeovers crafted to enhance your natural beauty with precision artistry.",
  },
  {
    icon: Shield,
    title: "Preventive Care",
    description:
      "Comprehensive cleanings, exams, and early detection to keep your oral health in peak condition.",
  },
  {
    icon: Smile,
    title: "Orthodontics",
    description:
      "Invisible aligners and modern braces for a straighter smile, designed for comfort and discretion.",
  },
  {
    icon: Heart,
    title: "Restorative",
    description:
      "Crowns, implants, and bridges that restore function and beauty with natural-looking results.",
  },
  {
    icon: Stethoscope,
    title: "Oral Surgery",
    description:
      "Gentle extractions and advanced surgical procedures with sedation options for total comfort.",
  },
  {
    icon: Clock,
    title: "Emergency Care",
    description:
      "Same-day appointments for urgent dental needs. Your comfort and safety are our top priority.",
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Our Services
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            Comprehensive dental care,
            <br className="hidden sm:block" />
            tailored to you
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            From routine checkups to complete smile transformations, every
            treatment is delivered with meticulous attention and genuine care.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-8 transition-all duration-500 hover:border-primary/30 hover:bg-card hover:shadow-lg hover:shadow-primary/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-500 group-hover:bg-primary/20">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-primary transition-all duration-300 hover:gap-2"
                >
                  Learn more
                  <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
