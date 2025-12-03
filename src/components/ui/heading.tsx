import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const headingVariants = cva("font-bold capitalize text-text", {
  variants: {
    variant: {
      h1: "text-[44px] sm:text-[64px] leading-[130%]",
      h2: "text-3xl md:text-[44px] leading-[130%]",
      h3: "text-xl md:text-2xl leading-tight",
      h4: "text-lg md:text-xl leading-tight",
      h5: "text-md md:text-lg leading-tight",
      h6: "text-md leading-tight",
    },
   color: {
     primary: "text-primary",
      default: "text-foreground",
      background: "text-background",
      secondary: "text-secondary",
      muted: "text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "h2",
    color: "default",
  },
});

export interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "color">,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Heading = ({
  className,
  variant,
  color,
  as: Component = "h2",
  children,
  ...props
}: HeadingProps) => {
  return (
    <Component
      className={cn(headingVariants({ variant, color, className }))}
      {...props}
    >
      {children}
    </Component>
  );
};
