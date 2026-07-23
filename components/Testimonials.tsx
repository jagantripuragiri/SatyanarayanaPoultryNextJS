"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    quote:
      "We've been buying from Satyanarayana Poultry Farm for over two years. The chicken is always fresh and the pricing is fair.",
    name: "Ramesh Kumar",
    role: "Local Retailer, Vizianagaram",
  },
  {
    quote:
      "Reliable wholesale supply for our restaurant. Deliveries are always on time and the quality is consistent.",
    name: "Lakshmi Prasad",
    role: "Restaurant Owner",
  },
  {
    quote:
      "Visited the farm myself and was impressed by how clean and well-managed it is. Ethical farming you can actually see.",
    name: "Suresh Naidu",
    role: "Regular Customer",
  },
  {
    quote:
      "Ordering online is so convenient, and the chicken arrives fresh every single time. Great service from start to finish.",
    name: "Anitha Reddy",
    role: "Home Chef",
  },
  {
    quote:
      "As a hotel supplier, consistency matters most. Satyanarayana Poultry has never let us down on quality or timing.",
    name: "Venkata Rao",
    role: "Hotel Procurement Manager",
  },
  {
    quote:
      "I've sourced chicken from many farms over the years, but the freshness and fair weight here is unmatched. My stall's regulars notice the difference.",
    name: "Krishna Murthy",
    role: "Market Vendor",
  },
  {
    quote:
      "Ordered in bulk for a family function and everything was handled smoothly, from booking to delivery. Will definitely come back for the next event.",
    name: "Padma Devi",
    role: "Event Organizer",
  },
];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const isInViewportRef = useRef(false);

  // Reveal the carousel once it scrolls into view, and keep tracking whether
  // the section is on screen so autoplay never yanks the page down to a
  // section the user hasn't scrolled to yet.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isInViewportRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Track which card is centered in the scroll container. IntersectionObserver
  // callbacks only report entries whose ratio changed since the last check, not
  // every observed element — so ratios are accumulated across callbacks and the
  // active card is picked from the full accumulated state, not just this batch.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const ratios = new Map<number, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const index = Number((entry.target as HTMLElement).dataset.index);
          ratios.set(index, entry.intersectionRatio);
        }
        let bestIndex = -1;
        let bestRatio = 0.5;
        ratios.forEach((ratio, index) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestIndex = index;
          }
        });
        if (bestIndex !== -1) {
          setActiveIndex(bestIndex);
        }
      },
      { root: track, threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const goTo = useCallback((index: number) => {
    const next = (index + TESTIMONIALS.length) % TESTIMONIALS.length;
    cardRefs.current[next]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, []);

  // Autoplay, paused on hover/focus, while off-screen, and for users who
  // prefer reduced motion.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (!isPausedRef.current && isInViewportRef.current) {
        goTo(activeIndex + 1);
      }
    }, 5000);
    return () => clearInterval(id);
  }, [activeIndex, goTo]);

  return (
    <section
      id="testimonials"
      className="bg-card py-[50px] px-5 md:py-20 md:px-[60px] overflow-hidden"
      onMouseEnter={() => (isPausedRef.current = true)}
      onMouseLeave={() => (isPausedRef.current = false)}
    >
      <div
        ref={sectionRef}
        className={cn(
          "mx-auto max-w-[1100px] transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )}
      >
        <h2 className="section-title">What Our Customers Say</h2>

        <div
          className="relative"
          onFocus={() => (isPausedRef.current = true)}
          onBlur={() => (isPausedRef.current = false)}
        >
          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-[9%] sm:px-[calc(50%-200px)] lg:px-[calc(50%-230px)] py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.name}
                data-index={i}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className={cn(
                  "snap-center shrink-0 w-[82%] sm:w-[400px] lg:w-[460px] rounded-lg p-8",
                  "bg-muted transition-all duration-500 ease-out",
                  i === activeIndex
                    ? "scale-100 opacity-100 border-2 border-accent shadow-xl"
                    : "scale-90 opacity-50 border border-border shadow-sm"
                )}
              >
                <div
                  className="mb-3 text-[var(--clr-accent-dark)]"
                  aria-hidden="true"
                >
                  ★★★★★
                </div>
                <p className="italic text-foreground mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="font-semibold text-primary">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-card text-primary shadow-md transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-card text-primary shadow-md transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial from ${t.name}`}
              aria-current={i === activeIndex}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                i === activeIndex ? "w-6 bg-primary" : "w-2.5 bg-border"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
