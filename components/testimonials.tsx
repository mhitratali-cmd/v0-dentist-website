"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    name: "Sarah Mitchell",
    role: "Cosmetic Patient",
    text: "Luminance completely transformed my smile. The entire team made me feel at ease from start to finish. I finally feel confident smiling in photos.",
    rating: 5,
  },
  {
    name: "James Park",
    role: "Implant Patient",
    text: "After years of avoiding the dentist, I found Luminance. The sedation options and gentle approach made my implant procedure stress-free. Truly life-changing.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Orthodontic Patient",
    text: "My invisible aligners were fitted perfectly. The check-ins were always on time, and the results exceeded my expectations. Highly recommend.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Family Patient",
    text: "Our whole family goes here. The kids love it, the staff remembers our names, and the office is absolutely beautiful. This is what dental care should be.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Testimonials
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            Hear from our patients
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Real stories from real people who trusted us with their smiles.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, i) => (
            <ScrollReveal key={review.name} delay={i * 100}>
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <Quote className="h-8 w-8 text-primary/20" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {`"${review.text}"`}
                </p>
                <div className="mt-6 flex items-center gap-1">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star
                      key={j}
                      className="h-3.5 w-3.5 fill-accent text-accent"
                    />
                  ))}
                </div>
                <div className="mt-3 border-t border-border pt-3">
                  <p className="font-serif text-sm font-semibold text-foreground">
                    {review.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Marquee trust bar */}
      <div className="mt-20 border-y border-border bg-secondary/40 py-4 overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-12">
          {[
            "ADA Member",
            "5-Star Google Rating",
            "Invisalign Certified",
            "Same-Day Crowns",
            "Digital X-Rays",
            "Sedation Dentistry",
            "ADA Member",
            "5-Star Google Rating",
            "Invisalign Certified",
            "Same-Day Crowns",
            "Digital X-Rays",
            "Sedation Dentistry",
          ].map((item, i) => (
            <span
              key={i}
              className="whitespace-nowrap text-sm font-medium uppercase tracking-widest text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
