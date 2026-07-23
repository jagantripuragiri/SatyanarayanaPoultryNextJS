import { FeatureGrid, type Feature } from "@/components/ui/feature-grid";

const SERVICES: Feature[] = [
  {
    imageSrc: "/images/our-services/hen.png",
    imageAlt: "Illustration of a broiler chicken",
    title: "Broiler Chicken Supply",
    description:
      "Healthy and well-maintained broiler chickens raised with care.",
  },
  {
    imageSrc: "/images/our-services/delivery.png",
    imageAlt: "Illustration of a delivery rider",
    title: "Online Delivery",
    description:
      "We supply fresh poultry products with convenient online delivery.",
  },
  {
    imageSrc: "/images/our-services/box.png",
    imageAlt: "Illustration of a wholesale supply box",
    title: "Wholesale Supply",
    description: "Bulk poultry supply for markets, hotels, and businesses.",
  },
  {
    imageSrc: "/images/our-services/farm.png",
    imageAlt: "Illustration of the poultry farm",
    title: "Farm Consultation",
    description:
      "Visit our farm and experience our ethical farming practices first-hand.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-background py-[50px] px-5 md:py-20 md:px-[60px]"
    >
      <div className="mx-auto max-w-[1100px]">
        <h2 className="section-title">Our Services</h2>
        <FeatureGrid features={SERVICES} layout="column" />
      </div>
    </section>
  );
}
