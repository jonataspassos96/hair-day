import { useState } from "react"

import { useAppointments } from "../hooks/use-appointments"

import { DateField } from "./date-field"
import { HoursField } from "./hours-field"
import { InputField } from "./input-field"
import { Button } from "../components/button"

export function AgendaForm() {
    const [selectedDate, setSelectedDate] = useState('')
    const [selectedTime, setSelectedTime] = useState('')
    const [customerName, setCustomerName] = useState('')
    const { addAppointment } = useAppointments()

    function handleSaveAppointment(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        addAppointment({
            date: selectedDate,
            time: selectedTime,
            client: customerName
        })

        setSelectedDate('')
        setSelectedTime('')
        setCustomerName('')
    }

    return (
        <aside className="p-20 bg-gray-700 rounded-xl max-w-124.5 w-full flex flex-col gap-6">
            <div className="space-y-1 w-full">
                <h2 className="font-sans text-2xl/8 font-bold text-gray-100">
                    Agende um atendimento
                </h2>
                <span className="font-sans text-sm/5 font-normal text-gray-300">
                    Selecione data, horário e informe o nome do cliente para criar o agendamento
                </span>
            </div>

            <form onSubmit={handleSaveAppointment} className="space-y-8">
                <label className={'flex flex-col gap-2 w-full'}>
                    <span className="font-sans text-base/6 font-bold text-gray-200">Data</span>

                    <DateField selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                </label>

                <HoursField selectedDate={selectedDate} selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
                <InputField customerName={customerName} setCustomerName={setCustomerName} />
                {selectedDate && selectedTime && customerName ? (
                    <Button type="submit" className="w-full">
                        Agendar
                    </Button>
                ) : (
                    <Button type="submit" disabled>
                        Agendar
                    </Button>
                )}
            </form>
        </aside>
    )
}