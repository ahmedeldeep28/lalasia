import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const textVariants = cva("text-base", {
  variants: {
    variant: {
      xl: "text-md sm:text-xl font-medium leading-relaxed",
      lg: "text-sm sm:text-lg font-medium leading-relaxed",
      md: "text-sm sm:text-base font-medium leading-relaxed",
      sm: "text-sm font-medium leading-relaxed",
      xs: "text-xs font-medium leading-relaxed",
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
    variant: "md",
    color: "default",
  },
});

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, "color">,
    VariantProps<typeof textVariants> {}

export const Text = ({
  className,
  variant,
  color = "default",
  children,
  ...props
}: TextProps) => {
  return (
    <p className={cn(textVariants({ variant, color, className }))} {...props}>
      {children}
    </p>
  );
};
