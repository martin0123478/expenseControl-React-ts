import { useMemo } from "react"
import { formatDate } from "../helpers"
import { Expense } from "../types"
import { AmountDisplay } from "./AmountDisplay"
import { categories } from "../data/categories"

type ExpenseDetailProp = {
    expense: Expense
}
export default function ExpenseDetail({ expense }: ExpenseDetailProp) {
    const expenseInfo = useMemo(() => categories.filter(cat => cat.id === expense.category)[0], [expense])
    return (
        <div className="bg-white shadow-lg p-10 w-full border-b border-gray-200 flex gap-5 items-center">
            <div>
                <img src={`/icono_${expenseInfo.icon}.svg`}
                    alt="icono_gasto"
                />
            </div>
            <div className="flex-1 space-y-2">
                <p className="text-sm font-bold uppercase text-slate-500">{expenseInfo.name}</p>
                <p>{expense.expenseName}</p>
                <p className="text-slate-600">{formatDate(expense.date!.toString())}</p>
            </div>
            <AmountDisplay
                amount={expense.amount}
            />
        </div>
    )
}
