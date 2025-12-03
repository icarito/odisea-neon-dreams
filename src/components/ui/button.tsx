import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-orbitron uppercase tracking-wider",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] rounded-md",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-md",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary/10 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] rounded-md",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md",
        ghost: "hover:bg-accent/10 hover:text-accent-foreground rounded-md",
        link: "text-primary underline-offset-4 hover:underline",
        neonCyan: "border-2 border-primary bg-transparent text-primary hover:bg-primary/10 hover:shadow-[0_0_30px_hsl(var(--primary)/0.5),inset_0_0_20px_hsl(var(--primary)/0.1)] rounded-md",
        neonOrange: "border-2 border-accent bg-transparent text-accent hover:bg-accent/10 hover:shadow-[0_0_30px_hsl(var(--accent)/0.5),inset_0_0_20px_hsl(var(--accent)/0.1)] rounded-md",
        hero: "bg-gradient-to-r from-primary to-neon-blue text-primary-foreground font-bold hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)] hover:scale-105 rounded-md",
        cta: "bg-accent text-accent-foreground font-bold hover:shadow-[0_0_40px_hsl(var(--accent)/0.6)] hover:scale-105 rounded-md",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 px-4",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
