import { TimeSelect } from "../components/time-select"

import { useAppointments } from "../hooks/use-appointments"

import type { Period } from "../types/types"

export interface HoursFieldProps {
    selectedDate: string
    selectedTime: string
    setSelectedTime: (time: string) => void
}

const PERIODS: Period[] = ['Manhã', 'Tarde', 'Noite']
const HOURS_BY_PERIOD: Record<Period, string[]> = {
    'Manhã': ['09:00', '10:00', '11:00', '12:00'],
    'Tarde': ['13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
    'Noite': ['19:00', '20:00', '21:00']
}

export function HoursField({ setSelectedTime, selectedDate, selectedTime }: HoursFieldProps) {
    const { appointments } = useAppointments()

    return (
        <div className="flex flex-col gap-2">
            <span className="font-sans text-base/6 font-bold text-gray-200">Horários</span>

            <div className="space-y-3">
                {PERIODS.map((period) => (
                    <div key={period} className="flex flex-col gap-2">
                        <span className="font-sans text-base/6 font-normal text-gray-200">{period}</span>

                        <div className="flex flex-wrap items-center gap-2">
                            {HOURS_BY_PERIOD[period].map((hour) => (
                                selectedDate ? (
                                    <TimeSelect
                                        key={hour}
                                        setSelectedTime={setSelectedTime}
                                        intent={selectedTime === hour ? 'secondary' : 'primary'}
                                        disabled={appointments.some(appointment => appointment.datetime === `${selectedDate}T${hour}:00.000Z`)}
                                    >
                                        {hour}
                                    </TimeSelect>
                                ) : (
                                    <TimeSelect key={hour} disabled setSelectedTime={setSelectedTime}>{hour}</TimeSelect>
                                )))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}