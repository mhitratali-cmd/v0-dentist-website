# Figures Animation Implementation

This document tracks the implementation of the counting figures animation and the associated visual audits.

## Counting Animation Details
- **Component**: `CountUp`
- **Logic**: Uses `framer-motion` to animate from 0 to target value.
- **Trigger**: `whileInView` with `viewport={{ once: true }}`.
- **Handling**: Splits numeric value from suffixes like `+` or `%`.

## Visual Audit Checklist
- [ ] Hero stats count up on scroll.
- [ ] About overlay card stats count up on scroll.
- [ ] Mobile performance check (no lag).
- [ ] Layout stability (no shifts during animation).
- [ ] Hover states for buttons feel premium.
- [ ] Trust badge shimmer effect implemented.
