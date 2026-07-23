import { FeatureGrid, type Feature } from "@/components/ui/feature-grid";

const REASONS: Feature[] = [
  {
    imageSrc: "/images/why-us/hygienic-farming.png",
    imageAlt: "Illustration of a clean, well-kept farm",
    title: "Hygienic Farming",
    description:
      "Healthy poultry raised in clean, well-maintained conditions.",
  },
  {
    imageSrc: "/images/why-us/fair-pricing.png",
    imageAlt: "Illustration of cash and coins",
    title: "Fair Pricing",
    description:
      "Affordable rates with complete transparency, no hidden costs.",
  },
  {
    imageSrc: "/images/why-us/experienced-team.png",
    imageAlt: "Illustration of a team of farm workers",
    title: "Experienced Team",
    description: "Decades of hands-on farm management expertise.",
  },
  {
    imageSrc: "/images/why-us/trusted-by-vendors.png",
    imageAlt: "Illustration of a poultry delivery vendor",
    title: "Trusted by Vendors",
    description:
      "A proven track record with local markets and businesses.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="bg-background py-[50px] px-5 md:py-20 md:px-[60px]">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="section-title">Why Choose Us</h2>
        <FeatureGrid features={REASONS} />
      </div>
    </section>
  );
}
