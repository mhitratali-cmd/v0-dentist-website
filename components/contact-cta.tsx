"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"

export function ContactCTA() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: Form */}
          <ScrollReveal>
            <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Get in Touch
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
                Ready to transform your smile?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Fill out the form below and our team will reach out within 24
                hours to schedule your visit.
              </p>

              <form className="mt-8 flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium text-foreground">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="Jane"
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium text-foreground">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="jane@example.com"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(555) 000-0000"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-foreground">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select a service</option>
                    <option value="cosmetic">Cosmetic Dentistry</option>
                    <option value="preventive">Preventive Care</option>
                    <option value="orthodontics">Orthodontics</option>
                    <option value="restorative">Restorative</option>
                    <option value="surgery">Oral Surgery</option>
                    <option value="emergency">Emergency Care</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="group mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:opacity-90 animate-pulse-glow"
                >
                  Request Appointment
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
              </form>
            </div>
          </ScrollReveal>

          {/* Right: Contact info */}
          <div className="flex flex-col justify-center gap-8">
            <ScrollReveal>
              <h3 className="font-serif text-2xl font-bold text-foreground">
                Visit our practice
              </h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                We welcome you to experience dental care reimagined. Walk in or
                schedule ahead - either way, you will feel the Luminance
                difference.
              </p>
            </ScrollReveal>

            <div className="flex flex-col gap-6">
              {[
                {
                  icon: MapPin,
                  label: "Location",
                  value: "123 Smile Avenue, Suite 200\nSan Francisco, CA 94102",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "(555) 123-4567",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "hello@luminancedental.com",
                },
                {
                  icon: Clock,
                  label: "Hours",
                  value: "Mon - Fri: 8am - 6pm\nSat: 9am - 2pm",
                },
              ].map((item, i) => (
                <ScrollReveal key={item.label} delay={i * 80}>
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                        {item.label}
                      </p>
                      <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-foreground">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Urgency nudge */}
            <ScrollReveal delay={400}>
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                <p className="font-serif text-lg font-semibold text-foreground">
                  Limited availability this month
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  New patient slots fill up quickly. Book now to secure your
                  preferred time and receive a complimentary consultation.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
