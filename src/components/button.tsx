import { cva, type VariantProps } from "class-variance-authority"

import { Text } from "./text"

const buttonVariants = cva(
    `
        flex items-center justify-center cursor-pointer select-none 
        transition-colors rounded-lg
    `, {
    variants: {
        intent: {
            primary: "bg-yellow-base border-2 border-transparent hover:border-yellow-light"
        },
        size: {
            lg: "w-full py-4.5 px-6"
        },
        disabled: {
            true: "opacity-30 pointer-events-none",
        }
    },
    defaultVariants: {
        intent: "primary",
        size: "lg",
        disabled: false
    }
})

const buttonTextVariants = cva("", {
  variants: {
    intent: {
      primary: "text-gray-900 uppercase",
    },
  },
  defaultVariants: {
    intent: "primary",
  }
})

interface ButtonProps extends Omit<React.ComponentProps<"button">, "size" | "disabled">, VariantProps<typeof buttonVariants> {}

export function Button({
    intent,
    size,
    disabled,
    className,
    children,
    ...props
}: ButtonProps) {
    return (
        <button className={buttonVariants({ intent, size, disabled, className })} {...props}>
            <Text intent="title-sm" className={buttonTextVariants({ intent })}>
                {children}
            </Text>
        </button>
    )
}