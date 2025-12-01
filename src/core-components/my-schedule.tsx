import { useState } from "react"
import { AgendaHeader } from "./agenda-header"
import { SchedulingSection } from "./scheduling-section"

export function MySchedule() {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])

    return (
        <div className="w-full py-20">
            <div className="mx-auto flex flex-col gap-8 max-w-170.5">
                <AgendaHeader selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                <div className="space-y-3">
                    <SchedulingSection selectedDate={selectedDate} />
                </div>
            </div>
        </div>
    )
}