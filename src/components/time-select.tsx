import { cva, type VariantProps } from "class-variance-authority";

const timeSelectVariants = cva('w-fit py-2 px-5 rounded-lg border transition-colors font-sans text-base/6 font-normal', {
    variants: {
        intent: {
            primary: 'hover:bg-gray-500 border-gray-500 bg-gray-600 cursor-pointer text-gray-200',
            secondary: 'hover:bg-gray-500 bg-gray-600 transition-colors cursor-pointer border-yellow pointer-events-none text-yellow-base'
        },
        disabled: {
            true: 'bg-transparent pointer-events-none border-gray-600 hover:bg-transparent text-gray-500'
        }
    },
    defaultVariants: {
        intent: 'primary',
        disabled: false
    }
})

interface TimeSelectProps extends Omit<React.ComponentProps<"label">, "disabled">, VariantProps<typeof timeSelectVariants> {
    setSelectedTime: (time: string) => void
    children: string
}

export function TimeSelect({ intent, disabled, className, children, setSelectedTime, ...props }: TimeSelectProps) {
    return (
        <label className={timeSelectVariants({ intent, disabled, className })} {...props} onClick={() => setSelectedTime(children)}>
            {children}
            <input className="hidden" type="radio" value={children} name="time" />
        </label>
    )
}