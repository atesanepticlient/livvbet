import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap uppercase text-white text-xs md:text-sm  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-primary text-white hover:bg-primary/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        primary:
          "relative flex items-center justify-start  cursor-pointer    leading-[22px] box-border transition-all duration-300 ease-in-out shadow-[inset_0_50px_25px_-25px_hsl(205,59%,51%)] bg-[hsl(206,83%,33%)] hover:shadow-[inset_0_-1.21429em_hsl(206,83%,33%)]",
        secondary:
          "relative flex items-center justify-start  cursor-pointer   leading-[22px] box-border transition-all duration-300 ease-in-out shadow-[inset_0_50px_25px_-25px_#93c738] bg-[#658726] hover:shadow-[inset_0_-1.21429em_#658726]",

        ghost:
          "relative flex items-center justify-center text-center bg-[#7daa2f] cursor-pointer overflow-hidden z-10 before:content-[''] before:absolute before:h-[150%] before:w-full before:left-0 before:top-[calc(100%-0.4rem)] before:bg-[#557321] before:transition-transform before:duration-200 before:ease-in-out hover:before:translate-y-[-90%] before:z-[-1]",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-8 md:h-10 px-2 md:px-3 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
