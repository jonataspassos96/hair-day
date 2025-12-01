import useLocalStorage from "use-local-storage"

import { APPOINTMENT_KEY, type Appointment } from "../models/appointment"

interface Payload {
    date: string
    time: string
    client: string
}

export function useAppointments() {
    const [appointments, setAppointments] = useLocalStorage<Appointment[]>(APPOINTMENT_KEY, [])

    function addAppointment({ date, time, client }: Payload) {
        const datetime = new Date(`${date}T${time}Z`).toISOString()

        setAppointments([
            ...appointments,
            {
                id: new Date(datetime).getTime().toString(),
                client,
                datetime
            }
        ])
    }

    function deleteAppointment(id: string) {
        setAppointments(appointments.filter(appointment => appointment.id !== id))
    }

    return {
        appointments,
        addAppointment,
        deleteAppointment
    }
}