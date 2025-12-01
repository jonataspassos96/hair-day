import { TrashIcon } from "@phosphor-icons/react"

import type { Appointment } from "../models/appointment"

import { useAppointments } from "../hooks/use-appointments"

export function Appointments({ appointments = [] }: { appointments: Appointment[] }) {
    const { deleteAppointment } = useAppointments()

    function handleDeleteAppointment(appointmentId: string) {
        deleteAppointment(appointmentId)
    }

    if (!appointments.length) {
        return (
            <ul className="flex flex-col p-5 gap-0.5">
                <span className="font-sans text-sm/5 font-normal text-gray-300">
                    Nenhum agendamento para este período
                </span>
            </ul>
        )
    }

    return (
        <ul className="flex flex-col p-5 gap-0.5">
            {appointments.map((appointment, index) => (
                <li key={`${appointment.datetime}-${index}`} className="flex items-center gap-5 py-1">
                    <span className="text-gray-200 font-sans text-base/6 font-bold">
                        {appointment.datetime}
                    </span>
                    <span className="text-gray-200 font-sans text-base/6 font-normal w-full">
                        {appointment.client}
                    </span>
                    <button
                        className="inline-flex items-center justify-center cursor-pointer group size-4 shrink-0 fill-yellow"
                        onClick={() => handleDeleteAppointment(appointment.id)}
                    >
                        <TrashIcon className="size-full fill-yellow-base group-hover:fill-yellow-dark transition-colors" />
                    </button>
                </li>
            ))}
        </ul>
    )
}