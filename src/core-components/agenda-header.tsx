import { DateField } from "./date-field"

interface AgendaHeaderProps {
    selectedDate: string
    setSelectedDate: (date: string) => void
}

export function AgendaHeader({ selectedDate, setSelectedDate }: AgendaHeaderProps) {
    return (
        <header className="flex justify-between gap-6">
            <div className="flex flex-col gap-1">
                <h2 className="font-sans text-2xl/8 font-bold text-gray-100">
                    Sua agenda
                </h2>
                <span className="font-sans text-sm/5 font-normal text-gray-300">
                    Consulte os seus cortes de cabelo agendados por dia
                </span>
            </div>

            <DateField selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        </header>
    )
}