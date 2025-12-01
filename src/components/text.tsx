import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

const textVariants = cva("font-sans", {
    variants: {
        intent: {
            "text-sm": "text-sm leading-5 font-normal",
            "text-md": "text-lg leading-6 font-normal",
            "title-sm": "text-sm leading-5 font-bold",
            "title-md": "text-lg leading-6 font-bold",
            "title-lg": "text-3xl leading-6 font-bold",
        }
    },
    defaultVariants: {
        intent: "text-md"
    }
})

interface TextProps extends VariantProps<typeof textVariants> {
    as?: keyof React.JSX.IntrinsicElements
    className?: string
    children?: React.ReactNode
}

export function Text({
    as = "span",
    intent,
    className,
    children,
    ...props
}: TextProps) {
    return React.createElement(
        as,
        {
            className: textVariants({ intent, className}),
            ...props
        },
        children
    )
}