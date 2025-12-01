import Logo from "../assets/images/logo.svg?react"

import { AgendaForm } from "../core-components/agenda-form"
import { MySchedule } from "../core-components/my-schedule"

export function LayoutMain() {
    return (
        <main className="relative p-3 flex gap-3 flex-col md:flex-row max-w-360 mx-auto">
            <div className="py-3 px-5 bg-gray-600 rounded-br-xl absolute top-0 left-0">
                <Logo />
            </div>

            <AgendaForm />

            <MySchedule />
        </main>
    )
}