import { ScrollReveal } from "@/components/scroll-reveal"

const footerLinks = {
  Services: [
    "Cosmetic Dentistry",
    "Preventive Care",
    "Orthodontics",
    "Restorative",
    "Oral Surgery",
    "Emergency Care",
  ],
  Company: ["About Us", "Our Team", "Careers", "Blog"],
  Support: ["FAQs", "Insurance", "Patient Portal", "Privacy Policy"],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground py-16 text-background">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
                  <span className="font-serif text-sm font-bold text-primary-foreground">
                    L
                  </span>
                </div>
                <span className="font-serif text-xl font-semibold tracking-tight">
                  Luminance
                </span>
              </div>
              <p className="mt-4 max-w-xs text-sm leading-relaxed opacity-60">
                Premium dental care with a personal touch. Serving families in
                San Francisco since 2010.
              </p>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="text-sm font-semibold uppercase tracking-wider opacity-40">
                  {heading}
                </h4>
                <ul className="mt-4 flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm opacity-60 transition-opacity duration-300 hover:opacity-100"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 md:flex-row">
          <p className="text-xs opacity-40">
            2026 Luminance Dental. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Accessibility"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs opacity-40 transition-opacity hover:opacity-100"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
