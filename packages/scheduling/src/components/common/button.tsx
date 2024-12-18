import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from 'tailwind-merge'

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-[10px] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-[hsl(var(--theme-main1))] text-white hover:bg-[hsl(var(--theme-hover-purple))] disabled:bg-[hsl(var(--theme-light-purple))] disabled:text-white",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        authOutline: "border-2 border-white text-white hover:bg-white/10",
        login:
          "bg-[hsl(var(--theme-main1))] text-white hover:bg-[hsl(var(--theme-hover-purple))] disabled:bg-[hsl(var(--theme-light-purple))] disabled:text-white",
        purpleOutline:
          "border-2 border-[hsl(var(--theme-main1))] bg-[hsl(var(--background))] text-[hsl(var(--theme-main1))] hover:bg-[hsl(var(--theme-gray-200))]",
        gray: "bg-[#EEEFF6] border border-[#9CA3AF] text-[#2B0050] hover:bg-[#E2E4F0]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        auth: "h-[48px] w-full px-4",
        custom:
          "h-[48px] w-[191.5px] px-[16px] flex items-center justify-center",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={twMerge(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
