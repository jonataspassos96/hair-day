import React from 'react'

type InputDateProps = React.ComponentProps<'input'> & {
    selectedDate: string
    setSelectedDate: (date: string) => void
}

export const InputDate = React.forwardRef<HTMLInputElement, InputDateProps>(function InputDate({ className, selectedDate, setSelectedDate, ...props }, ref) {
    const today = new Date().toISOString().split('T')[0]

    return (
        <input
            ref={ref}
            className={
                `cursor-pointer w-full outline-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden font-sans text-base/6 font-normal text-gray-200 max-w-24
                 ${className || ''}`
            }
            min={today}
            type="date"
            value={selectedDate}
            onChange={e => setSelectedDate(e.target.value)}
            {...props}
        />
    )
})