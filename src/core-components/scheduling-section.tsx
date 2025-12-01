import { SunHorizonIcon } from "@phosphor-icons/react"
import { CloudSunIcon } from "@phosphor-icons/react"
import { MoonStarsIcon } from "@phosphor-icons/react"

import type { Period } from "../types/types"
import type { Appointment } from "../models/appointment"

import { useAppointments } from "../hooks/use-appointments"
import { Appointments } from "./appointments"

const PERIODS: Period[] = ['Manhã', 'Tarde', 'Noite']

const HOURS_BY_PERIOD: Record<Period, string> = {
    'Manhã': '9h-12h',
    'Tarde': '13h-18h',
    'Noite': '19h-21h'
}

function groupAppointmentsByPeriod(appointments: Appointment[]): Record<Period, Appointment[]> {
    const grouped: Record<Period, Appointment[]> = {
        'Manhã': [],
        'Tarde': [],
        'Noite': []
    }

    appointments.forEach(appointment => {
        const time = appointment.datetime.substring(11, 16) // HH:MM
        const hour = parseInt(time.split(':')[0], 10)

        let period: Period
        if (hour >= 9 && hour < 13) {
            period = 'Manhã'
        } else if (hour >= 13 && hour < 19) {
            period = 'Tarde'
        } else {
            period = 'Noite'
        }

        grouped[period].push({
            id: appointment.id,
            datetime: time,
            client: appointment.client
        })
    })

    return grouped
}

interface SchedulingSectionProps {
    selectedDate: string
}

export function SchedulingSection({ selectedDate }: SchedulingSectionProps) {
    const { appointments } = useAppointments()

    const filteredAppointments = selectedDate
        ? appointments.filter(appointment => {
            const appointmentDate = appointment.datetime.substring(0, 10) // YYYY-MM-DD
            return appointmentDate === selectedDate
        })
        : []

    const appointmentsByPeriod = groupAppointmentsByPeriod(filteredAppointments)

    return (
        <>
            {PERIODS.map((period) => {
                const Icon = period === 'Manhã'
                    ? SunHorizonIcon
                    : period === 'Tarde'
                        ? CloudSunIcon
                        : MoonStarsIcon

                return (
                    <section key={period} className="border rounded-lg border-gray-600">
                        <div className="px-5 py-3 flex items-center justify-between gap-6 border-b border-gray-600">
                            <div className="flex items-center gap-2">
                                <Icon className="fill-yellow-base size-5" />
                                <h3 className="font-sans text-sm/5 font-normal text-gray-300">
                                    {period}
                                </h3>
                            </div>
                            <span className="font-sans text-base/6 font-normal text-gray-400">
                                {HOURS_BY_PERIOD[period]}
                            </span>
                        </div>
                        <ul className="flex flex-col p-5 gap-0.5">
                            <Appointments appointments={appointmentsByPeriod[period]} />
                        </ul>
                    </section>
                )
            })}
        </>
    )
}