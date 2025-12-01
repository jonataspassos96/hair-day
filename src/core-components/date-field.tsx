import React from "react"

import { InputDate } from "../components/input-date"

import { CalendarBlankIcon, CaretDownIcon } from "@phosphor-icons/react"

interface DateFieldProps {
  selectedDate: string
  setSelectedDate: (date: string) => void
}

export function DateField({ selectedDate, setSelectedDate }: DateFieldProps) {
  const inputRef = React.useRef<HTMLInputElement | null>(null)

  function openDatePicker() {
    const el = inputRef.current
    if (!el) return

    const maybePicker = (el as HTMLInputElement & { showPicker?: () => void }).showPicker

    if (typeof maybePicker === 'function') {
      maybePicker.call(el)
      return
    }

    el.focus()
  }

  return (
    <button
      type="button"
      onClick={openDatePicker}
      className='cursor-pointer focus-within:border-yellow-dark transition-colors p-3 rounded-xl border border-gray-500 flex items-center justify-center gap-2'
    >
      <CalendarBlankIcon size={20} className="text-yellow-base pointer-events-none" />
      <InputDate ref={inputRef} selectedDate={selectedDate} setSelectedDate={setSelectedDate} value={selectedDate} />
      <CaretDownIcon size={16} className="text-gray-300 ml-auto" />
    </button>
  )
}
