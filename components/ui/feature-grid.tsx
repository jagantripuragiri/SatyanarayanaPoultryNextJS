import * as React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Feature {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  href?: string;
}

export interface FeatureGridProps {
  features: Feature[];
  className?: string;
  /** "row" (default): image beside text, 2-up grid. "column": image above centered text, 4-up grid. */
  layout?: "row" | "column";
}

const FeatureCard: React.FC<{ feature: Feature; layout: "row" | "column" }> = ({
  feature,
  layout,
}) => {
  const Tag = feature.href ? "a" : "div";
  const isColumn = layout === "column";

  return (
    <Tag
      href={feature.href}
      className={cn(
        "group relative overflow-hidden",
        isColumn
          ? "flex flex-col items-center text-center gap-5 min-h-[300px]"
          : "flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6",
        isColumn ? "p-8" : "p-6",
        "rounded-lg border border-border",
        "bg-card text-card-foreground",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/30",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0",
          "bg-gradient-to-br from-accent/10 via-transparent to-transparent",
          "transition-opacity duration-300 group-hover:opacity-100"
        )}
      />

      <div
        className={cn(
          "relative flex-shrink-0 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-2",
          isColumn ? "h-28 w-28 sm:h-32 sm:w-32" : "h-20 w-20 sm:h-24 sm:w-24"
        )}
      >
        <Image
          src={feature.imageSrc}
          alt={feature.imageAlt}
          fill
          sizes={isColumn ? "128px" : "96px"}
          className="object-contain drop-shadow-sm"
        />
      </div>

      <div className="relative flex flex-1 flex-col justify-between h-full">
        <div>
          <h3
            className={cn(
              "font-semibold text-foreground mb-1 transition-colors duration-300 group-hover:text-primary",
              isColumn ? "text-xl" : "text-lg"
            )}
          >
            {feature.title}
          </h3>
          <p className={cn("text-muted-foreground", isColumn ? "text-base" : "text-sm")}>
            {feature.description}
          </p>
        </div>
        {feature.href && (
          <div className={cn("flex mt-4", isColumn ? "justify-center" : "justify-center sm:justify-end")}>
            <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
          </div>
        )}
      </div>
    </Tag>
  );
};

const FeatureGrid = React.forwardRef<HTMLDivElement, FeatureGridProps>(
  ({ features, className, layout = "row" }, ref) => {
    if (!features || features.length === 0) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={cn(
          "grid grid-cols-1 gap-6",
          layout === "column" ? "sm:grid-cols-2 lg:grid-cols-4" : "lg:grid-cols-2",
          className
        )}
      >
        {features.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} layout={layout} />
        ))}
      </div>
    );
  }
);
FeatureGrid.displayName = "FeatureGrid";

export { FeatureGrid };
