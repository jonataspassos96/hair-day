import { UserRectangleIcon } from "@phosphor-icons/react"

type InputFieldProps = {
    customerName: string
    setCustomerName: (name: string) => void
}

export function InputField({ customerName, setCustomerName }: InputFieldProps) {
    return (
        <label className="flex flex-col gap-2 w-full">
            <span className="font-sans text-base/6 font-bold text-gray-200">Cliente</span>

            <label className="has-focus:border-yellow-dark transition-colors p-3 rounded-xl border border-gray-500 flex items-center justify-center gap-2">
                <UserRectangleIcon size={20} className="text-yellow-base" />
                <input
                    className="font-sans text-base/6 font-normal w-full outline-none text-gray-200 placeholder:text-gray-400"
                    placeholder="Jonatas Passos"
                    onChange={e => setCustomerName(e.currentTarget.value)}
                    value={customerName}
                />
            </label>
        </label>
    )
}