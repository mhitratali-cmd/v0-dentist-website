"use client"

import { useEffect, useState, useRef } from "react"
import { useInView, useMotionValue, useSpring } from "framer-motion"

interface CountUpProps {
    to: number
    duration?: number
    suffix?: string
    className?: string
}

export function CountUp({ to, duration = 2, suffix = "", className = "" }: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const count = useMotionValue(0)
    const spring = useSpring(count, { duration: duration * 1000, bounce: 0 })
    const [displayValue, setDisplayValue] = useState(0)

    useEffect(() => {
        if (isInView) {
            count.set(to)
        }
    }, [isInView, to, count])

    useEffect(() => {
        return spring.onChange((latest) => {
            setDisplayValue(Math.round(latest))
        })
    }, [spring])

    return (
        <span ref={ref} className={className}>
            {displayValue}
            {suffix}
        </span>
    )
}
